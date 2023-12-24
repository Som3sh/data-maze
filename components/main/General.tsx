import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { Rampart_One } from "next/font/google";

const rampart = Rampart_One({
  subsets: ["latin"],
  weight: "400",
});
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

        <div className="flex justify-center">
          <ol className="text-white font-semibold text-2xl font-Rampart  ">
            <li className="pb-9">
              {" "}
              Any student pursuing an undergraduate degree in Statistics and/or
              Computer Science can participate.
            </li>
            <li className="pb-9">
              All participants are required to get a permission letter from
              their respective institutions and ID cards to <br /> participate
              in the event.
            </li>
            <li className="pb-9">
              Participants are requested to register beforehand.
            </li>
            <li className="pb-9">
              Participants are expected to be in a formal dress code.
            </li>
            <li className="pb-9">
              Participants are requested to be present at the venue of their
              events 30 minutes before the event starts. <br /> If eliminated,
              participants are welcome to participate in other events, keeping
              the time constraints in mind.
            </li>
            <li className="pb-9">
              Participants can participate in more than one event
              simultaneously, given that they manage their <br /> event schedule
              accordingly.
            </li>
            <li className="pb-9">
              There will be no extra charges for the events - only a one-time
              registration fee.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default General;
