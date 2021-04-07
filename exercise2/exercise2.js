/*------EXERCISE 2 (SOLUTION)———*/

let movies = [
    {
        "popularity": 176.614,
        "vote_count": 3845,
        "video": false,
        "poster_path": "/kK6Oq4JywUNXmJ299efUkv1h6Mn.jpg",
        "id": 419704,
        "adult": false,
        "backdrop_path": "/t4z8OlOEzH7J1JRFUN3rcm6XHNL.jpg",
        "original_language": "en",
        "original_title": "Ad Astra",
        "genre_ids": [
            18,
            878
        ],
        "title": "Ad astra",
        "vote_average": 6.1,
        "overview": "The near future, a time when both hope and adversity drive humanity to look up at the stars and beyond. As a mysterious phenomenon threatens to destroy life on planet Earth, astronaut Roy McBride sets out on a mission through the vastness of space and its many dangers to discover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
        "release_date": "2019-09-17"
    },
    {
        "popularity": 138.944,
        "vote_count": 255,
        "video": false,
        "poster_path": "/7Wi7rpl9Ge1fxwArw9dP2BgkUi7.jpg",
        "id": 531454,
        "adult": false,
        "backdrop_path": "/jMO1icztaUUEUApdAQx0cZOt7b8.jpg",
        "original_language": "en",
        "original_title": "Eurovision Song Contest: The Story of Fire Saga",
        "genre_ids": [
            35,
            10402
        ],
        "title": "Eurovision Song Contest: The Story of Fire Saga",
        "vote_average": 6.6,
        "overview": "Two singers fight to become pop stars in a major music contest, where pressure, rivals and other mishaps put their relationship to the test.",
        "release_date": "2020-06-26"
    },
    {
        "popularity": 143.114,
        "vote_count": 44,
        "video": false,
        "poster_path": "/zmxCLftLPw7NqjiA0Eu9c8ubP2v.jpg",
        "id": 556574,
        "adult": false,
        "backdrop_path": "/uWVkEo9PWHu9algZsiLPi6sRU64.jpg",
        "original_language": "en",
        "original_title": "Hamilton",
        "genre_ids": [
            10402,
            36,
            18
        ],
        "title": "Hamilton",
        "vote_average": 8.5,
        "overview": "The story revolves around the founding fathers of the United States, such as George Washington and Thomas Jefferson, and the experiences of Alexander Hamilton throughout his life, in which he rubbed shoulders with historical figures such as Aaron Burr and John Laurens. Through this musical in the key of hip hop, you can see how Hamilton was an orphan in the Caribbean, an immigrant in New York who managed to gain a foothold in George Washington's personal army, being chosen by the president as Secretary of the Treasury of the United States, and to become one of the fathers of American economic policy.",
        "release_date": "2020-07-03"
    },
    {
        "popularity": 107.457,
        "vote_count": 548,
        "video": false,
        "poster_path": "/juE7o699roXnxCi8shR10Cf2dCH.jpg",
        "id": 475430,
        "adult": false,
        "backdrop_path": "/o0F8xAt8YuEm5mEZviX5pEFC12y.jpg",
        "original_language": "en",
        "original_title": "Artemis Fowl",
        "genre_ids": [
            12,
            14,
            878,
            10751
        ],
        "title": "Artemis Fowl",
        "vote_average": 5.9,
        "overview": "The story of 'Artemis Fowl' is that of a 12-year-old boy who is about to seize power from the underworld. What he still does not know is that its inhabitants: fairies, goblins, elves ... are not the wonderful creatures we have always imagined and they will not allow a human to know their most sacred secrets. Like him, they are armed to the beard and know the latest technologies: a frenetic duel is being prepared that can provoke a real war between the planet's species.",
        "release_date": "2020-06-12"
    },
    {
        "popularity": 161.547,
        "vote_count": 2072,
        "video": false,
        "poster_path": "/uqbUVPwl7lUGPti2HnjT5n9gfq2.jpg",
        "id": 6795,
        "adult": false,
        "backdrop_path": "/2DKpjWI0j6eRhF3lPUE4lc7wqP0.jpg",
        "original_language": "en",
        "original_title": "Zathura: A Space Adventure",
        "genre_ids": [
            12,
            35,
            14,
            878,
            10751
        ],
        "title": "Zathura: A Space Adventure",
        "vote_average": 6.3,
        "overview": "When their father goes to work and they are left in the care of their older sister, Danny, six, and Walter, ten, they either quarrel or they get bored. During a fight, Danny hides in a small forklift, and Walter leads him down to the dark and dreaded basement. There he discovers the old metal board of a board game called â € œZathuraâ €; After unsuccessfully trying to get his brother to play with him, Danny begins to play alone. From the very first play, Danny realizes that this is not a normal board game. The spaceship token moves on its own and, when it lands in a space, it ejects a card that reads: â € œMeteor Shower, Evasive Tacticsâ €; immediately, hot, molten meteorites begin to fall on the house. When Danny and Walter look through the large hole in the ceiling, they discover to their horror that they have been thrown into outer space.",
        "release_date": "2005-11-06"
    },
    {
        "popularity": 84.03,
        "vote_count": 46,
        "video": false,
        "poster_path": "/ucktgbaMSaETUDLUBp1ubGD6aNj.jpg",
        "id": 619592,
        "adult": false,
        "backdrop_path": "/jAtO4ci8Tr5jDmg33XF3OZ8VPah.jpg",
        "original_language": "en",
        "original_title": "Force of Nature",
        "genre_ids": [
            28,
            18
        ],
        "title": "Force of Nature",
        "vote_average": 5.3,
        "overview": "A gang of robbers plans a heist during a hurricane and runs into trouble when a disgraced police officer tries to force everyone in the building to evacuate.",
        "release_date": "2020-07-02"
    },
    {
        "popularity": 91.772,
        "vote_count": 13538,
        "video": false,
        "poster_path": "/v0eQLbzT6sWelfApuYsEkYpzufl.jpg",
        "id": 475557,
        "adult": false,
        "backdrop_path": "/f5F4cRhQdUbyVbB5lTNCwUzD6BP.jpg",
        "original_language": "en",
        "original_title": "Joker",
        "genre_ids": [
            80,
            18,
            53
        ],
        "title": "Joker",
        "vote_average": 8.2,
        "overview": "Arthur Fleck is a man ignored by society, whose motivation in life is to make people laugh. But a series of tragic events will lead him to see the world differently. Film based on Joker, the popular DC Comics character and Batman arch villain, but which in this film takes on a more realistic and dark look.",
        "release_date": "2019-10-02"
    },
    {
        "popularity": 121.657,
        "vote_count": 1830,
        "video": false,
        "poster_path": "/bTL9PlNlcX8kZZNLym80zpWucU4.jpg",
        "id": 8619,
        "adult": false,
        "backdrop_path": "/m11Mej9vbQqcXWgYrgPboCJ9NUh.jpg",
        "original_language": "en",
        "original_title": "Master and Commander: The Far Side of the World",
        "genre_ids": [
            12,
            18,
            10752
        ],
        "title": "Master and Commander: The Far Side of the World",
        "vote_average": 7.1,
        "overview": "1805. Napoleon dominates Europe. Only England can resist him. These are times of Napoleonic wars, and now the seas and oceans have become a crucial and strategic battlefield. In the Atlantic Ocean the English warship Surprise, captained by \"Lucky\" Jack Aubrey (Crowe), is suddenly attacked by an enemy warship far superior to him. Aubrey then makes a memorable decision: despite the serious damage suffered by the Surprise and its faithful crew, including surgeon Stephen Maturin (Bettany), he decides to sail, taking serious risks, through two seas to intercept and capture your enemy. It is a mission that can determine the destiny of a nation or destroy the captain and his crew, facing a much better armed and relentless privateer, in a chase across the seas that takes him to the other side of the world.",
        "release_date": "2003-11-14"
    },
    {
        "popularity": 120.254,
        "vote_count": 2661,
        "video": false,
        "poster_path": "/hAy2yUav8QPnDzfOGihNI527NjY.jpg",
        "id": 72545,
        "adult": false,
        "backdrop_path": "/9f33P2UvXw8HnLNB3cHdzI64Xpq.jpg",
        "original_language": "en",
        "original_title": "Journey 2: The Mysterious Island",
        "genre_ids": [
            28,
            12,
            878
        ],
        "title": "Journey 2: The Mysterious Island",
        "vote_average": 6,
        "overview": "Sean (Hutcherson) receives a distress call from a mysterious island, which does not appear on the maps. It is a place with strange ways of life. Sean will undertake the search accompanied by his stepfather (Johnson), a helicopter pilot (Guzman) and his beautiful and temperamental daughter (Hudgens). Sequel to \"The Journey 3D \".",
        "release_date": "2012-01-19"
    },
    {
        "popularity": 77.985,
        "vote_count": 4918,
        "video": false,
        "poster_path": "/jYbANSoj6qGTbDkstq9J5Vy8fRF.jpg",
        "id": 454626,
        "adult": false,
        "backdrop_path": "/stmYfCUGd8Iy6kAMBr6AmWqx8Bq.jpg",
        "original_language": "en",
        "original_title": "Sonic the Hedgehog",
        "genre_ids": [
            28,
            35,
            878,
            10751
        ],
        "title": "Sonic the Hedgehog",
        "vote_average": 7.5,
        "overview": "Sonic, the cheeky blue hedgehog based on the famous Sega video game series, will experience adventures and misadventures when he meets his human friend and policeman, Tom Wachowski (James Marsden). Sonic and Tom will join forces to try to stop the plans of the evil Dr. Robotnik (Jim Carrey), who tries to trap Sonic in order to use his immense powers to take over the world.",
        "release_date": "2020-02-12"
    },
    {
        "popularity": 79.479,
        "vote_count": 8232,
        "video": false,
        "poster_path": "/4N55tgxDW0RRATyrZHbx0q9HUKv.jpg",
        "id": 496243,
        "adult": false,
        "backdrop_path": "/ApiBzeaa95TNYliSbQ8pJv4Fje7.jpg",
        "original_language": "ko",
        "original_title": "Parasites",
        "genre_ids": [
            35,
            18,
            53
        ],
        "title": "Parasitos",
        "vote_average": 8.5,
        "overview": "Both Gi Taek and his family are out of work. When their eldest son, Gi Woo, begins private tutoring at Parkâ € ™ s house, the two families, who have much in common despite belonging to two totally different worlds, begin an interplay of unpredictable results.",
        "release_date": "2019-05-30"
    },
    {
        "popularity": 73.073,
        "vote_count": 5129,
        "video": false,
        "poster_path": "/16G2wZAkmKqSGK3it2VPjco5oyn.jpg",
        "id": 181812,
        "adult": false,
        "backdrop_path": "/SPkEiZGxq5aHWQ2Zw7AITwSEo2.jpg",
        "original_language": "en",
        "original_title": "Star Wars: The Rise of Skywalker",
        "genre_ids": [
            28,
            12,
            878
        ],
        "title": "Star Wars: The Rise of Skywalker",
        "vote_average": 6.6,
        "overview": "The surviving Resistance face the First Order once again as Rey, Finn and Poe Dameron's journey continues. With the power and knowledge of the generations behind them, the final battle begins.",
        "release_date": "2019-12-18"
    },
    {
        "popularity": 75.055,
        "vote_count": 4807,
        "video": false,
        "poster_path": "/1wLqXiiiaTSK8Y0n7N85O0jaNJm.jpg",
        "id": 495764,
        "adult": false,
        "backdrop_path": "/9xNOiv6DZZjH7ABoUUDP0ZynouU.jpg",
        "original_language": "en",
        "original_title": "Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)",
        "genre_ids": [
            28,
            35,
            80,
            18
        ],
        "title": "Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)",
        "vote_average": 7.2,
        "overview": "After parting ways with the Joker, Harley Quinn and three other heroines (Black Canary, Huntress and René e Montoya) join forces to save a girl (Cassandra Cain) from the evil king of crime, Black Mask.",
        "release_date": "2020-02-05"
    },
    {
        "popularity": 74.711,
        "vote_count": 14,
        "video": false,
        "poster_path": "/qLM1mMby4jTdsQm8ImCRMY0BXLz.jpg",
        "id": 706510,
        "adult": false,
        "backdrop_path": "/k8H6Qp4uJ9WHArPQwDqCaW9g3Sj.jpg",
        "original_language": "en",
        "original_title": "Desperados",
        "genre_ids": [
            35,
            10749
        ],
        "title": "Desperados",
        "vote_average": 6.3,
        "overview": "In a panic, a girl travels to Mexico with her friends, who reluctantly accompany her, to embark on a strange mission: to delete an email full of atrocities that she sent to her new boyfriend.",
        "release_date": "2020-07-03"
    },
    {
        "popularity": 73.552,
        "vote_count": 17347,
        "video": false,
        "poster_path": "/7xXJ15VEf7G9GdAuV1dO769yC73.jpg",
        "id": 671,
        "adult": false,
        "backdrop_path": "/hziiv14OpD73u9gAak4XDDfBKa2.jpg",
        "original_language": "en",
        "original_title": "Harry Potter and the Philosopher's Stone",
        "genre_ids": [
            12,
            14,
            10751
        ],
        "title": "Harry Potter and the Philosopher's Stone",
        "vote_average": 7.9,
        "overview": "Harry Potter is an orphan who lives with his nasty uncles, the Dursleys, and their obnoxious cousin Dudley. His eleventh birthday is approaching and he has little hope of receiving a gift, as no one ever remembers him. However, just days before his birthday, a series of mysterious letters addressed to him and written in strident green ink breaks the monotony of his life: Harry is a wizard and his parents were too.",
        "release_date": "2001-11-16"
    },
    {
        "popularity": 57.041,
        "vote_count": 95,
        "video": false,
        "poster_path": "/ly1zIjlj1MuV7zHJ9NaPu0Xp2rR.jpg",
        "id": 694234,
        "adult": false,
        "backdrop_path": "/aVtQ8vo9yyS0MoQN3zzEVmUCIWM.jpg",
        "original_language": "it",
        "original_title": "Sotto il sole di Riccione",
        "genre_ids": [
            35,
            10749
        ],
        "title": "Under The Sun Of Riccione",
        "vote_average": 6.4,
        "overview": "A group of teenagers, on vacation on the lively beaches of Riccione, become friends as they face the vicissitudes of relationships and love.",
        "release_date": "2020-07-01"
    },
    {
        "popularity": 74.428,
        "vote_count": 2314,
        "video": false,
        "poster_path": "/xk4RpcvVQ7JmnrkQtZ479EwWieT.jpg",
        "id": 570670,
        "adult": false,
        "backdrop_path": "/uZMZyvarQuXLRqf3xdpdMqzdtjb.jpg",
        "original_language": "en",
        "original_title": "The Invisible Man",
        "genre_ids": [
            27,
            878,
            53
        ],
        "title": "The Invisible Man",
        "vote_average": 7.2,
        "overview": "Cecilia (Elisabeth Moss) rebuilds her life after receiving the news that her ex-boyfriend, a inveterate abuser, has passed away. However, his sanity begins to falter when he begins to be certain that he is actually still alive.",
        "release_date": "2020-02-26"
    },
    {
        "popularity": 98.515,
        "vote_count": 11,
        "video": false,
        "poster_path": "/goEW6QqoFxNI2pfbpVqmXj2WXwd.jpg",
        "id": 531876,
        "adult": false,
        "backdrop_path": "/n1RohH2VoK1CdVI2fXvcP19dSlm.jpg",
        "original_language": "en",
        "original_title": "The Outpost",
        "genre_ids": [
            28,
            18,
            36,
            10752
        ],
        "title": "The Outpost",
        "vote_average": 3.9,
        "overview": "",
        "release_date": "2020-06-24"
    },
    {
        "popularity": 75.322,
        "vote_count": 18763,
        "video": false,
        "poster_path": "/ksBQ4oHQDdJwND8H90ay8CbMihU.jpg",
        "id": 299536,
        "adult": false,
        "backdrop_path": "/lmZFxXgJE3vgrciwuDib0N8CfQo.jpg",
        "original_language": "en",
        "original_title": "Avengers: Infinity War",
        "genre_ids": [
            28,
            12,
            878
        ],
        "title": "Avengers: Infinity War",
        "vote_average": 8.3,
        "overview": "The almighty Thanos has awakened with the promise of destroying everything in his path, wearing the Infinity Gauntlet, which gives him incalculable power. The only ones capable of stopping him are the Avengers and the rest of the superheroes in the galaxy, who must be willing to sacrifice everything for the greater good. Captain America and Ironman will have to iron out their differences, Black Panther will support with his troops from Wakanda, Thor and the Guardians of the Galaxy and even Spider-Man will unite before the plans of devastation and ruin put an end to the universe. Will they be able to stop the titan of chaos?",
        "release_date": "2018-04-25"
    },
    {
        "popularity": 59.525,
        "vote_count": 6320,
        "video": false,
        "poster_path": "/trnyoKkkvvjZvRvCMrNDtSf25nH.jpg",
        "id": 420817,
        "adult": false,
        "backdrop_path": "/v4yVTbbl8dE1UP2dWu5CLyaXOku.jpg",
        "original_language": "en",
        "original_title": "Aladdin",
        "genre_ids": [
            12,
            35,
            14,
            10749,
            10751
        ],
        "title": "Aladdi­n",
        "vote_average": 7.1,
        "overview": "Aladdin is an adorable but unfortunate petty thief in love with the Sultan's daughter, Princess Jasmine. To try to conquer her, he accepts Jafar's challenge, which consists of entering a cave in the middle of the desert to find a magic lamp that will grant him all his wishes. This is where Aladdin will meet the Genie, starting an adventure like never before imagined.",
        "release_date": "2019-05-22"
    }

];

console.warn('Movies Array');
console.log(movies);

//STEP 1: Create an array that returns the movie titles.

let movieTitles = movies.map(movie => movie.title);

console.warn('Movie titles array');
console.log(movieTitles);

//STEP 2: Create an array of movies whose popularity is greater than 100.000

let popularityMovies = movies.filter(movie => movie.popularity > 100.000)

console.warn('Popularity > 100.000');
console.log(popularityMovies);

// STEP 3: Create an array that returns the first movie with a vote value greater than 8

let voteAverageMovie = movies.find(movie => movie.vote_average > 8)

console.warn('vote average > 8');
console.log(voteAverageMovie);

// STEP 4: Create an array with the movie with the highest number of votes (comparative)

let moreVotes = movies.reduce((accumulator, movie)=>{
    if(accumulator < movie.vote_count){
      return accumulator = movie.vote_count; 
    } else {
      return accumulator;
    }
},0); 

console.warn('highest number of votes');
console.log(moreVotes);

let mostVotedMovie = movies.find(movie => movie.vote_count === moreVotes)

console.warn('Movie with highest number of votes');
console.log(mostVotedMovie);