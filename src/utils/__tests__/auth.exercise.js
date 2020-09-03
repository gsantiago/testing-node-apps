import cases from 'jest-in-case'
import { isPasswordAllowed } from '../auth'

// 🐨 write tests for valid and invalid passwords
// 💰 here are some you can use:
//
// valid:
// - !aBc123
//
// invalid:
// - a2c! // too short
// - 123456! // no alphabet characters
// - ABCdef! // no numbers
// - abc123! // no uppercase letters
// - ABC123! // no lowercase letters
// - ABCdef123 // no non-alphanumeric characters

const getCases = entries => Object.entries(entries).map(([ name, password ]) => ({
  name,
  password
}))

cases('isPasswordAllowed: invalid passwords', opts => {
  expect(isPasswordAllowed(opts.password)).toBe(false)
}, getCases({
  'empty': '',
  'too short': 'a2c!',
  'no alphabet characters': '123456!',
  'no numbers': 'ABCdef!',
  'no uppercase letters': 'abc123!',
  'no lowercase letters': 'ABC123!',
  'no non-alphanumeric characters': 'ABCdef123'
}))


cases('isPasswordAllowed: valid passwords', opts => {
  expect(isPasswordAllowed(opts.password)).toBe(true)
}, getCases({
  'valid': 'PandoraLinda$$123'
}))
