import { useState } from 'react';
import './Login.css'

function Login() {


    const [email, setEmail] = useState('')
    console.log('email: ', email);
    const [pass, setPass] = useState('')
    console.log('pass: ', pass);

    const handleLogin = () => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "username": "namkhanh250502",
            "password": "Khanh2002@"
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
           
        };

        fetch("http://192.168.1.21:3001/account/login", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    return (
        <div className='account'>

            {/* Đăng nhập gần đây */}
            <div className='loginRecently'>

                {/* Tiêu đề */}
                <div >
                    <h1 id='title1' >facebook</h1>
                    <h2 id='title2' >Đăng nhập gần đây</h2>
                    <p id='title4' >Nhấp vào ảnh của bạn hoặc thêm tài khoản.</p>
                </div>

                {/* Avatar đăng nhập gần đây */}

                <div className='img'>

                    {/* avatar 1 */}
                    <div className='avatar'>
                        <img
                            className='img1'
                            src="https://vapa.vn/wp-content/uploads/2022/12/anh-den-ngau.jpeg"
                            alt=""
                        />
                        <p className='useName'>Khánh</p>
                    </div>

                    {/*  Avatar 2 */}
                    <div className='avatar'>
                        <img
                            className='img1'
                            src="https://hoatuoi.edu.vn/wp-content/uploads/2023/04/Hon-1000-anh-AVATAR-DEP-DE-THUONG-%E2%80%93-Anh-dai-1024x1024.jpg"
                            alt=""
                        />
                        <p className='useName' >Đào</p>
                    </div>
                </div>
            </div>


            <div className='login'>

                <div className='div1'>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='input'
                        id='mail'
                        placeholder='Email hoặc số điện thoại'
                        type="text" /><br />
                    <input
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        className='input'
                        placeholder='Mật khẩu'
                        id='pass'
                        type="text" /><br />
                </div>
                <button
                    className='div1'
                    id='buttonlogin'
                    onClick={handleLogin}
                >Đăng nhập</button>
                <div>
                    <a
                        style={{ textDecoration: 'none' }}
                        className='https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0'
                        id='fogot'
                        href=""
                    >Quên mật khẩu?</a>
                </div>
                {/* <button id='createAccount'>Tạo tài khoản mới</button> */}

                <div className='createAccount'>
                    <a
                        id='createAccount'
                        style={{ textDecoration: 'none' }}
                        href="https://www.facebook.com/?stype=lo&deoia=1&jlou=Afex-e1aIS6y4vfJQiyn98gcoBBb-pzovL56YDpr_O5ShgClIMbHM-f2tjPBLmS5oTAwKQTBTBmPNfyyRxONJBLLY3f4MdrqJafEXTARwT61QQ&smuh=63427&lh=Ac-yXOYf4YnK9zyAcQY"
                    >Tạo tài khoản mới</a>
                </div>

            </div>


        </div>
    )
}

export default Login;