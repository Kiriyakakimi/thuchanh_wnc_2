import React, { useState } from 'react';

function Car(){
    const [car, setCar] = useState(
        {brand: 'Toyota', color : 'Blue', year: 2020}
    );
    const UpdateYear = ()=>{
        setCar(previousState => ({...previousState}))
    }
    return (
    <>
    Thông tin xe:
    <p>Hãng: {car.brand}</p>
    <p>Màu: {car.color}</p>
    <p>Năm sản xuất: {car.year}</p>
	Sửa thông tin:
    <input type='number' value={car.year} onChange={(e)=>setCar({...car, year: e.target.value})}/>
    <button onClick={UpdateYear}>Cập nhật</button>
    </>
    )
}
export default Car ;