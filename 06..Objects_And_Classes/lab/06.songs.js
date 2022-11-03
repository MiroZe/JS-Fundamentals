function songs(input) {
    let numberOfSongs = Number(input.shift());

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }

    }

    let songsArray = [];
    let typeSong = input.pop();

    for (let i = 0; i < input.length; i++) {
        let [type, name, time] = input[i].split('_');
        let song = new Song(type, name, time);
        songsArray.push(song)
    }
    if (typeSong === 'all') {
        songsArray.forEach(el => console.log(el.name))
    } else {
        let filtered = songsArray.filter(el => el.type === typeSong);
        filtered.forEach(el => console.log(el.name))
    }

}
songs(
    [2,
        'like_Replay_3:15',
        'ban_Photoshop_3:48',
        'all']
        
    
)