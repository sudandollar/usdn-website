import { useRoutes } from 'react-router-dom'
import { router } from './router/Router'

function App() {
  const routing = useRoutes(router)
  return routing
}

export default App