import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Lock, 
  User, 
  Users, 
  FileText, 
  Settings,
  Plus,
  Edit,
  Trash2,
  Eye,
  EyeOff,
  Shield,
  Database,
  BarChart3
} from 'lucide-react'

function LoginForm({ onLogin }) {
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate authentication
    setTimeout(() => {
      if (credentials.username === 'admin' && credentials.password === 'admin123') {
        onLogin('admin')
      } else if (credentials.username === 'colaborador' && credentials.password === 'colab123') {
        onLogin('colaborador')
      } else {
        alert('Credenciais inválidas')
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="bg-blue-100 p-3 rounded-full w-16 h-16 mx-auto mb-4">
            <Lock className="h-10 w-10 text-blue-600" />
          </div>
          <CardTitle className="text-2xl">Área Restrita</CardTitle>
          <CardDescription>
            Faça login para acessar o painel administrativo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Usuário
              </label>
              <Input
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                placeholder="Digite seu usuário"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Senha
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  value={credentials.password}
                  onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                  placeholder="Digite sua senha"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Entrando...' : 'Entrar'}
            </Button>
          </form>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-sm mb-2">Credenciais de Teste:</h4>
            <div className="text-xs space-y-1">
              <div><strong>Admin:</strong> admin / admin123</div>
              <div><strong>Colaborador:</strong> colaborador / colab123</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function AdminDashboard({ userRole, onLogout }) {
  const [activeTab, setActiveTab] = useState('overview')

  const stats = [
    { title: 'Especialistas', value: '29', icon: Users, color: 'bg-blue-500' },
    { title: 'Termos', value: '12', icon: FileText, color: 'bg-green-500' },
    { title: 'Usuários', value: '8', icon: User, color: 'bg-purple-500' },
    { title: 'Módulos', value: '4', icon: Database, color: 'bg-orange-500' }
  ]

  const recentActivity = [
    { action: 'Novo especialista adicionado', user: 'Admin', time: '2 horas atrás' },
    { action: 'Termo atualizado', user: 'Admin', time: '4 horas atrás' },
    { action: 'Usuário criado', user: 'Admin', time: '1 dia atrás' },
    { action: 'Módulo de treinamento editado', user: 'Admin', time: '2 dias atrás' }
  ]

  if (userRole === 'colaborador') {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Área do Colaborador</h1>
            <p className="text-lg text-gray-600">Bem-vindo ao seu painel pessoal</p>
          </div>
          <Button onClick={onLogout} variant="outline">
            Sair
          </Button>
        </div>

        <Card className="bg-blue-50">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <User className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Acesso Limitado</h3>
                <p className="text-gray-600">
                  Como colaborador, você tem acesso apenas ao conteúdo de treinamento.
                  Para acessar outras funcionalidades, entre em contato com o administrador.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Progresso do Treinamento</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Módulos Concluídos</span>
                  <Badge>2/4</Badge>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '50%'}}></div>
                </div>
                <p className="text-sm text-gray-600">50% do treinamento concluído</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Acesso Rápido</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button className="w-full justify-start" variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  Continuar Treinamento
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  Consultar Especialistas
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  Consultar Termos
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Painel Administrativo</h1>
          <p className="text-lg text-gray-600">Gerencie o sistema de treinamento</p>
        </div>
        <Button onClick={onLogout} variant="outline">
          Sair
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="specialists">Especialistas</TabsTrigger>
          <TabsTrigger value="terms">Termos</TabsTrigger>
          <TabsTrigger value="users">Usuários</TabsTrigger>
          <TabsTrigger value="settings">Configurações</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-full ${stat.color}`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <p className="text-sm text-gray-600">{stat.title}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Atividade Recente</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{activity.action}</p>
                        <p className="text-xs text-gray-600">por {activity.user} • {activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ações Rápidas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full justify-start">
                    <Plus className="h-4 w-4 mr-2" />
                    Adicionar Especialista
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Plus className="h-4 w-4 mr-2" />
                    Criar Novo Termo
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <User className="h-4 w-4 mr-2" />
                    Adicionar Usuário
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Ver Relatórios
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="specialists" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Gerenciar Especialistas</h2>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Adicionar Especialista
            </Button>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="text-center py-12">
                <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Gerenciamento de Especialistas
                </h3>
                <p className="text-gray-600 mb-4">
                  Funcionalidade em desenvolvimento. Aqui você poderá adicionar, editar e remover especialistas.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="terms" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Gerenciar Termos</h2>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Adicionar Termo
            </Button>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="text-center py-12">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Gerenciamento de Termos
                </h3>
                <p className="text-gray-600 mb-4">
                  Funcionalidade em desenvolvimento. Aqui você poderá adicionar, editar e remover termos e documentos.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Gerenciar Usuários</h2>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Adicionar Usuário
            </Button>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="text-center py-12">
                <User className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Gerenciamento de Usuários
                </h3>
                <p className="text-gray-600 mb-4">
                  Funcionalidade em desenvolvimento. Aqui você poderá gerenciar usuários e suas permissões.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <h2 className="text-2xl font-bold">Configurações do Sistema</h2>

          <Card>
            <CardContent className="p-6">
              <div className="text-center py-12">
                <Settings className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Configurações
                </h3>
                <p className="text-gray-600 mb-4">
                  Funcionalidade em desenvolvimento. Aqui você poderá configurar o sistema.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export function Admin({ isLoggedIn, setIsLoggedIn }) {
  const [userRole, setUserRole] = useState(null)

  const handleLogin = (role) => {
    setUserRole(role)
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setUserRole(null)
    setIsLoggedIn(false)
  }

  if (!isLoggedIn) {
    return <LoginForm onLogin={handleLogin} />
  }

  return <AdminDashboard userRole={userRole} onLogout={handleLogout} />
}

