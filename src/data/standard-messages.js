export const standardMessages = {
  introducao: {
    category: "Introdução",
    messages: [
      {
        id: 1,
        title: "Saudação Manhã",
        content: "Olá! Bom dia. Aqui é a Isabella da UFAPE Veterinária. Tudo bem?"
      },
      {
        id: 2,
        title: "Saudação Tarde",
        content: "Olá! Boa tarde. Aqui é a Isabella da UFAPE Veterinária. Tudo bem?"
      },
      {
        id: 3,
        title: "Saudação Alternativa",
        content: "Olá, boa tarde! Como vai? Aqui quem fala é a Thamires da UFAPE Veterinária"
      }
    ]
  },
  agendamento: {
    category: "Confirmação de Agendamento",
    messages: [
      {
        id: 4,
        title: "Confirmação Agendamento",
        content: "Olá! Bom dia. Aqui é a Isabella da UFAPE Veterinária. Tudo bem? Estou entrando em contato para confirmar o(a) *.* do(a) *.* agendado *sexta-feira (08/03)* ás *00h00*."
      },
      {
        id: 5,
        title: "Confirmação Hoje",
        content: "Estou entrando em contato para confirmar o(a) *.* do(a) *.* agendado *hoje (15/02)* ás *00h00*."
      }
    ]
  },
  orcamento: {
    category: "Orientações sobre Orçamento",
    messages: [
      {
        id: 6,
        title: "Orientações Gerais",
        content: "- Medicamentos, insumos e sedação serão cobrados a parte deste orçamento. *O valor não está incluso.*\n- Itens que estão descritos como *diária* serão cobrados novamente a cada 24h.\n- Demais exames serão cobrados a parte a depender da avaliação do médico veterinário(a).\n- Orçamento inicial deverá ser *acertado na admissão do paciente em nosso hospital.*\n- No período da noite, não serão aceitos formas de pagamento como PIX, TED ou DOC , apenas cartão de crédito, debito e ou dinheiro.\n- Necessário a apresentação de um *documento com foto* na recepção do hospital.\n- O plano de tratamento é feito com base nas informações fornecidas, podendo ser alterado após a avaliação do paciente pela equipe médica.\n\n*Peço que nos informe do aceite ou recusa para darmos sequência à transferência*"
      }
    ]
  },
  dadosFicha: {
    category: "Dados para Abertura de Ficha",
    messages: [
      {
        id: 7,
        title: "Solicitação de Dados",
        content: "Os dados são estes:\n\n*Dados do(a) tutor(a)*\nNome completo:\nData de nascimento:\nCPF:\nRG:\nTelefone:\nE-mail:\nCEP:\nEndereço:\nComplemento:\n\n*Dados do paciente*\nNome:\nData de Nascimento:\nEspécie:\nRaça:\nMacho ou Fêmea?:\nÉ castrado(a)?:\nCor:"
      }
    ]
  },
  exames: {
    category: "Orientações para Exames",
    messages: [
      {
        id: 8,
        title: "ROTEM",
        content: "As amostras devem ser coletadas em tubo tampa azul, com citrato, não podem ser refrigeradas, nem conter coágulo ou fibrina. O intervalo máximo entre coleta e realização do exame é de 4 horas. Pedimos para enviar junto ao pedido médico a temperatura do paciente e o horário da coleta. Para a realização de 1 ou 2 canais, um tubo de 1 ml é suficiente, para a realização de 3 canais, precisamos de 2 tubos de 1 ml (enviar a quantidade da amostra de acordo com a marcação indicada no tubo que será utilizado)."
      },
      {
        id: 9,
        title: "Hemogasometria",
        content: "Encaminhar a amostra resfriada, sem contato direto com o gelo. Mandar temperatura do paciente, FIO2 e origem da amostra (arterial ou venosa). A seringa deve ser heparinizada com heparina lítica e vir tampada. Enviar juntamente o pedido médico com a temperatura no momento da coleta. O tempo entre a coleta e a realização do exame é curto, de até 30 minutos, portanto, o ideal é que a amostra venha em até 20 minutos para chegar ao Hospital."
      },
      {
        id: 10,
        title: "Amostra de Fezes",
        content: "Coletar amostra fresca e se possível trazer para o Hospital imediatamente. O laboratório do hospital recebe amostras de Segunda a Sexta de 08:00 às 20:00 e Sábado e domingo de 08:00 às 17:00. Caso não seja possível enviar amostra fresca, pode manter amostra refrigerada até o processamento. A amostra pode ficar refrigerada até 6 horas depois que o paciente defecar, após esse período a amostra fica inviável para processamento e análise."
      },
      {
        id: 11,
        title: "Ultrassonografia",
        content: "Necessário jejum alimentar de 8 horas, água á vontade e, se possível, evitar deixar que o animal urine 2 horas antes de exame."
      }
    ]
  },
  visitas: {
    category: "Agendamento de Visitas",
    messages: [
      {
        id: 12,
        title: "Agendamento Visita",
        content: "Olá! Bom dia. Aqui é a Isabella da UFAPE Veterinária. Tudo bem? Estou entrando em contato para agendarmos a visita de hoje. Qual seria a sua disponibilidade?"
      },
      {
        id: 13,
        title: "Confirmação Visita",
        content: "Olá! Bom dia. Aqui é a Isabella da UFAPE Veterinária. Tudo bem? Estou entrando em contato para confirmarmos a visita de hoje ás *h*. Podemos confirmar?"
      },
      {
        id: 14,
        title: "Horários de Visita",
        content: "Os horários de visita são agendados das 10h ás 12h, ou das 13h30 ás 16h30. Infelizmente fora desse horário não é permitido visita, eles podem abrir uma exceção pro Sr(a). a depender da rotina da UTI, mas somente a equipe médica pode fazer essa liberação. Portanto peço que o(a) Sr(a). envie, por gentileza, esse pedido no grupo da família. Lá a equipe médica fica ciente das suas solicitações e consegue te dar um retorno."
      }
    ]
  },
  pagamento: {
    category: "Formas de Pagamento",
    messages: [
      {
        id: 15,
        title: "Formas de Pagamento",
        content: "Tudo o que é interno (aquilo que é aqui do Hospital- como exames feitos no nosso laboratório, a internação, medicamentos) podem ser pagos via pix ou cartão de débito ou crédito, sendo parcelados seguindo a nossa tabela de valores (parcelamentos a partir de R$1.000,00). E procedimentos externos (que são realizados por profissionais externos- como cirurgia, anestesia, consulta com especialista, exames de laboratórios externos, fisioterapia, hemodiálise, etc) não conseguimos desconto ou parcelamento, precisam ser pagos á vista (débito ou crédito)."
      },
      {
        id: 16,
        title: "Reembolso",
        content: "Estou entrando em contato para informar que o reembolso já foi solicitado. O valor será devolvido via cartão de crédito, foi aberto o chamado na operadora e a restituição poderá ocorrer em até 2 faturas, dependendo da data de fechamento. Segue comprovante anexo. Qualquer dúvida estamos á disposição!"
      }
    ]
  },
  emergencial: {
    category: "Atendimento Emergencial",
    messages: [
      {
        id: 17,
        title: "Funcionamento 24h",
        content: "Funcionamos 24horas. As consultas clínicas são agendadas e as consultas de caráter emergencial são direcionadas diretamente para a UTI para avaliação e depois, a depender do quadro, direcionadas para a equipe clínica a depender da disponibilidade da equipe."
      },
      {
        id: 18,
        title: "Ausência de Médico",
        content: "A Dra. ___ não se encontra agora no Hospital, assim que ela chegar, no período da tarde, peço para retornar o seu contato, tudo bem? Ou prefere que verifique diretamente com a equipe clínica disponível?"
      }
    ]
  },
  preparos: {
    category: "Preparos para Exames",
    messages: [
      {
        id: 19,
        title: "Exames de Sangue",
        content: "Exames de sangue: jejum alimentar de 8 horas não sendo necessário jejum hídrico (água a vontade)"
      },
      {
        id: 20,
        title: "Ultrassom Abdominal",
        content: "Ultrassom abdominal: jejum alimentar de 8 horas não sendo necessário jejum hídrico (água a vontade). Não deixar paciente urinar 2 horas antes do agendamento do exame."
      },
      {
        id: 21,
        title: "Exames Hormonais",
        content: "Exames hormonais: 12 horas de jejum alimentar não sendo necessário jejum hídrico (água a vontade)\n- Estimulação por ACHT;\n- Supressão por Dexametasona;\n- T4, TSH."
      }
    ]
  }
};

