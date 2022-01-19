import stls from '@/styles/components/general/Btns.module.sass'
import { BtnBeta } from '@/components/btns'

const Btns = () => {
  const list = [
    {
      label: 'Получите список программ:',
      btn: <BtnBeta>Получить</BtnBeta>
    },
    {
      label: 'Получите список преподавателей:',
      btn: <BtnBeta>Получить</BtnBeta>
    },
    {
      label: 'Задайте интересуйщий вопрос специалисту приемной комиссии:',
      btn: <BtnBeta>Задать вопрос</BtnBeta>
    },
    {
      label: 'Официальный сайт:',
      btn: <BtnBeta href='https://moscow.mba'>Перейти</BtnBeta>
    },
    {
      label: 'Контактная информация:',
      btn: <BtnBeta href='https://moscow.mba/contact'>Перейти</BtnBeta>
    }
  ]

  return (
    <div className={stls.container}>
      <ul className={stls.list}>
        {list.map((item, idx) => (
          <li key={item.label + idx} className={stls.item}>
            <p className={stls.label}>{item.label}</p>
            {item.btn}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Btns
