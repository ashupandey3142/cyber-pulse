import { fireEvent, render, waitFor } from '@testing-library/react'
import SnackBar from './'

describe('SnackBar component', () => {
  test('calls handleClose when close button is clicked', async () => {
    const handleClose = jest.fn()
    const { getByAltText } = render(
      <SnackBar
        topPosition="1rem"
        open={true}
        handleClose={handleClose}
        snackMessage={'Successfully Imported Contacts'}
      />
    )

    const closeButton = getByAltText('closeIcon')
    fireEvent.click(closeButton)

    await waitFor(() => {
      expect(handleClose).toHaveBeenCalledTimes(1)
    })
  })

  test('displays correct message content', () => {
    const { getByText } = render(
      <SnackBar
        topPosition="1rem"
        open={true}
        handleClose={() => {}}
        snackMessage={'Successfully Imported Contacts'}
      />
    )

    expect(getByText('Successfully Imported Contacts')).toBeInTheDocument()
  })

  test('hides the SnackBar when closed', () => {
    const { queryByRole } = render(
      <SnackBar
        topPosition="1rem"
        open={false}
        handleClose={() => {}}
        snackMessage={'Successfully Imported Contacts'}
      />
    )

    expect(queryByRole('alert')).toBeNull()
  })
})
