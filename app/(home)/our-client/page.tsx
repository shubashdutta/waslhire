import ClientsPage from "@/src/components/website/pages/ClientPage";
import { apiGet } from "@/src/lib/apiGet";
import React from "react";

const ClinetRouter = async () => {
  const res: any = await apiGet("client");
  return <ClientsPage res={res} />;
};

export default ClinetRouter;
