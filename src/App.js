import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Todos from './Todos'
import AllTodos from './AllTodos'
// import CarsTwo from './CarsTwo'
// import CarsQuery from './CarsQuery'
// import CarsRefetch from './CarsRefetch'
// import CarsMutation from './CarsMutation'
// import CarsMutationComponent from './CarsMutationComponent'
const client = new ApolloClient({
  uri: 'http://localhost:4000'
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AllTodos />
      <Todos />
    </ApolloProvider>
  )
}

export default App
