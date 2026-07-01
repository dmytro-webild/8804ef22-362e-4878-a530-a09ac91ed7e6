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
          title: "Aarhus Rådhuspladsen",
          excerpt: "Storformat kampagne på byggeplads centralt i Aarhus Rådhuspladsen C.",
          authorName: "Urban OOH",
          authorImageSrc: "",
          date: "",
          imageSrc: "https://storage.googleapis.com/webild/users/user_3FrMethFYMocawsrxMGgPOOqDSP/uploaded-1782911834386-nqaqccgm.jpg",
        },
        {
          category: "Tech",
          title: "Aarhus Rådhuspladsen",
          excerpt: "Høj frekvens placering i centrum.",
          authorName: "Urban OOH",
          authorImageSrc: "",
          date: "",
          imageSrc: "https://storage.googleapis.com/webild/users/user_3FrMethFYMocawsrxMGgPOOqDSP/uploaded-1782911747783-10uunk3k.jpg",
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
      logos={[
        { src: "https://storage.googleapis.com/webild/users/user_3FrMethFYMocawsrxMGgPOOqDSP/uploaded-1782912109791-pykk1377.png", alt: "Partner 1" },
        { src: "https://storage.googleapis.com/webild/users/user_3FrMethFYMocawsrxMGgPOOqDSP/uploaded-1782912109792-3p026ffc.png", alt: "Partner 2" },
        { src: "https://storage.googleapis.com/webild/users/user_3FrMethFYMocawsrxMGgPOOqDSP/uploaded-1782912109792-89ucon5k.png", alt: "Partner 3" },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
