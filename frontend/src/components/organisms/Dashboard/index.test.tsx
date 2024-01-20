import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Dashboard from '.'
import {
  DASHBOARD_DATA,
  FAILED_PHISHING,
  MONTH,
  NOT_PROTECTED,
  OVERDUE_TRAINING,
  TOOLING_COVERAGE_DATA,
} from '@/utils/constant'

test('renders Dashboard component', () => {
  const mockData = {
    mfaValue: 50,
    mfaTotalApplication: '195',
    failedPhishing: '10',
    overdueTraining: '5',
    totalEmployees: '100',
    totalEndpoints: '200',
    crowdStrikes: '8',
    text: 'Text',
    graphLabels: MONTH,
    graphValues: [25, 20, 15, 50.9, 45, 30],
  }

  const { getByText, getByAltText, getByTestId } = render(
    <Dashboard {...mockData} />
  )

  DASHBOARD_DATA.forEach((d) => {
    expect(getByText(d.title)).toBeInTheDocument()
  })
  expect(getByTestId('line-graph')).toBeInTheDocument()

  expect(getByText('50')).toBeInTheDocument()
  expect(getByText(NOT_PROTECTED)).toBeInTheDocument()

  expect(getByText(TOOLING_COVERAGE_DATA.crowdStrike)).toBeInTheDocument()
  expect(getByText(TOOLING_COVERAGE_DATA.total_emp)).toBeInTheDocument()
  expect(getByText(TOOLING_COVERAGE_DATA.total_end)).toBeInTheDocument()
  expect(getByText(TOOLING_COVERAGE_DATA.text)).toBeInTheDocument()
  expect(getByText(FAILED_PHISHING)).toBeInTheDocument()
  expect(getByText(OVERDUE_TRAINING)).toBeInTheDocument()

  expect(getByAltText('first-text')).toBeInTheDocument()
  expect(getByAltText('sec-text')).toBeInTheDocument()

  expect(getByTestId('dashboard-container')).toBeInTheDocument()
  expect(getByTestId('tooling-main-container')).toBeInTheDocument()
})
