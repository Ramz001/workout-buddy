import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-2 text-wrap px-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
        className='w-40 md:w-64 h-40 md:h-64 fill-slate-700 dark:fill-slate-500'
      >
        <path
          d="M620-520q25 0 42.5-17.5T680-580q0-25-17.5-42.5T620-640q-25 0-42.5 17.5T560-580q0 25 17.5 42.5T620-520Zm-280 0q25 0 42.5-17.5T400-580q0-25-17.5-42.5T340-640q-25 0-42.5 17.5T280-580q0 25 17.5 42.5T340-520Zm140 100q-68 0-123.5 38.5T276-280h66q22-37 58.5-58.5T480-360q43 0 79.5 21.5T618-280h66q-25-63-80.5-101.5T480-420Zm0 340q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z"
        />
      </svg>
      <h1 className="text-3xl font-semibold text-red-500 md:text-4xl">
        Error 404!
      </h1>
      <p className="text-base md:text-lg dark:text-slate-200">
        Unfortunately, the page you are requesting is not found.
      </p>
      <p className="text-sm text-slate-700 md:text-base dark:text-slate-300">
        Please press this button to return to the home page.
      </p>
      <Link
        to="/"
        className="mt-2 flex justify-center gap-1 rounded-xl border border-slate-600 
        px-4 py-2 hover:bg-slate-600 hover:text-slate-100 dark:text-slate-100"
      >
        Go Back
      </Link>
    </div>
  )
}

export default Error
