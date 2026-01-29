import { Facebook, Mail, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="w-full bg-black flex flex-col items-center pt-12 pb-6 text-white border-t border-gray-500">
      <div className="w-[90%] max-w-7xl flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="flex flex-col gap-4 max-w-md">
          <div className="flex items-center gap-3">
            <Image
              src="/365-burger-label.png"
              alt="365 Burger"
              width={60}
              height={60}
              className="object-contain"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Serving handcrafted 365 burgers cooked in the authentic smash
              burger style — made fresh daily 🍔🍔🍔🍟🍟🍟
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-sm max-[800px]:items-center mt-6lg:mt-12">
          <h3 className="text-lg font-bold uppercase tracking-wider text-white">
            Contacts
          </h3>

          <div className="flex flex-col gap-2 text-gray-400 max-[800px]:items-center">
            <a
              href="mailto:info@365smashburger.com"
              className="hover:text-white transition-colors flex items-center gap-2"
            >
              <Mail size={16} />
              info@365smashburger.com
            </a>
            <a
              href="tel:+447435271877"
              className="hover:text-white transition-colors flex items-center gap-2"
            >
              <Phone size={16} />
              +44 7435 271877
            </a>
            <a
              href="https://wa.me/447838299006"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-2"
            >
              <MessageCircle width={16} height={16} />
              +44 7838 299006
            </a>
            <a
              href="https://www.facebook.com/365BurgerBar/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-2"
            >
              <Facebook size={16} />
              @365BurgerBar
            </a>
          </div>
        </div>
      </div>
      <div className="w-[90%] flex justify-center items-center text-gray-500 text-xs font-medium">
        <span>365 BURGER 2026</span>
      </div>
    </footer>
  );
};
