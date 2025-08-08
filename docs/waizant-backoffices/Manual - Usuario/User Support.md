---
sidebar_position: 8
---

# User Support

**Este modulo tiene conexionarme a la base de datos de Core, tiene conexión a lambdas AWS para el proceso de Autenticación con AWS cognito**

**a) Technical Assistance**

**Permite verificar el estado de un usuario en Waizant ingresando su correo electrónico. Una vez validado, se selecciona el ecosistema para iniciar el proceso de autenticación y brindar soporte técnico personalizado.**

![MFA-Disable](/img/backoffice-user/user_pupport_backoffice.png)

**Luego de dar clic en el botón de Start Verification Process se visualiza un selector, donde se podía elegir el ecosistema que se desee**

![MFA-Disable](/img/backoffice-user/start_verification_backoffice.png)

**Previamente pide un MFA al de soporte, este código llega al correo por medio de la conexión a una lambda**

![MFA-Disable](/img/backoffice-user/internal_verification_backoffice.png)

**Después de validar el código se visualiza una vista donde se indica que se enviara código a la persona que le esta brindando el soporte.**

![MFA-Disable](/img/backoffice-user/verification_code_backoffice.png)

**Existe un botón de Cancel este sirve para cancelar el proceso, pero muestra una modal donde hay un campo, allí se debe agregar el porque se esta cancelando, y luego se le da clic en ok.**

![MFA-Disable](/img/backoffice-user/cancel_process_backoffice.png)

***Usuario administrador**

**Se visualiza una vista donde muestra 3 botones, solo se muestran los tres botones si es un usuario administrador del ecosistema, si no es usuario administrador solo se muestran 2 botones.**

![MFA-Disable](/img/backoffice-user/support_technical_backoffice.png)

***Usuario administrado**

![MFA-Disable](/img/backoffice-user/technical_user_administrate_backoffice.png)

***Nota, si se elige dar clic en el botón de waizant store se envía a la store, Si se elige dar clic en el botón de Waizant Web se enviara a la vista de el home de la web**

![MFA-Disable](/img/backoffice-user/see_plan_details_backoffice.png)

