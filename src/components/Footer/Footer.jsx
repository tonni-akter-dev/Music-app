import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer class="footer footer_bg py-4 bottom-0">
        <div class="container mx-auto px-8 md:flex md:justify-between md:items-center">
          <div class="mb-4 md:mb-0 md:space-x-8 md:flex">
            <a href="#" class=" hover:text-gray-800">
              Terms and Conditions
            </a>
            <a href="#" class=" hover:text-gray-800">
              Privacy Policy
            </a>
          </div>
          <div class="text-center md:text-right">
            <p class="">&copy; 2023 Company Name</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
