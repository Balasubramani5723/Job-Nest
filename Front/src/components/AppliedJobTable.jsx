import {
  Table,
  TableHeader,
  TableCaption,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import React from "react";
import { useSelector } from "react-redux";

const AppliedJobTable = () => {
  const { allAppliedJobs } = useSelector((store) => store.job);
  return (
    <div>
      <div>
        <Table>
          <TableCaption>A list of your applied jobs</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Job Role</TableHead>
              <TableHead>Company</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allAppliedJobs.length === 0 ? (
              <span>You haven't applied for any jobs yet.</span>
            ) : (
              allAppliedJobs.map((appliedJob) =>
                appliedJob.job && appliedJob.job.company ? (
                  <TableRow key={appliedJob._id}>
                    <TableCell>
                      {appliedJob?.createdAt?.split("T")[0]}
                    </TableCell>
                    <TableCell>{appliedJob.job?.title}</TableCell>
                    <TableCell>{appliedJob.job?.company?.name}</TableCell>
                    <TableCell className="text-right">
                      <Badge
                        className={`${
                          appliedJob?.status === "rejected"
                            ? "bg-red-400"
                            : appliedJob.status === "pending"
                            ? "bg-gray-400"
                            : "bg-green-400"
                        }`}
                      >
                        {appliedJob.status.toUpperCase()}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ) : null
              )
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AppliedJobTable;
