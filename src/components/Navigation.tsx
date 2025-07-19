const Navigation = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800">
      <div className="flex items-center space-x-4">
        <a href="/" className="text-white hover:text-gray-300">
          Home
        </a>
        <a href="/about" className="text-white hover:text-gray-300">
          About
        </a>
        <a href="/projects" className="text-white hover:text-gray-300">
          Projects
        </a>
        <a href="/contact" className="text-white hover:text-gray-300">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
