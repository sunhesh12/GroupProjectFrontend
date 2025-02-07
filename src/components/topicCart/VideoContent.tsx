import React from "react";
import style from "./couseId.module.css";
import Link from "next/link";
import { FaYoutube, FaVimeo, FaPlay } from "react-icons/fa";

const getVideoPlatformIcon = (url: string) => {
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    return <FaYoutube style={{ color: "gray", marginRight: "8px" }} />;
  } else if (url.includes("vimeo.com")) {
    return <FaVimeo style={{ color: "gray", marginRight: "8px" }} />;
  }
  return <FaPlay style={{ color: "gray", marginRight: "8px" }} />;
};

interface VideoContentProps {
  subtopic: {
    title: string;
    description?: string;
    media: {
      video?: { url: string; type: "embed" | "youtube" | "vimeo" };
    };
  };
}

const VideoContent: React.FC<VideoContentProps> = ({ subtopic }) => {
  const video = subtopic.media.video;

  if (!video) {
    return null; // Handle the case where video is undefined
  }

  return (
    <div className={style.subtopicItem}>
      <div className={style.subtopicLine}></div>
      <div className={style.subtopicContent}>
        <h4>{subtopic.title}</h4>
        {subtopic.description}
        <div className={style.VideoWrapper}>
          <iframe
            src={video.url}
            title={`Video: ${subtopic.title}`}
            width="100%"
            height="auto"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <Link href={video.url} target="_blank">
          <div className={style.videoIcon}>
            {getVideoPlatformIcon(video.url)}
            {subtopic.description}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default VideoContent;
