const Playlist = require('./playlist');

describe('Playlist', () => {
  let playlist;
  const songs = [
    'Roberto Carlos',
    'Tim Maia',
    'Anita',
    'Alok',
  ];

  beforeEach(() => {
    playlist = new Playlist(songs);
  });

  test('as músicas iniciais devem ser recebidas via construtor', () => {
    expect(playlist.getSongs()).toHaveLength(4);
    expect(playlist.getSongs()).toStrictEqual(songs);
  });

  test('quando dou play, deve tocar música atual', () => {
    playlist.play();
    expect(playlist.getCurrentSong()).toBe(songs[0]);
    expect(playlist.isPlaying()).toBe(true);
  });

  test('quando aperto next, deve tocar próxima música', () => {

    playlist.play();
    playlist.next();
    playlist.next();

    expect(playlist.getCurrentSong()).toBe(songs[2]);
  });

  test('mock getCurrentSong', () => {
    playlist.getCurrentSong = jest.fn().mockImplementation(() => 'foo');
    expect(playlist.getCurrentSong()).toBe('foo');
  });

  test('spy isPlaying', () => {
    const isPlayingMock = jest.spyOn(playlist, 'isPlaying');
    isPlayingMock.mockImplementation(() => true);

    expect(playlist.isPlaying()).toBe(true);
  });

  test('verifica se mock anterior ficou no escopo do teste isPlaying', () => {
    expect(playlist.isPlaying()).toBe(false);
  });

  test('verifica out of bounds qndo executa next mais vezes q a qtd de músicas', () => {
    const nextMock = jest.spyOn(playlist, 'next');

    playlist.next();
    playlist.next();
    playlist.next();
    playlist.next();
    playlist.next();
    playlist.next();

    expect(nextMock).toHaveBeenCalledTimes(6);
    expect(playlist.getCurrentSong()).not.toBe(undefined);
  });
});