import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
  return (
    <Layout>
    <Head  title="About"/>
    <h1>About me</h1>
    <p>I work at 
    <a href="https://www.hutton.ac.uk/"> The James Hutton Institute</a> in Scotland. In the 
    <a href="https://www.hutton.ac.uk/research/groups/information-and-computational-sciences"> Information and Computational Sciences group. </a></p>
    <p>You can find a list of my scientific papers on
    <a href="https://scholar.google.co.uk/citations?hl=en&user=0ZmOjTAAAAAJ&view_op=list_works&sortby=pubdate"> Google Scholar.</a></p>
 



    <p><Link to="/contact">Want to contact me</Link></p>
    </Layout>
  )
}

export default AboutPage