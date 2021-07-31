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
            <div className="logo-container">
              <img src="/assets/amazon-icon.jpg" className="logo-img" alt="amazon logo" />
            </div>
            <div className={styles.loginform}>
              <h1 className={styles.formh1}>Create account</h1>
              <form onSubmit={registerUser}>
                <div className={styles.formcontrol}>
                  <label htmlFor="name">Your name</label>
                  <input id="name" type="text" autoComplete="name" required />
                </div>
                <div className={styles.formcontrol}>
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" autoComplete="email" required />
                </div>

                <div className={styles.formcontrol}>
                  <label htmlFor="password">Password</label>
                  <input id="password" type="password" required />
                  <p className="password-info"><Image src="/assets/info-icon.png" alt="info icon" className="more info" height="15" width="10" /> Passwords must be at least 6 characters.</p>
                </div>

                <div className={styles.formcontrol}>
                  <label htmlFor="password_confirmation">Password</label>
                  <input id="password_confirmation" type="password" required />
                </div>
                <button className={styles.loginbtn} type="submit">Create your Amazon account</button>

                <p className="login-privacy">By creating an account, you agree to Amazon's <Link href="#"><a >Conditions of Use</a></Link> and <Link href="#"><a>Privacy Notice</a></Link> .</p>
              </form>

              <div className="loginformfooterr">
                <div className={styles.logindivider}></div>
                <p className="login-signin">Aready have an account? <Link href="#signin"><a>Sign In</a></Link></p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="loginfooter">
      <div className={styles.logindivider}></div>
      <ul className="footer-ul">
        <li><Link href="#"><a>Conditions of use</a></Link></li>
        <li><Link href="#"><a>Privacy Notice</a></Link></li>
        <li><Link href="#"><a>Help</a></Link></li>
      </ul>
      <p className="copy">© 1996-2021, Amazon.com, Inc. or its affiliates</p>
      </footer>
    </div>
  )
}
