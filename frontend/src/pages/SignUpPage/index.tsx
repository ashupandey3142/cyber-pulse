import SignUp from '@/components/organisms/SignUp'
import AuthTemplate from '@/components/templates/AuthTemplate'
import { createUser, fetchUserDataByEmail } from '@/services'
import { FormDataProps } from '@/utils/interfaces'
import React from 'react'

const SignUpPage = () => {
  const navigateToSignIn = () => {
    //will navaigate to signIn Page At the time of integration
  }
  const handleSignUp = async (res: FormDataProps) => {
    const data = {
      email: res.email,
      password: res.password,
    }
    const userData = await fetchUserDataByEmail(data.email)

    if (!userData.length) {
      await createUser(data)
      //Todo :should show popup message toaster
    } else {
      alert('user already exists')
      //Todo :should give toaster message user already exists
    }
  }
  return (
    <AuthTemplate>
      {
        <SignUp
          handleSignUp={handleSignUp}
          handleSignInNavigation={navigateToSignIn}
        />
      }
    </AuthTemplate>
  )
}

export default SignUpPage
