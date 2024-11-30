"use client";

import React from "react";
import Image from "next/image";
import style from "./couseId.module.css";
import Link from "next/link";

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
        <h4>{subtopic.title}</h4>
        <div className={style.VideoWrapper}>
          <iframe
            src={subtopic.media.video.url}
            title={`Video: ${subtopic.title}`}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </>
    );
  } else if (subtopic.media.link) {
    return (
      <div className={style.LinkWrapper}>
        <h4>{subtopic.title}</h4>
        <Link
          href={subtopic.media.link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={style.LinkButton}
        >
          {subtopic.media.link.url || "Open Link"}{" "}
        </Link>
      </div>
    );
  } else if (subtopic.media.pdf) {
    return (
      <div className={style.PdfWrapper}>
        <h4>{subtopic.title}</h4>
        <button
          onClick={() =>
            subtopic.media.pdf && handleDownload(subtopic.media.pdf.url)
          }
          className={style.DownloadButton}
        >
          <u>Start Download</u>
        </button>
      </div>
    );
  } else if (subtopic.media.image) {
    return (
      <>
        <h4>{subtopic.title}</h4>
        <div className={style.ImageWrapper}>
          <Image
            style={{ width: "100%", height: "100%" }}
            src={subtopic.media.image.url}
            alt={subtopic.media.image.altText || `Image: ${subtopic.title}`}
            width={50}
            height={50}
          />
        </div>
      </>
    );
  } else {
    return <p>{subtopic.description}</p>;
  }
};

export default RenderContent;
