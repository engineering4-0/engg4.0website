import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Input, Button } from '@nextui-org/react'

const AdminGuard = () => {
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [isPasswordInvalid, setisPasswordInvalid] = useState(false)

  const handlePromptPassword = () => {
    if (password === 'password') {
      setLoggedIn(true)
    } else {
      setisPasswordInvalid(true)
      setLoggedIn(false)
    }
  }

  return loggedIn ? (
    <Outlet />
  ) : (
    <div className="flex w-full h-dvh1 flex-col flex-wrap md:flex-nowrap justify-center items-center flex-grow p-4">
      <form className="w-full flex flex-col items-center gap-4 bg-surface p-4 rounded-md md:w-1/2 lg:w-1/3">
        <Input
          type="password"
          label="Password"
          value={password}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setPassword(e.currentTarget.value)
            setisPasswordInvalid(false)
          }}
          isInvalid={isPasswordInvalid}
          errorMessage="Invalid Password"
          autoComplete="False"
          placeholder="Enter Admin Password"
        />
        <Button color="primary" onClick={handlePromptPassword}>
          Submit
        </Button>
      </form>
    </div>
  )
}

export default AdminGuard
