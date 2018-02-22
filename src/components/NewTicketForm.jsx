import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import c from './../constants';
import { v4 } from 'uuid';
import { addTicket } from './actions';

class NewTicketForm extends React.Component {

  constructor(props){
    super(props);
    console.log(props);
    this.handleNewTicketFormSubmission = this.handleNewTicketFormSubmission.bind(this);
  }

  handleNewTicketFormSubmission(event) {
    event.preventDefault()
    const { _names, _location, _issue } = this.refs;
    const { dispatch } = this.props;
    dispatch(addTicket(_names.value, _location.value, _issue.value));
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

NewTicketForm = connect()(NewTicketForm);

export default NewTicketForm;
