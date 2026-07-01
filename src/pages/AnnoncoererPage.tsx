import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import MetricsFeatureCards from '@/components/sections/metrics/MetricsFeatureCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function AnnoncoererPage() {
  return (
    <>
  <div id="product-annoncoerer" data-section="product-annoncoerer">
    <SectionErrorBoundary name="product-annoncoerer">
          <FeaturesImageBento
      tag="For annoncører"
      title="Synlighed i storformat."
      description="Nå din målgruppe med markedets mest prominente placeringer i bybilledet."
      items={[
        {
          title: "Rådhuspladsen, Aarhus",
          description: "Premium placering",
          imageSrc: "https://storage.googleapis.com/webild/users/user_3FrMethFYMocawsrxMGgPOOqDSP/uploaded-1782908693238-pg4epy1v.jpg",
        },
        {
          title: "Aarhus C",
          description: "Høj frekvens",
          imageSrc: "https://storage.googleapis.com/webild/users/user_3FrMethFYMocawsrxMGgPOOqDSP/uploaded-1782908571285-efgxnxr5.png?_wi=2",
        },
        {
          title: "Storbypuls",
          description: "Maksimal synlighed",
          imageSrc: "https://storage.googleapis.com/webild/users/user_3FrMethFYMocawsrxMGgPOOqDSP/uploaded-1782908571285-efgxnxr5.png?_wi=3",
        },
        {
          title: "Strategisk",
          description: "Målrettet rækkevidde",
          imageSrc: "https://storage.googleapis.com/webild/users/user_3FrMethFYMocawsrxMGgPOOqDSP/uploaded-1782908349799-6ku5kx9l.jpg",
        },
        {
          title: "Kreativt",
          description: "Frit format",
          imageSrc: "https://storage.googleapis.com/webild/users/user_3FrMethFYMocawsrxMGgPOOqDSP/uploaded-1782908963358-fhwkngbh.jpg",
        },
        {
          title: "Effektivt",
          description: "Høj recall",
          imageSrc: "https://storage.googleapis.com/webild/users/user_3FrMethFYMocawsrxMGgPOOqDSP/uploaded-1782908917373-u8rh0kkv.jpg",
        },
        {
          title: "Kvalitet",
          description: "Professionel opsætning",
          imageSrc: "https://storage.googleapis.com/webild/users/user_3FrMethFYMocawsrxMGgPOOqDSP/uploaded-1782909004007-dgetifnr.jpg",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsFeatureCards
      tag="Kampagne"
      title="Målrettet medieflader."
      description="Vi tilbyder de bedste placeringer i Danmark."
      metrics={[
        {
          value: "Top 5",
          title: "Lokationer",
          features: [
            "Højeste trafik",
            "Centralt i byen",
            "Høj recall",
          ],
        },
        {
          value: "100%",
          title: "Kampagne support",
          features: [
            "Design rådgivning",
            "Opsætnings hjælp",
            "Effekt analyse",
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
