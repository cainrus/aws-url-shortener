'use client'

import React from "react";
import Link from "next/link";
import { isURL } from 'validator';

function Home() {
  const [isURLValid, setIsURLValid] = React.useState(true);
  const [url, setURL] = React.useState<{ long: string; short: string } | null>(null);

  async function handleSubmit(formData: FormData): Promise<void> {
    const longUrl = formData.get("url") as string;

    if (!isURL(longUrl)) {
      setIsURLValid(false);
      return; // Ensure it explicitly returns void
    }

    try {
      const res = await fetch("/api/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: longUrl }),
      });

      const { data } = await res.json();
      const result = data.createURL;

      setIsURLValid(true);
      setURL(result);
    } catch (error) {
      console.error("Error creating short URL:", error);
    }
  }

  return (
      <main className="grid place-items-center h-screen">
        <div className="bg-cyan-900 w-full grid place-content-center py-20">
          <div>
            <h1 className="text-center text-4xl text-white">URL Shortener</h1>
            <div></div>
            <div className="w-96">
              <form
                  action={(formData) => handleSubmit(formData)}
                  className="relative mt-4"
              >
                <input
                    type="text"
                    name="url"
                    placeholder="Enter link here"
                    className={`block w-full rounded-md border-0 py-3 px-3 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none focus:ring-cyan-600 ${
                        !isURLValid && "focus:ring-red-600 ring-red-600"
                    }`}
                />
                <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                  <kbd
                      className="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400">
                    Enter
                  </kbd>
                </div>
              </form>
              {url && (
                  <div className="flex gap-4 mt-6 p-5 rounded-md border border-cyan-500 bg-cyan-50 items-center">
                    <p className="line-clamp-1">{url.long}</p>
                    <p className="text-cyan-700">
                      <Link href={`/${url.short}`}>
                        {location.host}/{url.short}
                      </Link>
                    </p>
                  </div>
              )}
            </div>
          </div>
        </div>
      </main>
  );
}

export default Home;
