import React from 'react'

// MUI
import Typography from '@material-ui/core/Typography'

// Local
import Layout from '../src/Layout'
import ProTip from '../src/ProTip'

export default function Index() {
  return (
    <Layout>
      <Typography variant="h4" component="h1" gutterBottom>
        Lookit! Al the thingS!
      </Typography>
      <ProTip />
    </Layout>
  )
}
