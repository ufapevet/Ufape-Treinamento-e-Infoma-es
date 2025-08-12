export const trainingModules = {
  module1: {
    id: 1,
    title: "Introdução e Rotinas Diárias",
    description: "Apresentar as principais tarefas e responsabilidades do setor de recepção",
    sections: {
      rotinaClinica: {
        title: "Rotina Clínica (Diária)",
        tasks: [
          "Checar as mensagens antigas para se situar dos acontecido no plantão anterior",
          "Manter comunicação com cliente via WhatsApp e telefonema",
          "Marcar consulta, exames, vacinação",
          "Anexar pedido de exame no sistema",
          "Avisar a equipe que o paciente chegou",
          "Acomodar o tutor e o paciente visando seu conforto e bem estar",
          "Instruir sobre o portal Simples Vet"
        ],
        activities: [
          {
            type: "mcq",
            question: "Qual o primeiro passo ao iniciar o dia na rotina clínica?",
            options: ["Verificar e-mails", "Checar mensagens antigas", "Organizar a recepção"],
            correctAnswer: "Checar mensagens antigas",
            feedback: "Correto! É fundamental se situar dos acontecimentos do plantão anterior."
          }
        ]
      },
      remocao: {
        title: "Remoção (Quando ocorrer)",
        tasks: [
          "Geralmente a solicitação vem por WhatsApp",
          "Avisar a equipe",
          "Enviar o orçamento (enviar junto, texto com as informações adicionais que criamos)",
          "Avisar em caso de ser aprovado",
          "Pegar os dados do tutor",
          "Informar sobre o tempo estimado",
          "Esperar a ambulância chegar para abrir porta lateral",
          "Receber tutores",
          "Tirar dúvidas referente a pagamento, contrato, orçamento",
          "Imprimir receitas"
        ],
        activities: [
          {
            type: "scenario",
            scenario: "Um tutor solicita uma remoção via WhatsApp. Qual a sua próxima ação imediata após avisar a equipe?",
            expectedAnswerKeywords: ["enviar orçamento", "texto informações adicionais"],
            feedback: "Correto! Após avisar a equipe, o próximo passo é enviar o orçamento junto com as informações adicionais."
          }
        ]
      },
      internacao: {
        title: "Internação (Diária)",
        tasks: [
          "Realizar cadastro",
          "Anexar RG no sistema",
          "Imprimir contrato/termo/orçamento",
          "Confeccionar termos de recusa, cirúrgicos e de exames que o paciente precisará realizar",
          "Imprimir receitas",
          "Colher assinatura",
          "Instruir sobre pagamentos e política da empresa",
          "Realizar cobrança do orçamento",
          "Anexar contrato/termo e orçamento no sistema",
          "Criar o Grupo da Família e encaminhar mensagem padrão com as informações da internação",
          "Responder no grupo da família ou sempre lembrar os veterinários que tem mensagem não respondida",
          "Marcar horário de visita",
          "Avisar a equipe que a família chegou"
        ],
        activities: [
          {
            type: "fill_in_the_blanks",
            sentence: "Ao realizar uma internação, é essencial imprimir o [BLANK] e o [BLANK] para o tutor.",
            blanks: [
              { placeholder: "BLANK", correctAnswer: "contrato" },
              { placeholder: "BLANK", correctAnswer: "termo" }
            ],
            feedback: "Correto! Contrato e termo são documentos essenciais na internação."
          }
        ]
      },
      alta: {
        title: "Alta (Quando ocorrer)",
        tasks: [
          "Imprimir exames (caso necessário)",
          "Imprimir receita",
          "Fazer uma pastinha do paciente para entregar para o tutor (caso necessário)",
          "Verificar com a equipe se realizaram lançamento de todos os insumos e medicamentos",
          "Imprimir relatório detalhado",
          "Encaminhar ao financeiro, se disponível",
          "Dividir valores"
        ],
        activities: [
          {
            type: "ordering",
            instruction: "Coloque as etapas da rotina de 'Alta' na ordem correta:",
            items: [
              "Imprimir exames (caso necessário)",
              "Imprimir receita",
              "Fazer uma pastinha do paciente para entregar para o tutor",
              "Verificar com a equipe se realizaram lançamento de todos os insumos e medicamentos",
              "Imprimir relatório detalhado",
              "Encaminhar ao financeiro, se disponível",
              "Dividir valores"
            ],
            correctOrder: [
              "Verificar com a equipe se realizaram lançamento de todos os insumos e medicamentos",
              "Imprimir relatório detalhado",
              "Imprimir exames (caso necessário)",
              "Imprimir receita",
              "Fazer uma pastinha do paciente para entregar para o tutor",
              "Encaminhar ao financeiro, se disponível",
              "Dividir valores"
            ],
            feedback: "A ordem correta garante que todos os lançamentos sejam feitos antes da entrega de documentos e cobrança final."
          }
        ]
      },
      exameExterno: {
        title: "Exame Externo (Diário)",
        tasks: [
          "Receber as amostras que vem por (motoboy ou tutor)",
          "Realizar cadastro do paciente",
          "Anexar pedido no sistema",
          "Lançar o valor da cobrança no sistema",
          "Em caso de clínica não conveniada realizar a cobrança para os tutores",
          "Levar a amostra para o laboratório",
          "Realizar lançamento"
        ],
        activities: [
          {
            type: "mcq",
            question: "Ao receber uma amostra para exame externo, qual o primeiro passo a ser realizado?",
            options: ["Levar a amostra para o laboratório", "Realizar cadastro do paciente", "Lançar o valor da cobrança"],
            correctAnswer: "Realizar cadastro do paciente",
            feedback: "Correto! O cadastro do paciente é fundamental antes de qualquer outra ação."
          }
        ]
      },
      tarefasGerais: {
        title: "Tarefas Gerais Diárias",
        tasks: [
          "Recepcionar pacientes",
          "Arquivar contratos, termos e orçamento",
          "Anotar recados e repassá-los",
          "Manter comunicação WhatsApp, e-mail e telefone",
          "Fazer do WhatsApp uma prioridade",
          "Checar e-mail dos exames para ver se algum laudo foi encaminhado (eletrocardiograma). Se sim, anexar em sistema",
          "Atendimento telefônico",
          "Atendimento presencial",
          "Na ausência da copeira, servir café, chá, limpar a máquina, abastecer copos, grãos de café e água na cafeteira, assim como abastecer as balas e bolachas a serem servidas",
          "Atender ramal",
          "Responsável pela abertura da porta para funcionários, entregadores e tutores",
          "Responsável pelo envio dos orçamentos no grupo da família",
          "Responsável por apresentar os orçamentos presencialmente"
        ],
        activities: [
          {
            type: "scenario",
            scenario: "Você está atendendo um paciente presencialmente e o telefone toca. Qual a sua prioridade?",
            expectedAnswerKeywords: ["atendimento presencial", "atendimento telefônico", "prioridade"],
            feedback: "A prioridade é o atendimento presencial. O atendimento telefônico pode ser gerenciado após a conclusão do atendimento presencial ou por outro colega, se disponível."
          }
        ]
      },
      cobrancas: {
        title: "Cobranças",
        tasks: [
          "Checar com a equipe se os insumos utilizados foram lançados (Após consulta clínica, atendimento e ou alta do paciente internado)",
          "Dividir valores Locavet e UFAPE",
          "Realizar cobrança na ausência do financeiro e ou quando estiver em horário de almoço ou com outro atendimento",
          "Dar baixas nos pagamentos",
          "Realizar link de pagamentos para tutores que não virão para visita presencial",
          "Realizar cobrança de valores em aberto no sistema (enviar detalhado pela manhã)",
          "Se for realizado algum erro de cobrança e ou faltar algum lançamento, se for o caso, entrar em contato com o tutor para explicar"
        ],
        activities: [
          {
            type: "fill_in_the_blanks",
            sentence: "Após a consulta clínica, é fundamental [BLANK] com a equipe se os [BLANK] utilizados foram lançados.",
            blanks: [
              { placeholder: "BLANK", correctAnswer: "checar" },
              { placeholder: "BLANK", correctAnswer: "insumos" }
            ],
            feedback: "Correto! Checar o lançamento dos insumos é crucial para a cobrança correta."
          }
        ]
      }
    }
  },
  module2: {
    id: 2,
    title: "Especialistas e Agendamentos",
    description: "Lista dos especialistas com nomes, especialidades, contatos e procedimentos de agendamento",
    content: "Informações sobre todos os especialistas disponíveis, suas especialidades, formas de contato e procedimentos específicos para agendamento."
  },
  module3: {
    id: 3,
    title: "Termos e Documentação",
    description: "Explicação e importância dos termos usados na admissão, cirurgia, exames, etc.",
    content: "Descrição dos principais termos (contrato de internação, termo de cirurgia, autorização clínica, recusa de tratamento, etc). Procedimento para entrega e assinatura. Regra de entrega apenas para tutores cadastrados."
  },
  module4: {
    id: 4,
    title: "Comunicação e Mensagens Padrão",
    description: "Exemplos de mensagens para diferentes situações",
    content: "Mensagens para confirmação de agendamento, orientações sobre orçamento, dados para abertura de ficha, informações sobre exames e preparo, comunicação de visitas e triagem pré-anestésica, mensagens para grupos da família, formas de pagamento e reembolso, atendimento emergencial, ausência de médicos."
  }
};

