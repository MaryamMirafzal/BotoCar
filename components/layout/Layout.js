import Link from "next/link"
import styles from "./Layout.module.css"

function Layout({children}) {
  return (
    <>
    <header className={styles.header}>
     <Link href="/">
     <h1>BOTOCAR</h1>
     <p>Choose and Buy your Car</p> 
     </Link>
    </header>
    <div className={styles.container}>{children}</div>
    <footer className={styles.footer}>
      <p>Next.js Cours | BotoCar Project &copy;</p>
    </footer>
    </>
    
  )
}

export default Layout