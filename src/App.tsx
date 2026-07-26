import { lazy, Suspense, type ReactNode } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppShell } from './components/layout/AppShell'
import { HomePage } from './pages/HomePage'

const ProjectsPage = lazy(() =>
  import('./pages/ProjectsPage').then((module) => ({ default: module.ProjectsPage })),
)
const ProjectPage = lazy(() =>
  import('./pages/ProjectPage').then((module) => ({ default: module.ProjectPage })),
)
const ContentIndexPage = lazy(() =>
  import('./pages/ContentIndexPage').then((module) => ({
    default: module.ContentIndexPage,
  })),
)
const ContentPage = lazy(() =>
  import('./pages/ContentPage').then((module) => ({ default: module.ContentPage })),
)
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage').then((module) => ({ default: module.NotFoundPage })),
)

function DeferredPage({ children }: { children: ReactNode }) {
  return (
    <Suspense
      fallback={
        <div
          className="mx-auto min-h-[60vh] w-full max-w-6xl px-6 py-24 text-sm text-muted sm:px-8 lg:px-12"
          role="status"
        >
          Loading page…
        </div>
      }
    >
      {children}
    </Suspense>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<HomePage />} />
        <Route
          path="projects"
          element={
            <DeferredPage>
              <ProjectsPage />
            </DeferredPage>
          }
        />
        <Route
          path="projects/:slug"
          element={
            <DeferredPage>
              <ProjectPage />
            </DeferredPage>
          }
        />
        <Route
          path="cheatsheets"
          element={
            <DeferredPage>
              <ContentIndexPage collection="cheatsheets" />
            </DeferredPage>
          }
        />
        <Route
          path="cheatsheets/:slug"
          element={
            <DeferredPage>
              <ContentPage collection="cheatsheets" />
            </DeferredPage>
          }
        />
        <Route
          path="writing"
          element={
            <DeferredPage>
              <ContentIndexPage collection="writing" />
            </DeferredPage>
          }
        />
        <Route
          path="writing/:slug"
          element={
            <DeferredPage>
              <ContentPage collection="writing" />
            </DeferredPage>
          }
        />
        <Route
          path="*"
          element={
            <DeferredPage>
              <NotFoundPage />
            </DeferredPage>
          }
        />
      </Route>
    </Routes>
  )
}
