import { Header } from "@/components/Header";
import { TickerBar } from "@/components/TickerBar";
import { Hero } from "@/components/Hero";
import { PromoSlider } from "@/components/PromoSlider";
import { GamesSection } from "@/components/GamesSection";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { CTABanner } from "@/components/CTABanner";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { WhatsAppChatbot } from "@/components/WhatsAppChatbot";
import { SEO } from "@/components/SEO";
import { BLOG_POSTS, altFor } from "@/data/blogPosts";
import { Link } from "react-router-dom";

const Index = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "MahadevFast",
      alternateName: ["MahadevFast Cricket ID", "MahadevFast Betting"],
      url: "https://www.mahadevfast.live/",
      logo: "https://www.mahadevfast.live/favicon.png",
      image: "https://www.mahadevfast.live/og-image.jpg",
      description: "India's fastest online cricket betting ID platform. Get your cricket betting ID in 60 seconds via WhatsApp.",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        availableLanguage: ["English", "Hindi"],
        url: "https://www.mahadevfast.live/",
      },
      areaServed: { "@type": "Country", name: "India" },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "MahadevFast",
      url: "https://www.mahadevfast.live/",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.mahadevfast.live/blog?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://www.mahadevfast.live/#organization",
      name: "MahadevFast",
      url: "https://www.mahadevfast.live/",
      logo: "https://www.mahadevfast.live/favicon.png",
      image: "https://www.mahadevfast.live/og-image.jpg",
      description: "India's fastest cricket betting ID platform — Get your ID in 60 seconds via WhatsApp",
      areaServed: { "@type": "Country", name: "India" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "12480",
        reviewCount: "8743",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What is MahadevFast?", acceptedAnswer: { "@type": "Answer", text: "MahadevFast is India's fastest online cricket betting ID provider. Get your betting ID in 60 seconds via WhatsApp. Bet on IPL, T20, Test cricket and play 500+ casino games including Teen Patti, Aviator and Andar Bahar." } },
        { "@type": "Question", name: "How do I get a MahadevFast cricket betting ID?", acceptedAnswer: { "@type": "Answer", text: "Send 'Get ID' to our WhatsApp and we'll create your betting ID within 60 seconds. No forms, no documents, no waiting. Your ID is active immediately." } },
        { "@type": "Question", name: "Is MahadevFast safe and secure?", acceptedAnswer: { "@type": "Answer", text: "Yes. MahadevFast is 100% safe and secure. Your personal information and financial data are fully protected. All deposits and withdrawals are processed securely." } },
        { "@type": "Question", name: "What payment methods are supported?", acceptedAnswer: { "@type": "Answer", text: "UPI, PhonePe, Google Pay, Paytm, IMPS, NEFT and direct bank transfer — all in INR." } },
        { "@type": "Question", name: "How fast are withdrawals?", acceptedAnswer: { "@type": "Answer", text: "Most UPI withdrawals settle within 5–15 minutes, 24x7." } },
        { "@type": "Question", name: "What is the minimum deposit?", acceptedAnswer: { "@type": "Answer", text: "Just ₹100 — start small and scale as you go." } },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.mahadevfast.live/" }],
    },
  ];

  const featured = BLOG_POSTS.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="MahadevFast — #1 Cricket Betting ID India | Get Your ID in 60 Seconds"
        description="Get your MahadevFast cricket betting ID in 60 seconds on WhatsApp. Bet on IPL 2026, T20 World Cup, Teen Patti & Aviator. Minimum deposit ₹100, withdrawal in 5 minutes, 24x7 Hindi & English support. Join India's fastest cricket betting platform today."
        canonical="/"
        keywords="mahadevfast, mahadevfast cricket id, cricket betting id India, IPL 2026 betting, online cricket betting India, cricket betting WhatsApp, mahadevfast.live"
        jsonLd={jsonLd}
      />
      <TickerBar />
      <Header />
      <main>
        <Hero />
        <PromoSlider />
        <GamesSection />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CTABanner />

        {/* Featured Blog Section — drives internal SEO juice */}
        <section className="container py-16 md:py-24" id="blog-preview">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">From the Blog</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Expert <span className="text-gradient-gold">Betting Guides</span> & Strategy
            </h2>
            <p className="text-muted-foreground mt-4">
              IPL 2026 tips, Teen Patti strategy, UPI payment guides — written by India's top betting and casino experts.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featured.map(post => (
              <Link key={post.slug} to={`/blog/${post.slug}`}
                className="group rounded-2xl overflow-hidden border border-gold/20 bg-card hover:border-gold/60 hover:shadow-gold transition-all">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img src={post.cover} alt={altFor(post.cover)} loading="lazy" width={600} height={338} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-bold text-gold">{post.category}</span>
                  <h3 className="font-display font-bold text-lg mt-2 group-hover:text-gold transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/blog" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gold/40 text-gold font-bold hover:bg-gold/10 transition-all">
              Read all articles →
            </Link>
          </div>
        </section>

        <FAQ />
      </main>
      <Footer />
      <WhatsAppChatbot />
    </div>
  );
};

export default Index;
