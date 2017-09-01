import React from "react";
import NewTicketForm from "./NewTicketForm";
import PropTypes from "prop-types";

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.state = {formVisibleOnPage: false};
  }

  showForm(event) {
    this.setState({formVisibleOnPage: true});
  }

  hideForm(event) {
    this.setState({formVisibleOnPage: false});
  }

  render() {
    let formAreaContent = null;
    if (this.state.formVisibleOnPage){
      formAreaContent = <NewTicketForm
        hideFormAfterSubmission = {this.hideForm}/>
    } else {
      formAreaContent = <button onClick={this.showForm}>Request Help</button>;
    }

    return (
      <div>
        {formAreaContent}
      </div>
    );
  }

}

export default NewTicketControl;
