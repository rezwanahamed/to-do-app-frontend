export default function UserDetails() {
  return (
    <div className="sm:mx-auto sm:max-w-2xl md:mt-20">
      <h3 className="text-lg font-semibold text-gray-900">
        Register to workspace
      </h3>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        Take a few moments to register for your company&apos;s workspace
      </p>
      <form action="#" method="post" className="mt-8">
        <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
          <div className="col-span-full sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-700"
            >
              First name
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="first-name"
              name="first-name"
              autoComplete="given-name"
              placeholder="First name"
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium text-gray-700"
            >
              Last name
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              autoComplete="family-name"
              placeholder="Last name"
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div className="col-span-full">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
              <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              placeholder="Email"
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div className="col-span-full">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              autoComplete="street-address"
              placeholder="Address"
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="col-span-full sm:col-span-2">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              autoComplete="address-level2"
              placeholder="City"
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="col-span-full sm:col-span-2">
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-700"
            >
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              autoComplete="address-level1"
              placeholder="State"
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="col-span-full sm:col-span-2">
            <label
              htmlFor="postal-code"
              className="block text-sm font-medium text-gray-700"
            >
              Postal code
            </label>
            <input
              type="text"
              id="postal-code"
              name="postal-code"
              autoComplete="postal-code"
              placeholder="Postal code"
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>
        <div className="flex items-center justify-end space-x-4 mt-10">
          <button
            type="button"
            className="rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}