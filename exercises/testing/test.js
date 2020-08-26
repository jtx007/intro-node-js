// write some tests
const {findUser, deleteUser, users} = require('./users')

describe('users', () => {
  test('find user by id', () => {
      findUser(1, (user) => {
          expect(user.id).toBe(1)
          done()
      })    
  })
  test('delete user by id', () => {
      deleteUser(1, (user) => {
        expect(user.id).toBe(1)
        expect(users).toHaveLength(users.length - 1)
        done()
      })
  })
  
})
