function filterByField(tickets, field, value) {
  return tickets.filter(ticket => ticket[field].includes(value));
}

exports.filterByFields = (tickets, filteredFields) => {
  let filteredTickets = tickets;
  for (const fieldKey of Object.keys(filteredFields)) {
    const value = filteredFields[fieldKey];
    if (!value) continue;
    filteredTickets = filterByField(filteredTickets, fieldKey, value);
  }

  return filteredTickets;
};

exports.filterByTime = (tickets, from, to) => {
  let ticketsByTime = tickets;
  ticketsByTime = ticketsByTime.filter(
    ticket => ticket.creationTime < to && ticket.creationTime > from
  );

  return ticketsByTime;
};
