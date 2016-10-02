import { connect } from 'react-redux'
import Counter from '../components/Counter'

const mapStateToProps = (state) => ({
  counter: state.counter,
})

export default connect(mapStateToProps)(Counter)
