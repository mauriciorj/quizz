"use client";

import { useState, useEffect } from "react";

export default function LoadingBar({
  setProgressBarDone,
}: {
  setProgressBarDone: () => void | undefined;
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 4000; // 4 seconds
    const interval = 10; // Update every 10ms for smooth animation
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress(Math.min(100, Math.round((currentStep / steps) * 100)));

      if (currentStep >= steps) {
        clearInterval(timer);
      }
      // setProgressBarDone()
    }, interval);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) setProgressBarDone();
  }, [progress]);

  return (
    <div className="w-full flex items-center justify-center bg-gray-100">
      <div className="w-full">
        <div className="relative h-12 bg-gray-200 overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-pink transition-all duration-100 ease-out"
            style={{ width: `${10}%` }}
          ></div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <span className="text-sm font-semibold text-gray-700">
              {progress}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
