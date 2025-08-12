import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  GraduationCap, 
  Users, 
  FileText, 
  Settings,
  BookOpen,
  Search,
  ClipboardList,
  Shield
} from 'lucide-react'

export function Dashboard() {
  const cards = [
    {
      title: "Treinamento Online",
      description: "Acesse os módulos de treinamento para novos colaboradores",
      icon: GraduationCap,
      href: "/training",
      color: "bg-blue-500",
      modules: [
        "Introdução e Rotinas Diárias",
        "Especialistas e Agendamentos", 
        "Termos e Documentação",
        "Comunicação e Mensagens Padrão"
      ]
    },
    {
      title: "Consulta de Especialistas",
      description: "Busque informações sobre especialistas e suas especialidades",
      icon: Users,
      href: "/specialists",
      color: "bg-green-500",
      features: [
        "Busca por nome ou especialidade",
        "Informações de contato",
        "Tipo de agendamento",
        "Forma de pagamento"
      ]
    },
    {
      title: "Consulta de Termos",
      description: "Acesse informações sobre termos e documentação",
      icon: FileText,
      href: "/terms",
      color: "bg-purple-500",
      categories: [
        "Termos para Admissão",
        "Termos para Cirurgia",
        "Termos para Tomografia",
        "Termos para Diálise"
      ]
    },
    {
      title: "Painel Administrativo",
      description: "Gerencie especialistas, termos e configurações do sistema",
      icon: Settings,
      href: "/admin",
      color: "bg-orange-500",
      access: "Acesso restrito - Login necessário"
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Sistema de Treinamento UFAPE Veterinária
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Plataforma completa para treinamento de colaboradores, consulta de especialistas 
          e gerenciamento de termos e documentação
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-500" />
              <div>
                <p className="text-2xl font-bold">4</p>
                <p className="text-sm text-gray-600">Módulos de Treinamento</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Users className="h-8 w-8 text-green-500" />
              <div>
                <p className="text-2xl font-bold">29</p>
                <p className="text-sm text-gray-600">Especialistas</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <ClipboardList className="h-8 w-8 text-purple-500" />
              <div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-gray-600">Tipos de Termos</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Search className="h-8 w-8 text-orange-500" />
              <div>
                <p className="text-2xl font-bold">∞</p>
                <p className="text-sm text-gray-600">Consultas Rápidas</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {cards.map((card, index) => {
          const Icon = card.icon
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className={`p-3 rounded-lg ${card.color}`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{card.title}</CardTitle>
                    <CardDescription className="text-base">
                      {card.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {card.modules && (
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">Módulos:</h4>
                    <ul className="space-y-1">
                      {card.modules.map((module, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                          {module}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {card.features && (
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">Funcionalidades:</h4>
                    <ul className="space-y-1">
                      {card.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {card.categories && (
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">Categorias:</h4>
                    <ul className="space-y-1">
                      {card.categories.map((category, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                          {category}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {card.access && (
                  <div className="flex items-center space-x-2 text-sm text-orange-600">
                    <Shield className="h-4 w-4" />
                    <span>{card.access}</span>
                  </div>
                )}

                <Button asChild className="w-full mt-4">
                  <Link to={card.href}>
                    Acessar {card.title}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Footer Info */}
      <Card className="bg-gradient-to-r from-blue-50 to-green-50">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Bem-vindo ao Sistema de Treinamento
          </h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Este sistema foi desenvolvido para facilitar o treinamento de novos colaboradores 
            da UFAPE Veterinária, fornecendo acesso rápido a informações essenciais sobre 
            rotinas, especialistas, termos e procedimentos.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

