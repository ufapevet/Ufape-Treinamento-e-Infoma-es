import { useState, useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Search, 
  User, 
  Phone, 
  Calendar,
  CreditCard,
  Filter,
  MessageSquare,
  CalendarCheck
} from 'lucide-react'
import { specialists } from '../data/specialists'

export function Specialists() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSpecialty, setSelectedSpecialty] = useState('')
  const [selectedScheduleType, setSelectedScheduleType] = useState('')

  // Get unique specialties
  const specialties = useMemo(() => {
    const uniqueSpecialties = [...new Set(specialists.map(s => s.specialty))]
    return uniqueSpecialties.sort()
  }, [])

  // Filter specialists
  const filteredSpecialists = useMemo(() => {
    return specialists.filter(specialist => {
      const matchesSearch = 
        specialist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        specialist.specialty.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesSpecialty = !selectedSpecialty || specialist.specialty === selectedSpecialty
      const matchesScheduleType = !selectedScheduleType || specialist.scheduleType === selectedScheduleType

      return matchesSearch && matchesSpecialty && matchesScheduleType
    })
  }, [searchTerm, selectedSpecialty, selectedScheduleType])

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedSpecialty('')
    setSelectedScheduleType('')
  }

  const getScheduleTypeInfo = (type) => {
    if (type === 'A') {
      return {
        label: 'Agenda Própria',
        icon: CalendarCheck,
        color: 'bg-green-100 text-green-800'
      }
    } else {
      return {
        label: 'Enviar Mensagem',
        icon: MessageSquare,
        color: 'bg-blue-100 text-blue-800'
      }
    }
  }

  const getPaymentTypeInfo = (type) => {
    if (type === 'internal') {
      return {
        label: 'Interno - Parcelável',
        color: 'bg-green-100 text-green-800'
      }
    } else {
      return {
        label: 'Externo - À Vista',
        color: 'bg-orange-100 text-orange-800'
      }
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Consulta de Especialistas</h1>
        <p className="text-lg text-gray-600">
          Encontre informações sobre especialistas, suas especialidades e formas de agendamento
        </p>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Search className="h-5 w-5" />
            <span>Buscar Especialistas</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Buscar por nome ou especialidade..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Especialidade
              </label>
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Todas as especialidades</option>
                {specialties.map(specialty => (
                  <option key={specialty} value={specialty}>
                    {specialty}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tipo de Agendamento
              </label>
              <select
                value={selectedScheduleType}
                onChange={(e) => setSelectedScheduleType(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Todos os tipos</option>
                <option value="A">Agenda Própria</option>
                <option value="EM">Enviar Mensagem</option>
              </select>
            </div>

            <div className="flex items-end">
              <Button 
                variant="outline" 
                onClick={clearFilters}
                className="w-full"
              >
                <Filter className="h-4 w-4 mr-2" />
                Limpar Filtros
              </Button>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-sm text-gray-600">
            Mostrando {filteredSpecialists.length} de {specialists.length} especialistas
          </div>
        </CardContent>
      </Card>

      {/* Specialists Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSpecialists.map(specialist => {
          const scheduleInfo = getScheduleTypeInfo(specialist.scheduleType)
          const paymentInfo = getPaymentTypeInfo(specialist.paymentType)
          const ScheduleIcon = scheduleInfo.icon

          return (
            <Card key={specialist.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <User className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{specialist.name}</CardTitle>
                      <p className="text-sm text-gray-600">{specialist.specialty}</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-3">
                {/* CRMV */}
                {specialist.crmv && (
                  <div className="flex items-center space-x-2 text-sm">
                    <Badge variant="outline">{specialist.crmv}</Badge>
                  </div>
                )}

                {/* Schedule Type */}
                <div className="flex items-center space-x-2">
                  <ScheduleIcon className="h-4 w-4 text-gray-500" />
                  <Badge className={scheduleInfo.color}>
                    {scheduleInfo.label}
                  </Badge>
                </div>

                {/* Payment Type */}
                <div className="flex items-center space-x-2">
                  <CreditCard className="h-4 w-4 text-gray-500" />
                  <Badge className={paymentInfo.color}>
                    {paymentInfo.label}
                  </Badge>
                </div>

                {/* Phone */}
                {specialist.phone && (
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Phone className="h-4 w-4" />
                    <span>{specialist.phone}</span>
                  </div>
                )}

                {/* Notes */}
                {specialist.notes && (
                  <div className="bg-gray-50 p-3 rounded-md">
                    <p className="text-sm text-gray-700">{specialist.notes}</p>
                  </div>
                )}

                {/* Action Button */}
                <Button 
                  className="w-full mt-4" 
                  variant={specialist.scheduleType === 'A' ? 'default' : 'outline'}
                >
                  {specialist.scheduleType === 'A' ? (
                    <>
                      <Calendar className="h-4 w-4 mr-2" />
                      Agendar Diretamente
                    </>
                  ) : (
                    <>
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* No Results */}
      {filteredSpecialists.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Nenhum especialista encontrado
            </h3>
            <p className="text-gray-600 mb-4">
              Tente ajustar os filtros ou termo de busca
            </p>
            <Button onClick={clearFilters}>
              Limpar Filtros
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Legend */}
      <Card className="bg-blue-50">
        <CardHeader>
          <CardTitle className="text-lg">Legenda</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-sm mb-2">Tipos de Agendamento:</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CalendarCheck className="h-4 w-4 text-green-600" />
                  <span className="text-sm"><strong>A:</strong> Agenda própria em sistema</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageSquare className="h-4 w-4 text-blue-600" />
                  <span className="text-sm"><strong>E.M:</strong> Enviar mensagem para agendamento</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-2">Tipos de Pagamento:</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm"><strong>Interno:</strong> Permite parcelamento e desconto</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-sm"><strong>Externo:</strong> Pagamento à vista, sem desconto</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

