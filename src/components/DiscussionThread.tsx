import React from 'react';

interface DiscussionThreadProps {
  author: string;
  date: string;
  content: string;
}

const DiscussionThread: React.FC<DiscussionThreadProps> = ({ author, date, content }) => {
  return (
    <div className="discussion-thread">
      <div className="flex space-between">
        <div className="discussion-author">{author}</div>
        <div className="discussion-date">{date}</div>
      </div>
      <div className="discussion-content">{content}</div>
    </div>
  );
};

export default DiscussionThread;
