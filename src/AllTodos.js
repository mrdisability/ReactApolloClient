import React, { Component } from 'react'
import { ApolloConsumer } from 'react-apollo'
import gql from 'graphql-tag'

class AllTodos extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.loadData = this.loadData.bind(this)
  }
  async loadData (client) {
    const todos = await client.query({
      query: gql`
        {
          allTodos {
            id
            todo
            completed
          }
        }
      `
    })
    this.setState({
      allTodos: todos.data.allTodos,
      loading: todos.loading
    })
  }
  render () {
    if (this.state.loading) {
      return <div>Loading</div> // loading: it is true if the request is still in process.
    }
    return (
        // <div>{console.log(this.state.allTodos)}</div> 
      <>
        {this.state.allTodos ? 
        
        this.state.allTodos.map((todo) => <li key={todo.id}>{todo.todo}</li>) : null}
        <ApolloConsumer>
          {client => (
            <button onClick={() => this.loadData(client)}>Get Todos</button>
          )}
        </ApolloConsumer>
      </>
    )
  }
}

export default AllTodos