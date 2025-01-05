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
      try {
        await navigator.clipboard.writeText(`${location.host}/${url.short}`);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000); // Reset success message after 2 seconds
      } catch (error) {
        console.error('Failed to copy:', error);
      }
    }
  }

  return (
      <main className="grid place-items-center h-screen">
        <div className="bg-cyan-900 w-full grid place-content-center py-20 px-6 sm:px-16 lg:px-32">
          <h1 className="text-center text-4xl text-white font-bold mb-6">URL Shortener</h1>
          <form
              action={(formData) => startTransition(() => handleSubmit(formData))}
              className="relative min-w-full max-w-lg"
          >
            <input
                type="text"
                name="url"
                placeholder="Enter link here"
                className={`block w-full rounded-md border py-3 px-3 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none ${
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
              <p className="text-red-600 mt-2 text-sm">Please enter a valid URL.</p>
          )}
          {url && (
              <div className="flex flex-col gap-2 mt-6 p-5 rounded-md border border-cyan-500 bg-cyan-50">
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
