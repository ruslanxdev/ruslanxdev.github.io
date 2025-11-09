import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

// markup
const Page = () => {
  return (
    <Layout title="Руслан Хуснетдинов" isHome={true}>
      <blockquote>
        <p>
          Привет! Я продакт-менеджер и разработчик. Работаю в&nbsp;<s style={({color: '#ed6c74'})}>Uchi.ru</s> → <s style={({color: '#ffcc00'})}>Яндекс Поиске</s> → <b style={({color: '#4daaf8'})}>Яндекс Лавке</b> (<Link to='/cv'>резюме</Link>). 
          Пишу в&nbsp;телеграм-канал <Link to='https://t.me/technoprodact'>Технопродакт</Link>.</p>
        <p>До этого долгое время проективровал мосты.</p>
      </blockquote>
    </Layout>
  )
}

export default Page
