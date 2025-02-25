export default function AddTodo() {
  return (
    <form className="rounded-lg bg-white p-6">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <div>
          <h2 className="font-semibold text-gray-900">Workspace settings</h2>
          <p className="mt-1 text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
          </p>
        </div>
        <div className="sm:max-w-3xl md:col-span-2">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="workspace-name"
                className="block text-sm font-medium text-gray-700"
              >
                Workspace name
              </label>
              <input
                type="text"
                id="workspace-name"
                name="workspace-name"
                placeholder="Test workspace"
                className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="visibility"
                className="block text-sm font-medium text-gray-700"
              >
                Visibility
              </label>
              <select
                id="visibility"
                name="visibility"
                defaultValue="private"
                className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
              >
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="workspace-description"
                className="block text-sm font-medium text-gray-700"
              >
                Workspace description
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
        </div>
      </div>

      <div className="flex items-center justify-end space-x-4">
        <button
          type="button"
          className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
        >
          Go back
        </button>
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
        >
          Save settings
        </button>
      </div>
    </form>
  );
}
