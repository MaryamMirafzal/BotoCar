import AllCars from "../components/modules/AllCars";
import Categories from "../components/modules/Categories";
import SearchBar from "../components/modules/SearchBar";
import CarsPage from "../components/templates/CarsPage";
import carsData from "../data/carsData";

export default function Home() {
  const cars = carsData.slice(0,3)
  return (
    <div>
      <SearchBar />
      <Categories />
      <AllCars />
      <CarsPage data={cars}  />
    </div>
  )
}
