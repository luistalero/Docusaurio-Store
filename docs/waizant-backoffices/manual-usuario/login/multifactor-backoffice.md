---
sidebar_position: 3
---

# Multifactor BackOffice

**La autenticación multifactor mejora la seguridad de los usuarios dentro del sistema BackOffice, garantizando que solo el titular de la cuenta pueda ingresar, incluso si su contraseña es comprometida.**

**¿Dónde se configura?**

**La opción de Multi-factor se encuentra dentro del módulo Profile Settings, en una pestaña específica que permite activar y gestionar la autenticación de doble factor.**

## **Acceso a la pestaña Multi-factor**

1. **Desde el menú lateral, el usuario debe ingresar al módulo Profile Settings.**
2. **Dentro de este módulo, seleccionar la pestaña Multi-factor.**
3. **En esta vista se muestra una explicación sobre la función de seguridad multifactor y el botón Continue para iniciar el proceso de activación.**

![MFA-Disable](/img/backoffice-user/view-settings-multifactor.png)

## **Proceso de activación**

1. **Al hacer clic en Continue, el sistema mostrará un código QR que debe escanearse con una aplicación autenticadora como Authy o Google Authenticator.**
2. **Una vez escaneado el código, la aplicación generará los códigos de verificación necesarios para acceder de forma segura al sistema.**
3. **Finalmente, se da clic nuevamente en Continue para completar la configuración.**

## **Escaneo del código QR**

**En esta etapa se muestra un código QR que debe ser escaneado con una aplicación de autenticación como Authy o Google Authenticator desde un dispositivo móvil. Si el usuario no cuenta con una de estas aplicaciones, el sistema sugiere instalarla desde la App Store o Google Play antes de continuar con el proceso.**

![MFA-Disable](/img/backoffice-user/authentification_Backoffice.png)

**Cuando se descarga la app en el celular se genera un código para tener acceso, ese código se digitaliza en la siguiente vista y luego se le da clic en el botón Save.**

![MFA-Disable](/img/backoffice-user/code_multifactor.png)

**Si el código es correcto, la autenticación multifactor quedará habilitada para la cuenta. A partir de ese momento, cada vez que el usuario inicie sesión, se le pedirá ingresar el código temporal generado por la aplicación de autenticación, además de su contraseña.**
