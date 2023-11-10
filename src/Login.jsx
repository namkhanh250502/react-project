import React, { useState } from "react";
import Register from "./Register"
import { Routes, Route, Link } from 'react-router-dom'
import { FacebookOutlined, GoogleOutlined, LoadingOutlined } from '@ant-design/icons'
import './Accounts.css'
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


function Login() {


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loadingAPI, setLoadingAPI] = useState(false)


    function login() {
        setLoadingAPI(true)
        let item = { username, password }
        axios.post('http://localhost:3000/account/login', item)
            .then(res => {
                console.log('res then: ', res);
                if (res || res.data.result.token) {
                    localStorage.setItem('token', res.data.result.token)
                }
                setLoadingAPI(false)
            })
            .catch(error => {
                let res = {}
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    res.data = error.response.data
                    res.status = error.response.status
                    res.headers = error.response.headers

                    if (res && res.status === 404) {
                        toast.error(res.data.message, {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            });                       
                    }
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser 
                    // and an instance of http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                setLoadingAPI(false)
                return res;

            })
    }


    return (
        //Login form
        <>
            <div className="auth-form">

                <div className="auth-form__container">
                    <div className="auth-form__header">
                        <h3 className="auth-form__heading">Đăng nhập</h3>
                        <Link className="auth-form__switch-btn" to='/register' >Đăng ký</Link>
                        {/* <span  className="auth-form__switch-btn">Đăng ký</span> */}
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
                        <Link to="/forgotpass" className="auth-form_policy-a">Quên mật khẩu?</Link>
                    </div>

                    <div className="auth-form_controls">
                        <button
                            className={username && password ? " btn btn--primary" : "btn"}
                            onClick={login}
                        >{loadingAPI && <LoadingOutlined />} Đăng nhập</button>
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
            <ToastContainer />
        </>
    )
}

export default Login;