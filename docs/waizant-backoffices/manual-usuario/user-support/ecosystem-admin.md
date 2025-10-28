---
sidebar_position: 3
---

# Ecosystem Admin

**El módulo Ecosystem Admin permite realizar el seguimiento y verificación de usuarios sucesores dentro de los ecosistemas de Waizant, A través de este módulo, el administrador puede ingresar el correo electrónico del usuario para que el sistema valide su estado y determine si pertenece a un ecosistema activo.**

![MFA-Disable](/img/backoffice-user/verification_process_backoffice.png)

**Se debe ingresar el correo electrónico del sucesor que asumirá la administración del ecosistema. Una vez introducido el correo, el sistema inicia automáticamente el proceso de verificación, comprobando que el usuario exista y esté registrado dentro de la plataforma Waizant.**

![MFA-Disable](/img/backoffice-user/user_email_start_verification.png)
**Este código que se envia al usuario mediante el correo se debe agregar a la vista para verificación del código y así continuar con el proceso**

![MFA-Disable](/img/backoffice-user/verification_code_admin.png)

![MFA-Disable](/img/backoffice-user/internal_code_verification.png)
**Se debe seleccionar un ecosistema para continuar el proceso, se da clic al botón de Send verification Code este código se le enviara al correo de la persona que esta prestando el soporte**

![MFA-Disable](/img/backoffice-user/verification_succesfull_backoffice.png)

**Existe un botón de Cancel este sirve para cancelar el proceso, pero muestra una modal donde hay un campo, allí se debe agregar el motivo por el cual se esta cancelando, y luego se le da clic en ok.**

![MFA-Disable](/img/backoffice-user/cancel_process_admin_backoffice.png)

**\*Paso a paso de actividades del sucesor**

**En esta vista se mostrara 3 campos User, Email, Select, Ecosystem, User, Role también se mostrara el un listado de procesos que lleve el usuario, defendiendo de donde quiera obtener información se mostrara una modal con el detallado, solo se le daría clic a see details.**

![MFA-Disable](/img/backoffice-user/user_activity_backoffice.png)

**\*`Nota:` Esta ayuda o soporte al no tener actividad tendrá un tiempo de 15 minutos, es decir si se solicita soporte y el usuario no vuelve a tener actividad no responde al llamado de soporte a los 15 minutos de inactividad por parte del usuario automáticamente pasado el tiempo se cerrara la sesión y perderá esa solicitud.**
**Modal del detallado del botón de see details si se le dio clic a The validation process for The Successor was rejected by Waizant**

![MFA-Disable](/img/backoffice-user/user_activity_backoffice.png)
