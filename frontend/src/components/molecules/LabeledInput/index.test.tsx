import { render, screen } from '@testing-library/react'
import LabeledInput from '.'

describe('LabelledInput', () => {
  it('renders without crashing', () => {
    render(
      <LabeledInput
        label="EMAIL"
        labelVariant="body3"
        textFieldProps={{
          type: 'email',
          size: 'small',
        }}
      />
    )
    expect(screen.getByText('EMAIL')).toBeInTheDocument()
    expect(screen.getByTestId('custom-textfield')).toBeInTheDocument()
  })
})
