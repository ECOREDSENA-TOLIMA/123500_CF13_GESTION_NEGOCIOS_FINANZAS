export default {
  global: {
    componenteFormativo: 'Herramientas de análisis en el mercadeo',
    descripcionCurso:
      'El mercadeo debe proponer estrategias que satisfagan necesidades específicas del cliente, buscando evitar que el cliente cambie la marca por otras, para ello, el líder de mercadeo puede jugar con diversas herramientas para cautivar y retener el consumidor, como el uso de la publicidad para animar e incentivar al cliente potencial a probar algo innovador a través de diferentes contenidos que lo impacten.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Mercadeo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Variables de análisis',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Matrices de soporte',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Análisis del entorno',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Estrategias de <em>marketing<em>',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Herramientas de recolección de información',
            hash: 't_1_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Estrategias de <em>marketing</em>',
      referencia:
        'De Toro, J. y Villanueva, J. (2018) <em>Marketing estratégico</em>. Editorial Alfaomega, IESE, EUNSA',
      tipo: 'Libro',
      link:
        'https://www-alphaeditorialcloud-com.bdigital.sena.edu.co/reader/marketing-estrategico?location=2',
    },
    {
      tema: 'Análisis del entorno',
      referencia: 'Paris, J. (2018) Marketing estratégico. Editorial Alfaomega',
      tipo: 'Libro',
      link:
        'https://www-alphaeditorialcloud-com.bdigital.sena.edu.co/reader/marketing-estrategico-desde-el-paradigma-esencial?location=12',
    },
  ],
  glosario: [
    {
      termino: 'Comercio',
      significado:
        'existe gracias a la división del trabajo, la especialización y a las diferentes fuentes de los recursos, dado que la mayoría de las personas se centran en un pequeño aspecto de la producción, necesitan comercializar con otros para adquirir bienes y servicios diferentes a los que producen. ',
    },
    {
      termino: 'Demanda',
      significado:
        'es la cantidad de productos y servicios que se intentan comprar en un mercado específico. A mayor precio, menor demanda.  La demanda puede estar basada tanto en necesidades como en deseo de bienes no esenciales, pero en ambos casos influye la capacidad de pago del comprador.',
    },
    {
      termino: 'Globalización económica',
      significado:
        'es el resultado de la innovación humana y el progreso tecnológico. Se refiere a la creciente integración de las economías de todo el mundo, especialmente a través del comercio y los flujos financieros. ',
    },
    {
      termino: 'Macroeconomía',
      significado:
        'se encarga de estudiar los indicadores globales de la economía mediante el análisis de las variables agregadas, como el monto total de bienes y servicios producidos, el total de los ingresos, el nivel de empleo, de recursos productivos, la balanza de pagos, el tipo de cambio y el comportamiento general de los precios.',
    },
    {
      termino: 'Mayorista',
      significado:
        'hace referencia a la persona o empresa que se dedica a la compra y/o venta de productos por lotes, o en cantidades significativas. Es un intermediario entre la fábrica o importador y el minorista.',
    },
    {
      termino: 'Microeconomía',
      significado:
        'estudia el comportamiento económico de agentes individuales, como consumidores, empresas, trabajadores e inversores.',
    },
    {
      termino: 'Minorista',
      significado:
        'es la persona o empresa que vende productos al detal, es decir, por unidades. Es el enlace con el consumidor final.',
    },
    {
      termino: 'Oferta',
      significado:
        'es la cantidad de productos y servicios disponibles en un mercado específico. A mayor precio, mayor oferta.  Cantidad de bienes que los productores están dispuestos a colocar en el mercado para la venta en un período determinado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Asociación Nacional de Industriales. ANDI. Balance 2021 y perspectivas 2022. Disponible en:',
      link:
        'http://www.andi.com.co/uploads/Balance%202021%20y%20Perspectivas%202022%20-%20ANDI%20BMM.pdf',
    },
    {
      referencia:
        'Banco de la República de Colombia (2022). Variables macroeconómicas. Disponible en:',
      link: 'https://www.banrep.gov.co/es',
    },
    {
      referencia:
        'Banco Mundial (2022). Exportaciones e importaciones actuales. Disponible en',
      link: 'https://www.banrep.gov.co/es',
    },
    {
      referencia:
        'Departamento Administrativo Nacional de Estadística. DANE (2020). Encuesta de Micro negocios. Disponible en:',
      link:
        'https://microdatos.dane.gov.co/index.php/catalog/712/get_microdata',
    },
    {
      referencia:
        'Departamento Administrativo Nacional de Estadística. DANE (2021). Resultados conteo unidades económicas. Disponible en:',
      link:
        'https://www.dane.gov.co/index.php/estadisticas-por-tema/comercio-interno/censo-economico-de-colombia/conteo-de-unidades-economicas-2021',
    },
    {
      referencia:
        'Organización Mundial de Comercio (2020). OMC. Estadísticas comerciales. Disponible en:',
      link: 'https://www.wto.org/indexsp.htm',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesoría metodológica y pedagógica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Fabiola Sierra Sarmiento',
          cargo: 'Experto temático',
          centro: 'CIES - Regional Norte de Santander',
        },
        {
          nombre: 'Leydy Jhuliana Jaramillo Mejía',
          cargo: 'Diseño instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesoría Metodológica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrección de estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluación instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseño web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
