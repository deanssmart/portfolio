import { connect } from 'react-redux';
import Skills from './Skills';

const mapStateToProps = ({ home }) => ({ home });

export default connect(mapStateToProps)(Skills);