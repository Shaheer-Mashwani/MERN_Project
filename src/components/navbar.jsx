import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // for icons

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Contact", href: "/contact" },
    { label: "About", href: "/about" },
    { label: "Service", href: "/service" },
    { label: "Register", href: "/register" },
    { label: "Login", href: "/login" },
  ];

  return (
    <header className="bg-gray-700 shadow">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Brand Logo */}
        <div className="logo-brand text-2xl font-semibold">
          <NavLink to="/" className="text-blue-700 hover:text-blue-500">
            Shaheer
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex" aria-label="Main navigation">
          <ul className="flex gap-6">
            {links.map(({ label, href }) => (
              <li key={label}>
                <NavLink
                  to={href}
                  className="text-blue-700 hover:text-blue-500 uppercase text-sm tracking-wide"
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-700 hover:text-blue-500 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <nav
          className="md:hidden bg-gray-800 shadow-lg px-4 pb-4"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-4 mt-2">
            {links.map(({ label, href }) => (
              <li key={label}>
                <NavLink
                  to={href}
                  className="block text-blue-700 hover:text-blue-500 uppercase text-sm tracking-wide"
                  onClick={() => setIsOpen(false)} // close menu on click
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
