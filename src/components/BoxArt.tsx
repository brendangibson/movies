import React from "react";

interface Props {
  url: string;
  title: string;
}

/**
 * Shows the box art for a movie
 */
const BoxArt = ({ url, title }: Props) => {
  return (
    <div>
      {url === "N/A" ? (
        <div className="bg-gray-400 m-1 p-1 absolute inset-0">{title}</div>
      ) : (
        <img src={url} alt={title} />
      )}
    </div>
  );
};

export default BoxArt;
