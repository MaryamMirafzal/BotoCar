import CarsList from "../../components/templates/CarsList";
import carsData from "../../data/carsData"
import { useRouter } from "next/router"

function FilteredCars() {

    const router = useRouter()
    const [min , max] = router.query.slugs || [];
    
    const filteredCars = carsData.filter(
        (item)=> item.price > min && item.price < max
    )
    if(!filteredCars.length) {return <h3>Not Found</h3>}
  return (
    <CarsList data={filteredCars} />
  )
}

export default FilteredCars