import axios from 'axios'
import './Accounts.css'
import React from 'react'
import { useState } from 'react'
import { FacebookOutlined, GoogleOutlined } from '@ant-design/icons'


function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUser] = useState('')

    function register() {
        let item = { username, email, password }
        axios.post('http://192.168.1.11:3000/account/register', item)
            .then(res => console.log(res))
            .catch(error => console.log(error))
    }

    return (

        //Register form
        <div className="auth-form">

            <div className="auth-form__container">
                <div className="auth-form__header">
                    <h3 className="auth-form__heading">Đăng ký</h3>
                    <span className="auth-form__switch-btn">Đăng nhập</span>
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
                        Bằng việc đăng ký, bạn đã đồng ý với Green Pay về
                        <a href="https://linkpower.vn/dieu-khoan-su-dung" className="auth-form_policy-link"> Điều khoản dịch vụ</a> &
                        <a href="https://leep.app/chinh-sach-quyen-rieng-tu" className="auth-form_policy-link"> Chính sách bảo mật</a>
                    </p>
                </div>

                <div className="auth-form_controls">
                    <button onClick={register} className="btn btn--primary">Đăng ký</button>
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

export default Register;