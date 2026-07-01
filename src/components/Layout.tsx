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
      logo=""
      logoImageSrc="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect x='10' y='40' width='180' height='70' fill='none' stroke='%231c1c1c' stroke-width='10'/%3E%3Ctext x='100' y='88' font-family='system-ui, sans-serif' font-weight='900' font-size='42' fill='%231c1c1c' text-anchor='middle' letter-spacing='4'%3EURBAN%3C/text%3E%3Ctext x='180' y='155' font-family='system-ui, sans-serif' font-weight='900' font-size='42' fill='%231c1c1c' text-anchor='end' letter-spacing='4'%3EOOH%3C/text%3E%3C/svg%3E"
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