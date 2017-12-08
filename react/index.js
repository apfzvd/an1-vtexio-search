import { graphql, withApollo } from 'react-apollo'
import gql from 'graphql-tag'
import React, { Component } from 'react'
import ProductResult from './components/ProductResult'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      query: 'nothing'
    }
    this.changeBusca = this.changeBusca.bind(this)
  }

  changeBusca (e) {
    this.setState({
      query: e.target.value
    })
  }

  render () {
    const {
      query
    } = this.state

    return (
      <div className="w-60 center pv4">
        <h1 className="blue">Hey! Try looking for our products here: </h1>
        <h2 className="blue">hint: Try Max!</h2>

        <div>
         <input className="w-100 br2 ba bw1 b--light-silver blue" type="text" onInput={this.changeBusca} />
        </div>

        <ProductResult query={query} />
      </div>
    )
  }
}

export default App
