import Menu from "../component/Menu";
import RestaurantNavBar from "../component/RestaurantNavBar";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Restaurant Menu | Open Table',
  description: 'Restaurant | Open Table',
}
export default function RestaurantMenu() {
  return (
    <>
      
        <div className="bg-white w-[100%] rounded p-3 shadow">
          <RestaurantNavBar />
          <Menu />
        </div>
      
    </>
  );
}
