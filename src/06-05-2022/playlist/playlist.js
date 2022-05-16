class Playlist {
  #songs;
  #currentSong;
  #isPlaying;

  constructor(songs) {
    this.#songs = songs;
    this.#currentSong = 0;
    this.#isPlaying = false;
  }

  getSongs() {
    return this.#songs;
  }

  play() {
    this.#isPlaying = true;
  }

  stop() {
    this.#isPlaying = false;
  }

  getCurrentSong() {
    const songIdx = this.#currentSong;
    return this.#songs[songIdx];
  }

  isPlaying() {
    return this.#isPlaying;
  }

  next() {
    this.#currentSong = (this.#currentSong + 1) % this.#songs.length;
  }
}

module.exports = Playlist;
