import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { getFileDetails } from '@/services'
import { transformIntoSecurityFindingData } from '@/utils/function'
import SecurityFindingPage from '.'
import {
  APPLY,
  CLEAR,
  FILTER,
  FILTER_MENU,
  ISSUE_TYPE_MENU,
  SECURITY_FINDINGS,
} from '@/utils/constant'

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
describe('Security Findings', () => {
  jest.mock('@/utils/function', () => ({
    transformIntoSecurityFindingData: jest.fn(() => mockFileData),
  }))

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('should renders Security Findings Page correctly', async () => {
    (getFileDetails as jest.Mock).mockResolvedValue([mockFileDetails])

    render(<SecurityFindingPage />)

    await waitFor(() => {
      expect(screen.getAllByText(SECURITY_FINDINGS)[0]).toBeInTheDocument()

      expect(screen.getByText('1')).toBeInTheDocument()
      expect(screen.getByAltText('chevron-down')).toBeInTheDocument()
      expect(screen.getAllByText('3')[0]).toBeInTheDocument()
      expect(screen.getByTestId('table')).toBeInTheDocument()
      expect(screen.getByTestId('table-body')).toBeInTheDocument()
      expect(screen.getByTestId('table-head')).toBeInTheDocument()
      expect(screen.getByTestId('table-pagination')).toBeInTheDocument()

      expect(screen.getByPlaceholderText('Search')).toBeInTheDocument()
      expect(screen.getByText(FILTER)).toBeInTheDocument()

      fireEvent.click(screen.getByText(FILTER))
      FILTER_MENU.forEach((menu) => {
        expect(screen.getAllByText(menu.label)[0]).toBeInTheDocument()
        fireEvent.click(screen.getAllByText(menu.label)[0])
      })

      const issuePopup = screen.getByTestId('issue-type-popup')

      expect(issuePopup).toBeInTheDocument()
      ISSUE_TYPE_MENU.forEach((menu) => {
        expect(screen.getByText(menu.label)).toBeInTheDocument()
      })
      expect(screen.getByText(APPLY)).toBeInTheDocument()
      expect(screen.getByText(CLEAR)).toBeInTheDocument()
    })
  })
})
