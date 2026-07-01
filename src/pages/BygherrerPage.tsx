import AboutFeaturesSplit from '@/components/sections/about/AboutFeaturesSplit';
import MetricsFeatureCards from '@/components/sections/metrics/MetricsFeatureCards';
import { CheckCircle, Shield, Zap } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function BygherrerPage() {
  return (
    <>
  <div id="about-bygherrer" data-section="about-bygherrer">
    <SectionErrorBoundary name="about-bygherrer">
          <AboutFeaturesSplit
      tag="For bygherrer"
      title="Øg værdien af din byggeplads."
      description="Vi håndterer hele processen. Fra rettigheder og tilladelser til montage og nedtagning. Du får en ny indtægtskilde helt uden besvær."
      items={[
        {
          icon: CheckCircle,
          title: "Fuldt ansvar",
          description: "Vi tager os af alt det juridiske og praktiske.",
        },
        {
          icon: Zap,
          title: "Hurtig eksekvering",
          description: "Professionel montage der passer til din tidsplan.",
        },
        {
          icon: Shield,
          title: "Sikker drift",
          description: "Vi sikrer høj standard og korrekt dokumentation.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/modern-residential-complex-near-water-with-construction-crane-contemporary-building-construction_169016-69089.jpg"
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsFeatureCards
      tag="Forretning"
      title="Optimer din byggeplads."
      description="Gør din byggeplads til en aktiv kilde for indtjening."
      metrics={[
        {
          value: "100%",
          title: "Håndteret proces",
          features: [
            "Ingen administration",
            "Juridisk sikret",
            "Høj indtjeningsmodel",
          ],
        },
        {
          value: "24/7",
          title: "Synlighed",
          features: [
            "Døgndrift",
            "Lyst på",
            "Høj standard",
          ],
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
