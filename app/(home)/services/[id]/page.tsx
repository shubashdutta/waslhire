"use client";

import ServicesDetailsPage from "@/src/components/website/pages/ServicesDetailsPage";
import { apiGet } from "@/src/lib/apiGet";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const ServicesDetailsRouter = () => {
  const pathName = usePathname();
  const endpoint = pathName.replace(/^\/services/, "service");

  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const res: any = await apiGet(endpoint);
        setApiData(res?.data?.data);
      } catch (error) {
        console.error("Failed to fetch service details:", error);
      }
    };

    if (endpoint) {
      fetchServiceDetails();
    }
  }, [endpoint]);

  return <ServicesDetailsPage Data={apiData} />;
};

export default ServicesDetailsRouter;
