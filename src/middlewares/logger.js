export default store => next => action => {
  console.log('___', 'dispatching', action);
  next(action);
}
