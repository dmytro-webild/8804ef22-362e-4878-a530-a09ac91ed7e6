import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MetricsFeatureCards from '@/components/sections/metrics/MetricsFeatureCards';
import TestimonialMarqueeOverlayCards from '@/components/sections/testimonial/TestimonialMarqueeOverlayCards';
import TestimonialTrustCard from '@/components/sections/testimonial/TestimonialTrustCard';
import AboutTestimonialParallax from '@/components/sections/about/AboutTestimonialParallax';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBillboard
      title="Forvandl byggeplads til premium medieflade."
      description="Urban OOH forbinder bygherrer med de stærkeste storformat-placeringer i Danmark."
      primaryButton={{
        text: "For bygherrer",        href: "/bygherrer"}}
      secondaryButton={{
        text: "For annoncører",        href: "/annoncoerer"}}
      imageSrc="https://storage.googleapis.com/webild/users/user_3FrMethFYMocawsrxMGgPOOqDSP/uploaded-1782900317840-e2y1mi42.jpg"
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialMarqueeOverlayCards
      tag="Cases"
      title="Vi skaber værdi for alle parter."
      description="Hør hvad bygherrer og mediebureauer siger."
      testimonials={[
        {
          name: "Magnus Ebbesen",          role: "Client Manager",          company: "Dentsu",          rating: 5,
          imageSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=256&h=256"},
        {
          name: "Christian Petersson",          role: "Project Development Manager",          company: "Urban Partners",          rating: 5,
          imageSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=256&h=256"},
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsFeatureCards
      tag="Resultater"
      title="Synlighed der flytter noget."
      description="Vi skaber markant impact for brands i byrummet."
      metrics={[
        {
          value: "200k+",          title: "Månedlige visninger",          features: [
            "Høj trafik flow",            "Unik lokation",            "Primetid eksponering"],
        },
        {
          value: "98%",          title: "Kampagne recall",          features: [
            "Høj gennemslagskraft",            "Kreativ frihed",            "Premium format"],
        },
        {
          value: "15+",          title: "Nye lokationer",          features: [
            "Vækst i byer",            "Strategisk valg",            "Bygherre fokus"],
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonial" data-section="testimonial">
    <SectionErrorBoundary name="testimonial">
          <TestimonialTrustCard
      quote="Urban OOH har transformeret vores byggeplads til en moderne medieflade. En professionel proces fra start til slut."
      rating={5}
      author="Jesper Vester, Vester Byg"
      avatars={[
        {
          name: "Anders",          imageSrc: "http://img.b2bpic.net/free-photo/male-cool-influencer-hosting-live-presentation-with-hands-free-microphone_482257-126542.jpg"},
        {
          name: "Mette",          imageSrc: "http://img.b2bpic.net/free-photo/young-stylish-woman-exploring-city_23-2149186681.jpg"},
        {
          name: "Søren",          imageSrc: "http://img.b2bpic.net/free-photo/young-japanese-woman-outdoors_23-2149010153.jpg"},
        {
          name: "Trine",          imageSrc: "http://img.b2bpic.net/free-photo/young-adult-traveling-london_23-2149259455.jpg"},
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTestimonialParallax
      tag="Om os"
      quote="Vi bygger bro mellem byggepladser og brands."
      author="Urban OOH Team"
      role="Media Partner"
      videoSrc="https://storage.googleapis.com/webild/default/video-placeholder.mp4"
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}