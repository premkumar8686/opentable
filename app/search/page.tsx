import Link from "next/link";
import NavBar from "../components/NavBar";
import Header from "./components/Header";
import SearchSideBar from "./components/SearchSideBar";
import RestaurantCard from "./components/RestaurantCard";
import { Metadata } from 'next';

export const metadata: Metadata = 
{   
  title: "Search | Open table",   
  icons: { icon: ["/images/cooking-chef-cap-icon.svg"] },
  
  openGraph: {
    url: 'https://ranksridge.com/',
    images: [
      {
        url: '/images/og-image-2.jpg',
        width: 600,
        height: 315,
      }
    ],
  }
}



export default function Search() {
  return (
    <>
        <Header />
        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          {/* SEARCH SIDE BAR */}
          <SearchSideBar />
          {/* SEARCH SIDE BAR */}
          <div className="w-5/6">
            {/* RESAURANT CAR */}
            <RestaurantCard />
            {/* RESAURANT CAR */}
          </div>
        </div>
        </>
  );
}
