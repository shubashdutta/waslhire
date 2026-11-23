"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Breadcrumb, Space } from "antd";
import { DollarSign, MapPin, Package, Users, Clock, CheckCircle, Heart } from "lucide-react";
import {
  Form,
  Input,
  InputTextArea,
  Select,
  Button,
  message,
} from "antd";

import ApplyJobs from "./ApplyJobs";

const { Option } = Select;
const { TextArea } = InputTextArea;

// =====================
// TypeScript Interfaces
// =====================

interface JobDetailData {
  id: number;
  title: string;
  category: string;
  country: string;
  vacancies: string;
  salary: string;
  type: string;
  deadline: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  skills: string[];
  benefits: string[];
}

// Mock data for an international GCC recruitment role
const MOCK_JOB: JobDetailData = {
  id: 1,
  title: "Housekeeping Staff",
  category: "Hospitality & Tourism",
  country: "Saudi Arabia",
  vacancies: "15 seats available",
  salary: "SAR 1,100 – SAR 1,300",
  type: "Full Time",
  deadline: "Mar 30, 2026",
  description:
    "Synnet International Pvt. Ltd. is seeking dedicated housekeeping staff for hotels and resorts in the UAE & GCC. Selected candidates will be responsible for cleaning guest rooms, public areas, and maintaining high hygiene standards.",
  responsibilities: [
    "Clean and sanitize guest rooms, bathrooms, and public areas according to established standards",
    "Change bed linens and make beds daily for hotel guests",
    "Report any maintenance issues or damages to the supervisor promptly",
    "Follow health and safety protocols and maintain cleanliness of cleaning equipment",
    "Participate in room inspections to ensure quality standards are met",
    "Handle laundry and ironing of guest linens and uniforms as needed",
  ],
  qualifications: [
    "High school diploma or equivalent qualification",
    "Previous housekeeping experience in hospitality is an advantage",
    "Ability to follow instructions and work in a fast-paced environment",
    "Attention to detail and commitment to cleanliness standards",
    "Good communication skills and teamwork ability",
    "Flexibility to work shifts including weekends and holidays",
  ],
  skills: [
    "Room cleaning and sanitation",
    "Laundry and ironing operations",
    "Time management",
    "Attention to detail",
    "Customer service orientation",
  ],
  benefits: [
    "Accommodation provided",
    "Meals included",
    "Health insurance coverage",
    "Transportation to/from work",
    "Overtime compensation",
    "Annual leave entitlement",
  ],
};

// Component
export default function JobDetails({ jobId }: { jobId?: number }) {
  const [isApplyModalOpen, setIsApplyModalOpen] = React.useState(false);
  const [formLoading, setFormLoading] = React.useState(false);
  const job = jobId ? undefined : MOCK_JOB;

  const handleApplySubmit = async (values: any) => {
    setFormLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    message.success("Application submitted successfully!");
    setFormLoading(false);
    setIsApplyModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* ... hero section ... */}
    </div>
  );
}