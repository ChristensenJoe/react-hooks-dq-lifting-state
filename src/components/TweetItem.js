import React, {useState} from "react";

function TweetItem(props) {
  const [likedAmount, setLikedAmount] = useState(props.tweet.favorite_count);
  const [isActive, setIsActive] = useState(false);

  function handleLikeOnClick(event) {
    if(isActive) {
      setLikedAmount((likedAmount => likedAmount-1))
      setIsActive(false);
    }
    else {
      setLikedAmount((likedAmount => likedAmount+1))
      setIsActive(true);
    }
  }

  return (
    <div className="event">
      <div className="label">
        <img alt="CoffeeDad" src={props.photo} />
      </div>
      <div className="content">
        <div className="summary">
          {props.handle}
          <div className="date">{props.tweet.created_at}</div>
        </div>
        <div className="extra text">{props.tweet.text}</div>
        <div className="meta">
          <button
            onClick={handleLikeOnClick}
            className={isActive ? "ui tiny basic labeled icon like button active" : "ui tiny basic labeled icon like button"}
          >
            <i className="like icon"></i> {likedAmount} Likes
          </button>
        </div>
      </div>
    </div>
  );
}

export default TweetItem;
