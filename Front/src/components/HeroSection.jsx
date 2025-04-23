import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "../redux/jobSlice";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => { 
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#6a38c2] font-medium">
          Welcome To Job Hunt Website
        </span>
        <h1 className="text-5xl font-bold">
          Search, Apply & <br /> Get Your{" "}
          <span className="bg-gradient-to-l from-[#7d469d]  to-[#ff0076] text-transparent bg-clip-text">Dream Jobs</span>
        </h1>
        <p className="">
        The Job Portal is a web application that connects students (job seekers) with recruiters (employers). <br /> Recruiters can post job listings, while students can browse jobs, apply, and track their applications. <br /> The platform includes user authentication, job filtering, and an admin panel for managing companies and job postings.
        </p>
        <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
          <input
            type="text"
            placeholder="Find your dream jobs"
            onChange={(e) => setQuery(e.target.value)}
            className="outline-none border-none w-full"
          />
          <Button
            onClick={searchJobHandler}
            className="rounded-r-full bg-gradient-to-l from-[#7d469d]  to-[#ff0076] hover:from-[#7d469d]  hover:to-[#ff0076] transition duration-300"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
