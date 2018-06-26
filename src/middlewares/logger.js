export default store => next => action => {
    console.log('____', 'state before:', store.getState())
    console.log('____', 'dispatching', action)
    next(action)
    console.log('____', 'state after:', store.getState())
}