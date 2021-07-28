import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Amazon Registration</title>
        <meta name="description" content="Amazon Sign Up page" />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="home-content">
          
          <Image src="/assets/logo-amazon.png" alt="logo0mage" width="100" height="50"/>
          <Link href="/auth/Login"><a>Login</a></Link>
        </div>
      </main>
    </div>
  )
}
