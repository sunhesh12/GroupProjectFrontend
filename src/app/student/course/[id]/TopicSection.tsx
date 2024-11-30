"use client";

import React from "react";
import Image from "next/image";
import { MainTopic, Subtopic } from "./subtopics";
import style from "./couseId.module.css";
import RenderContent from "./RenderContent";

interface TopicSectionProps {
  mainTopic: MainTopic;
  openTopics: { [key: string]: boolean };
  toggleTopic: (topicId: string) => void;
}

const TopicSection: React.FC<TopicSectionProps> = ({
  mainTopic,
  openTopics,
  toggleTopic,
}) => {
  return (
    <div className={style.TopicContainer}>
      <div
        className={style.TopicHeading}
        onClick={() => toggleTopic(mainTopic.id)}
      >
        <div className={style.HeadTopic}>
          <h1>{mainTopic.title}</h1>
        </div>
        <button
          className="Button"
          aria-expanded={openTopics[mainTopic.id]}
          aria-label={`Toggle ${mainTopic.title}`}
        >
          <Image
            src={openTopics[mainTopic.id] ? "/up.png" : "/down.png"}
            alt={openTopics[mainTopic.id] ? "Collapse" : "Expand"}
            width={20}
            height={20}
          />
        </button>
      </div>
      {openTopics[mainTopic.id] && (
        <div className={style.SubtopicList}>
          {mainTopic.subtopics.map((subtopic: Subtopic) => (
            <div key={subtopic.id} className={style.Subtopic}>
              <RenderContent subtopic={subtopic} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopicSection;
