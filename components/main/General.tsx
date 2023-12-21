import React from "react";
import ProjectCard from "../sub/ProjectCard";

const General = () => {
  return (
    <section id="general">
      <div
        className="flex flex-col items-center justify-center py-20"
        id="projects"
      >
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          General Information
        </h1>
        {/* <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10"></div> */}
        <img src="/general-info.png" alt="" />
      </div>
    </section>
  );
};

export default General;
