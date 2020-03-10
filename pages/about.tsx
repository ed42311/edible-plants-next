import React from 'react'

// MUI
import Typography from '@material-ui/core/Typography'

// Local
import ProTip from '../src/ProTip'
import Layout from '../src/Layout'

export default function About() {
  return (
    <Layout>
      <Typography variant="h4" component="h1" gutterBottom>
        What&apos;s this all about
      </Typography>
      <ProTip />
    </Layout>
  )
}
