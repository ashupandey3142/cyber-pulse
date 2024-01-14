import theme from '@/theme'
import { ActionProps } from './interfaces'

export const INTEGRATED_CHIP_STYLE = {
  width: '120px',
  height: '28px',
  borderRadius: '28px',
  padding: '5px 10px 5px 10px',
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.darkTheme.CHIP,
  border: `1px solid ${theme.palette.primary.main}`,
}

export const NOT_CONFIGURED_CHIP_STYLE = {
  padding: '4px 12px 4px 12px',
  color: theme.palette.darkTheme.MEDIUM_EMPHASIS,
  backgroundColor: theme.palette.darkTheme.STRUCTURAL_300,
  border: `1px solid ${theme.palette.primary.main}`,
}

export const GOOGLE_SIGN_IN = 'Google Single Sign In'
export const LAST_UPDATE =
  'Last time updated : 15 minutes ago  ( Updates every 20 minutes  )'
export const STATUS = 'STATUS : NOT Confirmed'
export const ENGAGE_TITLE = 'ENGAGE WITH EMPLOYEES'
export const MEDIUM = 'Medium'
export const SEND = 'SEND'
export const COPYCISO = 'Copy CISO'
export const MAIL_TEXT = `I hope this message finds you well. As the Security Lead at our organization, it is my responsibility to keep you informed about any potential security vulnerabilities that may impact our systems. Today, I am writing to bring your attention to a critical matter regarding the Service Level Agreement (SLA) systems we rely on.
Recently, our security team discovered several vulnerabilities within the SLA systems, which could potentially compromise the confidentiality, integrity, and availability of our data. These vulnerabilities pose a significant risk to the security and stability of our operations if left unaddressed. It is crucial that we take immediate action to mitigate these risks and protect our organization from any potential breaches.`

export const SPREADSHEET = 'SPREADSHEET'
export const UPLOAD_CSV = 'Upload a .csv file'
export const ACTION_CARD_DATA: ActionProps[] = [
  {
    id: 1,
    label: 'ENGAGE',
  },
  {
    id: 2,
    label: 'PAUSE',
  },
  {
    id: 3,
    label: 'STATUS',
  },
]

export const ACTION = 'ACTION'
export const NO_OPTION = 'No options available'
export const INFO_HEADER = {
  TITLE: 'Helping you integrate more security tools at Amplifier'.toUpperCase(),
  SUBTITLE: `Let’s get started with integrating your first security tool!`,
}
export const FILTER_MENU = [
  { id: 1, label: 'Severity' },
  { id: 2, label: 'Issue Type' },
]
export const ISSUE_TYPE_MENU = [
  { id: 1, label: 'Training' },
  { id: 2, label: 'Tooling' },
  { id: 3, label: 'Vulnerability' },
  { id: 4, label: 'MFA' },
]
export const CLEAR = 'Clear'
export const APPLY = 'APPLY'

export const TOOLCARD_STRINGS = {
  ALT: 'tool-icon',
  SUBTITLE: 'NO TOOLS INTEGRATED',
  LINK: 'ADD INTEGRATION',
}

export const SLACK_SIGN_IN_LABEL = 'GOOGLE SINGLE SIGN-ON'

export const SOCIAL_CARD_STRING = {
  ALT: 'social-card',
  SUBTITLE: 'Social connections',
  DESCRIPTION: 'Allows users to login with their Google account.',
}

export const DASHBOARD = 'DASHBOARD SIGN IN'
export const EVERYONE = 'EVERYONE'
export const CONFIGURE = 'CONFIGURE'
export const IDENTITY = 'IDENTITY TOOL'

export const SEARCH = 'Search'
export const FILTER = 'FILTER'
export const SIGN_OUT = 'Sign Out'
export const UPLOAD_FILE_CONSTANTS = {
  TITLE: 'IMPORT YOUR DATA',
  SUBTITLE: 'Choose a  source to import your data',
  DROP_ZONE: 'Drop file here',
  DRAG_AND_DROP: 'Drag and drop to upload or',
  BROWSE: 'CLICK TO BROWSE',
  UPLOAD_COMPLETED_ALT: 'upload-completed',
  UPLOAD_SUCCESSFULLY: ' uploaded successfully',
  UPLOADING: 'uploading ',
  FILE: 'file...',
  RE_UPLOAD_BUTTON_LABEL: 'Re-upload',
  CANCEL_BUTTON_LABEL: 'Cancel',
  PROCEED_BUTTON_LABEL: 'Proceed',
}
export const TOOL_INTEGRATION_DATA = {
  TITLE: 'Identity tool integration',
}
export const DEFINE_ORGANISATION = 'Define Organisation'
export const REMOVE_INTEGRATION = 'Remove Integration'
export const NOT_CONFIGURED = 'Not Configured'
export const DASHBOARD_DATA = [
  { id: 1, title: 'SECURITY HEALTH', subtitle: '4,345 self-healed findings' },
  { id: 2, title: 'HEALTH TREND' },
  { id: 3, title: 'RISK CONTRIBUTORS' },
  { id: 4, title: 'TOOLING COVERAGE' },
  { id: 5, title: 'OUT OF SLA VULNERABILITES' },
  { id: 6, title: 'MFA COVERAGE', subtitle: 'total applications' },
  { id: 7, title: 'SECURITY TRAINING DEFICIENCIES' },
  { id: 8, title: 'ENGAGEMENT VALUE' },
]

export const vulnerabilityData = [
  [
    { count: '05', severity: 'CRITICAL', color: theme.palette.ampsec.RED },
    { count: '54', severity: 'HIGH', color: theme.palette.ampsec.ORANGE },
  ],
  [
    { count: '32', severity: 'MEDIUM', color: theme.palette.ampsec.YELLOW },
    { count: '12', severity: 'LOW', color: theme.palette.ampsec.GREEN },
  ],
]
export const TOOLING_COVERAGE_DATA = {
  total_emp: 'TOTAL EMPLOYEES',
  total_end: 'TOTAL ENDPOINTS',
  crowdStrike: 'CROWDSTRIKE',
  increased_by: 'Increased by',
  text: 'TEXT',
}
export const NOT_PROTECTED = 'NOT PROTECTED'
export const FAILED_PHISHING = 'FAILED PHISHING'
export const OVERDUE_TRAINING = 'OVERDUE TRAINING'
export const ACTIVE = '6 Active'
export const MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
