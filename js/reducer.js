let state;

function reducer(state = {count: 0}, action) {
    switch(action.type) {
        case 'INCREASE_COUNT':
            return {...state, count: state.count + 1}
        default:
            return state
    }
}

function dispatch(action) {
    state = reducer(state, action);
    render()
}

function render() {
    document.querySelector('#container').textContent = state.count;
}

let button = document.querySelector('#button')
button.addEventListener('click', () => dispatch({type: 'INCREASE_COUNT'}))

dispatch({type: '@@INIT'})