import { connect } from 'react-redux';
import TagManager from '../components/TagManager';

const mapStateToProps = state => ({
    categories: state.categories,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TagManager)
