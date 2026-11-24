import JobsPage from "@/src/components/website/pages/JobsPage";
import { apiGet } from "@/src/lib/apiGet";
import React from "react";

const JobsRouters = async () => {
  const res: any = await apiGet("vacancy");
  return <JobsPage apiRes={res?.data?.data} />;
};

export default JobsRouters;
