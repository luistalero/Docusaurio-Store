# 📚 Wiedii Documentation Hub

**We learn to improve** - Centro de documentación corporativa de Wiedii, donde encontrarás toda la información técnica y de usuario de nuestros productos y servicios.

## 🏢 Acerca de Wiedii

**Wiedii** es una empresa tecnológica especializada en el desarrollo de soluciones innovadoras para el sector salud. Nuestra misión es transformar la gestión médica a través de tecnología avanzada, cumpliendo con los más altos estándares de seguridad y privacidad.

### 🎯 Nuestro Enfoque

- **Innovación constante** en el desarrollo de software médico
- **Cumplimiento normativo** con estándares HIPAA y regulaciones internacionales
- **Experiencia de usuario** centrada en la usabilidad y eficiencia
- **Seguridad de datos** como prioridad fundamental en todos nuestros productos

## 🚀 Nuestros Productos y Servicios

Este centro de documentación cubre todos los productos y servicios desarrollados por Wiedii:

### 🏥 Waizant™ - Plataforma Médica Integral

**Waizant™** es nuestra solución principal: una plataforma médica avanzada utilizada por médicos y organizaciones de salud en Estados Unidos para optimizar la gestión de sus prácticas. Diseñada con un enfoque en la eficiencia y la seguridad, cumple con la normativa HIPAA.

#### 📱 Waizant Store

Punto de entrada para configurar una solución personalizada. Es un asistente guiado que recopila información sobre tu organización, analiza tus necesidades y adapta la plataforma a tu realidad.

**Características principales:**

- **Planes y Precios** - Comparación y selección de planes (Lite, Plus, Premium)
- **User Panel** - Gestión de suscripciones y facturación
- **Configuración de Perfil** - Personalización de cuenta y seguridad
- **Centro de Notificaciones** - Comunicaciones del sistema

#### 🏢 Waizant BackOffice

Sistema administrativo central para gestionar todas las operaciones internas. Funciona como el centro de control de la aplicación.

**Módulos administrativos:**

- **Dashboard** - Vista general y estadísticas del sistema
- **Store Users** - Gestión de clientes y leads
- **Notification Center** - Centro de comunicaciones
- **Plan Settings** - Configuración de planes y precios
- **User Support** - Sistema de soporte técnico
- **User System** - Gestión de usuarios administrativos
- **Quality Measures** - Supervisión de calidad de datos
- **Medical Specialty** - Gestión de especialidades médicas
- **Profile Settings** - Configuración personal de usuarios

### 🔧 Servicios Adicionales

- **Scheduling Service** - Gestión y optimización de agendas médicas
- **Reviewing Service** - Auditoría especializada de datos médicos
- **Soporte Técnico** - Asistencia especializada para usuarios
- **Integración EMR** - Conectividad con sistemas de historiales médicos

## 🚀 Tecnologías Utilizadas

- **Framework:** Docusaurus 3.8.1
- **Lenguaje:** TypeScript
- **Runtime:** Node.js 18+
- **Estilos:** CSS Modules + Custom CSS
- **Contenedorización:** Docker + Docker Compose
- **Deployment:** Netlify

## 📋 Requisitos Previos

- **Node.js** >= 18.0
- **npm** o **yarn**
- **Docker** (opcional, para desarrollo con contenedores)
- **Git**

## 🛠️ Instalación y Configuración

### Instalación Local

1. **Clonar el repositorio:**

```bash
git clone <repository-url>
cd my-website
```

2. **Instalar dependencias:**

```bash
npm install
```

3. **Iniciar el servidor de desarrollo:**

```bash
npm run start
# o
npm run dev
```

4. **Abrir en el navegador:**

```
http://localhost:3000
```

### Desarrollo con Docker

1. **Usando Docker Compose (recomendado):**

```bash
make start
# o
docker-compose up --build -d
```

2. **Usando Docker directamente:**

```bash
make time
# o
docker build -t my-website:latest .
docker run -p 3000:3000 my-website:latest
```

3. **Detener los contenedores:**

```bash
make down
# o
docker-compose down -v
```

## 📝 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run start` | Inicia el servidor de desarrollo |
| `npm run build` | Construye la aplicación para producción |
| `npm run serve` | Sirve la aplicación construida |
| `npm run clear` | Limpia la caché de Docusaurus |
| `npm run typecheck` | Ejecuta verificación de tipos TypeScript |
| `npm run deploy` | Despliega la aplicación |

### Scripts del Makefile

| Comando | Descripción |
|---------|-------------|
| `make start` | Inicia con Docker Compose |
| `make down` | Detiene contenedores |
| `make dev` | Desarrollo local |
| `make build` | Construye para producción |
| `make stop` | Detiene contenedores |

## 🏗️ Estructura de Directorios

