import React from 'react';
import { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        console.log('Username:', username);
        console.log('Password:', password);
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