---
sidebar_position: 2
---

# Technical Assistance

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