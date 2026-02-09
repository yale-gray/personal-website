'use client';

import { SITE_CONFIG } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-white/10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-apple-gray text-sm">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>

          <p className="text-apple-gray text-sm">
            Designed & Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
