import React, { ReactNode } from 'react'

// MUI
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

// Local
import TopNavBar from './TopNavBar'
import Footer from './Footer'

interface ILayoutProps {
  children: ReactNode
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Container maxWidth="lg">
        <TopNavBar />
        <Box my={4}>
          <main>{children}</main>
          <Footer />
        </Box>
      </Container>
    </>
  )
}

export default Layout
