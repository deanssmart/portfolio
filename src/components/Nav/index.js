import { connect } from 'react-redux';
import Nav from './Nav';
import { home, projects, contact } from '../../data/actions/state';


const mapDispatchToProps = dispatch => {
    return {
        handleHome: () => dispatch(home()),
        handleProjects: () => dispatch(projects()),
        handleContact: () => dispatch(contact()),
    };
};

export default connect(null, mapDispatchToProps)(Nav);