export const terms = {
  admissao: {
    category: "Termos para Admissão",
    items: [
      {
        id: 1,
        name: "Contrato de Internação",
        description: "Documento que estabelece os termos e condições para internação do paciente"
      },
      {
        id: 2,
        name: "Autorização Clínica",
        description: "Autorização para realização de procedimentos clínicos"
      },
      {
        id: 3,
        name: "Termo de Responsabilidade",
        description: "Documento que define as responsabilidades do tutor durante o tratamento"
      }
    ]
  },
  cirurgia: {
    category: "Termos para Cirurgia",
    items: [
      {
        id: 4,
        name: "Termo de Cirurgia",
        description: "Autorização específica para procedimentos cirúrgicos"
      },
      {
        id: 5,
        name: "Termo de Anestesia",
        description: "Consentimento para aplicação de anestesia"
      },
      {
        id: 6,
        name: "Termo de Risco Cirúrgico",
        description: "Documento que informa sobre os riscos inerentes ao procedimento"
      }
    ]
  },
  tomografia: {
    category: "Termos para Tomografia",
    items: [
      {
        id: 7,
        name: "Termo de Tomografia",
        description: "Autorização para realização de exame tomográfico"
      },
      {
        id: 8,
        name: "Termo de Contraste",
        description: "Consentimento para uso de contraste no exame"
      }
    ]
  },
  dialise: {
    category: "Termos para Diálise",
    items: [
      {
        id: 9,
        name: "Termo de Diálise",
        description: "Autorização para procedimento de diálise"
      },
      {
        id: 10,
        name: "Termo de Hemodiálise",
        description: "Consentimento específico para hemodiálise"
      }
    ]
  },
  recusa: {
    category: "Termos de Recusa",
    items: [
      {
        id: 11,
        name: "Termo de Recusa de Tratamento",
        description: "Documento para casos de recusa de tratamento recomendado"
      },
      {
        id: 12,
        name: "Termo de Alta a Pedido",
        description: "Documento para alta solicitada pelo tutor contra recomendação médica"
      }
    ]
  }
};

