"use client";

import React from "react";
import Image from "next/image";
import style from "./couseId.module.css";
import Link from "next/link";
import { FaYoutube, FaVimeo, FaPlay } from "react-icons/fa";

interface RenderContentProps {
  subtopic: {
    id: string;
    title: string;
    description?: string;
    media: {
      image?: { url: string; altText?: string };
      video?: { url: string; type: "youtube" | "vimeo" | "embed" };
      pdf?: { url: string; size?: number };
      link?: { url: string; label: string };
    };
  };
}

// Get appropriate icon for the video platform
const getVideoPlatformIcon = (url: string) => {
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    return <FaYoutube style={{ color: "gray", marginRight: "8px" }} />;
  } else if (url.includes("vimeo.com")) {
    return <FaVimeo style={{ color: "gray", marginRight: "8px" }} />;
  }
  return <FaPlay style={{ color: "gray", marginRight: "8px" }} />; // Default icon
};

const RenderContent: React.FC<RenderContentProps> = ({ subtopic }) => {
  const handleDownload = (pdfUrl: string) => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = pdfUrl.split("/").pop() || "file.pdf";
    link.click();
  };

  if (subtopic.media.video) {
    return (
      <>
        <div className={style.subtopicItem}>
          <div className={style.subtopicLine}></div> {/* Vertical line */}
          <div className={style.subtopicContent}>
            <h4>{subtopic.title}</h4>
            {subtopic.description}

            {/* Video content */}
            <div className={style.VideoWrapper}>
              <iframe
                src={subtopic.media.video.url}
                title={`Video: ${subtopic.title}`}
                width="100%"
                height="auto"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video link icon and description */}
            <Link href={subtopic.media.video.url} target="_blank">
              <div className={style.videoIcon}>
                {getVideoPlatformIcon(subtopic.media.video.url)}
                {subtopic.description}
              </div>
            </Link>
          </div>
        </div>
      </>
    );
  } else if (subtopic.media.link) {
    return (
      <div className={style.subtopicItem}>
        <div className={style.subtopicLine}></div>
        <div className={style.LinkWrapper}>
          <h4>{subtopic.title}</h4>
          {subtopic.description}
          <Link
            href={subtopic.media.link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={style.LinkButton}
          >
            {subtopic.media.link.label || "Open Link"}
          </Link>
        </div>
      </div>
    );
  } else if (subtopic.media.pdf) {
    return (
      <div className={style.subtopicItem}>
        <div className={style.subtopicLine}></div>
        <div className={style.PdfWrapper}>
          <h4>{subtopic.title}</h4>
          <p
            onClick={() =>
              subtopic.media.pdf && handleDownload(subtopic.media.pdf.url)
            }
            className={style.Downloadpdf}
          >
            {subtopic.description}
          </p>
          <button
            onClick={() =>
              subtopic.media.pdf && handleDownload(subtopic.media.pdf.url)
            }
            className={style.DownloadButton}
          >
            <u>Start Download</u>
          </button>
        </div>
      </div>
    );
  } else if (subtopic.media.image) {
    return (
      <>
        <div className={style.subtopicItem}>
          <div className={style.subtopicLine}></div> {/* Vertical line */}
          <div className={style.subtopicContent}>
            <h4>{subtopic.title}</h4>
            {subtopic.description}
            <div className={style.ImageWrapper}>
              <Image
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
                src={subtopic.media.image.url}
                alt={subtopic.media.image.altText || `Image: ${subtopic.title}`}
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <p>{subtopic.description}</p>;
  }
};

export default RenderContent;
