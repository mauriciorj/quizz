'use client'

import React, { useState, useEffect } from 'react'

const phrases = [
  "Welcome to our quiz!",
  "Are you ready to test your knowledge?",
  "Let's see how much you know!",
  "Good luck and have fun!"
]

export default function PhraseFader() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length)
        setIsVisible(true)
      }, 1000) // Wait for fade out before changing phrase
    }, 3000) // Change phrase every 3 seconds

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div 
        className={`text-3xl font-bold text-center transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {phrases[currentPhraseIndex]}
      </div>
    </div>
  )
}