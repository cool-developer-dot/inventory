import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export function SignIn() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 pt-24">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center gap-2.5 mb-6 hover:no-underline">
            <div className="w-10 h-10 rounded-lg bg-navy-800 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-xl font-extrabold text-navy-800">SmartStock</span>
          </Link>
          <h1 className="text-3xl font-extrabold text-navy-800 mb-2">Welcome back</h1>
          <p className="text-neutral-500">Sign in to your account to continue</p>
        </div>

        <form className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-navy-800 mb-2">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white text-navy-800 placeholder:text-neutral-400 focus:border-navy-600 focus:ring-2 focus:ring-navy-600/15 outline-none transition-all text-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-navy-800 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white text-navy-800 placeholder:text-neutral-400 focus:border-navy-600 focus:ring-2 focus:ring-navy-600/15 outline-none transition-all text-sm"
            />
          </div>
          <button
            type="submit"
            className={cn(
              'w-full px-6 py-3.5 text-base font-semibold text-white',
              'bg-navy-800 rounded-xl',
              'shadow-sm shadow-navy-800/10 hover:bg-navy-hover hover:shadow-md hover:shadow-navy-800/15',
              'transition-all duration-200 cursor-pointer',
            )}
          >
            Sign In
            <ArrowRight className="w-5 h-5 ml-2 inline-block" strokeWidth={2} />
          </button>
        </form>

        <p className="text-center text-sm text-neutral-500 mt-8">
          Don&apos;t have an account?{' '}
          <Link to="/signup" className="font-semibold text-navy-800 hover:text-navy-hover">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
