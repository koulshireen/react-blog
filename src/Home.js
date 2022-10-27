const Home = () => {
  const handleClick = (event) => {
    console.log("Hello, Bloggers!!", event.target);
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}> Click me </button>
    </div>
  );
};

export default Home;
