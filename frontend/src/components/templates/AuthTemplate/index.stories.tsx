import { StoryFn, Meta } from '@storybook/react'
import AuthTemplate from '.'
import SignIn from '@/components/organisms/Signin'
import UploadFile from '@/components/organisms/UploadFile'
import FileContextProvider from '@/context/FileContext'

export default {
  title: 'Template/AuthTemplate',
  component: AuthTemplate,
} as Meta

const Template: StoryFn<typeof AuthTemplate> = (args) => (
  <AuthTemplate {...args} />
)

export const Default = Template.bind({})
export const SignInTemplate = Template.bind({})
SignInTemplate.args = {
  children: (
    <SignIn
      onAuthHandleClick={() => console.log('auth')}
      handleSignIn={() => console.log('hello')}
      handleSignUpNavigation={() => console.log('navClicked')}
    />
  ),
}

export const FileUploadTemplate = Template.bind({})
FileUploadTemplate.args = {
  children: (
    <FileContextProvider>
      <UploadFile />
    </FileContextProvider>
  ),
}
