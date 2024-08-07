import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useVerifyCode from '../../hooks/useVerifyCode/useVerifyCode'
import useRecoverPassword from '../../hooks/useRecoverPassword/useRecoverPassword'

const VerifyEmail = ({ temp, setTemp }) => {
  const [code, setCode] = useState('')
  const { verifyCode, isLoading, error, data } = useVerifyCode()
  const { generateOTP } = useRecoverPassword()

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await verifyCode(code, temp._id)
    setCode('')
  }

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault()
      event.returnValue = ''
    }
    if (data) {
      setTemp((prevState) => ({ ...prevState, token: data.token }))
      return navigate('/reset-password')
    }
    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [data, navigate, setTemp])

  const handleResend = async () => {
    await generateOTP(temp.email)
  }

  return (
    <section
      className="flex min-h-svh items-center justify-center bg-slate-100 px-4 text-slate-900 
    md:min-h-screen dark:bg-slate-900 dark:text-slate-200"
    >
      <form
        className="flex max-w-80 flex-col gap-2 rounded-xl bg-slate-200 px-4 
      py-6 md:max-w-[28rem] md:px-6 md:py-8 dark:bg-slate-800"
      >
        <h2 className="mb-4 text-lg font-semibold tracking-wide md:text-xl">
          OTP Code Verification
        </h2>
        <div className="rounded-md bg-green-600 bg-opacity-25 p-2 text-sm md:text-base">
          <p>We've sent a verification code to your email - {temp.email}</p>
        </div>
        <input
          type="number"
          placeholder="Enter Code"
          name="code"
          maxLength={6}
          className="auth-input mt-2 h-12 w-full"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button
          type="submit"
          className="auth-submit-button mt-4"
          onClick={(e) => handleSubmit(e)}
          disabled={isLoading}
        >
          Submit
        </button>
        <p className="mt-1 text-center text-sm text-slate-600 dark:text-slate-400">
          Can't get OTP?
          <button
            type="button"
            onClick={handleResend}
            className="ml-1 cursor-pointer underline"
          >
            Resend
          </button>
        </p>
        {error && (
          <div
            className="mt-2 max-w-96 rounded-md border border-red-600 bg-slate-100 
          p-2 text-sm font-bold capitalize text-red-600 dark:bg-slate-800"
          >
            {error}!
          </div>
        )}
      </form>
    </section>
  )
}

export default VerifyEmail
