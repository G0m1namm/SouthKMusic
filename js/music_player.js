'use strict';

/**
 * A music player ... cause why not.
 * Hotkeys:
 *   a - previous
 *   d / n - next
 *   s / p - play / pause
 *   e / r - repeat
 *   q - shuffle
 *
 * @author Holly Springsteen
 */

const colors = {
  aqua: {
    25: '#83BBDA',
    50: '#56A4DB',
    80: '#279DF0',
  },
  metal: {
    5: '#F3F3F1',
    20: '#CFD0C8',
    50: '#868975',
    80: '#36372F',
    90: '#272822',
  },
};

// Control button elements
const buttons = {
  shuffle: document.querySelector('#controls .shuffle'),
  previous: document.querySelector('#controls .previous'),
  playPause: document.querySelector('#controls .play-pause'),
  next: document.querySelector('#controls .next'),
  repeat: document.querySelector('#controls .repeat'),
};

// Range & Time elements
const songCurrentTime = document.querySelector('.song-current-time');
const songLength = document.querySelector('.song-length');
const trackingSlider = document.querySelector('.tracking-slider');
const volumeSlider = document.querySelector('.volume-slider');


// Playlist
const playlistBody = document.querySelector('#playlist tbody');
let playlistPlay = document.querySelectorAll('#playlist .play-pause');
let listItems = document.querySelectorAll('#playlist tbdoy tr');

// Audio Element
const audio = document.getElementById('player');

// Base route for archive url
const archiveBase = '../SouthKMusic/audio';

/**
 * A base list of songs and the meta data for them.
 *
{
  title: '',
  artist: '',
  duration: 0,
  album: {
    title: '',
    art: {
      square: '',
      wide: '',
    },
  },
  url: `${archiveBase}`,
},
 */
