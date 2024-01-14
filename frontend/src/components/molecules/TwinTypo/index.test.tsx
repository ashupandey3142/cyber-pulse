import { render, screen } from '@testing-library/react'
import TwinTypo from '.'

describe('TwinTypo', () => {
  it('renders correctly', () => {
    const title = 'SECURITY HEALTH'
    const subtitle = '4,345 self-healed findings'
    render(
      <TwinTypo
        title={title}
        titleVariant="subtitle3"
        subtitle={subtitle}
        subtitleVariant="body4"
        increasedBy="32"
      />
    )
    screen.getByText(title)
    screen.getByText(subtitle)
    screen.getByText('32')
  })

  it('renders correctly without subtitle', () => {
    const title = 'HEALTH TREND'
    render(<TwinTypo title={title} titleVariant="subtitle3" />)
    screen.getByText(title)
  })
})
