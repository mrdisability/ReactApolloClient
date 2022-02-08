import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Todos from './components/todos/Todos'
import AllTodos from './AllTodos'
import TodosCreate from './components/todos/TodosCreate'

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql'
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      {/* <AllTodos />
      <Todos /> */}
      <Todos />
      <TodosCreate />
    </ApolloProvider>
  )
}

export default App
