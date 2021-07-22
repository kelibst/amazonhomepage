import icons from '../../assets/images/icons.png'
import Image from 'next/image'
import loginss from '../../styles/login.module.scss'

const Login = () => {
    return (
        <div className="login-content">
            <div className="login-logo">
                <Image src={icons} alt="Amazon image alt" className={loginss.loginlogoimg}/>
            </div>
        </div>
    )
}

export default Login
