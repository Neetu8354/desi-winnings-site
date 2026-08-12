import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/links";

export const BonusPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={() => setIsVisible(false)}
        aria-hidden="true"
      />

      {/* Popup */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-500">
        <div className="relative bg-gradient-to-br from-card to-card/80 border border-gold/40 rounded-2xl p-8 shadow-gold-lg overflow-hidden w-full max-w-md">
          {/* Decorative background element */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-radial-gold opacity-30 rounded-full blur-3xl" />

          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-3 right-3 p-1.5 rounded-lg bg-gold/10 hover:bg-gold/20 text-muted-foreground hover:text-gold transition-all"
            aria-label="Close popup"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Content */}
          <div className="relative space-y-4">
            {/* Bonus badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/15 border border-gold/40">
              <span className="text-xl">🎁</span>
              <span className="text-sm font-bold text-gold">100% BONUS</span>
            </div>

            {/* Main heading */}
            <h3 className="text-2xl font-display font-bold text-gradient-gold">
              Claim Your 100% Bonus Now!
            </h3>

            {/* Supporting text */}
            <p className="text-sm text-muted-foreground leading-relaxed">
              Get instant access to your betting ID and claim your welcome bonus on your first deposit.
            </p>

            {/* WhatsApp CTA button */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full mt-6 px-6 py-3.5 rounded-xl bg-gradient-gold text-primary-foreground font-bold text-center shadow-gold hover:shadow-gold-lg hover:scale-105 transition-all duration-200 group"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                CLICK HERE — WHATSAPP
              </span>
            </a>

            {/* Footer text */}
            <p className="text-xs text-muted-foreground/70 text-center">
              Instant ID • 5-min withdrawal • 24x7 support
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
