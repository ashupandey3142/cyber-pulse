import { fireEvent, render } from '@testing-library/react'
import DisableSocialCard from '.'
import { GOOGLE_SIGN_IN, STATUS } from '@/utils/constant'

describe('DisableSocialCard', () => {
  it('should render with active status', () => {
    const { getByText } = render(
      <DisableSocialCard
        socialIcon="Google"
        isActive={true}
        socialLabel={GOOGLE_SIGN_IN}
        onToggleClick={() => {}}
      />
    )

    expect(getByText(GOOGLE_SIGN_IN)).toBeInTheDocument()
    expect(getByText(STATUS)).toBeInTheDocument()
    expect(getByText('Active')).toBeInTheDocument()
  })

  it('should render with disabled status', () => {
    const { getByText } = render(
      <DisableSocialCard
        isActive={false}
        socialLabel={GOOGLE_SIGN_IN}
        onToggleClick={() => {}}
        socialIcon={'Google'}
      />
    )

    expect(getByText(GOOGLE_SIGN_IN)).toBeInTheDocument()
    expect(getByText(STATUS)).toBeInTheDocument()
    expect(getByText('Disable')).toBeInTheDocument()
  })

  it('should handle click event', () => {
    const handleDisableClickMock = jest.fn()

    const { getByText } = render(
      <DisableSocialCard
        isActive={true}
        socialLabel={GOOGLE_SIGN_IN}
        onToggleClick={handleDisableClickMock}
        socialIcon="google"
      />
    )

    fireEvent.click(getByText('Active'))

    expect(handleDisableClickMock).toHaveBeenCalledTimes(1)
  })
})
