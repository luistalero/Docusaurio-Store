---
sidebar_position: 7
---
# User System

**El módulo `Users System` permite la administración centralizada de los usuarios que interactúan con los diferentes ecosistemas de la plataforma. Desde este módulo, los administradores pueden crear, editar, activar o desactivar usuarios, asignar tipos de usuario y gestionar su estado operativo.**

**Los datos ingresados se registran en la tabla correspondiente de usuarios del sistema, la asignación de perfil (User Type) permite vincular al usuario con su respectivo perfil en usuariosPerfiles, los permisos para cada tipo de usuario se gestionan mediante las tablas usuariosPerfilesPermisos y webModulosPermisos, que definen qué módulos y funcionalidades son accesibles para cada perfil.**

![MFA-Disable](/img/backoffice-user/user-system-list.png)

## `Funcionamiento Técnico:`

***Este módulo mantiene conexión directa con la base de datos principal `(Core)` y adicionalmente con la base de datos `waizant_tickets`, utilizada para almacenar y consultar información relacionada con los perfiles de usuario vinculados a servicios de tickets y soporte.**

***Se conecta a las constantes y se conecta a todas las bases de datos de los ecosistemas.**

***Tiene conexión con cognito que dependiendo de como se cree lo renderiza, existe `(grupo-user-sistem)` y `(customer-service)`**

***Cada vez que se crea, edita, activa o desactiva un usuario, el módulo realiza un llamado a un microfrontend, el cual se mantiene a la escucha de estas operaciones.**

***Este modulo se comunica a su vez con el Microservice Queuing Waizant, que funciona como un servicio de colas encargado de distribuir la información actualizada hacia los distintos ecosistemas y microservicios conectados a la plataforma.**

***Gracias a este mecanismo de notificación asincrónica, cualquier cambio en los usuarios (como creación o cambio de estado activo/inactivo) se propaga de forma eficiente y en tiempo real a los ecosistemas que dependen de esa información.**

![MFA-Disable](/img/backoffice-user/modal-edit-user-system.png)

***Nota: Cuando el administrador selecciona la opción Edit desde el módulo Users System, se despliega una ventana modal que permite actualizar la información del usuario seleccionado, en la actualización de la contraseña se deben seguir una serie de condiciones.**

**Dentro de esta misma modal, se encuentra un botón llamado Permissions, que permite configurar los accesos del usuario dentro de la plataforma.**

**Al hacer clic en este botón, se abre una segunda pantalla dentro de la misma modal, donde el administrador puede habilitar o deshabilitar los módulos a los que el usuario tendrá acceso:**

**Cada módulo se presenta como un checkbox, permitiendo una asignación de permisos según los roles o necesidades.**

:::info
Más información aquí{' '}
[User System](/docs/waizant-backoffices/manual-usuario/user-system)
:::
