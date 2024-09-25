import { useRouter } from "next/router"
import carsData from "../../data/carsData";
import CarDetails from "../../components/templates/CarDetails";

function CarDetail() {
    const router = useRouter()
    // console.log(router);
    const  carId  = router.query.carsId
    const carDetails = carsData[carId - 1]
    console.log(carDetails);
  return (
    <CarDetails {...carDetails}/>
  )
}

export default CarDetail