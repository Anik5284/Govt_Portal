"use client";

import { useState } from "react";

export default function AuthPage() {
  const [openLogin, setOpenLogin] = useState(true); // Login opens by default
  const [openSignup, setOpenSignup] = useState(false);
  const [openForgot, setOpenForgot] = useState(false);

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800">
      {/* Login Popup (open by default) */}
      {openLogin && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="rounded-3xl p-10 shadow-2xl bg-white w-full max-w-md">
            <h2 className="text-3xl font-bold text-center text-blue-700">
              Welcome Back
            </h2>
            <p className="text-center text-gray-500 mt-2">
              Login to continue to your account
            </p>
            <form className="space-y-6 mt-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••"
                  required
                  className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-200">
                Login
              </button>
            </form>
            <div className="flex justify-between text-sm text-blue-600 mt-5">
              <button
                type="button"
                className="hover:underline"
                onClick={() => {
                  setOpenLogin(false);
                  setOpenSignup(true);
                }}
              >
                Create new account
              </button>
              <button
                type="button"
                className="hover:underline"
                onClick={() => {
                  setOpenLogin(false);
                  setOpenForgot(true);
                }}
              >
                Forgot password?
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Signup Popup */}
      {openSignup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="rounded-3xl p-10 shadow-2xl bg-white w-full max-w-md">
            <h2 className="text-3xl font-bold text-center text-blue-700">
              Create Account
            </h2>
            <p className="text-center text-gray-500 mt-2">
              Fill in your details to sign up
            </p>
            <form className="space-y-6 mt-6">
              <div>
                <label
                  htmlFor="fullname"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  id="fullname"
                  type="text"
                  placeholder="John Doe"
                  required
                  className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="signup-email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="signup-email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="signup-password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="signup-password"
                  type="password"
                  placeholder="••••••"
                  required
                  className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition duration-200">
                Create Account
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Forgot Password Popup */}
      {openForgot && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="rounded-3xl p-10 shadow-2xl bg-white w-full max-w-md">
            <h2 className="text-3xl font-bold text-center text-blue-700">
              Reset Password
            </h2>
            <p className="text-center text-gray-500 mt-2">
              Enter your email to reset your password
            </p>
            <form className="space-y-6 mt-6">
              <div>
                <label
                  htmlFor="forgot-email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="forgot-email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition duration-200">
                Send Reset Link
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
