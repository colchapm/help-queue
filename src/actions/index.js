export const deleteTicket = id => ({
  type: 'DELETE_TICKET',
  id
});

//here we define a deleteTicket method, identifying id as a parameter, and implicitly returning an object literal (we wrap it in parantheses, otherwise it will return undefined). Note also that we're using a shorthand syntax to set id: id

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addTicket = (ticket) => {
  const { names, location, issue, id } = ticket;
  return {
    type: 'ADD_TICKET',
    names: names,
    location: location,
    issue: issue,
    id: id
  }
}