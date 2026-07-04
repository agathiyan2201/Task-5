// YouTube Playlist (Generator Function)

function* youtubePlaylist() {
    yield "Video 1";
    yield "Video 2";
    yield "Video 3";
    yield "Video 4";
    return "Playlist Completed";
}

const playlist = youtubePlaylist();

console.log(playlist.next().value);
console.log(playlist.next().value);
console.log(playlist.next().value);
console.log(playlist.next().value);
console.log(playlist.next().value);