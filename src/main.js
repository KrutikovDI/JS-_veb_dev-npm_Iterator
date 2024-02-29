export default class Team {
  constructor() {
    this.players = [{
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10
    },
    {
      name: 'Gamen',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
    {
      name: 'Gamen',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    }]
  }

  iterator = function() {
    let current = 0;
    let last = this.players.length;
    return {
      next() {
        if (current <= last) {
          return {
            value: this.players[current++],
            done: false
          }
        }
        return {
          done: true
        }
      }
    }
  }
}