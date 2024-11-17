import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserInfo() {
    const [user, setUserInfo] = useState([]);

    useEffect(() => {
        const fetchUserInfo = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('Token không tồn tại');
                return;
            }

            try {
                const res = await axios.get('http://localhost:3001/api/userinfor', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log(res.data);
                setUserInfo([res.data]);
            } catch (err) {
                console.error('Lỗi:', err.response ? err.response.data : err.message);
            }
        };

        fetchUserInfo();
    }, []);
    return (
        <div>
            {user.map(user => (
                <div key={user.username}>
                    <h2>Thông tin tài khoản</h2>
                    <p>Username: {user.username}</p>
                    <p>Fullname: {user.fullname}</p>
                    <p>Email: {user.email}</p>
                </div>
            ))}
        </div>
    );
}

export default UserInfo;
