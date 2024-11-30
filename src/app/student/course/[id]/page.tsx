"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { topics, MainTopic } from "./subtopics";
import TopicSection from "./TopicSection";
import style from "./couseId.module.css";

interface PageProps {
  params: { id: string | undefined }; // Allow undefined to be handled properly
}

const CoursePage: React.FC<PageProps> = ({ params }) => {
  const [decodedId, setDecodedId] = useState<string | null>(null);
  const [openTopics, setOpenTopics] = useState<{ [key: string]: boolean }>({});
  const router = useRouter();

  const decodedIdParam = params?.id ?? ''; // Ensure `params` is not undefined and `id` exists

  useEffect(() => {
    if (decodedIdParam) {
      const decoded = decodeURIComponent(decodedIdParam);
      setDecodedId(decoded);
    }

    const savedStates = localStorage.getItem("openTopicsState");
    if (savedStates) {
      setOpenTopics(JSON.parse(savedStates));
    } else {
      const initialState = topics.reduce(
        (acc, topic) => ({ ...acc, [topic.id]: false }),
        {}
      );
      setOpenTopics(initialState);
    }
  }, [decodedIdParam]);

  const toggleTopic = (topicId: string) => {
    const updatedState = { ...openTopics, [topicId]: !openTopics[topicId] };
    setOpenTopics(updatedState);
    localStorage.setItem("openTopicsState", JSON.stringify(updatedState));
  };

  if (!decodedId) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={style.MainWrapper}>
        <button
          onClick={() => router.back()}
          className={style.BackButton}
          aria-label="Go Back"
        >
          Go Back
        </button>
      </div>

      <div className={style.MainWrapper}>
        <h1>{decodedId}</h1>
        <div className={style.container}>
          {topics.map((mainTopic: MainTopic) => (
            <TopicSection
              key={mainTopic.id}
              mainTopic={mainTopic}
              openTopics={openTopics}
              toggleTopic={toggleTopic}
            />
          ))}
        </div>
        <div style={{width:"100%" , height:"200px"}}></div>
      </div>
    </>
  );
};

export default CoursePage;
