"use client";

import { useEffect, useState } from "react";

export default function ProgressBarWithCursor() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoaded2, setIsLoaded2] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(() => {
      setIsLoaded2(true);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {!isLoaded ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : (
        <div className="space-y-4">
          <div className="relative h-4 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-full overflow-visible">
            <div
              className={`transition-all duration-1000 ${
                isLoaded2 ? "left-[50%]" : "left-[0%]"
              } absolute top-1/2 h-0 flex items-center justify-end`}
            >
              <div className="relative">
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 bg-black text-white text-xs font-bold py-1 px-2 rounded">
                  here
                </div>
                <div className="w-6 h-6 bg-white rounded-full border-4 border-gray-800 shadow-md transform -translate-y-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
