import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';

export default function Home() {
  const initialState = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  };
  const router = useRouter()
  const [userData, setUserData] = useState(initialState);
  const [errors, setErrors] = useState({ error: false, errors: [] });
  const [isSubmit, setisSubmit] = useState(false)

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const setUser = (userData) => {
    let usersData = localStorage.getItem("user")
    if (usersData?.length) {
      usersData = JSON.parse(usersData)
      usersData.push(userData)
    } else {
      usersData = []
      usersData.push(userData)
      localStorage.setItem("currentUser", JSON.stringify(userData))
    }
  }

  const registerUser = (e) => {
    e.preventDefault();
    const { password, password_confirmation } = userData
    setisSubmit(true)

    if (password === password_confirmation) {
      setUser(userData)
      router.push('/Dashboard')
    } else {
      setErrors({
        ...errors,
        error: true,
        errors: [
          "Password and Password confirmation are not the same."
        ]
      })
    }

  }

  useEffect(() => {
    isSubmit && errors?.error && setisSubmit(false)
  }, [isSubmit, userData, errors])
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
              <Image src="/assets/amazon-icon.jpg" width="100%" height="100%" className="logo-img" alt="amazon logo" />
            </div>
            {errors?.error && <div className="errors-container"> {
              errors?.errors?.map(err => <li className="err-danger" key={err}>{err}</li>)
            }</div>}
            {isSubmit && <div className="loading-container"> Loading... </div>}
            <div className={styles.loginform}>
              <h1 className={styles.formh1}>Create account</h1>
              <form onSubmit={registerUser}>
                <div className={styles.formcontrol}>
                  <label htmlFor="name">Your name</label>
                  <input name="name" type="text" autoComplete="name" onChange={handleChange} required />
                </div>
                <div className={styles.formcontrol}>
                  <label htmlFor="email">Email</label>
                  <input name="email" type="email" autoComplete="email" onChange={handleChange} required />
                </div>

                <div className={styles.formcontrol}>
                  <label htmlFor="password">Password</label>
                  <input name="password" placeholder="At least 6 characters" onChange={handleChange} type="password" required />
                  <div className="password-info"><Image src="/assets/info-icon.png" alt="info icon" className="more info" height="15" width="10" /> Passwords must be at least 6 characters.</div>
                </div>

                <div className={styles.formcontrol}>
                  <label htmlFor="password_confirmation">Password</label>
                  <input name="password_confirmation" type="password" onChange={handleChange} required />
                </div>
                <button className={styles.loginbtn} type="submit">Create your Amazon account</button>

                <p className="login-privacy">By creating an account, you agree to Amazon&apos;s <Link href="#"><a >Conditions of Use</a></Link> and <Link href="#"><a>Privacy Notice</a></Link> .</p>
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
