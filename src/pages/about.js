import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout>
    <h1>About me</h1>
    <p>My name is Kit Macleod.</p>
    <p><Link to="/contact">Want to contact me</Link></p>
    </Layout>
  )
}

export default AboutPage