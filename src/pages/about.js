import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
  return (
    <Layout>
    <Head  title="About"/>
    <h2>My current work:</h2>
    <p>I am based at 
    <a href="https://www.hutton.ac.uk/"> The James Hutton Institute</a> in Scotland; in the 
    <a href="https://www.hutton.ac.uk/research/groups/information-and-computational-sciences"> Information and Computational Sciences group. </a> 
    I am also an honorary research fellow at the University of Dundee.</p>
    <p>You can find a list of my research papers on
    <a href="https://scholar.google.co.uk/citations?hl=en&user=0ZmOjTAAAAAJ&view_op=list_works&sortby=pubdate"> Google Scholar.</a></p>
    <h2>My previous work:</h2>
    <p>I was a researcher at <a href="https://www.rothamsted.ac.uk/"> Rothamsted Research</a>, based in Devon, UK.
    Prior to that I worked as a risk analyst at the <a href="https://www.gov.uk/government/organisations/environment-agency"></a> Environment Agency, in England. 
      </p>


    </Layout>
  )
}

export default AboutPage