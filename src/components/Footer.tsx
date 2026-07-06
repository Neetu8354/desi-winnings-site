import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
import { WHATSAPP_LINK } from "@/lib/links";
import { BLOG_POSTS } from "@/data/blogPosts";

export const Footer = () => (
  <footer className="border-t border-gold/20 bg-gradient-dark mt-12">
    <div className="container py-14 grid md:grid-cols-5 gap-10">
      <div className="md:col-span-2">
        <img src={logo} alt="MahadevFast — India's fastest cricket betting ID platform" className="h-14 w-auto mb-4" width={224} height={56} loading="lazy" />
        <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
          MahadevFast is India's fastest online cricket betting platform. Get your cricket betting ID in 60 seconds via WhatsApp. Bet on IPL 2026, T20, Test cricket, Teen Patti, Aviator and 500+ casino games. Minimum deposit ₹100, 5-minute withdrawal, 24x7 Hindi support.
        </p>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
          className="inline-flex mt-5 items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-gold text-primary-foreground font-bold text-sm shadow-gold">
          Chat on WhatsApp
        </a>
      </div>

      <div>
        <h4 className="font-display font-bold text-gold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link to="/" className="hover:text-gold">Home</Link></li>
          <li><Link to="/games/cricket" className="hover:text-gold">Cricket Betting</Link></li>
          <li><Link to="/games/teen-patti" className="hover:text-gold">Teen Patti</Link></li>
          <li><Link to="/games/andar-bahar" className="hover:text-gold">Andar Bahar</Link></li>
          <li><Link to="/games/roulette" className="hover:text-gold">Roulette</Link></li>
          <li><Link to="/blog" className="hover:text-gold">Blog</Link></li>
          <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
          <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-display font-bold text-gold mb-4">Get Your ID</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-gold">WhatsApp Support</a></li>
          <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-gold">Login</a></li>
          <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-gold">Sign Up</a></li>
          <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-gold">Deposit / Withdraw</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-display font-bold text-gold mb-4">Top Guides</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {BLOG_POSTS.slice(0, 5).map(p => (
            <li key={p.slug}>
              <Link to={`/blog/${p.slug}`} className="hover:text-gold line-clamp-2">{p.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="border-t border-gold/10">
      <div className="container py-5 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} MahadevFast.live. All rights reserved. | 18+ Only | Bet Responsibly</p>
        <p>Made for India 🇮🇳 — INR ₹ payments. 24x7 WhatsApp support.</p>
      </div>
    </div>
  </footer>
);
