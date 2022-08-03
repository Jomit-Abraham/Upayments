import React from 'react'
import './Showfilter.css'

function Showfilter(props) {
    console.log('in filter')
    console.log(props.filteredvalue)
    console.log(props.products)

    return (
        <div className='row'>
            <div className='posters'>
                {
                    props.products.filter((Object) => Object.category === props.filteredvalue).map((Object) =>
                        <div className='parentposterbox' >
                            <div className='posterbox'>
                                <img src={Object.avatar} alt={Object.name} className='poster' />
                            </div>
                            <label><b>{Object.name}</b></label><br />
                            <label><b>{'$' + Object.price}</b></label>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Showfilter