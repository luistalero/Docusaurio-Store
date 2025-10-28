---
sidebar_position: 1
---

# User Support

**El módulo User Support es el encargado de gestionar y verificar a los usuarios que realizan labores de soporte técnico dentro de los diferentes ecosistemas creados en Waizant.**

**Este módulo permite validar el estado de los usuarios que presentan inconvenientes tales como:**

- **Dificultades para iniciar sesión.**
- **Desconocimiento del funcionamiento del sistema.**
- **Fallos específicos en alguno de los módulos.**

**En estos casos, el usuario puede contactarse con el equipo de soporte de Waizant. A través de los módulos User Support y Technical Assistance, un administrador del sistema tiene la capacidad de administrar temporalmente la sesión de un cliente, siempre y cuando cuente con autorización previa del mismo.**

**Proceso de autenticación y seguridad**

**Waizant no puede acceder directamente a las credenciales de los clientes, ya que la autenticación cuenta con un proceso de verificación adicional.**

- **Se envía un código de verificación al correo personal del usuario registrado.**
- **Durante la asistencia se realiza una llamada, tanto el cliente como el administrador deben ingresar el código para autorizar el acceso.**
- **Solo después de este paso, el administrador puede acceder temporalmente al entorno del cliente para diagnosticar o resolver la incidencia.**

***`Nota:` Por seguridad, la sesión de asistencia tiene una duración máxima de 5 minutos. Una vez transcurrido este tiempo, el sistema cierra automáticamente la sesión para evitar accesos indebidos.**

**Para acceder a este módulo, es necesario iniciar sesión con las credenciales correctas. El módulo se encuentra disponible en la barra lateral izquierda del sistema.**

![MFA-Disable](/img/backoffice-user/user_pupports_backoffice.png)

**Accesos según el tipo de plan y rol**

**Los permisos de administración varían según el plan adquirido y el rol del usuario dentro del ecosistema:**

**Administrador con Plan Premium puede administrar los siguientes entornos:**

- **Store User**
- **Waizant Web**
- **Waizant App**
- **Waizant RCM**

**Usuario con Plan Premium "no administrador" puede administrar:**

- **Waizant Web**
- **Waizant App**
- **Waizant RCM**

**Usuario con Plan Plus "sin Waizant RCM y no administrador" puede administrar únicamente:**

- **Waizant Web**
- **Waizant App**
- **No tiene acceso a Store ni a Waizant RCM.**

**Proceso de verificación**

**Desde este módulo, el personal de soporte puede iniciar el proceso de verificación de un usuario tipo cliente:**

- **Ingresar el correo electrónico del usuario en el campo User Email.**
- **Hacer clic en el botón Start Verification Process.**
- **El sistema validará si el usuario existe en la base de datos de Waizant.**
- **Si se confirma su existencia, se mostrará la información asociada para continuar con el proceso de autenticación en el ecosistema correspondiente.**

---
