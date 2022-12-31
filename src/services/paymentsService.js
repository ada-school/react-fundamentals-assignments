import { getEventById } from "./eventsService";

/**
 *
 * @param {string} email Email of an user
 * @param {string} eventId  Event id the user has selected to attend
 * @param {string} priceId The price id the user has selected for this event
 */
export async function sendPaymentLink(email, eventId, priceId) {
  const event = await getEventById(eventId);

  const price = event.prices.find((price) => price.id === priceId);

  alert(
    `Payment link was sent to ${email} for ${event.name} and price type: ${price.type}`
  );
}
