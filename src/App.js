import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import DefaultLayout from './components/layout/DefaultLayout'

class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <DefaultLayout>
        <Switch>
          <Route exact path='/' component={Homepage}/>
        </Switch>
      </DefaultLayout>
    )

  }
}
export default App
