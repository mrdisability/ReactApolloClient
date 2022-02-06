import React, { Component } from 'react'
import { ApolloConsumer } from 'react-apollo'
import gql from 'graphql-tag'

class Todos extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.loadData = this.loadData.bind(this)
  }
  async loadData (client) {
    const todos = await client.query({
      query: gql`
        {
          todosById(id: "1") {
            id
            todo
            completed
          }
        }
      `
    })
    this.setState({
      todosById: todos.data.todosById,
      loading: todos.loading
    })
  }
  render () {
    if (this.state.loading) {
      return <div>Loading</div> // loading: it is true if the request is still in process.
    }
    return (
      <>
        {this.state.todosById ? <div>{this.state.todosById.todo}</div> : null}
        <ApolloConsumer>
          {client => (
            <button onClick={() => this.loadData(client)}>Query</button>
          )}
        </ApolloConsumer>
      </>
    )
  }
}

export default Todos