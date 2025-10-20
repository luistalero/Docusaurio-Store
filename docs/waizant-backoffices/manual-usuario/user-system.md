---
sidebar_position: 9
---

# User System

**El modulo de User System es el encargado en el BackOffice de gestionar los usuarios de soporte y que perteneceran al core de Waizant, a nivel de administración y soprte hacia las plataformas o a los ecosistemas creados, en este modulo se pueden crear usuarios de tipo Admin Reviwer System, Administrador System, Support System, Reviwer System, Developer y Customer Service, seran los usuarios que tendran acceso a todos los ecosistemas creados por los clientes finales para en determinada ocación hacer la opción de soporte, con roles especificos ej: el usuario tipo Developer pueden hacer todas las acciones que permita el ecosistema, el usuario tipo Reviwer pueden hacer acciones especificas dentro del ecosistema solamente, no tendra el acceso a todos los modulos del ecosistema**

**Desde este modulo se pueden controlar que usuarios estarian activos para realizar dichas funcionalidades ej: si una persona que hace soporte en Waizant renuncia o ya no hace parte de la empresa el administrador puede desactivar ese usuario y ya automaticamente perderia el acceso a todos los ecosistemas donde hacia la opción de soporte, tambien se le da acceso y permisos para ingresar dentro del BackOffice a los modulos que se considere necesario**

**Para acceder a este módulo, es necesario iniciar sesión con las credenciales correctas. El módulo se encuentra disponible en la barra lateral izquierda del sistema.**

---

![MFA-Disable](/img/backoffice-user/boton_create_user.png)

**Contiene un buscador `(Search)` el cual tiene como función realizar una búsqueda mas rápida del usuario que se necesite, también tiene un botón de créate user el cual al darle clic muestra una modal para crear un usuario.**

![MFA-Disable](/img/backoffice-user/list_users_system.png)

**En la vista principal del módulo se muestra una tabla con los campos First Name, Last Name, Email, User Type, Active y Actions, cada usuario cuenta con un toggle en la columna Active, que permite activar o desactivar su acceso a la plataforma y a los ecosistemas asociados.**

**En la columna Actions se encuentra el botón Edit, que permite modificar la información del usuario, incluyendo su tipo, permisos y estado.**

**Al darle clic en el toogle de Active si esta activa se desactiva esa especialidad y sin esta desactivada se activara, también se muestra un botón de Edit el cual al darle clic se muestra una modal con los campos llenos pero si se desea actualizar la información solo se remplaza y se le da clic en `Save`.**

![MFA-Disable](/img/backoffice-user/create_new_user_system.png)

**La modal contiene un formulario el cual se debe llenar completamente, sobre todo los campos con un `*` ya que son campos requeridos y al no llenarse no es posible avanzar con la creación del usuario, también hay una validación para las contraseñas, la cual tiene una serie de condiciones, al llenar los campos y cumplir con todo lo requerido se activa el botón de `Save`, y se da clic se guarda el usuario, este se vera reflejado en la lista inicial de cuando se ingresa al modulo.**

***`Nota:` al darle clic al botón de Edit se puede editar la información del usuario**

---

## Create User

**Esta ventana modal permite registrar nuevos usuarios en el sistema, asignando los datos básicos necesarios para su identificación, contacto, credenciales y tipo de rol dentro de la plataforma.**

![MFA-Disable](/img/backoffice-user/modal_create_user_backoffice.png)

- **`User Name:`Nombre del usuario (obligatorio).**
- **`User Last Name:`Apellido del usuario (obligatorio).**
- **`User Email:`Correo electrónico de contacto (obligatorio).**
- **`Phone Number:`Número de teléfono con prefijo internacional(obligatorio).**
- **`Position:`Cargo o puesto del usuario dentro de la organización.**

**Create Password / Repeat new password: Credenciales de acceso inicial, que deben cumplir con requisitos de seguridad (mínimo 8 caracteres, incluir caracteres especiales, y coincidir ambas contraseñas).**

***`User Type:`**

**Este campo determina el rol y las funcionalidades que tendrá cada usuario en el sistema. Los tipos de usuario disponibles se registran en las tablas:**
**usuariosPerfiles**
**usuariosPerfilesPermisos**

**Cada opción disponible en el User Type se asocia con un perfil definido en estas tablas, el cual a su vez cuenta con permisos específicos que controlan el acceso a los módulos y acciones del sistema, gestionados desde la tabla webModulosPermisos.**

**Tipos de usuario disponibles:**

- **`Admin Reviewer System:`Usuario con permisos administrativos y de revisión.**
- **`Admin Digitizer System:`Usuario con permisos administrativos y de digitalización.**
- **`Support System:`Usuario para tareas de soporte.**
- **`Reviewer System:`Usuario únicamente con funciones de revisión.**
- **`Digitizer System:`Usuario encargado de digitalización de información.**
- **`Developer:`Usuario con permisos de desarrollo y mantenimiento técnico.**

---

**Edit**

**Cuando el administrador selecciona la opción Edit desde el módulo Users System, se despliega una ventana modal que permite actualizar la información del usuario seleccionado, en la actualización de la contraseña se deben seguir una serie de condiciones.**

![MFA-Disable](/img/backoffice-user/edit_modal_user_system.png)

**Dentro de esta misma modal, se encuentra un botón llamado Permissions, que permite configurar los accesos del usuario dentro de la plataforma.**
**Al hacer clic en este botón, se abre una segunda pantalla dentro de la misma modal, donde el administrador puede habilitar o deshabilitar los módulos a los que el usuario tendrá acceso**

**Cada módulo se presenta como un checkbox, permitiendo una asignaciónde permisos según los roles o necesidades.**

![MFA-Disable](/img/backoffice-user/edit_modal_permissions_usersystem.png)

***`Nota:` Al seleccionar los módulos que se desea que el usuario del sistema tenga, haga clic en el botón `Save`**
