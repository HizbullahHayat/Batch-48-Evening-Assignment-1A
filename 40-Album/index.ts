function make_album(artist: string ,title:string , track:number){
    const album = {
        artis:artist,
        title : title,
        track,
    }
    if(track){
        album.track = track;
    }
    return album;
}

const album1 = make_album("Artist 1", "Album 1", 58);
const album2 = make_album("Artist 2", "Album 2", 55);
const album3 = make_album("Artist 3", "Album 3", 588);

console.log(album1);
console.log(album2);
console.log(album3);