import React from "react";

const Card = ({ image }) => {

    // const {id,download_url,author} = image
  return (
    <div>
      <img
        src={image.download_url}
        alt={image.author}
        className="w-full h-auto py-2"
      />
    </div>
  );
};

export default Card;
