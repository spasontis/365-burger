import { Facebook, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";

export const HomeSection = () => {
  return (
    <section
      className="h-[90vh] flex flex-col items-center justify-center"
      id="home"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center p-4 gap-14">
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/365-burger-label.webp"
            alt="365 Burger Label"
            width={400}
            height={400}
            sizes="(max-width: 768px) 90vw, 380px"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <h2 className="text-xl md:text-2xl font-semibold max-[800px]:hidden">
            Where can you find us?
          </h2>
          <div className="w-196 max-w-2xl h-116 overflow-hidden shadow-lg border-2 max-[800px]:hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d-1.1515341!3d51.8973982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876e796f978b4dd%3A0xf6e3e310fce3e013!2s365%20Burger%20Bar!5e0!3m2!1sen!2suk!4v0"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex items-center gap-6 mt-2">
            <a
              href="https://maps.app.goo.gl/r4wL2ePwpdNizFht8"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200 min-[800px]:hidden"
            >
              <MapPin width={32} height={32} className="text-white" />
            </a>

            <a
              href="tel:+447435271877"
              className="hover:scale-110 transition-transform duration-200"
            >
              <Phone width={32} height={32} className="text-white" />
            </a>

            <a
              href="mailto:info@365smashburger.com"
              className="hover:scale-110 transition-transform duration-200"
            >
              <Mail width={32} height={32} className="text-white" />
            </a>

            <a
              href="https://wa.me/447838299006"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
            >
              <MessageCircle
                width={32}
                height={32}
                className="text-[#25D366]"
              />
            </a>

            <a
              href="https://www.facebook.com/365BurgerBar/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
            >
              <Facebook
                width={32}
                height={32}
                className="text-blue-600 relative right-2.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
