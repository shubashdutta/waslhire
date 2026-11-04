// "use client";

// import React, { useState } from "react";
// import logo from "@/src/assets/images/Logo.png";
// import Image from "next/image";
// import Link from "next/link";

// const NavList = [
//   { label: "About Us", link: "about-us" },
//   {
//     label: "Services",
//     link: "services",
//     submenu: [{ label: "Service 1", link: "services1" }],
//   },
//   { label: "How we work", link: "how-we-works" },
//   { label: "clients", link: "clients" },
//   { label: "Job Demand", link: "jobs" },
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<number | null>(
//     null,
//   );

//   return (
//     <nav className="w-full bg-white backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto py-1 px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 relative">
//           {/* Logo */}
//           <div className="flex items-center gap-3 flex-shrink-0 cursor-pointer w-1/4">
//             <Image alt="Logo" src={logo} priority width={180} />
//           </div>

//           {/* Desktop Navigation Pill */}
//           <div className="hidden md:flex items-center justify-center flex-1">
//             <div className="bg-[#9B0A30] rounded-full px-4 py-2 flex items-center justify-center gap-2 shadow-lg">
//               {NavList?.map((v: any, index: number) => {
//                 const hasSubmenu = v.submenu && v.submenu.length > 0;

//                 return (
//                   <div
//                     key={index}
//                     className={hasSubmenu ? "relative group" : "relative"}
//                   >
//                     {hasSubmenu ? (
//                       <div className="flex items-center gap-1.5 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-200 cursor-pointer select-none">
//                         {v.label}
//                         <svg
//                           className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M19 9l-7 7-7-7"
//                           />
//                         </svg>
//                       </div>
//                     ) : (
//                       <Link
//                         href={v?.link}
//                         className="text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-200 block"
//                       >
//                         {v?.label}
//                       </Link>
//                     )}

//                     {hasSubmenu && (
//                       <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 px-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
//                         {v.submenu.map((sub: any, subIndex: number) => (
//                           <Link
//                             key={subIndex}
//                             href={sub.link}
//                             className="block px-4 py-2.5 text-sm text-gray-800 hover:bg-gray-50 hover:text-[#9B0A30] rounded-xl transition-all"
//                           >
//                             {sub.label}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           <div className="flex items-center justify-end gap-4 w-1/4">
//             <Link
//               href="contact-us"
//               className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#9B0A30] text-white text-sm font-semibold hover:bg-[#820828] transition-all shadow-md"
//             >
//               Contact Us
//             </Link>

//             <div className="-mr-2 flex md:hidden">
//               <button
//                 type="button"
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//               >
//                 <span className="sr-only">Open main menu</span>
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Panel */}
//       {isOpen && (
//         <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-2">
//           {NavList?.map((v: any, index: number) => {
//             const hasSubmenu = v.submenu && v.submenu.length > 0;
//             const isSubOpen = mobileSubmenuOpen === index;

//             return (
//               <div key={index}>
//                 {hasSubmenu ? (
//                   <div>
//                     <button
//                       onClick={() =>
//                         setMobileSubmenuOpen(isSubOpen ? null : index)
//                       }
//                       className="flex w-full items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
//                     >
//                       <span>{v.label}</span>
//                       <svg
//                         className={`w-5 h-5 transition-transform duration-200 ${
//                           isSubOpen ? "rotate-180" : ""
//                         }`}
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M19 9l-7 7-7-7"
//                         />
//                       </svg>
//                     </button>
//                     {isSubOpen && (
//                       <div className="pl-4 mt-1 space-y-1">
//                         {v.submenu.map((sub: any, subIndex: number) => (
//                           <Link
//                             key={subIndex}
//                             href={sub.link}
//                             onClick={() => {
//                               setIsOpen(false);
//                               setMobileSubmenuOpen(null);
//                             }}
//                             className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
//                           >
//                             {sub.label}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ) : (
//                   <Link
//                     href={v?.link}
//                     onClick={() => setIsOpen(false)}
//                     className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-md"
//                   >
//                     {v?.label}
//                   </Link>
//                 )}
//               </div>
//             );
//           })}

//           <div className="pt-4">
//             <Link
//               href="contact-us"
//               onClick={() => setIsOpen(false)}
//               className="block w-full text-center px-4 py-2.5 rounded-full bg-[#9B0A30] text-white text-sm font-semibold shadow-md"
//             >
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

"use client";

import React, { useState } from "react";
import logo from "@/src/assets/images/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { Globe, ChevronDown } from "lucide-react";

interface SubmenuItem {
  label: string;
  link: string;
}

interface NavItem {
  label: string;
  link: string;
  submenu?: SubmenuItem[];
}

