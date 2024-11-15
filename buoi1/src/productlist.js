import axios from 'axios';
import React, {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
function ProductList() {
    const [products, setProduct] = useState([]);
    const [groups, setGroup] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState('');

    useEffect(() => {        
        axios.get('http://localhost:3001/api/group')
        .then(res => {
            setGroup(res.data);
        })
        .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        if(selectedGroup){
            axios.get(`http://localhost:3001/api/product/group/${selectedGroup}`)
            .then(res => {
                setProduct(res.data);
            })
            .catch(err => console.log(err));
        }
    }, [selectedGroup]);

    return (
        <div>
            <h1>Product List</h1>
            <div>
                <select value={selectedGroup} onChange={(e) => setSelectedGroup(e.target.value)}>
                    <option value="">Select Group</option>
                    {groups.map(group => (
                        <option key={group.idnhom} value={group.idnhom}>{group.ten}</option>
                    ))}
                </select>
            </div>
            <div>
                {products.map(product => (
                    <div key={product.masp}>
                        <Link to={`/product/${product.masp}`}>
                            <h2>{product.ten}</h2>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductList;

