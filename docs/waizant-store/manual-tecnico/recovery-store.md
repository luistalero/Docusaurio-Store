---
sidebar_position: 3
---

# Recovery Store

import AuthWrapper from '@site/src/components/AuthWrapper';

<AuthWrapper allowedRoles={["developer"]}>

**La funcionalidad de 'Recovery Password' de la Waizant Store permite a los usuarios restablecer sus credenciales. En esta sección, el usuario debe ingresar una dirección de correo electrónico previamente registrada en el sistema. Tras la validación de la existencia del correo, AWS Cognito iniciará el envío de un Código de Un Solo Uso (OTP) a la dirección proporcionada, el cual será requerido para el proceso de restablecimiento.**

## Reset Password

**Esta interfaz de 'Reset Password' se activa únicamente tras la validación de un correo electrónico registrado. El proceso requiere la inserción del código OTP (One-Time Password) remitido por AWS Cognito en el primer campo de entrada. Posteriormente, en los campos subsecuentes, el usuario debe definir una nueva contraseña que cumpla con los siguientes criterios de seguridad para ser considerada válida:**

+ Mínimo una letra mayúscula.
+ Mínimo una letra minúscula.
+ Mínimo un carácter numérico.
+ Longitud mínima de 10 caracteres.
+ Mínimo un carácter especial.

**Si estas condiciones no se satisfacen, la opción para guardar la contraseña permanecerá deshabilitada. Una vez que la nueva contraseña cumpla con todos los requisitos, se procederá a su almacenamiento directo en AWS Cognito. Es crucial destacar que, por motivos de seguridad, estas contraseñas no se persistirán en la base de datos de la aplicación, únicamente en Cognito.**

</AuthWrapper>
