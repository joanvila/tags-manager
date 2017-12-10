import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import TagManager from '../components/TagManager.js';

const mapStateToProps = state => ({
    tags: state.tags,
});

const mapDispatchToProps = (dispatch) => ({
    add: (tag) => {
        dispatch({type: 'ADD', newItem: tag})
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(TagManager)
