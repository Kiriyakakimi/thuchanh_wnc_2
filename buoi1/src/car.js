import React, { useState } from 'react';

function Car() {
    const [car, setCar] = useState({
        brand: 'Toyota',
        color: 'Blue',
        year: 2020
    });

    const [newYear, setNewYear] = useState(car.year); 

    
    const UpdateYear = () => {
        setCar(previousState => ({
            ...previousState,
            year: newYear 
        }));
    };

    return (
        <>
            <h3>Thông tin xe:</h3>
            <p>Hãng: {car.brand}</p>
            <p>Màu: {car.color}</p>
            <p>Năm sản xuất: {car.year}</p>

            <h3>Sửa thông tin:</h3>
            <input
                type="number"
                value={newYear} 
                onChange={(e) => setNewYear(Number(e.target.value))} 
            />
            <button onClick={UpdateYear}>Cập nhật</button>
        </>
    );
}

export default Car;
