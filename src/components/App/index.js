import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = ({ home, projects, contact }) => ({ home, projects, contact });

export default connect(mapStateToProps)(App);