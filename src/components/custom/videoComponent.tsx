"use client";
import ReactPlayer from "react-player";

export default function VideoComponent({url}:{url:string}) {
  return (
      <ReactPlayer
        url={url}
        height="auto"
        controls
      />
  );
}