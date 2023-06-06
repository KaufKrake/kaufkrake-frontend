import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
  return (
    <div className="flex-grow bg-gray-300 border-t border-gray-400">
      <footer className="flex flex-row justify-between w-full h-24 text-gray-700">
        <div className="flex flex-col items-start my-4 ml-4">
          <span className="text-lg font-bold">Kaufkrake</span>
          <div>
            <span className="text-lg">Sprachen</span>
            <select className="mt-2 border border-gray-400 rounded-md">
              <option value="de">Deutsch</option>
              <option value="en">Englisch</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col items-center my-4">
          <a className="items-center justify-center text-lg font-bold" target="_blank" rel="noopener noreferrer">
            Wieso Kaufkrake?
          </a>
          <ul className="my-2">
            <li><Link href="/super-toll">Super toll</Link></li>
            <li><Link href="/organisiert">Organisiert</Link></li>
            <li><Link href="/inspiriert">Inspiriert</Link></li>
            <li><Link href="/clever">Clever</Link></li>
            <li><Link href="/immer-ueberall">Immer &amp; überall</Link></li>
          </ul>
        </div>
        <div className="flex flex-col items-center my-4">
          <span className="text-lg font-bold">Weitere Links</span>
          <ul className="my-2">
            <li><Link href="/unternehmen">Unternehmen</Link></li>
            <li><Link href="/ueber-uns">Über uns</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/medien">Medien</Link></li>
          </ul>
        </div>
        <div className="flex flex-col items-center my-4">
          <ul className="my-2">
            <li><Link href="/kontakt">Kontakt</Link></li>
            <li><Link href="/support">Support</Link></li>
          </ul>
        </div>
        <div className="flex flex-col items-center my-4">
          <ul className="my-2">
            <li><Link href="/datenschutz">Datenschutz</Link></li>
            <li><Link href="/impressum">Impressum</Link></li>
            <li><Link href="/nutzungsbedingungen">Nutzungsbedingungen</Link></li>
          </ul>
          
          <Image src="/assets/images/cutekrake.png" className="rounded-full" width={60} height={60} alt="krake" />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
