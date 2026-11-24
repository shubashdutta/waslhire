"use client";

import { useState } from "react";
import type { ElementType } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Form, Input, Select, Button, message } from "antd";

import {
  MapPin,
  Mail,
  Phone,
  ChevronDown,
  Clock,
  ArrowRight,
  Building2,
  ShieldCheck,
} from "lucide-react";
import FaqSection from "./FaqSection";

// --------------------------------------------------
// Types
// --------------------------------------------------

interface ContactFormValues {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message?: string;
}

interface QuickContactItem {
  id: string;
  icon: ElementType;
  badge: "maroon" | "navy";
  title: string;
  body: string;
  href?: string;
  linkLabel?: string;
}

interface HighlightItem {
  icon: ElementType;
  title: string;
  body: string;
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// --------------------------------------------------
// Constants
// --------------------------------------------------

const COUNTRY_CODES = [
  { label: "🇳🇵 +977 Nepal", value: "+977" },
  { label: "🇦🇪 +971 UAE", value: "+971" },
  { label: "🇸🇦 +966 Saudi Arabia", value: "+966" },
  { label: "🇶🇦 +974 Qatar", value: "+974" },
];

const SUBJECT_OPTIONS = [
  {
    label: "Job Application / Overseas Employment",
    value: "job-application",
  },
  {
    label: "Manpower Demand / Recruitment",
    value: "manpower-demand",
  },
  {
    label: "Visa / Documentation Support",
    value: "visa-documentation",
  },
  {
    label: "Employer Partnership",
    value: "employer-partnership",
  },
  {
    label: "Other Inquiry",
    value: "other",
  },
];

const QUICK_CONTACT: QuickContactItem[] = [
  {
    id: "address",
    icon: MapPin,
    badge: "maroon",
    title: "Office Address",
    body: "WASL HIRE Head Office, Kathmandu, Nepal (GCC liaison desk: Dubai, UAE)",
    href: "https://www.google.com/maps/search/?api=1&query=WASL+HIRE+Kathmandu+Nepal",
    linkLabel: "Open on Map",
  },
  {
    id: "email",
    icon: Mail,
    badge: "navy",
    title: "Email Us",
    body: "support@waslhire.com",
    href: "mailto:support@waslhire.com",
    linkLabel: "Write to Us",
  },
  {
    id: "call",
    icon: Phone,
    badge: "maroon",
    title: "Call Us",
    body: "+977 1-5912345 • Hotline: +977 9841234567",
    href: "tel:+97715912345",
    linkLabel: "Call Now",
  },
];

const TRUST_HIGHLIGHTS: HighlightItem[] = [
  {
    icon: Clock,
    title: "Fast Response",
    body: "Every inquiry from job seekers and employers is answered within 24 hours.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Support",
    body: "Licensed international manpower recruitment with GCC-compliant processing.",
  },
  {
    icon: Building2,
    title: "Dedicated Desk",
    body: "One point of contact from first inquiry to final deployment.",
  },
];

// --------------------------------------------------
// Animation and styling
// --------------------------------------------------

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

const badgeStyles = {
  maroon: "bg-[#9B0A30]/10 text-[#9B0A30]",
  navy: "bg-[#102B46]/10 text-[#102B46]",
};

const inputClass =
  "w-full h-10 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 hover:border-[#9B0A30] focus:border-[#9B0A30] outline-none transition-all";

const textareaClass =
  "w-full rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 min-h-[120px] hover:border-[#9B0A30] focus:border-[#9B0A30] outline-none transition-all";

// --------------------------------------------------
// Contact Page
// --------------------------------------------------

export default function ContactUsPage() {
  const [submitting, setSubmitting] = useState(false);
  const [countryCode, setCountryCode] = useState("+977");
  const [openFaqId, setOpenFaqId] = useState<string | null>("documents");

  const [form] = Form.useForm<ContactFormValues>();

  // ------------------------------------------------
  // Form submission
  // ------------------------------------------------

  const handleSubmit = async (values: ContactFormValues) => {
    setSubmitting(true);

    try {
      const payload = {
        ...values,
        phone: `${countryCode} ${values.phone}`,
      };

      // Connect your backend API here.
      // Example:
      //
      // await axios.post("/api/contact", payload);

      console.log("Contact form data:", payload);

      message.info(
        "The contact form is ready. Please connect your backend API to send messages.",
      );
    } catch (error) {
      console.error("Contact form submission error:", error);

      message.error(
        "Unable to process your request. Please try again or contact us directly.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] text-slate-800">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="relative overflow-hidden bg-slate-950 text-white pt-14 pb-24 px-4 sm:px-6 lg:px-8"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2200&q=80')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#102B46]/90 via-[#102B46]/60 to-[#9B0A30]/90" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Breadcrumb */}

          <nav className="flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>

            <span>/</span>

            <span className="text-white font-medium">Contact Us</span>
          </nav>

          <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Contact Us
          </h1>

          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
            Whether you are a job seeker targeting overseas employment or a GCC
            employer looking for skilled manpower, our recruitment desk is ready
            to assist you.
          </p>
        </div>
      </motion.section>

      {/* ==================== 2. QUICK CONTACT CARDS ==================== */}

      <section className="relative z-20">
        <div className="-mt-10 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {QUICK_CONTACT.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.id}
                    whileHover={{ y: -6 }}
                    className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm hover:border-[#9B0A30]/40 hover:shadow-md transition-all duration-300"
                  >
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 shrink-0 ${badgeStyles[item.badge]}`}
                    >
                      <Icon size={20} strokeWidth={2.2} />
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-1">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed break-words">
                      {item.body}
                    </p>

                    {item.href && (
                      <a
                        href={item.href}
                        target={
                          item.href.startsWith("mailto:") ||
                          item.href.startsWith("tel:")
                            ? undefined
                            : "_blank"
                        }
                        rel={
                          item.href.startsWith("mailto:") ||
                          item.href.startsWith("tel:")
                            ? undefined
                            : "noopener noreferrer"
                        }
                        className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#9B0A30] hover:text-[#7a0726] hover:underline transition-colors"
                      >
                        {item.linkLabel}
                        <ArrowRight size={14} strokeWidth={2.2} />
                      </a>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Left: Information */}

            <div className="lg:col-span-5 space-y-7">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#9B0A30]/10 text-[#9B0A30] text-xs font-semibold uppercase tracking-wider">
                Recruitment Support Desk
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-[1.2]">
                We're Always Here to Help
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                From document checks and trade testing to visa processing and
                deployment — candidates and GCC employers can reach our support
                desk anytime. Tell us how we can help, and a recruitment officer
                will respond shortly.
              </p>

              <div className="space-y-5">
                {TRUST_HIGHLIGHTS.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="flex items-start gap-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${badgeStyles.maroon}`}
                      >
                        <Icon size={18} strokeWidth={2.2} />
                      </div>

                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">
                          {item.title}
                        </h4>

                        <p className="text-sm text-slate-500 leading-relaxed mt-1">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Contact Form */}

            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-lg">
                <div className="mb-7">
                  <h3 className="text-xl font-bold text-slate-900">
                    Send Us a Message
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Fill out the form below and tell us how we can help.
                  </p>
                </div>

                <Form
                  form={form}
                  layout="vertical"
                  onFinish={handleSubmit}
                  className="space-y-5"
                >
                  {/* Name and Phone */}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Form.Item
                      label={
                        <span className="text-xs font-bold text-slate-700">
                          Full Name
                        </span>
                      }
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your full name",
                        },
                      ]}
                      className="mb-0"
                    >
                      <Input
                        placeholder="e.g. John Doe"
                        className={inputClass}
                      />
                    </Form.Item>

