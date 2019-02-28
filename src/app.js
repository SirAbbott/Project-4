import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './style.scss'

import SalesShow from './components/sales/SalesShow'
import Home from './components/Home'
import FlashMessages from './components/common/FlashMessages'
import RegisterMerchant from './components/auth/RegisterMerchant'
import RegisterCustomer from './components/auth/RegisterCustomer'
import UserProfile from './components/users/UserProfile'

class App extends React.Component{
  constructor(){
    super()
    this.state = ''
  }

  render(){
    return(
      <BrowserRouter>

        <main>

          <FlashMessages />
          <Switch>
            <Route path="/sales/:id" component={SalesShow} />
            <Route path="/profile" component={UserProfile} />
            <Route path="/signup" component={RegisterCustomer} />
            <Route path="/register" component={RegisterMerchant} />
            <Route path="/" component={Home} />
          </Switch>

        </main>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
