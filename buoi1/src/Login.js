import React from 'react';
import { useState } from 'react';
import axios from 'axios';


function Login() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();


    const handleSubmit = async () => {
        try {
            const res = await axios.post('http://localhost:3001/api/login', {
                username: username,
                password: password
            });
            console.log(res.data.token);
            localStorage.setItem('token', res.data.token);

            // Kiểm tra token trước khi gửi yêu cầu
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('Token không tồn tại');
                return;
            }

            const userRes = await axios.get('http://localhost:3001/api/user/', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(userRes.data);
            
        } catch (err) {
            console.error('Lỗi:', err.response ? err.response.data : err.message);
        }

    };
    return (
        <div>
            <label>
                Enter your username:
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <label>
                Enter your password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <input type="checkbox" />Admin?
            <button type="submit" onClick={handleSubmit}>
                Đăng nhập
            </button>
           

        </div>
    );
}
export default Login