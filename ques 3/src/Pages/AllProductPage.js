import React from 'react'
import axios from 'axios'
import { BaseUrl } from '../Utils/BaseUrl'

const AllProductPage = () => {
  axios.get(`${BaseUrl}/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000`)
  return (
    <div>
      all products page
    </div>
  )
}

export default AllProductPage
