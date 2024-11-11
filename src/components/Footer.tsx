const Footer = () => {
  return (
    <footer className="fixed inset-x-0 bottom-0 p-4 bg-primary text-accent flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-6 shadow-lg">
      <p>© 2024 Anubhav Bose. All rights reserved.</p>
      <div className="flex space-x-3">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          className="hover:text-secondary"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          className="hover:text-secondary"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
