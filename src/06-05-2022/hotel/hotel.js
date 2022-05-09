class Hotel {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

function findCheapestHotel(hotels) {
  let cheapest = null;

  for (let i = 0; i < hotels.length; i++) {
    const hotel = hotels[i];
    if (cheapest === null || hotel.price < cheapest.price) cheapest = hotel;
  }

  return cheapest;
}

module.exports = {
  Hotel,
  findCheapestHotel,
};
