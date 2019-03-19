import Demo from '../src'

it('test demo', () => {
  const instance = new Demo()
  const result = instance.init()
  expect(result).toBe('demo')
})
