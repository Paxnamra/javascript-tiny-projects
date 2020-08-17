let team = {
    _players: [
        {
            firstName: 'Ash',
            lastName: 'Ketchum',
            age: 15
        },
        {
            firstName: 'Teddy',
            lastName: 'TheBear',
            age: 10
        },
        {
            firstName: 'Sal',
            lastName: 'Firestarter',
            age: 20
        }
    ],
    _games: [
        {
            opponent: 'Pegasus',
            teamPoints: 30,
            opponentPoints: 15
        },
        {
            opponent: 'Sacramento',
            teamPoints: 19,
            opponentPoints: 23
        },
        {
            opponent: 'Thor',
            teamPoints: 42,
            opponentPoints: 39
        },
    ],
    get players() {
        return this._players;
    },

    get games() {
        return this._games;
    },

    addPlayer(firstName, lastName, age) {
        const newPlayer = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        return this._players.push(newPlayer);
    }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);
