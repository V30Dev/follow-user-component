import { useState } from "react";
import "./App.css";

interface props {
  name: string;
  userName: string;
  initialIsFollowing: boolean;
}

const TwitterCard = ({ name, userName, initialIsFollowing }: props) => {
  const [isFollowed, setIsFollowed] = useState(initialIsFollowing);
  const [hover, setHover] = useState(false);

  const handleFollow = () => {
    setIsFollowed(!isFollowed);
  };

  return (
    <article className="follow-card">
      <header>
        <img alt="ombe avatar" src={`https://unavatar.io/x/${userName}`} />
        <div>
          <strong>{name}</strong>
          <span>@{userName}</span>
        </div>
      </header>

      <aside>
        <button
          className={isFollowed ? "followed" : ""}
          onClick={handleFollow}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {isFollowed && hover
            ? "Unfollow"
            : isFollowed
            ? "Following"
            : "Follow"}
        </button>
      </aside>
    </article>
  );
};

export default TwitterCard;
