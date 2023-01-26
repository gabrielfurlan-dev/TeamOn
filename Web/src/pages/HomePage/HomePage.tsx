import { useState } from 'react'
import SendHumorComponent from '../SendHumor/SendHumor'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className=''>
        <SendHumorComponent/>
      </div>
  )
}

export default App
