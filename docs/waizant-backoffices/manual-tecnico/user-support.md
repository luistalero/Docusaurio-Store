---
sidebar_position: 7
---
# User Support

**Este modulo se encarga de brindar asistencia de soporte a los usuarios y al usuario sucesor, cuando tengan dudas o algún tipo de falla los usuarios podrán obtener ayuda para solucionar los requerimientos, cuenta con dos submodulos los cuales se encargan de brindar ayuda mas especifica en el rol que se requiera.**

## Technical Assistance

**Este submodulo cuenta con una conexión a la base de datos del Core, tiene conexión con Lambdas AWS para el proceso de autenticación, con AWS Cognito, y el envio de mensaje con el código OTP.**

- Previamente pide MFA al de soporte por medio de conexión a lambda.
- Codigo que se envia a la persona que le esta prestando el soporte.
- Si el usuario es el administrador del ecosistema le saldrán 3 botones (store, we, app) estos botones al dar clic a cualquiera tienen la acción de llevar al usuario si se le da clic a la web se redirige a la sesión de la web logueada con el usuario.

![MFA-Disable](/img/backoffice-user/support_technical_backoffice.png)

***Nota: Si no es un usuario dueño de un ecosistema solo se mostraran 2 botones**

![MFA-Disable](/img/backoffice-user/support_technical_backoffices.png)

***El botón que redirige a la web lleva al Home de la web del usuario que se le esta brindando soporte y también queda logueado**
![MFA-Disable](/img/backoffice-user/ecosystem_plans.png)

***El botón de la app lo dirige a una vista con un código Qr donde se debe escanear con un dispositivo mobiliario para que permita su acceso**

![MFA-Disable](/img/backoffice-user/code-qr-app.png)

## Ecosystem Admin

**Este submodulo tiene conexión con la base de datos del Core, tiene conexión con lambdas AWS para el envio de mensajes con el código Qr Previamente pide un MFA al de soporte por medio de la conexión a una lambda, se envía código a la persona que se le esta brindando el soporte, se mostrara el listado de una serie de pasos en el que el usuario sucesor tiene ayuda, con unas opciones de see details que al dar clic se mostrara la información mas detallada.**
![MFA-Disable](/img/backoffice-user/modal-verification-user-support.png)

## Código MFA Usuario

![MFA-Disable](/img/backoffice-user/code-user-support-verification.png)

## Código persona de soporte

![MFA-Disable](/img/backoffice-user/verification-code-person-support.png)

***Paso a paso de actividades del sucesor**

![MFA-Disable](/img/backoffice-user/activity-succesor-.png)

**Nota: Esta ayuda o soporte al no tener actividad tendrá un tiempo de 15 minutos, es decir si se solicita soporte y el usuario no vuelve a tener actividad no responde al llamado de soporte a los 15 minutos de inactividad por parte del usuario automáticamente pasado el tiempo se cerrara la sesión y perderá esa solicitud.**

**La modal del detallado del botón de see details si se le dio clic a The validation process for The Successor was rejected by Waizant.**

![MFA-Disable](/img/backoffice-user/validation-process-succesor.png)
