"use client";

import { useState, useEffect } from "react";
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { week: 1, weight: 70 },
  { week: 2, weight: 67 },
  { week: 3, weight: 63 },
  { week: 4, weight: 60 },
];

export default function WeightLossChart() {
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    const animationDuration = 2000; // 2 seconds
    const interval = 20; // Update every 20ms for smooth animation
    const steps = animationDuration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setAnimationProgress(Math.min(1, currentStep / steps));

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Weight Loss Progress</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="week"
              label={{ value: "Week", position: "insideBottom", offset: -5 }}
            />
            <YAxis
              domain={[60, 70]}
              label={{
                value: "Weight (kg)",
                angle: -90,
                position: "insideLeft",
                offset: 15,
              }}
            />
            <Tooltip />
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="100%" y2="0">
                <stop offset="0%" stopColor="red" />
                <stop offset="100%" stopColor="blue" />
              </linearGradient>
            </defs>
            <Line
              type="monotone"
              dataKey="weight"
              stroke="url(#colorGradient)"
              strokeWidth={2}
              dot={false}
              strokeDasharray={`${animationProgress * 1000} 1000`}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
