function movies(input) {


    let movieList = [];

    for (const line of input) {
        if (line.includes('addMovie')) {
            let currentLine = line.split('addMovie ');
            let movie = currentLine[1];
            movieList.push({ name: movie })
        } else if (line.includes('directedBy')) {
            [movieName, directorName] = line.split(' directedBy ');
            let movie = movieList.find(el => el.name === movieName);
            if (movie) {
                movie.director = directorName
            }

        } else if (line.includes('onDate')) {
            [movieName, date] = line.split(' onDate ');
            let movie = movieList.find(el => el.name === movieName)
            if (movie) {
                movie.date = date;
            }
        }


    }
    movieList.forEach(element => {
        if (element.name && element.director && element.date) {
            console.log(JSON.stringify(element));
        }

    })
}
movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]

)