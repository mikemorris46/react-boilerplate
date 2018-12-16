import React, { useState, lazy, Suspense } from 'react'
import { hot } from 'react-hot-loader'

const Warning = lazy(() => import('./Warning'))

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Hello World!! reloaded</h1>
      <h2 className={count > 10 ? 'warning' : null}>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      {count > 10 ? (
        <Suspense fallback={null}>
          <Warning />
        </Suspense>
      ) : null}
    </div>
  )
}

export default hot(module)(App)
