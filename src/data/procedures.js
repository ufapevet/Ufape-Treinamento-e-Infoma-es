export const procedureInfo = {
  internal: {
    title: "Procedimentos Internos (LOCAVET)",
    description: "Procedimentos realizados pela equipe interna do hospital",
    paymentOptions: {
      installments: true,
      discounts: true,
      rules: [
        "Valores até R$1.000,00 – À vista",
        "Valores a partir de R$1.000,00 – Até 5X",
        "Valores acima de R$2.000,00 – Até 10X"
      ]
    },
    examples: [
      "Exames feitos no laboratório interno",
      "Internação",
      "Medicamentos",
      "Consultas com equipe interna"
    ]
  },
  external: {
    title: "Procedimentos Externos (PVT, TCS, IDX, PDX)",
    description: "Procedimentos realizados por profissionais externos ou laboratórios parceiros",
    paymentOptions: {
      installments: false,
      discounts: false,
      rules: [
        "Pagamento à vista obrigatório",
        "Sem desconto",
        "Sem parcelamento"
      ]
    },
    examples: [
      "Hemodiálise",
      "Laringobroncoscopia",
      "CH felino e canino",
      "Transporte da bolsa",
      "Ecocardiograma",
      "Ultrassonografia externa",
      "Raio X externo",
      "Consultas com especialistas externos",
      "Fisioterapia",
      "Exames de laboratórios externos"
    ]
  }
};

export const externalReception = {
  title: "Recebimentos Pet Care/Veros/Amar Vets/Seres",
  description: "Procedimento para recebimento de exames de outras clínicas",
  steps: [
    "Exames chegam pelo motoboy",
    "Abrir recipiente que foi entregue a amostra de sangue",
    "Escanear o pedido médico",
    "De acordo com o hospital que encaminhou a amostra, abrir cadastro com nome do paciente + nome do tutor",
    "Observar no pedido de exame escaneado quantos canais foram solicitados",
    "Realizar o lançamento da venda (Tromboelastrograma 1 canal, 2 canais ou Trio Tromboelastrograma)",
    "Subir pedido de exame em sistema na ficha do paciente",
    "Avisar o laboratório que chegou amostra de rotem"
  ]
};

