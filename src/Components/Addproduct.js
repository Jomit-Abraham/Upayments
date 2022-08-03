import React from 'react'
import './Addproduct.css'
import { useState } from 'react';

function Addproduct(props) {
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [description, setDescription] = useState('')
    const [url, setUrl] = useState('')
    const [price, setPrice] = useState(0)
    const [email, setEmail] = useState('')
    const [category, setCategory] = useState('')

    const namehandler = e => {

        setName(e.target.value)
    }
    const idhandler = e => { setId(e.target.value) }
    const descriptionhandler = e => { setDescription(e.target.value) }
    const urlhandler = e => { setUrl(e.target.value) }
    const pricehandler = e => { setPrice(e.target.value) }
    const emailhandler = e => { setEmail(e.target.value) }
    const categoryhandler = e => { setCategory(e.target.value) }

    const submitHandler = (e) => {
        e.preventDefault()
        if (name == '' || id == '' || description == '' || url == '' || price == '' || category == '' || email == '')
            alert('Invalid input')

        else {
            if (price < 1 || price == 0)
                alert('Enter a valid price')
            else {
                const Item = {
                    name: name,
                    id: id,
                    description: description,
                    url: url,
                    price: price,
                    email: email,
                    category: category
                }

                props.newItem(Item)
            }

        }
    }

    return (
        <form className='form' onSubmit={submitHandler} >
            <h1 className='h1'>Create Product</h1>

            <div id='float-label' >
                <input className='name' type='text' onChange={namehandler} />
                <label className="Active">Name</label>
            </div >

            <div id='float-label'>
                <input className='id' type='number' onChange={idhandler} />
                <label className="Active">Id</label>
            </div>

            <div id='float-label'>
                <textarea className='description' type='textarea' onChange={descriptionhandler} />
                <label className="Active">Description</label>
            </div>

            <div id='float-label'>
                <textarea className='imgurl' type='url' onChange={urlhandler} />
                <label className="Active">Image Url</label>
            </div>

            <div id='float-label'>
                <input className='name' type='number' onChange={pricehandler}></input>
                <label className="Active">Price</label>
            </div>
            <div id='float-label' >
                <input className='name' type='text' onChange={emailhandler} />
                <label className="Active">Email</label>
            </div >

            <div className='name'>
                <div id='float-label' >

                    <select value={category} className='select' onChange={categoryhandler}>

                        <option value='Electronic' >Electronic</option>
                        <option value='Furnitures' >Furnitures</option>
                        <option value='Clothing' >Clothing</option>
                        <option value='Accessories' >Accessories</option>

                    </select>
                    <label className="Active">Categories</label>

                </div>
            </div>
            <button className='submitbutton'>SUBMIT</button>
        </form >
    )
}

export default Addproduct