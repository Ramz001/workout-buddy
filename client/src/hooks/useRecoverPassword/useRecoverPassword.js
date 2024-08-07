import { useState } from 'react'

const useRecoverPassword = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)

  const generateOTP = async (email) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(
        process.env.REACT_APP_API_URL + '/api/user/recover-password',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        }
      )
      const data = await response.json()

      if (response.ok) {
        setIsLoading(false)
        setData(data)
      } else {
        setIsLoading(false)
        setError(data.error)
        setData(null)
      }
    } catch (error) {
      setIsLoading(false)
      setError(error)
    }
  }
  return { generateOTP, error, isLoading, data }
}

export default useRecoverPassword
