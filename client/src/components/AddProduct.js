import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import axiosInstance from '../axiosapi';

 
const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const history = useLocation();
 
    const saveProduct = async (e) => {
        e.preventDefault();
        await axiosInstance.post('products',{
            title: title,
            price: price
        });
        history.push("/");
    }
 
    return (
        <div>
            <form onSubmit={ saveProduct }>
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
                    <button className="button is-primary">Save</button>
                </div>
            </form>
        </div>
    )
}
 
export default AddProduct