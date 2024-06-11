<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-4
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Mercadeo
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p En el estudio del comportamiento del mercado, se deben considerar factores que permitan analizar los productos de manera que respondan eficazmente a las necesidades de la población. Estos factores se derivan de los intereses y beneficios que surgen del uso de los productos. Lo anterior implica la colaboración de toda la organización para alcanzar los objetivos propuestos. Se invita a explorar el componente formativo a través de la observación detallada del concepto de mercadeo que se presentará a continuación.
    
    figure.mb-4(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p Con base en lo expuesto, el mercadeo se consolida como un conjunto de acciones y actividades encaminadas a satisfacer las necesidades de los clientes, generando un valor adecuado a cambio. Esto implica una investigación continua del mercado para comprender las necesidades del cliente y lo que están dispuestos a hacer para satisfacerlas.
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En la actualidad, el mercadeo es un componente fundamental para el crecimiento de cualquier negocio o empresa, independientemente de su tamaño. De hecho, los negocios emergentes que exploran el mercado están destinados a integrar el <i>marketing</i> como parte esencial de su estrategia, ya que les proporciona resistencia y fluidez en el ámbito comercial. El mercadeo no solo se trata de qué se dice, sino también de cómo se comunica, de transmitir las cualidades sobresalientes de un producto y explicar por qué la gente debería elegirlo por encima de la competencia.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p Para muchos especialistas dedicados al mercadeo, también conocido como <i>marketing</i>, este solía limitarse a anuncios, folletos o comunicados de prensa. Sin embargo, en la actualidad, con la proliferación de las redes sociales, el <i>marketing</i> ha experimentado una transformación notable. Ahora, una estrategia efectiva de <i>marketing</i> se materializa a través de plataformas como Instagram, Twitter o Facebook, donde se destacan las virtudes del producto y se brinda acceso directo al cliente mientras navega por sus redes sociales.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .cajon.color-primario.p-4.mb-4      
          p Una forma esencial de llevar a cabo el mercadeo es a través del <i>marketing</i>, definido como la intersección entre la empresa y el cliente; la convergencia de los intereses de la empresa con las necesidades del comprador. A un nivel más profundo, implica el proceso de comprender a los clientes, establecer y mantener relaciones sólidas con ellos. En última instancia, el mercadeo se convierte en la clave del éxito de cualquier organización, sin importar su tamaño. Podría decirse que todas las empresas necesitan del <i>marketing</i> para prosperar, ya que ¿cómo pueden vender sus productos y servicios en el mercado si nadie los conoce?"
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p Así, la comprensión del mercadeo se adentra en el conocimiento profundo de los clientes, involucrando el compromiso de todos los trabajadores interesados en demostrar a los clientes potenciales su dedicación a resolver problemas reales. No se limitan a actuar como si les importara; realmente les importa, y esto se evidencia en sus acciones. Su enfoque genuino es ayudar a los clientes a mejorar sus vidas mediante contenido relevante, experiencias significativas y una pasión palpable. Y, si tienen la oportunidad, lo hacen a través de los productos o servicios que ofrecen.

        //- p Así, la comprensión del mercadeo se adentra en el conocimiento profundo de los clientes, involucrando el compromiso de todos los trabajadores interesados en demostrar a los clientes potenciales su dedicación a resolver problemas reales. No se limitan a actuar como si les importara; realmente les importa, y esto se evidencia en sus acciones. Su enfoque genuino es ayudar a los clientes a mejorar sus vidas mediante contenido relevante, experiencias significativas y una pasión palpable. Y, si tienen la oportunidad, lo hacen a través de los productos o servicios que ofrecen.

    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Investigación de mercados
        
    .col-lg-12
      p A través de la investigación de mercados, se realiza un estudio con propósitos específicos dirigidos a los potenciales clientes del mercado. Este proceso implica analizar las necesidades particulares de un amplio grupo de clientes para identificar nuevas oportunidades y determinar cómo satisfacer esas necesidades en cada segmento de mercado objetivo. Además, sugiere cómo diseñar un producto o servicio para cubrir esas necesidades.
      p La investigación de mercados recopila una variedad de datos importantes, como el precio que los clientes están dispuestos a pagar, quiénes son los competidores directos, cómo se presentará y describirá el producto para atraer a los clientes hacia el negocio, y la personalidad del producto. En otras palabras, permite profundizar en los siguientes aspectos:

    .row.mb-5
      .col-md-6.col-lg.tarjeta--tabla.p-4(style="background-color: #E1EFE3")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema1/img2.svg' alt='Imagen decorativa')
        h4.text-center Análisis del precio

      .col-md-6.col-lg.tarjeta--tabla.p-4(style="background-color: #DBE5F3")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema1/img3.svg' alt='Imagen decorativa')
        h4.text-center Propuesta de valor

      .col-md-6.col-lg.tarjeta--tabla.p-4(style="background-color: #E1EFE3")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema1/img4.svg' alt='Imagen decorativa')
        h4.text-center Análisis de la competencia

      .col-md-6.col-lg.tarjeta--tabla.p-4(style="background-color: #DBE5F3")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema1/img5.svg' alt='Imagen decorativa')
        h4.text-center Marca y producto
                 
    //- .row.justify-content-center.bg4.align-items-center.mb-4.p-4
    //-   .col-lg-3.col-8.mb-4
    //-     figure
    //-       img(src='@/assets/curso/temas/tema1/img2.svg', alt='Imagen decorativa')
    //-   .col-lg-3.col-8.mb-4
    //-     .row.justify-content
    //-       .col-lg-1.col-sm-2.col-xs-2
    //-         figure
    //-           img(src='@/assets/curso/temas/tema1/img3.svg', alt='Imagen decorativa')
    //-       .col-lg-10
    //-         h4 Análisis del precio
    //-     .row.justify-content
    //-       .col-lg-1.col-sm-2.col-xs-2
    //-         figure
    //-           img(src='@/assets/curso/temas/tema1/img4.svg', alt='Imagen decorativa')
    //-       .col-lg-10
    //-         h4 Propuesta de valor
    //-     .row.justify-content
    //-       .col-lg-1.col-sm-2.col-xs-2
    //-         figure
    //-           img(src='@/assets/curso/temas/tema1/img5.svg', alt='Imagen decorativa')
    //-       .col-lg-10
    //-         h4 Análisis de la competencia
    //-     .row.justify-content
    //-       .col-lg-1.col-sm-2.col-xs-2
    //-         figure
    //-           img(src='@/assets/curso/temas/tema1/img6.svg', alt='Imagen decorativa')
    //-       .col-lg-10
    //-         h4 Marca y producto
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p La investigación de mercados no solo consiste en recopilar información, sino también en aprovecharla para tomar decisiones estratégicas. Los datos recopilados a través de diversos instrumentos permiten extraer y utilizar los comentarios y la inteligencia de los clientes. Esto orienta la decisión sobre qué productos fabricar en el futuro o cómo mejorar los productos existentes para satisfacer mejor las necesidades del mercado.
        p Además, herramientas como los grupos de enfoque, las encuestas a clientes y la recopilación de datos de usuarios en línea han traído grandes beneficios al campo del mercadeo. Estas herramientas proporcionan información valiosa sobre la base de clientes en constante evolución, asegurando que la marca se comunique con ellos de manera efectiva. En resumen, el estudio de mercado implica investigar y comprender mejor a los clientes para desarrollar productos o servicios que satisfagan sus deseos y necesidades de manera más efectiva.
    
    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Tipos de mercadeo

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/img7.png', alt='Imagen decorativa')
      .col-lg-7
        p Cuando se habla de los tipos de mercadeo, es común referirse al <i>marketing</i>, el cual puede dividirse aproximadamente en métodos fuera de línea y en línea, también conocidos como digitales. El <i>marketing</i> fuera de línea engloba la publicidad tradicional, que incluye anuncios impresos, radiales y televisivos, así como la participación en eventos, ferias y conferencias. También puede involucrar estrategias de <i>marketing</i> boca a boca.
        p La mayoría de las empresas optan por una combinación de métodos de <i>marketing</i> tradicional y en línea. Sin embargo, en la actualidad, el enfoque está cada vez más orientado hacia el <i>marketing</i> en línea. Esto se debe a que los consumidores pasan más tiempo en línea y el <i>marketing</i> digital ofrece numerosas ventajas en términos de velocidad y eficacia.
    
    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas #[i Marketing] tradicional
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.col-12
        p Hablar de lo convencional nos lleva a considerar el <i>marketing</i> tradicional, que comprende cualquier tipo de estrategia de <i>marketing</i> realizada sin el uso de Internet. Esto incluye anuncios publicados en periódicos impresos en lugar de en línea, noticias presentadas en revistas físicas en lugar de digitales, y el uso de correo postal en lugar de correo electrónico. Sin embargo, una de las herramientas más poderosas y efectivas en el <i>marketing</i> tradicional sigue siendo la publicidad televisiva, que tiene un alcance masivo.
        p Un ejemplo destacado de este enfoque es la promoción de cierta marca de cerveza, que cautivó a los espectadores con un anuncio de televisión que se convirtió en un fenómeno de la cultura popular. Esta campaña publicitaria recibió numerosos premios y generó un aumento significativo en las ventas. Esto ejemplifica el poder del <i>marketing</i> tradicional y cómo puede generar impacto a través de medios impresos y televisivos.
      .col-lg-5.col-12
        figure
          img(src='@/assets/curso/temas/tema1/img114.png', alt='Imagen decorativa')

    .row.justify-content-center.mb-5
      .col-12.p-2
        .titulo-sexto.color-acento-contenido.mb-0(data-aos="fade-right")
          h5 Figura 1.
          span #[i Marketing tradicional.]
      
      .col-lg-12.desktop
          figure
            img(src='@/assets/curso/temas/tema1/img8.svg', alt='Imagen que ejemplifica situaciones en las que se presenta el marketing tradicional.')
      .col-lg-12.movil
          figure
            img(src='@/assets/curso/temas/tema1/img8_1.svg', alt='Imagen que ejemplifica situaciones en las que se presenta el marketing tradicional.')

    //-.row.justify-content-center.align-items-center.mb-4
      .col-lg-12.desktop
        ImagenInfografica.color-acento-botones.mb-4.desktop
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img9.svg', alt='')
              figcaption Nota. Adaptada de Elementos de la política, MinTIC (2019).  
          .tarjeta.bg2.p-3(x="26.5%" y="27%" numero="+")
            p El marketing impreso y los anuncios que vemos y escuchamos todos los días son formas de marketing tradicional.
          .tarjeta.bg2.p-3(x="72.5%" y="29%" numero="+")
            p se expresa mediante la publicidad en papel.
          .tarjeta.bg2.p-3(x="30%" y="59.5%" numero="+")
            p El #[i marketing] en papel se refiere al espacio publicitario.
          .tarjeta.bg2.p-3(x="69.5%" y="61%" numero="+")
            p Esta publicidad se presenta en periódicos, revistas, boletines y otros materiales en papel destinados a la distribución.
      .col-lg-12.movil
        figure
          img(src='@/assets/curso/temas/tema1/img9-1.svg', alt='Imagen decorativa')
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5
        p Las campañas de <i>marketing</i> tradicionales tienen la ventaja de perdurar en el dominio público, convirtiéndose en elementos icónicos y familiares para millones de personas. Una de las campañas más célebres del <i>marketing</i> tradicional fue la de Coca-Cola con el eslogan 'La pausa que refresca'.
        p En los ejemplos anteriores, se evidencia el <i>marketing</i> tradicional, el cual presenta ciertas características distintivas que pueden agruparse en las siguientes categorías. Estas categorías expresan las herramientas que se pueden utilizar para reconocer e incorporar la comercialización de productos y servicios en un negocio:
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/img10.png', alt='Imagen decorativa')
    
    .col-12.desktop
      .row.justify-content-center.align-items-center.mb-4      
        .col-sm-6.col-xl-3.mb-4.mb-xl-0.h390
          .tarjeta.tarjeta-slide.arriba.bg2(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__contenido.p-4.p-xl-5
                h5 El #[i marketing] por mensajería postal
                p Información impresa en folletos, catálogos y volantes que se envían por mensajería postal para llamar y atraer la atención del cliente.
                br
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img11.png')})`}")      
        .col-sm-6.col-xl-3.mb-4.mb-xl-0.h390
          .tarjeta.tarjeta-slide.arriba.bg2(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__contenido.p-4.p-xl-5
                h5 #[i Marketing] por teléfono
                p Comúnmente llamado Telemercadeo porque incluye llamadas a los consumidores por teléfono.
                br
                br
                br
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img12.png')})`}")      
        .col-sm-6.col-xl-3.mb-4.mb-xl-0.h390
          .tarjeta.tarjeta-slide.arriba.bg2(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__contenido.p-4.p-xl-5
                h5 #[i Marketing] en papel
                p Hace uno de impresiones que incluye anuncios en periódicos, boletines, revistas, folletos y otro material impreso para su distribución.
                br
                br
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img13.png')})`}")      
        .col-sm-6.col-xl-3.mb-4.mb-xl-0.h390
          .tarjeta.tarjeta-slide.arriba.bg2(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__contenido.p-4.p-xl-5
                h5 Transmisión
                p Cuñas radiales, comerciales de radio y televisión. Siendo la televisión un gran paso a la tecnología de entretenimiento en publicidades ágiles.
                br
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img14.png')})`}") 
      .h4.mb-4(data-aos="zoom-down-right")

    .col-12.movil
      .row.justify-content-center.align-items-center.mb-4      
          .col-sm-6.col-xl-3.mb-4.mb-xl-0.h390.col-11
            .tarjeta.tarjeta-slide.arriba.bg2(@mouseover="indicadorTarjetaSlide = false")
              .indicador--hover(v-if="indicadorTarjetaSlide")
              .tarjeta-slide__contenedor.p-5
                .tarjeta-slide__contenido.p-4.p-xl-5
                  h5 El #[i marketing] por mensajería postal
                  p Información impresa en folletos, catálogos y volantes que se envían por mensajería postal para llamar y atraer la atención del cliente.
                  br
                .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img11.png')})`}")      
          .col-sm-6.col-xl-3.mb-4.mb-xl-0.h390.col-11
            .tarjeta.tarjeta-slide.arriba.bg2(@mouseover="indicadorTarjetaSlide = false")
              .indicador--hover(v-if="indicadorTarjetaSlide")
              .tarjeta-slide__contenedor.p-5
                .tarjeta-slide__contenido.p-4.p-xl-5
                  h5 #[i Marketing] por teléfono
                  p Comúnmente llamado Telemercadeo porque incluye llamadas a los consumidores por teléfono.
                  br
                  br
                  br
                .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img12.png')})`}")      
          .col-sm-6.col-xl-3.mb-4.mb-xl-0.h390.col-11
            .tarjeta.tarjeta-slide.arriba.bg2(@mouseover="indicadorTarjetaSlide = false")
              .indicador--hover(v-if="indicadorTarjetaSlide")
              .tarjeta-slide__contenedor.p-5
                .tarjeta-slide__contenido.p-4.p-xl-5
                  h5 #[i Marketing] en papel
                  p Hace uno de impresiones que incluye anuncios en periódicos, boletines, revistas, folletos y otro material impreso para su distribución.
                  br
                  br
                .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img13.png')})`}")      
          .col-sm-6.col-xl-3.mb-4.mb-xl-0.h390.col-11
            .tarjeta.tarjeta-slide.arriba.bg2(@mouseover="indicadorTarjetaSlide = false")
              .indicador--hover(v-if="indicadorTarjetaSlide")
              .tarjeta-slide__contenedor.p-5
                .tarjeta-slide__contenido.p-4.p-xl-5
                  h5 Transmisión
                  p Cuñas radiales, comerciales de radio y televisión. Siendo la televisión un gran paso a la tecnología de entretenimiento en publicidades ágiles.
                  br
                .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img14.png')})`}") 
    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas #[i Marketing] digital

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p El <i>marketing</i> digital abre un nuevo mundo de posibilidades al permitir una comprensión más profunda de los clientes y la construcción de relaciones sólidas con ellos. Esta forma de mercadeo tiene la capacidad de recopilar una gran cantidad de datos sobre las personas, que incluyen información demográfica, ubicación, hábitos de compra, interacciones previas con la marca, preferencias y aversiones. Estos datos pueden utilizarse para crear una imagen más precisa y significativa de los clientes.
        p A continuación, se presentan algunas de las diversas herramientas del <i>marketing</i> en línea o digital:
    
    TabsA.color-acento-botones.mb-4
      .tarjeta.color-acento-botones--borde.p-4(titulo="<em>Marketing</em> de contenido")
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-10
            h4 #[i Marketing] de contenido (blogs, videos, publicaciones en redes sociales)
            p El #[i marketing] de contenidos se considera un tipo de #[i marketing] digital, desarrollado a través de publicación de contenido en diferentes formas para crear conciencia de marca y fomentar las relaciones con los clientes. 
          .col-lg-2
            figure
              img(src='@/assets/curso/temas/tema1/img15.svg', alt='Imagen decorativa')
      .tarjeta.color-acento-botones--borde.p-4(titulo="Motores de búsqueda")
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-10
            h4 Motores de búsqueda (buscadores web: Google, Yahoo!, Baidu)
            p Este es el proceso de perfeccionar el contenido del sitio web para hacerlo más visible para los motores de búsqueda y atraer más tráfico de las búsquedas.
          .col-lg-2
            figure
              img(src='@/assets/curso/temas/tema1/img16.svg', alt='Imagen decorativa')
      .tarjeta.color-acento-botones--borde.p-4(titulo="Redes sociales")
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-10
            h4 Redes sociales (Instagram, Twitter, Facebook)
            p Tipo de #[i marketing] que se utiliza para establecer relaciones con los clientes existentes y llegar a un público más amplio a través de la voz a voz digital.
          .col-lg-2
            figure
              img(src='@/assets/curso/temas/tema1/img17.svg', alt='Imagen decorativa')
      .tarjeta.color-acento-botones--borde.p-4(titulo="Correo electrónico")
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-10
            h4 Correo electrónico (Mensajeria instantánea: Hotmail, Gmail, Outlook)
            p Tipo de #[i marketing] que se implementa mediante el envío de comunicaciones periódicas por correo electrónico a los usuarios que se han registrado y almacenado en la base de datos para establecer relaciones e impulsar las ventas.
          .col-lg-2
            figure
              img(src='@/assets/curso/temas/tema1/img18.svg', alt='Imagen decorativa')
      .tarjeta.color-acento-botones--borde.p-4(titulo="<em>Influencers</em>")
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-10
            h4 #[i Influencers] (Personas reconocidas en el medio social)
            p Tipo de #[i marketing] que analiza la cantidad de seguidores en una cuenta de perfil. Usa persona con un perfil alto y con un acervo de seguidores en los diferentes canales de la redes sociales que posee para promocionar un producto o servicio.
          .col-lg-2
            figure
              img(src='@/assets/curso/temas/tema1/img19.svg', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p La combinación del #[i marketing] es la fusión de las 4 P (producto, precio, plaza, promoción) estas son consideradas la base del plan de #[i marketing], pero vamos a observarlas desde el aporte del #[i marketing] digital:

    .tarjeta--container.row.mb-4
      .col-md.tarjeta.bg1.p-5
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/tema1/img20.svg', alt='Texto que describa la imagen')
        h3.text-center Producto
        p Productos tangibles e intangibles en línea sin necesidad de un inventario físico. 
      .col-md.tarjeta.bg3.p-5
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/tema1/img21.svg', alt='Texto que describa la imagen')
        h3.text-center Precio
        p Valor dinámico en el entorno digital, hay más flexibilidad en lo que se respecta a los modelos de precios, con suscripciones y pagos accesibles. 
      .col-md.tarjeta.bg1.p-5
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/tema1/img22.svg', alt='Texto que describa la imagen')
        h3.text-center Plaza
        p Tienda virtual en la que posee muchos canales diferentes para explorar la venta en línea 
      .col-md.tarjeta.bg3.p-5
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/tema1/img23.svg', alt='Imagen decorativa')
        h3.text-center Promoción
        p La cual puede dar a conocer a sus clientes mediante herramientas digitales como el correo electrónico o redes sociales 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p Es por ello que se hace necesario precisar, ningún negocio se basa en una sola forma de marketing ya que necesita explorar varios métodos para interactuar con el cliente y hacerle llegar el mensaje del producto o servicio que comercializa. Por otro lado, los especialistas en marketing que han realizado estudios, diagnósticos y análisis del panorama del mercado objetivo están en la capacidad de seleccionar los tipos de marketing que serán más efectivos para el negocio y formar un plan en el que se integren en una estrategia maestra.
        p Para finalizar, es importante realizar un contraste como se presenta a continuación de lo que es el marketing que se ejecutaba antes de la era digital con el marketing que se implementa actualmente a través de las herramientas online. Para los especialistas del marketing es necesario que actualicen los paradigmas tradicionales a futuristas en aras de propiciar el acercamiento entre los actores de mercado.

    .row.justify-content-center.mb-4
      .col-12.p-2.mb-3
        .titulo-sexto.color-acento-contenido.mb-0(data-aos="fade-right")
          h5 Tabla 1.
          span #[i Comparativo marketing tradicional vs marketing digital ]
      .tabla-a.color-acento-contenido.mb-4
        table
          thead
            tr
              th #[i Marketing] tradicional
              th #[i Marketing] moderno (digital)
          tbody
            tr
              td
                .cblanco3
                  ul.lista-ul
                    li
                      i.fas.fa-circle
                      | Una sola dirección en la entrega del mensaje publicitario, diseñado para atraer a las masas.
                    li
                      i.fas.fa-circle
                      | La publicidad es la herramienta central.
                    li
                      i.fas.fa-circle
                      | Campañas publicitarias comprometidas durante un período de tiempo definido.
                    li
                      i.fas.fa-circle
                      | La publicidad y las relaciones públicas son especialidades diferentes, dirigidas por personas diferentes.
                    li
                      i.fas.fa-circle
                      | Los medios acertaban la caja de herramientas para difundir el mensaje.
                    li
                      i.fas.fa-circle
                      | Un comunicado de prensa fue la herramienta principal
                    li
                      i.fas.fa-circle
                      | Solo las noticias significativas llaman la atención del medio.
                    li
                      i.fas.fa-circle
                      | Los comunicados de prensa no tenían sentido a menos que un reportero decidiera que era digno de una historia.
              td
                .cblanco3
                  ul.lista-ul
                    li
                      i.fas.fa-circle
                      | Crear mensajes convincentes y publicarlos en internet
                    li
                      i.fas.fa-circle
                      | Los clientes quieren autenticidad
                    li
                      i.fas.fa-circle
                      | Los clientes quieren contenido que sorprenda y satisfaga la necesidad de su escucha.
                    li
                      i.fas.fa-circle
                      | La gente quiere contenido de valor, que genere confianza y relaciones.
                    li
                      i.fas.fa-circle
                      | Explorar audiencias de nicho en línea en una variedad más amplia de formas.
                    li
                      i.fas.fa-circle
                      | El contenido permanece en línea, sin fin de la campaña.
                    li
                      i.fas.fa-circle
                      | Venta de productos digitales
                    li
                      i.fas.fa-circle
                      | Suscripciones y pagos accesibles
                    li
                      i.fas.fa-circle
                      | Facilidad de comunicación con su audiencia
            tr
              td Herramientas del <i>marketing</i> tradicional: radio, televisión, periódicos, revistas, correo postal.
              td Herramientas del <i>marketing</i> moderno: sitios web, <i>blogs</i>, redes sociales, videos, <i>podcasts</i>


    Separador
    
    #t_1_1.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 1.1 Riesgo empresarial
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img24.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Se puede reconocer las variables de análisis como herramientas o más bien dicho matrices que se utilizan para identificar factores que intervienen en el negocio y el Mercado, por esto, se tiene presente que un análisis estratégico proporciona los datos necesarios e indispensables para establecer cambios estratégicos dentro de la empresa que impacten eficazmente el Mercado, tales como la formulación de estrategias de marketing. 
        br
        br
        p-mb-0 Las matrices de análisis estratégico examinan el entorno de la competencia, rivales o competidores de la industria. Por tanto, es importante ejecutar las variables de análisis, ya que ayudaran a saber introducir movimientos estratégicos para el negocio. Un recurso fácil luego de aplicar las matrices y analizar los datos en aplicar estrategias que han utilizado otras empresas para ciertas situaciones complejas en la que haya que actuar de manera inmediata. 
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p Con la implementación de las variables de análisis, el área de mercadeo reúne información valiosa para descubrir oportunidades sin explotar y revela nichos en donde no hay competencia, datos que utilizara estratégicamente y a favor de su negocio.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p A continuación, conozca algunas de las variables de análisis de mercadeo:
    
    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Matriz MEFE
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/img25.png', alt='Imagen decorativa')
      .col-lg-7
        .cajon.color-primario.p-4.mb-4
          p Es una herramienta de análisis estratégico utilizada para explorar el contexto externo de la empresa y hallar las oportunidades y los riesgos que están alterando o pueden alterar la estabilidad de la empresa.  Las opciones para analizar el ambiente externo van desde un análisis PEST, las cinco fuerzas de Porter o una matriz de perfil competitivo, son algunas de las herramientas a las que podemos recurrir para evaluar los factores externos.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p Los factores externos se clasifican en oportunidades y amenazas como hemos venido citando anteriormente. Las oportunidades se convierten para la empresa en las posibilidades que existen para explotarlas o dejarlas pasar. Por el contrario, las amenazas siempre serán elementos negativos a los que se debe prestar total atención al mínimo indicio de existir vulnerabilidad o riesgo, ya que esto afecta totalmente el poder de la empresa en la industria.

        p Observa los pasos desarrollar la matriz EFE:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        PasosA.color-acento-contenido.mb-4(tipo="n")
          .row(titulo="")
            .col-md-6.mb-4.mb-md-0
              h4 Identifique los factores externos clave
              p Puede ser mediante la herramienta PEST o una auditoría.
            .col-md-6
                figure
                  img(src='@/assets/curso/temas/tema1/img26.png', alt='Imagen decorativa')
          .row(titulo="")
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img27.png', alt='Imagen decorativa')
            .col-md-6.mb-4.mb-md-0
              h4 Asigne a cada factor una ponderación o peso
              p la estimación indica la importancia de este factor en la industria para alcanzar el éxito. 
          .row(titulo="")
            .col-md-6.mb-4.mb-md-0
              h4 Asigne una puntuación de 1 a 4 para cada factor externo
              p Siendo 4 la calificación más alta y 1 la calificación más mala.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img28.png', alt='Imagen decorativa')
          .row(titulo="")
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img29.png', alt='Imagen decorativa')
            .col-md-6.mb-4.mb-md-0
              h4 Combine las ponderaciones 
              p Con las calificaciones a través de una multiplicación entre el peso de cada factor por su calificación para establecer la puntuación ponderada.
          .row(titulo="")
            .col-md-6.mb-4.mb-md-0.cblanco
              h4 Suma con las puntuaciones de ponderaciones
              p De cada factor y establezca la ponderación total de la empresa.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img30.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p Para comprenderla se tiene presente como la puntuación ponderada límite posible es 4,0 y la más baja es 1,0. Si realizada la práctica su ponderación total es de 4,0, el resultado es que la empresa está haciendo un buen trabajo con las oportunidades existentes en la industria, está haciendo efectivo con las estrategias que existen aprovechando la oportunidad. Si en la práctica la ponderación total es de 1,0 quiere decir que las estrategias de la empresa no evitan ni bloquean los riesgos externos y adicional a ello, ha desperdiciado las oportunidades del contexto externo.
        p A continuación, se presenta un ejemplo real de una matriz EFE, tenga presente la información suministrada anteriormente, ya que serán los detalles y pautas que nos permiten la realización adecuada de la matriz. La empresa a la cual se le identificaron los factores claves que se describen a continuación se dedica a la comercialización de equipos de cómputo, este negocio es reconocido en el mercado, es decir, su marca es representativa para los consumidores, 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tarjeta.color-secundario.p-3
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema1/img31.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Anexo_ejemplo real de una matriz EFE
                  p.mb-0.text-small Factores externos clave
                .col-sm-auto
                  a.boton.color-acento-botones.me-3(:href="obtenerLink('/downloads/Matriz EFE.pdf')" target="_blank" type="application/pdf")
                    span Descargar
                    i.fas.fa-file-download
    
    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Matriz MEFI

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6
        figure
          img(src='@/assets/curso/temas/tema1/img32.png', alt='Imagen decorativa')
      .col-lg-6
        p Es la matriz de evaluación de factores internos (MEFI o EFI) la cual identifica y evalúa las relaciones entre las áreas funcionales del negocio. Herramienta de formulación de estrategias en la que se resume y evalúa las fortalezas y debilidades de las áreas prácticas del negocio.
        p La matriz EFI es intuitiva, por lo que su enfoque científico no debe interpretarse como una técnica poderosa. La búsqueda de las fortalezas comprende que es lo que el negocio hace mejor o qué valor agregado lo diferencia de su competencia. En las debilidades perciba las áreas de la empresa que podría mejorar o nivelar frente a la competencia.
        p Es una herramienta de análisis estratégico utilizada para explorar el contexto interno de la empresa y hallar las fortalezas y debilidades que se encuentran en las áreas de la empresa.  Las opciones para analizar el ambiente interno van desde un análisis DOFA, o una evaluación comparativa, análisis adicionales, son algunas de las herramientas a las que podemos recurrir para evaluar los factores internos.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p La caracterización de los factores claves internos oscila entre 10 a 20 variables claves según la regla general de la matriz, pero eso no escatima caracterizar tantos factores internos como le sean posible. En la matriz EFI las calificaciones dependen de la fortaleza o debilidad de cada factor de la empresa. Los valores se ubican del 1 al 4, explicados así:

    .row.justify-content-center.mb-4
      .col-12.BG02.p-2
        .row.justify-content-center.align-items-center 
          .col-lg-8.col-12
            .titulo-sexto.color-acento-contenido.mb-0(data-aos="fade-right")
              h5 Figura 2.
              span #[i valores en la clasificación de la matriz EFI]
    
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-8.desktop
            figure
              img(src='@/assets/curso/temas/tema1/img33.svg', alt='Imagen decorativa')
          .col-lg-8.movil
            figure
              img(src='@/assets/curso/temas/tema1/img33-1.svg', alt='Imagen decorativa')

        .row.justify-content-center.align-items-center.mb-4
          .col-lg-12
            p Las fortalezas solo reciben valoraciones entre 3 y 4, las debilidades 2 y 1. 
            p Pasos para desarrollar la matriz EFI, se consideran los siguientes elementos:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema1/img34.svg', alt='Imagen decorativa')
      .col-lg-6
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Identifique los factores internos clave")
            .col-md-12.mb-4.mb-md-0
              p Puede ser mediante la herramienta DOFA o en el proceso de auditoría interna. 
          .row(numero="2" titulo="Asigne a cada factor un peso o ponderación")            
            .col-md-12.mb-4.mb-md-0
              p La estimación indica la importancia relativa de la variable en la industria para alcanzar el éxito.  Siempre las fortalezas van a contar con más valoración que las debilidades.
          .row(numero="3" titulo="Asigne una puntuación de 1 a 4 para cada factor interno")
            .col-md-12.mb-4.mb-md-0
              p Siendo 4 una fortaleza importante y 1 la calificación de una debilidad importante. Las fortalezas van a recibir una calificación de 3 a 4 y las debilidades una calificación de 1 a 2.
          .row(numero="4" titulo="Combine las ponderaciones con las calificaciones")
            .col-md-12.mb-4.mb-md-0
              p A través de una multiplicación entre el peso de cada factor por su calificación para establecer la puntuación ponderada.
          .row(numero="5" titulo="Suma con las puntuaciones ")
            .col-md-12.mb-4.mb-md-0
              p Sumar ponderaciones de cada factor y establezca la ponderación total de la empresa.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p Los resultados de las puntuaciones indicadas en el tercer paso de la matriz EFI establece que, las puntuaciones totales muy por debajo de 2,5 catalogan la empresa como débil internamente, a diferencia de resultados en los que la puntuación sea superior a 2,5 catalogando una posición interna sólida o significativamente superior. 
        p La matriz EFI es equivalente a la matriz EFE, la diferencia está entre los factores que se incluyen en la matriz, resaltando que la matriz EFI se encarga de factores internos de la empresa, mientras que la matriz EFE se encarga de los factores externos.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p A continuación, se presenta un ejemplo real de una matriz EFI, tenga presente la información suministrada anteriormente, ya que serán los detalles y pautas que nos permiten la realización adecuada de la matriz. La empresa a la cual se le identificaron los factores internos claves que se describen a continuación se dedica a la comercialización de equipos de cómputo

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tarjeta.color-secundario.p-3
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema1/img31.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Anexo_ejemplo real de una matriz EFI
                  p.mb-0.text-small Factores internos clave
                .col-sm-auto
                  a.boton.color-acento-botones.me-3(:href="obtenerLink('/downloads/Matriz de EFI.pdf')" target="_blank" type="application/pdf")
                    span Descargar
                    i.fas.fa-file-download
    Separador
    .row
      .col-xl-12
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.2 Riesgo empresarial
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6
        figure
          img(src='@/assets/curso/temas/tema1/img35.png', alt='Imagen decorativa')
      .col-lg-6
        p Las matrices permiten al mundo empresarial aprovechar diversas habilidades y flujos de conocimiento, y  responder con mayor agilidad a las dinámicas cambiantes del mercado.
        .cajon.color-primario.p-4.mb-4
          p Las funciones que se comparten en toda la organización derivan en jefes inmediatos y que a su vez se reflejan en las estructuras matriciales contando con cadenas de mando según las funciones misionales, estratégicas u operativas. Cuando se realizan correctamente, las estructuras matriciales también pueden motivar el desarrollo de los trabajadores en la organización, ya que provocan el aporte y la experiencia de todos los miembros del equipo para llegar a una conclusión.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p Se requiere de un sistema de gestión dual para la implementación de las matrices, lo que significa que pueden ser costosas, complejas y confusas para los empleados, quienes pueden sentirse atrapados en medio de puntos de vista y expectativas opuestos. Aunque lo expresado haya sonado como una desventaja en la aplicación de las matrices, lo cierto es que como todo negocio que adquiere sus riesgos, las matrices brindan un diagnóstico, pero no generan la toma de decisiones al interior de la organización.

    .tarjeta--container.row.mb-4
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img36.svg', alt='Texto que describa la imagen')
        h4.text-center Matrices de análisis estratégico
        p  Son herramientas que se utilizan para apoyar la gestión del negocio, basadas en dos dimensiones: el crecimiento del mercado y la posición competitiva. 

      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img37.svg', alt='Texto que describa la imagen')
        h4.text-center Matrices de estrategias de negocio
        .cblanco3
          ul.lista-ul
            li
              i.fas.fa-circle
              | Matriz General Electric Company
            li
              i.fas.fa-circle
              | Matriz DPM
            li
              i.fas.fa-circle
              | Matriz ADL

      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img38.svg', alt='Texto que describa la imagen')
        h4.text-center Matrices de estrategia global
        .cblanco3
          ul.lista-ul
            li
              i.fas.fa-circle
              | Matriz de Igor Ansoff
            li
              i.fas.fa-circle
              | Matriz BCG
            li
              i.fas.fa-circle
              | Matriz de las 4C
            li
              i.fas.fa-circle
              | General Electric Company (GE)
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p Un ejemplo de ello es el modelo de matriz de cartera desarrollada por la compañía General Electric la cual refleja el esquema de un semáforo. La estructura de esta matriz incluye varios campos basados en el atractivo de la industria a largo plazo y la fuerza del negocio. Los elementos que ayudan a establecer el atractivo son:
    
    .row.justify-content-center.align-items-center
      .col-lg-10.col-12
        .row.justify-content-center.mb-4.p-4.bg4
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/img39.svg', alt='Imagen decorativa')
          .col-lg-6
            ul.lista-ul
              li
                i.fas.fa-check
                | Tamaño de mercado
              li
                i.fas.fa-check
                | El crecimiento del mercado
              li
                i.fas.fa-check
                | Rentabilidad del mercado
              li
                i.fas.fa-check
                | Tendencias de precios
              li
                i.fas.fa-check
                | Intensidad competitiva
              li
                i.fas.fa-check
                | Riesgo general de rentabilidad
              li
                i.fas.fa-check
                | Oportunidad de diferenciar productos y servicios
              li
                i.fas.fa-check
                | Segmentación
              li
                i.fas.fa-check
                | Estructura de distribución (minorista, mayorista)
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p Los elementos que ayudan a establecer la fuerza competitiva de la unidad de negocio son:
    
    .row.justify-content-center.align-items-center.mb-4.bg1
      LineaTiempoB.color-primario.mb-4(:datos="datosLineaTiempoB")
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p Los apartados de la matriz permiten la identificación de variables críticas con respecto al crecimiento del sector haciendo uso de los tonos indicados en cada campo así:

        p Sector verde: Señala seguir adelante, presenta los aspectos en los que la empresa debe invertir y crecer. 

        p Sector amarillo: Señala esperar, presenta formular estrategias de estabilidad que tengan un atractivo que sugiera niveles de inversión.

        p Sector rojo: Señala la parada, puesto que tienen un bajo atractivo general, hay que se presentan casos de desinversión o liquidación.

    .row.justify-content-center.mb-4
      .col-12.p-2
        .titulo-sexto.color-acento-contenido.mb-0(data-aos="fade-right")
          h5 Figura 3.
          span #[i Matriz  de variables críticas con respecto al crecimiento del sector ]
    .row.justify-content-center.mb-4
      .col-lg-8.desktop
        figure
          img(src='@/assets/curso/temas/tema1/tabla2.svg', alt='Imagen decorativa')
      .col-lg-8.movil
        figure
          img(src='@/assets/curso/temas/tema1/tabla2_.svg', alt='Imagen decorativa')
    
    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas La Matriz de política direccional de Shell (DPM) 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p Representan las perspectivas de rentabilidad del sector empresarial y se encuentra la capacidad competitiva de una empresa. La rentabilidad del sector empresarial incluye el tamaño del mercado, el crecimiento esperado, la falta de competencia. Por otro lado, la capacidad competitiva de la empresa está determinada por el volumen de ventas, la reputación de los productos, la confiabilidad del servicio y los precios competitivos. En cualquier campo de la matriz implica diferentes decisiones estratégicas. La matriz suele utilizarse para responder ante situaciones de crisis del negocio.
        p Las estrategias que plantea Shell en su matriz son:

    .row.justify-content-center.align-items-center.mb-4.BG01
      .col-md-12.p-3
        SlyderA(tipo='b' class='bgslyder').mb-4
          .row
            .col-md-4.mb-4.mb-md-0.p-4
              h4 Desinvertir
              p Distingue pérdidas con flujos de caja inciertos, en los que es necesario liquidar o mover sus bienes, deberían venderse ya que no es probable que la situación mejore.
            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema1/img48.png', alt='Imagen decorativa')
          .row
            .col-md-4.mb-4.mb-md-0.p-4
              h4 Retiro por etapas
              p En posición competitiva débil, en un mercado de bajo crecimiento, con muy pocas posibilidades de generar flujos de efectivo. Por tanto, han de eliminarse gradualmente. El flujo de efectivo debe invertirse en empresas más rentables.
            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema1/img49.png', alt='Imagen decorativa')
          .row
            .col-md-4.mb-4.mb-md-0.p-4
              h4 Doble o renuncie
              p Invierta más para aprovechar los matices que presenta el mercado o mejor abandona el negocio.
            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema1/img50.png', alt='Imagen decorativa')
          .row
            .col-md-4.mb-4.mb-md-0.p-4
              h4 Custodio
              p La empresa tiene que lidiar con la situación obteniendo ayuda de otras o saliendo de la escena para enfocarse más en otros negocios atractivos.
            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema1/img51.png', alt='Imagen decorativa')
          .row
            .col-md-4.mb-4.mb-md-0.p-4
              h4 Esfuércese más
              p Necesitan recursos adicionales para fortalecer sus capacidades. Por lo tanto, las empresas se esfuerzan más por explotar a fondo las perspectivas comerciales.
            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema1/img52.png', alt='Imagen decorativa')
          .row
            .col-md-4.mb-4.mb-md-0.p-4
              h4 Generación de efectivo
              p Expansión a otros escenarios, pueden continuar con sus operaciones, al menos para generar fuertes flujos de caja y utilidades satisfactorias. 
            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema1/img53.png', alt='Imagen decorativa')
          .row
            .col-md-4.mb-4.mb-md-0.p-4
              h4 Crecimiento del líder
              p Mediante la Innovación de los productos puede apoyar el crecimiento generando fondos para incentivar la novedad en el producto o servicio. Haga crecer el mercado enfocando solo suficientes recursos aquí.
            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema1/img54.png', alt='Imagen decorativa')

    .row.mb-4
    <li><strong>Liderazgo en el mercado</strong></li>
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p Se concentran los principales recursos recibiendo máxima prioridad.

    .row.justify-content-center.mb-4
      .col-8.p-2
        .titulo-sexto.color-acento-contenido.mb-0(data-aos="fade-right")
          h5 Figura 4.
          span #[i Matriz  de liderazgo en el mercado]
    .row.justify-content-center.mb-4
      .col-lg-8.desktop
        figure
          img(src='@/assets/curso/temas/tema1/tabla3.svg', alt='Imagen que relaciona un tabla indicativa de la matriz de liderazgo en el mercado, destacando el atractivo, promedio y el no atractivo.')
      .col-lg-8.movil
        figure
          img(src='@/assets/curso/temas/tema1/tabla3_1.svg', alt='Imagen que relaciona un tabla indicativa de la matriz de liderazgo en el mercado, destacando el atractivo, promedio y el no atractivo.')

    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Matriz ADL

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p Dicha matriz se denomina Matriz de Condición Estratégica de Arthur D. Little, la cual se fundamenta en el ciclo de vida del producto, tiene la intención de ayudar a las empresas a administrar su colección de negocios de productos como una cartera. Al igual que otras matrices de planificación de cartera, la matriz ADL representa los diversos negocios de una empresa en una matriz bidimensional. Es una metodología estructurada para la consideración de estrategias que dependen del ciclo de vida de la industria. Algunos elementos esenciales a tener presente son:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-10
            .tarjeta-avatar-b
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema1/img55.svg' alt='AvatarTop')
              .tarjeta.tarjeta--verde2
                .p-4
                  br
                  br
                  p La matriz ADL a menudo se asocia con la planificación estratégica a nivel de unidad de negocio, sin embargo, funciona igual de bien cuando se aplica a líneas de productos o a nivel de un producto individual. 
        .row.justify-content-center.align-items-center
          .col-lg-10
            .tarjeta-avatar-b
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema1/img56.svg' alt='AvatarTop')
              .tarjeta.tarjeta--verde
                .p-4
                  br
                  br
                  p El enfoque ADL utiliza las dimensiones de la evaluación del entorno y el negocio: Posición competitiva y madurez de la industria.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p La posición competitiva: Estrategias de los competidores, fuerza de la posición competitiva, categorizando cada segmento de la empresa de acuerdo con la posición, el dominio, fuerza y que pueda ser favorable, sostenible o débil.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12.desktop
        ImagenInfografica.color-acento-botones.mb-4
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img58.png', alt='') 
          .tarjeta.bg2.p-3(x="16%" y="22%" numero="+")
            p #[b Favorable:] goza de ventajas competitivas en varios segmentos del mercado para tener la libertad de moverse en el mercado como grandes líderes de sus negocios.
          .tarjeta.bg2.p-3(x="73.5%" y="24%" numero="+")
            p #[b Sostenible:] la posición en el mercado general es pequeña o de nicho, ya sea geográfica o definida por producto.
          .tarjeta.bg2.p-3(x="92%" y="14%" numero="+")
            p #[b Dominante:] liderazgo tecnológico protegido.
          .tarjeta.bg2.p-3(x="33%" y="58.5%" numero="+")
            p #[b Débil:] pérdida de cuota de mercado. La línea de negocio es demasiado pequeña para mantener la rentabilidad.
          .tarjeta.bg2.p-3(x="66.5%" y="65%" numero="+")
            p #[b Fuerte:] la participación de mercado es estable, tiene la libertad de elegir estrategias y accionar sin que el mercado se vea en riesgo o amenazado por el asecho de los competidores.

      .col-lg-12.movil
        figure
          img(src='@/assets/curso/temas/tema1/img58_.svg', alt='')

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p Los elementos antes relacionados son: 
    .bg4.p-5.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-10
          ul.lista-ul
            li
              i.fas.fa-check
              |	Madurez de la industria: la madurez de la industria consiste en el desarrollo de la industria a través de fases, donde considera al segmento para alcanzar la madurez del escenario. Para ello se describe la naturaleza de esta madurez.
            li
              i.fas.fa-check
              |	Principio: caracterizada por un rápido crecimiento del mercado, muy poca competencia, nueva tecnología, alta inversión y altos precios.
            li
              i.fas.fa-check
              |	Crecimiento: las ventas aumentan, existen pocos competidores y la empresa obtiene recompensas por lanzar un nuevo producto al mercado.
            li
              i.fas.fa-check
              |	Madurez: la participación en el mercado es estable, hay una base de clientes constante, hay muchos competidores y se dedica energía a diferenciarse de los competidores.
            li
              i.fas.fa-check
              |	Envejecimiento: se empieza a abandonar el Mercado, las ventas disminuyen, la demanda se reduce, se vuelve costoso mantenerse por encima de la competencia o mantener el nivel por lo que se convierte en algunas de las causas para que el negocio empiece a desaparecer.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tarjeta.color-secundario.p-3
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema1/img31.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Etapas de ciclo de vida de la industria
                  p.mb-0.text-small Un ejemplo que se puede presentar desde la etapas del ciclo de vida, es el que se relaciona en el siguiente anexo  
                .col-sm-auto
                  a.boton.color-acento-botones.me-3(:href="obtenerLink('/downloads/Etapas del ciclo de vida.pdf')" target="_blank" type="application/pdf")
                    span Descargar
                    i.fas.fa-file-download
    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Matriz de Igor Ansoff

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p Titulada también matriz de crecimiento del mercado, ayuda a comprender y a evaluar la estrategia de desarrollo de marketing. Es una forma simple y efectiva de considerar las opciones de avance estratégico. Piense en las fortalezas del negocio y cuáles estrategias de crecimiento le permiten impulsar, motivar y explotar sus fortalezas. Tenga en cuenta la diversificación, puesto que es un terreno desconocido, es mejor avanzar en escenarios conocidos que correr mayor riesgo de fracasar en la transformación radical.
        p Las estrategias que plantea Ansoff en su matriz son:

    AcordionA.mb-4(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Penetración del mercado")
        .col-md-6.mb-4.mb-md-0
          p Desarrollo de las ventas de productos existentes en el mercado. Una fuerte participación de mercado sugiere que es probable que se obtenga un mejor rendimiento al ampliar la gama de productos y servicios que puede ofrecer al mercado. 
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img59.png', alt='Imagen decorativa')
      .row(titulo="Desarrollo de productos")
        .col-md-6.mb-4.mb-md-0
          p Establecer nuevos productos para llevarlos al mercado es una estrategia interesante si tiene una fuerte participación de mercado. La estrategia puede ser una razón adecuada para adquirir otra empresa de producto o servicio siempre que sea relevante para su mercado.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img60.png', alt='Imagen decorativa')
      .row(titulo="Desarrollo de mercado")
        .col-md-6.mb-4.mb-md-0
          p Los nuevos mercados también pueden significar nuevas subdivisiones dentro del mercado. Ayuda a mantenerse razonablemente junto al mercado que conoce y que lo conoce a usted.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img61.png', alt='Imagen decorativa')
      .row(titulo="Diversificación")
        .col-md-6.mb-4.mb-md-0
          p Llevar nuevos productos a nuevos mercados, aunque este cuadrante es de alto riesgo, no solo porque no conoce los productos, sino porque tampoco conoce los nuevos mercados y es muy probable que la estrategia implique trabajar en nuevos canales de distribución y rutas al mercado. 
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img62.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p Observa de qué manera se puede evidenciar las estrategias antes mencionadas:
    
    .row.justify-content-center.mb-4
      .col-10.p-2
        .titulo-sexto.color-acento-contenido.mb-0(data-aos="fade-right")
          h5 Figura 5.
          span #[i Matriz de Igor Ansoff ]

      .col-lg-10.desktop
        figure
          img(src='@/assets/curso/temas/tema1/img104.svg', alt='')
      .col-lg-12.movil
        figure
          img(src='@/assets/curso/temas/tema1/img104_.svg', alt='')
    
    //- .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tabla-a.color-secundario.mb-4
        .tabla-a
          table
            thead(style="background-color:#DBE5F3")
              tr
                th 
                th Productos existentes
                th Próximos productos
            tbody
              tr
                td(style="background-color:#DBE5F3") Mercados Existentes
                td Penetración del mercado
                td Desarrollo de productos
              tr
                td(style="background-color:#DBE5F3") Nuevos Mercados
                td Desarrollo de mercado
                td Diversificación
    
    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Matriz BCG

    .row.justify-content-center.mb-4
      .col-lg-6
        p La Matriz BCG de Boston o conocida como el análisis de #[i Boston Consulting Group] o como la Matriz de crecimiento-participación. Representa una forma útil de comprender y evaluar sus diferentes oportunidades de productos y servicios existentes, además de ser una herramienta para valorar los productos existentes y en desarrollo en términos de su potencial de mercado y, por lo tanto, implica acciones estratégicas para productos y servicios en cada categoría.
        p Es un gráfico creado para ayudar a las organizaciones con el análisis de sus unidades de negocio o líneas de productos. Contribuye a que las empresas asignen recursos asertivamente y se utiliza como herramienta analítica en #[i marketing] de marca, gestión estratégica y análisis de cartera. La matriz BCG formada por cuatro campos se basa en la observación de que las unidades de negocios de la empresa se clasifican en cuatro categorías fusionadas en crecimiento y participación de mercado. Examina diferentes negocios en su cartera en función de las tasas de crecimiento. En términos generales es un análisis comparativo del potencial comercial y la evaluación del entorno.
      .col-lg-6
        figure
          img(src='@/assets/curso/temas/tema1/img63.png', alt='Imagen decorativa')
    
    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Beneficios de la matriz BCG
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .row.justify-content-center.align-items-center.bg3.mb-4.p-4
          .col-lg-3
            figure
              img(src='@/assets/curso/temas/tema1/img64.svg', alt='Imagen decorativa')
          .col-lg-7
            ul.lista-ul
              li
                i.fas.fa-check
                | Permite comprar varias unidades de negocio cuando lo deseen
              li
                i.fas.fa-check
                | Ofrece un marco para la asignación de recursos y mejores ganancias
              li
                i.fas.fa-check
                | Es la matriz mejor conocida en todo el mundo
              li
                i.fas.fa-check
                | Fomenta una mejor toma de decisiones
              li
                i.fas.fa-check
                | Permite comparar la tasa de crecimiento con la tasa de crecimiento promedio
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p Las estrategias que se plantea en la matriz BCG son:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.desktop
        ImagenInfografica.color-acento-botones.mb-4.desktop
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img65.svg', alt='')
          .tarjeta.bg2.p-3(x="56.7%" y="50.8%" numero="1")
            p #[b Estrella en ascenso:] los productos de éxito que tienen una buena participación de mercado en un mercado enérgico y en crecimiento. Son productos de excelencia que merecen el financiamiento puesto que tienen potencial de crecimiento.
          .tarjeta.bg2.p-3(x="66.6%" y="50.7%" numero="2")
            p #[b Situación problemática:] son productos que tienen un potencial de mercado grande y creciente pero que tienen una participación de mercado baja, normalmente porque son productos nuevos o porque la aplicación aún no se ha detectado ni se ha actuado en consecuencia. 
          .tarjeta.bg2.p-3(x="56.7%" y="67%" numero="3")
            p #[b Vaca:] se denomina así, porque la intención es ordeñar los rendimientos de inversiones anteriores que establecieron una buena distribución y participación de mercado para el producto. Los productos en este cuadrante necesitan actividad de mantenimiento y protección, junto con una buena gestión de costos.
          .tarjeta.bg2.p-3(x="66.8%" y="67%" numero="4")
            p #[b Perro:] no tiene sentido desarrollar productos o servicios en este cuadrante. Muchas organizaciones descontinúan productos servicios que consideran son de esta categoría, en cuyo caso, considere el impacto potencial en la recuperación de costos generales. 
      .col-lg-12.movil
        figure
          img(src='@/assets/curso/temas/tema1/img65_1.svg', alt='')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p Es así como se puede observar la Matriz de las 4C
    
    .row.BG02.mb-4
      .row.justify-content-center.mb-4
        .col-8.p-2
          .titulo-sexto.color-acento-contenido.mb-0(data-aos="fade-right")
            h5 Tabla 2.
            span #[i Matriz de las 4C ]
      
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-8
          .tabla-a.color-acento-contenido.mb-4
            table
              thead
                tr
                  th 4C del consumidor
                  th 4C del #[i marketing]
              tbody
                tr
                  td 
                    .cblanco3
                      ul.lista-ul
                        li
                          i.fas.fa-circle
                          | Consumidor por necesidad
                        li
                          i.fas.fa-circle
                          | Costo para satisfacer
                        li
                          i.fas.fa-circle
                          | Comodidad de compra
                        li
                          i.fas.fa-circle
                          | Comunicación 
                  td                 
                    .cblanco3
                      ul.lista-ul
                        li
                          i.fas.fa-circle
                          | Claridad
                        li
                          i.fas.fa-circle
                          | Credibilidad
                        li
                          i.fas.fa-circle
                          | Consistencia
                        li
                          i.fas.fa-circle
                          | Competitividad
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-8
          .row.justify-content-center.align-items-center
            p La cual detalla sus componentes de la siguiente manera:
              .col-lg-2.col-5
                figure
                  img(src='@/assets/curso/temas/tema1/img105.svg', alt='')
              .col-lg-10.col-7
                p Consumidor por necesidad: las empresas fabrican teniendo en cuenta los deseos y necesidades del consumidor.
              hr
              .col-lg-2.col-5
                figure
                  img(src='@/assets/curso/temas/tema1/img106.svg', alt='')
              .col-lg-10.col-7
                p Costo para satisfacer: oferta de precios más bajos en los que la marca es quien se involucra además de los proveedores que también se ven obligados por los compradores a bajar de precio para satisfacer al que compra.
              hr
              .col-lg-2.col-5
                figure
                  img(src='@/assets/curso/temas/tema1/img107.svg', alt='')
              .col-lg-10.col-7
                p omodidad para comprar: acceso al producto en cualquier momento, en cualquier lugar y de cualquier forma. Dicho en otras palabras, es que puedas obtener el producto cuando lo desees porque lo consigues en cualquier sitio, no hay restricciones de horarios, como suele suceder con algunos servicios.
              hr
              .col-lg-2.col-5
                figure
                  img(src='@/assets/curso/temas/tema1/img108.svg', alt='')
              .col-lg-10.col-7
                p Comunicación: diálogo entre la empresa y el cliente, hoy en día con más herramientas para llevar a cabo el desarrollo de esta C, el #[i marketing] digital ha hecho posible que las relaciones empresa-cliente se fortalezcan a través de contenidos que se generan para el consumidor.
              hr
      //- .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/img66.svg', alt='')

    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Matriz de las 4C del consumidor

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p Las 4C del #[i marketing] son: la claridad, la credibilidad, la consistencia y la competitividad. Se utilizan en las comunicaciones de #[i marketing]. Una vez el negocio ha identificado su público objetivo ahondaba sus esfuerzos en posicionar el negocio y construir una propuesta de valor exitosa. Para la empresa es importante hacer uso de esta herramienta ya que las grandes empresas han echado mano de ello y se nota en el eslogan que cumplen con la claridad y credibilidad. Observa cómo se representan:

    .row.justify-content-center.mb-4
      .col-8.p-2
        .titulo-sexto.color-acento-contenido.mb-0(data-aos="fade-right")
          h5 Tabla 3.
          span #[i Matriz de las 4C del consumidor ]
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr
                th
                th Situación actual de la organización
                th Competidor
                th Cómo se podría mejorar la oferta
            tbody
              tr
                td Consumidor por necesidad
                td
                td
                td
              tr
                td Costo por satisfacer
                td
                td
                td
              tr
                td Comodidad de compra
                td
                td
                td
              tr
                td Comunicación
                td
                td
                td
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p Es un gran modelo para usar en el desarrollo del eslogan o en la formulación y presentación de la propuesta de valor, es fundamental que lo anterior le aporte al negocio y al consumidor la claridad y la credibilidad, así no se reflejen necesariamente todas las 4C.

    .row.justify-content-center.mb-4
      .col-8.p-2
        .titulo-sexto.color-acento-contenido.mb-0(data-aos="fade-right")
          h5 Tabla 4.
          span #[i Modelo de desarrollo del eslogan o propuesta de valor]
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8
        .tabla-a.color-acento-contenido.mb-4
        .tabla-b.color-acento-contenido.mb-4
          .tabla-b__header
            h5.mb-0 Empresa:
          table
            thead
              tr
                th Las 4C de la comunicación
                th Eslogan
            tbody
              tr
                td Claridad
                td
              tr
                td Credibilidad
                td
              tr
                td Consistencia 
                td
              tr
                td Competitividad
                td

    Separador
    .row
      .col-xl-12
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.3 Riesgo empresarial

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p El dinamismo económico del país ha llevado a los negocios a utilizar e implementar una palabra muy de moda durante la situación de emergencia sanitaria “reinventarse”, negocios que expandieron su línea de producto según la necesidad del consumidor y las circunstancias de salud por las que atravesó el mundo desde el año 2020. 
    figure.mb-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/jsUkbvYBA40?si=eoSQWG7lYLW1Me37" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      //- figcaption Video: Leyenda del video
    
    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Análisis del entorno en el año 2020

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12 
        p El país es cuantioso con sus recursos naturales, a continuación un análisis realizado en el año 2020.
      
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.desktop
        ImagenInfografica.color-acento-botones.mb-4.desktop
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img67.svg', alt='')
          .tarjeta.bg2.p-3(x="26%" y="19.5%" numero="+")
            p Tiene las mayores reservas de carbón de América Latina
          .tarjeta.bg2.p-3(x="40%" y="38.5%" numero="+")
            p Grandes reservas de petróleo y gas natural
          .tarjeta.bg2.p-3(x="22%" y="41.5%" numero="+")
            p La agricultura es extensiva y muy diversificada
          .tarjeta.bg2.p-3(x="82%" y="54%" numero="+")
            p Se han expandido tanto la industria como los servicios
          .tarjeta.bg2.p-3(x="58%" y="76%" numero="+")
            p Los principales cultivos de Colombia son el café, el banano, las flores cortadas, la caña de azúcar, la ganadería, el arroz y el maíz.
          .tarjeta.bg2.p-3(x="38%" y="59.5%" numero="+")
            p Tiene el segundo mayor potencial hidroeléctrico del continente
          .tarjeta.bg2.p-3(x="71.5%" y="13%" numero="+")
            p Se han expandido tanto la industria como los servicios
      .col-lg-12.movil
        figure
          img(src='@/assets/curso/temas/tema1/img67-1.svg', alt='')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6
        figure
          img(src='@/assets/curso/temas/tema1/img68.png', alt='')
      .col-lg-6
        p La agricultura sigue siendo una importante fuente de empleo en el país, ya que emplea la mano de obra a pesar de los impactos negativos de la pandemia. La agricultura colombiana experimentó el mayor crecimiento de cualquier sector en 2020 y continuó creciendo en 2021, junto con el sector ganadero.
        p Colombia es el país con mayor diversidad industrial de la Comunidad Andina, con cuatro importantes centros industriales: 
        .cblanco3
          ul.lista-ul
            li
              i.fas.fa-circle
              | Bogotá 
            li
              i.fas.fa-circle
              | Medellín 
            li
              i.fas.fa-circle
              | Cali 
            li
              i.fas.fa-circle
              | Barranquilla.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p La mayoría de las industrias del país están impulsadas por la agricultura y las materias primas, siendo las principales industrias la textil, productos químicos, metalurgia, cemento, envases de cartón, resinas plásticas y bebidas. Recientemente sufrió la desaceleración de la demanda extranjera debido al brote. Si bien el sector industrial se vio afectado negativamente por la pandemia, especialmente por la débil demanda mundial de carbón y petróleo, la actividad industrial en Colombia registró una importante recuperación en 2021.
        p Según el documento Balance 2020 y perspectiva 2021 (año). Infiere que el mercado laboral ha sido uno de los grandes afectados a nivel mundial con la emergencia sanitaria provocada por el COVID-19. Para la vigencia 2020, la organización Internacional del trabajo OIT habla de pérdidas de puestos de trabajo alrededor de uno 345 millones. En Colombia, la pérdida de puestos de trabajo oscila entre los 1,5 millones, observa los elementos a tener presente frente a este balance realizado: 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12.BG01.p-5
        SlyderB.mb-5(:datos="datosSlyder1")
    
    //-.row.justify-content-center.align-items-center.mb-4
      .col-lg-12.BG01.p-5
        SlyderA(tipo='b')
          .row
            .col-md-4.mb-4.mb-md-0
              h4 Exportaciones e importaciones
              p En las exportaciones e importaciones de la vigencia 2020 también se vieron afectadas, puesto que las restricciones no facilitaban la tarea, la logística en cuanto a movilidad se hacía con el pasar del tiempo más compleja
            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema1/img69.png', alt='Imagen decorativa')
          .row
            .col-md-4.mb-4.mb-md-0
              h4 Emergencia sanitaria
              p La economía se transformó dando paso a otros productos mucho más relevantes en cuanto a la situación de emergencia sanitaria. Dicho en otras palabras, el sector salud desplazo a varios sectores económicos que eran solidos gracias a comercio exterior.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img70.png', alt='Imagen decorativa')
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Fuentes de ingreso
              p Las condiciones económicas del 2020 requirieron contar con indicadores oportunos en tiempo real para realizar seguimiento y aplicar los cambios que se crean necesarios. Por tanto, otras fueron las fuentes que generaron ingreso en nuestro país, la información que entregaban los noticieros se volvió indispensable para manejar la situación.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img71.png', alt='Imagen decorativa')
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Audiciencia
              p La audiencia exigía estar informado y para ello hacía uso de la tecnología, las diferentes revistas entregaban varios datos y artículos científicos sobre la situación que afrontaba el mundo. 
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img72.png', alt='Imagen decorativa')
          .row
            .col-md-6.mb-4.mb-md-0
              h4 <em>Marketing</em>
              p Publicidad de la salud, marketing en temas de posibles vacunas, todas apuntando a un mismo esfuerzo, salir de la hecatombe en el que estaba el mundo y frenar la recesión económica de la vigencia 2020 para el país.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img73.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .cajon.color-primario.p-4.mb-4
          p Gracias al tamaño de su mercado y la extensión de sus recursos naturales: café, esmeraldas, petróleo y carbón, entre otros. Además de una reputación histórica como un deudor ejemplar, Colombia ha experimentado un crecimiento estable y sólido durante la mayor parte de las últimas dos décadas. Si bien el país se vio afectado por la caída de los precios del petróleo debido a la pandemia en 2020, Colombia pudo recuperarse en 2021, con un crecimiento del producto interno bruto (PIB) principalmente debido al impulso de las exportaciones de petróleo y al aumento del consumo de los hogares, que debería continuar para impulsar la economía en los próximos años, apoyado en la continua recuperación del mercado laboral y la continua implementación de programas de apoyo fiscal dirigidos a los hogares de bajos ingresos.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p El repunte del consumo de los hogares del país impulsó las importaciones, que superaron el aumento de las exportaciones a pesar del aumento de los precios de las materias primas agrícolas y energéticas, y contribuyó al déficit de cuenta de Colombia, de esta manera: 
    .row.justify-content-center.mb-4
      .col-10.p-2
        .titulo-sexto.color-acento-contenido.mb-0(data-aos="fade-right")
          h5 Figura 6.
          span #[i Datos sobre el déficit de cuenta en Colombia.]
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.desktop
        figure
          img(src='@/assets/curso/temas/tema1/img74.svg', alt='')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.movil
        figure
          img(src='@/assets/curso/temas/tema1/img74_.svg', alt='')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p El déficit público de Colombia sigue siendo motivo de preocupación para el gobierno y los inversores. Las medidas fiscales de Colombia para mitigar la pandemia iniciada en el 2020 han sido efectivas para impulsar la actividad económica que se ha recuperado gradualmente en el año 2021 y lo que se lleva del 2022, observa la siguiente infografía.

    .row.justify-content-center.mb-4
      .col-10.p-2
        .titulo-sexto.color-acento-contenido.mb-0(data-aos="fade-right")
          h5 Figura 7.
          span #[i Datos sobre el déficit público en Colombia.]
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema1/img75.svg', alt='')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.movil
        a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo - Distribución  de  Micronegocios según actividad económica - CIIU Rev. 4.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Distribución  de  Micronegocios según actividad económica - CIIU Rev. 4 Total nacional 2020

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        p En 2020, las exportaciones colombianas sufrieron la caída de los precios del petróleo y la desaceleración económica en sus principales mercados asociados provocada por la pandemia. De hecho, las exportaciones del país disminuyeron y durante el mismo período, las importaciones de bienes también disminuyeron. Como resultado, el déficit comercial de Colombia llegó a 7,9 mil millones de dólares en 2020. Según la Organización Mundial del Comercio OMC, las importaciones de servicios en 2020 ascendieron a 9 mil millones de dólares, mucho más que las exportaciones de servicios. Por lo tanto, el déficit comercial general en 2020 alcanzó los 12,4 mil millones de dólares.
    
    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Análisis del entorno en el año 2021
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6
        p Denominado la recuperación de la economía, la reactivación económica mediante la mayor operación de los sectores.
        p La importancia del sector servicios ha aumentado en los últimos años, convirtiéndose en la columna vertebral de la economía colombiana El turismo es uno de los componentes más importantes del sector servicios y ha mostrado un gran dinamismo en los últimos años, especialmente en Bogotá, Medellín, Cartagena, Cali y Barranquilla. El sector servicios fue el más afectado durante las primeras etapas de la pandemia, especialmente el turismo, hotelería, la restauración, el transporte y el entretenimiento. Sin embargo, en 2021, los servicios mostraron una recuperación significativa a medida que aumentaron las tasas de vacunación y aumentó la movilidad de las personas.

      .col-lg-6
        figure
          img(src='@/assets/curso/temas/tema1/img76.png', alt='Imagen decorativa')

    .row.justify-content-center.mb-4
      .col-8.p-2
        .titulo-sexto.color-acento-contenido.mb-0(data-aos="fade-right")
          h5 Tabla 5.
          span #[i Sectores]
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8
        .tabla-a.color-acento-contenido.mb-4
        .tabla-b.color-acento-contenido.mb-4
          .tabla-b__header
            h5.mb-0 Empresa:
          table
            thead
              tr
                th SECTOR
                th PIB
                th GENERA EMPLEA
            tbody
              tr
                td Servicios
                td 59.5 %
                td 64.1 %
              tr
                td Industria
                td 23.8 %
                td 20.1 %
              tr
                td Agricultura
                td 7.6 %
                td 15.7 %
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p El consumo privado es el principal motor de la recuperación a medida que repunta el empleo, aunque a un ritmo más lento que la actividad económica. Los fuertes precios de las materias primas y la mejora de las perspectivas en los principales socios comerciales clave seguirán apuntalando las exportaciones. Para fomentar el espíritu empresarial, se deben reducir los altos costos de registro de las empresas, especialmente para las pequeñas empresas.
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img77.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La creación de empleo formal requiere un sector empresarial más fuerte. El acceso a los mercados debe ser apoyado a través de nuevas mejoras en la infraestructura de transporte, en particular multimodal, conectividad de transporte de puertos y aduanas, y reducción de barreras de entrada y competencia en el transporte. Deben eliminarse las barreras no arancelarias distorsionadoras y facilitarse la entrada y el crecimiento de las empresas mediante una mayor dependencia de ventanillas únicas y herramientas en línea para los procedimientos administrativos.

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        p En la última década, los resultados educativos siguen siendo mediocres, estos dependen en gran medida de los antecedentes socioeconómicos y muestran grandes diferencias regionales. Mejorar los resultados en la equidad de la educación y la formación debe comenzar ampliando el acceso a la educación de la primera infancia y la escolarización de jornada completa, particularmente en las zonas rurales. Los recursos deben reasignarse a regiones vulnerables para que la enseñanza sea más atractiva allí. 
        p Los planes de estudios y la financiación de la educación y la formación profesional deben ajustarse en función de a las necesidades del mercado laboral, y se debe alentar la participación de los empleadores en la entrega. Las prácticas débiles excluyen a muchos del mercado laboral formal. La recuperación económica se consolido especialmente en el segundo semestre de 2021, pues la población más vulnerable se encontró vacunada para ese momento. La aceleración en la construcción de viviendas y las mejoras en el mercado laboral serán importantes para la recuperación económica.
        p Las tasas de crecimiento más fuertes para la vigencia 2021, se observaron en el entretenimiento, las artes y las actividades recreativas, el comercio mayorista y minorista, información y comunicación; actividades manufactureras y servicios administrativos y de apoyo y actividades técnicas, científicas y profesionales. La economía se expandió en un 4,3 %.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tarjeta.color-secundario.p-3
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema1/img78.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Presentación estadística de las unidades económicas en el país para la vigencia 2021. 
                  p.mb-0.text-small Tiene el propósito de mostrarle la participación del país por sectores económicos, además de suministrar los resultados para que tenga un panorama más amplio de las actividades económicas que se fortalecen en el país.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.dane.gov.co/index.php/estadisticas-por-tema/comercio-interno/censo-economico-de-colombia/conteo-de-unidades-economicas-2021" target="_blank")
                    span Enlace
                    i.fas.fa-link
    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Actualidad del mercado

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        p Colombia exporta e importa los siguientes productos, de acuerdo con información entregada por el Banco Mundial.
    
    .row.justify-content-center.mb-4
      .col-8.p-2
        .titulo-sexto.color-acento-contenido.mb-0(data-aos="fade-right")
          h5 Tabla 6.
          span #[i Exportaciones en Colombia ]
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8
        .tabla-a.color-acento-contenido.mb-4
        .tabla-b.color-acento-contenido.mb-4
          .tabla-b__header
            h5.mb-0 Empresa:
          table
            thead
              tr
                th(colspan="2") Exportaciones
                th(colspan="2") Importaciones
              tr
                th Productos
                th Porcentajes
                th Productos
                th Porcentajes
            tbody
              tr
                td Aceite de Petróleo	
                td 40.3 %	
                td Aceite de Petróleo	
                td 7,9 %
              tr
                td Carbón	
                td 12,4 %	
                td Aparatos de radiotelefonía	
                td 4,8 %
              tr
                td Café	
                td 6 %	
                td Vehículos automotores	
                td 4,6 %
              tr
                td Oro	
                td 4,4 %	
                td Medicamentos	
                td 3 %
              tr
                td Flores	
                td 3,7 %	
                td maíz	
                td 2,3 %
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p Los principales socios comerciales de Colombia son Estados Unidos, China, Brasil, India, Ecuador, Panamá y Alemania. Colombia ha firmado acuerdos comerciales con los países de la Comunidad Andina de Naciones (CAN), los países del MERCOSUR, los países de Centroamérica y el Caribe y la Unión Europea. Junto con México, Chile y Perú.
    
    .row.justify-content-center.align-items-center.mb-4.BG02
      .col-lg-10
        p Dentro de los principales aumentos significativos en la economía colombiana en el 2022, se encuentran:
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-9
          ul.lista-ul--separador
            li
              i.fas.fa-angle-right
              | Las exportaciones aumentaron en un 46,9% en los primeros meses de la vigencia 2022
            li
              i.fas.fa-angle-right
              | Aumento de las ventas de combustible y productos mineros (carbón coque y briquetas)
            li
              i.fas.fa-angle-right
              | Aumento del petróleo y sus derivados en un 78,1 %
            li
              i.fas.fa-angle-right
              | Aumento de envío de productos manufacturados en un 28,3 %
            li
              i.fas.fa-angle-right
              | Aumento del sector agricultura, alimentos y bebidas en un 17,9 %
            li
              i.fas.fa-angle-right
              | Venta de barriles de crudo en un 10 % más en el mes de marzo comparado con el mismo mes de la vigencia 2021

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p El país también es parte de numerosos tratados de libre comercio con Chile, Guatemala, Honduras, El Salvador, Canadá, México, Suiza, Noruega, Islandia y Estados Unidos. El tratado de libre comercio con Estados Unidos, ha tenido un impacto especialmente grande en la economía colombiana, dado que Estados Unidos es el mayor socio comercial del país.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img79.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Colombia tiene 15 acuerdos comerciales preferenciales vigentes. La tasa arancelaria promedio ponderada por el comercio es del 6,8 por ciento y están en vigor 153 medidas no arancelarias. En general, las políticas gubernamentales no interfieren significativamente con la inversión extranjera. El sector financiero se mantiene resistente. Las reformas continúan enfocándose y promoviendo el desarrollo de los mercados de capital al mejorar la flexibilidad y la competencia.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p En el mes de febrero del año 2022 se desaceleró rudamente el crecimiento anual de las ventas minoristas en nuestro país. Fue la expansión más lenta del sector minorista a un 4,9 % comparado con los cinco meses anteriores en un alza 21 %. Las contribuciones de ventas más importantes se registran en el combustible, los respuestas, accesorios y lubricantes para vehículos. Asimismo, en el sector textil. En cambio, los sectores que disminuyeron sus ventas se identifican en el área de vehículos, motos, alimentos, electrodomésticos y muebles.

    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Variables económicas

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.col-12
        .tarjeta.p-4(style="background-color: #E1EFE3")
          .row.justify-content-center.align-items-center
            .col-lg-3
              figure
                img(src='@/assets/curso/temas/tema1/img80.svg', alt='Imagen decorativa')
            .col-lg-8
              p El estudio de la economía se clasifica según su variabilidad en: la macroeconomía y la microeconomía. Para las empresas un análisis macro o micro puede ayudar con la toma de decisiones cuando se está pensando en expandir la producción o inserción en un nuevo mercado. A continuación, se detalla cada una de estas variables económicas:
              p #[b La Macroeconomía:] Examina cómo se comporta la economía a gran escala, incluyendo factores que impactan el mercado, el producto interno bruto, la inflación, el crecimiento económico y las cifras de desempleo. Comprende cada uno de los elementos y cómo influyen entre sí para analizar el lugar que ocupa el negocio dentro del mercado. Los inversionistas utilizan la variable para planificar los futuros movimientos analizando cómo se comporta el Mercado.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p Algunas variables macroeconómicas que se utilizan para medir el estado actual de la economía son: 

    TabsA.color-acento-botones.mb-4
      .tarjeta.color-acento-botones--borde.p-4(titulo="Producto interno bruto (PIB)")
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-12
            h4 Producto interno bruto (PIB)
            p En el año 2021, el PIB saltó un 10,3 por ciento, recuperándose sólidamente de una contracción del 7,3 por ciento en el año anterior. El sector más grande y de más rápido crecimiento de la economía colombiana es el de servicios con un 53% del PIB, en el que incluye: financiamiento, seguros, bienes raíces y servicios empresariales; servicios comunitarios, sociales y personales; comercio, reparaciones, restaurantes y hoteles y transporte, almacenamiento y comunicaciones. La industria manufacturera y la minería.
            p Otros sectores incluyen: 
            ul.lista-ul
              li
                i.fas.fa-angle-right
                | Gobierno 10 %
              li
                i.fas.fa-angle-right
                | Agricultura, caza, silvicultura y pesca 6,3 %
              li
                i.fas.fa-angle-right
                | Construcción 6 %
              li
                i.fas.fa-angle-right
                | Distribución de electricidad, gas y agua 4 %


      .tarjeta.color-acento-botones--borde.p-4(titulo="Tasa de inflación")
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-12
            h4 Tasa de inflación
            p El año pasado, la inflación fue del 5,62 %, la más alta en 5 años, no se espera que la inflación de Colombia regrese al 3 % objetivo del banco central en los próximos 2 años. La tasa de inflación anual en Colombia se aceleró a 9,23% en abril de 2022 desde 8,53 % en marzo, superando el consenso de mercado de 8,78 %. Las principales presiones al alza provinieron del costo de los alimentos y bebidas no alcohólicas, bebidas alcohólicas y tabaco, vestuario, agua, servicios públicos, muebles, salud, transporte, ocio y cultura, restauración y varios.

      .tarjeta.color-acento-botones--borde.p-4(titulo="Índice de precios al consumidor (IPC)")
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-12
            h4 Índice de precios al consumidor (IPC)
            p En Colombia, los tres principales componentes del índice de precios al consumidor son: 
            ul.lista-ul
              li
                i.fas.fa-angle-right
                | Vivienda y Servicios Públicos 33,1 %
              li
                i.fas.fa-angle-right
                | Alimentos y Bebidas No Alcohólicas 15 %
              li
                i.fas.fa-angle-right
                | Transporte 12,9 %
            p Otros incluyen: Restaurantes y Hoteles, bienes y servicios misceláneos. Educación e Información y Comunicación, mobiliario, vestuario y calzado, Recreación y cultura, Bebidas Alcohólicas y Tabaco y Salud. El IPC cubre la población urbana, incluidas algunas áreas metropolitanas, que concentran la mayor población registrada en el país y presentan el entorno económico más dinámico en comparación con el resto de las ciudades del país.

      .tarjeta.color-acento-botones--borde.p-4(titulo="Índice de precios al productor (IPP)")
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-12
            h4 Índice de precios al productor (IPP)
            p Mide el cambio promedio en el tiempo de los precios desde el primer nivel de mercadeo para una canasta de productos. Dicho en otras palabras, evalúa el cambio promedio en el precio de los bienes y servicios vendidos por los fabricantes y productores en el mercado mayorista durante un período determinado. La entidad encargada de generar esta información es el Departamento Administrativo Nacional de Estadística (DANE).  Los precios al productor en Colombia aumentaron un 35,65% interanual en abril de 2022, acelerándose desde un aumento del 32,84% en el mes anterior. Fue la inflación al productor más alta desde que comenzaron los registros comparables en el 2000. 
      .tarjeta.color-acento-botones--borde.p-4(titulo="Tasa representativa del mercado (TRM)")
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-12
            h4 Tasa representativa del mercado (TRM)
            p El promedio ponderado de las tasas de cambio de compra y venta de las operaciones realizadas el día hábil anterior por ciertos bancos comerciales y sociedades financieras en Bogotá, Cali, Barranquilla y Medellín, según lo calculado y publicado por la Superintendencia Bancaria de Colombia. Este dato se refleja en la página del banco de la república de Colombia.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tarjeta.p-4(style="background-color: #E1EFE3")
          .row.justify-content-center.align-items-center
            .col-lg-3
              figure
                img(src='@/assets/curso/temas/tema1/img115.svg', alt='Imagen decorativa')
            .col-lg-8
              p #[b La Microeconomía:] Analiza lo que sucede cuando los actores individuales toman decisiones financieras y cómo estas decisiones interactúan entre sí. Explora los factores que impulsan el comportamiento individual y empresarial, dividiendo las personas en grupos pequeños como propietarios de negocios, compradores y vendedores.

    Separador
    .row
      .col-xl-12
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.4 Estrategias de #[i marketing]
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p Una estrategia de #[i marketing] le ayuda a determinar a quién está sirviendo y cómo puede alinear sus planes comerciales con las necesidades de sus clientes, esto no solo generará clientes más felices, sino que también generará ingresos y garantizará que se dirija en la dirección estratégica correcta para el crecimiento a corto y largo plazo.
        p A continuación se presentan los puntos claves para desarrollar una estrategia de marketing que sea inmune a los riesgos, puesto que no es una tarea acelerada ni fácil.

    .row.justify-content-center.align-items-center
      .col-lg-8
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img109.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul(style="background-color: #E1EFE3")
            .p-4
              h4 Identificación de objetivos
              p Los propósitos que quiere alcanzar a corto y largo plazo, puede incluir cifras de ventas específicas, pero también considerar factores como aumentar el conocimiento de la marca y su presencia en las redes sociales.
    .row.justify-content-center.align-items-center
      .col-lg-8
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img110.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul(style="background-color: #E1EFE3")
            .p-4
              h4 Estudio o investigación de mercado
              p Aquí podrá identificar sus clientes potenciales o los interesados en su producto, no desaproveche la información y aprenda todo lo que pueda sobre sus clientes objetivo (que necesitan).
    .row.justify-content-center.align-items-center
      .col-lg-8
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img111.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul(style="background-color: #E1EFE3")
            .p-4
              h4 Análisis de la competencia
              p Métodos y técnicas de marketing utilizados por la competencia para analizar e interpretar, además de recoger respuestas sobre como venden ellos los productos y la relación que sostienen con los clientes.
    .row.justify-content-center.align-items-center
      .col-lg-8
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img112.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul(style="background-color: #E1EFE3")
            .p-4
              h4 Identificación de la propuesta de venta
              p En el negocio es muy importante que establezca en su producto la propuesta de valor la cual ha de ser llamativa para satisfacer las necesidades del cliente, lo cual marca la diferencia con su competencia y lo convierte en la mejor opción de compra.
    .row.justify-content-center.align-items-center
      .col-lg-8
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img113.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul(style="background-color: #E1EFE3")
            .p-4
              h4 Canales de <em>marketing</em>
              p La mayoría de las empresas optan por una combinación de estrategias en línea o tradicionales en donde se reduce a comprender a su audiencia sobre las plataformas en las que pasan mayor tiempo y les generan mayor seguridad.
    
    //-.row.justify-content-center.align-items-center.mb-4      
      .col-md-3.col-xl-3.mb-4.mb-xl-0        
        .tarjeta-numerada.color-primario.p-5
          .tarjeta-numerada__numero
            .h2 1
          p.text-center 
            b Identificación de objetivos
          p.text-center Los propósitos que quiere alcanzar a corto y largo plazo, puede incluir cifras de ventas específicas, pero también considerar factores como aumentar el conocimiento de la marca y su presencia en las redes sociales.

      .col-md-3.col-xl-3.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 2
          p.text-center 
            b Estudio o investigación de mercado
          p.text-center Aquí podrá identificar sus clientes potenciales o los interesados en su producto, no desaproveche la información y aprenda todo lo que pueda sobre sus clientes objetivo (que necesitan).

      .col-md-3.col-xl-3.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero
            .h2 3
          p.text-center 
            b Análisis de la competencia
          p.text-center Métodos y técnicas de marketing utilizados por la competencia para analizar e interpretar, además de recoger respuestas sobre como venden ellos los productos y la relación que sostienen con los clientes.

    //-row.justify-content-center.align-items-center.mb-4      
      .col-md-3.col-xl-3.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-botones.p-5
          .tarjeta-numerada__numero
            .h2 4
          p.text-center 
            b Identificación de la propuesta de venta
          p.text-center En el negocio es muy importante que establezca en su producto la propuesta de valor la cual ha de ser llamativa para satisfacer las necesidades del cliente, lo cual marca la diferencia con su competencia y lo convierte en la mejor opción de compra.

      .col-md-3.col-xl-3.mb-4.mb-xl-0
       .tarjeta-numerada.color-primario.p-5
          .tarjeta-numerada__numero
            .h2 5
          p.text-center 
            b Canales de <em>marketing</em>
          p.text-center La mayoría de las empresas optan por una combinación de estrategias en línea o tradicionales en donde se reduce a comprender a su audiencia sobre las plataformas en las que pasan mayor tiempo y les generan mayor seguridad.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p Es importante distinguir que la estrategia de marketing establece los objetivos generales y la dirección de las actividades de marketing en los próximos meses y años, apoyados en un plan de marketing que proporcionará los detalles de las actividades reales que llevará a cabo para lograr estos objetivos. Tanto la estrategia de marketing como el plan de marketing son claves para su éxito a largo plazo, ya sea que su empresa sea una pequeña empresa emergente o una organización global. 
        p Con lo descrito, se relaciona la siguiente caracterización de la estrategia de marketing:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/img81.svg', alt='Imagen decorativa')
      .col-lg-5
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Metas u objetivos")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Exprese lo que quiere lograr, a través de la generación de respuestas al cómo y el cuándo, el tiempo que tardará en alcanzar los objetivos trazados y los recursos que demanda.
          .row(numero="2" titulo="Mercado objetivo")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Enfóquese en quien importa, que para el caso son las personas compradoras, obtenga conocimiento de los clientes, sus necesidades, problemas y comportamientos de compra.
          .row(numero="3" titulo="Análisis")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Realice una análisis de la situación en donde pueda evaluar el rendimiento de #[i marketing] propuesto. Revise y evalue las fortalezas y debilidades de la competencia.
          .row(numero="4" titulo="Propuesta")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Cree propuestas de valor, declaraciones de visión y misiones para contar y compartir su historia.
          .row(numero="5" titulo="Canales")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Concéntrese en los canales mas efectivos para involucrar, educar, entretener y nutrir a los clientes.
          .row(numero="6" titulo="Plan táctico")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Enfoque un plan de ejecución táctica para guiar quien hace qué, cuándo y cómo, así como herramientas, procesos y mejores prácticas.
          .row(numero="7" titulo="Métrica")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Mida cómo se está desempeñando el #[i marketing] en comparación con varios puntos de referencia, luego optimice para mejorar los resultados y el rendimiento.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p El #[i marketing] para una empresa pequeña dispone de una serie de estrategias que puede utilizar para comunicarse y convencer a los clientes. Las acciones estratégicas de mercadeo pueden incluir el pago de publicidad, apariciones en eventos, campañas de relaciones públicas, redes sociales y descuentos por correo electrónico. Como resultado, cada negocio demandará una combinación diferente de herramientas para crear una estrategia de #[i marketing] exitosa.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6
        figure
          img(src='@/assets/curso/temas/tema1/img82.png', alt='Imagen decorativa')
      .col-lg-6
        p La estrategia de marketing abarca la oferta, el precio, la promoción y la distribución del producto o servicio, o la entrega del producto o servicio a sus clientes. Impulsa las características del producto, el tiempo desde el pedido hasta la entrega, la logística, la investigación y el desarrollo, el servicio al cliente. En resumen, impulsa lo que es clave para todas las facetas del negocio.
        p Los tres principales factores externos que afectan las estrategias de marketing de manera negativa son:
        .cblanco3
          ul.lista-ul
            li
              i.fas.fa-circle
              | Adecuarse a la recesión económica
            li
              i.fas.fa-circle
              | Crecimiento de la competencia
            li
              i.fas.fa-circle
              | Cambios en la conducta de compra del cliente.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p Estos aspectos se deben evaluar periódicamente para saber cómo responder o focalizar la estrategia de #[i marketing] planteada. Si se descuida en uno de estos factores se pierde el horizonte y las posibilidades de alcanzar los objetivos de corto y largo plazo del negocio. La implementación formal de la estrategia se convierte en objetivos para evaluaciones de desempeño y posiblemente cambios en la organización.
        p
          .cblanco3 
            ul.lista-ul
              li
                i.fas.fa-circle
                | Entornos del negocio que impulsa la estrategia de #[i marketing].
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p En el negocio y las diferentes estrategias que se pueden implementar se presentan elementos como:

    .col-12.desktop
      .row.justify-content-center.align-items-center.mb-4      
        .col-sm-6.col-xl-3.mb-4.mb-xl-0.h390.col-9
          .tarjeta.tarjeta-slide.arriba.bg2(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__contenido.p-4.p-xl-5
                h5 Las ventas
                p Instituye las fortalezas para vender, las ventajas que ofrece el negocio por la compra, determina que clientes son potenciales y a cuáles hay que dejar seguir. Las ventas facilitan información importante sobre el plan en el campo.
                br
                br
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img83.png')})`}")      
        .col-sm-6.col-xl-3.mb-4.mb-xl-0.h390.col-9
          .tarjeta.tarjeta-slide.arriba.bg2(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__contenido.p-4.p-xl-5
                h5 Las operaciones
                p Si la estrategia es de bajo costo, por ende, las operaciones deben eliminar los costos del producto. Si está ofreciendo un flujo de nuevos productos, por ende, las operaciones deben tener la flexibilidad y la práctica para hacerlo de manera rentable.
                
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img84.png')})`}")      
        .col-sm-6.col-xl-3.mb-4.mb-xl-0.h390.col-9
          .tarjeta.tarjeta-slide.arriba.bg2(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__contenido.p-4.p-xl-5
                h5 La investigación
                p Estipula la necesidad de desarrollar o no nuevos productos continuamente y los lineamientos de estos productos, también entrega información de líneas de tiempo cruciales para los lanzamientos de productos.
                br
                br
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img85.png')})`}")      
        .col-sm-6.col-xl-3.mb-4.mb-xl-0.h390.col-9
          .tarjeta.tarjeta-slide.arriba.bg2(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__contenido.p-4.p-xl-5
                h5 Finanzas
                p Garantiza que se realice un seguimiento y monitoreo a los indicadores de medida para proporcionar el análisis adecuado sobre el éxito de la estrategia.
                br
                br
                br
                br
                br
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img86.png')})`}")
      
    .col-12.movil 
      .row.justify-content-center.align-items-center.mb-4      
          .col-sm-6.col-xl-3.mb-4.mb-xl-0.h390.col-9
            .tarjeta.tarjeta-slide.arriba.bg2(@mouseover="indicadorTarjetaSlide = false")
              .indicador--hover(v-if="indicadorTarjetaSlide")
              .tarjeta-slide__contenedor
                .tarjeta-slide__contenido.p-4.p-xl-5
                  h5 Las ventas
                  p Instituye las fortalezas para vender, las ventajas que ofrece el negocio por la compra, determina que clientes son potenciales y a cuáles hay que dejar seguir. Las ventas facilitan información importante sobre el plan en el campo.
                  br
                  br
                .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img83.png')})`}")      
          .col-sm-6.col-xl-3.mb-4.mb-xl-0.h390.col-9
            .tarjeta.tarjeta-slide.arriba.bg2(@mouseover="indicadorTarjetaSlide = false")
              .indicador--hover(v-if="indicadorTarjetaSlide")
              .tarjeta-slide__contenedor
                .tarjeta-slide__contenido.p-4.p-xl-5
                  h5 Las operaciones
                  p Si la estrategia es de bajo costo, por ende, las operaciones deben eliminar los costos del producto. Si está ofreciendo un flujo de nuevos productos, por ende, las operaciones deben tener la flexibilidad y la práctica para hacerlo de manera rentable.
                  
                .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img84.png')})`}")      
          .col-sm-6.col-xl-3.mb-4.mb-xl-0.h390.col-9
            .tarjeta.tarjeta-slide.arriba.bg2(@mouseover="indicadorTarjetaSlide = false")
              .indicador--hover(v-if="indicadorTarjetaSlide")
              .tarjeta-slide__contenedor
                .tarjeta-slide__contenido.p-4.p-xl-5
                  h5 La investigación
                  p Estipula la necesidad de desarrollar o no nuevos productos continuamente y los lineamientos de estos productos, también entrega información de líneas de tiempo cruciales para los lanzamientos de productos.
                  br
                  br
                .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img85.png')})`}")      
          .col-sm-6.col-xl-3.mb-4.mb-xl-0.h390.col-9
            .tarjeta.tarjeta-slide.arriba.bg2(@mouseover="indicadorTarjetaSlide = false")
              .indicador--hover(v-if="indicadorTarjetaSlide")
              .tarjeta-slide__contenedor
                .tarjeta-slide__contenido.p-4.p-xl-5
                  h5 Finanzas
                  p Garantiza que se realice un seguimiento y monitoreo a los indicadores de medida para proporcionar el análisis adecuado sobre el éxito de la estrategia.
                  br
                  br
                  br
                  br
                  br
                .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img86.png')})`}")

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p Por ende, la estrategia de #[i marketing] impulsará la estrategia en los demás departamentos de una empresa que está orientada a crecer de manera rentable. La estrategia de #[i marketing] es mucho más grande, ya que se instaura para toda la organización, puesto que contiene las claves de la ventaja competitiva y del crecimiento rentable.

    Separador
    .row
      .col-xl-12
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.5 Riesgo empresarial
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img87.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las herramientas de recolección de información son los instrumentos utilizados para recoger datos, se refiere a un cuestionario en papel o un sistema de entrevista asistido en línea. Los estudios de casos, las listas de verificación, las entrevistas, la observación a veces y las encuestas o cuestionarios son herramientas que se utilizan para recopilar datos. Es importante decidir las herramientas para recolectar los datos porque la investigación se lleva a cabo de diferentes maneras y con diferentes propósitos. El objetivo detrás de la recolección de datos es capturar evidencia de calidad que permita que el análisis conduzca a la formulación de respuestas convincentes y creíbles a las preguntas planteadas.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p Para la recolección de los datos que fundamenta las decisiones del negocio, ha de utilizar las diferentes técnicas cualitativas y cuantitativas que le permitan comprender el mercado, las expectativas de los clientes y la cantidad de clientes potenciales. De las técnicas cualitativas el instrumento es la entrevista, en cuanto a las técnicas cuantitativas el instrumento de recolección de datos es el cuestionario. A continuación, se describen cada uno de estos instrumentos que se utilizan para el estudio de mercado:
    
    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Entrevistas

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p Hablar de entrevistas es comprender su naturaleza, partiendo del grado de libertad, es decir la dirección en cuanto al tema general y las preguntas precisas que formula el entrevistador. La otra naturaleza es el nivel de profundidad la cual comprende los detalles que se desean saber y que tendrán impacto en los factores del número de entrevistas, duración y la interpretación de los resultados.
        p La investigación de mercado cualitativa se basa en métodos específicos como entrevistas individuales, grupos focales y antropología. Las técnicas cuantitativas están asociadas a los cuestionarios cuantitativos, y su resultado son encuestas y sondeos online. De esta manera se reconoce que tipo de entrevistas se pueden presentar, al igual las preguntas que se desarrollan según la clasificación de estas, observa:
    
    .row.justify-content-center.align-items-center.mb-4
      .col-10.p-2
        .titulo-sexto.color-acento-contenido.mb-0(data-aos="fade-right")
          h5 Figura 8.
          span #[i Entrevistas]
      .col-lg-10.desktop
        figure
          img(src='@/assets/curso/temas/tema1/img88.svg', alt='Imagen decorativa')
      .col-lg-10.movil
        figure
          img(src='@/assets/curso/temas/tema1/img88-1.svg', alt='Imagen decorativa')
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p Dentro de las entrevistas cerradas se encuentra la entrevista semiestructurada, la cual forma la base de la investigación cualitativa en la investigación de mercado. Se utiliza este procedimiento internamente como base para nuestras entrevistas. De hecho, es esencial recolectar los temas y preguntas clave relacionados con el problema identificado por la empresa para recoger comentarios relevantes de los entrevistados. Se basan en muestras pequeñas que oscilan entre 15 y 30 ya que requieren mucha disciplina para analizar los datos a lo largo del tiempo. 
    
    <li><strong>Ventajas de la entrevista semiestructurada</strong></li>

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12        
        .BG02.p-5
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-3
              figure  
                img(src='@/assets/curso/temas/tema1/img89.svg', alt='Imagen decorativa')
            .col-lg-7
              ul.lista-ul
                li
                  i.fas.fa-check
                  | Flexibilidad en la respuesta del entrevistado
                li
                  i.fas.fa-check
                  | Mantiene el rumbo durante la entrevista para no perder el foco del tema
                li
                  i.fas.fa-check
                  | Preparación del entrevistador con fines de colaborar al encuestado.
                li
                  i.fas.fa-check
                  | Personalización y retroalimentación

    <li><strong>Temas y preguntas de las entrevistas</strong></li>
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6
        p Es esencial evitar cualquier juicio para no influir en las respuestas de los encuestados, ya sea mediante la formulación de preguntas, el acuerdo o desacuerdo de una afirmación del encuestado o mediante gestos que induzcan a estar de acuerdo o desacuerdo. Tenga presente, personalizar las preguntas, esto permite a los encuestados aprovechar su experiencia al responder las preguntas. Estamos tratando de entender su comportamiento y no poner a prueba sus conocimientos teóricos.
        p Importante empezar la entrevista con las preguntas generales del tema para que el entrevistado identifique el norte o rumbo que se desarrollará con las preguntas y asimismo ponerlo en contexto con la entrevista. Luego, vendrán las preguntas sobre aspectos más detallados en donde se quiere precisar de la información con más esmero.
      .col-lg-6
        figure  
          img(src='@/assets/curso/temas/tema1/img90.png', alt='Imagen decorativa')
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p Las entrevistas se realizan con un fin particular, que en el ámbito de mercadeo es asegurar que no haya riesgos de ninguna índole para la empresa y si aparecen puedan manejarse exitosamente. Por ello, un ejemplo de entrevista puede ser la que realiza una empresa que desea mover su punto de venta o instalarse en una nueva localización. Por tanto, entreviste a las personas de la zona donde se desea trasladar, si el sector es afín a su marca, es decir, realizar un estudio previamente a la decisión que vaya a tomar.

    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Encuestas

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6
        figure  
          img(src='@/assets/curso/temas/tema1/img91.png', alt='Imagen decorativa')

      .col-lg-6
        p La investigación de mercado generalmente es más cuantitativa, por lo que preparar un buen cuestionario para la investigación de mercado cuantitativa representa un desafío y requerirá de método, algo de trabajo y que el encuestado tenga la experticia para responder a las preguntas formuladas en el cuestionario. La encuesta puede ofrecer datos sobre comportamientos que se puedan cuantificar. Las encuestas se aplican también para medir la satisfacción del cliente y la afinidad con la marca.
        .cajon.color-primario.p-4.mb-4
          p La encuesta de mercado es la investigación y el análisis de la encuesta del mercado para un producto o servicio en particular que incluye la investigación de las inclinaciones del cliente. Un estudio de las diversas capacidades de los clientes, como los atributos de inversión y el potencial de compra. Las encuestas de mercado son herramientas para recopilar directamente la retroalimentación del público objetivo para comprender sus características, expectativas y requisitos.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p La mayoría de las empresas confiesan que las encuestas de mercado ayudan enormemente en la recolección de información ya que estimulan el proceso de investigación de mercado. Además, los comentarios recibidos de estas encuestas pueden contribuir a la comercialización del producto y la mejora de funciones. Las encuestas de mercado recolectan datos sobre un mercado objetivo, como tendencias de precios, requisitos de los clientes, análisis de la competencia y otros detalles similares.
    
    .row.justify-content-center.align-items-center
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center.mb-4.p-4(style="background-color: #DBE5F3")
          .col-lg-7
            p Para el diligenciamiento de la encuesta se hace necesario solicitar a las personas de su colaboración para que respondan a las preguntas allí planteadas, esto también es un foco para administrar la encuesta, la cual puede ser entregada a las personas en línea, ya que es la herramienta más común y de mayor alcance en la era digital. Se invita a través de un enlace con la encuesta y un mensaje de impacto que se envía a través de las redes sociales o de manera más formal mediante mensajería instantánea.
            p La mayoría de los servicios de encuestas en línea tienen tablas con gráficos, promedios e intervalos confiables. Esto es más que suficiente para cubrir la necesidad de investigación de mercado de la empresa. 

          .col-lg-4
            figure  
              img(src='@/assets/curso/temas/tema1/img92.svg', alt='Imagen decorativa')

    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Preguntas de la encuesta

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p El creador de la encuesta puede decidir el tipo de preguntas a utilizar, iniciando con la redacción de preguntas cerradas y sencillas de analizar, asegurándose que no sean demasiados extensas para el encuestado ya que se busca obtener estadísticas y resultados cuantificables en comparación con las cualitativas que tienden a ser abiertas y difíciles de analizar. Estas preguntas son fáciles de responder para los encuestados debido a su estructura cerrada, se puede hacer una cantidad considerable de preguntas sin tener que preocuparse de si los encuestados se irritan o no. Las preguntas cuantitativas pueden comenzar con:
    
    
    .row.mb-4
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-botones.bg2.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema1/img93.png', alt='Texto que describa la imagen')

          h3.text-center ¿Qué?

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-botones.bg2.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema1/img94.png', alt='Texto que describa la imagen')

          h3.text-center ¿Cómo?

      .col-sm-6.col-lg-3.mb-4.mb-sm-0
        .tarjeta--boton.color-acento-botones.bg2.text-white--hover.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema1/img95.png', alt='Texto que describa la imagen')

          h3.text-center ¿Cuántos?

      .col-sm-6.col-lg-3
        .tarjeta--boton.color-acento-botones.bg2.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema1/img96.png', alt='Imagen decorativa')

          h3.text-center ¿Cuáles?
    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Tipos de encuestas

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p Las empresas utilizan varios tipos de encuestas de mercado para recolectar datos según el objetivo de su investigación de mercado. La información recopilada se puede utilizar para estudiar varios aspectos del mercado para abordar temas como el momento adecuado para lanzar el producto o servicio, comprender las tendencias del mercado, medir la lealtad del cliente, estudiar a sus competidores y muchos más. Seguidamente, se relacionan los tipos de encuestas más comunes que realizan las empresas exitosas del mundo:

    .tarjeta.p-4.mb-4(style="background-color: #E1EFE3")
      SlyderB.mb-4(:datos="datosSlyder")


    .row.justify-content-center.mb-4
      .col-8.p-2
        .titulo-sexto.color-acento-contenido.mb-0(data-aos="fade-right")
          h5 Figura 9.
          span #[i Modelo encuesta ]
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8
        figure.desktop
          img(src='@/assets/curso/temas/tema1/img116.svg', alt='Imagen que relaciona una tabla que ejemplifica un modelo de encuesta, encontrando aspectos como género y preguntas sobre salud, si frecuenta el gimnasio, con qué regularidad lo hace, cuál es la hora preferida y el centro qué desea el entrevistado.')
      .col-lg-12
        figure.movil
          img(src='@/assets/curso/temas/tema1/img116_.svg', alt='Imagen que relaciona una tabla que ejemplifica un modelo de encuesta, encontrando aspectos como género y preguntas sobre salud, si frecuenta el gimnasio, con qué regularidad lo hace, cuál es la hora preferida y el centro qué desea el entrevistado.')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p Las anteriores preguntas giran en torno a los objetivos de la empresa y la finalidad que representa la encuesta, ya que todas las actividades de marketing deben girar entorno a la adquisición de clientes. La recolección de datos entrega la información necesaria sobre las capacidades del mercado para atraer nuevos servicios o productos para desarrollarlos en función del cliente.
        p Es fundamental entender los objetivos que se pueden lograr con cada una de las metodologías o dicho en otras palabras, antes de comenzar la investigación de mercado, debe ahondar en el espíritu de ambos enfoques para elegir el que mejor se adapte a la situación.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    datosLineaTiempoB: [
      {
        titulo: 'Fortaleza de activos y competencias',
        texto: '',
        icono: require('@/assets/curso/temas/tema1/img40.svg'),
      },
      {
        titulo: 'Fortaleza relativa de la marca',
        texto: '',
        icono: require('@/assets/curso/temas/tema1/img41.svg'),
      },
      {
        titulo: 'Cuota de mercado',
        texto: '',
        icono: require('@/assets/curso/temas/tema1/img42.svg'),
      },
      {
        titulo: 'La lealtad del cliente',
        texto: '',
        icono: require('@/assets/curso/temas/tema1/img43.svg'),
      },
      {
        titulo: 'Posición relativa de costos',
        texto: '',
        icono: require('@/assets/curso/temas/tema1/img44.svg'),
      },
      {
        titulo: 'Fuerza de distribución',
        texto: '',
        icono: require('@/assets/curso/temas/tema1/img45.svg'),
      },
      {
        titulo: 'Registro de innovación tecnológica o de otro tipo',
        texto: '',
        icono: require('@/assets/curso/temas/tema1/img46.svg'),
      },
      {
        titulo: 'Acceso a recursos financieros y de inversión',
        texto: '',
        icono: require('@/assets/curso/temas/tema1/img47.svg'),
      },
    ],

    datosSlyder: [
      {
        titulo: 'Encuestas de mercado para la segmentación',
        texto:
          'Una organización puede detectar clientes actuales y potenciales, comprender por qué los clientes eligieron sus productos o servicios. Esto puede conducir a una segmentación y análisis de mercado estructurado.',
        imagen: require('@/assets/curso/temas/tema1/img97.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Encuestas de mercado para explorar varios aspectos del mercado objetivo',
        texto:
          'Obtenga información sobre factores como el tamaño del mercado, información demográfica como edad, sexo, ingresos familiares, entre otros. para diseñar una hoja de ruta considerando la tasa de crecimiento del mercado, posicionamiento y cuota de mercado.',
        imagen: require('@/assets/curso/temas/tema1/img98.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Encuestas de mercado para establecer la personalidad del comprador',
        texto:
          'Estas encuestas son para construir una personalidad del comprador al conocer las preferencias, la inclinación y las capacidades de compra de un producto del cliente.',
        imagen: require('@/assets/curso/temas/tema1/img99.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Encuestas de mercado para analizar una nueva característica o concepto',
        texto:
          'Es esencial para una organización incluir características y conceptos compatibles con el mercado. Al realizar una encuesta de mercado para comprender qué funciones lanzar, ayudará a todos los equipos involucrados en el proceso de desarrollo de funciones a hacerlo con la investigación adecuada.',
        imagen: require('@/assets/curso/temas/tema1/img100.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Estudios de mercado para el análisis de la competencia',
        texto:
          'Las encuestas de mercado realizadas con el motivo del análisis de la competencia producirán resultados sobre cómo el mercado objetivo mide los productos o servicios de la organización en comparación con los demás en el mercado. La competencia sana siempre es buena para el progreso de una organización.',
        imagen: require('@/assets/curso/temas/tema1/img101.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Estudios de mercado para evaluar los precios de nuevos productos o servicios',
        texto:
          'Un aspecto que impulsa el mercado para las organizaciones es que el producto sea asequible. Rangos de precios, variantes de productos para atender múltiples rangos de precios, clientes objetivo para cada uno de los productos.',
        imagen: require('@/assets/curso/temas/tema1/img102.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Encuestas de mercado para la evaluación del servicio al cliente',
        texto:
          'Un buen servicio al cliente puede conducir a mayores niveles de satisfacción entre los clientes. Factores como el tiempo necesario para resolver problemas, el alcance de la mejora, las mejores prácticas de servicio al cliente.',
        imagen: require('@/assets/curso/temas/tema1/img103.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
    ],
    datosSlyder1: [
      {
        titulo: 'Exportaciones e importaciones',
        texto:
          'En las exportaciones e importaciones de la vigencia 2020 también se vieron afectadas, puesto que las restricciones no facilitaban la tarea, la logística en cuanto a movilidad se hacía con el pasar del tiempo más compleja',
        imagen: require('@/assets/curso/temas/tema1/img69.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Emergencia sanitaria',
        texto:
          'La economía se transformó dando paso a otros productos mucho más relevantes en cuanto a la situación de emergencia sanitaria. Dicho en otras palabras, el sector salud desplazo a varios sectores económicos que eran solidos gracias a comercio exterior.',
        imagen: require('@/assets/curso/temas/tema1/img70.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Fuentes de ingreso',
        texto:
          'Las condiciones económicas del 2020 requirieron contar con indicadores oportunos en tiempo real para realizar seguimiento y aplicar los cambios que se crean necesarios. Por tanto, otras fueron las fuentes que generaron ingreso en nuestro país, la información que entregaban los noticieros se volvió indispensable para manejar la situación.',
        imagen: require('@/assets/curso/temas/tema1/img71.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Audiciencia',
        texto:
          'La audiencia exigía estar informado y para ello hacía uso de la tecnología, las diferentes revistas entregaban varios datos y artículos científicos sobre la situación que afrontaba el mundo.',
        imagen: require('@/assets/curso/temas/tema1/img72.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '<em>Marketing</em>',
        texto:
          'Publicidad de la salud, <em>marketing</em> en temas de posibles vacunas, todas apuntando a un mismo esfuerzo, salir de la hecatombe en el que estaba el mundo y frenar la recesión económica de la vigencia 2020 para el país.',
        imagen: require('@/assets/curso/temas/tema1/img73.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
