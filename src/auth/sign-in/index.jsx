import { SignIn } from '@clerk/clerk-react'
import React from 'react'

function SignInPage() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center', // Horizontal center
      alignItems: 'center',     // Vertical center
      height: '100vh'            // Full viewport height
    }}>
      <SignIn />
    </div>
  )
}

export default SignInPage
