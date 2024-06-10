import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

// markup
const Page = () => {
  return (
    <Layout pageTitle="Руслан Хуснетдинов" isHome={true}>
      <blockquote>
        <p>
          Привет! Я продакт-менеджер и разработчик. Работаю в&nbsp;<s style={({color: '#ed6c74'})}>Uchi.ru</s> → <s style={({color: '#ffcc00'})}>Яндексе</s> → <Link to='/cv'>ищу работу</Link>. 
          Пишу в телеграм-канал <Link to='https://t.me/ruslanxdev'>Технопродакт</Link>.</p>
        <p>До этого долгое время проективровал мосты.</p>
      </blockquote>
    </Layout>
  )
}

export default Page
