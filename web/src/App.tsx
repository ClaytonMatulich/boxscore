import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col gap-1'>
        <button className='bg-blue-500' onClick={() => setCount((count) => count + 1)}>
          up
        </button>
        <button className='bg-red-400' onClick={() => setCount((count) => count - 1)}>
          dow
        </button>
        <p>
          {count}
        </p>
      </div>
    </>
  )
}

export default App
