'use client';

import React, { useTransition, useState } from 'react';
import { isURL } from 'validator';

export default function Home() {
  const [isPending, startTransition] = useTransition();
  const [isURLValid, setIsURLValid] = useState(true);
  const [url, setURL] = useState<{ short: string; long: string } | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);

  async function handleSubmit(formData: FormData) {
    const longUrl = formData.get('url') as string;

    if (!isURL(longUrl)) {
      setIsURLValid(false);
      return;
    }

    setIsURLValid(true);

    try {
      const res = await fetch('/api/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: longUrl }),
      });

      const { data } = await res.json();
      setURL({ short: data.createURL.short, long: data.createURL.long });
    } catch (error) {
      console.error('Error creating URL:', error);
    }
  }

  async function handleCopy() {
    if (url) {
      const textToCopy = `${location.host}/${url.short}`;
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          // Use Clipboard API if available
          await navigator.clipboard.writeText(textToCopy);
        } else {
          // Fallback for older browsers or restricted environments
          const tempInput = document.createElement('textarea');
          tempInput.value = textToCopy;
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
        }
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000); // Reset success message after 2 seconds
      } catch (error) {
        console.error('Failed to copy:', error);
      }
    }
  }


  return (
      <main className="min-h-screen flex items-start sm:items-center justify-center bg-cyan-900">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 sm:p-8">
        <h1 className="text-center text-2xl sm:text-3xl font-bold text-cyan-800 mb-6">
            URL Shortener
          </h1>
          <form
              action={(formData) => startTransition(() => handleSubmit(formData))}
              className="relative w-full"
          >
            <input
                type="text"
                name="url"
                placeholder="Enter link here"
                className={`block w-full rounded-md border py-2 px-3 sm:py-3 sm:pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none ${
                    isURLValid
                        ? 'focus:ring-cyan-600 border-gray-300'
                        : 'focus:ring-red-600 border-red-600 ring-red-600'
                }`}
            />
            <button
                type="submit"
                className={`absolute inset-y-0 right-0 py-1.5 px-3 text-white font-semibold rounded-md ${
                    isPending
                        ? 'bg-cyan-400 cursor-not-allowed'
                        : 'bg-cyan-600 hover:bg-cyan-700'
                }`}
                disabled={isPending}
            >
              {isPending ? 'Submitting...' : 'Submit'}
            </button>
          </form>
          {!isURLValid && (
              <p className="text-red-600 mt-2 text-sm text-center">
                Please enter a valid URL.
              </p>
          )}
          {url && (
              <div className="mt-6 p-4 rounded-md border border-cyan-500 bg-cyan-50">
                <div className="flex items-center justify-between">
                  <p className="text-cyan-700 font-semibold">
                    <a
                        href={`/${url.short}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-cyan-800"
                    >
                      {location.host}/{url.short}
                    </a>
                  </p>
                  <button
                      onClick={handleCopy}
                      className="text-cyan-700 bg-cyan-100 hover:bg-cyan-200 p-2 rounded-md font-medium text-sm"
                  >
                    {copySuccess ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <p className="text-gray-700 line-clamp-1">{url.long}</p>
              </div>
          )}
        </div>
      </main>
  );
}
