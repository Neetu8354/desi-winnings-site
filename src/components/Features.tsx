import { ShieldCheck, Wallet, Headphones, Zap, Trophy, Users, Gift, Lock } from "lucide-react";

const FEATURES = [
  { icon: Zap, title: "ID in 60 Seconds", desc: "Send 'Get ID' on WhatsApp and receive your active betting ID within 60 seconds. The fastest ID delivery in India." },
  { icon: Wallet, title: "Instant UPI Withdrawal", desc: "Withdraw your winnings directly to your UPI, bank account or Paytm in under 5 minutes — any time of day." },
  { icon: Headphones, title: "24x7 Hindi Support", desc: "Our team is available 24 hours a day, 7 days a week on WhatsApp in Hindi, English and Telugu. Fast responses, always." },
  { icon: ShieldCheck, title: "100% Safe & Secure", desc: "Your personal information and financial data are fully protected. All deposits and withdrawals are processed securely." },
  { icon: Trophy, title: "Minimum Deposit ₹100", desc: "Start with just ₹100 — the lowest minimum deposit in the market. Scale up as you go." },
  { icon: Users, title: "12,480+ Verified Players", desc: "Join thousands of Indian bettors who trust MahadevFast for the fastest cricket betting experience." },
  { icon: Gift, title: "500+ Casino Games", desc: "Teen Patti, Aviator, Andar Bahar, Roulette, Blackjack, Baccarat, Dragon Tiger and more." },
  { icon: Lock, title: "No App Required", desc: "Bet directly through your browser. No app download, no lengthy registration, no KYC delays." },
];

export const Features = () => (
  <section className="container py-16 md:py-24">
    <div className="text-center max-w-2xl mx-auto mb-14">
      <div className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Why MahadevFast</div>
      <h2 className="text-3xl md:text-5xl font-display font-bold">
        Why Thousands of Indians <span className="text-gradient-gold">Choose MahadevFast</span>
      </h2>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {FEATURES.map((f, i) => (
        <div key={i} className="group relative p-6 rounded-2xl bg-card border border-gold/20 hover:border-gold/60 transition-all hover:-translate-y-1 shadow-card hover:shadow-gold">
          <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-4 shadow-gold">
            <f.icon className="w-6 h-6 text-primary-foreground" />
          </div>
          <h3 className="font-display font-bold text-lg text-foreground mb-2">{f.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);
