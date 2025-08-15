---
sidebar_position: 8
---

# User Support

**Este modulo tiene conexión a la base de datos de `Core`, tiene conexión a `lambdas AWS` para el proceso de Autenticación con `AWS cognito`**

**a\) Technical Assistance**

**Permite verificar el estado de un usuario en Waizant ingresando su correo electrónico. Una vez validado, se selecciona el ecosistema para iniciar el proceso de autenticación y brindar soporte técnico personalizado.**

![MFA-Disable](/img/backoffice-user/user_pupport_backoffice.png)

**Luego de dar clic en el botón de Start Verification Process se visualiza un selector\, donde se podía elegir el ecosistema que se desee**

![MFA-Disable](/img/backoffice-user/start_verification_backoffice.png)

**Previamente pide un `MFA` al de soporte\, este código llega al correo por medio de la conexión a una `lambda`**

![MFA-Disable](/img/backoffice-user/internal_verification_backoffice.png)

**Después de validar el código se visualiza una vista donde se indica que se enviara código a la persona que le esta brindando el soporte.**

![MFA-Disable](/img/backoffice-user/verification_code_backoffice.png)

**Existe un botón de Cancel este sirve para cancelar el proceso, pero muestra una modal donde hay un campo, allí se debe agregar el porque se esta cancelando, y luego se le da clic en ok.**

![MFA-Disable](/img/backoffice-user/cancel_process_backoffice.png)

***Usuario administrador**

**Se visualiza una vista donde muestra 3 botones, solo se muestran los tres botones si es un usuario administrador del ecosistema, si no es usuario administrador solo se muestran 2 botones.**

![MFA-Disable](/img/backoffice-user/support_technical_backoffice.png)

***`Nota:` si se elige dar clic en el botón de waizant store se envía a la store, Si se elige dar clic en el botón de Waizant Web se enviara a la vista de el home de la web**

***Usuario administrado**

![MFA-Disable](/img/backoffice-user/technical_user_administrate_backoffice.png)

**El boton de Waizant Web te dirije al modulo de My Ecosystem de la Web**
![MFA-Disable](/img/backoffice-user/see_plan_details_backoffice.png)
**Y si se escoge el botón de Waizant App se redirige a una vista donde se visualiza un código Qr donde se debe escanear desde un celular para hacer el ingreso mediante un dispositivo mobile**

![MFA-Disable](/img/backoffice-user/code_qr_app.png)

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
