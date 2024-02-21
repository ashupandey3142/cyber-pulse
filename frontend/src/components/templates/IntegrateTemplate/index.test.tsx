import IntegrationHeader from '@/components/molecules/IntegrationHeader'
import ToolsCollection from '@/components/molecules/ToolsCollection'
import SideBar from '@/components/organisms/SideBar'
import { render, screen } from '@testing-library/react'
import IntegrationTemplate from '.'

describe('IntegrateTemplate', () => {
  it('should renders correctly with default props', () => {
    render(
      <IntegrationTemplate
        header={<SideBar handleNavClick={jest.fn()} />}
        sidebar={
          <IntegrationHeader
            label={'INTEGRATIONS'}
            hasButtonLabel={false}
            buttonLabel={'ADD NEW'}
          />
        }
        body={<ToolsCollection />}
      />
    )
    expect(screen.getByText('INTEGRATIONS')).toBeInTheDocument()
  })
})
