import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { 
  GraduationCap, 
  Users, 
  FileText, 
  Settings, 
  Home,
  Stethoscope 
} from 'lucide-react'

export function Header() {
  const location = useLocation()

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Stethoscope className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">UFAPE Veterinária</h1>
              <p className="text-sm text-gray-600">Sistema de Treinamento</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            <Button
              variant={isActive('/') ? 'default' : 'ghost'}
              asChild
              className="flex items-center space-x-2"
            >
              <Link to="/">
                <Home className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
            </Button>

            <Button
              variant={isActive('/training') ? 'default' : 'ghost'}
              asChild
              className="flex items-center space-x-2"
            >
              <Link to="/training">
                <GraduationCap className="h-4 w-4" />
                <span>Treinamento</span>
              </Link>
            </Button>

            <Button
              variant={isActive('/specialists') ? 'default' : 'ghost'}
              asChild
              className="flex items-center space-x-2"
            >
              <Link to="/specialists">
                <Users className="h-4 w-4" />
                <span>Especialistas</span>
              </Link>
            </Button>

            <Button
              variant={isActive('/terms') ? 'default' : 'ghost'}
              asChild
              className="flex items-center space-x-2"
            >
              <Link to="/terms">
                <FileText className="h-4 w-4" />
                <span>Termos</span>
              </Link>
            </Button>

            <Button
              variant={isActive('/admin') ? 'default' : 'ghost'}
              asChild
              className="flex items-center space-x-2"
            >
              <Link to="/admin">
                <Settings className="h-4 w-4" />
                <span>Admin</span>
              </Link>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

