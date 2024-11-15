import React ,{useEffect,useState}from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetail() {
    const [details, setDetails] = useState([]);
    const {masp} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3001/api/product/${masp}`)
        .then(res => {
            setDetails(res.data);
        })
        .catch(err => console.log(err));
    }, [masp]);
    return (
        <div>
            {details.map (detail => (
                <>
                    <img src={detail.hinhanh} alt={detail.ten} />
                    <h5>{detail.ten}</h5>
                    <p>Mã sản phẩm : {detail.masp}</p>
                    <p>Tên sản phẩm : {detail.ten}</p>
                    <p>Giá : {detail.gia}</p>
                    <p>Mô tả : {detail.mota}</p>
                </>
            ))}
        </div>
    )
}
export default ProductDetail;