```code
my-website/
├── docs/                          # Documentación principal
│   ├── waizant-store/            # Documentación del Store
│   │   ├── manual-usuario/       # Manuales de usuario
│   │   └── manual-tecnico/       # Manuales técnicos
│   └── waizant-backoffices/      # Documentación del BackOffice
│       ├── manual-usuario/       # Manuales de usuario
│       └── manual-tecnico/       # Manuales técnicos
├── src/                          # Código fuente
│   ├── components/               # Componentes React
│   ├── context/                  # Contextos de React
│   ├── css/                      # Estilos personalizados
│   ├── pages/                    # Páginas personalizadas
│   └── theme/                    # Temas personalizados
├── static/                       # Archivos estáticos
│   └── img/                      # Imágenes y assets
├── docusaurus.config.ts          # Configuración de Docusaurus
├── sidebars.ts                   # Configuración de sidebars
├── Dockerfile                    # Configuración de Docker
├── docker-compose.yml            # Configuración de Docker Compose
└── Makefile                      # Comandos automatizados
```

## 🎨 Personalización

### Configuración Principal

- **Archivo:** `docusaurus.config.ts`
- **URL de producción:** <https://documentacion-store.netlify.app/>
- **Tema:** Modo oscuro por defecto
- **Logo:** Wiedii branding

### Estilos Personalizados

- **Archivo:** `src/css/custom.css`
- **Tema:** Prism.js con temas GitHub (claro) y Dracula (oscuro)

### Sidebars

- **Archivo:** `sidebars.ts`
- **Configuración:** Auto-generado desde estructura de directorios

## 📚 Estructura de Documentación

### 👥 Manuales de Usuario

Documentación orientada a usuarios finales y administradores:

- **Waizant Store** - Guías paso a paso para configurar y usar la plataforma
- **Waizant BackOffice** - Manuales para administradores del sistema
- **Gestión de Planes** - Cómo seleccionar y gestionar suscripciones
- **Configuración de Perfil** - Personalización de cuentas y seguridad

### 🔧 Manuales Técnicos

Documentación técnica para desarrolladores y equipos de implementación:

- **Arquitectura del Sistema** - Especificaciones técnicas de Waizant™
- **APIs y Integraciones** - Documentación de endpoints y conectividad
- **Configuración de Servidores** - Guías de despliegue e infraestructura
- **Seguridad y Cumplimiento** - Implementación de estándares HIPAA

## 🔧 Desarrollo

### Agregar Nueva Documentación

1. **Crear archivo Markdown** en la estructura apropiada:

```bash
docs/waizant-store/manual-usuario/nuevo-modulo.md
```

2. **Configurar metadatos** en el archivo:

```markdown
---
sidebar_position: 1
---

# Título del Módulo
```

3. **La sidebar se actualiza automáticamente** basada en la estructura de directorios

### Personalizar Componentes

Los componentes personalizados están en `src/components/`:

- `AuthWrapper.tsx` - Wrapper de autenticación
- `Logout.tsx` - Componente de logout
- `HomepageFeatures/` - Características de la página principal

## 🚀 Despliegue

### Netlify (Actual)

- **URL:** <https://documentacion-store.netlify.app/>
- **Configuración:** Auto-deploy desde rama `main`

### Otros Proveedores

```bash
npm run build
# Los archivos están en build/
```

## 🤝 Contribución al Proyecto

### Para Equipos de Wiedii

1. **Crear** una rama para tu feature (`git checkout -b feature/nueva-documentacion`)
2. **Commit** tus cambios (`git commit -am 'Agregar documentación de nuevo módulo'`)
3. **Push** a la rama (`git push origin feature/nueva-documentacion`)
4. **Crear** un Pull Request para revisión

### Para Colaboradores Externos

1. **Fork** el proyecto
2. **Seguir** el mismo proceso de contribución
3. **Asegurar** que la documentación siga los estándares de Wiedii
4. **Incluir** ejemplos y capturas de pantalla cuando sea necesario

## 📄 Licencia y Propiedad

Este proyecto es propiedad de **Wiedii** y contiene documentación corporativa de nuestros productos y servicios. La documentación está destinada para uso interno, clientes y colaboradores autorizados.

## 📞 Contacto

- **Website:** <https://wiedii.co/>
- **Facebook:** <https://www.facebook.com/share/1CrFphJjQK/>
- **Instagram:** <https://www.instagram.com/wiedii.co/>
- **LinkedIn:** <https://www.linkedin.com/company/wiediius/>

## 🔍 Troubleshooting

### Problemas Comunes

1. **Error de dependencias:**

```bash
rm -rf node_modules package-lock.json
npm install
```

2. **Problemas con Docker:**

```bash
docker-compose down -v
docker system prune -f
make start
```

3. **Error de build:**

```bash
npm run clear
npm run build
```

### Logs y Debugging

- **Desarrollo local:** Los logs aparecen en la terminal
- **Docker:** `docker-compose logs -f docusaurus`
- **Build:** `npm run build` muestra errores detallados

---

## 🎯 Propósito de este Centro de Documentación

Este repositorio sirve como el **centro de conocimiento centralizado** de Wiedii, proporcionando:

- **Documentación completa** de todos nuestros productos y servicios
- **Guías técnicas** para desarrolladores e implementadores
- **Manuales de usuario** para clientes y administradores
- **Estándares de desarrollo** y mejores prácticas
- **Información corporativa** sobre nuestros procesos y metodologías

**Copyright © 2024 Wiedii. Todos los derechos reservados.**
**Built with Docusaurus for Wiedii Documentation Hub.**
