/* ------------------------------------------------------------------
   Fuente única de contenidos del sitio.
   Deriva del Inventario Maestro de Doris González Lemunao.

   REGLAS DE EDICIÓN
   - Solo se publican piezas con estado "Verificado" en el inventario.
   - La pieza L04 ("Políticas de vivienda en la ciudad de Santiago...")
     está marcada "Por confirmar" y por eso NO figura aquí. Ver
     ENTREGA/00_Pendientes_para_validar_con_Doris.md
   - Los resúmenes son originales, en primera persona, de 80 a 120
     palabras. No reproducen el texto de las fuentes.
   - Toda ficha conserva el enlace a la publicación original para no
     restarle tráfico al medio.
   ------------------------------------------------------------------ */

/* Cargo institucional. Verificado en dos fuentes primarias:
   Revista REDES / MINVU (firma del artículo, 2023) y la transcripción
   del Conversatorio de Mediación Extrajudicial en CVIP (2026).
   Si Doris pide otra denominación, se cambia solo aquí. */
window.CARGO = {
  titulo: "Encargada Nacional de la Secretaría Ejecutiva de Condominios",
  institucion: "Ministerio de Vivienda y Urbanismo",
};

window.TITULAR =
  "Trabajadora social y Magíster en Hábitat Residencial · Copropiedad inmobiliaria y Ley 21.442 · Gestión pública, vivienda y ciudad";

window.EJES = [
  "Copropiedad inmobiliaria y Ley 21.442",
  "Administración y convivencia en condominios",
  "Mediación y resolución de controversias",
  "Hábitat residencial y políticas de vivienda",
  "Gestión pública urbana",
  "Producción social del hábitat",
  "Participación comunitaria y género",
];

