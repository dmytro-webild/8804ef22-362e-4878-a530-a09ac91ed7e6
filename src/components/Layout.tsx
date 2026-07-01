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
      logoImageSrc="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%231c1c1c' rx='40'/%3E%3Crect x='30' y='40' width='140' height='90' fill='none' stroke='%23ffffff' stroke-width='12' rx='12'/%3E%3Cpath d='M 40 130 L 40 90 L 65 90 L 65 65 L 95 65 L 95 100 L 125 100 L 125 75 L 160 75 L 160 130 Z' fill='%23ffffff'/%3E%3Cline x1='100' y1='130' x2='100' y2='170' stroke='%23ffffff' stroke-width='16' stroke-linecap='round'/%3E%3Cline x1='60' y1='170' x2='140' y2='170' stroke='%23ffffff' stroke-width='12' stroke-linecap='round'/%3E%3C/svg%3E"
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