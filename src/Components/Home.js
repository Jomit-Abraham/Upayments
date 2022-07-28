import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Home.css'
import ProductDetails from './ProductDetails'
import { Routes, Route, BrowserRouter as Router, Link, } from 'react-router-dom';



function Home(props) {


    const [category, setCategory] = useState([])
    const onClickListener = (Object) => {

        props.functionnavigation(Object)
    }

    useEffect(() => {
        axios.get(' https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/').then((response) => {
            setCategory(response.data)
            console.log(response.data)
        })
    }, [])

    const changeCategotyListener = () => { }


    return (
        <div className='row'>
            <div className='itemnames'>
                {
                    props.products.map((Object) => <h4 className='para'>{Object.name}</h4>)
                }


            </div>
            <div >

                <select className='dropdown' onChange={() => { changeCategotyListener(Object.name) }} >
                    {
                        category.map((Object) => <option>{Object.name}</option>)
                    }
                </select>

            </div>

            <div className='posters'>
                {
                    props.products.map((Object) =>
                        <div className='parentposterbox' onClick={() => { onClickListener(Object) }} >
                            <div className='posterbox'>

                                <img src={Object.avatar} alt={Object.name} className='poster' />

                            </div>
                            <label><b>{Object.name}</b></label><br />
                            <label><b>{'$' + Object.price}</b></label>
                        </div>)

                }
            </div>

        </div >
    )
}

export default Home