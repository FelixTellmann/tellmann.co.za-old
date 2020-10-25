import { AppProps } from 'next/app';
import { createContext, FC } from 'react';
import GoogleFonts from 'next-google-fonts';
import { BreakpointProvider, useStyledSystem } from "use-styled-system";
import { DefaultSeo } from 'next-seo';
import 'reset-css/sass/_reset.scss';
import { useRouter } from 'next/router';
import useColorTheme from 'use-color-theme';

export const ThemeContext = createContext({ theme: '' });

export const Root: FC<AppProps> = ({ pageProps, Component }) => {
  const colorTheme = useColorTheme('light-theme', { classNames: ['light-theme', 'dark-theme', 'blue-theme'] });
  const { styleJsx } = useStyledSystem(pageProps, {})
  const router = useRouter();
  return (
    <>
      <style jsx>{`
          ${styleJsx}
      `}</style>
      <>
        <DefaultSeo
            title="Tellmann - E-commerce Web development Studio"
            description="Creator of things that live on the internet - Web developer, writer and entrepreneur."
            openGraph={{
              type: 'website',
              locale: 'en_IE',
              url: 'https://www.felixtellmann.com/',
              site_name: 'Felix Tellmann',
              title: 'Felix Tellmann - Front-end Engineer',
              description: 'Creator of things that live on the internet - Web developer, writer and entrepreneur.',
              images: [
                {
                  url: 'https://www.felixtellmann.com/images/og-default.jpg',
                  alt: 'Felix Tellmann - Front-end Engineer',
                  width: 1200,
                  height: 630
                }
              ]
            }}
            twitter={{
              handle: '@FelixTellmann',
              site: '@FelixTellmann',
              cardType: 'summary_large_image'
            }}
            canonical={`https://www.felixtellmann.com/${router.pathname}`}
        />
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:wght@400;600;700&display=swap" />
      </>
      
     {/* <BreakpointProvider breakPoints={[0, 600, 900, 1200]}>*/}
        <ThemeContext.Provider value={{ theme: colorTheme.value }}>
          <div className="page">
            <Component {...pageProps} />
          </div>
        </ThemeContext.Provider>
      {/*</BreakpointProvider>
      <Component {...pageProps} />*/}
    </>
  );
};

export default Root;
