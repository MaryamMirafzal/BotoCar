import Link from 'next/link'

import styles from "./AllCars.module.css"

function AllCars() {
  return (
    <div className={styles.container}>
        <Link href="/cars">See All Cars</Link>
    </div>
  )
}

export default AllCars