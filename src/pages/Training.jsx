import { useState, useRef, useEffect } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  BookOpen, 
  CheckCircle, 
  Clock, 
  ArrowRight,
  Users,
  FileText,
  MessageSquare,
  ChevronRight,
  Play
} from 'lucide-react'
import { trainingModules } from '../data/training-modules'

function TrainingOverview() {
  const modules = Object.values(trainingModules)
  const [completedModules, setCompletedModules] = useState(new Set())

  const toggleModuleCompletion = (moduleId) => {
    const newCompleted = new Set(completedModules)
    if (newCompleted.has(moduleId)) {
      newCompleted.delete(moduleId)
    } else {
      newCompleted.add(moduleId)
    }
    setCompletedModules(newCompleted)
  }

  const progressPercentage = (completedModules.size / modules.length) * 100

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Treinamento Online</h1>
        <p className="text-lg text-gray-600">
          Módulos de treinamento para novos colaboradores da UFAPE Veterinária
        </p>
      </div>

      {/* Progress Card */}
      <Card className="bg-gradient-to-r from-blue-50 to-green-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BookOpen className="h-5 w-5" />
            <span>Progresso do Treinamento</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">
              {completedModules.size} de {modules.length} módulos concluídos
            </span>
            <span className="text-sm text-gray-600">
              {Math.round(progressPercentage)}%
            </span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </CardContent>
      </Card>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {modules.map((module) => {
          const isCompleted = completedModules.has(module.id)
          const sectionCount = module.sections ? Object.keys(module.sections).length : 1

          return (
            <Card key={module.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-full ${isCompleted ? 'bg-green-100' : 'bg-blue-100'}`}>
                      {isCompleted ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <BookOpen className="h-5 w-5 text-blue-600" />
                      )}
                    </div>
                    <div>
                      <CardTitle className="text-lg">
                        Módulo {module.id}: {module.title}
                      </CardTitle>
                      <CardDescription>{module.description}</CardDescription>
                    </div>
                  </div>
                  <Badge variant={isCompleted ? 'default' : 'secondary'}>
                    {isCompleted ? 'Concluído' : 'Pendente'}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Module Stats */}
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>30-45 min</span>
                  </div>
                  {sectionCount > 1 && (
                    <div className="flex items-center space-x-1">
                      <FileText className="h-4 w-4" />
                      <span>{sectionCount} seções</span>
                    </div>
                  )}
                </div>

                {/* Sections Preview */}
                {module.sections && (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-gray-700">Conteúdo:</h4>
                    <div className="space-y-1">
                      {Object.entries(module.sections).slice(0, 3).map(([key, section]) => (
                        <div key={key} className="flex items-center space-x-2 text-sm text-gray-600">
                          <ChevronRight className="h-3 w-3" />
                          <span>{section.title}</span>
                        </div>
                      ))}
                      {Object.keys(module.sections).length > 3 && (
                        <div className="text-sm text-gray-500 ml-5">
                          +{Object.keys(module.sections).length - 3} seções adicionais
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex space-x-2 pt-2">
                  <Button asChild className="flex-1">
                    <Link to={`/training/module/${module.id}`}>
                      <Play className="h-4 w-4 mr-2" />
                      {isCompleted ? 'Revisar' : 'Iniciar'}
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => toggleModuleCompletion(module.id)}
                  >
                    {isCompleted ? 'Marcar Pendente' : 'Marcar Concluído'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Quick Access */}
      <Card>
        <CardHeader>
          <CardTitle>Acesso Rápido</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" asChild className="h-auto p-4">
              <Link to="/specialists" className="flex flex-col items-center space-y-2">
                <Users className="h-6 w-6" />
                <span>Consultar Especialistas</span>
              </Link>
            </Button>
            <Button variant="outline" asChild className="h-auto p-4">
              <Link to="/terms" className="flex flex-col items-center space-y-2">
                <FileText className="h-6 w-6" />
                <span>Consultar Termos</span>
              </Link>
            </Button>
            <Button variant="outline" asChild className="h-auto p-4">
              <Link to="/training/messages" className="flex flex-col items-center space-y-2">
                <MessageSquare className="h-6 w-6" />
                <span>Mensagens Padrão</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function ModuleDetail({ moduleId }) {
  const module = trainingModules[`module${moduleId}`]
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0)
  const [showActivityModal, setShowActivityModal] = useState(false)
  const [userAnswer, setUserAnswer] = useState("")
  const [mcqSelectedOption, setMcqSelectedOption] = useState("")
  const [fillInBlanksAnswers, setFillInBlanksAnswers] = useState({})
  const [orderingItems, setOrderingItems] = useState([])
  const [activityFeedback, setActivityFeedback] = useState(null)
  const [activityCompleted, setActivityCompleted] = useState(false)

  const currentSectionKey = module.sections ? Object.keys(module.sections)[currentActivityIndex] : null
  const currentSection = currentSectionKey ? module.sections[currentSectionKey] : null
  const currentActivity = currentSection && currentSection.activities && currentSection.activities.length > 0 
    ? currentSection.activities[0] // Assuming one activity per section for now, or first one
    : null

  // Reset activity state when section changes
  useEffect(() => {
    if (currentActivity) {
      setUserAnswer("")
      setMcqSelectedOption("")
      setFillInBlanksAnswers({})
      setOrderingItems(currentActivity.type === "ordering" ? [...currentActivity.items] : [])
      setActivityFeedback(null)
      setActivityCompleted(false)
    }
  }, [currentActivity])

  const handleOpenActivity = (sectionKey) => {
    const sectionIndex = Object.keys(module.sections).indexOf(sectionKey)
    setCurrentActivityIndex(sectionIndex)
    setShowActivityModal(true)
  }

  const handleSubmitActivity = () => {
    let isCorrect = false
    let feedbackMessage = ""

    if (!currentActivity) return

    switch (currentActivity.type) {
      case "mcq":
        isCorrect = mcqSelectedOption === currentActivity.correctAnswer
        feedbackMessage = isCorrect ? currentActivity.feedback : `Incorreto. A resposta correta é: ${currentActivity.correctAnswer}`
        break
      case "scenario":
        const keywords = currentActivity.expectedAnswerKeywords.map(k => k.toLowerCase())
        const userLower = userAnswer.toLowerCase()
        isCorrect = keywords.every(keyword => userLower.includes(keyword))
        feedbackMessage = isCorrect ? currentActivity.feedback : `Sua resposta pode ser melhorada. Dica: ${currentActivity.feedback}`
        break
      case "fill_in_the_blanks":
        isCorrect = currentActivity.blanks.every(blank => 
          fillInBlanksAnswers[blank.placeholder] && 
          fillInBlanksAnswers[blank.placeholder].toLowerCase() === blank.correctAnswer.toLowerCase()
        )
        feedbackMessage = isCorrect ? currentActivity.feedback : `Incorreto. Verifique suas respostas. Dica: ${currentActivity.feedback}`
        break
      case "ordering":
        isCorrect = JSON.stringify(orderingItems) === JSON.stringify(currentActivity.correctOrder)
        feedbackMessage = isCorrect ? currentActivity.feedback : `A ordem está incorreta. Dica: ${currentActivity.feedback}`
        break
      default:
        break
    }

    setActivityFeedback(feedbackMessage)
    setActivityCompleted(isCorrect)

    // Simple alert instead of toast
    alert(`${isCorrect ? "Resposta Correta!" : "Resposta Incorreta"}\n\n${feedbackMessage}`)
  }

  const handleNextSection = () => {
    const nextIndex = currentActivityIndex + 1
    if (nextIndex < Object.keys(module.sections).length) {
      setCurrentActivityIndex(nextIndex)
      setShowActivityModal(true)
    } else {
      setShowActivityModal(false)
      alert("Módulo Concluído!\n\nVocê completou todas as atividades deste módulo.")
    }
  }

  if (!module) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Módulo não encontrado</h2>
        <Button asChild>
          <Link to="/training">Voltar ao Treinamento</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Button variant="outline" asChild>
          <Link to="/training">
            ← Voltar
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Módulo {module.id}: {module.title}
          </h1>
          <p className="text-lg text-gray-600">{module.description}</p>
        </div>
      </div>

      {/* Content */}
      {module.sections ? (
        <div className="space-y-6">
          {Object.entries(module.sections).map(([key, section]) => (
            <Card key={key}>
              <CardHeader>
                <CardTitle className="text-xl">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {section.tasks.map((task, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{task}</span>
                    </li>
                  ))}
                </ul>
                {section.activities && section.activities.length > 0 && (
                  <div className="mt-4">
                    <Button onClick={() => handleOpenActivity(key)}>
                      <Play className="h-4 w-4 mr-2" />
                      Iniciar Atividade
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="p-6">
            <p className="text-gray-700">{module.content}</p>
          </CardContent>
        </Card>
      )}

      {/* Activity Modal */}
      {showActivityModal && currentActivity && (
        <Dialog open={showActivityModal} onOpenChange={setShowActivityModal}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Atividade: {currentSection.title}</DialogTitle>
            </DialogHeader>
            <div className="py-4 space-y-4">
              {currentActivity.type === "mcq" && (
                <div>
                  <p className="font-semibold mb-2">{currentActivity.question}</p>
                  <RadioGroup onValueChange={setMcqSelectedOption} value={mcqSelectedOption}>
                    {currentActivity.options.map((option, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <RadioGroupItem value={option} id={`option-${index}`} />
                        <Label htmlFor={`option-${index}`}>{option}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              )}

              {currentActivity.type === "scenario" && (
                <div>
                  <p className="font-semibold mb-2">Cenário: {currentActivity.scenario}</p>
                  <Textarea 
                    placeholder="Descreva sua abordagem..."
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    rows={5}
                  />
                </div>
              )}

              {currentActivity.type === "fill_in_the_blanks" && (
                <div>
                  <p className="font-semibold mb-2">{currentActivity.sentence.split("[BLANK]").map((part, index) => (
                    <span key={index}>
                      {part}
                      {index < currentActivity.blanks.length && (
                        <Input 
                          type="text" 
                          className="inline-block w-32 mx-1" 
                          placeholder="Resposta"
                          value={fillInBlanksAnswers[currentActivity.blanks[index].placeholder] || ""}
                          onChange={(e) => setFillInBlanksAnswers({
                            ...fillInBlanksAnswers,
                            [currentActivity.blanks[index].placeholder]: e.target.value
                          })}
                        />
                      )}
                    </span>
                  ))}</p>
                </div>
              )}

              {currentActivity.type === "ordering" && (
                <div>
                  <p className="font-semibold mb-2">{currentActivity.instruction}</p>
                  <div className="space-y-2">
                    {orderingItems.map((item, index) => (
                      <div 
                        key={item} 
                        className="flex items-center p-2 border rounded-md bg-gray-50 cursor-grab"
                        draggable
                        onDragStart={(e) => e.dataTransfer.setData("text/plain", index.toString())}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={(e) => {
                          const draggedIndex = parseInt(e.dataTransfer.getData("text/plain"))
                          const newItems = [...orderingItems]
                          const [draggedItem] = newItems.splice(draggedIndex, 1)
                          newItems.splice(index, 0, draggedItem)
                          setOrderingItems(newItems)
                        }}
                      >
                        {index + 1}. {item}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activityFeedback && (
                <div className={`p-3 rounded-md ${activityCompleted ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {activityFeedback}
                </div>
              )}
            </div>
            <DialogFooter>
              {!activityCompleted ? (
                <Button onClick={handleSubmitActivity}>Verificar Resposta</Button>
              ) : (
                <Button onClick={handleNextSection}>Próxima Atividade</Button>
              )}
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      {/* Navigation */}
      <div className="flex justify-between">
        <Button variant="outline" asChild>
          <Link to="/training">
            ← Voltar ao Treinamento
          </Link>
        </Button>
        {module.id < 4 && (
          <Button asChild>
            <Link to={`/training/module/${module.id + 1}`}>
              Próximo Módulo
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        )}
      </div>
    </div>
  )
}

export function Training() {
  const location = useLocation()
  
  return (
    <Routes>
      <Route path="/" element={<TrainingOverview />} />
      <Route path="/module/:moduleId" element={<ModuleDetailWrapper />} />
    </Routes>
  )
}

function ModuleDetailWrapper() {
  const location = useLocation()
  const moduleId = location.pathname.split('/').pop()
  return <ModuleDetail moduleId={moduleId} />
}

