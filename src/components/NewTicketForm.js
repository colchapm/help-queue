import React from "react";
// import { v4 } from 'uuid'; you can remove this library because Firebase will now create ID's for our tickets
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
// import Moment from 'moment'; Firebase doesn't support Moment-formatted time
import { useFirestore } from 'react-redux-firebase';
import { addTicket } from "../actions";


function NewTicketForm(props){

  const firestore = useFirestore();
  //this gives us access to any Firestore methods we need, like add() or get()
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={addTicketToFirestore}
        buttonText="Help!" />
    </React.Fragment>
  );

  function addTicketToFirestore(event) {
    event.preventDefault();
    props.onNewTicketCreation();

    return firestore.collection('tickets').add(
      {
        names: event.target.names.value,
        location: event.target.location.value,
        issue: event.target.issue.value,
        timeOpen: firestore.FieldValue.serverTimestamp()

      }
    );
    //we are adding tickets to the 'tickets' collection. unlike SQL, Firebase will add the collection if it doesn't already exist. if the collection exists, Firebase will add the ticket to the existing collection.
  }

  //because a function component doesn't have 'this' as a reference like a class component, we need to directly refer to the 'props' passed into the function component. That's why we do props.onNewTicketCreation() instead of this.onNewTicketCreation()

  //onNewTicketCreation() is the callback from the parent component even though it has a different name now - it will run the handleAddingNewTicketToList function from TicketControl
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;