const songList = [
    {
      title: 'Gloomy Star (Feat. 1ho, Chan)',
      artist: '공기남',
      duration: 187,
      album: {
        title: 'Airman Morning Diaries #4',
        art: {
          square: '../SouthKMusic/img/songs/1.jpg'
        },
      },
      url: `${archiveBase}/1.mp3`,
    },
    {
      title: '널 너무 모르고',
      artist: '헤이즈 (Heize)',
      duration: 193,
      album: {
        title: '/// (너 먹구름 비)',
        art: {
          square: '../SouthKMusic/img/songs/2.jpg'
        },
      },
      url: `${archiveBase}/2.mp3`,
    },
    {
      title: '여보세요',
      artist: 'NU`EST',
      duration: 209,
      album: {
        title: 'THE SECOND MINI ALBUM `여보세요`',
        art: {
          square: '../SouthKMusic/img/songs/3.jpg'
        },
      },
      url: `${archiveBase}/3.mp3`,
    },
    {
      title: 'And July (Feat. DEAN, DJ Friz)',
      artist: '헤이즈 (Heize)',
      duration: 226,
      album: {
        title: 'And July',
        art: {
          square: '../SouthKMusic/img/songs/4.jpg'
          },
      },
      url: `${archiveBase}/4.mp3`,
    },
    {
      title: '가을 안부',
      artist: '먼데이 키즈 (Monday Kiz)',
      duration: 302,
      album: {
        title: '가을 안부',
        art: {
          square: '../SouthKMusic/img/songs/5.jpg'
        },
      },
      url: `${archiveBase}/5.mp3`,
    },
    {
      title: 'EVERYDAY',
      artist: 'WINNER',
      duration: 206,
      album: {
        title: 'EVERYD4Y',
        art: {
          square: '../SouthKMusic/img/songs/6.jpg'
        },
      },
      url: `${archiveBase}/6.mp3`,
    },
    {
      title: '밤편지',
      artist: '아이유',
      duration: 253,
      album: {
        title: '밤편지',
        art: {
          square: '../SouthKMusic/img/songs/7.jpg'
        },
      },
      url: `${archiveBase}/7.mp3`,
    },
    {
      title: '비',
      artist: '폴킴',
      duration: 237,
      album: {
        title: '비',
        art: {
          square: '../SouthKMusic/img/songs/8.jpg'
        },
      },
      url: `${archiveBase}/8.mp3`,
    },
    {
      title: '그때 헤어지면 돼',
      artist: '로이킴',
      duration: 238,
      album: {
        title: '그때 헤어지면 돼',
        art: {
          square: '../SouthKMusic/img/songs/9.jpg'
        },
      },
      url: `${archiveBase}/9.mp3`,
    },
    {
      title: 'No Brainer (Feat. Justin Bieber, Chance the Rapper & Quavo',
      artist: 'DJ Khaled',
      duration: 260,
      album: {
        title: 'No Brainer (Feat. Justin Bieber, Chance the Rapper & Quavo',
        art: {
          square: '../SouthKMusic/img/songs/10.jpg'
        },
      },
      url: `${archiveBase}/10.mp3`,
    },
    {
      title: '돌아오지마 (Feat. 용준형 Of 비스트)',
      artist: '헤이즈 (Heize)',
      duration: 217,
      album: {
        title: '돌아오지마',
        art: {
          square: '../SouthKMusic/img/songs/11.jpg'
        },
      },
      url: `${archiveBase}/11.mp3`,
    },
    {
      title: '꽃 길',
      artist: 'BIGBANG',
      duration: 228,
      album: {
        title: '꽃 길',
        art: {
          square: '../SouthKMusic/img/songs/12.jpg'
        },
      },
      url: `${archiveBase}/12.mp3`,
    },
    {
      title: '고맙다',
      artist: '세븐틴',
      duration: 213,
      album: {
        title: 'SEVENTEEN SPECIAL ALBUM `DIRECTOR`S CUT`',
        art: {
          square: '../SouthKMusic/img/songs/13.jpg'
        },
      },
      url: `${archiveBase}/13.mp3`,
    },
    {
      title: '북극성 (Polaris)',
      artist: '뉴이스트 W',
      duration: 241,
      album: {
        title: 'WHO, YOU',
        art: {
          square: '../SouthKMusic/img/songs/14.jpg'
        },
      },
      url: `${archiveBase}/14.mp3`,
    },
    {
      title: 'Hot Summer',
      artist: 'f(x)',
      duration: 223,
      album: {
        title: 'Hot Summer` f(x) 1st Album Repackage',
        art: {
          square: '../SouthKMusic/img/songs/15.jpg'
        },
      },
      url: `${archiveBase}/15.mp3`,
    },
    {
      title: '소나기 (Feat. 10cm)',
      artist: '용준형',
      duration: 205,
      album: {
        title: '소나기 (Feat. 10cm)',
        art: {
          square: '../SouthKMusic/img/songs/16.jpg'
        },
      },
      url: `${archiveBase}/16.mp3`,
    },
    {
      title: '감아 (Feat. Crush)',
      artist: '로꼬',
      duration: 230,
      album: {
        title: '감아',
        art: {
          square: '../SouthKMusic/img/songs/17.jpg'
        },
      },
      url: `${archiveBase}/17.mp3`,
    },
    {
      title: 'MOONWALKER',
      artist: '세븐틴',
      duration: 180,
      album: {
        title: 'SEVENTEEN 5TH MINI ALBUM `YOU MAKE MY DAY`',
        art: {
          square: '../SouthKMusic/img/songs/18.jpg'
        },
      },
      url: `${archiveBase}/18.mp3`,
    },
    {
      title: 'Thunder',
      artist: 'Imagine Dragons',
      duration: 187,
      album: {
        title: 'Evolve',
        art: {
          square: '../SouthKMusic/img/songs/19.jpg'
        },
      },
      url: `${archiveBase}/19.mp3`,
    },
    {
      title: '이 별',
      artist: '길구봉구',
      duration: 237,
      album: {
        title: 'Star',
        art: {
          square: '../SouthKMusic/img/songs/20.jpg'
        },
      },
      url: `${archiveBase}/20.mp3`,
    },
];

