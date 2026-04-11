import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary border-t border-border">
    <div className="container mx-auto section-padding">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl font-heading font-bold tracking-wider text-primary">NEST</span>
            <span className="text-2xl font-heading font-bold tracking-wider text-foreground">KINGS</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Building champions on and off the court. Premier basketball training for all skill levels.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-lg font-semibold uppercase tracking-wider mb-4 text-foreground">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Services", path: "/services" },
              { label: "Contact", path: "/contact" },
            ].map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-lg font-semibold uppercase tracking-wider mb-4 text-foreground">Contact</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-muted-foreground text-sm">
              <Phone size={16} className="text-primary" /> 0420262041
            </li>
            <li className="flex items-center gap-3 text-muted-foreground text-sm">
              <Mail size={16} className="text-primary" /> info.nestkings@gmail.com
            </li>
            <li className="flex items-start gap-3 text-muted-foreground text-sm">
              <MapPin size={16} className="text-primary mt-0.5" /> Craigieburn, Victoria 3064
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-heading text-lg font-semibold uppercase tracking-wider mb-4 text-foreground">Training Hours</h4>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>Mon – Fri: 6:00 AM – 9:00 PM</li>
            <li>Saturday: 8:00 AM – 6:00 PM</li>
            <li>Sunday: 9:00 AM – 4:00 PM</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground text-sm">
        © {new Date().getFullYear()} Nest Kings. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
