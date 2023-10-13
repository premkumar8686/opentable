import { Inter } from '@next/font/google';
import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';
import { Metadata } from 'next';

export const metadata: Metadata = 
{   
  title: "Open table",   
  icons: { icon: ["/images/cooking-chef-cap-icon.svg"] },
  
  openGraph: {
    images: [
      {
        url: 'https://epaper.ninadam.co.in/media/c600x315/2023-10/12233834-page-01.jpg',
        width: 600,
        height: 315,
      }
    ],
  }
}
 



const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    
    <>
    <main>
      {/* HEADER */}
      <Header />
      {/* HEADER */} {/* CARDS */}
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {/* CARD */}
       <RestaurantCard/>
        {/* CARD */}
      </div>
      {/* CARDS */}
    </main>
    </>
  )
}
