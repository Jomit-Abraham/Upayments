import React from 'react'
import './Productdetails.css'
import axios from 'axios'

function ProductDetails(props) {
    // console.log(props.product.name)

    const deletehandler = (id) => {
        props.deleteitem(id);
    }
    return (

        <div >
            <div className='background'>
                <h1 className='h1'>{props.product.name}</h1>
                <img className='image' src={props.product.avatar} />

                <h1>{'$' + props.product.price}</h1>
                <div>
                    <h3 className='h3'>{props.product.description}</h3>
                    <button className='deletebutton' onClick={() => { deletehandler(props.product.id) }}>Delete</button>
                </div>

            </div>

        </div>
    )
}

export default ProductDetails