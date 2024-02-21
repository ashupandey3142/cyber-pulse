import { fireEvent, render, waitFor } from '@testing-library/react'
import RemoveIntegration from './'
import {
  ARE_YOU_SURE_TO_REMOVE,
  CANCEL,
  DEFINE_EMPLOYEE_TEXT,
  DEFINE_ORGANISATION,
  DELETE_IT,
  GOOGLE_SIGN_IN,
  REMOVE_INTEGRATION,
  REMOVE_TEXT,
  SELECT_ORGANISATION,
} from '@/utils/constant'

describe('RemoveIntegration Component', () => {
  it('should render Remove Integration component check label', () => {
    const onDeleteIntegrationClick = jest.fn()
    const onDisableButtonClick = jest.fn()

    const { getByText } = render(
      <RemoveIntegration
        isActive={true}
        onDeleteIntegrationClick={onDeleteIntegrationClick}
        onDisableButtonClick={onDisableButtonClick}
      />
    )
    expect(getByText(GOOGLE_SIGN_IN)).toBeInTheDocument()
    expect(getByText(DEFINE_EMPLOYEE_TEXT)).toBeInTheDocument()
    expect(getByText(DEFINE_ORGANISATION)).toBeInTheDocument()
  })

  it('should render toggles accordion correctly', () => {
    const handleDeleteIntegrationClick = jest.fn()
    const onDisableButtonClick = jest.fn()

    const { getByText } = render(
      <RemoveIntegration
        isActive={true}
        onDeleteIntegrationClick={handleDeleteIntegrationClick}
        onDisableButtonClick={onDisableButtonClick}
      />
    )
    expect(getByText(DEFINE_ORGANISATION)).toBeInTheDocument()
    fireEvent.click(getByText(DEFINE_ORGANISATION))
    expect(getByText(DEFINE_EMPLOYEE_TEXT)).toBeInTheDocument()
    fireEvent.click(getByText(DEFINE_EMPLOYEE_TEXT))
    expect(getByText(REMOVE_INTEGRATION)).toBeInTheDocument()
    fireEvent.click(getByText(REMOVE_INTEGRATION))
    fireEvent.click(getByText(REMOVE_TEXT))
    fireEvent.click(getByText(DELETE_IT))
    expect(handleDeleteIntegrationClick).toHaveBeenCalledTimes(1)
  })

  it('should render opens and closes RemoveIntegrationModal', () => {
    const handleDeleteIntegrationClick = jest.fn()
    const onDisableButtonClick = jest.fn()

    const { getByText, queryByText } = render(
      <RemoveIntegration
        isActive={true}
        onDeleteIntegrationClick={handleDeleteIntegrationClick}
        onDisableButtonClick={onDisableButtonClick}
      />
    )
    fireEvent.click(getByText(REMOVE_TEXT))
    expect(getByText(ARE_YOU_SURE_TO_REMOVE)).toBeInTheDocument()
    fireEvent.click(getByText(CANCEL))
    expect(queryByText(ARE_YOU_SURE_TO_REMOVE)).toBeNull()
  })
  it('should close by  double click on accordian ', async () => {
    const handleDeleteIntegrationClick = jest.fn()
    const onDisableButtonClick = jest.fn()

    const { getByText, queryByText } = render(
      <RemoveIntegration
        isActive={true}
        onDeleteIntegrationClick={handleDeleteIntegrationClick}
        onDisableButtonClick={onDisableButtonClick}
      />
    )
    fireEvent.click(getByText(DEFINE_ORGANISATION))
    expect(getByText(SELECT_ORGANISATION)).toBeInTheDocument()
    fireEvent.click(getByText(DEFINE_ORGANISATION))
    await waitFor(() => {
      setTimeout(() => {
        expect(queryByText(SELECT_ORGANISATION)).toBeNull()
      }, 5)
    })
  })
})
