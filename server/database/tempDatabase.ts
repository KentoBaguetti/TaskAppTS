const db = {
  users: {
    messi: {
      name: "Lionel Messi",
      nationality: "Argentina",
      number: 10,
      goldenBalls: 8,
    },
    cr7: {
      name: "Cristiano Ronaldo",
      nationality: "Portugal",
      number: 7,
      goldenBalls: 5,
    },
    honda: {
      name: "Keisuke Honda",
      nationality: "Japan",
      number: 4,
      goldenBalls: 0,
    },
  },
  leagues: {
    spain: {
      name: "LaLiga",
    },
    england: {
      name: "English Premiere League",
    },
    germany: {
      name: "Bundesliga",
    },
    saudi: {
      name: "Saudi Pro League",
    },
  },
};

const getUsers = (): object => {
  return db.users;
};

console.log(getUsers());
