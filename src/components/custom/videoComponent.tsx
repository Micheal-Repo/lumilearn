"use client";
import ReactPlayer from "react-player";

export default function VideoComponent({url}:{url:string}) {
  return (
      <ReactPlayer
        url={url}
        width="100%"
        height="auto"
        controls
      />
  );
}