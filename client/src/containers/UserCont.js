import { connect } from 'react-redux';

import { getUser } from '../actions/action';
import User from './components';

const mapDispatchToProps = {
  getUser
}

export default connect(null, mapDispatchToProps)(User);
