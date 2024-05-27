import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Руслан Хуснетдинов" isHome={true}>
      <h1>Руслан Хуснетдинов</h1>
      <p>
        Привет! Я продакт-менеджер и фронтенд разработчик. Работаю в <s>Uchi.ru</s> → <s>Яндексе</s> → <Link to='/cv'>ищу работу</Link>.
      </p>
      <p>
        До этого долгое время проективровал мосты.
      </p>
    </Layout >
  )
}

export default IndexPage
