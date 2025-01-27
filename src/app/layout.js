
import "./globals.css";



export const metadata = {
  metadataBase: new URL('https://decodedaddy.com'),
  title: 'DecodeDaddy',
  description: 'decodedaddy home',
  twitter: {
    card: 'summary_large_image',
    site: '@decodedaddy',
  },
  openGraph: {
    type: 'website',
    url: 'https://decodedaddy.com',
    images: [
      {
        url: 'https://decodedaddy.com/decodedaddy.png',
        width: 1200,
        height: 630,
        alt: 'Decodedaddy',
      },
    ],
    site_name: 'Decodedaddy',
  },
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'true' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap',
    },
    { rel: 'preload', as: 'image', href: 'https://decodedaddy.com/logo.png' },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{pointerEvents: "inherit"}}>

        <canvas id="smokeEffect"/>
        <script src="./script/smokeEffect.js"></script>
        {children}
        
      </body>
    </html>
  );
}
