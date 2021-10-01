import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Message from "../components/Message"
import { connect } from 'react-redux'
class MessageContainer extends Component {
    render() {
        let { message } = this.props;
        return (
            <div>
                <Message message={message} />
            </div>
        );
    }
}
PropTypes.propTypes = {
    message: PropTypes.string.isRequired
}
const mapStateToProps = state => {
    return {
        message: state.message
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageContainer);