import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Todos from './components/todos/Todos'
import AllTodos from './AllTodos'
// import CarsTwo from './CarsTwo'
// import CarsQuery from './CarsQuery'
// import CarsRefetch from './CarsRefetch'
// import CarsMutation from './CarsMutation'
// import CarsMutationComponent from './CarsMutationComponent'
// const client = new ApolloClient({
//   uri: 'http://localhost:4000'
// })

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql'
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      {/* <AllTodos />
      <Todos /> */}
      <Todos />
    </ApolloProvider>
  )
}

export default App
