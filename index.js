// structure:
// let = Library { name: name,
//                 creator: creator,
//                 playlists: [ { name: name,
//                                 tracks: [
//                                   { title: title,
//                                   rating: rating,
//                                   length: length
//                                   },
//                                   { title: title,
//                                     rating: rating,
//                                     length: length
//                                     }
//                                 ],
//                                 rating: 0,
//                                 totalDuration: 0
//                               },
//                               { name: name,
//                                 tracks: [
//                                   { title: title,
//                                     rating: rating,
//                                     length: length
//                                     },
//                                     { title: title,
//                                       rating: rating,
//                                       length: length
//                                     }
//                                 ],
//                                 rating: 0,
//                                 totalDuration: 0
//                               }],
// }

// A Library has a name and a creator (both strings)

// function Library(name, creator) {
//   name: name,
//   creator: creator,
//   playlists: [],
//   addPlaylist: function(name) {
//     this.playlist.push({ name ,
//                         tracks: [],
//                         addTrack: function(title, rating, length) {
//                                                     this.playlist.tracks.push({ title , rating, length })
//                         },
//                         overallRating: function() {
//                                                     let ratingArray = [];

//                                                     this.playlist.tracks.forEach(track => {
//                                                       ratingArray.push(track.rating);
//                                                     });

//                                                     let overallRating = ratingArray.reduce((previous, current) => current += previous);

//                                                     overallRating = overallRating/ratingArray.length;
//                                                     this.playlist.overallRating = overallRating;
//                                                   },
//                         totalDuration: function() {
//                                                     let durationArray = [];

//                                                     this.playlist.tracks.forEach(track => {
//                                                       durationArray.push(track.length);
//                                                     });

//                                                     let totalDuration = durationArray.reduce((previous, current) => current += previous);

//                                                     Library.playlist.totalDuration = totalDuration;
//                                                   }
//     })
//   }
// }

////////////////////////////// OBJ DEFINITION & FUNCTIONS //////////////////////////////

function Library(name, creator) {
  this.name = name,
  this.creator = creator,
  this.playlists = []
  // this.addPlaylist = addPlaylist
}

Library.prototype.addPlaylist = function addPlaylist(Playlist) {
  this.playlists.push(Playlist);
};

function Playlist(name) {
  this.name = name,
  this.tracks = []
  // this.addTrack = addTrack,
  // this.overallRating = overallRating,
  // this.totalDuration = totalDuration
}

Playlist.prototype.addTrack = function addTrack(Track) {

  //if the rating (an integer from 1 to 5)
  // if (this.tracks.rating > 5 || this.tracks.rating < 1) return;

  this.tracks.push(Track);
};

Playlist.prototype.overallRating = function overallRating() {
  //if there is no track.length
  if (!this.tracks.length) return 0;

  let ratingArray = [];

  for (let track of this.tracks) {
    ratingArray.push(track.rating);
  };

  let overallRating = ratingArray.reduce((previous, current) => current += previous);

  return Number(overallRating/ratingArray.length);
};

Playlist.prototype.totalDuration = function totalDuration() {
  let durationArray = [];

  for (let track of this.tracks) {
    durationArray.push(track.length);
  };

  console.log('durationArray: ',durationArray);

  let totalDuration = durationArray.reduce((previous, current) => current += previous);

  // Library.playlist.totalDuration = totalDuration;
  return totalDuration;
};

function Track(title, rating, length) {
  this.title = title,
  this.rating = rating,
  this.length = length
}

////////////////////////////// CREATING/TESTS //////////////////////////////

let myLibrary = new Library('My Library', 'Leticia');
// console.log('myLibrary: ',myLibrary);

let myPlaylist = new Playlist('My Playlist');
// console.log('myPlaylist: ',myPlaylist);

let newTrack = new Track('I shot the sheriff', 5, 210);
// console.log('newTrack: ',newTrack);

let newTrack1 = new Track('I Hate You Then I Love You', 4, 180);
// console.log('newTrack1: ',newTrack1);

let newTrack2 = new Track('Beautiful Day', 5, 248);
// console.log('newTrack2: ',newTrack2);

myPlaylist.addTrack(newTrack);
myPlaylist.addTrack(newTrack1);
myPlaylist.addTrack(newTrack2);

myLibrary.addPlaylist(myPlaylist);

// console.log('myPlaylist: ',myPlaylist)

// console.log('totalDuration:',myPlaylist.totalDuration())
// console.log('overallRating:',myPlaylist.overallRating())

