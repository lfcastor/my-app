import {
  BrowserRouter as Router,
  Switch,
  Route,
}from 'react-router-dom'

import TemplateDefault from './templates/Default'
import TempalatePage from './templates/Page'

import CustomersList from './pages/customers/List'
import CustomersRegister from './pages/customers/Register'
import CustomersEdit from './pages/customers/Edit'
import Home from './pages/Home'

const App = () => {
  return (
    <Router>
        <TemplateDefault>
          <Switch>
            <Route path='/customers/edit/:id'>
              <TempalatePage title="Editar Clientes" Component={CustomersEdit} />
            </Route>
            <Route path='/customers/add'>
              <TempalatePage title="Cadastro de Clientes" Component={CustomersRegister} />
            </Route>
            <Route path='/customers'>
              <TempalatePage title="Lista de Clientes" Component={CustomersList} />
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
