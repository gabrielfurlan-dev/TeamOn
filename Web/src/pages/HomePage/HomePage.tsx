import { useState } from 'react'
import SendHumor from '../SendHumor/SendHumor'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className=''>
        <SendHumor/>
      </div>
  )
}

export default App
