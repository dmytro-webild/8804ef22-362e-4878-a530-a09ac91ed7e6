import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarFloatingLogo from '@/components/ui/NavbarFloatingLogo';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Forside",    "href": "/"
  },
  {
    "name": "For bygherrer",    "href": "/bygherrer"
  },
  {
    "name": "For annoncører",    "href": "/annoncoerer"
  },
  {
    "name": "Cases",    "href": "/cases"
  },
];

  return (
    <StyleProvider buttonVariant="stagger" siteBackground="noise" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloatingLogo
      logo=""
      logoImageSrc="https://storage.googleapis.com/webild/users/user_3FrMethFYMocawsrxMGgPOOqDSP/uploaded-1782903585079-e26ykr59.png"
      ctaButton={{
        text: "Kontakt os",        href: "/kontakt"}}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimple
      brand={<img src="https://storage.googleapis.com/webild/users/user_3FrMethFYMocawsrxMGgPOOqDSP/uploaded-1782910522595-8iyx2pbc.png" alt="Urban OOH" className="h-8 w-auto brightness-0 invert" /> as unknown as string}
      columns={[
        {
          title: "Menu",          items: [
            {
              label: "Forside",              href: "/"},
            {
              label: "For bygherrer",              href: "/bygherrer"},
            {
              label: "For annoncører",              href: "/annoncoerer"},
          ],
        },
        {
          title: "Virksomhed",          items: [
            {
              label: "Kontakt",              href: "/kontakt"},
            {
              label: "Cases",              href: "/cases"},
          ],
        },
        {
          title: "Adresse",          items: [
            {
              label: "Grundtvigs sidevej 2",              href: "#"},
            {
              label: "1865 Frederiksberg C",              href: "#"},
          ],
        },
      ]}
      copyright="© 2024 Urban OOH. Alle rettigheder forbeholdes."
      links={[
        {
          label: "Privatlivspolitik",          href: "#"},
        {
          label: "Cookies",          href: "#"},
        {
          label: "Handelsbetingelser",          href: "/handelsbetingelser"}
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}