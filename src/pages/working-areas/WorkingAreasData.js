import trabalhistaImg from "../../assets/working-areas/trabalhista.jpg";
import consumidorImg from "../../assets/working-areas/consumidor.jpg";
import familiaImg from "../../assets/working-areas/familiar.jpg";
import sucessoesImg from "../../assets/working-areas/sucessoes.jpg";
import civilImg from "../../assets/working-areas/civil.jpg";
import extraJudicialImg from "../../assets/working-areas/extraJudicial.jpg";

export const workingAreasData = {
  "direito-trabalho": {
    id: 1,
    slug: "direito-trabalho",
    img: trabalhistaImg,
    title: "Direito do Trabalho",
    subtitle:
      "Defesa dos direitos de trabalhadores e empresas nas relações laborais",
    description:
      "Nossa atuação em Direito do Trabalho abrange tanto a defesa dos trabalhadores quanto a assessoria completa para empresas, garantindo o equilíbrio nas relações trabalhistas.",
    fullDescription:
      "O direito do trabalho é um ramo do direito privado responsável por regular a relação jurídica entre empregadores e trabalhadores, fundamentado nos princípios e leis trabalhistas.\nO escritório Moura Pereira, conta com uma vasta experiência na relação de trabalho, atuando tanto para empresas quanto para os trabalhadores.",
    services: {
      consumer: [
        "7ª e 8ª horas do bancário",
        "Intervalo da mulher",
        "Intervalo intrajornada e interjornada",
        "Pausa térmica",
        "Vínculo empregatício",
        "Anulação de demissão por justa causa",
        "Rescisão indireta",
        "Verbas rescisórias",
        "Insalubridade e periculosidade",
        "Horas extras e adicional noturno",
        "Anulação judicial de terceirização ilegal",
        "Ação por assédio moral e dano moral trabalhista",
        "Indenização por acidente de trabalho",
        "Equiparação salarial",
        "Salário substituição",
        "Acúmulo e desvio de função",
        "Cobrança de FGTS não recolhido",
        "Estabilidade da gestante",
      ],
      provider: [
        "Defesa e acompanhamento de reclamações trabalhistas em todas as instâncias",
        "Elaboração e homologação de acordos extrajudiciais",
        "Consultoria trabalhista com pareceres e opiniões legais",
        "Implementação e adequação de acordos e convenções coletivas",
        "Análise e elaboração de contratos de trabalho",
        "Assessoria em saúde, medicina e higiene do trabalho",
        "Defesa administrativa e recursos contra autos de infração perante DRT e MPT",
      ],
    },
    benefits: [
      "Atendimento especializado tanto para trabalhadores quanto para empresas",
      "Consultoria preventiva para evitar litígios",
      "Atuação estratégica em todas as instâncias da Justiça do Trabalho",
      "Defesa de direitos fundamentais nas relações laborais",
    ],
    topics: [
      {
        title: "7ª e 8ª horas dos bancários",
        content:
          "- A jornada do bancário, em regra, é de 6 horas. Muitos trabalham 8h, e podem requerer judicialmente o pagamento da 7ª e 8ª horas como extras. Isso vale também para funcionários de financeiras.",
      },
      {
        title: "Vínculo empregatício",
        content:
          "- Muitos trabalhadores não têm registro em CTPS. O vínculo depende de subordinação, habitualidade, onerosidade, pessoalidade, exclusividade e pessoa física. A prática de exigir MEI tem sido considerada fraude e gera ações para reconhecimento do vínculo e verbas rescisórias.",
      },
      {
        title: "Equiparação salarial",
        content:
          "- A CLT garante que funções idênticas, no mesmo empregador e local, devem ter igual salário, sem distinção de sexo, etnia, nacionalidade ou idade.",
      },
      {
        title: "Adicional de insalubridade",
        content:
          "- Atividades insalubres expõem empregados a agentes nocivos acima dos limites legais. Exemplos: farmacêuticos que aplicam injeções, trabalhadores de supermercados em câmaras frias.",
      },
      {
        title: "Cargo de confiança",
        content:
          "- Nem todo funcionário que não bate ponto é realmente cargo de confiança. Muitos processos questionam o não pagamento de horas extras a empregados que têm supervisão e cumprem jornada regular.",
      },
      {
        title: "Pausa térmica",
        content:
          "- Quem trabalha em câmaras frigoríficas tem direito a 20 minutos de repouso a cada 1h40 de trabalho contínuo. Muitos empregados de supermercados já conquistaram esse direito judicialmente.",
      },
    ],
    cta: "Para maiores informações agende uma consulta com nosso especialista.",
  },
  "direito-consumidor": {
    id: 2,
    slug: "direito-consumidor",
    img: consumidorImg,
    title: "Direito do Consumidor",
    subtitle:
      "Proteção dos direitos dos consumidores e orientação sobre relações de consumo",
    description:
      "Atuamos em defesa dos direitos do consumidor, garantindo que empresas e fornecedores cumpram suas obrigações legais e que os consumidores tenham seus direitos respeitados.",
    fullDescription:
      "O Direito do Consumidor é um ramo do direito privado que protege os interesses do consumidor nas relações de consumo, regulamentando práticas comerciais e assegurando o cumprimento de normas pelo fornecedor.\nO escritório Moura Pereira possui ampla experiência em ações consumeristas, atuando na resolução de conflitos, revisão de contratos e defesa em casos de abuso, propaganda enganosa ou produtos e serviços defeituosos.",
    services: {
      consumer: [
        "Ações de devolução e troca de produtos defeituosos",
        "Revisão de contratos abusivos",
        "Cobrança indevida e estorno de valores",
        "Indenização por propaganda enganosa",
        "Cancelamento de serviços contratados indevidamente",
        "Assistência em casos de recall de produtos",
        "Acompanhamento de processos administrativos no PROCON",
      ],
      provider: [
        "Consultoria sobre direitos do consumidor e normas de defesa",
        "Adequação de contratos e políticas de atendimento",
        "Treinamento de equipe de atendimento para prevenção de litígios",
        "Assessoria em processos administrativos e judiciais",
        "Elaboração de termos de garantia e manuais de produto",
      ],
    },
    benefits: [
      "Proteção completa dos direitos do consumidor",
      "Prevenção de problemas legais e administrativos",
      "Atuação estratégica em negociações e processos judiciais",
      "Consultoria especializada para empresas e fornecedores",
    ],
    topics: [
      {
        title: "Cobrança indevida",
        content:
          "- Consumidores podem contestar cobranças incorretas ou duplicadas, buscando estorno e indenização por danos morais em casos de abusos.",
      },
      {
        title: "Produtos com defeito",
        content:
          "- O Código de Defesa do Consumidor garante troca, reparo ou devolução do valor pago em casos de produtos ou serviços defeituosos. O prazo varia de acordo com o tipo de produto.",
      },
      {
        title: "Propaganda enganosa",
        content:
          "- Empresas que veiculam informações falsas ou enganosas sobre produtos ou serviços podem ser responsabilizadas judicialmente e obrigadas a indenizar os consumidores.",
      },
      {
        title: "Serviços contratados indevidamente",
        content:
          "- Cobranças por serviços não contratados podem ser contestadas e canceladas, com direito à devolução de valores e, em alguns casos, indenização por danos morais.",
      },
      {
        title: "Revisão de contratos",
        content:
          "- Cláusulas abusivas ou ilegais podem ser revistas judicialmente, garantindo a proteção do consumidor em contratos de crédito, planos de saúde, telefonia, entre outros.",
      },
    ],
    cta: "Para maiores informações, agende uma consulta com nosso especialista ",
  },
  "direito-familia": {
    id: 3,
    slug: "direito-familia",
    img: familiaImg,
    title: "Direito de Família",
    subtitle:
      "Proteção jurídica nas relações familiares e proteção dos interesses dos envolvidos",
    description:
      "Atuamos em casos de divórcio, guarda, pensão, união estável e outros conflitos familiares, buscando soluções equilibradas e juridicamente seguras.",
    fullDescription:
      "O Direito de Família é o ramo do direito que regula as relações familiares e patrimoniais, garantindo direitos e deveres entre cônjuges, pais e filhos, e demais membros da família.\nO escritório Moura Pereira presta assessoria completa, buscando sempre a conciliação e proteção dos interesses de todas as partes envolvidas.",
    services: {
      consumer: [
        "Divórcio consensual e litigioso",
        "Guarda compartilhada ou unilateral",
        "Pensão alimentícia",
        "Adoção e investigação de paternidade",
        "Planejamento sucessório familiar",
      ],
      provider: [
        "Assessoria jurídica para mediação e acordos familiares",
        "Elaboração de contratos e convenções familiares",
        "Representação judicial em litígios familiares",
      ],
    },
    benefits: [
      "Atendimento personalizado e ético",
      "Foco na conciliação e proteção dos interesses do cliente",
      "Assessoria jurídica completa em todos os tipos de conflito familiar",
      "Estratégias legais que respeitam a legislação vigente",
    ],
    topics: [
      {
        title: "Divórcio",
        content:
          "- Podemos atuar em divórcios consensuais ou litigiosos, orientando sobre guarda, pensão e partilha de bens, sempre buscando soluções justas.",
      },
      {
        title: "Guarda dos filhos",
        content:
          "- A guarda pode ser compartilhada ou unilateral. Atuamos para proteger os direitos da criança e a convivência equilibrada com ambos os pais.",
      },
      {
        title: "Pensão alimentícia",
        content:
          "- Avaliamos o valor devido, revisões e execuções, garantindo que os interesses do beneficiário sejam respeitados.",
      },
      {
        title: "Adoção e filiação",
        content:
          "- Assistimos todo o processo de adoção e investigação de paternidade, assegurando cumprimento da legislação e direitos das crianças.",
      },
      {
        title: "Planejamento sucessório",
        content:
          "- Orientamos famílias sobre divisão de bens, testamentos e heranças, prevenindo conflitos futuros.",
      },
    ],
    cta: "Para maiores informações, agende uma consulta com nosso especialista",
  },
  "direito-sucessoes": {
    id: 4,
    slug: "direito-sucessoes",
    img: sucessoesImg,
    title: "Direito de Sucessões",
    subtitle:
      "Planejamento e gestão jurídica da transmissão de bens e heranças",
    description:
      "Atuamos na organização de patrimônios, testamentos, inventários e partilhas, garantindo segurança jurídica e evitando conflitos familiares.",
    fullDescription:
      "O Direito de Sucessões regula a transmissão de bens, direitos e obrigações de uma pessoa falecida para seus herdeiros ou legatários, prevenindo litígios e protegendo interesses familiares.\nO escritório Moura Pereira presta assessoria completa, desde o planejamento sucessório até a execução de inventários e partilhas, garantindo conformidade legal e estratégias eficientes de gestão patrimonial.",
    services: {
      consumer: [
        "Inventário judicial e extrajudicial",
        "Partilha de bens e avaliação patrimonial",
        "Elaboração de testamentos e codicilos",
        "Planejamento sucessório familiar",
        "Reconhecimento e impugnação de herdeiros",
        "Orientação sobre imposto de transmissão (ITCMD)",
        "Mediação de conflitos entre herdeiros",
        "Regularização de imóveis e outros bens",
      ],
      provider: [
        "Assessoria jurídica para administração de espólios",
        "Elaboração de contratos de doação e usufruto",
        "Representação em disputas sucessórias",
        "Consultoria sobre planejamento tributário sucessório",
        "Defesa em ações de anulação de testamento ou partilha",
      ],
    },
    benefits: [
      "Segurança jurídica na transmissão de bens",
      "Prevenção de conflitos familiares",
      "Assessoria completa em inventários e partilhas",
      "Planejamento sucessório eficiente e estratégico",
    ],
    topics: [
      {
        title: "Inventário judicial e extrajudicial",
        content:
          "- Orientamos sobre a melhor forma de formalizar a transferência de bens, seja judicialmente ou em cartório, garantindo rapidez e segurança legal.",
      },
      {
        title: "Testamentos",
        content:
          "- Auxiliamos na elaboração de testamentos claros e válidos, evitando futuras disputas entre herdeiros.",
      },
      {
        title: "Partilha de bens",
        content:
          "- Executamos a partilha de bens conforme a lei, conciliando interesses de todos os herdeiros e evitando litígios.",
      },
      {
        title: "Planejamento sucessório",
        content:
          "- Estruturamos estratégias para proteger o patrimônio e reduzir impostos, como ITCMD, doando ou transferindo bens de forma segura.",
      },
      {
        title: "Herdeiros e legitimidade",
        content:
          "- Avaliamos a existência de herdeiros legais e legitimidade, cuidando de possíveis impugnações ou direitos de terceiros.",
      },
      {
        title: "Doação e usufruto",
        content:
          "- Preparamos contratos de doação e usufruto de bens, garantindo efeitos legais claros e protegendo os interesses de doadores e beneficiários.",
      },
      {
        title: "Mediação de conflitos",
        content:
          "- Atuamos na conciliação entre herdeiros e partes interessadas, buscando acordos amigáveis sempre que possível.",
      },
      {
        title: "Regularização de imóveis e bens",
        content:
          "- Cuidamos da documentação, registro e transferência de imóveis e outros bens, evitando problemas futuros com herdeiros ou terceiros.",
      },
    ],
    cta: "Para maiores informações, agende uma consulta com nosso especialista ",
  },
  "direito-civil": {
    id: 5,
    slug: "direito-civil",
    img: civilImg,
    title: "Direito Civil",
    subtitle: "Proteção e defesa de direitos patrimoniais e pessoais",
    description:
      "Atuamos na defesa de direitos e interesses de pessoas físicas e jurídicas, em questões patrimoniais, contratuais e relações civis em geral.",
    fullDescription:
      "O Direito Civil regula as relações jurídicas entre pessoas físicas e jurídicas, abrangendo contratos, responsabilidades, direitos de propriedade, família, obrigações e danos. Nosso escritório presta assessoria completa, conciliando prevenção de litígios com defesa estratégica em processos civis.",
    services: {
      consumer: [
        "Assessoria em contratos e obrigações",
        "Direito de propriedade e posse",
        "Reparação de danos e indenizações",
        "Defesa em ações civis e cobranças",
        "Orientação sobre responsabilidade civil",
        "Consultoria em questões familiares e patrimoniais",
        "Mediação e conciliação de conflitos",
      ],
      provider: [
        "Elaboração e revisão de contratos civis",
        "Representação em ações de cobrança e execuções",
        "Assessoria em transações imobiliárias",
        "Defesa em processos de responsabilidade civil",
        "Consultoria preventiva para minimizar riscos legais",
      ],
    },
    benefits: [
      "Segurança jurídica em contratos e negociações",
      "Prevenção e resolução de conflitos",
      "Proteção patrimonial e pessoal",
      "Assessoria completa em processos e litígios civis",
    ],
    topics: [
      {
        title: "Contratos e obrigações",
        content:
          "- Elaboração, revisão e análise de contratos, garantindo que seus direitos e deveres estejam claros e protegidos.",
      },
      {
        title: "Propriedade e posse",
        content:
          "- Orientação em questões de compra, venda, locação e regularização de bens móveis e imóveis.",
      },
      {
        title: "Responsabilidade civil",
        content:
          "- Assessoria em casos de danos materiais e morais, buscando reparação ou defesa adequada em processos judiciais.",
      },
      {
        title: "Cobranças e execuções",
        content:
          "- Representamos clientes em ações de cobrança, execução de dívidas e outros procedimentos judiciais relacionados.",
      },
      {
        title: "Mediação e conciliação",
        content:
          "- Atuamos na resolução amigável de conflitos, evitando processos longos e garantindo acordos justos entre as partes.",
      },
      {
        title: "Consultoria preventiva",
        content:
          "- Analisamos riscos legais e orientamos medidas para proteger o patrimônio e minimizar litígios futuros.",
      },
      {
        title: "Transações imobiliárias",
        content:
          "- Prestamos assessoria completa em compra, venda, locação e regularização de imóveis, garantindo segurança jurídica.",
      },
    ],
    cta: "Agende uma consulta para receber orientação jurídica completa",
  },
  "direito-extrajudicial": {
    id: 6,
    slug: "direito-extrajudicial",
    img: extraJudicialImg,
    title: "Direito Extrajudicial",
    subtitle: "Soluções legais sem necessidade de litígios",
    description:
      "Oferecemos assessoria em procedimentos legais que podem ser resolvidos fora do âmbito judicial, com segurança e eficiência.",
    fullDescription:
      "O Direito Extrajudicial envolve atos e procedimentos que podem ser realizados sem necessidade de recorrer ao Judiciário, como contratos, registros, procurações, inventários e mediações. Nosso escritório presta assessoria completa para garantir segurança jurídica e agilidade na resolução de questões legais, evitando disputas judiciais prolongadas.",
    services: {
      consumer: [
        "Elaboração e registro de contratos extrajudiciais",
        "Orientação e regularização de documentos",
        "Mediação e conciliação de conflitos",
        "Procurações e formalidades legais",
        "Assessoria em inventários e partilhas amigáveis",
        "Consultoria preventiva em transações civis",
      ],
      provider: [
        "Revisão e elaboração de contratos extrajudiciais",
        "Assessoria em formalidades legais e registros",
        "Mediação de conflitos para evitar processos judiciais",
        "Consultoria para empresas sobre obrigações extrajudiciais",
        "Representação em procedimentos notariais e cartorários",
      ],
    },
    benefits: [
      "Agilidade na resolução de questões legais",
      "Evita litígios judiciais demorados",
      "Segurança jurídica em atos e contratos",
      "Acompanhamento completo em procedimentos extrajudiciais",
    ],
    topics: [
      {
        title: "Contratos e formalidades",
        content:
          "- Elaboração, revisão e registro de contratos extrajudiciais, garantindo validade legal e proteção às partes.",
      },
      {
        title: "Procurações e autorizações",
        content:
          "- Preparação e validação de procurações, autorizações e outros documentos legais sem necessidade de ação judicial.",
      },
      {
        title: "Inventários e partilhas",
        content:
          "- Assessoria em inventários, partilhas e regularização de bens de forma amigável, evitando litígios judiciais.",
      },
      {
        title: "Mediação e conciliação",
        content:
          "- Resolução de conflitos de forma extrajudicial, promovendo acordos eficientes e evitando processos judiciais longos.",
      },
      {
        title: "Registros e cartórios",
        content:
          "- Orientação e acompanhamento em registros públicos, averbações e outros atos notariais e cartorários.",
      },
      {
        title: "Consultoria preventiva",
        content:
          "- Analisamos riscos legais e orientamos medidas para evitar problemas judiciais futuros e garantir segurança jurídica.",
      },
    ],
    cta: "Agende uma consulta para soluções legais rápidas e seguras",
  },
};
