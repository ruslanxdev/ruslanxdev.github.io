import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

// markup
const NotFoundPage = () => {
  return (
    <Layout pageTitle="Страница не найдена">
      <h1>Страница не найдена</h1>
      <p >
        Извините{' '}
        <span role='img' aria-label='Грустный emoji'>
          😔
        </span>{' '}
        мы не можем найти запрашиваемую вами страницу.
      </p>
      <p>
        <Link to='/'>На главную</Link>.
      </p>
    </Layout>
  )
}

export default NotFoundPage
