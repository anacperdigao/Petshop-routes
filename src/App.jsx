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
// Passo 3: Usar o Router pra mostrar que eu terei alternancia de paginas e de rotas
// Passo 4: Usar Route que eu importei tbm para aninhar cada componente que será uma rota
// Passo 5: Dar o path de cada um no dominio web (usei exact pra prevenir um comportamento padrao do React 
// que entende que '/' está dentro de '/sobre')
// Passo 6: O switch serve pra fazer o React parar de procurar outras rotas se ele ja achou a rota certa
// Passo 7: Agora preciso indicar caso a pessoa tente acessar uma rota que nao existe, entao vou criar uma nova
// página chamada "Pagina 404.jsx". IR PARA LA. Na <Pagina404> eu nao vou indicar caminho pq eu vou dizer que
// qualquer caminho sem ser os que existem, vão direcionar pra la.
// Passo 8 foi criar o componente Cabecalho que la tinha o caminho das rotas para usar. Agora vou importar aqui.
// Passo 9: Inserir o componente antes do Switch, assim eu garanto que ele vai englobar todas as rotas.
// Passo 10: Esta acontencendo um problema que o react ta chamando o index.html toda vez que eu mudo a rota,
// e para isso eu vou voltar no componente Cabecalho e vou trocar o <a> por <link>, e aí sim ele nao vai chamar 
// pelo index.html toda vez. Ou seja, o <Link> faz o papel do ancora <a> só que sem recarregar a pagina toda hora.
// Passo 11: Agora vou consumir uma API do arquivo local chamado db.json e pra isso preciso instalar no node.js
// o seguinte comando "npx json-server --watch db.json --port 5000". Isso é para alimentar os posts do blog.
// Passo 12: Criar um arquivo chamado api.js 
// Passo 13: Verificar se ja tem a biblioteca axios instalada pq é ela que faz a conexao com a API.
// Passo 14: Criar um componente de ListaPost para pegar os dados da API.


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
