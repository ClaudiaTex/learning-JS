//Create some objects inside an array

let teams = [
  {
    name: "Atletico de Madrid",
    PJ: 35,
    PG: 16,
    PE: 15,
    PP: 4,
    PTS: 63,
    GF: 47,
    GC: 26,
  },
  {
    name: "Real Madrid",
    PJ: 34,
    PG: 23,
    PE: 8,
    PP: 3,
    PTS: 77,
    GF: 62,
    GC: 21,
  },
  {
    name: "Granada",
    PJ: 34,
    PG: 13,
    PE: 8,
    PP: 13,
    PTS: 47,
    GF: 42,
    GC: 40,
  },

  {
    name: "Barcelona",
    PJ: 35,
    PG: 23,
    PE: 7,
    PP: 5,
    PTS: 76,
    GF: 79,
    GC: 36,
  },

  {
    name: "Sevilla",
    PJ: 34,
    PG: 16,
    PE: 12,
    PP: 6,
    PTS: 60,
    GF: 49,
    GC: 33,
  },
  {
    name: "Villareal",
    PJ: 35,
    PG: 17,
    PE: 6,
    PP: 12,
    PTS: 57,
    GF: 57,
    GC: 45,
  },
  {
    name: "Real Sociedad",
    PJ: 34,
    PG: 15,
    PE: 6,
    PP: 13,
    PTS: 51,
    GF: 51,
    GC: 43,
  },
  {
    name: "Getafe",
    PJ: 35,
    PG: 14,
    PE: 11,
    PP: 10,
    PTS: 53,
    GF: 43,
    GC: 34,
  },
  {
    name: "Valencia",
    PJ: 35,
    PG: 13,
    PE: 11,
    PP: 11,
    PTS: 50,
    GF: 45,
    GC: 51,
  },
  {
    name: "Athletic de Bilbao",
    PJ: 34,
    PG: 12,
    PE: 12,
    PP: 10,
    PTS: 48,
    GF: 38,
    GC: 29,
  },
];

console.warn("Teams Array");
console.log(teams);

/*-----Finding names by position----*/

console.warn("I am in position 7");
console.log(teams[7].name); // this will display the name of the object at a specific position (remember positions start at 0)
console.log(teams.indexOf(getafe));
