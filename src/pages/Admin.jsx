import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
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
  BarChart3,
  Search
} from 'lucide-react'
import { specialists } from '../data/specialists'
import { termsData } from '../data/terms-data'

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
          <SpecialistsManagement />
        </TabsContent>

        <TabsContent value="terms" className="space-y-6">
          <TermsManagement />
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



// Componente para gerenciar especialistas
function SpecialistsManagement() {
  const [specialistsList, setSpecialistsList] = useState(specialists)
  const [searchTerm, setSearchTerm] = useState('')
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [editingSpecialist, setEditingSpecialist] = useState(null)
  const [newSpecialist, setNewSpecialist] = useState({
    name: '',
    specialty: '',
    contact: '',
    schedulingType: 'A',
    paymentType: 'Interno',
    notes: ''
  })

  const filteredSpecialists = specialistsList.filter(specialist =>
    specialist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    specialist.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAddSpecialist = () => {
    const id = Math.max(...specialistsList.map(s => s.id)) + 1
    const specialist = {
      id,
      ...newSpecialist
    }
    setSpecialistsList([...specialistsList, specialist])
    setNewSpecialist({
      name: '',
      specialty: '',
      contact: '',
      schedulingType: 'A',
      paymentType: 'Interno',
      notes: ''
    })
    setShowAddModal(false)
    alert('Especialista adicionado com sucesso!')
  }

  const handleEditSpecialist = (specialist) => {
    setEditingSpecialist(specialist)
    setNewSpecialist({
      name: specialist.name,
      specialty: specialist.specialty,
      contact: specialist.contact,
      schedulingType: specialist.schedulingType,
      paymentType: specialist.paymentType,
      notes: specialist.notes || ''
    })
    setShowEditModal(true)
  }

  const handleUpdateSpecialist = () => {
    const updatedList = specialistsList.map(s =>
      s.id === editingSpecialist.id
        ? { ...s, ...newSpecialist }
        : s
    )
    setSpecialistsList(updatedList)
    setShowEditModal(false)
    setEditingSpecialist(null)
    setNewSpecialist({
      name: '',
      specialty: '',
      contact: '',
      schedulingType: 'A',
      paymentType: 'Interno',
      notes: ''
    })
    alert('Especialista atualizado com sucesso!')
  }

  const handleDeleteSpecialist = (id) => {
    if (confirm('Tem certeza que deseja excluir este especialista?')) {
      setSpecialistsList(specialistsList.filter(s => s.id !== id))
      alert('Especialista excluído com sucesso!')
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Gerenciar Especialistas</h2>
        <Button onClick={() => setShowAddModal(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Especialista
        </Button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          placeholder="Buscar especialistas..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Specialists List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSpecialists.map((specialist) => (
          <Card key={specialist.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{specialist.name}</CardTitle>
                  <CardDescription>{specialist.specialty}</CardDescription>
                </div>
                <div className="flex space-x-1">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEditSpecialist(specialist)}
                  >
                    <Edit className="h-3 w-3" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDeleteSpecialist(specialist.id)}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Agendamento:</span>
                  <Badge variant={specialist.schedulingType === 'A' ? 'default' : 'secondary'}>
                    {specialist.schedulingType === 'A' ? 'Agenda Própria' : 'Enviar Mensagem'}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Pagamento:</span>
                  <Badge variant={specialist.paymentType === 'Interno' ? 'default' : 'outline'}>
                    {specialist.paymentType}
                  </Badge>
                </div>
                {specialist.contact && (
                  <div className="text-sm text-gray-600">
                    <strong>Contato:</strong> {specialist.contact}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add Modal */}
      <Dialog open={showAddModal} onOpenChange={setShowAddModal}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Adicionar Novo Especialista</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">Nome</Label>
              <Input
                id="name"
                value={newSpecialist.name}
                onChange={(e) => setNewSpecialist({...newSpecialist, name: e.target.value})}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="specialty" className="text-right">Especialidade</Label>
              <Input
                id="specialty"
                value={newSpecialist.specialty}
                onChange={(e) => setNewSpecialist({...newSpecialist, specialty: e.target.value})}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="contact" className="text-right">Contato</Label>
              <Input
                id="contact"
                value={newSpecialist.contact}
                onChange={(e) => setNewSpecialist({...newSpecialist, contact: e.target.value})}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="schedulingType" className="text-right">Agendamento</Label>
              <Select value={newSpecialist.schedulingType} onValueChange={(value) => setNewSpecialist({...newSpecialist, schedulingType: value})}>
                <SelectTrigger className="col-span-3">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="A">Agenda Própria</SelectItem>
                  <SelectItem value="E.M">Enviar Mensagem</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="paymentType" className="text-right">Pagamento</Label>
              <Select value={newSpecialist.paymentType} onValueChange={(value) => setNewSpecialist({...newSpecialist, paymentType: value})}>
                <SelectTrigger className="col-span-3">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Interno">Interno</SelectItem>
                  <SelectItem value="Externo">Externo</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="notes" className="text-right">Observações</Label>
              <Textarea
                id="notes"
                value={newSpecialist.notes}
                onChange={(e) => setNewSpecialist({...newSpecialist, notes: e.target.value})}
                className="col-span-3"
                rows={3}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleAddSpecialist}>Adicionar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Modal */}
      <Dialog open={showEditModal} onOpenChange={setShowEditModal}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Editar Especialista</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-name" className="text-right">Nome</Label>
              <Input
                id="edit-name"
                value={newSpecialist.name}
                onChange={(e) => setNewSpecialist({...newSpecialist, name: e.target.value})}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-specialty" className="text-right">Especialidade</Label>
              <Input
                id="edit-specialty"
                value={newSpecialist.specialty}
                onChange={(e) => setNewSpecialist({...newSpecialist, specialty: e.target.value})}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-contact" className="text-right">Contato</Label>
              <Input
                id="edit-contact"
                value={newSpecialist.contact}
                onChange={(e) => setNewSpecialist({...newSpecialist, contact: e.target.value})}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-schedulingType" className="text-right">Agendamento</Label>
              <Select value={newSpecialist.schedulingType} onValueChange={(value) => setNewSpecialist({...newSpecialist, schedulingType: value})}>
                <SelectTrigger className="col-span-3">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="A">Agenda Própria</SelectItem>
                  <SelectItem value="E.M">Enviar Mensagem</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-paymentType" className="text-right">Pagamento</Label>
              <Select value={newSpecialist.paymentType} onValueChange={(value) => setNewSpecialist({...newSpecialist, paymentType: value})}>
                <SelectTrigger className="col-span-3">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Interno">Interno</SelectItem>
                  <SelectItem value="Externo">Externo</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-notes" className="text-right">Observações</Label>
              <Textarea
                id="edit-notes"
                value={newSpecialist.notes}
                onChange={(e) => setNewSpecialist({...newSpecialist, notes: e.target.value})}
                className="col-span-3"
                rows={3}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleUpdateSpecialist}>Salvar Alterações</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

// Componente para gerenciar termos
function TermsManagement() {
  const [termsList, setTermsList] = useState(termsData)
  const [searchTerm, setSearchTerm] = useState('')
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [editingTerm, setEditingTerm] = useState(null)
  const [newTerm, setNewTerm] = useState({
    name: '',
    category: '',
    description: '',
    importance: '',
    notes: ''
  })

  const filteredTerms = termsList.filter(term =>
    term.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    term.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAddTerm = () => {
    const id = Math.max(...termsList.map(t => t.id)) + 1
    const term = {
      id,
      ...newTerm
    }
    setTermsList([...termsList, term])
    setNewTerm({
      name: '',
      category: '',
      description: '',
      importance: '',
      notes: ''
    })
    setShowAddModal(false)
    alert('Termo adicionado com sucesso!')
  }

  const handleEditTerm = (term) => {
    setEditingTerm(term)
    setNewTerm({
      name: term.name,
      category: term.category,
      description: term.description,
      importance: term.importance || '',
      notes: term.notes || ''
    })
    setShowEditModal(true)
  }

  const handleUpdateTerm = () => {
    const updatedList = termsList.map(t =>
      t.id === editingTerm.id
        ? { ...t, ...newTerm }
        : t
    )
    setTermsList(updatedList)
    setShowEditModal(false)
    setEditingTerm(null)
    setNewTerm({
      name: '',
      category: '',
      description: '',
      importance: '',
      notes: ''
    })
    alert('Termo atualizado com sucesso!')
  }

  const handleDeleteTerm = (id) => {
    if (confirm('Tem certeza que deseja excluir este termo?')) {
      setTermsList(termsList.filter(t => t.id !== id))
      alert('Termo excluído com sucesso!')
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Gerenciar Termos</h2>
        <Button onClick={() => setShowAddModal(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Termo
        </Button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          placeholder="Buscar termos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Terms List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTerms.map((term) => (
          <Card key={term.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{term.name}</CardTitle>
                  <CardDescription>{term.category}</CardDescription>
                </div>
                <div className="flex space-x-1">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEditTerm(term)}
                  >
                    <Edit className="h-3 w-3" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDeleteTerm(term.id)}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">{term.description}</p>
                {term.importance && (
                  <div className="text-sm">
                    <strong>Importância:</strong> {term.importance}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add Modal */}
      <Dialog open={showAddModal} onOpenChange={setShowAddModal}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Adicionar Novo Termo</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="term-name" className="text-right">Nome</Label>
              <Input
                id="term-name"
                value={newTerm.name}
                onChange={(e) => setNewTerm({...newTerm, name: e.target.value})}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="term-category" className="text-right">Categoria</Label>
              <Select value={newTerm.category} onValueChange={(value) => setNewTerm({...newTerm, category: value})}>
                <SelectTrigger className="col-span-3">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Admissão">Admissão</SelectItem>
                  <SelectItem value="Cirurgia">Cirurgia</SelectItem>
                  <SelectItem value="Tomografia">Tomografia</SelectItem>
                  <SelectItem value="Diálise">Diálise</SelectItem>
                  <SelectItem value="Recusa">Recusa</SelectItem>
                  <SelectItem value="Contratos">Contratos</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="term-description" className="text-right">Descrição</Label>
              <Textarea
                id="term-description"
                value={newTerm.description}
                onChange={(e) => setNewTerm({...newTerm, description: e.target.value})}
                className="col-span-3"
                rows={3}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="term-importance" className="text-right">Importância</Label>
              <Textarea
                id="term-importance"
                value={newTerm.importance}
                onChange={(e) => setNewTerm({...newTerm, importance: e.target.value})}
                className="col-span-3"
                rows={2}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="term-notes" className="text-right">Observações</Label>
              <Textarea
                id="term-notes"
                value={newTerm.notes}
                onChange={(e) => setNewTerm({...newTerm, notes: e.target.value})}
                className="col-span-3"
                rows={2}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleAddTerm}>Adicionar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Modal */}
      <Dialog open={showEditModal} onOpenChange={setShowEditModal}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Editar Termo</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-term-name" className="text-right">Nome</Label>
              <Input
                id="edit-term-name"
                value={newTerm.name}
                onChange={(e) => setNewTerm({...newTerm, name: e.target.value})}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-term-category" className="text-right">Categoria</Label>
              <Select value={newTerm.category} onValueChange={(value) => setNewTerm({...newTerm, category: value})}>
                <SelectTrigger className="col-span-3">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Admissão">Admissão</SelectItem>
                  <SelectItem value="Cirurgia">Cirurgia</SelectItem>
                  <SelectItem value="Tomografia">Tomografia</SelectItem>
                  <SelectItem value="Diálise">Diálise</SelectItem>
                  <SelectItem value="Recusa">Recusa</SelectItem>
                  <SelectItem value="Contratos">Contratos</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-term-description" className="text-right">Descrição</Label>
              <Textarea
                id="edit-term-description"
                value={newTerm.description}
                onChange={(e) => setNewTerm({...newTerm, description: e.target.value})}
                className="col-span-3"
                rows={3}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-term-importance" className="text-right">Importância</Label>
              <Textarea
                id="edit-term-importance"
                value={newTerm.importance}
                onChange={(e) => setNewTerm({...newTerm, importance: e.target.value})}
                className="col-span-3"
                rows={2}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-term-notes" className="text-right">Observações</Label>
              <Textarea
                id="edit-term-notes"
                value={newTerm.notes}
                onChange={(e) => setNewTerm({...newTerm, notes: e.target.value})}
                className="col-span-3"
                rows={2}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleUpdateTerm}>Salvar Alterações</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

