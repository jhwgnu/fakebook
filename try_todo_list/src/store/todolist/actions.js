export const POST_TODO_REQUEST = 'POST_TODO_REQUEST'

export const postTodoRequest = (text) => {
    return {
	type: POST_TODO_REQUEST,
	text
    }

}
