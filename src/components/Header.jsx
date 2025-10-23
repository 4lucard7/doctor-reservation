import { Link } from "react-router-dom";

export default function Header() {
  const navItems = [
    { item: "Home", path: "/" },
    { item: "Services", path: "/Services" },
    { item: "Reservation", path: "/Reservation" },
    { item: "Contact", path: "/Contact" },
    { item: "About", path: "/About" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800 cursor-pointer">
          LOGO
        </div>
        <nav>
          <ul className="flex space-x-8 text-gray-700 font-medium">
            {navItems.map((nav, i) => (
              <li key={i} className="hover:text-blue-600 transition-colors duration-300">
                <Link to={nav.path}>{nav.item}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
