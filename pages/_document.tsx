import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Roboto+Slab&display=swap" rel="stylesheet"/>
        </Head>
        <body className='bg-gradient-to-r from-green to-blue-300 dark:from-dark-200 dark:to-dark-700 '>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument