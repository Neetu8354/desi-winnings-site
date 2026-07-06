import { WHATSAPP_LINK } from "@/lib/links";
import { MessageCircle, UserCheck, Wallet, Trophy } from "lucide-react";

const STEPS = [
  { icon: MessageCircle, title: "Message Us on WhatsApp", desc: "Send 'Get ID' to our WhatsApp number. No forms to fill, no documents required, no waiting in queue." },
  { icon: UserCheck, title: "Get Your ID in 60 Seconds", desc: "Our team creates your MahadevFast betting ID instantly. You receive your login credentials within 60 seconds of messaging us." },
  { icon: Wallet, title: "Deposit & Start Winning", desc: "Deposit as little as ₹100 via UPI, IMPS or Net Banking. Start betting on cricket and casino games immediately." },
];

export const HowItWorks = () => (
  <section className="py-16 md:py-24 bg-gradient-dark border-y border-gold/20">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Get Started in 3 Simple Steps</div>
        <h2 className="text-3xl md:text-5xl font-display font-bold">
          Your MahadevFast betting ID is just <span className="text-gradient-gold">one WhatsApp message away</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 relative">
        {STEPS.map((s, i) => (
          <div key={i} className="relative">
            <div className="relative z-10 p-6 rounded-2xl bg-card border border-gold/30 text-center hover:border-gold/70 transition-all hover:-translate-y-1">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-gold text-primary-foreground font-bold flex items-center justify-center text-sm shadow-gold">
                {i + 1}
              </div>
              <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4 mt-2">
                <s.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground font-bold shadow-gold hover:scale-105 transition-transform">
          <MessageCircle className="w-5 h-5" /> Get My ID on WhatsApp
        </a>
      </div>
    </div>
  </section>
);
