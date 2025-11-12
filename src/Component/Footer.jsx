import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="px-6 mt-40 md:px-16 lg:px-36 w-full text-gray-300">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-14">
        {/* Logo & App Links */}
        <div className="md:max-w-md">
          <img className="w-36 h-auto" src={assets.logo} alt="logo" />
          <p className="mt-6 text-sm leading-relaxed text-gray-400">
            Discover movies, book tickets, and explore the latest trailers — all in one place.
          </p>
          <div className="flex items-center gap-2 mt-6">
            <img src={assets.googlePlay} alt="google play" className="h-9 w-auto border rounded" />
            <img src={assets.appStore} alt="app store" className="h-9 w-auto border rounded" />
          </div>
        </div>

        {/* Navigation & Contact */}
        <div className="flex-1 flex flex-col sm:flex-row sm:justify-end gap-10 md:gap-20">
          {/* Company Links */}
          <div>
            <h2 className="font-semibold mb-5 text-white">Company</h2>
            <ul className="text-sm space-y-2 text-gray-400">
              <li>
                <a href="/" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); window.location.href = '/'; }}>
                  Home
                </a>
              </li>
              <li>
                <a href="#" onClick={e => e.preventDefault()}>
                  About us
                </a>
              </li>
              <li>
                <a href="#" onClick={e => e.preventDefault()}>
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" onClick={e => e.preventDefault()}>
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="font-semibold mb-5 text-white">Get in touch</h2>
            <div className="text-sm space-y-2 text-gray-400">
              <p>+91 9860347730</p>
              <p>avdhutu.salunkhe@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="pt-6 text-center text-sm text-gray-500 pb-5">
        &copy; {new Date().getFullYear()} Avdhut Salunkhe. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
