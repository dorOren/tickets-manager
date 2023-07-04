const logger = require('../common/logger');
const tryCatch = require('../common/tryCatch');
const data = require('../dev-data/data.json');
const ticketService = require('./../services/ticketService');

exports.getAllTickets = tryCatch(async (req, res) => {
  logger.info('ticketsController::getAllTickets:: called');

  const { title, content, userEmail, from, to } = req.query;
  const filteredFields = { title, content, userEmail };

  let filteredTickets = ticketService.filterByFields(data, filteredFields);
  filteredTickets = ticketService.filterByTime(
    filteredTickets,
    from ?? 0,
    to ?? Infinity
  );

  logger.info(`tickets length ${filteredTickets.length}`);
  res.status(200).json(filteredTickets);
});