                    <Form.Item
                      label={
                        <span className="text-xs font-bold text-slate-700">
                          Phone Number
                        </span>
                      }
                      name="phone"
                      rules={[
                        {
                          required: true,
                          message: "Phone number is required",
                        },
                      ]}
                      className="mb-0"
                    >
                      <Input
                        addonBefore={
                          <Select
                            value={countryCode}
                            onChange={setCountryCode}
                            options={COUNTRY_CODES}
                            className="w-28"
                            popupMatchSelectWidth={false}
                          />
                        }
                        placeholder="98XXXXXXXX"
                        className={inputClass}
                      />
                    </Form.Item>
                  </div>

                  {/* Email and Subject */}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Form.Item
                      label={
                        <span className="text-xs font-bold text-slate-700">
                          Email Address
                        </span>
                      }
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: "Email address is required",
                        },
                        {
                          type: "email",
                          message: "Please enter a valid email address",
                        },
                      ]}
                      className="mb-0"
                    >
                      <Input
                        placeholder="name@example.com"
                        className={inputClass}
                      />
                    </Form.Item>

                    <Form.Item
                      label={
                        <span className="text-xs font-bold text-slate-700">
                          Subject
                        </span>
                      }
                      name="subject"
                      rules={[
                        {
                          required: true,
                          message: "Please select a subject",
                        },
                      ]}
                      className="mb-0"
                    >
                      <Select
                        placeholder="Select subject"
                        options={SUBJECT_OPTIONS}
                        className="w-full"
                        size="large"
                      />
                    </Form.Item>
                  </div>

                  {/* Message */}

                  <Form.Item
                    label={
                      <span className="text-xs font-bold text-slate-700">
                        Message
                      </span>
                    }
                    name="message"
                    className="mb-0"
                  >
                    <Input.TextArea
                      rows={5}
                      placeholder="Tell us about your requirement..."
                      className={textareaClass}
                    />
                  </Form.Item>

                  {/* Submit Button */}

                  <div className="pt-3">
                    <Button
                      htmlType="submit"
                      loading={submitting}
                      className="w-full sm:w-auto h-12 px-8 rounded-xl !bg-[#9B0A30] hover:!bg-[#7a0726] !text-white !border-none font-bold text-sm shadow-md transition-all active:scale-95"
                    >
                      {submitting ? "Sending..." : "Send Message"}
                      {!submitting && <ArrowRight size={16} className="ml-2" />}
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ==================== 4. VISIT OUR OFFICE ==================== */}

      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left: Map */}

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm h-72 sm:h-96 relative bg-slate-100">
                <iframe
                  title="WASL HIRE office location"
                  src="https://maps.google.com/maps?q=WASL%20HIRE%20Kathmandu%20Nepal&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right: Office Details */}

            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#102B46]/10 text-[#102B46] text-xs font-semibold uppercase tracking-wider">
                  Find Our Location
                </span>

                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Visit Our Office
                </h2>

                <p className="text-slate-600 leading-relaxed">
                  Walk in for a career consultation or an employer
                  workforce-planning meeting. Our recruitment desk assists with
                  overseas employment and manpower demand queries.
                </p>
              </div>

              <div className="space-y-5">
                {/* Office Hours */}

                <div className="flex items-start gap-3">
                  <div className="mt-1 shrink-0">
                    <Clock
                      size={19}
                      strokeWidth={2}
                      className="text-[#9B0A30]"
                    />
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900 text-sm">
                      Office Hours
                    </p>

                    <p className="text-sm text-slate-600 mt-1">
                      Sun – Fri | 9:00 AM – 6:00 PM
                      <br />
                      Saturday: Closed
                    </p>
                  </div>
                </div>

                {/* Location */}

                <div className="flex items-start gap-3">
                  <div className="mt-1 shrink-0">
                    <MapPin
                      size={19}
                      strokeWidth={2}
                      className="text-[#102B46]"
                    />
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900 text-sm">
                      Location
                    </p>

                    <p className="text-sm text-slate-600 mt-1">
                      WASL HIRE Head Office, Kathmandu, Nepal
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="https://www.google.com/maps/search/?api=1&query=WASL+HIRE+Kathmandu+Nepal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#9B0A30] text-white font-semibold text-sm shadow-sm hover:bg-[#7a0726] hover:shadow-md transition-colors"
                >
                  Get Directions
                  <ArrowRight size={16} strokeWidth={2} />
                </Link>

                <a
                  href="tel:+97715912345"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border border-slate-200 text-[#102B46] bg-white shadow-sm hover:bg-[#102B46] hover:text-white transition-colors"
                >
                  <Phone size={16} strokeWidth={2} />
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <FaqSection />
    </div>
  );
}
