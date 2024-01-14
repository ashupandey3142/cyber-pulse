import { Box } from '@mui/material'
import { render, screen } from '@testing-library/react'
import DashBoardCard from '.'

describe('DashBoardCard', () => {
  it('should renders without crashing with default props', () => {
    const title = 'SECURITY HEALTH'
    const subtitle = '4,345 self-healed findings'
    render(<DashBoardCard title={title} subtitle={subtitle} child={<Box />} />)
    expect(screen.getByText('SECURITY HEALTH')).toBeInTheDocument()
  })

  it('should show maximize icon with isMaximize props', () => {
    const title = 'SECURITY HEALTH'
    const subtitle = '4,345 self-healed findings'
    render(
      <DashBoardCard
        title={title}
        subtitle={subtitle}
        child={<Box />}
        isMaximize
      />
    )
    const maximizeIcon = screen.getByAltText('maximize')
    expect(maximizeIcon).toBeInTheDocument()
  })
})
