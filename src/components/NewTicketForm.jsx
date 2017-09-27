import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import c from './../constants/constants';
import { v4 } from 'uuid';
import { firebaseConnect } from 'react-redux-firebase';

class NewTicketForm extends React.Component {

  constructor(props){
    super(props);
    this.handleNewTicketFormSubmission = this.handleNewTicketFormSubmission.bind(this);
  }

  handleNewTicketFormSubmission(event) {
    event.preventDefault()
    const { _names, _location, _issue } = this.refs;
    const { firebase } = this.props;
       firebase.push('/tickets', {
         names: _names.value,
         location: _location.value,
         description: _issue.value,
         timeOpened: new Date().getTime()
       })
    this.props.hideFormAfterSubmission();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleNewTicketFormSubmission}>
          <input
            ref="_names"
            type="text"
            id="names"
            placeholder="Pair Names"/>
          <input
            ref="_location"
            type="text"
            id="location"
            placeholder="Location"/>
          <textarea
            ref="_issue"
            type="text"
            id="issue"
            placeholder="Describe your issue."/>
          <button type="submit">Help!</button>
        </form>

      </div>
    );
  }

}

NewTicketForm.propTypes = {
  hideFormAfterSubmission: PropTypes.func
}

const firebaseWrappedNewTicketForm = firebaseConnect(['/tickets'])(NewTicketForm)
export default connect()(firebaseWrappedNewTicketForm)
