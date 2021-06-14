import * as React from 'react'

import Layout from '../components/Layout'

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Ruslan Khusnetdinov" isHome={true}>
      <h1>Ruslan Khusnetdinov</h1>
      <p>
        Hi, I am a front-end developer and I work at <s>Freelance</s> → <s>Uchi.ru</s> → Yandex.
        <br />
        Before that, I designed bridges for a long time.
      </p>
    </Layout >
  )
}

export default IndexPage
