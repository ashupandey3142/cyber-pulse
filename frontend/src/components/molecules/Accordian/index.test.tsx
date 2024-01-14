import { render, screen } from '@testing-library/react'
import AccordianComp from './'
import { DEFINE_ORGANISATION, REMOVE_INTEGRATION } from '@/utils/constant'

describe('AccordianComp', () => {
  test('renders configuration name and "Not Configured" chip when isConfigured is false', () => {
    const configurationName = DEFINE_ORGANISATION
    const isConfigured = true
    render(
      <AccordianComp
        configurationName={configurationName}
        isConfigured={isConfigured}
      />
    )
    expect(screen.getByText(configurationName)).toBeInTheDocument()
    expect(screen.getByText('Not Configured')).toBeInTheDocument()
  })

  test('renders configuration name without "Not Configured" chip when isConfigured is true', () => {
    const configurationName = DEFINE_ORGANISATION
    const isConfigured = false

    render(
      <AccordianComp
        configurationName={configurationName}
        isConfigured={isConfigured}
      />
    )
    expect(screen.getByText(configurationName)).toBeInTheDocument()
    expect(screen.queryByText('Not Configured')).toBeNull()
  })

  test('renders content when provided', () => {
    const configurationName = REMOVE_INTEGRATION
    const isConfigured = false
    const content = <div>Test Content</div>

    render(
      <AccordianComp
        configurationName={configurationName}
        isConfigured={isConfigured}
        content={content}
      />
    )

    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })
})
