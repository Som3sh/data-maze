import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Schedule = () => {
  return (
    <section id="schedule">
      <div
        className="flex flex-col items-center justify-center py-20"
        id="projects"
      >
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-300 py-20">
          Schedule
        </h1>
        {/* <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10"></div> */}
        <img src="/9.png" alt="" />
      </div>
    </section>
  );
};

export default Schedule;
