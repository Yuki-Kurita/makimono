import React from "react";

interface PostProps {
  title: string;
  publisher: string;
  publishedAt: string;
  like: number;
  type: string;
  category: string;
}

const Post: React.FC<PostProps> = ({
  title,
  publisher,
  publishedAt,
  like,
  type,
  category,
}) => {
  return (
    <article className="shadow-lg bg-white mb-3 w-8/12 h-6">
      <h2>{title}</h2>
    </article>
  );
};

export default Post;
