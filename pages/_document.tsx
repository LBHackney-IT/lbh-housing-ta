import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class TADocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="govuk-template__body">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default TADocument