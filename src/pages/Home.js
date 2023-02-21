import React, { useEffect } from 'react'
import { useState } from 'react'
import Buttons from '../components/Buttons'
import Header from '../components/Header'

const INITIAL_STATE = [{
  id: 1,
  title: 'Passaporte',
  status: 0,
},
{
  id: 2,
  title: 'Estudo Trybe',
  status: 0,
},
{
  id: 3,
  title: 'Cursinho Java Script',
  status: 0,
},
{
  id: 4,
  title: 'Testando escalabilidade',
  status: 0,
}
]
export default function Home() {
  const [state, setState] = useState(INITIAL_STATE)
  const handleClickAllRead = () => {
    const updtState = state.map((element) => ({...element, status: 1 }))
    setState(updtState);
  }
  const handleClickAllNotRead = () => {
    const updtState = state.map((element) => ({...element, status: 0 }))
    setState(updtState);
  }
 
  useEffect(() => {

  },[])
  return (
    <div>
      <Header />
      <div className='div-buttons'>
        <button
          className='buttons'
          onClick={handleClickAllRead}
        >
          📬 Marcar Todos como lidos
        </button>

        <button
        className='buttons'
        onClick={handleClickAllNotRead}
        >
          📪 Marccar Todos como Não lido
        </button>
      </div>
      <div className='email-content'>
        {state.map((element) => (
          <div
            className={`emails ${element.status === 0 ? 'unread' : 'read'}`} 
            key={element.id}
          >
             <h4>{element.title}</h4>
            
            <Buttons element={element} useState={ {state, setState} }/>
          </div>
        )) }
      </div>
    </div>
  )
}
