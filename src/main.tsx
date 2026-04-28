import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Faith } from './pages/Faith'
import { Leadership } from './pages/Leadership'
import { Ministries } from './pages/Ministries'
import { Sermons } from './pages/Sermons'
import { Events } from './pages/Events'
import { Donate } from './pages/Donate'
import { Contact } from './pages/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'faith', Component: Faith },
      { path: 'leadership', Component: Leadership },
      { path: 'ministries', Component: Ministries },
      { path: 'sermons', Component: Sermons },
      { path: 'events', Component: Events },
      { path: 'donate', Component: Donate },
      { path: 'contact', Component: Contact },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
