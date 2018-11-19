import { observable } from 'mobx'

class TodoStore {
  @observable todos = ["buy milk", "buy cheese"]
  @observable filter = ""
}

export default TodoStore