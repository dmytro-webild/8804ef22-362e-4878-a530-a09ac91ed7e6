import BlogMediaCards from '@/components/sections/blog/BlogMediaCards';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function CasesPage() {
  return (
    <>
  <div id="blog" data-section="blog">
    <SectionErrorBoundary name="blog">
          <BlogMediaCards
      tag="Cases"
      title="Udvalgte projekter."
      description="Se hvordan vi samarbejder med førende brands."
      items={[
        {
          category: "Retail",
          title: "Aarhus Rådhuspladsen Rådhuspladsen",
          excerpt: "Storformat kampagne på byggeplads centralt i Aarhus Rådhuspladsen C.",
          authorName: "Urban OOH",
          authorImageSrc: "",
          date: "2024-05-12",
          imageSrc: "http://img.b2bpic.net/free-photo/big-signpost-banner-city_23-2147764774.jpg",
        },
        {
          category: "Tech",
          title: "Aarhus Rådhuspladsen",
          excerpt: "Høj frekvens placering i centrum.",
          authorName: "Urban OOH",
          authorImageSrc: "",
          date: "",
          imageSrc: "http://img.b2bpic.net/free-photo/huge-billboard_23-2147726650.jpg",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="social-proof" data-section="social-proof">
    <SectionErrorBoundary name="social-proof">
          <SocialProofMarquee
      tag="Partnere"
      title="Samarbejdspartnere"
      description="Vi arbejder sammen med landets førende ejendomsudviklere."
      names={[
        "ByggePartner",
        "Holm Ejendomme",
        "Vester Byg",
        "Nordic Invest",
        "City Construction",
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
