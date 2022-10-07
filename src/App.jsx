import React from 'react'
import './assets/css/base/base.css'

// Primeiro passo: Importar as paginas que eu criei
import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import Pagina404 from './paginas/Pagina404'
import Cabecalho from './components/Cabecalho'

// Segundo passo: instalar a lib react-router-dom e importar aqui
// Eu renomeei BrowserRouter para Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
// Terceiro passo: Usar o Router pra mostrar que eu terei alternancia de paginas e de rotas
// Quarto passo: Usar Route que eu importei tbm para aninhar cada componente que será uma rota
// Quinto passo: Dar o path de cada um no dominio web (usei exact pra prevenir um comportamento padrao do React 
// que entende que '/' está dentro de '/sobre')
// Sexto passo: O switch serve pra fazer o React parar de procurar outras rotas se ele ja achou a rota certa
// Setimo passo: Agora preciso indicar caso a pessoa tente acessar uma rota que nao existe, entao vou criar uma nova
// página chamada "Pagina 404.jsx". IR PARA LA. Na <Pagina404> eu nao vou indicar caminho pq eu vou dizer que
// qualquer caminho sem ser os que existem, vão direcionar pra la.
// Oitavo passo foi criar o componente Cabecalho que la tinha o caminho das rotas para usar. Agora vou importar aqui.
// Nono passo: Inserir o componente antes do Switch, assim eu garanto que ele vai englobar todas as rotas.

  return (
    <Router>
      <Cabecalho />
      <Switch>

        <Route exact path='/'>
          <Home />
        </Route>
        
        <Route path='/sobre'>
          <Sobre />
        </Route>
        
        <Route>
          <Pagina404 />
        </Route>

      </Switch>
    </Router>
  )
}

export default App
