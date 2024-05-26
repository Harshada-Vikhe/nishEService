import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { blogData } from "../utils/blogData";
import BlogCard from "../Components/BlogCard";

const Blog = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  
  const blogInfo= blogData.map((data)=>(
    <BlogCard img={data.img} title={data.title} desc={data.desc} />
  ))

  return (
    <div className="h-screen">
      <h1 className="mt-10 text-3xl font-bold flex flex-col gap-8 items-center">Consultancy Service</h1>
      <Carousel responsive={responsive}>
        {blogInfo}
      </Carousel>
      ;
    </div>
  );
};

export default Blog;
