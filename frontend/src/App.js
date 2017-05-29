import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/actionCreators';

import Main from './Main';

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

var App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
