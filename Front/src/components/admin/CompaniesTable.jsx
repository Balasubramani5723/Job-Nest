import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableHead,
  TableCaption,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
} from "../ui/table";
import React, { useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useGetAllAdminJobs from "../../hooks/useGetAllAdminJobs";

const CompaniesTable = () => {
  const fetchAllAdminJobs = useGetAllAdminJobs();
  const { companies, searchCompanyByText } = useSelector((store) => store.company); 
  const [filterCompany, setFilterCompany] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!companies) return;

    const filteredCompanies = companies.filter((company) => {
      if (!searchCompanyByText) {
        return true; 
      }
      return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase());
    });

    setFilterCompany(filteredCompanies);
  }, [companies, searchCompanyByText]);

  return (
    <div>
      <Table>
        <TableCaption>A list of your recently registered companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterCompany.length > 0 ? (
            filterCompany.map((company) => (
              <TableRow key={company._id}>
                <TableCell>
                  <Avatar>
                    <AvatarImage src={company.logo} />
                  </Avatar>
                </TableCell>
                <TableCell>{company.name}</TableCell>
                <TableCell>{company.createdAt.split("T")[0]}</TableCell>
                <TableCell className="text-right cursor-pointer">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal />
                    </PopoverTrigger>
                    <PopoverContent className="w-32">
                      <div onClick={() => navigate(`/admin/companies/${company._id}`)} className="flex items-center gap-2 w-fit cursor-pointer">
                        <Edit2 className="w-4" />
                        <span>Edit</span>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan="4" className="text-center">
                No companies found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
