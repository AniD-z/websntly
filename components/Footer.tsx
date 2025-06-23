"use client";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import FooterSocialLinks from "./FooterSocialsLinks";
import NewsletterSignUp from "./NewsletterSignUp";

export default function Footer() {
  return (
    <footer className="bg-black text-white text-sm">
      <div className="max-w-[95rem] mx-auto px-4">
        
        {/* Newsletter Sign-up Section */}
        <div className="py-6 md:py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <h2 className="uppercase text-lg font-semibold whitespace-nowrap">
            Design to your inbox
          </h2>
          <NewsletterSignUp
            formClassName="flex flex-col sm:flex-row gap-3 w-full max-w-md"
            formFieldsClassName="flex gap-3 w-full"
            inputClassName="flex-1"
            buttonClassName="bg-white text-black hover:text-white"
          />
        </div>

        {/* Navigation Links */}
        <div className="py-6 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-gray-700">
          <nav aria-label="left-footer-links">
            <ul className="space-y-2">
              <li><Link href="#">Art</Link></li>
              <li><Link href="#">Design</Link></li>
            </ul>
          </nav>
          <nav aria-label="middle-footer-links">
            <ul className="space-y-2">
              <li><Link href="/magazine">work</Link></li>
              <li><Link href="/authors">companies</Link></li>
            </ul>
          </nav>
          <nav aria-label="right-footer-links">
            <ul className="space-y-2">
              <li><a href="#">Styleguide</a></li>
              <li><a href="#">Licensing</a></li>
            </ul>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center py-4 border-t border-gray-700 gap-3 text-xs">
          <p>Developed by Zoir. All content belongs to SNTLY copyright holders.</p>
          <FooterSocialLinks />
        </div>
      </div>
    </footer>
  );
}
