import { useEffect, useState } from "react";
import OurTeamCarousel from "./OurTeamCarousel";

const OurTeam = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch("teams.json")
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);
  return (
    <div className="mt-10 lg:mt-36" id="services">
      <p className="text-primary font-bold text-center mb-5">Team</p>
      <p className="text-4xl font-bold text-center mb-5">Meet Our Team</p>
      <p className="text-neutral text-center mb-5 mx-auto lg:w-[50%]">
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which do not look even slightly believable.{" "}
      </p>
      <div className="">
        <OurTeamCarousel teams={teams}></OurTeamCarousel>
      </div>
    </div>
  );
};

export default OurTeam;