window.INVENTARIO = [
  /* ============================ COLUMNAS ============================ */
  {
    id: "C14",
    seccion: "columnas",
    tipo: "Columna",
    titulo: "Controversias en la copropiedad: mediación extrajudicial como instrumento estratégico",
    medio: "Cooperativa",
    fecha: "2026-08-11",
    anio: 2026,
    tema: "Mediación extrajudicial",
    etiquetas: ["Mediación", "Ley 21.442", "Municipios", "CVIP"],
    destacado: true,
    prioridad: "Alta",
    enlace: "https://opinion.cooperativa.cl/opinion/urbanismo/controversias-en-la-copropiedad-mediacion-extrajudicial-como/2026-08-11/061109.html",
    resumen:
      "Mi columna más reciente propone mirar la mediación extrajudicial como instrumento estratégico y no como último recurso. La Ley 21.442 ordena tres vías para resolver controversias en copropiedad —judicial, arbitraje y resolución extrajudicial—, y en los condominios de vivienda de interés público la mediación municipal es obligatoria por mandato del artículo 76. Planteo fortalecer el acceso de las comunidades a esos mecanismos, capacitar de forma permanente a los equipos municipales y del Ministerio, y priorizar las soluciones colaborativas antes de judicializar un conflicto. Los beneficios que observo en terreno son concretos: menos judicialización, prevención temprana y mejor salud comunitaria.",
  },
  {
    id: "C13",
    seccion: "columnas",
    tipo: "Columna",
    titulo: "Vivir en comunidad: un desafío cada vez más complejo",
    medio: "Cooperativa",
    fecha: "2026-02-25",
    anio: 2026,
    tema: "Convivencia",
    etiquetas: ["Convivencia", "Gastos comunes", "Corresponsabilidad"],
    prioridad: "Alta",
    enlace: "https://opinion.cooperativa.cl/opinion/urbanismo/vivir-en-comunidad-un-desafio-cada-vez-mas-complejo/2026-02-25/100607.html",
    resumen:
      "Esta columna insiste en algo incómodo: la mejor norma no reemplaza el compromiso de quienes habitan. Recorro el arco que va desde la antigua Ley N.º 6.071 hasta la legislación de 2022 para mostrar que la regulación se modernizó, pero que los conflictos más frecuentes —deudas de gastos comunes, deterioro de los bienes comunes— nacen del incumplimiento de obligaciones básicas. Mi planteamiento es directo: el bienestar individual depende del comportamiento colectivo, y cada residente debiera asumir que su propiedad exclusiva está enlazada con la copropiedad, cumpliendo sus obligaciones económicas y participando en la vida de la comunidad.",
  },
  {
    id: "C12",
    seccion: "columnas",
    tipo: "Columna",
    titulo: "Hacia una nueva era de la copropiedad en Chile: desafíos y consolidación",
    medio: "Cooperativa",
    fecha: "2026-01-14",
    anio: 2026,
    tema: "Consolidación normativa",
    etiquetas: ["Balance", "Registro de Administradores", "Territorio"],
    prioridad: "Alta",
    enlace: "https://opinion.cooperativa.cl/opinion/urbanismo/hacia-una-nueva-era-de-la-copropiedad-en-chile-desafios-y-consolidacion/2026-01-14/000358.html",
    resumen:
      "Con cuatro años de vigencia de la ley me propuse hacer un balance. Los datos ordenan la discusión: el 30,6 % de las viviendas urbanas del país está en régimen de copropiedad —alrededor de 1,5 millones de unidades—, la copropiedad concentra cerca de la mitad de las consultas que recibe el Ministerio, y el Registro Nacional de Administradores llegó a 8.174 inscritos tras la reglamentación de enero de 2025. Propongo tres líneas de trabajo: consolidación territorial con equipos técnicos regionalizados, integración tecnológica y digitalización del registro de condominios, y una política específica de mantención y seguridad para los condominios más vulnerables.",
  },
  {
    id: "C11",
    seccion: "columnas",
    tipo: "Columna",
    titulo: "Robustecer la institucionalidad frente a la creciente demanda ciudadana",
    medio: "Cooperativa",
    fecha: "2025-12-05",
    anio: 2025,
    tema: "Institucionalidad pública",
    etiquetas: ["Institucionalidad", "Asambleas", "Capacitación"],
    prioridad: "Alta",
    enlace: "https://opinion.cooperativa.cl/opinion/urbanismo/robustecer-la-institucionalidad-frente-a-la-creciente-demanda-ciudadana/2025-12-05/065734.html",
    resumen:
      "Aquí sostengo que la demanda ciudadana crece más rápido que la capacidad institucional, y que la salida no está en intervenir desde arriba sino en robustecer a las propias comunidades. Reconozco un límite real: la normativa no nos permite intervenir directamente en los conflictos internos de una copropiedad. Por eso propongo profundizar la capacitación para la vida comunitaria basada en colaboración y participación, fortalecer las asambleas como el espacio donde se reconstruyen la confianza y la cohesión, y ampliar el acceso a la información y al conocimiento de los propios derechos, articulando siempre el trabajo con los municipios.",
  },
  {
    id: "C10",
    seccion: "columnas",
    tipo: "Columna",
    titulo: "Diálogo y trabajo permanente para generar seguridad en condominios",
    medio: "Cooperativa",
    fecha: "2025-08-12",
    anio: 2025,
    tema: "Seguridad y convivencia",
    etiquetas: ["Seguridad", "Prevención", "Convivencia"],
    prioridad: "Alta",
    enlace: "https://opinion.cooperativa.cl/opinion/urbanismo/dialogo-y-trabajo-permanente-para-generar-seguridad-en-condominios/2025-08-12/062324.html",
    resumen:
      "Escribí sobre seguridad en condominios después de constatar la agudización de los conflictos y algunos episodios de violencia en distintas comunidades. Aclaro un punto que suele confundirse: no tenemos atribuciones directas en materia de seguridad, y precisamente por eso adoptamos un enfoque preventivo y prospectivo, con espacios de diálogo junto a otras instituciones. Insisto en que cada condominio tiene una realidad propia según sus características, sus relaciones y quienes lo habitan, y en que la ley alcanza a todos los condominios del país, no solo a los de interés público. Comprometo prevención, educación ciudadana y guías prácticas para administradores y residentes.",
  },
  {
    id: "C09",
    seccion: "columnas",
    tipo: "Columna",
    titulo: "Secretaría de Condominios: un nuevo capítulo en la historia de la copropiedad chilena",
    medio: "Cooperativa",
    fecha: "2025-04-16",
    anio: 2025,
    tema: "Institucionalidad",
    etiquetas: ["Institucionalidad", "Ley 21.442", "Política habitacional"],
    prioridad: "Alta",
    enlace: "https://opinion.cooperativa.cl/opinion/urbanismo/secretaria-de-condominios-un-nuevo-capitulo-en-la-historia-de-la/2025-04-16/090121.html",
    resumen:
      "Esta columna explica por qué la creación de la Secretaría Ejecutiva de Condominios marca un capítulo nuevo. Durante décadas la copropiedad no tuvo un organismo especializado que coordinara a las distintas instancias del Estado, aunque alrededor del 30 % de las viviendas urbanas ya opera bajo este régimen y la cifra sigue creciendo. Describo las funciones que asumimos: unificar la interpretación de la normativa, mantener los registros de administradores y facilitar el acceso a información para los copropietarios. Y planteo lo que falta: políticas habitacionales ajustadas a las realidades territoriales y regionales, con mecanismos efectivos de consulta, reclamo y sanción.",
  },
  {
    id: "C08",
    seccion: "columnas",
    tipo: "Columna",
    titulo: "Reglamento de la ley de Copropiedad: otro paso a la gestión de condominios",
    medio: "Cooperativa",
    fecha: "2025-01-31",
    anio: 2025,
    tema: "Reglamento Ley 21.442",
    etiquetas: ["Reglamento", "Decreto Supremo 7", "Administración"],
    destacado: true,
    prioridad: "Alta",
    enlace: "https://opinion.cooperativa.cl/opinion/urbanismo/reglamento-de-la-ley-de-copropiedad-otro-paso-a-la-gestion-de-condominios/2025-01-31/104852.html",
    resumen:
      "Con la publicación del Decreto Supremo N.º 7, en enero de 2025, la ley pasó a tener reglamento. En esta columna reviso qué cambia en la gestión cotidiana: representación que incorpora a arrendatarios, asambleas virtuales, contabilidad detallada con información mensual, planes anuales de mantención de los bienes comunes, seguros colectivos contra incendio, registro actualizado de residentes con plazos y sanciones, estacionamientos para bicicletas en proyectos nuevos y la posibilidad de que un 15 % de los copropietarios reclame contra la administración. Sostengo que el reglamento empuja hacia transparencia, inclusión y sostenibilidad, y que su valor real se medirá en la aplicación.",
  },
  {
    id: "C07",
    seccion: "columnas",
    tipo: "Columna",
    titulo: "Plataforma de la nueva ley de Copropiedad: paso decisivo hacia la modernización",
    medio: "Cooperativa",
    fecha: "2024-09-16",
    anio: 2024,
    tema: "Modernización y plataforma",
    etiquetas: ["Modernización", "Registro de Administradores", "Datos"],
    prioridad: "Alta",
    enlace: "https://opinion.cooperativa.cl/opinion/urbanismo/plataforma-de-la-nueva-ley-de-copropiedad-paso-decisivo-hacia-la/2024-09-16/193853.html",
    resumen:
      "Escribí sobre la plataforma digital de la Ley 21.442 como paso de modernización del Estado. Explico qué permite: validar mediante el Registro Nacional que quien administra cumple los requisitos legales, canalizar reclamaciones y sanciones, y construir una base de datos nacional de condominios en coordinación con los municipios, insumo indispensable para formular política pública. También advierto lo que la plataforma no resuelve: no es una solución mágica frente al deterioro de la infraestructura ni frente a los conflictos entre copropietarios. Por eso insisto en capacitación en la normativa y en flujos internos capaces de responder a tiempo.",
  },
  {
    id: "C06",
    seccion: "columnas",
    tipo: "Columna",
    titulo: "Reforzar la vida comunitaria para detener el deterioro de la vida en común",
    medio: "Cooperativa",
    fecha: "2024-06-06",
    anio: 2024,
    tema: "Convivencia y comunidad",
    etiquetas: ["Convivencia", "Municipios", "Capacitación"],
    prioridad: "Alta",
    enlace: "https://opinion.cooperativa.cl/opinion/urbanismo/reforzar-la-vida-comunitaria-para-detener-el-deterioro-de-la-vida-en-comun/2024-06-06/064101.html",
    resumen:
      "Aquí abordo el deterioro de la vida en común y por qué necesita respuesta institucional. Identifico tres fenómenos que se cruzan: la expansión de los condominios, la complejización del desarrollo inmobiliario y las nuevas dinámicas urbanas asociadas al alza del precio del suelo, con cuatro regiones que concentran cerca del 82 % de los condominios del país. Propongo fortalecer los equipos ministeriales dedicados a condominios, ampliar la capacitación ciudadana y los talleres de formación, y profundizar el trabajo con los municipios, para transitar desde copropiedades desorganizadas hacia administraciones estructuradas capaces de sostener la convivencia.",
  },
  {
    id: "C05",
    seccion: "columnas",
    tipo: "Columna",
    titulo: "Juntos y juntas rumbo a una mejor y adecuada administración",
    medio: "Cooperativa",
    fecha: "2024-04-10",
    anio: 2024,
    tema: "Administración de condominios",
    etiquetas: ["Administración", "Registro de Administradores", "Transparencia"],
    prioridad: "Alta",
    enlace: "https://opinion.cooperativa.cl/opinion/urbanismo/juntos-y-juntas-rumbo-a-una-mejor-y-adecuada-administracion/2024-04-10/001200.html",
    resumen:
      "A dos años de la entrada en vigencia de la ley dediqué esta columna a la profesionalización de quienes administran condominios. El Registro Nacional de Administradores es obligatorio, único, público y gratuito, y alcanza a todas las personas que ejercen la función, sea de forma remunerada o gratuita; el artículo 20 fija además competencias mínimas. Con el reglamento del registro publicado en el Diario Oficial en marzo, sostengo que la transparencia se juega en el acceso público a la información y en el monitoreo continuo de la implementación, para detectar a tiempo los nudos críticos que aparecen en los territorios.",
  },
  {
    id: "C04",
    seccion: "columnas",
    tipo: "Columna",
    titulo: "La función pública y el trabajo en condominios",
    medio: "Cooperativa",
    fecha: "2024-02-14",
    anio: 2024,
    tema: "Gestión pública",
    etiquetas: ["Gestión pública", "Atención ciudadana", "Corresponsabilidad"],
    prioridad: "Alta",
    enlace: "https://opinion.cooperativa.cl/opinion/ciudades/la-funcion-publica-y-el-trabajo-en-condominios/2024-02-14/162234.html",
    resumen:
      "Escribí sobre el sentido de la función pública cuando el trabajo ocurre dentro de las comunidades. La implementación de la ley no se sostiene sola: requiere sinergia entre el Estado, las administraciones y la ciudadanía. Reviso las herramientas que el Ministerio puso en marcha —el Registro Nacional de Administradores y el sistema de reclamaciones— y las cifras de atención ciudadana: más de mil consultas recibidas desde abril de 2022 y más de quinientas respondidas durante 2023 a través del Sistema Integrado de Atención Ciudadana. Mi conclusión es que informar bien y asumir corresponsabilidad son parte del servicio público, no un agregado.",
  },
  {
    id: "C03",
    seccion: "columnas",
    tipo: "Columna",
    titulo: "Mayor colaboración, diálogo y participación para la vida en condominios",
    medio: "Cooperativa",
    fecha: "2023-11-23",
    anio: 2023,
    tema: "Convivencia comunitaria",
    etiquetas: ["Colaboración", "Cultura cívica", "Participación"],
    prioridad: "Media",
    enlace: "https://opinion.cooperativa.cl/opinion/urbanismo/mayor-colaboracion-dialogo-y-participacion-para-la-vida-en-condominios/2023-11-23/113711.html",
    resumen:
      "Esta columna parte de un dato que me inquietó: en una encuesta nacional solo un 24 % de las personas elige colaborar para resolver un problema común, mientras cerca del 70 % reclama o se muestra indiferente, y apenas un 2 % confía en que los demás cumplirán los acuerdos. Lo que escucho en los talleres coincide con esa cifra: se reclama mucho y se participa poco. Sostengo que la convivencia en condominios exige un cambio cultural y no solo normativo, y que el Estado debe promover la colaboración en los espacios compartidos con soluciones de mayor escala, incorporando estas materias en la formación escolar.",
  },
  {
    id: "C02",
    seccion: "columnas",
    tipo: "Columna",
    titulo: "Estado ciudadano y copropietarios más activos",
    medio: "Cooperativa",
    fecha: "2023-10-17",
    anio: 2023,
    tema: "Participación y corresponsabilidad",
    etiquetas: ["Participación", "Educación comunitaria", "Liderazgos"],
    prioridad: "Media",
    enlace: "https://opinion.cooperativa.cl/opinion/urbanismo/estado-ciudadano-y-copropietarios-mas-activos/2023-10-17/091207.html",
    resumen:
      "Aquí planteo un desplazamiento que me parece decisivo: pasar de habitantes entendidos como clientes compradores a copropietarios que ejercen ciudadanía. Los departamentos crecieron del 8,5 % al 17,5 % del parque residencial en tres décadas y cerca de un cuarto de la población vive hoy bajo régimen de copropiedad; sin embargo, las relaciones humanas cambian más lento que las leyes. Propongo alinear los programas del Ministerio con las necesidades reales de los copropietarios, fortalecer el diálogo entre instituciones, administraciones y comunidades, e incorporar la educación para la vida en común en la formación escolar y universitaria, junto con capacitación permanente para nuevos liderazgos comunitarios.",
  },
  {
    id: "C01",
    seccion: "columnas",
    tipo: "Columna",
    titulo: "Nueva ley de Copropiedad Inmobiliaria, el desafío de vivir en comunidad",
    medio: "Cooperativa",
    fecha: "2023-01-12",
    anio: 2023,
    tema: "Ley 21.442 y convivencia",
    etiquetas: ["Ley 21.442", "Déficit habitacional", "Organización barrial"],
    prioridad: "Media",
    nota: "Primera columna localizada del archivo.",
    enlace: "https://opinion.cooperativa.cl/opinion/urbanismo/nueva-ley-de-copropiedad-inmobiliaria-el-desafio-de-vivir-en-comunidad/2023-01-12/222709.html",
    resumen:
      "Escribí esta columna al comenzar la implementación de la Ley 21.442 para plantear una idea que sigo defendiendo: el futuro habitacional de Chile es en copropiedad, y eso obliga a mirar la convivencia con la misma seriedad con que miramos el déficit y la escasez de suelo bien localizado. Repaso las cifras del catastro de condominios de vivienda social —1.626 conjuntos y 350.880 unidades, con Valparaíso, Biobío y la Región Metropolitana concentrando el 82,2 %— y sostengo que no basta con construir: hay que fortalecer la organización barrial, abrir espacios de diálogo y difundir la nueva normativa dentro de las comunidades.",
  },

  /* ========================== INVESTIGACIÓN ========================== */
  {
    id: "A01",
    seccion: "investigacion",
    grupo: "Tesis",
    tipo: "Tesis de magíster",
    titulo: "Movimiento de pobladores: una cuestión de mujeres. Vivencias, transformaciones, sentires y conciencia",
    medio: "Universidad de Chile",
    fecha: "2021",
    anio: 2021,
    tema: "Hábitat, género y movimientos",
    etiquetas: ["Género", "Hábitat residencial", "Movimiento de pobladores"],
    destacado: true,
    prioridad: "Alta",
    enlace: "https://repositorio.uchile.cl/bitstream/handle/2250/181227/movimiento-de-pobladores.pdf?sequence=1",
    enlaceTexto: "Descargar en el repositorio de la U. de Chile",
    referencia:
      "González Lemunao, D. (2021). Movimiento de pobladores: una cuestión de mujeres: vivencias, transformaciones, sentires, y conciencia. Tesis de Magíster en Hábitat Residencial, Facultad de Arquitectura y Urbanismo, Universidad de Chile. Profesor guía: Walter Imilán Ojeda. DOI 10.58011/et89-ey67. Acceso abierto, licencia CC BY-NC-ND 3.0 US.",
    resumen:
      "Mi tesis de Magíster en Hábitat Residencial, desarrollada en la Facultad de Arquitectura y Urbanismo de la Universidad de Chile con la guía del profesor Walter Imilán, pregunta por el lugar de las mujeres en el movimiento de pobladores. La escribí desde una convicción: la lucha por la vivienda ha sido sostenida mayoritariamente por mujeres, y ese trabajo rara vez queda registrado. La investigación recoge vivencias, transformaciones, sentires y formas de conciencia que se producen dentro de la organización, para mostrar cómo la experiencia de habitar y de organizarse transforma la vida de quienes participan. Está disponible en acceso abierto.",
  },
  {
    id: "A03",
    seccion: "investigacion",
    grupo: "Artículos técnicos",
    tipo: "Artículo técnico",
    titulo: "Desafíos para la convivencia en el nuevo régimen de copropiedades",
    medio: "Revista REDES, MINVU",
    fecha: "2023-12",
    anio: 2023,
    tema: "Nuevo régimen de copropiedad",
    etiquetas: ["Convivencia", "Territorio", "Vivienda social"],
    destacado: true,
    prioridad: "Alta",
    enlace: "https://centrodeestudios.minvu.gob.cl/wp-content/uploads/2023/12/10-dgonzalez.pdf",
    enlaceTexto: "Leer el artículo (PDF oficial)",
    referencia:
      "González Lemunao, D. (2023). Desafíos para la convivencia en el nuevo régimen de copropiedades. Revista REDES, Centro de Estudios del MINVU, pp. 30-32.",
    resumen:
      "Este artículo técnico sostiene que las copropiedades no son solo estructuras físicas: son organismos vivos y dinámicos, con culturas, estilos de vida e intereses diversos que la política pública debe considerar. Propongo abordarlas en tres dimensiones —físico-espacial, de diseño y planificación, y social— y reviso la distribución territorial de los condominios de vivienda social: la Región Metropolitana concentra el 56,4 % de las unidades, seguida de Valparaíso con 17,9 %, Biobío con 7,9 % y O'Higgins con 4,8 %. Están presentes en 130 de las 346 comunas del país y solo veinte comunas reúnen el 56,4 % de las unidades a nivel nacional.",
  },
  {
    id: "A02",
    seccion: "investigacion",
    grupo: "Artículos técnicos",
    tipo: "Artículo técnico",
    titulo: "Convivir en condominio",
    medio: "Revista REDES, MINVU",
    fecha: "2023",
    anio: 2023,
    tema: "Convivencia en condominios",
    etiquetas: ["Convivencia", "Tejido social", "Vivienda social"],
    prioridad: "Alta",
    enlace: "https://centrodeestudios.minvu.gob.cl/wp-content/uploads/2023/07/REVISTA-REDES_1_CONDOMINIOS.pdf",
    enlaceTexto: "Leer el artículo (PDF oficial)",
    referencia:
      "González Lemunao, D. (2023). Convivir en condominio. Revista REDES, Centro de Estudios del MINVU, pp. 32-33.",
    resumen:
      "En este artículo para la Revista REDES planteo que el futuro de las ciudades chilenas es en copropiedad, y que ese futuro exige políticas capaces de propiciar el diálogo sobre la vida en común. Reviso el crecimiento del parque en departamentos entre los censos de 1992, 2002 y 2017 —de 8,5 % a 17,5 % del parque residencial— junto a las cifras del catastro de condominios de vivienda social. Describo además los desafíos de la Secretaría Ejecutiva de Condominios: colaborar en la reparación de la infraestructura existente y fomentar la recomposición del tejido social, reconociendo las capacidades ya instaladas en las comunidades.",
  },

  /* ============================= LIBROS ============================= */
  {
    id: "L03",
    seccion: "investigacion",
    grupo: "Libros y capítulos",
    tipo: "Coordinación de libro",
    titulo: "Ukamau: Conquistando la Vida Buena",
    medio: "Fundación FEMAN",
    fecha: "2021-11",
    anio: 2021,
    tema: "Producción social del hábitat",
    etiquetas: ["Producción social del hábitat", "Barrio Maestranza", "Memoria"],
    prioridad: "Alta",
    enlace: "https://www.researchgate.net/publication/356814189_UKAMAU_Conquistando_la_vida_buena",
    enlaceTexto: "Ver la ficha del libro",
    referencia:
      "Abufhele, V., González Lemunao, D. y Paulsen, A. (coords.) (2021). Ukamau: Conquistando la Vida Buena. Fundación FEMAN.",
    resumen:
      "Coordiné este libro junto a Valentina Abufhele y Alex Paulsen. Reúne investigación y testimonio sobre un proceso de producción social del hábitat: cómo una organización de pobladores llegó a construir un barrio en la ciudad central, con qué decisiones de diseño y con qué formas de participación. Mi trabajo consistió en articular las voces de la comunidad con las de investigadoras e investigadores, para que el registro no quedara solo en la memoria oral. Es una de las fuentes principales para entender el caso de Barrio Maestranza desde dentro del proceso.",
  },
  {
    id: "L02",
    seccion: "investigacion",
    grupo: "Libros y capítulos",
    tipo: "Capítulo de libro",
    titulo: "Las mujeres conductoras de cambios",
    medio: "Vivienda Digna",
    fecha: "2021",
    anio: 2021,
    tema: "Mujeres y vivienda",
    etiquetas: ["Género", "Vivienda", "Organización"],
    prioridad: "Media",
    enlace: "https://editorialauncreemos.cl/producto/vivienda-digna-edicion-digital/",
    enlaceTexto: "Ver el libro en la editorial",
    referencia:
      "González Lemunao, D. (2021). Las mujeres conductoras de cambios. En Vivienda Digna (edición digital). Existe un extracto difundido por Le Monde diplomatique.",
    resumen:
      "Este capítulo del libro Vivienda Digna aborda el papel conductor de las mujeres en las luchas por la vivienda. Retomo una idea que también trabajé en mi tesis: son mayoritariamente mujeres quienes sostienen la organización, la asamblea, el trámite y el cuidado durante los años que toma conseguir una vivienda, y ese aporte suele quedar fuera del relato público. El texto se publicó en edición digital y circula además un extracto difundido por Le Monde diplomatique. Lo incluyo aquí porque conecta mi investigación sobre hábitat residencial y género con la experiencia concreta de los comités.",
  },
  {
    id: "L01",
    seccion: "investigacion",
    grupo: "Libros y capítulos",
    tipo: "Capítulo de libro",
    titulo: "Del estallido a la crisis del hambre",
    medio: "Proceso Constituyente",
    fecha: "2020",
    anio: 2020,
    tema: "Organización social y crisis",
    etiquetas: ["Archivo", "Organización social", "Coyuntura"],
    prioridad: "Archivo",
    enlace: "https://www.researchgate.net/publication/344043405_Paso_a_paso_hacia_la_constituyente",
    enlaceTexto: "Ver la ficha de la publicación",
    referencia:
      "González Lemunao, D. (2020). Del estallido a la crisis del hambre. En Paso a paso hacia la constituyente. Paginación final por confirmar.",
    resumen:
      "Este capítulo forma parte de una publicación sobre el proceso constituyente y aborda el período que va desde la revuelta social de octubre de 2019 hasta la crisis social y alimentaria del primer año de pandemia. Escribo desde la experiencia de la organización popular y su papel en sostener la vida cotidiana cuando las respuestas institucionales resultaron insuficientes. Es un texto de coyuntura, anterior a mi trabajo en gestión pública, que conservo como parte del archivo documental de mi trayectoria social y territorial. Queda pendiente confirmar la paginación final de la edición.",
  },

  /* =========================== ENTREVISTAS =========================== */
  {
    id: "E01",
    seccion: "entrevistas",
    grupo: "Entrevistas",
    tipo: "Entrevista",
    titulo: "«Sin la movilización, en algunos casos marcada por la radicalización, no sería posible desbordar los límites de la política de vivienda»",
    medio: "CIPER",
    fecha: "2021-01-13",
    anio: 2021,
    tema: "Barrio Maestranza y política de vivienda",
    etiquetas: ["Barrio Maestranza", "Política de vivienda", "Participación"],
    destacado: true,
    prioridad: "Alta",
    enlace: "https://www.ciperchile.cl/2021/01/13/sin-la-movilizacion-en-algunos-casos-marcada-por-la-radicalizacion-no-seria-posible-desbordar-los-limites-de-la-politica-de-vivienda/",
    resumen:
      "Entrevista de Mauricio Ávila Cárdenas para CIPER, publicada semanas después de la entrega de Barrio Maestranza. Es la conversación más extensa que he dado sobre ese proceso: 424 familias, alrededor de diez años de organización, departamentos de 62 metros cuadrados —siete más que el estándar— y un diseño que privilegió los espacios comunes, impulsado por Fernando Castillo Velasco. Ahí explico también la tesis que da título a la entrevista: sin movilización no habría sido posible desbordar los límites de una política de vivienda que durante años construyó unidades sin servicios ni equipamiento. Hablo desde mi rol de entonces como vocera del movimiento.",
  },
  {
    id: "E02",
    seccion: "entrevistas",
    grupo: "Entrevistas",
    tipo: "Entrevista",
    titulo: "«Las comunidades y el conocimiento situado que existe al interior de los barrios y las poblaciones no están siendo tomados en cuenta»",
    medio: "Revista Planeo, N.º 42",
    fecha: "2020-01-08",
    anio: 2020,
    tema: "Barrios, participación y conocimiento situado",
    etiquetas: ["Conocimiento situado", "Derecho a la ciudad", "Diseño participativo"],
    prioridad: "Alta",
    enlace: "https://revistaplaneo.cl/2020/01/08/entrevista-a-doris-gonzalez-las-comunidades-y-el-conocimiento-situado-que-existe-al-interior-de-los-barrios-y-las-poblaciones-no-estan-siendo-tomados-en-cuenta-y-eso-tiene-un-valor-que-es-tremendam/",
    resumen:
      "Entrevista de Denisse Larracilla para el número 42 de Revista Planeo, dedicado a ciudades rebeldes. Es la conversación donde formulo con más claridad una idea que sigo usando: el conocimiento situado que existe en los barrios y las poblaciones no está siendo tomado en cuenta, y tiene un valor enorme. Hablo de democratizar la ciudad más allá de la vivienda —política de suelo, arriendo regulado, infraestructura equitativa— y del caso de Maestranza San Eugenio como experiencia de diseño participativo. Planteo además qué le pido a las y los profesionales: trabajar con las comunidades y no asesorarlas desde afuera.",
  },
  {
    id: "E05",
    seccion: "entrevistas",
    grupo: "Entrevistas",
    tipo: "Entrevista",
    titulo: "«Hoy el derecho de la ciudad se entrega al mercado»",
    medio: "Radio JGM, Universidad de Chile",
    fecha: "",
    anio: null,
    tema: "Derecho a la ciudad",
    etiquetas: ["Derecho a la ciudad", "Suelo", "Segregación"],
    prioridad: "Media",
    nota: "Fecha de publicación pendiente de registro.",
    enlace: "https://radiojgm.uchile.cl/doris-gonzalez-lemunao-hoy-el-derecho-de-la-ciudad-se-entrega-al-mercado/",
    resumen:
      "Entrevista de Radio JGM de la Universidad de Chile sobre derecho a la ciudad. El planteamiento central es el que da título a la conversación: cuando el suelo y la localización quedan entregados al mercado, el derecho a la ciudad se vuelve un privilegio y no una garantía. Hablo de segregación residencial, de acceso a suelo bien localizado y del papel que juegan las comunidades organizadas para revertirlo. Es una de las piezas que mejor resume mi mirada sobre vivienda y ciudad en el período previo a mi ingreso al servicio público.",
  },
  {
    id: "E03",
    seccion: "entrevistas",
    grupo: "Archivo",
    tipo: "Entrevista",
    titulo: "«El proceso constituyente y la nueva Constitución corren peligro en Chile»",
    medio: "Tiempo Argentino",
    fecha: "2021-12-16",
    anio: 2021,
    tema: "Trayectoria social y libro",
    etiquetas: ["Archivo", "Proceso constituyente"],
    prioridad: "Archivo",
    enlace: "https://www.tiempoar.com.ar/ta_article/doris-gonzalez-lemunao-el-proceso-constituyente-y-la-nueva-constitucion-corren-peligro-en-chile/",
    resumen:
      "Entrevista publicada por Tiempo Argentino durante el proceso constituyente chileno. Conversamos sobre mi trayectoria social y sobre el libro que había coordinado ese año, en un momento de alta incertidumbre política. La conservo en el archivo de este sitio por completitud documental: registra un momento y un rol anteriores a mi trabajo actual en gestión pública y no representa las líneas técnicas que desarrollo hoy. Aparece aquí sin destacarse, tal como corresponde a una pieza de archivo.",
  },
  {
    id: "E04",
    seccion: "entrevistas",
    grupo: "Archivo",
    tipo: "Entrevista en video",
    titulo: "Entrevista a Doris González, dirigenta de Ukamau",
    medio: "El Desconcierto",
    fecha: "2017-08-17",
    anio: 2017,
    tema: "Trayectoria política",
    etiquetas: ["Archivo", "Trayectoria"],
    prioridad: "Archivo",
    enlace: "https://eldesconcierto.cl/2017/08/17/video-doris-gonzalez-dirigenta-de-ukamau-si-el-frente-amplio-se-queda-en-las-cupulas-va-a-ser-mas-de-lo-mismo",
    resumen:
      "Entrevista en video publicada por El Desconcierto en 2017, cuando era dirigenta del movimiento de pobladores. Trata sobre política, representación y la relación entre las organizaciones sociales y las coaliciones políticas de la época. La incluyo en el archivo por transparencia respecto de mi recorrido: es un registro de trayectoria y no una posición actual. Mi trabajo hoy se desarrolla en el ámbito de la política pública de copropiedad inmobiliaria, y este material se conserva sin priorizarse.",
  },

  /* =========================== MULTIMEDIA =========================== */
  {
    id: "M01",
    seccion: "entrevistas",
    grupo: "Multimedia",
    tipo: "Webinar",
    titulo: "Aspectos claves del Reglamento de la Ley 21.442",
    medio: "ComunidadFeliz",
    fecha: "2025-01-30",
    anio: 2025,
    tema: "Reglamento de copropiedad",
    etiquetas: ["Reglamento", "Administración", "Capacitación"],
    destacado: true,
    prioridad: "Alta",
    enlace: "https://www.youtube.com/watch?v=quBYr73ehP4",
    enlaceTexto: "Ver el webinar",
    resumen:
      "Charla legal organizada por ComunidadFeliz pocas semanas después de la publicación del Decreto Supremo N.º 7. Expuse los aspectos clave del reglamento de la Ley 21.442: qué cambia en las asambleas, en la contabilidad y en la información mensual que recibe cada copropietario, cómo operan los planes de mantención y los seguros colectivos, y qué plazos y sanciones se aplican. Es el material más útil para administradoras, administradores y comités que necesitan entender la aplicación práctica del reglamento y no solo su texto.",
  },
  {
    id: "M02",
    seccion: "entrevistas",
    grupo: "Multimedia",
    tipo: "Podcast",
    titulo: "Gastos comunes, historias no comunes — Episodio 5",
    medio: "ComunidadFeliz",
    fecha: "",
    anio: null,
    tema: "Ley 21.442 y administración",
    etiquetas: ["Gastos comunes", "Administración", "Divulgación"],
    prioridad: "Alta",
    nota: "Fecha del episodio pendiente de registro.",
    enlace: "https://www.comunidadfeliz.cl/eventos/nuevo-podcast-gastos-comunes-historias-no-comunes--ep5",
    enlaceTexto: "Escuchar el episodio",
    resumen:
      "Episodio del podcast de ComunidadFeliz dedicado a la Ley 21.442 y a la administración de condominios. En formato conversado abordamos las preguntas que más llegan a la Secretaría: qué obligaciones tiene quien administra, cómo se ordenan los gastos comunes, qué puede hacer una comunidad frente a un incumplimiento y por dónde empezar cuando una copropiedad está desorganizada. Me interesan estos espacios porque llegan a públicos que no leen el Diario Oficial y que necesitan respuestas aplicables en la vida cotidiana de su comunidad.",
  },
  {
    id: "M03",
    seccion: "entrevistas",
    grupo: "Multimedia",
    tipo: "Exposición",
    titulo: "Exposición ante la Comisión de Desarrollo Social sobre Barrio Maestranza",
    medio: "Cámara de Diputados",
    fecha: "2021-06-23",
    anio: 2021,
    tema: "Barrio Maestranza",
    etiquetas: ["Barrio Maestranza", "Congreso", "Producción social del hábitat"],
    prioridad: "Media",
    enlace: "https://www.youtube.com/watch?v=w5vpWC85-5U",
    enlaceTexto: "Ver la exposición",
    resumen:
      "Exposición ante la Comisión de Desarrollo Social sobre el proyecto Barrio Maestranza. Concurrí a explicar cómo se construyó: la organización previa, el modelo de gestión, el codiseño con las familias y las condiciones que hicieron posible levantar un proyecto de vivienda en la ciudad central y no en la periferia. Es un registro útil para quienes estudian producción social del hábitat, porque muestra el caso expuesto ante el Congreso y no solo relatado desde la organización.",
  },

  /* ============ PROYECTOS Y RECONOCIMIENTOS ============ */
  {
    id: "P01",
    seccion: "proyectos",
    grupo: "Reconocimientos",
    tipo: "Reconocimiento",
    titulo: "Premio Aporte Urbano 2021 — Mejor Proyecto de Integración Social",
    medio: "Premio Aporte Urbano · nota de la FAU, Universidad de Chile",
    fecha: "2021-12-29",
    anio: 2021,
    tema: "Proyecto habitacional participativo",
    etiquetas: ["Reconocimiento", "Barrio Maestranza", "Integración social"],
    destacado: true,
    prioridad: "Alta",
    enlace: "https://fau.uchile.cl/noticias/182982/egresada-de-la-escuela-de-postgrado-gana-premio-aporte-urbano-pau2021-",
    enlaceTexto: "Leer la nota de la FAU",
    resumen:
      "El Premio Aporte Urbano 2021 reconoció a Barrio Maestranza en la categoría de mejor proyecto de integración social. El premio lo convocan el Ministerio de Vivienda y Urbanismo junto a la Cámara Chilena de la Construcción, la Asociación de Desarrolladores Inmobiliarios, el Consejo Nacional de Desarrollo Urbano, el Colegio de Arquitectos de Chile y la Asociación de Oficinas de Arquitectos. El proyecto se levantó en terrenos ferroviarios de Estación Central: 424 departamentos de 62 metros cuadrados, con un proceso de diseño participativo. Recibí el premio en representación de la comunidad y la Facultad de Arquitectura y Urbanismo destacó el reconocimiento.",
  },
  {
    id: "P02",
    seccion: "proyectos",
    grupo: "Presentaciones sectoriales",
    tipo: "Presentación",
    titulo: "Nueva Ley de Copropiedad en Edifica 2022",
    medio: "Construye2025",
    fecha: "2022",
    anio: 2022,
    tema: "Implementación Ley 21.442",
    etiquetas: ["Ley 21.442", "Sector construcción", "Implementación"],
    prioridad: "Media",
    enlace: "https://construye2025.cl/tag/doris-gonzalez/",
    enlaceTexto: "Ver la cobertura",
    resumen:
      "Presentación sobre la implementación de la Ley 21.442 en Edifica 2022, registrada por la plataforma Construye2025. Expuse ante el sector de la construcción qué implica la nueva ley para quienes desarrollan proyectos acogidos a copropiedad: obligaciones de la administración, entrega de los bienes comunes, reglamento de copropiedad y las condiciones que determinan si una comunidad podrá gestionarse bien desde el primer día. Dejo constancia de estas instancias porque muestran que la ley se discute también con el mundo privado y no solo con las comunidades.",
  },
];

/* Caso destacado de la sección Proyectos. Todas las cifras están
   verificadas en al menos dos fuentes públicas (CIPER 2021 y la nota
   de la FAU sobre el Premio Aporte Urbano 2021). */
window.CASO_MAESTRANZA = {
  titulo: "Barrio Maestranza",
  lugar: "Estación Central, Santiago",
  datos: [
    { cifra: "424", glosa: "viviendas entregadas a las familias organizadas" },
    { cifra: "62 m²", glosa: "superficie por departamento, siete más que el estándar" },
    { cifra: "~10 años", glosa: "de organización previa a la entrega" },
    { cifra: "2020", glosa: "entrega del conjunto, en noviembre" },
    { cifra: "PAU 2021", glosa: "Premio Aporte Urbano, integración social" },
  ],
};
