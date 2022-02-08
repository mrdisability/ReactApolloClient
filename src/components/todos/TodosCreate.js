import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const CREATE_TODO = gql`
  mutation CreateTodo(
    $newTodo: TodoItemCreateInput!
  ) {
    createTodo(todo: $newTodo) {
        todo {
            id
            todoTitle
            completed
        }
    }
  }
`

const TodosCreate = () => {
  return (
    <Mutation mutation={CREATE_TODO}>
      {(createTodo, { loading, data, error, called }) => {
        return (
          <div>
            <button
              onClick={() =>
                createTodo({
                  variables: {
                    "newTodo": {
                        "todoTitle": "New React Todo"
                    }
                  }
                })
              }
            >
              Create
            </button>
            {loading ? <div>Loading!</div> : null}
            {data ? (
              <div>
                {data.createTodo.todoTitle} {data.createTodo.id}
              </div>
            ) : null}
          </div>
        )
      }}
    </Mutation>
  )
}

export default TodosCreate