export const contractsAndTerms = {
  internacao: {
    title: "Contrato de Internação",
    description: "Irei apresentar o contrato de internação, vou pedir para que a família leia com calma e qualquer dúvida, sintam-se à vontade para perguntar.",
    keyPoints: [
      "Pagamentos são diários, sendo realizados com valores iguais ou superiores à R$1.000,00",
      "Itens descritos como 'diários' são renovados a cada 24h (a contar do horário de admissão)",
      "Medicações, insumos, exames (laboratoriais ou de imagem) são cobrados a parte",
      "Só são realizados após a autorização do plano de tratamento e pagamento",
      "Visitas: somente de forma agendada das 10h30 às 16h",
      "Para solicitações fora desse período, solicitar no grupo da família e aguardar retorno da equipe médica"
    ]
  },
  usoImagem: {
    title: "Termo de Uso de Imagem",
    description: "Esse termo refere mais a nossa equipe do marketing, que às vezes passa pelo hospital fotografando a nossa rotina e depois postamos nas nossas redes sociais.",
    options: [
      "Autorizar divulgação das imagens do paciente",
      "Não autorizar divulgação das imagens do paciente"
    ],
    note: "Independente de qual a família escolher, deixaremos notificado no cadastro. Só assinar no final da folha após escolha."
  },
  autorizacaoTratamento: {
    title: "Autorização para Tratamento Clínico e Internação",
    description: "Esse termo refere que os tutores estão cientes do quadro clínico do paciente e autorizam a nossa intervenção, seja ela clínica, cirúrgica ou ambas.",
    note: "Alguns tutores podem questionar sobre ter os dois nomes (cirurgia e internação) e o paciente for fazer somente um desses dois, nesse caso, só explicar que refere a forma cadastrada no sistema e que não necessariamente tem a ver com o quadro dele. Pode riscar, a caneta, na frente dele o que ele não for utilizar."
  },
  coletaCorpo: {
    title: "Coleta do Corpo - Prefeitura",
    description: "Retiradas de corpos nas quartas. Esse termo refere que, os tutores autorizam a retirada e estão cientes que:",
    points: [
      "Os corpos são cremados coletivamente",
      "Nos isentamos de responsabilidades futuras (caso eles mudem de ideia sobre o destino do corpo)",
      "Eles não terão acesso as cinzas (pois é cremação coletiva)"
    ]
  },
  cirurgiaAnestesia: {
    title: "Termo de Cirurgia e Anestesia",
    description: "São dois termos diferentes, mas a referência é a mesma: Os termos deverão ser preenchidos conforme a real necessidade do paciente",
    requirements: [
      "Nome do procedimento cirúrgico",
      "Médico veterinário",
      "CRMV",
      "Para anestesia: Médico veterinário e CRMV"
    ]
  },
  responsabilidadeTerceiros: {
    title: "Termo de Responsabilidade para Veterinários Terceiros",
    description: "Esse termo normalmente é entregue para pacientes cirúrgicos, ou seja, que farão cirurgias com veterinários parceiros (Goldfeder, Demétrio, Tiosso, Jorge Conti...).",
    explanation: "Significa que, a conduta principal será do médico que realizou o procedimento, o paciente ficará assistido na nossa internação e/ou uti 24h. Porém, controle de dor, pós-operatório e demais solicitações, seguiremos as orientações do cirurgião. Alinhamos e visamos o bem-estar do paciente, mas a UFAPE não se responsabiliza por essas condutas terceiras."
  },
  cistocentese: {
    title: "Autorização para Cistocentese",
    description: "Esse termo refere a coleta de urina guiada por US. Quem realiza é o Caito, o termo deverá ser preenchido com os dados (CRMV e nome completo) do veterinário em todos os exames (isso inclui pacientes internos e clínica)."
  },
  retiradaExame: {
    title: "Retirada de Exame",
    description: "Esse termo deverá ser entregue a todos os tutores cadastrais referente a entrega de exames (tanto laboratoriais quanto de imagem) realizados na unidade no período de internação e/ou atendimento.",
    requirement: "Deverá ser preenchido com nome e quantidade de cada exame."
  },
  recusaTratamento: {
    title: "Recusa de Tratamento",
    description: "Esse termo é frequentemente entregue aos tutores de pacientes internos, quem preenche normalmente é a equipe veterinária.",
    purpose: "Esse termo refere a recusa de procedimentos na unidade (Exemplo: Exames laboratoriais, exames de imagem, cirurgias, consultas com especialista ou, qualquer outro procedimento interno).",
    delivery: "Deverá ser entregue ao tutor cadastrado para assinatura."
  },
  altaNaoDada: {
    title: "Alta Não Dada",
    description: "Esse termo sempre é entregue aos tutores que solicitam transferência do paciente ou, liberação para casa. Normalmente é entregue junto com o termo de recusa de tratamento.",
    purpose: "Esse refere a ciência do tutor que, a indicação da equipe veterinária é manter o paciente assistido em tratamento por mais tempo.",
    delivery: "Entregar ao tutor cadastrado."
  }
};

export const importantNotes = {
  termCopies: "Todos os termos citados acima e demais, são realizadas UMA via de cada, que fica em posse da unidade. Com exceção do Contrato de Internação, que fica uma cópia com tutor. O tutor poderá solicitar uma cópia do documento, caso isso ocorra, solicitaremos assinatura no documento e entregaremos uma cópia já assinada.",
  tutorValidation: "Todos os termos, sem exceção, só poderão ser entregues ao tutor cadastrado em sistema. Caso contrário, juridicamente não há validade para o hospital."
};

