let { Hotel, findCheapestHotel } = require('./hotel');

describe('Hotel', () => {
  const hotels = [
    new Hotel('caríssimo', 1_000),
    new Hotel('baratinho', 60),
    new Hotel('caro', 800),
  ];

  test('encontra o mais barato', () => {
    const cheapest = findCheapestHotel(hotels);
    const expected = new Hotel('baratinho', 60);

    expect(cheapest).toStrictEqual(expected);
  });

  test('lista inicial contém 3 hoteis', () => {
    expect(hotels).toHaveLength(3);
  });

  test('mockar implementacao do findCheapestHotel', () => {
    findCheapestHotel = jest.fn().mockImplementation(() => 'baz');
    expect(findCheapestHotel()).toBe('baz');
  });
});
