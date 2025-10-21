---
sidebar_position: 8
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

**Technical Assistance**

**El módulo Technical Assistance complementa la función de soporte técnico al permitir:**

- **Verificar el estado de un usuario en Waizant ingresando su correo electrónico.**

![MFA-Disable](/img/backoffice-user/users_pupports_backoffice.png)

**El usuario de soporte debe ingresar el correo electrónico del usuario que requiere asistencia en el campo User email y hacer clic en el botón “Start Verification Process”.**

![MFA-Disable](/img/backoffice-user/start_verification_backoffice.png)

**Al hacerlo, el sistema ejecuta una verificación interna de seguridad (Internal Validation) para confirmar que quien está realizando la solicitud sea un analista de soporte autorizado dentro de Waizant. El analista deberá pulsar el botón “Start Verification Process” para continuar con la validación de identidad. Esta capa adicional de seguridad evita accesos no autorizados a la información de los usuarios.**

**Proceso de Validación Interna (Internal Validation)**

**Una vez ingresado el correo electrónico del usuario en el campo User email, el sistema muestra una vista adicional llamada Internal Validation.**

**En esta vista, Waizant realiza una verificación de identidad del usuario de soporte que está gestionando el caso. Esto garantiza que solo personal autorizado pueda continuar con el proceso de autenticación del usuario final.**

**Para continuar, el analista debe hacer clic en el botón “Start Verification”. El sistema validará internamente sus credenciales antes de permitirle acceder a los datos del cliente o iniciar la sesión de asistencia. En caso de que el analista no desee continuar o haya ingresado información incorrecta, puede presionar “Cancel process” para detener la operación.**

![MFA-Disable](/img/backoffice-user/cancel_process.png)

**Previamente pide un `MFA` al de soporte\, este código llega al correo por medio de la conexión a una `lambda`**

![MFA-Disable](/img/backoffice-user/internal_verification_backoffice.png)

**Después de validar el código se visualiza una vista donde se indica que se enviara código a la persona que le esta brindando el soporte.**

![MFA-Disable](/img/backoffice-user/verification_code_backoffice.png)

**Existe un botón de Cancel Process este sirve para cancelar el proceso, pero muestra una modal donde hay un campo, allí se debe agregar el porque se esta cancelando, y luego se le da clic en ok.**

![MFA-Disable](/img/backoffice-user/cancel_process_backoffice.png)

***Usuario administrador**

**Dentro del proceso de asistencia técnica, una vez iniciada la sesión de soporte y validado el usuario, el sistema muestra los diferentes entornos o ecosistemas disponibles para brindar ayuda.**

**Se visualiza una vista donde muestra 3 botones, solo se muestran los tres botones si es un usuario administrador del ecosistema, si no es usuario administrador solo se muestran 2 botones.**

![MFA-Disable](/img/backoffice-user/support_technical_backoffice.png)

***`Nota:` si se elige dar clic en el botón de waizant store se envía a la store, Si se elige dar clic en el botón de Waizant Web se enviara a la vista de el home de la web**

***Usuario administrado**

![MFA-Disable](/img/backoffice-user/technical_user_administrate_backoffice.png)

**El boton de Waizant Web te dirije al modulo de My Ecosystem de la Web**

![MFA-Disable](/img/backoffice-user/see_plan_details_backoffice.png)

**Y si se escoge el botón de Waizant App se redirige a una vista donde se visualiza un código Qr donde se debe escanear desde un celular para hacer el ingreso mediante un dispositivo mobile**

![MFA-Disable](/img/backoffice-user/code_qr_app.png)

**Si el usuario posee un plan Premium y es administrador del ecosistema, podrá visualizar y acceder al cuarto botón Waizant RCM, desde el cual puede iniciar la asistencia técnica en ese entorno.**

**Si el usuario no tiene activado el módulo RCM o no es administrador, este botón no aparecerá en la interfaz, limitando el soporte únicamente a los demás entornos disponibles (Store, Web y App).**

**De esta forma, el sistema garantiza que solo los usuarios con permisos y módulos activos puedan recibir asistencia o realizar gestiones dentro de Waizant RCM, reforzando la seguridad y la segmentación por plan.**

![MFA-Disable](/img/backoffice-user/button_waizant_rcm.png)

**Si se elige dar clic en el botón de Waizant Rcm se enviara a la vista de  Waizant Rcm en la web, y automaticamente lo dejara logueado y dentro del modulo de RCM Dashboars**

![MFA-Disable](/img/backoffice-user/module_waizant_rcm.png)

## Ecosystem Admin

**Este modulo tiene conexión a la base de datos del `Core`, conexión con `lambdas AWS` para el proceso de envio de correos con el código `Qr` Previamente pide un `MFA` al de soporte por medio de conexión a una `lambda`, también este modulo se le dará soporte al usuario sucesor, quien ha recibido el ecosistema.**

![MFA-Disable](/img/backoffice-user/verification_process_backoffice.png)

![MFA-Disable](/img/backoffice-user/user_email_start_verification.png)
**Este código que se envia al usuario mediante el correo se debe agregar a la vista para verificación del código y así continuar con el proceso**

![MFA-Disable](/img/backoffice-user/verification_code_admin.png)

![MFA-Disable](/img/backoffice-user/internal_code_verification.png)
**Se debe seleccionar un ecosistema para continuar el proceso, se da clic al botón de Send verification Code este código se le enviara al correo de la persona que esta prestando el soporte**

![MFA-Disable](/img/backoffice-user/verification_succesfull_backoffice.png)

**Existe un botón de Cancel este sirve para cancelar el proceso, pero muestra una modal donde hay un campo, allí se debe agregar el porque se esta cancelando, y luego se le da clic en ok.**

![MFA-Disable](/img/backoffice-user/cancel_process_admin_backoffice.png)

***Paso a paso de actividades del sucesor**

**En esta vista se mostrara 3 campos `(User, Email, Select, Ecosystem, User, Role)` también se mostrara el un listado de procesos que lleve el usuario, defendiendo de donde quiera obtener información se mostrara una modal con el detallado, solo se le daría clic a see details.**

![MFA-Disable](/img/backoffice-user/user_activity_backoffice.png)

***`Nota:` Esta ayuda o soporte al no tener actividad tendrá un tiempo de 15 minutos, es decir si se solicita soporte y el usuario no vuelve a tener actividad no responde al llamado de soporte a los 15 minutos de inactividad por parte del usuario automáticamente pasado el tiempo se cerrara la sesión y perderá esa solicitud.**
**Modal del detallado del botón de see details si se le dio clic a The validation process for The Successor was rejected by Waizant**

![MFA-Disable](/img/backoffice-user/user_activity_backoffice.png)
