import React from "react";
import { useLoaderData } from "react-router-dom";
import Subscribe from "../shared/Subscribe/Subscribe";
import Content from "./components/Content";

const Blog = () => {
  const blogs = useLoaderData();
  return (
    <>
      <div className="mb-20">
        {blogs.map((item, index) => (
          <Content key={index} blog={item} />
        ))}
      </div>

      <Subscribe />
    </>
  );
};

export default Blog;
