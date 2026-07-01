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
      logoImageSrc="https://storage.googleapis.com/webild/default/no-image.jpg?id=tx6dhf"
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