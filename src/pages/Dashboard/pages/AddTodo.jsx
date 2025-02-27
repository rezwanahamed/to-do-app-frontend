export default function AddTodo() {
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
              Title
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
              htmlFor="visibility"
              className="block text-sm font-medium text-gray-700"
            >
              Priority
            </label>
            <select
              id="visibility"
              name="visibility"
              placeholder="Select priority"
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
            >
              <option value="medium">Medium</option>
              <option value="low">Low</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="col-span-full">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Due date
            </label>
            <input
              type="datetime-local"
              id="email"
              name="due-date"
              placeholder="Enter your task completion date"
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div className="col-span-full">
            <label
              htmlFor="workspace-description"
              className="block text-sm font-medium text-gray-700"
            >
              Task description
            </label>
            <textarea
              id="workspace-description"
              name="workspace-description"
              rows={4}
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
            ></textarea>
            <p className="mt-2 text-xs text-gray-500">
              Note: description provided will not be displayed externally.
            </p>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-end space-x-4">
          <button
            type="button"
            className="cursor-pointer rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-700 duration-300 hover:bg-red-600 hover:text-white"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="cursor-pointer rounded-md bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
