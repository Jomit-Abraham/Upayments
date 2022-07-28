
import './App.css';
import Home from './Components/Home';
import Banner from './Components/Banner';
import { useEffect, useState } from 'react'
import axios from 'axios';
import ProductDetails from './Components/ProductDetails';
import { useNavigate, Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Addproduct from './Components/Addproduct';

function App() {

  const [products, setProducts] = useState([])
  const [navobj, setNavobj] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/').then((response) => {
      console.log(response.data)
      setProducts(response.data)
    }).catch(err => {
      alert("Network failure")
    })
  }, [])


  const addProductListener = () => {
    navigate('/addproduct')
  }


  const navigateToproducts = (Object) => {
    console.log(Object)
    setNavobj(Object)
    navigate('/productdetails');
  };


  const deletehandler = (id) => {
    axios.delete(`https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${id}`)
    alert("Deleted successfully");
    navigate('/')
    { window.location.reload() }
  }

  const newItemHandler = (newItem) => {
    console.log(newItem)
    axios.post(`https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/`, {
      name: newItem.name,
      avatar: newItem.url,
      price: newItem.price,
      Email: newItem.email,
      id: newItem.id,
      description: newItem.description,
      category: newItem.category
    })

    navigate('/')
    alert("Product Added successfully");
    { window.location.reload() }



  }

  /*const newItemHandler = (newItem) => {
    console.log(newItem)
    axios.post(`https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/`, {
      data: newItem
    })
  }
*/

  return (
    <div className="App">

      <Banner />
      <Routes>
        <Route path='/' exact element={<Home products={products} functionnavigation={navigateToproducts} />} />

        <Route path="/productdetails" element={<ProductDetails product={navobj} deleteitem={deletehandler} />} />

        <Route path='/addproduct' element={<Addproduct newItem={newItemHandler} />}></Route>

      </Routes>

      <div id='mybutton'>
        <button onClick={addProductListener} className='buttondiv'> <b>Add</b></button>
      </div>

    </div>
  );
}

export default App;
