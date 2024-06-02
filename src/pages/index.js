import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Руслан Хуснетдинов" isHome={true}>
      <blockquote>
        <p>
          Привет! Я продакт-менеджер и фронтенд разработчик. Работаю в <s>Uchi.ru</s> → <s>Яндексе</s> → <Link to='/cv'>ищу работу</Link>.
        </p>
        <p>
          До этого долгое время проектировал мосты.
        </p>
      </blockquote>
    </Layout>
  )
}

export default IndexPage
