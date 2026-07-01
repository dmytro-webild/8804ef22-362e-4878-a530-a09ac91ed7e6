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
  }
];

  return (
    <StyleProvider buttonVariant="stagger" siteBackground="noise" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloatingLogo
      logo="Urban OOH"
      logoImageSrc="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%231c1c1c' rx='40'/%3E%3Crect x='50' y='50' width='100' height='60' fill='none' stroke='%23ffffff' stroke-width='16' rx='8'/%3E%3Cline x1='100' y1='110' x2='100' y2='150' stroke='%23ffffff' stroke-width='16'/%3E%3Cline x1='70' y1='150' x2='130' y2='150' stroke='%23ffffff' stroke-width='16'/%3E%3C/svg%3E"
      ctaButton={{
        text: "Kontakt os",        href: "/kontakt"}}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimple
      brand="Urban OOH"
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
      ]}
      copyright="© 2024 Urban OOH. Alle rettigheder forbeholdes."
      links={[
        {
          label: "Privatliv",          href: "#"},
        {
          label: "Cookies",          href: "#"},
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}