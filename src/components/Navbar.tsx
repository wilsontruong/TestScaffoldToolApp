import React from 'react';
import { Link } from 'react-router-dom';

<<<<<<< HEAD
const Navbar = ({links, titles}) => {
=======
interface NavbarProps {
  links: string[];
  titles: string[];
}

const Navbar: React.FC<NavbarProps> = ({ links, titles }) => {
>>>>>>> 6e9f284335b32a12f02f087eae8faa9adec745d9
  return (
    <nav className="flex items-center justify-between flex-wrap bg-primary-main p-6 fixed w-screen">
      <div className="flex items-center text-white mr-6">
        <span className="font-semibold text-xl">Scaffold Tool</span>
      </div>
<<<<<<< HEAD
      <div className="w-full text-sm block lg:flex lg:items-center lg:w-auto">
        {links.map((link, index) => (
            <Link
              key={link}
              to={link}
              className="block mt-4 lg:inline-block lg:mt-0 text-primary-light hover:text-white mr-4"
            >
              {titles[index]}
            </Link>
        ))}
=======
      <div className="w-full text-sm block sm:flex sm:items-center sm:w-auto">
        <Link
          to="/"
          className="block mt-4 sm:inline-block sm:mt-0 text-primary-light hover:text-white mr-4"
        >
          {titles[0]}
        </Link>
        <Link
          to="/firebase-connection"
          className="block mt-4 sm:inline-block sm:mt-0 text-primary-light hover:text-white mr-4"
        >
          Firebase
        </Link>
>>>>>>> 6e9f284335b32a12f02f087eae8faa9adec745d9
      </div>
    </nav>
  );
};

export default Navbar;
