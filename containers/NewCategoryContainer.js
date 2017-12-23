import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import NewCategory from '../components/NewCategory';

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch) => ({
    addCategory: (categoryName) => {
        dispatch({type: 'ADD_CATEGORY', newCategory: categoryName})
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewCategory)
