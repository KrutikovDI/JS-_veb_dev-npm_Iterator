import Team from './main'

test('проверяем работу метода iterator на вызов первого игрока', () => {
  const team = new Team()
  const player = team.iterator()
  const correct = {
    value: {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10
    },
    done: false
  }
  expect(player.next()).toEqual(correct)
})

test('проверяем работу метода iterator на вызов второго игрока', () => {
  const team = new Team()
  const player = team.iterator()
  player.next()
  const correct = {
    value: {
      name: 'Gamen',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40
    },
    done: false
  }
  expect(player.next()).toEqual(correct)
})

test('проверяем работу метода iterator на окончание итерации', () => {
  const team = new Team()
  const player = team.iterator()
  player.next()
  player.next()
  player.next()
  const correct = {
    done: true
  }
  expect(player.next()).toEqual(correct)
})