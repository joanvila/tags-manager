import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import TagManager from '../components/TagManager.js';

const mapStateToProps = state => ({
    categories: state.categories,
});

const mapDispatchToProps = (dispatch) => ({
    addCategory: (categoryName) => {
        dispatch({type: 'ADD_CATEGORY', newCategory: categoryName})
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(TagManager)
