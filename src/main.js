export default class Team {
  constructor() {
  }
  iterator = function() {
    const team = [{
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
    let current = 0;
    let last = 2;
    return {
      next() {
        if (current <= last) {
          return {
            value: team[current++],
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