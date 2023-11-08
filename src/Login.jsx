import React, { useState } from "react";
import { FacebookOutlined, GoogleOutlined } from '@ant-design/icons'
import './Accounts.css'
import axios from "axios";

function Login() {


    const [username, setUsername] =useState('')
    const [password,setPassword] = useState('')


    function login() {
        let item = {username, password}
        axios.post('http://192.168.1.21:3001/account/login',item)
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }


    return (
        //Login form
        <div className="auth-form">

            <div className="auth-form__container">
                <div className="auth-form__header">
                    <h3 className="auth-form__heading">Đăng nhập</h3>
                    <span className="auth-form__switch-btn">Đăng ký</span>
                </div>

                <div className="auth-form__form">

                    <div className="auth-form__group">
                        <input
                            type="text"
                            className="auth-form__input"
                            placeholder='Tên người dùng'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="auth-form__group">
                        <input
                            type="password"
                            className="auth-form__input"
                            placeholder='Mật khẩu'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>

                <div className="auth-form_policy-aside">
                    <a href="" className="auth-form_policy-a">Quên mật khẩu?</a>
                </div>

                <div className="auth-form_controls">
                    <button 
                    className="btn btn--primary"
                    onClick={login}
                    >Đăng nhập</button>
                </div>
            </div>
            <div className="auth-form_social">

                <a href="https://www.facebook.com/" className="btn btn-fb btn--with-icon">
                    <FacebookOutlined className='icon icon-fb' />
                    Kết nối với Facebook
                </a>
                <a href="https://myaccount.google.com/" className="btn btn-gg btn--with-icon">
                    <GoogleOutlined className='icon icon-gg' />
                    Kết nối với Google
                </a>
            </div>
        </div>

    )
}

export default Login;