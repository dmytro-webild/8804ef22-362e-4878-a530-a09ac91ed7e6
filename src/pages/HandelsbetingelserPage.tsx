import NavbarCentered from "@/components/ui/NavbarCentered";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import { routes } from "@/routes";

const termsData = [
  {
    h: "1. Generelt",
    p: "Disse handelsbetingelser gælder for alle aftaler om køb af reklame- og mediearealer, kampagner og øvrige ydelser (\"ydelserne\") hos Urban OOH. Ved at afgive en bestilling eller indgå en aftale med Urban OOH accepterer kunden disse betingelser. Eventuelle afvigende vilkår fra kunden er kun gældende, hvis Urban OOH har accepteret dem skriftligt."
  },
  {
    h: "2. Virksomhedsoplysninger",
    p: "Urban OOH, Grundtvigsvej 2, 1865 Frederiksberg C. E-mail: info@urbanooh.dk. CVR-nr.: [CVR-nr.]"
  },
  {
    h: "3. Aftaleindgåelse og bestilling",
    p: "En aftale er bindende for begge parter, når kunden har modtaget en skriftlig ordrebekræftelse fra Urban OOH. Kunden er ansvarlig for, at de oplysninger og det materiale, der afgives i forbindelse med bestillingen, er korrekte. Ændringer til en igangværende ordre skal aftales skriftligt og kan medføre justering af pris og leveringstidspunkt."
  },
  {
    h: "4. Priser og fakturering",
    p: "Alle priser er angivet i danske kroner (DKK) ekskl. moms, medmindre andet er anført. Priser er baseret på de oplysninger, kunden har afgivet ved bestillingen, herunder kampagneperiode, placering og omfang. Urban OOH forbeholder sig retten til at regulere priser ved ændringer i kampagnens omfang eller varighed. Fakturering sker ved kampagnestart, medmindre andet er aftalt."
  },
  {
    h: "5. Betalingsbetingelser",
    p: "Betalingsfristen er netto 8 dage fra fakturadato, medmindre andet er skriftligt aftalt. Ved forsinket betaling beregnes morarenter i henhold til rentelovens bestemmelser, og der kan opkræves rykkergebyr efter gældende regler. Urban OOH forbeholder sig retten til at standse igangværende og planlagte kampagner ved væsentlig betalingsmisligholdelse."
  },
  {
    h: "6. Kampagneperiode og opsætning",
    p: "Opsætning og nedtagning af reklamemateriale sker inden for den periode, der er aftalt ved bestillingen. Urban OOH tilstræber at overholde de aftalte tidsfrister, men kan ikke holdes ansvarlig for forsinkelser, der skyldes forhold uden for Urban OOHs kontrol, herunder vejrforhold, tredjeparters forhold eller offentlige tilladelser. Kunden leverer godkendt reklamemateriale i den kvalitet og det format, Urban OOH anviser, senest på det tidspunkt, der fremgår af ordrebekræftelsen. Leveres materialet for sent, kan kampagnestart udskydes uden at det berører prisen eller betalingsfristen."
  },
  {
    h: "7. Annullering og afbestilling",
    p: "Ved kundens annullering af en aftale gælder følgende gebyrer beregnet af den samlede ordresum:",
    hasTable: true,
    p2: "Annullering skal ske skriftligt til info@urbanooh.dk. Allerede afholdte omkostninger til produktion af reklamemateriale faktureres kunden uanset tidspunktet for annulleringen."
  },
  {
    h: "8. Force majeure og vejrforhold",
    p: "Urban OOH er ikke ansvarlig for manglende eller mangelfuld opfyldelse af aftalen, hvis dette skyldes forhold uden for Urban OOHs rimelige kontrol, herunder ekstremt vejrlig, naturkatastrofer, brand, strejke, hærværk, myndighedsindgreb eller lignende force majeure-lignende omstændigheder. Da ydelserne leveres udendørs, kan reklamemateriale i sjældne tilfælde blive beskadiget af vejrforhold eller hærværk; Urban OOH retablerer materialet hurtigst muligt, men påtager sig ikke erstatningsansvar herfor, medmindre andet følger af ufravigelig lovgivning."
  },
  {
    h: "9. Ansvar og reklamation",
    p: "Urban OOHs erstatningsansvar er begrænset til direkte tab og kan ikke overstige det beløb, kunden har betalt for den pågældende ydelse. Urban OOH er under ingen omstændigheder ansvarlig for indirekte tab, herunder driftstab, tabt fortjeneste eller andre følgeskader. Reklamationer over leverede ydelser skal fremsættes skriftligt senest 8 dage efter kampagnestart."
  },
  {
    h: "10. Immaterielle rettigheder og markedsføringsmateriale",
    p: "Kunden indestår for, at det materiale, der leveres til brug i kampagnen, ikke krænker tredjemands rettigheder, og at kunden har de fornødne rettigheder til at anvende materialet i offentlig reklamering. Urban OOH kan efter aftale med kunden anvende billeder af opsatte kampagner i eget portfolio og markedsføringsmateriale, medmindre kunden skriftligt frabeder sig dette."
  },
  {
    h: "11. Behandling af personoplysninger",
    p: "Urban OOH behandler personoplysninger i overensstemmelse med databeskyttelsesforordningen (GDPR) og databeskyttelsesloven. Oplysninger, som kunden afgiver i forbindelse med en aftale, anvendes alene til opfyldelse af aftalen, fakturering og relevant kommunikation om kampagnen."
  },
  {
    h: "12. Ændringer af handelsbetingelser",
    p: "Urban OOH kan løbende opdatere disse handelsbetingelser. Ændringer har virkning for aftaler, der indgås efter offentliggørelsen af den opdaterede version på urbanooh.dk. Allerede indgåede aftaler berøres ikke af senere ændringer."
  },
  {
    h: "13. Lovvalg og værneting",
    p: "Aftaler mellem Urban OOH og kunden er underlagt dansk ret. Eventuelle tvister, der ikke kan løses i mindelighed, skal afgøres ved de danske domstole med Urban OOHs hjemting som værneting."
  }
];

