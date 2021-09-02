import * as c from './../actions/ActionTypes';

export const deleteTicket = id => ({
  type: c.DELETE_TICKET,
  id
});

//here we define a deleteTicket method, identifying id as a parameter, and implicitly returning an object literal (we wrap it in parantheses, otherwise it will return undefined). Note also that we're using a shorthand syntax to set id: id

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addTicket = (ticket) => {
  const { names, location, issue, id, formattedWaitTime, timeOpen } = ticket;
  return {
    type: c.ADD_TICKET,
    names: names,
    location: location,
    issue: issue,
    id: id,
    formattedWaitTime: formattedWaitTime,
    timeOpen: timeOpen
  }
}

export const updateTime = (id, formattedWaitTime) => ({
  type: c.UPDATE_TIME,
  id: id,
  formattedWaitTime: formattedWaitTime
});