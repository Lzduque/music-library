/*
!- A Library has a name and a creator (both strings). These are the only things required in order to create a music library
!- A Library has many playlists (starts as an empty array)
!- Playlist objects can be added to an instance of a library
!- Each Playlist has a name which is required upon creation
!- A Playlist also has many tracks
!- A Track has a title, a rating (an integer from 1 to 5) and a length (integer in seconds) all of which are required when creating a new track
!- Each Playlist also has an overallRating function which will calculate the rating by averaging the rating of its tracks
!- Each Playlist also has a totalDuration function which will sum the duration of all of its tracks
*/


//------ LIBRARY -------
let library = function(name, creator) {
  this.name = name,
  this.creator = creator,
  this.playlists = []
}

library.prototype.addPlaylist = function addPlaylist(playlist) {
  this.playlists.push(playlist);
}

//------ PLAYLIST -------
let playlist = function(name) {
  this.name = name,
  this.tracks = []
}

playlist.prototype.addTrack = function addTrack(track) {
  this.tracks.push(track);
}

playlist.prototype.overallRating = function overallRating() {
  if(!this.tracks.length) return 0;

  let rating = 0;
  for(let track of this.tracks) {
    rating += track.rating;
  }
  return rating / this.tracks.length
}

playlist.prototype.totalDuration = function totalDuration() {
  if(!this.tracks.length) return 0;

  let totalLength = 0;
  for(let track of this.tracks) {
    totalLength += track.length;
  }
  return totalLength
}

//------ TRACK -------
let track = function(title, rating, length) {
  this.title = title,
  this.rating = rating,
  this.length = length
}


//------ Testing -------
let library1 = new library("itunes", "anael")
console.log(library1)


let track1 = new track("chocolate rain", 2, 120)
let track2 = new track("purple rain", 1, 120)
let track3 = new track("sweet jesus", 2, 120)
let track4 = new track("daft punker", 3, 120)


let playlist1 = new playlist("cool songs 1")
playlist1.addTrack(track1)
playlist1.addTrack(track2)
playlist1.addTrack(track3)
playlist1.addTrack(track4)

console.log(playlist1)

console.log('totalDuration:',playlist1.totalDuration())
console.log('overallRating:',playlist1.overallRating())

