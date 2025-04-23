import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-t-gray-200 py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold">Job Hunt</h2>
          <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start space-x-4 mt-4 md:mt-0 gap-4">
          <a href="mailto:balasubramani5723@email.com" className="hover:text-gray-400 flex items-center justify-center w-6 h-6">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 13.065L2.677 6.204A2 2 0 0 1 4 4h16a2 2 0 0 1 1.323 2.204L12 13.065zM2 8.235V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.235l-10 7.141-10-7.141z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/bala-s-a7ba28289" className="hover:text-gray-400 w-6 h-6 flex items-center justify-center">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452H16.85v-5.569c0-1.327-.027-3.037-1.852-3.037-1.854 0-2.137 1.446-2.137 2.94v5.666H9.147V9.756h3.448v1.464h.05c.48-.91 1.653-1.871 3.401-1.871 3.634 0 4.307 2.39 4.307 5.498v5.605zM5.337 8.29c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .895 2 2 0 1.104-.896 2-2 2zM7.119 20.452H3.553V9.756h3.566v10.696zM22.225 0H1.771C.791 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451c.979 0 1.771-.774 1.771-1.729V1.729C24 .774 23.205 0 22.225 0z" />
            </svg>
          </a>
          <a href="https://github.com/Balasubramani5723" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400" aria-label="GitHub">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.313 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.02c-3.338.727-4.042-1.61-4.042-1.61-.546-1.39-1.333-1.76-1.333-1.76-1.087-.745.083-.729.083-.729 1.204.085 1.838 1.24 1.838 1.24 1.07 1.833 2.807 1.304 3.49.996.108-.776.42-1.304.763-1.604-2.665-.303-5.466-1.333-5.466-5.932 0-1.31.47-2.38 1.236-3.22-.124-.304-.535-1.523.116-3.176 0 0 1.007-.323 3.3 1.23a11.5 11.5 0 0 1 3-.405c1.02.005 2.046.137 3 .405 2.29-1.553 3.294-1.23 3.294-1.23.653 1.653.242 2.872.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.922.43.374.823 1.11.823 2.237v3.32c0 .32.192.693.8.576C20.565 22.092 24 17.605 24 12.297 24 5.67 18.627.297 12 .297z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
  
  );
};

export default Footer;
