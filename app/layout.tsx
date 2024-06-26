import '@app/globals.css';
import Footer from '@app/components/Layout/Footer';
import Header from '@app/components/Layout/Header';
import { useServerAuthSession } from '@app/hooks/useServerAuthSession';

/**
 * Using force dynamic so changes in business assets (e.g. services) are immediately reflected.
 * If you prefer having it reflected only after redeploy (not recommended) please remove it
 * **/
export const revalidate = 0;

export default function RootLayout(layoutProps: any) {
  const { children } = layoutProps;
  const wixSession = useServerAuthSession();
  return (
    <html lang="en">
      <head>
        <title>Shine City - Auto Detailing</title>
        <meta
          name="description"
          content="Shine City Auto Detailing: Expert exterior and interior car detailing, ceramic coating, paint protection film, and more. Experience the ultimate shine and protection for your vehicle. Contact us today!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="gallery/favicon.png" />
      </head>
      {wixSession.wixClient ? (
        <body className="parallax-background">
          <Header />
          <main className="bg-transparent min-h-[600px]">{children}</main>
          <Footer />
        </body>
      ) : (
        <body className="">
          <main className="max-w-full-content mx-auto bg-gray-c2 pt-32">
            <h1>
              Page not available. Please add an environment variable called
              NEXT_PUBLIC_WIX_CLIENT_ID, containing the client ID, to your
              deployment provider.
            </h1>
          </main>
        </body>
      )}
    </html>
  );
}
