"use client";

import React, { useState, useEffect } from "react";
import {
  Modal,
  Form,
  Input,
  Select,
  Upload,
  Button,
  Checkbox,
  message,
} from "antd";
import { CloudUploadOutlined } from "@ant-design/icons";

interface ApplyJobsProps {
  visible: boolean;
  onClose: () => void;
  jobTitle?: string;
}

const { Option } = Select;
const { Dragger } = Upload;

export default function ApplyJobs({
  visible,
  onClose,
  jobTitle = "Waiter / Server",
}: ApplyJobsProps) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  // Lock background scroll safely when modal opens
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [visible]);

  const onFinish = (values: any) => {
    setLoading(true);
    setTimeout(() => {
      console.log("Form Values:", values);
      message.success("Application submitted successfully!");
      setLoading(false);
      form.resetFields();
      onClose();
    }, 1000);
  };

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      centered
      width={650}
      className="rounded-3xl overflow-hidden"
    >
      <div className="p-2 sm:p-4">
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Apply for <span className="text-[#9B0A30]">{jobTitle}</span>
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Submit your details and we will get back to you.
          </p>
        </div>

        {/* 
          data-lenis-prevent tells Lenis: 
          "Ignore this element and let native scrolling work here!" 
        */}
        <div
          data-lenis-prevent
          className="max-h-[75vh] overflow-y-auto pr-2 overscroll-contain"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            requiredMark={false}
            className="space-y-4 max-h-80"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Form.Item
                label={
                  <span className="text-xs font-bold text-slate-700">
                    First Name
                  </span>
                }
                name="firstName"
                rules={[
                  { required: true, message: "Please enter your first name" },
                ]}
              >
                <Input
                  placeholder="First Name"
                  className="h-11 rounded-xl bg-slate-50 border-gray-200 hover:border-[#9B0A30] focus:border-[#9B0A30]"
                />
              </Form.Item>

              <Form.Item
                label={
                  <span className="text-xs font-bold text-slate-700">
                    Last Name
                  </span>
                }
                name="lastName"
                rules={[
                  { required: true, message: "Please enter your last name" },
                ]}
              >
                <Input
                  placeholder="Last Name"
                  className="h-11 rounded-xl bg-slate-50 border-gray-200 hover:border-[#9B0A30] focus:border-[#9B0A30]"
                />
              </Form.Item>
            </div>

            {/* Row 2: Email Address & Address */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Form.Item
                label={
                  <span className="text-xs font-bold text-slate-700">
                    Email Address
                  </span>
                }
                name="email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
              >
                <Input
                  placeholder="Email Address"
                  className="h-11 rounded-xl bg-slate-50 border-gray-200 hover:border-[#9B0A30] focus:border-[#9B0A30]"
                />
              </Form.Item>

              <Form.Item
                label={
                  <span className="text-xs font-bold text-slate-700">
                    Address
                  </span>
                }
                name="address"
                rules={[
                  { required: true, message: "Please enter your address" },
                ]}
              >
                <Input
                  placeholder="Address"
                  className="h-11 rounded-xl bg-slate-50 border-gray-200 hover:border-[#9B0A30] focus:border-[#9B0A30]"
                />
              </Form.Item>
            </div>

            {/* Row 3: Phone Number & Experience Level */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Form.Item
                label={
                  <span className="text-xs font-bold text-slate-700">
                    Phone Number
                  </span>
                }
                name="phone"
                rules={[
                  { required: true, message: "Please enter your phone number" },
                ]}
              >
                <Input
                  addonBefore={
                    <Select defaultValue="+977" className="w-24">
                      <Option value="+977">🇳🇵 +977</Option>
                      <Option value="+971">🇦🇪 +971</Option>
                      <Option value="+44">🇬🇧 +44</Option>
                      <Option value="+1">🇺🇸 +1</Option>
                    </Select>
                  }
                  placeholder="Phone Number"
                  className="h-11 rounded-xl bg-slate-50"
                />
              </Form.Item>

              <Form.Item
                label={
                  <span className="text-xs font-bold text-slate-700">
                    Experience Level
                  </span>
                }
                name="experience"
                rules={[
                  {
                    required: true,
                    message: "Please select your experience level",
                  },
                ]}
              >
                <Select
                  placeholder="Select experience"
                  className="h-11 rounded-xl"
                  getPopupContainer={(triggerNode) => triggerNode.parentNode}
                >
                  <Option value="entry">Entry Level (0 - 1 Years)</Option>
                  <Option value="mid">Mid Level (1 - 3 Years)</Option>
                  <Option value="senior">Senior Level (3+ Years)</Option>
                </Select>
              </Form.Item>
            </div>

            <Form.Item
              label={
                <span className="text-xs font-bold text-slate-700">
                  Upload Resume
                </span>
              }
              name="resume"
              rules={[{ required: true, message: "Please upload your resume" }]}
            >
              <Dragger
                name="file"
                multiple={false}
                beforeUpload={() => false}
                className="bg-white rounded-2xl border-dashed border-[#9B0A30]/40 hover:border-[#9B0A30] py-4"
              >
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-[#9B0A30]/10 flex items-center justify-center">
                    <CloudUploadOutlined className="text-[#9B0A30] text-xl" />
                  </div>
                  <p className="text-sm font-bold text-slate-800">
                    Click or Drag Resume Here
                  </p>
                  <p className="text-xs text-slate-400">
                    PDF, DOC, DOCX up to 5MB each
                  </p>
                </div>
              </Dragger>
            </Form.Item>

            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(new Error("You must accept the terms")),
                },
              ]}
              className="mb-4"
            >
              <Checkbox className="text-xs text-slate-600">
                I agree to the{" "}
                <a
                  href="/privacy-policy"
                  className="text-[#9B0A30] font-semibold hover:underline"
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="/terms"
                  className="text-[#9B0A30] font-semibold hover:underline"
                >
                  Terms of Services
                </a>
              </Checkbox>
            </Form.Item>

            <div>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                className="w-full h-12 rounded-full bg-[#9B0A30] hover:bg-[#7a0726] text-white font-bold text-sm shadow-md transition-all border-none"
              >
                Apply Now
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </Modal>
  );
}
