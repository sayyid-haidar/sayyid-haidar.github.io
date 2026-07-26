import { Route, Routes } from 'react-router-dom'
import { AppShell } from './components/layout/AppShell'
import { HomePage } from './pages/HomePage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ProjectPage } from './pages/ProjectPage'
import { ContentIndexPage } from './pages/ContentIndexPage'
import { ContentPage } from './pages/ContentPage'
import { NotFoundPage } from './pages/NotFoundPage'

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/:slug" element={<ProjectPage />} />
        <Route
          path="cheatsheets"
          element={<ContentIndexPage collection="cheatsheets" />}
        />
        <Route
          path="cheatsheets/:slug"
          element={<ContentPage collection="cheatsheets" />}
        />
        <Route path="writing" element={<ContentIndexPage collection="writing" />} />
        <Route path="writing/:slug" element={<ContentPage collection="writing" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
