import "./App.css";
import TwitterCard from "./TwitterCard";

const App = () => {
  const users = [
    {
      userName: "midudev",
      name: "Miguel Ángel Durán",
      isFollowing: true,
    },
    {
      userName: "Bluuweb",
      name: "Bluuweb",
      isFollowing: true,
    },
    {
      userName: "FaztTech",
      name: "Fazt",
      isFollowing: false,
    },
  ];

  return (
    <main>
      <h1>Follow User Component</h1>

      <section className="follow-cards-container">
        {users.map((user) => (
          <TwitterCard
            key={user.userName}
            name={user.name}
            userName={user.userName}
            initialIsFollowing={user.isFollowing}
          />
        ))}
      </section>
    </main>
  );
};

export default App;
