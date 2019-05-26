import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'

import footerStyles from './footer.module.scss'

const Footer =() => {
  const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `)



  return (
    <footer className={footerStyles.footer}>
     
     <p> <a href="https://twitter.com/@kitmacleod" target="_blank"> @kitmacleod</a></p>
    </footer>
  )
}

export default Footer