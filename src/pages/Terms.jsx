import { useState, useMemo } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Search, 
  FileText, 
  Filter,
  Eye,
  Download,
  Info
} from 'lucide-react'
import { terms } from '../data/training-modules'
import { contractsAndTerms, importantNotes } from '../data/procedures'

export function Terms() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Get all terms from different sources
  const allTerms = useMemo(() => {
    const termsList = []
    
    // Add terms from training-modules
    Object.values(terms).forEach(category => {
      category.items.forEach(item => {
        termsList.push({
          ...item,
          category: category.category,
          source: 'training'
        })
      })
    })

    // Add contracts and terms from procedures
    Object.entries(contractsAndTerms).forEach(([key, contract]) => {
      termsList.push({
        id: `contract_${key}`,
        name: contract.title,
        description: contract.description,
        category: 'Contratos e Termos',
        source: 'procedures',
        details: contract
      })
    })

    return termsList
  }, [])

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(allTerms.map(term => term.category))]
    return ['all', ...uniqueCategories.sort()]
  }, [allTerms])

  // Filter terms
  const filteredTerms = useMemo(() => {
    return allTerms.filter(term => {
      const matchesSearch = 
        term.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        term.description.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesCategory = selectedCategory === 'all' || term.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [allTerms, searchTerm, selectedCategory])

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCategory('all')
  }

  const getCategoryColor = (category) => {
    const colors = {
      'Termos para Admissão': 'bg-blue-100 text-blue-800',
      'Termos para Cirurgia': 'bg-red-100 text-red-800',
      'Termos para Tomografia': 'bg-purple-100 text-purple-800',
      'Termos para Diálise': 'bg-green-100 text-green-800',
      'Termos de Recusa': 'bg-orange-100 text-orange-800',
      'Contratos e Termos': 'bg-gray-100 text-gray-800'
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Consulta de Termos</h1>
        <p className="text-lg text-gray-600">
          Acesse informações sobre termos, contratos e documentação
        </p>
      </div>

      <Tabs defaultValue="search" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="search">Buscar Termos</TabsTrigger>
          <TabsTrigger value="info">Informações Importantes</TabsTrigger>
        </TabsList>

        <TabsContent value="search" className="space-y-6">
          {/* Search and Filters */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Search className="h-5 w-5" />
                <span>Buscar Termos e Documentos</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Search Input */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Buscar por nome ou descrição..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Categoria
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">Todas as categorias</option>
                    {categories.slice(1).map(category => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
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
                Mostrando {filteredTerms.length} de {allTerms.length} termos
              </div>
            </CardContent>
          </Card>

          {/* Terms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTerms.map(term => (
              <Card key={term.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <FileText className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{term.name}</CardTitle>
                        <Badge className={`mt-1 ${getCategoryColor(term.category)}`}>
                          {term.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  {/* Description */}
                  <p className="text-sm text-gray-700">{term.description}</p>

                  {/* Additional Details for Contracts */}
                  {term.details && (
                    <div className="space-y-2">
                      {term.details.keyPoints && (
                        <div>
                          <h4 className="font-semibold text-sm text-gray-700 mb-1">Pontos Principais:</h4>
                          <ul className="text-xs text-gray-600 space-y-1">
                            {term.details.keyPoints.slice(0, 2).map((point, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                <span>{point}</span>
                              </li>
                            ))}
                            {term.details.keyPoints.length > 2 && (
                              <li className="text-gray-500">+{term.details.keyPoints.length - 2} pontos adicionais</li>
                            )}
                          </ul>
                        </div>
                      )}

                      {term.details.points && (
                        <div>
                          <h4 className="font-semibold text-sm text-gray-700 mb-1">Informações:</h4>
                          <ul className="text-xs text-gray-600 space-y-1">
                            {term.details.points.map((point, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" className="flex-1">
                      <Eye className="h-4 w-4 mr-2" />
                      Visualizar
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredTerms.length === 0 && (
            <Card>
              <CardContent className="text-center py-12">
                <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Nenhum termo encontrado
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
        </TabsContent>

        <TabsContent value="info" className="space-y-6">
          {/* Important Notes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Info className="h-5 w-5" />
                <span>Informações Importantes</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-800 mb-2">Cópias de Documentos</h3>
                <p className="text-yellow-700 text-sm">{importantNotes.termCopies}</p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-800 mb-2">Validação de Tutor</h3>
                <p className="text-red-700 text-sm">{importantNotes.tutorValidation}</p>
              </div>
            </CardContent>
          </Card>

          {/* Categories Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Categorias de Termos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categories.slice(1).map(category => {
                  const categoryTerms = allTerms.filter(term => term.category === category)
                  return (
                    <div key={category} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{category}</h3>
                        <Badge className={getCategoryColor(category)}>
                          {categoryTerms.length} termos
                        </Badge>
                      </div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {categoryTerms.slice(0, 3).map(term => (
                          <li key={term.id} className="flex items-center">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                            {term.name}
                          </li>
                        ))}
                        {categoryTerms.length > 3 && (
                          <li className="text-gray-500 ml-4">
                            +{categoryTerms.length - 3} termos adicionais
                          </li>
                        )}
                      </ul>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

