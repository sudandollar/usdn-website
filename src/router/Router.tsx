// src/routes/index.tsx
import HomeLayout from '@/layout/HomeLayout';
import { lazy } from 'react';

// ── Public / Marketing ────────────────────────────────────────
const Home = lazy(() => import('@/pages/home/Home'));
const WhitePaper = lazy(() => import('@/pages/whitepaper/WhitePaper'));

export const router = [
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      { path: '/', exact: true, element: <Home /> },
      { path: '/white-paper', exact: true, element: <WhitePaper /> },
    ]
  },
];