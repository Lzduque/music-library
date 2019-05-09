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

////////////////////////////// OBJ DEFINITION //////////////////////////////

function Library(name, creator) {
  this.name = name,
  this.creator = creator,
  this.playlists = [],
  this.addPlaylist = addPlaylist
}

function Playlist(name) {
  this.name = name,
  this.tracks = [],
  this.addTrack = addTrack,
  this.overallRating = overallRating,
  this.totalDuration = totalDuration
}

function Track(title, rating, length) {
  this.title = title,
  this.rating = rating,
  this.length = length
}

////////////////////////////// CREATING //////////////////////////////

let myLibrary = new Library('My Library', 'Leticia');
console.log('myLibrary: ',myLibrary);

let myPlaylist = new Playlist('My Playlist');
console.log('myPlaylist: ',myPlaylist);

let newTrack = new Track('I shot the sheriff', 5, 210);
console.log('newTrack: ',newTrack);

let newTrack1 = new Track('I Hate You Then I Love You', 4, 180);
console.log('newTrack1: ',newTrack1);


myPlaylist.tracks.push(newTrack);
console.log('myPlaylist: ',myPlaylist);
console.log('myPlaylist.tracks: ',myPlaylist.tracks);

myPlaylist.tracks.push(newTrack1);
console.log('myPlaylist: ',myPlaylist);
console.log('myPlaylist.tracks: ',myPlaylist.tracks);

myLibrary.playlists.push(myPlaylist);
// myLibrary.addPlaylist(myPlaylist);
console.log('myLibrary: ',myLibrary);
console.log('myLibrary.playlists: ',myLibrary.playlists);
console.log('myLibrary.myPlaylist.tracks: ',myLibrary.myPlaylist.tracks);

////////////////////////////// FUNCTIONS //////////////////////////////

function addPlaylist(name) {
  this.playlists.push(Playlist);
}

function overallRating() {
  let ratingArray = [];

  this.playlists.tracks.forEach(track => {
    ratingArray.push(track.rating);
  });

  let overallRating = ratingArray.reduce((previous, current) => current += previous);

  overallRating = overallRating/ratingArray.length;
  this.playlists.overallRating = overallRating;
  return overallRating;
}

function totalDuration() {
  let durationArray = [];

  this.playlist.tracks.forEach(track => {
  durationArray.push(track.length);
  });

  let totalDuration = durationArray.reduce((previous, current) => current += previous);

  Library.playlist.totalDuration = totalDuration;
  return totalDuration;
}

function addTrack(title, rating, length) {
  this.playlist.tracks.push(Track)
}

////////////////////////////// DATA //////////////////////////////


// These are the only things required in order to create a music library
// A Library has many playlists (starts as an empty array)

// Playlist objects can be added to an instance of a library

// function addPlaylist(name) {
//   Library.playlist.push({ name , tracks: [] })
// }

// Each Playlist has a name which is required upon creation
// A Playlist also has many tracks

// function addTrack(title, rating, length) {
//   Library.playlist.tracks.push({ title , rating, length })
// }

// A Track has a title, a rating (an integer from 1 to 5) and a length (integer in seconds) all of which are required when creating a new track

// Each Playlist also has an overallRating function which will calculate the rating by averaging the rating of its tracks

// function overallRating() {
//   let ratingArray = [];

//   Library.playlist.tracks.forEach(track => {
//     ratingArray.push(track.rating);
//   });

//   let overallRating = ratingArray.reduce((previous, current) => current += previous);

//   overallRating = overallRating/ratingArray.length;
//   Library.playlist.overallRating = overallRating;
// }

// Each Playlist also has a totalDuration function which will sum the duration of all of its tracks

// function totalDuration() {
//   let durationArray = [];

//   Library.playlist.tracks.forEach(track => {
//     durationArray.push(track.length);
//   });

//   let totalDuration = durationArray.reduce((previous, current) => current += previous);

//   Library.playlist.totalDuration = totalDuration;
// }
