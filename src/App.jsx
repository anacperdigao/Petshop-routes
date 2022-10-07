import React from 'react'
import './assets/css/base/base.css'

// Primeiro passo: Importar as paginas que eu criei
import Home from './paginas/Home'
import Sobre from './paginas/Sobre'

// Segundo passo: instalar a lib react-router-dom e importar aqui
// Eu renomeei BrowserRouter para Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
// Terceiro passo: Usar o Router pra mostrar que eu terei alternancia de paginas e de rotas
// Quarto passo: Usar Route que eu importei tbm para aninhar cada componente que será uma rota
// Quinto passo: Dar o path de cada um no dominio web (usei exact pra prevenir um comportamento padrao do React 
// que entende que '/' está dentro de '/sobre')
// Sexto passo: O switch serve pra fazer o React parar de procurar outras rotas se ele ja achou a rota certa

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        
        <Route path='/sobre'>
          <Sobre />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
