import { DateTime } from "luxon";

const eventsList = [
  {
    id: "1",
    name: "Coachella",
    start: DateTime.now().plus({ weeks: 1 }).toJSDate(),
    description:
      "The Coachella Valley Music and Arts Festival is an annual music and arts festival held at the Empire Polo Club in Indio, California, in the Coachella Valley in the Colorado Desert. It was co-founded by Paul Tollett and Rick Van Santen in 1999, and is organized by Goldenvoice, a subsidiary of AEG Presents.",
    poster:
      "https://i.pinimg.com/originals/0c/7c/1a/0c7c1ad630fb87dec49cddcdc4b9c0e8.jpg",
    prices: [
      {
        id: "p1",
        type: "Tier 1",
        price: 499,
      },
      {
        id: "p2",
        type: "Tier 2",
        price: 549,
      },
      {
        id: "p3",
        type: "Tier 3",
        price: 599,
      },
      {
        id: "p4",
        type: "VIP",
        price: 1260,
      },
    ],
  },
  {
    id: "2",
    name: "Comic-Con",
    start: DateTime.now().plus({ weeks: 2 }).toJSDate(),
    poster:
      "https://i.pinimg.com/originals/ae/63/dd/ae63dd27fc5e19cadd3a8c39ed48ade8.jpg",
    description:
      "A comic book convention or comic-con is an event with a primary focus on comic books and comic book culture, in which comic book fans gather to meet creators, experts, and each other. Commonly, comic conventions are multi-day events hosted at convention centers, hotels, or college campuses.",
    prices: [
      {
        id: "p1",
        type: "First time",
        price: 75,
      },
      {
        id: "p2",
        type: "Returning attendees",
        price: 60,
      },
      {
        id: "p3",
        type: "Children",
        price: 37,
      },
    ],
  },
  {
    id: "3",
    name: "Tomorrowland",
    start: DateTime.now().plus({ weeks: 2.5 }).toJSDate(),
    poster: "http://www.laut.de/bilder/upload/2022/08/19/boom.png",
    description:
      "Tomorrowland is a Belgian electronic dance music festival held in Boom, Flanders, since 2005.",
    prices: [
      {
        id: "p1",
        type: "Full madness",
        price: 355,
      },
      {
        id: "p2",
        type: "Day pass ",
        price: 125,
      },
      {
        id: "p3",
        type: "Easy tent",
        price: 1200,
      },
    ],
  },
  {
    id: "4",
    name: "E3",
    start: DateTime.now().plus({ weeks: 3.5 }).toJSDate(),
    poster: "https://web.njit.edu/~rs865/images/e3/wrashidd_e3_poster_01.png",
    description:
      "E3 is a trade event for the video game industry. The Entertainment Software Association organizes and presents E3, which many developers, publishers, hardware, and accessory manufacturers use to introduce and advertise upcoming games and game-related merchandise to retailers and to members of the press",
    prices: [
      {
        id: "p1",
        type: "Gamer Badge",
        price: 200,
      },
      {
        id: "p2",
        type: "Premium Badge",
        price: 995,
      },
    ],
  },
  {
    id: "5",
    name: "Bonnaroo",
    start: DateTime.now().plus({ weeks: 3.7 }).toJSDate(),
    description:
      "Bonnaroo is an annual music and arts festival held in Manchester, Tennessee. It features a diverse lineup of musicians, comedians, and performers, as well as a variety of activities, including yoga classes, film screenings, and a food and craft marketplace. Bonnaroo is known for its relaxed and welcoming atmosphere.",
    poster:
      "https://freight.cargo.site/w/600/i/388f198bd6105a80414b5ac6e236c7f95f01517e82887ba95992a327713e9c17/BONNAROO22_ML-Poster-thumb.jpg",
    prices: [
      { id: "p1", type: "starter", price: 349 },
      { id: "p2", type: "premium", price: 449 },
    ],
  },
  {
    id: "6",
    name: "Lollapalooza",
    start: DateTime.now().plus({ weeks: 4 }).toJSDate(),
    description:
      "Lollapalooza is a music festival held annually in Chicago, Illinois. It features a wide range of popular artists, as well as food and drink vendors, carnival rides, and other activities. Lollapalooza has also expanded to other cities around the world, including Santiago, Chile and Berlin, Germany.",
    poster:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0a9e0249559907.58b8295475953.jpg",
    prices: [
      { id: "p1", type: "Tier 1", price: 120 },
      { id: "p2", type: "Tier 2", price: 340 },
    ],
  },
  {
    id: "7",
    name: "Glastonbury",
    start: DateTime.now().plus({ weeks: 4.2 }).toJSDate(),
    description:
      "Glastonbury is a music and performing arts festival held in Pilton, England. It is one of the largest and most well-known festivals in the world, and has featured a wide range of musicians and performers over the years, including some of the biggest names in the industry. In addition to music, the festival also includes theater, circus, and other forms of entertainment.",
    poster:
      "https://media.resources.festicket.com/image/372x525/center/middle/filters:quality(70)/www/photos/2394-poster_CzH0T3m.jpg",
    prices: [
      { id: "p1", type: "Tier 1", price: 248 },
      { id: "p2", type: "Tier 2", price: 358 },
    ],
  },
  {
    id: "8",
    name: "SXSW",
    start: DateTime.now().plus({ weeks: 4.5 }).toJSDate(),
    description:
      "SXSW (South by Southwest) is an annual music, film, and technology festival held in Austin, Texas. It features a wide range of performances and panels, as well as opportunities for networking and career development. SXSW is known for showcasing up-and-coming artists and providing a platform for emerging technologies and ideas.",
    poster:
      "https://www.sxsw.com/wp-content/uploads/2019/03/Laurent-Durieux-SXSW-poster.jpg",
    prices: [
      { id: "p1", type: "Tier 1", price: 695 },
      { id: "p2", type: "Tier 2", price: 340 },
    ],
  },
];

/**
 * @typedef AdaEventPrice
 * @property {string} id Event id
 * @property {string} type price type
 * @property {number} price price currency value
 */

/**
 * @typedef AdaEvent
 * @property {string} id Event id
 * @property {string} description event description
 * @property {string} poster event poster URL
 * @property {Array<AdaEventPrice>} prices prices array
 */

/**
 *
 * @param {Object} filters An object containing filters like: { price:300 }, { start: new Date() } or { price:200, start: new Date("20-01-2022") }
 * @param {number} filters.price price to use in filters, will return all events with price lower than the provided price
 * @param {Date} filters.start start date to use in filters, will return all events that start before this date
 * @returns {Promise<Array<AdaEvent>>} Array of filtered events
 */
export function getEvents(filters) {
  let filteredEvents = eventsList;

  if (filters?.price) {
    filteredEvents = filteredEvents.filter((event) =>
      event.prices.some((eventPrice) => eventPrice <= filters.price)
    );
  }

  if (filters?.start) {
    filteredEvents = filteredEvents.filter(
      (event) => event.start.getTime() < filters.start.getTime()
    );
  }

  return Promise.resolve(
    filteredEvents.sort(
      (eventA, eventB) => eventA.start.getTime() < eventB.start.getTime()
    )
  );
}

/**
 *
 * @param {string} eventId an event id
 * @returns {Promise<(AdaEvent|undefined)>} an event matching the provided id or undefined if no match is found
 */
export function getEventById(eventId) {
  return Promise.resolve(
    eventsList.find((event) => event.id === String(eventId))
  );
}
