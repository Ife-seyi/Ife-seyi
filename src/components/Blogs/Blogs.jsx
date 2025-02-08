// eslint-disable-next-line no-unused-vars
import React from "react";
import Heading from "../Shared/Heading";
import Img1 from "../../assets/blogs/blog-1.jpg";
import Img2 from "../../assets/blogs/blog-2.jpg";
import Img3 from "../../assets/blogs/blog-3.jpg";

const BlogData = [
  {
    title: "How to choose perfect smartwatch",
    subtitle:
      "A complete guide to finding a smartwatch that fits your lifestyle, whether for fitness, productivity, or style.",
    published: "Jan 20, 2024 by techies",
    image: Img1,
    aosDelay: "0",
  },

  {
    title: "How to choose perfect gadget",
    subtitle:
      "From specs to features, here’s how to pick a gadget that matches your needs without overspending.",
    published: "Jan 20, 2024 by NuziGadgets",
    image: Img2,
    aosDelay: "200",
  },
  {
    title: "How to choose perfect VR headset",
    subtitle:
      "Explore key factors like resolution, tracking, and comfort to find the best VR headset for your experience.",
    published: "Jan 20, 2024 by Kays Hub",
    image: Img3,
    aosDelay: "400",
  },
];
const Blogs = () => {
  return (
    <div className="my-20">
      <div className="container">
        {/* Header section */}
        <Heading title="Recent News" subtitle="Explore Our Blogs" />

        {/* Blog section */}
        <div
          className="grid grid-cols-1 sm:geid-cols-2
                md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7"
        >
          {/* Blog card */}
          {BlogData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.title}
              className="bg-white
                            dark:bg-gray-900"
            >
              {/* image section */}
              <div className="overflow-hidden rounded-2xl mb-2">
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-[220px] object-cover 
                                    rounded-2xl hover:scale-105 duration-500"
                />
              </div>
              {/* content section */}
              <div className="space-y-2">
                <p className="text-xs text-gray-500">{data.published}</p>
                <p className="font-bold line-clamp-1">{data.title}</p>
                <p
                  className="line-clamp-2 text-sm text-gray-600
                                    dark:text-gray-400"
                >
                  {data.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
