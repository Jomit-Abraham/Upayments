import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Home.css'
import { Api_key } from './Constants';
import LinesEllipsis from 'react-lines-ellipsis'

function Home(props) {
    const [catname, setCatName] = useState('')
    const [category, setCategory] = useState([])
    var prodname = 'Products are ';

    const onClickListener = (Object) => {
        props.functionnavigation(Object)
    }

    useEffect(() => {
        axios.get(' https://upayments-studycase-api.herokuapp.com/api/categories/', { headers: { "Authorization": `Bearer ${Api_key}` } }).then((response) => {
            setCategory(response.data.categories)
        })
    }, [])

    const changeCatHandler = (e) => {
        setCatName(e.target.value)
        props.filterhandler(e.target.value)
    }

    return (
        <div className='row'>
            <div className='itemnames'>
                {
                    props.products.map((Object) => { prodname = prodname + Object.name + ' ,' })
                }

                <LinesEllipsis
                    text={prodname}
                    maxLine='1'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                />
            </div>
            <div style={{ display: 'flex' }}>

                <h3 className='h3'>Filter</h3>
                <select className='dropdown' onChange={changeCatHandler}>
                    {
                        category.map((Object) => <option value={Object.name}>{Object.name}</option>)
                    }
                </select>
            </div>

            <div className='posters'>
                {
                    props.products.map((Object) =>
                        <div className='parentposterbox' onClick={() => { onClickListener(Object) }} >
                            <div key={Object._id} className='posterbox'>
                                <img src={Object.avatar} alt={Object.name} className='poster' />
                            </div>
                            <label ><b>{Object.name}</b></label><br />
                            <label><b>{'$' + Object.price}</b></label>
                        </div>
                    )
                }

            </div>

        </div >
    )
}

export default Home