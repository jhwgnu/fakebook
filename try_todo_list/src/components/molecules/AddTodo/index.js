import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import Button from '../../../components/atoms/Button'

const Wrapper = styled.div`
font-family: ${font('primary')};
color: ${palette('grayscale', 0)};
`

export const AddTodo = ({ statefunction, onPostTodo }) => {
    let input;

    const onPost = () => {
	if (input != undefined) {
	    onPostTodo(input.value);
	    input.value = '';
	}
    };

    return (
	    <div>
   	    <input ref={node => {input = node;}} />
	    <Button type="submit" onClick={onPost}>Create Account</Button>
	    </div>
    );
};

AddTodo.propTypes = {
    reverse: PropTypes.bool,
    children: PropTypes.node,
}

/*export default AddTodo*/
