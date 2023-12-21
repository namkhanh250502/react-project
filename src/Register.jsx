import axios from 'axios'
import './Accounts.css'
import { Routes, Route, Link } from 'react-router-dom'
import Login from "./Login"
import { ToastContainer, toast } from "react-toastify";
import React from 'react'
import { useState } from 'react'
import { FacebookOutlined, GoogleOutlined, LoadingOutlined } from '@ant-design/icons'


function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUser] = useState('')
    const [loadingAPI, setLoading] = useState(false)


    function register() {
        setLoading(true)
        let item = { username, email, password }
        axios.post('http://localhost:3001/account/register', item)
            .then(res => {
                console.log('res: ', res);
                toast.success(res.data.message, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setLoading(false)
            })
            .catch(error => {
                let res = {}
                if (error.response) {
                    console.log('error.response: ', error.response);
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    res.data = error.response.data
                    res.status = error.response.status
                    console.log('res.status : ', res.status);
                    res.headers = error.response.headers

                    if (res && res.status >= 400) {
                        toast.error(
                            res.status === 409 ? res.data.message : res.data.message[0], {
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
                setLoading(false)
                return res;

            })
    }

    return (

        //Register form

        <>
            <div className="auth-form">

                <div className="auth-form__container">
                    <div className="auth-form__header">
                        <h3 className="auth-form__heading">Đăng ký</h3>
                        <Link to='/login' className="auth-form__switch-btn" >Đăng nhập</Link>

                        {/* <span className="auth-form__switch-btn">Đăng nhập</span> */}
                    </div>

                    <div className="auth-form__form">
                        <div className="auth-form__group">
                            <input
                                type="text"
                                className="auth-form__input"
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="auth-form__group">
                            <input
                                type="text"
                                className="auth-form__input"
                                placeholder='Tên người dùng'
                                value={username}
                                onChange={(e) => setUser(e.target.value)}
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
                        <p className="auth-form_policy-text">
                            Bằng việc đăng ký, bạn đã đồng ý với Set In Love về
                            <a href="https://linkpower.vn/dieu-khoan-su-dung" className="auth-form_policy-link"> Điều khoản dịch vụ</a> &
                            <a href="https://leep.app/chinh-sach-quyen-rieng-tu" className="auth-form_policy-link"> Chính sách bảo mật</a>
                        </p>
                    </div>

                    <div className="auth-form_controls">
                        <button onClick={register} className={username && email && password ? "btn btn--primary" : "btn"}> {loadingAPI && <LoadingOutlined />}Đăng ký</button>
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

export default Register;