"use client";

import { useState, useRef, useEffect } from "react";
import { HelpCircle, ChevronDown, ChevronUp, Mail, Phone } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "countries",
    question: "What countries does WASL HIRE source candidates from?",
    answer:
      "WASL HIRE sources skilled candidates from a wide network of countries across South Asia, including India, Nepal, Bangladesh, Pakistan, and Sri Lanka. Our sourcing strategy is tailored to the specific skill set, experience level, and visa eligibility requirements of each placement.",
  },
  {
    id: "timeline",
    question: "How long does the recruitment and placement process take?",
    answer:
      "The total timeline typically ranges from 4 to 10 weeks, depending on the role, candidate country of origin, visa category, and document processing times. We provide weekly progress updates and a clear milestone schedule so employers always know where their request stands.",
  },
  {
    id: "visa-compliance",
    question:
      "Do you handle visa processing, documentation, and legal compliance?",
    answer:
      "Yes. WASL HIRE manages the complete visa lifecycle in partnership with licensed immigration consultants and legal counsel. We assist with eligibility assessment, documentation, visa applications, interview arrangements, and post-arrival compliance, ensuring adherence to both home-country and destination-country regulations.",
  },
  {
    id: "industries",
    question: "What industries do you specialize in supplying manpower for?",
    answer:
      "Our staffing coverage spans manufacturing, construction, logistics & WMS, retail & hospitality, healthcare support, IT & software services, automotive, and agriculture-related industries. We match candidates to roles based on technical certification, language proficiency, and on-site experience.",
  },
  {
    id: "quality",
    question: "How do you ensure candidate quality and skill vetting?",
    answer:
      "Every candidate undergoes a multi-stage vetting process: document verification, technical and language assessment, interview screening, background checks, and reference validation. We also provide on-the-job orientation and post-placement support to ensure long-term retention and performance.",
  },
  {
    id: "get-started",
    question: "How can employers or corporate partners get started?",
    answer:
      "Contact our team through the support form below or reach us directly via email or phone. We will schedule an onboarding call to understand your workforce requirements, approve job specifications, shortlist and vet candidates, and manage the placement and visa process end-to-end.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("countries");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      ref={sectionRef}
      className="w-full py-10 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white FaqSection__scroll-trigger overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9B0A30] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md">
            <HelpCircle size={16} strokeWidth={2.5} />
            <span>Got Questions?</span>
          </div>

          <h2 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our international
            recruitment, visa processing, manpower supply, and client
            partnership terms.
          </p>
        </div>

        {/* ---------- ACCORDION ---------- */}
        <div className="space-y-3 sm:space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 ease-out ${
                  isOpen
                    ? "border-[#9B0A30] bg-white shadow-lg shadow-[#9B0A30]/5"
                    : "border-gray-200 bg-white hover:shadow-md hover:shadow-gray-200/60 hover:border-gray-300"
                }`}
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 text-left gap-4"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                >
                  <span className="text-sm sm:text-base font-semibold text-slate-800 pr-2">
                    {item.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-[#9B0A30] text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {isOpen ? (
                      <ChevronUp size={16} strokeWidth={2.5} />
                    ) : (
                      <ChevronDown size={16} strokeWidth={2.5} />
                    )}
                  </span>
                </button>

                <div
                  id={`faq-panel-${item.id}`}
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    isOpen ? "max-h-96 opacity-100 pb-5" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm sm:text-base text-slate-500 leading-relaxed px-4 sm:px-6">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ---------- SUPPORT CTA BANNER ---------- */}
        <div className="mt-8 sm:mt-10 rounded-2xl border border-[#9B0A30]/30 bg-[#9B0A30]/5 p-5 sm:p-7 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#9B0A30]/10 animate-pulse pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-[#9B0A30]/5 pointer-events-none" />

          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-slate-700">
              <div className="w-10 h-10 rounded-full bg-[#9B0A30] text-white flex items-center justify-center shadow-md flex-shrink-0">
                <Mail size={18} strokeWidth={2} />
              </div>
              <p className="text-sm sm:text-base font-medium">
                Still have questions? Reach out directly to our support team.
              </p>
            </div>

            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#9B0A30] text-white text-sm font-semibold shadow-md hover:bg-[#7a0726] transition-all duration-200 active:scale-95 flex-shrink-0">
              <Phone size={16} strokeWidth={2} />
              <span>Contact Support</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