export default function HandelsbetingelserPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <NavbarCentered
        logo="Urban OOH"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "Kontakt os", href: "/kontakt" }}
      />
      
      <main className="flex-grow max-w-3xl mx-auto px-6 py-24 w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Handelsbetingelser</h1>
        <p className="text-muted-foreground mb-16 text-lg">
          Urban OOH<br />
          Gældende pr. 1. juli 2026
        </p>

        <div className="space-y-12">
          {termsData.map((section, idx) => (
            <section key={idx} className="scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">{section.h}</h2>
              <p className="text-muted-foreground leading-relaxed">{section.p}</p>
              
              {section.hasTable && (
                <div className="my-8 overflow-x-auto rounded-lg border border-border bg-card">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-muted/50">
                      <tr className="border-b border-border">
                        <th className="py-4 px-6 font-medium text-foreground">Tidspunkt for annullering</th>
                        <th className="py-4 px-6 font-medium text-foreground">Gebyr</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground divide-y divide-border">
                      <tr><td className="py-4 px-6">Mere end 30 dage før kampagnestart</td><td className="py-4 px-6">Intet gebyr</td></tr>
                      <tr><td className="py-4 px-6">15-30 dage før kampagnestart</td><td className="py-4 px-6">25% af ordresummen</td></tr>
                      <tr><td className="py-4 px-6">7-14 dage før kampagnestart</td><td className="py-4 px-6">50% af ordresummen</td></tr>
                      <tr><td className="py-4 px-6">Mindre end 7 dage før kampagnestart</td><td className="py-4 px-6">100% af ordresummen</td></tr>
                    </tbody>
                  </table>
                </div>
              )}
              
              {section.p2 && (
                <p className="text-muted-foreground leading-relaxed mt-4">{section.p2}</p>
              )}
            </section>
          ))}
        </div>
      </main>

      <FooterSimple
        brand="Urban OOH"
        columns={[{ title: "Kontakt", items: [{ label: "info@urbanooh.dk", href: "mailto:info@urbanooh.dk" }] }]}
        copyright="© 2026 Urban OOH. Alle rettigheder forbeholdes."
        links={[
          { label: "Handelsbetingelser", href: "/handelsbetingelser" },
          { label: "Privatlivspolitik", href: "/privatlivspolitik" }
        ]}
      />
    </div>
  );
}