/**
 * Based on the class list for a given element toggle the class(es) received.
 * Can accept both string with classes separated by spaces and an array of classes.
 *
 * @param {} element The dom element for which to toggle classes.
 * @param {string|string[]} classes The classes to be toggled on or off.
 */
function toggleClasses(element, classes) {
  const currentClasses = new Set(element.classList);
  // Separate string formatted classes into an array or accept array param
  const newClasses = (typeof classes === 'string' || classes instanceof String) ? classes.split(' ') : classes;

  for (const className of newClasses) {
    if (currentClasses.has(className)) {
      element.classList.remove(className);
    } else {
      element.classList.add(className);
    }
  }
}

/**
 * Toggle a boolean value.
 *
 * @param {boolean} boolean The boolean value to be toggled true or false.
 * @return {boolean} Returns the opposite boolean value to the received.
 */
function toggleBoolean(boolean) {
  return (!boolean);
}

/**
 * Convert seconds into a usable format for time.
 *
 * @param {number|string} seconds The amount of seconds to convert.
 * @return {string} Returns a time formatted string (--:--:--).
 */
function secondsToHms(seconds) {
  const time = {
    hours: String(Math.floor(Number(seconds) / 3600)),
    minutes: String(Math.floor(Number(seconds) % 3600 / 60)),
    seconds: String(Math.floor(Number(seconds) % 3600 % 60)),
  };

  if (time.hours && time.hours < 10) {
    time.hours = `0${time.hours}`;
  }
  if (time.minutes && time.minutes < 10) {
    time.minutes = `0${time.minutes}`;
  }
  if (time.seconds && time.seconds < 10) {
    time.seconds = `0${time.seconds}`;
  }

  if (time.hours !== '00') {
    return `${time.hours}:${time.minutes}:${time.seconds}`;
  } else {
    return `${time.minutes}:${time.seconds}`;
  }
}

/**
 * The base setup for any given audio player.
 */
class Player {
  constructor() {
    this.playing = (new Set(buttons.playPause.classList).has('on'));
    this.shuffle = (new Set(buttons.shuffle.classList).has('on'));
    this.repeat = (new Set(buttons.repeat.classList).has('on'));

    this.songIndex = 0;
    this.previousSong = songList.length - 1;

    this.song = songList[this.songIndex];

    this.randomOrder = new Set();
    this.randomIndex = 0;

    this.volume = 0.8;
  }

  /**
   * Update the meta data for the current song.
   *
   * @param {number} songIndex Optional param to force set the index of the song.
   */
  updateSong(songIndex) {
    this.previousSong = this.songIndex;
    this.songIndex = songIndex || this.songIndex;
    this.song = songList[this.songIndex];
    const song = this.song;

    audio.src = song.url;
    trackingSlider.value = 0;
    this.updateSongRangeValues();
    songLength.innerHTML = secondsToHms(song.duration);
    trackingSlider.max = song.duration;

    document.querySelector(`tr[data-index="${this.previousSong}"]`).classList.remove('playing');
    toggleClasses(document.querySelector(`tr[data-index="${this.songIndex}"]`), 'playing');
    
  }

  /**
   * Play the audio.
   */
  play() {
    audio.play();
  }

  /**
   * Pause the audio.
   */
  pause() {
    audio.pause();
  }

  /**
   * Seek in the audio, update the time based on range value selected.
   */
  seek() {
    audio.currentTime = Number(trackingSlider.value);
    songCurrentTime.innerHTML = secondsToHms(audio.currentTime);
  }

