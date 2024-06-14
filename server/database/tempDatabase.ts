interface User {
  name: string;
  nationality: string;
  number: number;
  goldenBalls: number;
}

interface League {
  name: String;
}

interface Task {
  header: string;
  author: string;
  body: string;
}

interface DB {
  users: {
    [key: string]: User;
  };
  leagues: {
    [key: string]: League;
  };
  tasks: {
    [key: string]: Task;
  };
}

const db: DB = {
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
  tasks: {
    0: {
      header: "task1",
      author: "messi",
      body: "Wonderful wonderful wonderful, just how good is he",
    },
    1: {
      header: "task2",
      author: "cr7",
      body: "Medeira, Manchester, Madrid, Turin, and Manchester again. Vintage Cristiano.",
    },
  },
};

const getUsers = (): object => {
  return db.users;
};

const getUser = (username: string): User | null => {
  const users = db.users;

  if (username in users) {
    return users[username];
  } else {
    return null;
  }
};

const getLeagues = (): object => {
  return db.leagues;
};

const getTasks = (): object => {
  return db.tasks;
};

export { getUsers, getUser, getLeagues, getTasks };
