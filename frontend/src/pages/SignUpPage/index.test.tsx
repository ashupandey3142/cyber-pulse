import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import SignUpPage from './'
import { createUser, fetchUserDataByEmail } from '@/services'
import {
  CREATE_ACCOUNT,
  EXAMPLE_MAIL,
  MUST_BE,
  REPEAT_PASSWORD_PLACEHOLDER,
} from '@/utils/constant'

jest.mock('axios')

export const mockData = [
  {
    id: '1',
    email: 'john@gmail.com',
    password: 'Pass@123',
  },
  {
    id: '2',
    email: 'test@gmail.com',
    password: 'Pass@123',
  },
]
export const mockUserData = []
jest.mock('../../services/index.ts', () => ({
  createUser: jest.fn(),
  fetchUserDataByEmail: jest.fn(),
}))

describe('SignUpPage Testcases', () => {
  it('should successfully fetchByEmail if exists ', async () => {
    ;(fetchUserDataByEmail as jest.Mock).mockResolvedValue(mockData)
    render(<SignUpPage />)

    const emailInput = screen.getByPlaceholderText(EXAMPLE_MAIL)
    fireEvent.change(emailInput, { target: { value: 'john@gmail.com' } })
    const passwordInput = screen.getByPlaceholderText(MUST_BE)
    fireEvent.change(passwordInput, { target: { value: 'Pass@123' } })

    const confirmPasswordInput = screen.getByPlaceholderText(
      REPEAT_PASSWORD_PLACEHOLDER
    )
    fireEvent.change(confirmPasswordInput, { target: { value: 'Pass@123' } })
    const createAccountButton = screen.getByText(CREATE_ACCOUNT)
    expect(createAccountButton).toBeEnabled

    fireEvent.click(createAccountButton)
    const response = await fetchUserDataByEmail('john@gmail.com')
    expect(response).toEqual(mockData)
  })

  it('should successfully create  a user by checking existing email', async () => {
    ;(fetchUserDataByEmail as jest.Mock).mockResolvedValue([])
    render(<SignUpPage />)

    const emailInput = screen.getByPlaceholderText(EXAMPLE_MAIL)
    fireEvent.change(emailInput, { target: { value: 'test@gmail.com' } })
    const passwordInput = screen.getByPlaceholderText(MUST_BE)
    fireEvent.change(passwordInput, { target: { value: 'Pass@123' } })

    const confirmPasswordInput = screen.getByPlaceholderText(
      REPEAT_PASSWORD_PLACEHOLDER
    )
    fireEvent.change(confirmPasswordInput, { target: { value: 'Pass@123' } })
    const createAccountButton = screen.getByText(CREATE_ACCOUNT)
    expect(createAccountButton).toBeEnabled

    fireEvent.click(createAccountButton)
    const response = await fetchUserDataByEmail('test@gmail.com')
    await waitFor(() => {
      expect(createUser).toHaveBeenCalled()
    })
    expect(response).toEqual([])
  })
})
