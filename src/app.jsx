import React, { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout.jsx';
import Loader from './Components/Loader.jsx';

const Background = lazy(() => import('./Components/background.jsx'));
const About = lazy(() => import('./Components/about.jsx'));
const Contact = lazy(() => import('./Components/contact.jsx'));
const Experience = lazy(() => import('./Components/Experience.jsx'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: (
          <Suspense fallback={<Loader />}>
            <Background />
          </Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: 'experience',
        element: (
          <Suspense fallback={<Loader />}>
            <Experience />
          </Suspense>
        ),
      },
      {
        path: 'contact',
        element: (
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
