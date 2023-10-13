import Description from "./component/Description";
import Header from "./component/Header";
import Images from "./component/Images";
import Rating from "./component/Rating";
import ReservationCard from "./component/ReservationCard";
import RestaurantNavBar from "./component/RestaurantNavBar";
import Reviews from "./component/Reviews";
import Title from "./component/Title";

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Restaurant | Open Table',
  description: 'Restaurant | Open Table',
}

export default function RestaurantDetails() {
  return (
    <>
     
     
        <div className="bg-white w-[70%] rounded p-3 shadow">
          {/* RESAURANT NAVBAR */}
          <RestaurantNavBar />
          {/* RESAURANT NAVBAR */}
          {/* TITLE */}
          <Title />
          {/* TITLE */}
          {/* RATING */}
          <Rating />
          {/* RATING */}
          {/* DESCRIPTION */}
          <Description />
          {/* DESCRIPTION */}
          {/* IMAGES */}
          <Images />
          {/* IMAGES */}
          {/* REVIEWS */}
          <Reviews />
          {/* REVIEWS */}
        </div>
        <div className="w-[27%] relative text-reg">
          <ReservationCard />
        </div>
 
    </>
  );
}
