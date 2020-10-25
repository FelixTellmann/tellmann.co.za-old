import { CSSProperties, FC, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { Box } from "./Box";
import { Button } from "./Button";
import { Link } from "./Link";
import { ToggleNav } from "./ToggleNav";

type HeaderProps = {
  logo: { href: string, src: string, alt?: string }
  nav: { href: string, title: string, alt?: string, style?: "button" | "hideOnDesktop" }[]
  address: { city: string, street: string, location: string, tel: string }
  contactNav: { href: string, title?: string, icon?: string, alt: string, style?: "iconOnMobile", nav?: boolean }[]
  style?: CSSProperties
  toggleColor: (e) => void
  theme: string
}

export const Header: FC<HeaderProps> = ({ logo, nav, toggleColor, theme, contactNav, address, style = {} }) => {
  const [showMobileHeader, setShowMobileHeader] = useState(false);
  const toggleMobileNav = () => setShowMobileHeader(!showMobileHeader);
  return (
    <>
      <style jsx>{`
        .header {
          --height: 80px;
          --z-index: 1000;
        }
      
      
      `}</style>
      
      <header className="header">
        <Box maxW={"--wrapper"} h="--height" px={3} d="flex" align="center" justify={"space-between"} mx={`auto`}>
          
          {/*= =============== Logo ================ */}
          <Link href={logo.href} d="block" py={2} h="100%"><img src={logo.src} alt={logo.alt} /></Link>
          
          {/*= =============== Nav ================ */}
          <Box as="nav" className="nav" d="flex" justify={"flex-end"} align={"center"}>
            {nav.map(({ href, title, alt, style }) => <Link href={href} nav>{title}</Link>)}
          </Box>
          
          {/*= =============== Icons ================ */}
          <ToggleNav toggleState={showMobileHeader ? "active" : ""} toggleMobileNav={toggleMobileNav} />
          <Button aria-label="Toggle Color Theme" onClick={toggleColor} icon secondary ml={[1, 3]}>
            {theme === "light-theme" ? <FiMoon style={{ filter: `drop-shadow(rgba(0, 0, 0, 0.35) 00003px)` }} /> : null}
            {theme === "dark-theme" ? <FiSun style={{ color: `#0bc5ea` }} /> : null}
          </Button>
        
        </Box>
      </header>
    </>
  );
};