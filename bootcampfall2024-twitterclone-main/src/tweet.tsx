// Tweet.js
import React, { useState } from 'react';

/* 
Create a new componnet called 'Tweet' make sure to pass down all the props you will need.
You will also need to use 'useState' for two variables. Then you want to create an event
handler for when the user clicks 'like'. You can ue whatever h1s or h2s or HTML elements that 
you want for your tweet, just make sure all the information from the screenshot I sent is there.
Also, if the post isn't liked already, then you want to display a white heart "🤍" otherwise, 
display a red heart "❤️" make sure to increase or decrease the like counter appropriately.
Theres a 'tweet' class you can use to style your tweet.
*/

interface TweetProps {
  username: string;
  content: string;
  initialLikes: number;
  timeStamp: string;
}

const Tweet: React.FC<TweetProps> = ({ username, content, initialLikes, timeStamp }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(initialLikes);

  const handleLikeClick = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
      setIsLiked(false);
    } else {
      setLikeCount(likeCount + 1);
      setIsLiked(true);
    }
  };

  return (
    <div className="tweet">
      <h2>@{username}</h2>
      <p>{content}</p>
      <p>{timeStamp}</p>
      <div className="tweet-footer">
        <button onClick={handleLikeClick}>
          {isLiked ? "❤️" : "🤍"}
        </button>
        <span>{likeCount} Likes</span>
      </div>
    </div>
  );
};

export default Tweet;

// export default Tweet;
