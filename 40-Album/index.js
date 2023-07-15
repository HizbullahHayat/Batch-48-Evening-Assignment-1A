function make_album(artist, title, track) {
    var album = {
        artis: artist,
        title: title,
        track: track,
    };
    if (track) {
        album.track = track;
    }
    return album;
}
var album1 = make_album("Artist 1", "Album 1", 58);
var album2 = make_album("Artist 2", "Album 2", 55);
var album3 = make_album("Artist 3", "Album 3", 588);
console.log(album1);
console.log(album2);
console.log(album3);
