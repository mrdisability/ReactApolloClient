import React, { Component } from 'react'
import { ApolloConsumer } from 'react-apollo'
import gql from 'graphql-tag'

class TodoDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.loadData = this.loadData.bind(this)
  }
  async loadData (client) {
    const todos = await client.query({
        query: gql`
            query todoDetail($todoId: ID!) {
                todoDetail(id: $todoId) {
                    id
                    todoTitle
                    completed
                }
            }
        `,
        variables: { 
            "todoId": "6b3b8617-fbbf-4c91-b83d-f1a42d621c3e"
        }
    })
    this.setState({
      todoDetail: todos.data.todoDetail,
      loading: todos.loading
    })
  }
  render () {
    if (this.state.loading) {
      return <div>Loading</div> // loading: it is true if the request is still in process.
    }
    return (
      <>
        {this.state.todoDetail ? <div>{this.state.todoDetail.todoTitle}</div> : null}
        <ApolloConsumer>
          {client => (
            <button onClick={() => this.loadData(client)}>Todo Detail</button>
          )}
        </ApolloConsumer>
      </>
    )
  }
}

export default TodoDetail