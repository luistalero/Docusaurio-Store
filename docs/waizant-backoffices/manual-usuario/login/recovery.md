---
sidebar_position: 2
---

# Recovery BackOffice

**Cuando un usuario olvida su contraseña o necesita restablecerla, el sistema ofrece un proceso seguro y confiable mediante la integración con AWS Cognito, que gestiona toda la autenticación. A continuación, se detallan los pasos del proceso de recuperación:**
**Requisitos Previos**

***El usuario debe estar previamente registrado en el sistema BackOffice.**

***El correo del usuario debe estar asociado correctamente en AWS Cognito.**

***Se debe tener acceso al correo electrónico registrado, ya que allí llegará el código OTP (One-Time Password).**

![MFA-Disable](/img/backoffice-user/recovery_backoffice.png )
**Pasos del proceso de recuperación**

**a) Se digitaliza el correo existente:**
El usuario ingresa su dirección de correo electrónico registrada en el campo solicitado. Este correo será usado para enviar el código de verificación (OTP).

**b) Envío de código OTP:**
El sistema genera automáticamente un código temporal de 6 dígitos (OTP), el cual es enviado al correo electrónico proporcionado. Este código es válido por un tiempo limitado.

**c) Ingreso del código OTP:**
En el formulario de recuperación, el usuario debe ingresar el código recibido por correo en el campo designado: 
"Write your password reset code".

**d) Creación de nueva contraseña:**
En los siguientes campos (“New Password” y “Confirm New Password”), el usuario debe ingresar y confirmar su nueva contraseña.
Ambos campos deben coincidir para que el sistema permita continuar.

**e) Validación de condiciones de seguridad:**

**La contraseña debe cumplir con los siguientes requisitos mínimos de seguridad:** 
- Tener al menos 8 caracteres.
-  Incluir al menos una letra mayúscula.
- Incluir al menos una letra minúscula.
- Incluir al menos un número.
- Incluir al menos un carácter especial (por ejemplo: ! @ # $ % & *).

Si no se cumplen estas condiciones, el sistema no permitirá guardar la nueva contraseña.

**f) Consideraciones importantes:**

- No se almacena localmente: La contraseña no se guarda en ninguna base de datos interna del BackOffice. Todo el proceso de autenticación y cambio de contraseña es manejado exclusivamente por AWS Cognito.
- Seguridad reforzada: Esto garantiza que el sistema cumpla con los estándares más altos de seguridad y evita accesos no autorizados.
- Si no se recibe el código, se puede hacer clic en el enlace “Resend” para solicitar uno nuevo.