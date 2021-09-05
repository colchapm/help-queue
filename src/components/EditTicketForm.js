import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function EditTicketForm(props) {
  const firestore = useFirestore();
  const { ticket } = props;

  function handleEditTicketFormSubmission(event) {
    event.preventDefault();
    props.onEditTicket();
    const propertiesToUpdate = {
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value
    }
    return firestore.update({collection: 'tickets', doc: ticket.id }, propertiesToUpdate)
    //we pass two arguments into the update() method - the object that describes the item that needs to be updated and an object that contains the properties we want to update (in our case its a constant). Firestore will merge the two objects together, with the properties from the second object taking precedent
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditTicketFormSubmission}
        buttonText="Update Ticket" />
    </React.Fragment>
  );
}

EditTicketForm.propTypes = {
  ticket: PropTypes.object,
  onEditTicket: PropTypes.func
}

export default EditTicketForm;