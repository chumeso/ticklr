import '@/styles/globals.css'

import { QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'

import { LayoutPage } from '@/common/components/Layout/LayoutPage'
import NetworkContextProvider from '@/common/context/NetworkContextProvider'
import queryClient from '@/config/queryClient'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <>
      {router.pathname === '/' ? (
        <Component {...pageProps} />
      ) : (
        <QueryClientProvider client={queryClient}>
          <NetworkContextProvider>
            <LayoutPage>
              <Component {...pageProps} />
            </LayoutPage>
          </NetworkContextProvider>
        </QueryClientProvider>
      )}
    </>
  )
}
