import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { getFileDetails } from '@/services'
import DashboardPage from '.'
import {
  FAILED_PHISHING,
  NOT_PROTECTED,
  OVERDUE_TRAINING,
  TOOLING_COVERAGE_DATA,
} from '@/utils/constant'
import { transformIntoSecurityFindingData } from '@/utils/function'

jest.mock('axios')

jest.mock('@/services', () => ({
  getFileDetails: jest.fn(),
}))

const mockFileDetails = {
  '0': {
    Email: 'sudhir@zemosolabs.com',
    Name: 'Sudhir Rao',
    'First Name': 'Sudhir',
    'Last Name': 'Rao',
    'Phish Prone %': 4.8,
    'Risk Score': 25.6,
    'Risk Booster': 0,
    'Job Title': 'Tech Lead and Above',
    Division: null,
    Location: null,
    'Phone Number': null,
    Extension: null,
    Mobile: null,
    'Manager Name': 'Satish',
    'Manager Email': 'satish@zemosolabs.com',
    'Employee Number': null,
    Groups:
      'Completed SAPA-Trial, Failed Phishing Test, kb4_learners, KnowBe4 - Trial Group, KnowBe4 Admins, Knowbe4-Reports, Zemoso Employees',
    'Joined On': '08/03/2022 4:48 AM',
    'Last Sign-in': '10/31/2023 5:29 AM',
    'Time Zone': 'Eastern Time (US & Canada)',
    Locale: 'en',
    Organization: null,
    Department: 'Security',
    Language: null,
    Comment: null,
    'Employee Start Date': null,
    'Archived At': null,
    'Provisioning Managed': 'False',
    'MFA Enabled': 'True',
    'Custom Field 1': null,
    'Custom Field 2': null,
    'Custom Field 3': null,
    'Custom Field 4': null,
    'Custom Date 1': null,
    'Custom Date 2': null,
    'Phishing Language': 'en-us',
    'Training Language': 'en-us',
    'Admin Language': 'en-us',
    'Email Aliases': 'sudhir@zemosolabs.com',
    'Slack Enabled': 'No',
    'MS Teams Enabled': 'No',
    'Google Chat Enabled': 'No',
    Findings: 'CVE-2019-4109',
    Description:
      'Predictable Randomness uses easily guessable random values in security mechanisms.',
    Severity: 'Medium',
    Status: 'Closed',
    Provider: 'Google',
    Domain: 'Database',
    Finding: 'CVE-2019-4104',
    'Number of Engagements': 2,
  },
}

const mockFileData = transformIntoSecurityFindingData(mockFileDetails)
describe('DashboardPage', () => {
  jest.mock('@/utils/function', () => ({
    transformIntoSecurityFindingData: jest.fn(() => mockFileData),
  }))

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('renders DashboardPage component', async () => {
    ;(getFileDetails as jest.Mock).mockResolvedValue([mockFileDetails])

    render(<DashboardPage />)

    await waitFor(() => {
      expect(screen.getByTestId('line-graph')).toBeInTheDocument()

      expect(screen.getByText(NOT_PROTECTED)).toBeInTheDocument()

      expect(
        screen.getByText(TOOLING_COVERAGE_DATA.crowdStrike)
      ).toBeInTheDocument()
      expect(screen.getAllByText('1')[0]).toBeInTheDocument()
      expect(
        screen.getByText(TOOLING_COVERAGE_DATA.total_emp)
      ).toBeInTheDocument()
      expect(screen.getByText('SETTINGS')).toBeInTheDocument()
      expect(
        screen.getByText(TOOLING_COVERAGE_DATA.total_end)
      ).toBeInTheDocument()
      expect(screen.getByText(TOOLING_COVERAGE_DATA.text)).toBeInTheDocument()
      expect(screen.getByText(FAILED_PHISHING)).toBeInTheDocument()
      expect(screen.getByText(OVERDUE_TRAINING)).toBeInTheDocument()
    })
  })
})
