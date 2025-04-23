import axios from "axios";
import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { JOB_API_END_POINT } from "../utils/constant";
import { setAllAdminJobs } from "../redux/jobSlice";

const useGetAllAdminJobs = () => {
  const dispatch = useDispatch();

  const fetchAllAdminJobs = useCallback(async () => {
    try {
      const res = await axios.get(`${JOB_API_END_POINT}/getadminjobs`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setAllAdminJobs(res.data.jobs));
      }
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchAllAdminJobs();
  }, [fetchAllAdminJobs]);

  return fetchAllAdminJobs; 
};

export default useGetAllAdminJobs;
