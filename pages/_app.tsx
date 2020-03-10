import React, { useEffect } from 'react'
import App from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../styles/theme'

export default class MyApp extends App {
  render() {
    useEffect(() => {
      const jssStyles = document.querySelector('#jss-server-side')
      if (jssStyles) {
        jssStyles.parentElement!.removeChild(jssStyles)
      }
    }, [])
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>My page</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    )
  }
}