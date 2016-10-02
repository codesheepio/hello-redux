import { connect } from 'react-redux'
import Counter from '../components/Counter'
import { addCounter } from '../actions/counter'

const mapStateToProps = (state) => ({
  counter: state.counter,
})

const mapDispatchToProps = (dispatch) => ({
  addCounter: () => dispatch(addCounter()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
