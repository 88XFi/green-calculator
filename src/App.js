import { useState } from 'react'
import Result from './components/Result'
import Button from './components/Button'

function App() {
  let [total, setTotal] = useState('')

  const error = 'Syntax ERROR!'

  const clicked = (button) => {
    if(button === '=') {
      calculate()

    } else if(button === 'C') {
      setTotal('')

    } else if(button === 'del') {
      try {
          {total===error?setTotal(''):setTotal(total.slice(0, -1))}
      } catch(e) {
        setTotal('')
      }

    } else if(total === error) {
      setTotal(total.slice(12, 12) + button)

    } else {
      setTotal(total + button)
    }
  }

  const calculate = () => {
    try {
      setTotal(eval(total))
    } catch(e) {
      setTotal(error)
    }
  }

  return (
    <div>
      
      <div className="card">
        <Result total={total} />
        <Button clicked={clicked} />
      </div>
      
    </div>
  )
}

export default App
