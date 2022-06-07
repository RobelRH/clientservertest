/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import axiosInstance from '../axiosapi';
 
const EditProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const history = useLocation();
    const { id } = useParams();
 
    const updateProduct = async (e) => {
        e.preventDefault();
        await axiosInstance.patch(`products/${id}`,{
            title: title,
            price: price
        });
        history.push("/");
    }
 
    useEffect(() => {
        getProductById();
    }, []);
 
    const getProductById = async () => {
        const response = await axiosInstance.get(`products/${id}`);
        setTitle(response.data.title);
        setPrice(response.data.price);
    }
 
    return (
        <div>
            <form onSubmit={ updateProduct }>
                <div className="field">
                    <label className="label">Title</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Title"
                        value={ title }
                        onChange={ (e) => setTitle(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">Price</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Price"
                        value={ price }
                        onChange={ (e) => setPrice(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <button className="button is-primary">Update</button>
                </div>
            </form>
        </div>
    )
}
 
export default EditProduct