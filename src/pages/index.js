import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <h1>Halo.</h1>
      <h2>Selamat Datang di Website Madu Abu Bakar. Tempatnya Madu Asli dan Berkualitas.</h2>
      <p>Madu Abu Bakar merupakan Madu Asli Sialang Berkualitas dari Hutan Apis Riau Sumatera yang dijamin Kualitasnya.</p>
      <p>Mau Pesan Madu Abu Bakar? <Link to="/contact">Hubungi Kami.</Link></p>
    </Layout>
  )
}

export default IndexPage
