"use client";

import { Image } from "@nextui-org/react";
// import ButtonDumb from "@/ui/components/dumbs/button";
import IconDumb from "@/ui/components/dumbs/icon";

import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
// import { MdMessage } from "react-icons/md";

import "@ui/anim/cardAnimation.css";
import PopoverDumb from "@/ui/components/dumbs/popover";
import CardDumb from "@/ui/components/dumbs/card";

export default function Home() {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-8" id="Inicio">
        {/* Contenedor de la Imagen */}
        <div className="flex flex-col items-center w-full">
          <Image
            className="rounded-full w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] object-cover"
            isBlurred
            isZoomed
            src="/images/joselin.jpeg"
            alt="Next.js logo"
            radius="full"
          />
        </div>

        {/* Contenido principal */}
        <main className="w-full text-center">
          <h1 className="text-4xl font-bold text-gray-800">¿Quién soy?</h1>
          <br />
          <p className="text-base lg:text-lg leading-relaxed text-justify">
            Soy una profesional dedicada con experiencia en la atención al
            cliente y ventas. He trabajado como cuidadora de aves, lo que me ha
            enseñado la importancia de la responsabilidad y el cuidado
            meticuloso. Además, he sido vendedora en dos tiendas, donde
            desarrollé habilidades clave en la gestión de inventarios, atención
            personalizada y técnicas de ventas. Mi experiencia como cajera y
            recepcionista en otra tienda me permitió perfeccionar mis
            capacidades organizativas y de servicio al cliente, asegurando una
            experiencia de compra fluida y satisfactoria para todos los
            clientes. Estoy motivada para aplicar mis habilidades en un entorno
            de ventas, contribuyendo al éxito de la tienda y brindando un
            servicio excepcional.
          </p>
          <br />
          {/* Íconos */}
          <div className="flex gap-8 justify-start">
            <a href="https://wa.me/+56976776478">
              <IconDumb Icon={FaWhatsapp} color="#ff6f61" />
            </a>
            <a href="https://www.instagram.com/joshi_ure/">
              <IconDumb Icon={FaInstagram} color="#ff6f61" />
            </a>
            <a href="https://www.linkedin.com/in/joselin-rodr%C3%ADguez-41983a321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <IconDumb Icon={FaLinkedin} color="#ff6f61" />
            </a>
          </div>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-9 mt-6">
            <a
              className="bg-danger text-white px-4 py-2 rounded-lg inline-flex items-center justify-center hover:bg-danger-dark transition w-[100%]"
              href="mailto:braiana.rodriguez.16@gmail.com?Subject=Hola,%20tengo%20una%20consulta%20sobre..."
              target="_blank"
              rel="noopener noreferrer"
            >
              ¿Dudas? ¡Contáctame!
            </a>

            <a
              href="/pdf/CV_Joselin_Rodriguez.pdf"
              download="Joselin_Rodriguez_CV.pdf"
              className="bg-danger text-white px-4 py-2 rounded-lg inline-flex items-center justify-center hover:bg-danger-dark transition w-[100%]"
            >
              Descargar CV
            </a>
          </div>
        </main>
        {/* Botones */}
      </div>
      {/* Contenedor de Cards y Section */}
      <div
        className="flex flex-col lg:flex-row gap-8 max-w-[1200px] mx-auto px-4"
        id="Educacion"
      >
        {/* Cards */}
        <div className="grid grid-cols-12 gap-4 lg:w-2/3">
          <CardDumb
            className="col-span-12 sm:col-span-6 lg:col-span-4 cardAnimation"
            imageSrc="/images/agranel_promo.png"
            altText="Promoción de Agranel"
            footer={
              <div className="flex flex-grow gap-2 items-center">
                <div className="flex flex-col">
                  <p className="text-long text-white/60">Community Manager</p>
                  <p className="text-tiny text-white/60">
                    Creación de publicidad
                  </p>
                </div>
              </div>
            }
            footerBlurred={true}
          />
          <CardDumb
            className="col-span-12 sm:col-span-6 lg:col-span-4 cardAnimation"
            imageSrc="/images/agranel_promo1.png"
            altText="Promoción de Agranel"
            footer={
              <div className="flex flex-grow gap-2 items-center">
                <div className="flex flex-col">
                  <p className="text-long text-white/60">Community Manager</p>
                  <p className="text-tiny text-white/60">
                    Creación de publicidad
                  </p>
                </div>
              </div>
            }
            footerBlurred={true}
          />
          <CardDumb
            className="col-span-12 sm:col-span-6 lg:col-span-4 cardAnimation"
            altText="Promoción de Agranel"
          >
            <PopoverDumb
              title="Proyecto"
              content="¡Escanea el Código QR y ve el proyecto completo!"
            >
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="/images/qr_proyecto.png"
              />
            </PopoverDumb>
          </CardDumb>

          <CardDumb
            className="w-full h-[300px] col-span-12"
            imageSrc="/images/agranel_calendario.png"
            imageProps="z-0 w-full h-full object-cover"
            altText="Calendario de Eventos"
            footerBlurred={true}
            footerProps="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100"
            footer={
              <div className="flex flex-grow gap-2 items-center">
                <div className="flex flex-col">
                  <p className="text-long text-white/60">
                    Calendario de Eventos
                  </p>
                  <p className="text-tiny text-white/60">
                    Creación de un calendario de eventos para una tienda de
                    frutos secos para mayor alcance en las redes sociales.
                  </p>
                </div>
              </div>
            }
          />
        </div>

        {/* Section */}
        <section className="w-full max-w-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Educación y Experiencia Laboral
          </h1>
          <article className="mb-8">
            <h3 className="text-xl font-semibold">
              Técnico Medio en Servicios de Turismo
            </h3>
            <p className="text-base mt-2 leading-relaxed">
              Formación integral en Servicios de Turismo, con habilidades en
              atención al cliente, guía de turistas y primeros auxilios.
              Preparada para gestionar y mejorar la experiencia del cliente en
              entornos turísticos, asegurando un servicio de calidad y
              profesionalismo.
            </p>
          </article>
          <article className="mb-8">
            <h3 className="text-xl font-semibold">
              Curso de Marketing Digital con Mención en META
            </h3>
            <p className="text-base mt-2 leading-relaxed">
              Especialización en Marketing Digital centrado en la gestión de
              campañas en Facebook e Instagram. Capacitada en estrategias de
              redes sociales, análisis de datos y optimización de contenido para
              maximizar el engagement y el alcance de las marcas en plataformas
              digitales.
            </p>
          </article>
          <article>
            <h3 className="text-xl font-semibold">Atención al cliente</h3>
            <p className="text-base mt-2 leading-relaxed">
              Trabajo como cajera y recepcionista en tiendas me ayudó a
              desarrollar mis habilidades organizativas y de atención al
              cliente, garantizando una experiencia de compra eficiente y
              satisfactoria para cada cliente.
            </p>
          </article>
        </section>
      </div>
      <h1 className="text-4xl font-bold text-gray-800">Mis Servicios</h1>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        id="Servicio"
      >
        <CardDumb
          altText="Guía Turístico"
          bodyProps={
            <div>
              <h3 className="text-xl font-bold text-[#ff6f61]">
                Guía Turístico
              </h3>
              <p>
                Ofrecer tours personalizados, destacando mi conocimiento en la
                atención al cliente y primeros auxilios.
              </p>
            </div>
          }
        />
        <CardDumb
          altText="Consultoría en Experiencia del Cliente"
          bodyProps={
            <div>
              <h3 className="text-xl font-bold text-[#ff6f61]">
                Consultoría en Experiencia del Cliente
              </h3>
              <p>
                Asesorar a empresas turísticas en la mejora de la experiencia
                del cliente.
              </p>
            </div>
          }
        />
        <CardDumb
          altText="Planeación de Itinerarios"
          bodyProps={
            <div>
              <h3 className="text-xl font-bold text-[#ff6f61]">
                Planeación de Itinerarios
              </h3>
              <p>Crear itinerarios de viaje personalizados para turistas.</p>
            </div>
          }
        />
        <CardDumb
          altText="Gestión de Redes Sociales"
          bodyProps={
            <div>
              <h3 className="text-xl font-bold text-[#ff6f61]">
                Gestión de Redes Sociales
              </h3>
              <p>
                Crear y administrar perfiles de redes sociales para empresas,
                especialmente en Facebook e Instagram.
              </p>
            </div>
          }
        />
        <CardDumb
          className=""
          bodyProps={
            <div>
              <h3 className="text-xl font-bold text-[#ff6f61]">
                Estrategias de Marketing Digital
              </h3>
              <p>
                Desarrollar y ejecutar estrategias de marketing digital para
                aumentar el engagement.
              </p>
            </div>
          }
        />
        <CardDumb
          bodyProps={
            <div>
              <h3 className="text-xl font-bold text-[#ff6f61]">
                Publicidad en Redes Sociales
              </h3>
              <p>
                Crear y gestionar campañas publicitarias en Facebook e
                Instagram.
              </p>
            </div>
          }
        />
        <CardDumb
          bodyProps={
            <div>
              <h3 className="text-xl font-bold text-[#ff6f61]">
                Creación de Contenido
              </h3>
              <p>
                Redacción publicitaria y diseño de contenido visual atractivo
                para redes sociales y otros medios digitales.
              </p>
            </div>
          }
        />
        <CardDumb
          bodyProps={
            <div>
              <h3 className="text-xl font-bold text-[#ff6f61]">
                Ventas y Promociones
              </h3>
              <p>
                Desarrollar estrategias de ventas y promociones para tiendas.
              </p>
            </div>
          }
        />
        <CardDumb
          bodyProps={
            <div>
              <h3 className="text-xl font-bold text-[#ff6f61]">
                Asistencia Administrativa
              </h3>
              <p>
                Ofrecer servicios de apoyo administrativo en empresas,
                especialmente en el sector hotelero.
              </p>
            </div>
          }
        />
        <CardDumb
          bodyProps={
            <div>
              <h3 className="text-xl font-bold text-[#ff6f61]">
                Investigación de Experiencia de Usuario
              </h3>
              <p>
                Realizo estudios y análisis para mejorar la usabilidad y
                satisfacción del cliente en productos y servicios.
              </p>
            </div>
          }
        />
        <CardDumb
          bodyProps={
            <div>
              <h3 className="text-xl font-bold text-[#ff6f61]">
                Asesoría en Estrategia de Marketing
              </h3>
              <p>
                Consultoría en la creación de planes de marketing integrales
                para pequeñas y medianas empresas.
              </p>
            </div>
          }
        />
        <CardDumb
          bodyProps={
            <div>
              <h3 className="text-xl font-bold text-[#ff6f61]">
                Creación y diseño de Dossier Empresarial/Natural
              </h3>
              <p>
                Realizar un dossier donde se simplifique y especifique todo lo
                que necesites con respecto a tu trabajo.
              </p>
            </div>
          }
        />
      </div>
    </>
  );
}
