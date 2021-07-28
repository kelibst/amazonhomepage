import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'

export default function Home() {
  const registerUser = (e) => {
    e.preventDefault();
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Amazon Registration</title>
        <meta name="description" content="Amazon Sign Up page" />
        <link rel="icon" href="/assets/logo.png" />
      </Head>

      <main className={styles.main}>
        <div className="home-content">
          <div className="login-content">
            <Image src="/assets/amazon-icon.jpg" className="login-logo" alt="logo-image" width="100" height="50" />
            <div className={styles.loginform}>
              <h1 className={styles.formh1}>Create account</h1>
              <form  onSubmit={registerUser}>
                <div className="form-control">
                  <label htmlFor="name">Your name</label>
                  <input id="name" type="text" autoComplete="name" required />
                </div>
                <div className="form-control">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" autoComplete="email" required />
                </div>

                <div className="form-control">
                  <label htmlFor="password">Password</label>
                  <input id="password" type="password"  required />
                  <p className="password-info"><Image src="/assets/info-icon.png" alt="info icon" className="more info" height="15" width="10" /> Passwords must be at least 6 characters.</p>
                </div>

                <div className="form-control">
                  <label htmlFor="password_confirmation">Password</label>
                  <input id="password_confirmation" type="password"  required />
                </div>
                <button type="submit">Create your Amazon account</button>

                <p className="login-privacy">By creating an account, you agree to Amazon's <Link href="#"><a >Conditions of Use</a></Link> and <Link href="#"><a>Privacy Notice</a></Link> .</p>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
