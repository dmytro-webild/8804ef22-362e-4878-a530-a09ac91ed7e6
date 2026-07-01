import ContactCta from '@/components/sections/contact/ContactCta';
import ContactParallaxCard from '@/components/sections/contact/ContactParallaxCard';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function KontaktPage() {
  return (
    <>
  <div id="contact-section" data-section="contact-section">
    <SectionErrorBoundary name="contact-section">
          <ContactCta
      tag="Kontakt os"
      text="Lad os diskutere din næste placering eller kampagne."
      primaryButton={{
        text: "Send besked",
        href: "#",
      }}
      secondaryButton={{
        text: "Ring nu",
        href: "tel:+4500000000",
      }}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactParallaxCard
      title="Hvad kan vi gøre for dig?"
      inputs={[
        {
          name: "Navn",
          type: "text",
          placeholder: "Dit navn",
          required: true,
        },
        {
          name: "Email",
          type: "email",
          placeholder: "din@email.dk",
          required: true,
        },
      ]}
      textarea={{
        name: "Besked",
        placeholder: "Beskriv projektet...",
        rows: 4,
        required: true,
      }}
      buttonText="Send nu"
      footerText="Vi vender tilbage hurtigst muligt."
      footerLink={{
        text: "Ring os op",
        href: "tel:+4500000000",
        imageSrc: "http://img.b2bpic.net/free-photo/man-checking-bulletin-board-station_23-2148757041.jpg",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/construction-site-with-tower-crane-apartments-urban-modern-architecture_169016-69092.jpg"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
