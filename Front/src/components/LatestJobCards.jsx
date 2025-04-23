import { Badge } from "@/components/ui/badge"
import React from "react";
import { useNavigate } from "react-router-dom";

const LatestJobCards = ({job}) => {
  const navigate = useNavigate();
  return (
    <div 
    onClick={() => navigate(`/description/${job._id}`)} 
    className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-4 sm:p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer"
  >
    <div>
      <h1 className="font-medium text-lg text-center sm:text-left">{job?.company?.name}</h1>
      <p className="text-sm text-gray-700 text-center sm:text-left">India</p>
    </div>
    <div>
      <h1 className="font-bold text-lg my-2 text-center sm:text-left">{job?.title}</h1>
      <p className="text-sm text-gray-800 text-center sm:text-left">
        {job?.description}
      </p>
    </div>
    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-4">
      <Badge className="text-blue-700 font-bold" variant="ghost">{job?.position} Positions</Badge>
      <Badge className="text-[#6a38c2] font-bold" variant="ghost">{job?.jobType}</Badge>
      <Badge className="text-[#f83002] font-bold" variant="ghost">{job?.salary} LPA</Badge>
    </div>
  </div>
  
  );
};

export default LatestJobCards;
