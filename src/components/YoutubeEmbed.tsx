import React from "react";

type YoutubeEmbedProps = {
  videoId: string;
  title?: string;
  privacy?: boolean; // usa youtube-nocookie se true
};

export default function YoutubeEmbed({ videoId, title = "YouTube video", privacy = true }: YoutubeEmbedProps) {
  const base = privacy ? "https://www.youtube-nocookie.com/embed/" : "https://www.youtube.com/embed/";
  const src = `${base}${videoId}?rel=0&modestbranding=1`;

  return (
    <div style={{ aspectRatio: "16/9", width: "100%" }}>
      <iframe
       className="rounded-xl"
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
