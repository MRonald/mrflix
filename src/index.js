import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video';
import Pagina404 from './pages/error404';
import Categoria from './pages/cadastro/categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/categoria" component={Categoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
