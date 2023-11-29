import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './authProvider/AuthProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-awesome-button/dist/styles.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster />
    <SkeletonTheme baseColor="#82828233" highlightColor="#82828233">
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={Routes} />
        </AuthProvider>
      </QueryClientProvider>
    </SkeletonTheme>
  </React.StrictMode>,
)
