import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum", author: "Shireen", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum", author: "Koul", id: 2 },
    { title: "The summit!", body: "lorem ipsum", author: "Shireen", id: 3 },
  ]);
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs!!" />
    </div>
  );
};

export default Home;
