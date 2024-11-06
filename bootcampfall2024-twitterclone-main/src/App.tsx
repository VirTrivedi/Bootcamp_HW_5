// App.js
import Tweet from './tweet';
import { tweetsData } from './data';

/* Do not write your tweet component here, write it in the tweet.tsx file */

function App() {
  return (
    <div className="app">
      <h1>Twitter Clone</h1>
      <div className="feed">
        {tweetsData.map((tweet, index) => (
          <Tweet 
          key={index}
          username={tweet.username}
          content={tweet.content}
          timeStamp={tweet.timestamp}
          initialLikes={tweet.likes}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
