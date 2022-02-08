import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Todos from './components/todos/Todos'
import AllTodos from './AllTodos'
import TodosCreate from './components/todos/TodosCreate'
import TodoDetail from './components/todos/TodoDetail'

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
      <TodoDetail />
    </ApolloProvider>
  )
}

export default App