  /**
   * Update the range values based on the current time in the song.
   */
  updateSongRangeValues() {
    const value = (trackingSlider.value / this.song.duration) * 100;
    const buffer = 0;

    songCurrentTime.innerHTML = secondsToHms(trackingSlider.value);

    trackingSlider.style.background = `linear-gradient(to right, ${colors.aqua[50]} 0%, ${colors.aqua[50]} ${value}%, ${colors.metal[50]} ${value}%, ${colors.metal[50]} ${buffer}%, ${colors.metal[80]} ${buffer}%, ${colors.metal[80]} 100%)`;
  }

  /**
   * Adjust the volume.
   */
  adjustVolume() {
    const {value} = volumeSlider;
    const buffer = 0;

    audio.volume = value;

    volumeSlider.style.background = `linear-gradient(to right, ${colors.aqua[80]} 0%, ${colors.aqua[80]} ${value * 100}%, ${colors.metal[50]} ${value * 100}%, ${colors.metal[50]} ${buffer}%, ${colors.metal[80]} ${buffer}%, ${colors.metal[80]} 100%)`;
  }
}

/**
 * The setup for any set of controls for the player.
 */
class Controls extends Player {
  /**
   * Play or pause the current list item.
   */
  playPause() {
    this.playing = toggleBoolean(this.playing);
    toggleClasses(buttons.playPause, 'on icon-play_arrow icon-pause');

    const currentClasses = new Set(buttons.playPause.classList);

    if (currentClasses.has('on')) {
      this.play();
    } else {
      this.pause();
    }
  }

  /**
   * Go to the next item in the list.
   */
  next() {
    this.previousSong = this.songIndex;
    let playNext = true;

    toggleClasses(document.querySelector(`tr[data-index="${this.songIndex}"]`), 'playing');

    if (this.shuffle) {
      this.randomIndex++;

      if (this.randomIndex >= this.randomOrder.size) {
        this.randomIndex = 0;

        playNext = (this.repeat);
      }

      this.songIndex = Array.from(this.randomOrder)[this.randomIndex];
    } else {
      this.songIndex++;

      if (this.songIndex >= songList.length) {
        this.songIndex = 0;

        playNext = (this.repeat);
      }
    }

    this.updateSong();

    if (this.playing) {
      if (playNext) {
        this.play();
      } else {
        this.playPause();
      }
    }
  }

  /**
   * Go to the previous item in the list.
   */
  previous() {
    toggleClasses(document.querySelector(`tr[data-index="${this.songIndex}"]`), 'playing');

    if (this.shuffle) {
      if (this.randomIndex === 0) {
        this.randomIndex = this.randomOrder.size;
      }
      this.randomIndex--;

      this.songIndex = Array.from(this.randomOrder)[this.randomIndex];
    } else {
      if (this.songIndex === 0) {
        this.songIndex = songList.length;
      }
      this.songIndex--;
    }

    this.updateSong();

    if (this.playing) {
      this.play();
    }
  }

  /**
   * Shuffle the list, play in a random order.
   */
  toggleShuffle() {
    this.shuffle = toggleBoolean(this.shuffle);
    toggleClasses(buttons.shuffle, 'on');
    const currentClasses = new Set(buttons.shuffle.classList);

    if (currentClasses.has('on')) {
      this.randomOrder = new Set();
      this.randomIndex = 0;

      let randomIndex = this.songIndex;

      for (let index = 0; index < songList.length; index++) {
        // While loop to ensure that the index being added to the random order is unique, else changes the index value
        while (this.randomOrder.has(randomIndex)) {
          randomIndex = Math.floor(Math.random() * songList.length);
        }

        this.randomOrder.add(randomIndex);
      }
    }
  }

  /**
   * Repeat/loop the list that is currently playing.
   */
  toggleRepeat() {
    this.repeat = toggleBoolean(this.repeat);
    toggleClasses(buttons.repeat, 'on');
  }
}


// Instantiate the controls
const controls = new Controls();

