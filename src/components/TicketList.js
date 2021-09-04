import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
 

function TicketList(props){

  useFirestoreConnect([
    { collection: 'tickets'}
  ]);
  //this hook comes from react-redux-firebase and allows us to listen for changes to Firestore

  const tickets = useSelector(state => state.firestore.ordered.tickets);
  //the useSelection hook allows us to extract data from our Redux store

  if (isLoaded(tickets)) {
    return (
      <React.Fragment>
        <hr/>
        {tickets.map((ticket) => {
          return <Ticket 
            whenTicketClicked = { props.onTicketSelection }
            names={ticket.names}
            location={ticket.location}
            issue={ticket.issue}
            formattedWaitTime={ticket.formattedWaitTime}
            id={ticket.id}
            key={ticket.id}/>
        })}
      </React.Fragment>
    );
    //react-redux-firebase offers the isLoaded() function - if the tickets aren't loaded yet, our fragment will return a "Loading..." message
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}


TicketList.propTypes = {
  // ticketList: PropTypes.object,
  onTicketSelection: PropTypes.func
}

export default TicketList;