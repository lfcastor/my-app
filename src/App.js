import {
  BrowserRouter as Router,
  Switch,
  Route,
}from 'react-router-dom'

import TemplateDefault from './templates/Default'
import TempalatePage from './templates/Page'

import Customers from './pages/Customers'
import Home from './pages/Home'

const App = () => {
  return (
    <Router>
        <TemplateDefault>
          <Switch>
            <Route path='/customers'>
              <TempalatePage title="Clientes" Component={Customers} />
            </Route>
            <Route path='/'>
            <TempalatePage title="Página Inicial" Component={Home} />
            </Route>
          </Switch>
        </TemplateDefault>
      </Router>
  )
}

export default App
