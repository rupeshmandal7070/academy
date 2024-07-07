import Navbar from '@/layouts/Navbar'
import React from 'react'
import Header from './Header'
import CryptoSection from './CryptoSection'
import CryptoTerms from './CryptoTerms'
import Footer from '@/layouts/Footer'
import CardComponent from './CardComponent'
import Card2 from './Card2'
import Rewardsection from './Rewardsection'

const Academy = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <CardComponent/>
      <Card2/>
      <Rewardsection/>
      <CryptoSection/>
      <CryptoTerms/>
      <Footer/>
    </div>
  )
}

export default Academy
