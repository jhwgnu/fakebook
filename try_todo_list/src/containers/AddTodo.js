import { connect } from 'react-redux'
import { AddTodo } from '../components/molecules/AddTodo'
import { postTodoRequest } from '../store/todolist/actions'

const mapStateToProps = (state) => {
    return {
	statefunction : state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
	onPostTodo: (text) => {
	    dispatch(postTodoRequest(text))
	}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)





