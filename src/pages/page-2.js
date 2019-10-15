import React from 'react'
import { Link } from 'gatsby'

import Page from '../templates/Page'

const SecondPage = () => (
  <Page title='Page 2'>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Page>
)

export default SecondPage
