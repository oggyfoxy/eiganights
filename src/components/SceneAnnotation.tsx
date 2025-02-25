import React from 'react';

interface SceneAnnotationProps {
  startTime: string;
  endTime: string;
  content: string;
  username: string;
  date: string;
}

const SceneAnnotation: React.FC<SceneAnnotationProps> = ({ 
  startTime, 
  endTime, 
  content, 
  username, 
  date 
}) => {
  return (
    <div className="scene-card">
      <div className="scene-timestamp">{startTime} - {endTime}</div>
      <div className="scene-annotation">{content}</div>
      <div className="flex space-between mt-20">
        <div>user: {username}</div>
        <div>{date}</div>
      </div>
    </div>
  );
};

export default SceneAnnotation;
