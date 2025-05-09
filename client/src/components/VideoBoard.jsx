import React from "react";

export default function VideoBoard() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/assets/videos/grunge-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-5xl font-bold">
          Welcome to Guitar's Geek
        </h1>
      </div>
    </div>
  );
}
