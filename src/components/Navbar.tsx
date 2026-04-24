import { useState } from "react";
import { Search, Menu, MessageCircle, ChevronRight } from "lucide-react";

const navItems = [
  {
    label: "ABOUT US",
    href: "#about",
    submenu: [
      { label: "Our Heritage", href: "#heritage" },
      { label: "Vision", href: "#vision" },
      { label: "Mission & Values", href: "#mission" },
      { label: "Company Milestones", href: "#milestones" },
      { label: "Awards", href: "#awards" },
      { label: "Corporate Policies", href: "#policies" },
      { label: "Learn about Solar", href: "#learn-solar" },
      { label: "Case Studies", href: "#case-studies" },
      {
        label: "Leadership",
        href: "#leadership",
        subsubmenu: [
          { label: "Board of Directors", href: "#board" },
          { label: "Board Committees", href: "#committees" },
        ],
      },
    ],
  },
  {
    label: "PROJECTS",
    href: "#projects",
    submenu: [
      {
        label: "Large Projects",
        href: "#large-projects",
        subsubmenu: [
          { label: "Solutions for Businesses", href: "#businesses" },
          { label: "Solutions for EPC", href: "#epc" },
          { label: "Solutions for Power Producers", href: "#power-producers" },
          { label: "Operation and Maintenance", href: "#oam" },
        ],
      },
      { label: "International Projects", href: "#international" },
    ],
  },
  {
    label: "ROOFTOPS",
    href: "#rooftops",
    submenu: [
      { label: "Tata Power Solaroof", href: "#solaroof" },
      { label: "Residential", href: "#residential" },
      { label: "Commercial & Industrial", href: "#commercial" },
      { label: "Institutions", href: "#institutions" },
      { label: "Financing", href: "#financing" },
    ],
  },
];

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-lg border-b border-gray-200">
      {/* Main nav */}
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center gap-3 ml-4">
          <span className="font-heading font-bold text-2xl text-blue-900 tracking-tight">TATA POWER SOLAR</span>
        </div>

        {/* Desktop nav - Center aligned */}
        <nav className="hidden lg:flex items-center gap-6 relative flex-1 justify-center">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={item.href}
                className={`text-base font-heading font-medium uppercase tracking-wide px-4 py-3 rounded-md transition-colors ${
                  activeDropdown === item.label ? 'bg-[#0055a5] text-white' : 'text-gray-800 hover:text-[#0055a5] hover:bg-gray-50'
                }`}
              >
                {item.label}
              </a>
              {item.submenu && activeDropdown === item.label && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white text-gray-800 min-w-max shadow-xl border border-gray-200 z-50 rounded-md overflow-hidden">
                  {item.submenu.map((subItem, index) => (
                    <div key={subItem.label} className="relative">
                      <a
                        href={subItem.href}
                        className="block px-6 py-4 text-sm hover:bg-gray-50 transition-colors flex items-center justify-between min-w-[200px]"
                      >
                        {subItem.label}
                        {subItem.subsubmenu && <ChevronRight className="w-4 h-4 text-gray-400" />}
                      </a>
                      {subItem.subsubmenu && (
                        <div className="absolute top-0 left-full bg-white text-gray-800 min-w-max shadow-xl border border-gray-200 rounded-md overflow-hidden">
                          {subItem.subsubmenu.map((subSubItem) => (
                            <a
                              key={subSubItem.label}
                              href={subSubItem.href}
                              className="block px-6 py-3 text-sm hover:bg-gray-50 transition-colors min-w-[250px]"
                            >
                              {subSubItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                      {index < item.submenu.length - 1 && <hr className="border-dotted border-gray-300 mx-6" />}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="#enquire"
            className="flex items-center gap-2 text-sm font-heading font-medium text-[#0055a5] hover:text-[#0055a5]/80 transition-colors px-4 py-2 rounded-md hover:bg-gray-50"
          >
            <MessageCircle className="w-4 h-4 text-[#e55b13]" />
            Enquire Now
          </a>
          <button className="flex items-center gap-2 text-sm font-heading font-medium text-gray-700 hover:text-[#0055a5] transition-colors px-4 py-2 rounded-md hover:bg-gray-50">
            <Menu className="w-4 h-4" />
            Explore Menu
          </button>
          <button className="p-3 text-gray-700 hover:text-[#0055a5] hover:bg-gray-50 rounded-md transition-colors">
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden p-3 text-gray-700 hover:text-[#0055a5] hover:bg-gray-50 rounded-md transition-colors">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
