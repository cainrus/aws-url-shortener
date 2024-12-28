'use client'

import {isObject, useFetch} from "@/shared/utils";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import { isURL } from 'validator';

function Home() {
  const [isURLValid, setIsURLValid] = React.useState(true);
  const [url, setURL] = React.useState({ long: "", short: "" });



  interface SubmitUrlResult {
    data: {
      createURL: {
        long: string;
      }
    }
  }

  function useSubmitUrl(payload: string): {
      fetchData(options?: RequestInit): void;
      result: null | string;
  } {
    const [result, setResult] = useState<string | null>(null)

    const result = useFetch<{data: {createURL: {long: string}}}>("/api/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const fullUrl = result.data?.data.createURL.long;
    if (typeof fullUrl !== 'string' || !fullUrl) {
      throw new Error('Invalid url');
    }

    return {
      fetchData: result.fetchData,
      body: JSON.stringify({url: payload}),
    }

    return fullUrl;
  }

  return (
      <main className="grid place-items-center h-screen">
        <div className="bg-cyan-900 w-full grid place-content-center py-20">
          <div>
            <h1 className="text-center text-4xl text-white">URL Shortener</h1>
            <div></div>
            <div className="w w-96">
              <div className="relative mt-4">
                {/* Update input element to match the following */}
                <input
                    type="text"
                    name="search"
                    placeholder="Enter link here"
                    id="search"
                    className={`block w-full rounded-md border-0 py-3 px-3 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none focus:ring-cyan-600 ${
                        !isURLValid && "focus:ring-red-600 ring-red-600"
                    } `}
                    onKeyUp={async (e) => {
                      if (e.key === "Enter") {
                        if ('value' in e.target
                            && typeof e.target.value === 'string'
                            && isURL(e.target.value)) {
                          const longUrl = e.target.value;
                          setIsURLValid(true);
                          const long = useSubmitUrl(longUrl);
                          setURL({ ...all, long });

                        } else {
                          setIsURLValid(false);
                        }
                      }
                    }}
                />
                <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                  <kbd className="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400">
                    Enter
                  </kbd>
                </div>
              </div>
              {url.short.length > 0 && (
                  <div className="flex gap-4 mt-6 p-5 rounded-md border border-cyan-500 bg-cyan-50 items-center">
                    <p className="line-clamp-1">{url.long}</p>
                    <p className="text-cyan-700">
                      <Link href={`/${url.short}`}> {location.host}/{url.short}</Link>
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
