import { ValidationComposite } from '@/validation/validators'
import { ValidationBuilder } from '@/validation/validators/builder/validation-builder'
import { makeSignUpValidation } from './signup-validation-factory'

describe('LoginValidationFactory', () => {
  test('Should make ValidationComposite with correct validations', () => {
    const composite = makeSignUpValidation()
    expect(composite).toEqual(ValidationComposite.build([
      ...ValidationBuilder.field('name').required().min(5).build(),
      ...ValidationBuilder.field('email').required().email().build(),
      ...ValidationBuilder.field('password').required().min(5).build(),
      ...ValidationBuilder.field('passwordConfirmation').sameAs('password').required().build()
    ]))
  })
})
