import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

// markup
const Page = () => {
  return (
    <Layout title="Страница не найдена">
      <p>
        Извините
        <span role="img" aria-label="Грустный emoji"> 😔 </span>
        <br />
        Мы не можем найти запрашиваемую вами страницу.
      </p>
      <p>
        <Link to='/'>На главную</Link>
      </p>
    </Layout>
  )
}

export default Page
