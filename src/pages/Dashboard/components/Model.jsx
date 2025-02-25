import PropTypes from "prop-types";

export default function Model({ setIsOpen }) {
  return (
    <>
      <div className="fixed top-0 right-0 left-0 z-50 h-full w-full bg-black opacity-80"></div>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="overflow-visible rounded-lg bg-white sm:w-4xl">
          <form action="#" method="POST">
            <div className="absolute top-0 right-0 pt-3 pr-3">
              <button
                type="button"
                className="rounded-md p-2 text-gray-500 hover:cursor-pointer hover:bg-gray-100 hover:text-gray-700"
                onClick={() => setIsOpen(false)}
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="border-b border-gray-200 px-6 py-4">
              <h3 className="font-medium text-gray-900">Add application</h3>
            </div>
            <div className="flex flex-col-reverse md:flex-row">
              <div className="flex flex-col justify-between md:w-80 md:border-r md:border-gray-200">
                <div className="flex-1 grow">
                  <div className="border-t border-gray-200 p-6 md:border-none">
                    <div className="flex items-center space-x-3">
                      <div className="inline-flex shrink-0 items-center justify-center rounded-md bg-gray-100 p-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-700"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base font-medium text-gray-900">
                          Astro Analytics
                        </h3>
                        <p className="mt-0.5 text-base text-gray-500">
                          Lorem ipsum dolor sit amet
                        </p>
                      </div>
                    </div>
                    <div className="my-6 border-t border-gray-200"></div>
                    <h4 className="text-base font-medium text-gray-900">
                      Description:
                    </h4>
                    <p className="mt-1 text-base leading-6 text-gray-500">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                    </p>
                    <h4 className="mt-6 text-base font-medium text-gray-900">
                      Supported functionality:
                    </h4>
                    <p className="mt-1 text-base leading-6 text-gray-500">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 p-6">
                  <button
                    type="button"
                    className="cursor-pointer rounded-md py-2 text-sm font-medium whitespace-nowrap text-gray-700"
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </button>
                  <button className="cursor-pointer rounded-md bg-blue-500 px-3 py-2 text-sm font-medium whitespace-nowrap text-white hover:bg-blue-600">
                    Connect
                  </button>
                </div>
              </div>
              <div className="flex-1 space-y-6 p-6 md:px-6 md:pt-6 md:pb-20">
                <div>
                  <div className="flex items-center space-x-3">
                    <div className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gray-100 text-base text-gray-700">
                      1
                    </div>
                    <label
                      htmlFor="connection"
                      className="text-base font-medium text-gray-900"
                    >
                      Choose a connection
                    </label>
                  </div>
                  <select
                    name="connection"
                    id="connection"
                    defaultValue="1"
                    className="mt-4 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="1">postgres_live</option>
                    <option value="2">postgres_test</option>
                    <option value="3">bigQuery_live</option>
                  </select>
                </div>
                <div>
                  <div className="flex items-center space-x-3">
                    <div className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gray-100 text-base text-gray-700">
                      2
                    </div>
                    <label
                      htmlFor="dataset"
                      className="text-base font-medium text-gray-900"
                    >
                      Select dataset
                    </label>
                  </div>
                  <select
                    name="dataset"
                    id="dataset"
                    defaultValue="1"
                    className="mt-4 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="1">starterkit_sales</option>
                    <option value="2">starterkit_ecommerce</option>
                    <option value="3">starterkit_logs</option>
                  </select>
                </div>
                <div>
                  <div className="flex items-center space-x-3">
                    <div className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gray-100 text-base text-gray-700">
                      3
                    </div>
                    <label
                      htmlFor="metrics"
                      className="text-base font-medium text-gray-900"
                    >
                      Select metrics to track
                    </label>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                  </p>
                  <select
                    name="metrics"
                    id="metrics"
                    defaultValue="2"
                    className="mt-4 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="1">all options</option>
                    <option value="2">log & health data</option>
                    <option value="3">product usage data</option>
                  </select>
                </div>
                <div>
                  <div className="flex items-center space-x-3">
                    <div className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gray-100 text-base text-gray-700">
                      4
                    </div>
                    <label
                      htmlFor="import-method"
                      className="text-base font-medium text-gray-900"
                    >
                      Select import method
                    </label>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                  </p>
                  <select
                    name="import-method"
                    id="import-method"
                    defaultValue="1"
                    className="mt-4 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="1">direct query</option>
                    <option value="2">import</option>
                    <option value="3">direct query (incremental load)</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

Model.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};
