import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../features/user/userSlice'

export const useLogIn = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()

  const logIn = async (email, password) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(
        process.env.REACT_APP_API_URL + '/api/user/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        }
      )
      const data = await response.json()

      if (response.ok) {
        dispatch(login(data))
        setIsLoading(false)
      } else {
        setIsLoading(false)
        setError(data.error)
      }
    } catch (error) {
      setIsLoading(false)
      setError(error)
    }
  }
  return { logIn, isLoading, error }
}
