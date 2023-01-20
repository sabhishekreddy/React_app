import React from 'react'
import Header from '../GettingStarted/Header/Header'
import ProductContent from './ProductContent'
import "./ProductMain.css"

export default function ProductMain() {
  return (
    <div id='product-page'>
        <Header />
        <div id='gap-container'></div>
        <ProductContent />
    </div>
  )
}
