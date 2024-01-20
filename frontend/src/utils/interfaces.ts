export interface ActionProps {
  id: number
  label: string
}
export interface FormSignDataProps {
  email: string
  password: string
}
export interface FormDataProps {
  email: string
  password: string
  confirmPassword: string
}
export interface ResetProps {
  password: string
  confirmPassword: string
}

export interface SlackActionId {
  baseUrl: string
  clientId: string
  clientSecret: string
}

export interface IRowData {
  id: string
  severity: string
  status: string
  provider: string
  domain: string
  finding: string
  numberOfEngagement: number
  name: string
  department: string
  createdAt: string
  description: string
  mfaEnabled: boolean
  riskScore: number
  groups: string
}
interface ServerDataItem {
  Email: string
  Name: string
  'First Name': string
  'Last Name': string
  'Phish Prone %': number
  'Risk Score': number
  'Risk Booster': number
  'Job Title': string
  Division: string | null
  Location: string | null
  'Phone Number': string | null
  Extension: string | null
  Mobile: string | null
  'Manager Name': string
  'Manager Email': string
  'Employee Number': string | null
  Groups: string
  'Joined On': string
  'Last Sign-in': string
  'Time Zone': string
  Locale: string
  Organization: string | null
  Department: string
  Language: string | null
  Comment: string | null
  'Employee Start Date': string | null
  'Archived At': string | null
  'Provisioning Managed': string
  'MFA Enabled': string
  'Custom Field 1': string | null
  'Custom Field 2': string | null
  'Custom Field 3': string | null
  'Custom Field 4': string | null
  'Custom Date 1': string | null
  'Custom Date 2': string | null
  'Phishing Language': string
  'Training Language': string
  'Admin Language': string
  'Email Aliases': string
  'Slack Enabled': string
  'MS Teams Enabled': string
  'Google Chat Enabled': string
  Findings: string
  Description: string
  Severity: string
  Status: string
  Provider: string
  Domain: string
  Finding: string
  'Number of Engagements': number
}

export interface ServerData {
  [key: string]: ServerDataItem
}
