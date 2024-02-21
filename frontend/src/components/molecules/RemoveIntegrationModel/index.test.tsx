import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import RemoveIntegrationModal from '.'
import {
  ARE_YOU_SURE_TO_REMOVE,
  CANCEL,
  DELETE_IT,
  REMOVED_INTEGRATION,
} from '@/utils/constant'

describe('RemoveIntegrationModal Component', () => {
  it('should render all text present in component', () => {
    const handleRemoveCancel = jest.fn()
    const handleDeleteIntegration = jest.fn()

    const { getByText } = render(
      <RemoveIntegrationModal
        handleRemoveCancel={handleRemoveCancel}
        handleDeleteIntegration={handleDeleteIntegration}
        open={true}
      />
    )
    expect(getByText(REMOVED_INTEGRATION)).toBeInTheDocument()
    expect(getByText(ARE_YOU_SURE_TO_REMOVE)).toBeInTheDocument()
    expect(getByText(CANCEL)).toBeInTheDocument()
    expect(getByText(DELETE_IT)).toBeInTheDocument()
  })

  it('calls handleRemoveCancel when Cancel button is clicked', () => {
    const handleRemoveCancel = jest.fn()
    const handleDeleteIntegration = jest.fn()

    const { getByText } = render(
      <RemoveIntegrationModal
        handleRemoveCancel={handleRemoveCancel}
        handleDeleteIntegration={handleDeleteIntegration}
        open={true}
      />
    )

    fireEvent.click(getByText(CANCEL))
    expect(handleRemoveCancel).toHaveBeenCalledTimes(1)
    expect(handleDeleteIntegration).not.toHaveBeenCalled()
  })

  it('should call handleDeleteIntegration when Delete button is clicked', () => {
    const handleRemoveCancel = jest.fn()
    const handleDeleteIntegration = jest.fn()

    const { getByText } = render(
      <RemoveIntegrationModal
        handleRemoveCancel={handleRemoveCancel}
        handleDeleteIntegration={handleDeleteIntegration}
        open={true}
      />
    )

    fireEvent.click(getByText(DELETE_IT))
    expect(handleDeleteIntegration).toHaveBeenCalledTimes(1)
    expect(handleRemoveCancel).not.toHaveBeenCalled()
  })

  it('should not open the modal when open props is false', async () => {
    const handleRemoveCancel = jest.fn()
    const handleDeleteIntegration = jest.fn()

    const { queryByText } = render(
      <RemoveIntegrationModal
        handleRemoveCancel={handleRemoveCancel}
        handleDeleteIntegration={handleDeleteIntegration}
        open={false}
      />
    )

    expect(queryByText(ARE_YOU_SURE_TO_REMOVE)).toBeNull()
  })
})