const NavList: NavItem[] = [
  { label: "About Us", link: "/about-us" },
  {
    label: "Services",
    link: "/#services",
    submenu: [
      {
        label: "International Recruitment",
        link: "/services/international-recruitment",
      },
      { label: "Manpower Supply", link: "/services/manpower-supply" },
      { label: "Skilled Workforce", link: "/services/skilled-workforce" },
    ],
  },
  { label: "How we work", link: "/how-we-work" },
  { label: "Clients", link: "/#testimonials" },
  { label: "Job Demand", link: "/jobs" },
];

const LANGUAGES = [{ code: "ENG", label: "English" }];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<number | null>(
    null,
  );
  const [selectedLang, setSelectedLang] = useState("ENG");
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  return (
    <nav className="w-full bg-white backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto py-1 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo */}
          <div className="flex items-center gap-3 flex-shrink-0 cursor-pointer w-1/4">
            <Link href="/">
              <Image alt="Logo" src={logo} priority width={180} />
            </Link>
          </div>

          {/* Desktop Navigation Pill */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="bg-[#9B0A30] rounded-full px-4 py-2 flex items-center justify-center gap-2 shadow-lg">
              {NavList?.map((v, index: number) => {
                const hasSubmenu = Boolean(v.submenu && v.submenu.length > 0);

                return (
                  <div
                    key={index}
                    className={hasSubmenu ? "relative group" : "relative"}
                  >
                    {hasSubmenu ? (
                      <div className="flex items-center gap-1.5 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-200 cursor-pointer select-none">
                        {v.label}
                        <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                      </div>
                    ) : (
                      <Link
                        href={v.link}
                        className="text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-200 block"
                      >
                        {v.label}
                      </Link>
                    )}

                    {hasSubmenu && v.submenu && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 px-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                        {v.submenu.map((sub, subIndex: number) => (
                          <Link
                            key={subIndex}
                            href={sub.link}
                            className="block px-4 py-2.5 text-sm text-gray-800 hover:bg-gray-50 hover:text-[#9B0A30] rounded-xl transition-all"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Action Bar (Contact Us + Language Selector) */}
          <div className="flex items-center justify-end gap-3 w-1/4">
            {/* Desktop Language Selector */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 hover:border-[#9B0A30] text-xs font-semibold text-slate-700 bg-gray-50 hover:bg-white transition-all shadow-sm"
              >
                <Globe className="w-3.5 h-3.5 text-[#9B0A30]" />
                <span>{selectedLang}</span>
                <ChevronDown
                  className={`w-3 h-3 transition-transform ${langDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 z-50">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setSelectedLang(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs font-medium flex items-center justify-between hover:bg-gray-50 transition-colors ${
                        selectedLang === lang.code
                          ? "text-[#9B0A30] font-bold"
                          : "text-slate-700"
                      }`}
                    >
                      <span>{lang.label}</span>
                      <span className="text-[10px] text-gray-400">
                        ({lang.code})
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Contact Us Button */}
            <Link
              href="/contact-us"
              className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#9B0A30] text-white text-sm font-semibold hover:bg-[#820828] transition-all shadow-md"
            >
              Contact Us
            </Link>

            {/* Mobile Hamburger Toggle */}
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-2">
          {NavList?.map((v, index: number) => {
            const hasSubmenu = Boolean(v.submenu && v.submenu.length > 0);
            const isSubOpen = mobileSubmenuOpen === index;

            return (
              <div key={index}>
                {hasSubmenu ? (
                  <div>
                    <button
                      onClick={() =>
                        setMobileSubmenuOpen(isSubOpen ? null : index)
                      }
                      className="flex w-full items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                    >
                      <span>{v.label}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${
                          isSubOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isSubOpen && v.submenu && (
                      <div className="pl-4 mt-1 space-y-1">
                        {v.submenu.map((sub, subIndex: number) => (
                          <Link
                            key={subIndex}
                            href={sub.link}
                            onClick={() => {
                              setIsOpen(false);
                              setMobileSubmenuOpen(null);
                            }}
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={v.link}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-md"
                  >
                    {v.label}
                  </Link>
                )}
              </div>
            );
          })}

          {/* Mobile Language & Contact Actions */}
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
            <div className="flex items-center justify-between px-3 py-2 bg-gray-50 rounded-xl">
              <span className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-[#9B0A30]" /> Language:
              </span>
              <div className="flex items-center gap-1.5">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setSelectedLang(lang.code)}
                    className={`px-2.5 py-1 rounded-md text-xs font-bold transition-all ${
                      selectedLang === lang.code
                        ? "bg-[#9B0A30] text-white shadow-sm"
                        : "bg-white text-slate-600 border border-gray-200"
                    }`}
                  >
                    {lang.code}
                  </button>
                ))}
              </div>
            </div>

            <Link
              href="/contact-us"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-4 py-2.5 rounded-full bg-[#9B0A30] text-white text-sm font-semibold shadow-md"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
