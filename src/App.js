import './App.css';
import Home from './Components/Home';
import Banner from './Components/Banner';
import { useEffect, useState } from 'react'
import axios from 'axios';
import ProductDetails from './Components/ProductDetails';
import { useNavigate, Route, Routes } from 'react-router-dom'
import Addproduct from './Components/Addproduct';
import { Api_key } from './Components/Constants'
import Showfilter from './Components/Showfilter';

function App() {

  const [products, setProducts] = useState([])
  const [navobj, setNavobj] = useState([])
  const navigate = useNavigate();
  const [filter, setFilter] = useState('Electronics')

  const config = {
    headers: { Authorization: `Bearer ${Api_key}`, Header: '_id' }
  };

  useEffect(() => {
    axios.get('https://upayments-studycase-api.herokuapp.com/api/products', config).then((response) => {
      console.log(response.data)
      setProducts(response.data.products)
    }).catch(err => {
      alert("Network failure")
    })
  }, [])

  const navigatetoFilter = (value) => {
    setFilter(value)
    navigate('/showfilter')
  }
  const addProductListener = () => {
    navigate('/addproduct')
  }
  const navigateToproducts = (Object) => {
    setNavobj(Object)
    navigate('/productdetails');
  };

  const deletehandler = (_id) => {
    console.log(_id)
    axios.delete(`https://upayments-studycase-api.herokuapp.com/api/products/${_id}`, config)
    alert("Deleted successfully");
    navigate('/')
    //{ window.location.reload() }
  }

  const newItemHandler = (newItem) => {
    console.log(newItem)
    axios.post('https://upayments-studycase-api.herokuapp.com/api/products/', {
      name: newItem.name,
      avatar: newItem.url,
      price: newItem.price,
      developerEmail: newItem.email,
      _id: newItem.id,
      description: newItem.description,
      category: newItem.category
    }, config)

    navigate('/')
    alert("Product Added successfully");
    { window.location.reload() }
  }

  return (
    <div className="App">

      <Banner />
      <Routes>
        <Route path='/' exact element={<Home products={products} functionnavigation={navigateToproducts} filterhandler={navigatetoFilter} />} />

        <Route path='/showfilter' element={<Showfilter filteredvalue={filter} products={products} />}></Route>

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
