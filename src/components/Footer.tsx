import { Phone, Mail, MapPin, Facebook, Twitter, Youtube, Linkedin, Instagram } from "lucide-react";
import solarLandscape from "@/assets/solar-landscape.jpg";

const Footer = () => {
  return (
    <footer
      className="bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 128, 128, 0.8), rgba(0, 0, 139, 0.8)), url(${solarLandscape})`,
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* About Us */}
          <div>
            <h4 className="font-heading font-bold text-sm tracking-wider uppercase mb-4 text-white">About Us</h4>
            <ul className="space-y-2.5 text-sm text-gray-200">
              <li><a href="#" className="hover:text-white transition-opacity">- Heritage</a></li>
              <li><a href="#" className="hover:text-white transition-opacity">- Vision</a></li>
              <li><a href="#" className="hover:text-white transition-opacity">- Mission</a></li>
              <li><a href="#" className="hover:text-white transition-opacity">- Company Milestones</a></li>
              <li><a href="#" className="hover:text-white transition-opacity">- Leadership</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-heading font-bold text-sm tracking-wider uppercase mb-4 text-white">Solutions</h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-sm font-semibold text-gray-200 mb-2">Solar Water Pumps</h5>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li><a href="#" className="hover:text-white transition-opacity">- Submersible Pumps</a></li>
                  <li><a href="#" className="hover:text-white transition-opacity">- Surface Pumps</a></li>
                </ul>
              </div>
              <div>
                <h5 className="text-sm font-semibold text-gray-200 mb-2">Rooftops</h5>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li><a href="#" className="hover:text-white transition-opacity">- Residential</a></li>
                  <li><a href="#" className="hover:text-white transition-opacity">- Commercial</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-heading font-bold text-sm tracking-wider uppercase mb-4 text-white">Projects</h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-sm font-semibold text-gray-200 mb-2">Large Projects</h5>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li><a href="#" className="hover:text-white transition-opacity">- Utility Scale</a></li>
                  <li><a href="#" className="hover:text-white transition-opacity">- Industrial</a></li>
                </ul>
              </div>
              <div>
                <h5 className="text-sm font-semibold text-gray-200 mb-2">International Projects</h5>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li><a href="#" className="hover:text-white transition-opacity">- Middle East</a></li>
                  <li><a href="#" className="hover:text-white transition-opacity">- Africa</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Corporate */}
          <div>
            <h4 className="font-heading font-bold text-sm tracking-wider uppercase mb-4 text-white">Corporate</h4>
            <ul className="space-y-2.5 text-sm text-gray-200">
              <li><a href="#" className="hover:text-white transition-opacity">- Manufacturing Edge</a></li>
              <li><a href="#" className="hover:text-white transition-opacity">- Investors</a></li>
              <li><a href="#" className="hover:text-white transition-opacity">- Media</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-sm tracking-wider uppercase mb-4 text-white">Contact</h4>
            <div className="space-y-3 text-sm text-gray-200 mb-6">
              <a href="tel:18004198777" className="flex items-center gap-2 hover:text-white transition-opacity">
                <Phone className="w-4 h-4 shrink-0" />
                1800 419 8777
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-white transition-opacity">
                <Mail className="w-4 h-4 shrink-0" />
                info@tatapowersolar.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>Plot No. 78, Electronics City Phase 1, Hosur Road, Bangalore - 560100</span>
              </div>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-gray-200 mb-3">Follow Us</h5>
              <div className="flex gap-3">
                {[Twitter, Linkedin, Facebook, Youtube, Instagram].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-600">
        <div className="container py-4 text-center text-sm text-gray-300">
          WORKING AT TATA POWER SOLAR
        </div>
      </div>
    </footer>
  );
};

export default Footer;
