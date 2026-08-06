import { useState, useEffect } from 'react'

const STORAGE_KEY = 'patuhdata_cookie_consent'

type ConsentState = 'undecided' | 'accepted' | 'declined'

export default function CookieConsent() {
  const [state, setState] = useState<ConsentState>('undecided')
  const [visible, setVisible] = useState(false)
  const [showDetail, setShowDetail] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(timer)
    } else {
      setState(stored as ConsentState)
    }
  }, [])

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setState('accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined')
    setState('declined')
    setVisible(false)
  }

  if (!visible || state !== 'undecided') return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-xl border border-slate-200 bg-white shadow-lg">
          <div className="p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">We use cookies on this website</p>
                  <p className="mt-1 text-sm text-slate-500 leading-relaxed max-w-xl">
                    We use essential cookies to keep the site running and analytics cookies to understand how visitors use it. No personal data is sold or shared with third parties.
                  </p>

                  {showDetail && (
                    <div className="mt-4 grid sm:grid-cols-2 gap-3">
                      {[
                        {
                          name: 'Essential Cookies',
                          always: true,
                          desc: 'Required for the website to function — form submissions, navigation, and security. Cannot be disabled.',
                        },
                        {
                          name: 'Analytics Cookies',
                          always: false,
                          desc: 'Help us understand which pages are visited and how users navigate the site. Used to improve the experience.',
                        },
                      ].map((cookie) => (
                        <div key={cookie.name} className="rounded-lg border border-slate-100 bg-slate-50 p-4">
                          <div className="flex items-center justify-between mb-1.5">
                            <p className="text-xs font-bold text-slate-800">{cookie.name}</p>
                            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${cookie.always ? 'bg-slate-200 text-slate-600' : 'bg-primary-100 text-primary-700'}`}>
                              {cookie.always ? 'Always On' : 'Optional'}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 leading-relaxed">{cookie.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <button
                    onClick={() => setShowDetail(!showDetail)}
                    className="mt-3 text-xs font-medium text-primary-600 hover:text-primary-700 underline underline-offset-2"
                  >
                    {showDetail ? 'Hide details' : 'Show cookie details'}
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3 sm:justify-end">
              <button
                onClick={decline}
                className="rounded border border-slate-300 px-5 py-2 text-sm font-medium text-slate-600 transition-colors hover:border-slate-400 hover:text-slate-800"
              >
                Decline Optional
              </button>
              <button
                onClick={accept}
                className="btn-primary py-2 px-6 text-sm"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
