// components/Loading.tsx
"use client"
import React from "react"

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="w-10 h-10 border-4 border-light-green border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
}

export default Loading