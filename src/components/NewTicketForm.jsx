import React from "react";
import PropTypes from "prop-types";

class NewTicketForm extends React.Component {

  constructor(props){
    super(props);
    this.handleNewTicketFormSubmission = this.handleNewTicketFormSubmission.bind(this);
  }

  handleNewTicketFormSubmission(event) {
    event.preventDefault()
    const { _names, _location, _issue } = this.refs;
    var newTicket = {
      names: _names.value,
      location: _location.value,
      description: _issue.value,
      timeOpened: new Date(),
      timeSinceOpened: 'a few seconds'
    }
    console.log(newTicket.timeOpened);
    this.props.onNewTicketCreation(newTicket);
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
  onNewTicketCreation: PropTypes.func,
  hideFormAfterSubmission: PropTypes.func
}

export default NewTicketForm;
