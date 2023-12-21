import React, { useState } from "react";
import { Link } from 'react-router-dom'
import {  LoadingOutlined } from '@ant-design/icons'
import './Accounts.css'
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function ForgotPass() {

    const [email, setEmail] = useState('')
    const [loadingAPI, setLoadingAPI] = useState(false)


    function forgot() {
        setLoadingAPI(true)
        axios.put('http://localhost:3001/account/forgot-password', { email })
            .then(res => {
                console.log('res then: ', res);
                toast.success('Mật khẩu mới đã được gửi tới email của bạn', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setLoadingAPI(false)
            })
            .catch(error => {
                let res = {}
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    res.data = error.response.data
                    console.log('res.data:dwedwe ', res.data.message);
                    res.status = error.response.status
                    res.headers = error.response.headers

                    if (res && res.status >= 400) {
                       toast.error( res.status === 404 ?  res.data.message : res.data.message[0], {
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
        <>
            <div className="auth-form">
                <div className="auth-form__container">

                    <div className="auth-form__headers">
                        <h3 className="auth-form__heading heading-forgot" name='forgot' >Quên mật khẩu</h3>
                    </div>

                    <div className="auth-form__form">

                        <div className="auth-form__group">
                            <label for="email">Nhập email của bạn</label>
                            <input
                                type="text"
                                className="auth-form__email"
                                placeholder='Email'
                                value={email}
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="auth-form_controls">
                        <button
                            className={email ? " btn btn--primary" : "btn"}
                            onClick={forgot}
                        >{loadingAPI && <LoadingOutlined />} Lấy lại mật khẩu </button>
                    </div>
                    <div className="auth-form_policy-aside">
                        <Link to='/login' className="link-login">Quay lại đăng nhập</Link>
                    </div>
                </div>
            </div>
            <ToastContainer />  
        </>
    )
}


export default ForgotPass;