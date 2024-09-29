import CarsList from "../../components/templates/CarsList";
import carsData from "../../data/carsData"

function Sport() {
    const sprtCars = carsData.filter( car => car.category == "sport")
  return (
    <CarsList data={sprtCars}/>
  )
}

export default Sport