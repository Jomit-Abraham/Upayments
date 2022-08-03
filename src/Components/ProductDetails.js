import React from 'react'
import './Productdetails.css'


function ProductDetails(props) {
    const deletehandler = (id) => {
        //console.log(id)
        props.deleteitem(id);
    }
    return (

        <div >
            <div className='background'>
                <h1 className='h1'>{props.product.name}</h1>
                <img className='image' src={props.product.avatar} alt="Image Not Available" />

                <h1>{'$' + props.product.price}</h1>
                <div>
                    <h3 className='h3'>{props.product.description}</h3>
                    <button className='deletebutton' onClick={() => { deletehandler(props.product._id) }}>Delete</button>
                </div>

            </div>

        </div>
    )
}

export default ProductDetails