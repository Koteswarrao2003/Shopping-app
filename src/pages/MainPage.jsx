import React from 'react'
import Head from '../components/Head'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import WomanCollection from '../components/WomanCollection'
import Footer from '../components/Footer'
import Banner2 from '../components/Banner2'

const MainPage = () => {
  return (
    <>
        <div>
            <Head />
            <Banner />
            <Collections />
            <Banner2 />
            <WomanCollection />
            <Footer />
        </div>
        

    </>
  )
}

export default MainPage