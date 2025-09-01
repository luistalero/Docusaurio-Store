---
sidebar_position: 2
---

# Recuperación de Contraseña (Recovery)

**El proceso de recuperación de contraseña se gestiona de manera segura a través de AWS Cognito, el cual es responsable exclusivo del almacenamiento y validación de las credenciales de los usuarios. No se maneja ninguna base de datos propia para contraseñas, ya que este control lo administra directamente Cognito.**

***`El flujo de recuperación funciona de la siguiente forma:`**

![MFA-Disable](/img/backoffice-user/recovery_backoffice.png )

**`Solicitud de recuperación:`** El usuario inicia el proceso indicando su correo electrónico registrado en la aplicación.

**`Envío del código OTP:`** AWS Cognito envía un código de verificación (OTP) al correo electrónico previamente registrado por el usuario.

**`Validación del código:`** En el primer campo del formulario, el usuario debe ingresar el código OTP recibido en su correo.

**`Definición de nueva contraseña:`** En los siguientes dos campos se ingresan y confirman las nuevas credenciales de acceso.

**`Validación de condiciones de seguridad:`** La contraseña debe cumplir con los criterios de seguridad definidos (ejemplo: longitud mínima, uso de caracteres especiales, números y mayúsculas).

**`Actualización de credenciales:`** Una vez verificada la información, Cognito actualiza la contraseña de manera automática y segura.

***`Nota:` El sistema no almacena contraseñas en una base de datos propia. Toda la gestión de credenciales está bajo la administración de AWS Cognito, lo que garantiza el cumplimiento de estándares de seguridad y buenas prácticas en la protección de la información del usuario.**
