import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["Home", "Learnmore", "AboutUs", "Contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo clickable */}
        <h1
          onClick={() => scrollTo("Home")}
          className="text-2xl font-bold text-blue-600 cursor-pointer"
        >
          GoPrivacy
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="relative text-gray-700 hover:text-blue-600 transition duration-300 
                         after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full 
                         after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 font-medium"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Mobile Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 font-medium"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
