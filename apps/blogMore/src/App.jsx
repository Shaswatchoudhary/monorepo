import { formatDate } from '@repo/utils'

function App() {

  return (
    <>
      <p>{formatDate(new Date())}</p>
    </>
  )
}

export default App
