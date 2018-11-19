import { autorun } from 'mobx'
import TodoStore from './TodoStore'

export function createStores() {
  const todoStore = new TodoStore()

  autorun(() => {
    console.log(todoStore.filter)
  })

  return {
    todo: todoStore,
  }
}
