import { AppProps } from "next/app";
import { createContext, FC } from "react";
import GoogleFonts from "next-google-fonts";
import { All, BreakpointProvider } from "use-styled-system";
import { DefaultSeo } from "next-seo";
import "reset-css/sass/_reset.scss";
import "styles/default.scss";
import "styles/theme.scss";
import { useRouter } from "next/router";
import useColorTheme from "use-color-theme";
import { Box, Header } from "components";

export const ThemeContext = createContext({ theme: "" });
const title = "Tellmann - E-commerce Web development Studio"
const description = "Creator of things that live on the internet - Web developer, writer and entrepreneur."
export const Root: FC<AppProps & All> = ({ pageProps, Component }) => {
  const colorTheme = useColorTheme("light-theme", { classNames: ["light-theme", "dark-theme"] });
  const router = useRouter();
  return (
      <>
        <>
          <DefaultSeo
              title={title}
              description={description}
              openGraph={{
                type: "website",
                locale: "en_IE",
                url: "https://www.tellmann.co.za/",
                site_name: "Tellmann",
                title,
                description,
                images: [
                  {
                    url: "https://www.tellmann.co.za/images/og-default.jpg",
                    alt: title,
                    width: 1200,
                    height: 630
                  }
                ]
              }}
              twitter={{
                handle: "@Tellmann",
                site: "@FelixTellmann",
                cardType: "summary_large_image"
              }}
              canonical={`https://www.tellmann.co.za/${router.pathname}`}
          />
          <GoogleFonts href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:wght@400;500;700&display=swap" />
        </>
        
        <BreakpointProvider breakPoints={[0, 600, 900, 1200]}>
          <ThemeContext.Provider value={{ theme: colorTheme.value }}>
            <style jsx>{`
          

          .main {
            min-height: calc(100vh);
            margin: 0 0 0;
            overflow: hidden;
            /*@include responsive('tablet-and-up') {
              min-height: calc(100vh - var(--header-height));
              margin: var(--header-height) 0 0;
            }
            @include responsive('desktop') {
              min-height: calc(100vh - var(--header-height));
              margin: var(--header-height) var(--frame-border) 0;
            }*/
          }
        
        `}</style>
            <Header
                logo={{ href: "#", src: "logo.svg", alt: "Tellmann Logo" }}
                nav={[
                  { href: "#home", title: "Home", alt: "Hi.", style: "hideOnDesktop" },
                  { href: "#about", title: "About", alt: "Who we are" },
                  { href: "#work", title: "Work", alt: `What we've done` },
                  { href: "#services", title: "Services", alt: `What we can do` },
                  { href: "#contact", title: "Contact", alt: `Get in touch`, style: "button" }
                ]}
                address={{ city: "Cape Town", street: "Woodstock Exchange", location: "Office 12", tel: "+27760313590" }}
                contactNav={[
                  { href: "mailto:info@tellmann.co.za", title: "info@tellmann.co.za", icon: "IoIosMail", nav: true, alt: "Email Us" },
                  { href: "tel: +27760313590", title: "076 031 3590", icon: "IoIosCall", alt: "Call Us", nav: true, style: "iconOnMobile" },
                  { href: "#facebook", icon: "IoLogoFacebook", alt: "Facebook" },
                  { href: "#whatsapp", icon: "IoLogoWhatsapp", alt: "Whatsapp" }
                ]}
                toggleColor={() => colorTheme.toggle()}
                theme={colorTheme.value}
            >
            </Header>
            <main className="main">
              <Component {...pageProps} />
              {/*<Footer
                  logo={{ href: "#home", src: "", alt: "Tellmann Logo" }}
                  partners={[
                    { src: "partners-shopify.svg", alt: "Shopify" },
                    { src: "partners-shopify.svg", alt: "Shopify" },
                    { src: "partners-shopify.svg", alt: "Shopify" },
                    { src: "partners-shopify.svg", alt: "Shopify" },
                    { src: "partners-shopify.svg", alt: "Shopify" }
                  ]}
                  nav={[
                    {
                      title: "Selling Online made Easy",
                      responsive: ["col", "col", "hidden"],
                      items: [
                        { title: "Who we are", href: "#about" },
                        { title: "Who we are", href: "#about" },
                        { title: "Sell online", href: "#about" },
                        { title: "Shopify Features", href: "#about" },
                        { title: "Ecommerce Websites", href: "#about" },
                        { title: "Ecommerce Lessons", href: "#about" }
                      ]
                    },
                    {
                      title: "\u00A0",
                      responsive: ["col", "col", "hidden"],
                      items: [
                        { title: "Who we are", href: "#about" },
                        { title: "Sell online", href: "#about" },
                        { title: "Shopify Features", href: "#about" },
                        { title: "Ecommerce Websites", href: "#about" },
                        { title: "Ecommerce Lessons", href: "#about" },
                        { title: "Who we are", href: "#about" },
                        { title: "Sell online", href: "#about" }
                      ]
                    },
                    {
                      title: "Tools",
                      responsive: ["col", "col", "hidden"],
                      items: [
                        { title: "Who we are        ", href: "#about" },
                        { title: "Sell online       ", href: "#about" },
                        { title: "Shopify Features  ", href: "#about" },
                        { title: "Ecommerce Websites", href: "#about" },
                        { title: "Ecommerce Lessons ", href: "#about" },
                        { title: "Who we are        ", href: "#about" }
                      ]
                    },
                    {
                      title: "Support",
                      responsive: ["col", "col", "hidden"],
                      items: [
                        { title: "Who we are        ", href: "#about" },
                        { title: "Sell online       ", href: "#about" },
                        { title: "Shopify Features  ", href: "#about" },
                        { title: "Ecommerce Websites", href: "#about" },
                        { title: "Ecommerce Lessons ", href: "#about" }
                      ]
                    },
                    {
                      title: "Tellmann",
                      responsive: ["col", "col", "hidden"],
                      items: [
                        { title: "Who we are        ", href: "#about" },
                        { title: "Sell online       ", href: "#about" },
                        { title: "Shopify Features  ", href: "#about" },
                        { title: "Ecommerce Websites", href: "#about" },
                        { title: "Ecommerce Lessons ", href: "#about" }
                      ]
                    }
                  ]}
                  contactNav={[
                    { href: "mailto:info@tellmann.co.za", title: "info@tellmann.co.za", icon: "IoIosMail", nav: true, alt: "Email Us" },
                    { href: "tel: +27760313590", title: "076 031 3590", icon: "IoIosCall", alt: "Call Us", nav: true, style: "iconOnMobile" },
                    { href: "#facebook", icon: "IoLogoFacebook", alt: "Facebook" },
                    { href: "#whatsapp", icon: "IoLogoWhatsapp", alt: "Whatsapp" }
                  ]}
                  copyright={`Copyright © 2017 - ${new Date(Date.now()).getFullYear()}.<br>All rights reserved. Tellmann.`}
              />*/}
            </main>
          </ThemeContext.Provider>
        </BreakpointProvider>
      </>
  );
};

export default Root;
