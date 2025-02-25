const GoogleIcon = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M3.06364 7.50914C4.70909 4.24092 8.09084 2 12 2C14.6954 2 16.959 2.99095 18.6909 4.60455L15.8227 7.47274C14.7864 6.48185 13.4681 5.97727 12 5.97727C9.39542 5.97727 7.19084 7.73637 6.40455 10.1C6.2045 10.7 6.09086 11.3409 6.09086 12C6.09086 12.6591 6.2045 13.3 6.40455 13.9C7.19084 16.2636 9.39542 18.0227 12 18.0227C13.3454 18.0227 14.4909 17.6682 15.3864 17.0682C16.4454 16.3591 17.15 15.3 17.3818 14.05H12V10.1818H21.4181C21.5364 10.8363 21.6 11.5182 21.6 12.2273C21.6 15.2727 20.5091 17.8363 18.6181 19.5773C16.9636 21.1046 14.7 22 12 22C8.09084 22 4.70909 19.7591 3.06364 16.4909C2.38638 15.1409 2 13.6136 2 12C2 10.3864 2.38638 8.85911 3.06364 7.50914Z" />
  </svg>
);

function LoginForm() {
  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-4 py-10 lg:px-6 font-geist">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h3 className="text-center text-lg font-semibold text-gray-900">
          Log in or create account
        </h3>

        <form action="#" method="post" className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input 
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              placeholder="john@company.com"
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="password"
              placeholder="password"
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full rounded-md cursor-pointer duration-200 bg-blue-500 py-2 text-center text-sm font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
          >
            Sign in
          </button>
        </form>

        <div className="relative mt-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">
              or with
            </span>
          </div>
        </div>

        <a
          href="#"
          className="mt-6 flex w-full items-center justify-center space-x-2 rounded-md border border-gray-300 bg-white py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
        >
          <GoogleIcon className="h-5 w-5" aria-hidden={true} />
          <span>Sign in with Google</span>
        </a>

        <p className="mt-4 text-xs text-gray-500">
          By signing in, you agree to our{" "}
          <a href="#" className="underline underline-offset-4">
            terms of service
          </a>{" "}
          and{" "}
          <a href="#" className="underline underline-offset-4">
            privacy policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
