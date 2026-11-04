"use client";

import { Star, CheckCircle } from "lucide-react";

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  timeAgo: string;
  rating: number;
  verified: boolean;
  text: string;
  textArabic?: string;
  avatar: string;
  avatarBg: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: "1",
    name: "Ahmed Al Mansouri",
    role: "HR Director",
    location: "Sharjah, UAE",
    timeAgo: "2 months ago",
    rating: 5,
    verified: true,
    text: "WASL HIRE helped us fill 30+ skilled positions across our construction sites in record time. Their CV screening process is thorough and the candidates were ready to work from day one.",

    avatar: "AM",
    avatarBg: "bg-blue-100 text-blue-700",
  },
  {
    id: "2",
    name: "Fatima Hassan",
    role: "Operations Manager",
    location: "Dubai, UAE",
    timeAgo: "4 months ago",
    rating: 5,
    verified: true,
    text: "Exceptional service for hospitality staffing. WASL HIRE understood our seasonal requirements and provided trained professionals who exceeded guest expectations.",

    avatar: "FH",
    avatarBg: "bg-rose-100 text-rose-700",
  },
  {
    id: "3",
    name: "Markus Weber",
    role: "Operations Lead",
    location: "Berlin, Germany",
    timeAgo: "1 month ago",
    rating: 5,
    verified: true,
    text: "Partnering with WASL HIRE for European recruitment has been seamless. They handle compliance, documentation, and placement with professionalism.",

    avatar: "MW",
    avatarBg: "bg-emerald-100 text-emerald-700",
  },
  {
    id: "4",
    name: "Sarah Chen",
    role: "HR Manager",
    location: "Sharjah, UAE",
    timeAgo: "3 weeks ago",
    rating: 5,
    verified: true,
    text: "The manpower supply team at WASL HIRE delivered exactly what we needed—reliable, hardworking laborers for our warehouse operations.",

    avatar: "SC",
    avatarBg: "bg-indigo-100 text-indigo-700",
  },
  {
    id: "5",
    name: "Omar Khalil",
    role: "Project Director",
    location: "Abu Dhabi, UAE",
    timeAgo: "5 months ago",
    rating: 4,
    verified: true,
    text: "WASL HIRE's executive search found us a senior project manager within two weeks. Their network and vetting process saved us months of hiring.",

    avatar: "OK",
    avatarBg: "bg-amber-100 text-amber-700",
  },
  {
    id: "6",
    name: "Elena Rodriguez",
    role: "Recruitment Lead",
    location: "Madrid, Spain",
    timeAgo: "1 week ago",
    rating: 5,
    verified: true,
    text: "Fast, compliant, and culturally aligned recruitment for our expansion into the UAE market. Highly recommend WASL HIRE.",
    avatar: "ER",
    avatarBg: "bg-purple-100 text-purple-700",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Real feedback from clients and employers who’ve partnered with WASL
            HIRE to build their global workforce.
          </p>
        </div>

        <div className="relative group overflow-hidden">
          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />

          {/* Marquee Track with proper gap */}
          <div className="flex animate-[marquee_35s_linear_infinite] whitespace-nowrap gap-6 group-hover:[animation-play-state:paused]">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={`dup-${testimonial.id}`}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="inline-block w-[360px] shrink-0">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-start gap-3 mb-4">
          <div
            className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-base shrink-0 ${testimonial.avatarBg}`}
          >
            {testimonial.avatar}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-slate-900">
              {testimonial.name}
            </span>
            <span className="text-xs text-slate-500 whitespace-normal">
              {testimonial.location} • {testimonial.timeAgo}
            </span>
          </div>
          <div className="ml-auto shrink-0">
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="w-5 h-5"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex items-center gap-1 mb-3">
          {[1, 2, 3, 4, 5].map((starIndex) => (
            <Star
              key={starIndex}
              className={`w-4 h-4 ${
                starIndex <= testimonial.rating
                  ? "text-[#FABB05] fill-[#FABB05]"
                  : "text-slate-300"
              }`}
            />
          ))}
          {testimonial.verified && (
            <span
              title="Verified reviewer"
              className="inline-flex items-center"
            >
              <CheckCircle className="w-4 h-4 text-blue-500 ml-1" />
            </span>
          )}
        </div>

        <p className="text-sm text-slate-700 leading-relaxed whitespace-normal line-clamp-4">
          {testimonial.text}
        </p>
      </div>
    </div>
  );
};

export default TestimonialsSection;