// Add event listeners for the buttons
buttons.playPause.addEventListener('click', () => {
  controls.playPause();
});
buttons.next.addEventListener('click', () => {
  controls.next();
});
buttons.previous.addEventListener('click', () => {
  controls.previous();
});
buttons.shuffle.addEventListener('click', () => {
  controls.toggleShuffle();
});
buttons.repeat.addEventListener('click', () => {
  controls.toggleRepeat();
});


audio.onended = () => {
  // Once a song is over play next song.
  controls.next();
};
audio.ontimeupdate = () => {
  trackingSlider.value = audio.currentTime;
  controls.updateSongRangeValues();
};

// Update the range values on change or moving the scrubber.
trackingSlider.addEventListener('change', () => {
  controls.updateSongRangeValues();
  controls.seek();
});
trackingSlider.addEventListener('mousemove', () => {
  controls.updateSongRangeValues();
});

volumeSlider.addEventListener('change', () => {
  controls.adjustVolume();
});
volumeSlider.addEventListener('mousemove', () => {
  controls.adjustVolume();
});

// That's right ... hotkeys!
document.onkeypress = (event) => {
  switch (event.keyCode) {
    // a - previous
    case 97: {
      controls.previous();
      break;
    }
    // d / n - next
    case 100:
    case 110: {
      controls.next();
      break;
    }
    // s / p - play / pause
    case 115:
    case 112: {
      controls.playPause();
      break;
    }
    // e / r - repeat
    case 101:
    case 114: {
      controls.toggleRepeat();
      break;
    }
    // q - shuffle
    case 113: {
      controls.toggleShuffle();
      break;
    }
  }
};


/**
 * Build the playlist from the give array of songs.
 */
function buildPlaylist() {
  // Add the songs to the dom
  let html = '';
  let i = 0;
  songList.forEach((song, index) => {
      i++;
    html += `
<tr data-index="${index}">
    <td class="play-pause"><img src="${song.album.art.square}"></td>
    <td>${i}</td>
    <td>${song.title}</td>
    <td>${song.artist}</td>
    <td>${song.album.title}</td>
    <td>${secondsToHms(song.duration)}</td>
</tr>
`;
  });
  playlistBody.innerHTML = html;

  // Update the list items
  listItems = document.querySelectorAll('#playlist tbody tr');
  playlistPlay = document.querySelectorAll('#playlist .play-pause');

  // Add event listeners to the list items
  for (const listItem of listItems) {
    listItem.addEventListener('click', (event) => {
      const songIndex = event.target.parentElement.dataset.index;
      controls.updateSong(songIndex);
      document.querySelectorAll('div.top-mid-container')[0].querySelector('div.background').style.backgroundImage="url(../SouthKMusic/img/songs/"+(parseInt(songIndex)+1)+".jpg)";
      // document.querySelectorAll('div.top-mid-container')[0].querySelector('div.background').style.backgroundImage="url(/img/songs/"+(parseInt(songIndex)+1)+".jpg)";
      document.querySelectorAll('div.top-mid-container')[0].querySelector('div#left-side span.coverart img').setAttribute("src","../SouthKMusic/img/songs/"+(parseInt(songIndex)+1)+".jpg");
      if(listItem.getAttribute('data-index') == '7'){
        document.querySelectorAll('div.top-mid-container')[0].querySelector('div#playlist table#playlist').style.color="black";
      }
      else{
        document.querySelectorAll('div.top-mid-container')[0].querySelector('div#playlist table#playlist').style.color="white";

      }
      if (controls.playing) {
        controls.play();
      }
    });

    listItem.addEventListener('dblclick', (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (!controls.playing) {
        controls.playPause();
      }
    });
  }
  
  for (const playlistPlayButton of playlistPlay) {
    playlistPlayButton.addEventListener('click', (event) => {
      if (!controls.playing) {
        controls.playPause();
      }
    });
  }
}

// Initiate the setup.
window.onload = () => {
  buildPlaylist();
  controls.updateSong();
  controls.adjustVolume();
};