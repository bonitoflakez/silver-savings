import { useState } from "react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <div className="mt-64 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {isLogin ? "Sign in" : "Sign up"}
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[--ac-4] focus:border-[--ac-4] focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[--ac-4] focus:border-[--ac-4] focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div
            className={`${
              isLogin ? `flex items-center justify-between` : `hidden`
            }`}
          >
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[--ac-4] focus:ring-[--ac-4] border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                // change this `/auth` with actual code implemented
                href="/auth"
                className="font-medium text-[--ac-3] hover:text-[--ac-4]"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-[--ac-1] bg-[--ac-4] hover:bg-[--ac-5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[--ac-5]"
            >
              {isLogin ? "Sign in" : "Sign up"}
            </button>
          </div>
        </form>
        <div className="text-center">
          <p className="text-sm">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              className="ml-1 font-medium text-[--ac-4] hover:text-[--ac-3] focus:outline-none"
              onClick={toggleMode}
            >
              {isLogin ? "Sign up" : "Sign in"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
