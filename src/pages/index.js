import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () =>  {
  return(
    <Layout>
    <Head title="Home" />
    <h2>I have a passion for research into the practical use of data science technologies
     to aid understanding and decisions about human-environment systems under environmental change</h2>
     <p>I work at 
     <a href="https://www.hutton.ac.uk/">The James Hutton Institute</a> in Scotland. In the 
     <a href="https://www.hutton.ac.uk/research/groups/information-and-computational-sciences"> Information and Computational Sciences group. </a></p>
     <p>You can find a list of my scientific papers on
     <a href="https://scholar.google.co.uk/citations?hl=en&user=0ZmOjTAAAAAJ&view_op=list_works&sortby=pubdate">Google Scholar.</a></p>
  
    
    </Layout>
  )

}

export default IndexPage