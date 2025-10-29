---
sidebar_position: 3
---

# Ecosystem Admin

**El módulo Ecosystem Admin permite realizar el seguimiento y verificación de usuarios sucesores dentro de los ecosistemas de Waizant, A través de este módulo, el administrador puede ingresar el correo electrónico del usuario para que el sistema valide su estado y determine si pertenece a un ecosistema activo.**

![MFA-Disable](/img/backoffice-user/verification_process_backoffice.png)

**Se debe ingresar el correo electrónico del sucesor que asumirá la administración del ecosistema. Una vez introducido el correo, el sistema inicia automáticamente el proceso de verificación, comprobando que el usuario exista y esté registrado dentro de la plataforma Waizant.**

![MFA-Disable](/img/backoffice-user/user_email_start_verification.png)

**Este código que se envia al usuario mediante el correo se debe agregar a la vista para verificación del código y así continuar con el proceso**

![MFA-Disable](/img/backoffice-user/internal_code_verification.png)

**Al darle clic en Validate code se mostrara una modal indicando que se enviara codigo al telefono para tener mayor seguridad, se da clic al botón de Send verification Code este código se le enviara al correo de la persona que esta prestando el soporte**

![MFA-Disable](/img/backoffice-user/images_succesor/verification_succesfull.png)

**A continuación se le da clic en Send Verification code se mostrara una modal de verificación, se debe agregar el codigo que le ha llegado al telefono**

![MFA-Disable](/img/backoffice-user/images_succesor/validate_code_phone.png)

**Si el codigo que se agrego no es el correcto se mostrara una alerta indicando que el codigo no es valido.**

![MFA-Disable](/img/backoffice-user/images_succesor/image_alert_code_invalid.png)

**\*Paso a paso de actividades del sucesor**

**En esta vista se muestran dos campos principales: User Email y User Role. Debajo de estos campos se presenta el apartado User Activity, donde se visualiza un historial de acciones realizadas por el usuario, incluyendo fechas y descripciones de cada evento. Al final de la vista, se incluyen los botones Cancel process y Finish process para gestionar el estado del proceso.**

![MFA-Disable](/img/backoffice-user/images_succesor/user_activity_backoffice.png)

**\*`Nota:` Esta ayuda o soporte al no tener actividad tendrá un tiempo de 15 minutos, es decir si se solicita soporte y el usuario no vuelve a tener actividad no responde al llamado de soporte a los 15 minutos de inactividad por parte del usuario automáticamente pasado el tiempo se cerrara la sesión y perderá esa solicitud.**
**Modal del detallado del botón de see details si se le dio clic a The validation process for The Successor was rejected by Waizant**

**Al darle clic a Finish Process se mostrara una modal donde se debe agregar el correo del usuario para que el sistema verifique su estado en Waizant**

![MFA-Disable](/img/backoffice-user/images_succesor/image_finish_process.png)

**Existe un botón de Cancel Process este sirve para cancelar el proceso, pero muestra una modal donde hay una serie de opciones y un campo para texto, allí se debe agregar el motivo por el cual se esta cancelando, y luego se le da clic en ok.**

![MFA-Disable](/img/backoffice-user/images_succesor/cancel_process_admin_backoffice.png)

:::info
Más información de los pasos del Successor{' '}
<a href="/docs/waizant-store/manual-usuario/plan-settings/ecosystem-details/ecosystem-successor"className="info">Aquí</a>
:::
