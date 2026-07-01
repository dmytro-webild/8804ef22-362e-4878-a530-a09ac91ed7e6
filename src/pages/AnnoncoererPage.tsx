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
          imageSrc: "http://img.b2bpic.net/free-photo/man-with-smartphone-taking-selfie_23-2148296613.jpg",
        },
        {
          title: "Aarhus C",
          description: "Høj frekvens",
          imageSrc: "http://img.b2bpic.net/free-photo/empty-billboard-metropolis-city_23-2151913701.jpg",
        },
        {
          title: "Storbypuls",
          description: "Maksimal synlighed",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-painted-red-black-big-blank-hoarding-against-sky_23-2147901109.jpg",
        },
        {
          title: "Strategisk",
          description: "Målrettet rækkevidde",
          imageSrc: "http://img.b2bpic.net/free-photo/cityscape-with-neon-sign_23-2148164916.jpg",
        },
        {
          title: "Kreativt",
          description: "Frit format",
          imageSrc: "http://img.b2bpic.net/free-photo/big-billboard-template-building-city_23-2148197245.jpg",
        },
        {
          title: "Effektivt",
          description: "Høj recall",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-women-keeping-distance_23-2148627189.jpg",
        },
        {
          title: "Kvalitet",
          description: "Professionel opsætning",
          imageSrc: "https://storage.googleapis.com/webild/users/user_3FrMethFYMocawsrxMGgPOOqDSP/uploaded-1782908349793-0ece546j.jpg",
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
