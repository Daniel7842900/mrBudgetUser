console.log("signup called...");

function Signup() {
  return (
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        {/**if(errFlash.length > 0) { */}
        <div class="relative flex justify-center py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 items-center">
          <span> error message here</span>
        </div>
        <div>
          <img
            class="mx-auto h-28 w-auto"
            src="../images/pepe.png"
            alt="Mr.pepe"
          />
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
        </div>
        <form class="mt-8 space-y-6" action="/signup" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm -space-y-px">
            <div class="flex">
              <label for="firstname" class="sr-only">
                First name
              </label>
              <input
                id="firstname"
                name="firstname"
                type="text"
                autocomplete="given-name"
                required
                class="appearance-none rounded-none relative block w-1/2 px-3 py-2 my-3 mr-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="First name"
              />
              <label for="lastname" class="sr-only">
                Last name
              </label>
              <input
                id="lastname"
                name="lastname"
                type="text"
                autocomplete="family-name"
                required
                class="appearance-none rounded-none relative block w-1/2 px-3 py-2 my-3 ml-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Last name"
              />
            </div>

            <div>
              <label for="email_address" class="sr-only">
                Email address
              </label>
              <input
                id="email_address"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 my-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label for="password" class="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 my-6 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              id="submit_btn"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <i class="fas fa-check"></i>
              </span>
              <span>Submit</span>
            </button>
          </div>
          <div class="text-center">
            <span class="text-gray-400">
              Have an account?
              <a href="/login" class="text-blue-400">
                Sign in
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
