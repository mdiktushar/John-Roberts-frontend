import React from "react";
import { useLoaderData } from "react-router-dom";
import Subscribe from "../shared/Subscribe/Subscribe";
import Content from "./components/Content";

const Blog = () => {
  const blogs = useLoaderData();
  return (
    <>
      <div className="flex flex-col gap-1 my-1">
        {blogs.map((item, index) => (
          <Content key={index} blog={item} />
        ))}
      </div>

      <Subscribe />
    </>
  );
};

export default Blog;
