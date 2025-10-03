---
sidebar_position: 3
---

# Multifactor BackOffice

***`Multi-factor:` En esta opción se visualiza la vista de Multi-factor se le da clic al botón de Continue, se mostrara las opciones para su autenticación al escanear el código `Qr` lleva a la app para descargar Authy luego se le da clic al botón de Continue.**

**¿Dónde se configura?**

**Dentro del módulo Profile Settings, se encuentra una pestaña llamada `Multi-factor`, donde cada usuario puede activar y gestionar su autenticación de doble factor.**

## **Acceso a la pestaña Multi-factor**

***Desde el menú de Profile Settings, el usuario debe seleccionar la pestaña `“Multi-factor”`.**

***Al hacer clic en el botón Continue, se desplegará la opción para iniciar el proceso de activación.**

![MFA-Disable](/img/backoffice-user/view-settings-multifactor.png)

## **Escaneo del código QR**

**Aparece un código QR que debe ser escaneado con una aplicación de autenticación como Authy, Google Authenticator desde un dispositivo móvil. Si el usuario no tiene la app, se le sugiere instalarla desde su tienda de aplicaciones `(App Store o Google Authentication)`.**

![MFA-Disable](/img/backoffice-user/authentification_Backoffice.png )

**Cuando se descarga la app en el celular se genera un código para tener acceso, ese código se digitalizados en la siguiente vista y luego se le da clic en el botón Save.**

![MFA-Disable](/img/backoffice-user/code_multifactor.png )

**Si el código es correcto, la autenticación multifactor quedará habilitada para la cuenta. A partir de ese momento, cada vez que el usuario inicie sesión, se le pedirá ingresar el código temporal generado por la aplicación de autenticación, además de su contraseña.**
