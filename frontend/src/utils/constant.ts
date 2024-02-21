import theme from '@/theme'
import unIntegration from '@Assets/icons/FirstAidKit 1.svg'
import HealthDashboard from '@Assets/icons/HealthDashboard.svg'
import unSecurityFinding from '@Assets/icons/SecurityFinding.svg'
import integration from '@Assets/icons/UnSelectedPolicy.svg'
import unHealthDashboard from '@Assets/icons/UnselectedDashboard.svg'
import flow from '@Assets/icons/flow.svg'
import SecurityFinding from '@Assets/icons/searchIn.svg'
import settings from '@Assets/icons/settings.svg'
import slack from '@Assets/icons/slack.svg'
import unFlow from '@Assets/icons/unFlow.svg'
import unSettings from '@Assets/icons/unSettings.svg'
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
export const LAST_UPDATE = 'Last time updated :'
export const LAST_UPDATE_TIME = '15 minutes ago  '
export const UPDATE_TIME = '( Updates every 20 minutes  )'
export const STATUS = 'STATUS : NOT Confirmed'
export const ENGAGE_TITLE = 'ENGAGE WITH EMPLOYEES'
export const MEDIUM = 'Medium'
export const SEND = 'SEND'
export const COPYCISO = 'Copy CISO'
export const MAIL_alt = `I hope this message finds you well. As the Security Lead at our organization, it is my responsibility to keep you informed about any potential security vulnerabilities that may impact our systems. Today, I am writing to bring your attention to a critical matter regarding the Service Level Agreement (SLA) systems we rely on.
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
  ALT: 'tool-selectedtSrc',
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
export const MONTH = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
]

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

export const SIGN_IN_DASHBOARD = 'DASHBOARD SIGN IN'
export const EMAIL = 'EMAIL'
export const SIGNIN = 'SIGN IN'
export const AUTHSIGNIN = 'Sign up with Google'
export const NEED_ACCOUNT = 'Need an account?'
export const CREATE_ONE = 'CREATE ONE'
export const FORGOT_PASSWORD_LABEL = 'Forgot password?'.toUpperCase()
export const EXAM_EMAIL = 'example@gmail.com'
export const REMEMBER_PASSWORD = 'Remember password?'
export const SIGN = 'SIGN IN'
export const RESET_LINK = 'SEND RESET LINK'
export const SIGNIN_EXAMPLE_MAIL = 'jonas_kahnwald@gmail.com'
export const SIGN_UP = 'DASHBOARD SIGN UP'
export const AUTHSIGNUP = 'Sign up with Google'
export const CREATE_ACCOUNT = 'CREATE ACCOUNT'
export const CREATE_PASSWORD = 'CREATE A PASSWORD'
export const ALREADY_ACCOUNT = 'Already have an account?'
export const EXAMPLE_MAIL = 'example@gmail.com'
export const SIZE_CHARACTER = 'must be 8 characters'
export const REPEAT_PASSWORD_PLACEHOLDER = 'repeat password'
export const VALIDEMAIL = /^[a-zA-Z0-9._%+-]+@(gmail\.com|zemosolabs\.com)$/
export const VALIDPASSWORD =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=])[A-Za-z\d@#$%^&+=]{8,}$/
export const PASSWORD_ERROR_TEXT = [
  'Enter valid Password',
  'Password is required',
]
export const EMAIL_ERROR_TEXT = ['Enter Valid EMAIL', 'Email is required']
export const CONFIRM_PASSWORD_ERROR_TEXT = [
  'Enter Valid Confirm Password',
  'Cofirm Password is required',
]
export const FORGOT_PASSWORD = 'Forgot password?'
export const KEEP_ME = 'Keep me logged in'
export const PASSWORD = 'PASSWORD'
export const SIGN_IN = 'SIGN IN'
export const SNACK_MESSAGE = 'Message sent to the employees'
export const SNACK_MESSAGE1 = 'successfully.'
export const RESET_PASSWORD = 'RESET PASSWORD'
export const CREATE_PASSWORD_LABEL = 'CREATE PASSWORD'
export const MUST_BE = 'must be 8 characters'
export const EMAIL_LABEL = 'EMAIL'
export const CONFIRM_PASSWORD = 'CONFIRM PASSWORD'
export const REPEAT_PASS_PLACEHOLDER = 'Repeat Password'
export const RESET_PASSWORD_LABEL = 'Reset Password'
export const SIDEBAR = [
  {
    alt: 'HEALTH DASHBOARD',
    tabName: 'HEALTH DASHBOARD',
    selectedtSrc: HealthDashboard,
    unselectedSrc: unHealthDashboard,
  },
  {
    alt: 'SECURITY',
    tabName: 'SECURITY FINDINGS',
    selectedtSrc: SecurityFinding,
    unselectedSrc: unSecurityFinding,
  },
  {
    alt: 'FLOW BUILDER',
    tabName: 'FLOW BUILDER',
    selectedtSrc: unFlow,
    unselectedSrc: flow,
  },
  {
    alt: 'INTEGRATIONS',
    tabName: 'INTEGRATIONS & POLICIES',
    selectedtSrc: integration,
    unselectedSrc: unIntegration,
  },
  {
    alt: 'Settings',
    tabName: 'SETTINGS',
    selectedtSrc: unSettings,
    unselectedSrc: settings,
  },
]
export const AMPLIFIER = 'AMPLIFIER'
export const DEFAULT_EMAIL = 'somnath@gmail.com'
export const DELETE_IT = 'YES, DELETE IT'
export const ARE_YOU_SURE_TO_REMOVE =
  'Are you sure you want to remove this integration?'
export const CANCEL = 'CANCEL'
export const REMOVED_INTEGRATION = 'REMOVE INTEGRATION'
export const MOCKOPTIONS = [
  'Option 1',
  'Option 2',
  'Option 3',
  'Option 4',
  'Option 5',
]
export const SELECT_TEXT = 'Select the main organization from the list below.'
export const SELECT_ORGANISATION = 'Select Organisation'

export const ADD_INTEGRATION_DATA = {
  TITLE: 'Add Integration',
  DESCRIPTION:
    'Simplify and secure user logins to Amplifier from a trusted provider. Validate that users are using Google supported MFA and engage with them to remediate issues.',
  ENTER_CREDENTIALS: 'Enter credentials',
  Base_URL: 'Base URL',
  CLIENT_ID: 'Client ID',
  CLIENT_SECRET: 'Client Secret',
  BUTTON_LABEL: 'INTEGRATE NOW',
  BASE_URL_PLACEHOLDER: 'enter your base url',
  CLIENT_ID_PLACEHOLDER: 'enter your client id',
  CLIENT_SECRET_PLACEHOLDER: 'enter your client secret',
}

export const columns = [
  { field: 'Severity', headerName: 'Severity', width: theme.spacing(28.5) },
  { field: 'Status', headerName: 'Status', width: theme.spacing(28.5) },
  { field: 'Provider', headerName: 'Provider', width: theme.spacing(40) },
  {
    field: 'Domain',
    headerName: 'Domain',
    width: theme.spacing(40),
  },
  {
    field: 'Finding',
    headerName: 'Finding',
    width: theme.spacing(49),
  },
  {
    field: 'Name',
    headerName: 'Name',
    width: theme.spacing(48),
  },
  {
    field: 'Number of Engagements',
    headerName: 'Number of Engagements',
    width: theme.spacing(56),
  },
  {
    field: 'Department',
    headerName: 'Department',
    width: theme.spacing(45),
  },
  {
    field: 'Created At',
    headerName: 'Created At',
    width: theme.spacing(56),
  },
  {
    field: 'Description',
    headerName: 'Description',
  },
]
export const ROWS_PER_PAGE = [5, 10, 20, 30]
export const ENGAGE_MODAL_DROP_DOWN_DATA = [
  { label: 'Slack', src: slack },
  { label: 'Google', src: slack },
]
export const COMPONENT_TEXT = 'COMPONENT'
export const DEFINE_EMPLOYEE_TEXT = 'Define Employee Personas'
export const WARNING_TEXT =
  'WARNING : Deleting this integration will stop syncing vulnerability data from tenable to the Amplifier platform.'
export const REMOVE_TEXT = 'REMOVE'
export const GOOGLE = 'Google'
export const SECURITY_FINDINGS = 'SECURITY FINDINGS'
export const GRAPH_VALUE = [25, 20, 15, 50.9, 45, 30]
export const TEXT_VALUE = '12'
export const FAILED_PHISHING_TEST = 'Failed Phishing Test'
export const COMPLETED = 'Completed'
