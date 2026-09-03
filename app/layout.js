import {Dela_Gothic_One, Quicksand} from 'next/font/google';
import '../styles/globals.css';
import { getMenu } from 'utils/getMenu';
import { MainMenu } from 'components/MainMenu';
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Footer } from 'components/Footer';


config.autoAddCss = false;

const fontBody = Quicksand({
  subsets: ['latin'],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-body"
})

const fontHeading = Dela_Gothic_One({
  subsets: ['latin'],
  weight: ["400"],
  display: "swap",
  variable: "--font-heading"
})

export default async function RootLayout({ children }) {
  const data = await getMenu();  
  
  return (
    <html lang="en" className={`${fontBody.variable} ${fontHeading.variable} h-full`}>
      <body className='font-body h-full'>

        <main className='flex flex-col min-h-full'>
        
        <MainMenu items={data.mainMenuItems} />
          {children}
        </main>

        
        <Footer />
      </body>
    </html>
  )
}