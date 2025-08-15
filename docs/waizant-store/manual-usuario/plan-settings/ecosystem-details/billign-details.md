---
sidebar_position: 2
---

# Detalles de Facturas

![Billing Details](/img/store-usuario/plan-settings/ecosystem-details/billing_panel.png)

**Esta es la vista principal del "Billing panel" donde podemos ver información detalla del ecosistema con su nombre, total de licencias de usuarios, encounters, servicios adquiridos, montos a favor, el tipo del plan, fecha del próximo pago, el total de pago de la última factura y un botón nombrado "Plan management", debajo de la información del plan se encuentra la sección de "Invoices" donde tendremos las facturas de todas las compras que se han realizado en este ecosistema, para cada factura tenemos las opciones "View" que nos permite ver la factura detallada que se realizó y "Download" que nos permite descargar dicha factura.**

## Plan Management

![Billing Details](/img/store-usuario/plan-settings/ecosystem-details/plan_management_modal.png)

**Cuando seleccionamos el botón "Plan management", se nos muestra esta vista donde podemos observar información de nuestra tarjeta con la que realizamos los pagos del plan y las compras que se realicen. También se nos muestra un botón que nos permite realizar un cambio a nuestro método de pago.**

## Change Payment Method

![Billing Details](/img/store-usuario/plan-settings/ecosystem-details/change_pay_method_mfa_disable.png)

**Cuando el usuario selecciona el cambio de método de pago y este mismo tiene el MFA desactivado, se le indicará con esta modal, indicando que tiene que activarlo para poder realizar esta acción, para más información sobre la activación de [Activar MFA](/docs/waizant-store/manual-usuario/profile-settings/activate-mfa) .**

![Billing Details](/img/store-usuario/plan-settings/ecosystem-details/change_pay_method_code_mfa.png)

**Cuando el usuario ya active, el MFA tendrá que ir a su aplicación de autentificación en donde configuró la generación del código y tendrá que proporcionarlo para verificar al usuario y tener acceso a cambiar su método de pago.**

![Billing Details](/img/store-usuario/plan-settings/ecosystem-details/pay_method_info.png)

**Aquí el usuario tiene que digitar la información de su nueva tarjeta con la que realizará los pagos y también tendrá acceso a cambiar la información de su residencia por medio del código postal.**

![Billing Details](/img/store-usuario/plan-settings/ecosystem-details/pay_method_chage_completed.png)

**Cuando el usuario realice el guardado de la información y la tarjeta sea validada por el servicio, Stripe se redirigirá a la vista de "Plan management" y le saldrá la notificación de que sus datos fueron actualizados correctamente.**

![Billing Details](/img/store-usuario/plan-settings/ecosystem-details/pay_method_chage_error.png)

**Si el servicio de Stripe al verificar la tarjeta decide que esta no es válida, ya sea por fondos insuficientes, tarjeta reportada como extraviada, como robada, como vencida, etc. Se redirige a la vista de "Plan management" y le saldrá la notificación indicándole al usuario que ha ocurrido un error.**

## Cancelación de suscripción

![Plan Management](/img/store-usuario/plan-settings/ecosystem-details/manage_subcription.png)

**Dentro de la modal de "Plan management" tenemos también el botón de "Manage Subscription", el cual nos lleva al proceso de cancelación de nuestro plan actual.**

![Plan Management](/img/store-usuario/plan-settings/ecosystem-details/manage_subcription_start_process.png)

**Aquí se le muestra al usuario un mensaje de advertencia donde se le está indicando que está a punto de cancelar su suscripción y que esto conlleva perder todos los beneficios asociados a la suscripción y se le da las opciones de cerrar la vista para cancelar el proceso o iniciar el proceso.**

![Plan Management](/img/store-usuario/plan-settings/ecosystem-details/manage_subcription_form.png)

**Al iniciar el proceso lo primero que el usuario va a observar es la modal de mejora, aquí se le indica al usuario que se tome un tiempo en llenar un formulario donde se le realizan preguntas para mejorar nuestro servicio y una sección para añadir un comentario en el que exprese y así poder conocer la opinión del usuario y la razón del porqué cancela su suscripción.**

![Plan Management](/img/store-usuario/plan-settings/ecosystem-details/manage_subcription_completed_process.png)

**Aquí se le muestra al usuario un mensaje donde se le notifica que los servicios de su ecosistema seguirán funcionando hasta la fecha indicada y que puede hacer uso de los productos Waizant™ web y Waizant™ App hasta esa fecha.**

![Plan Management](/img/store-usuario/plan-settings/ecosystem-details/manage_subcription_confirm_modal.png)

**Si ya en la última vista el usuario presiona la "X" que cierra la modal antes de aceptar la cancelación de su suscripción, se le mostrará esta advertencia donde se le pregunta que si está seguro de salir del proceso de cancelación y mantener su suscripción.**

![Plan Management](/img/store-usuario/plan-settings/ecosystem-details/manage_subcription_pay_services_failed.png)

****

![Plan Management](/img/store-usuario/plan-settings/ecosystem-details/manage_subcription_pay_services.png)

**Si ya en la última vista el usuario presiona "Complete process", se le mostrará esta advertencia donde se le pregunta al usuario si está seguro de completar el proceso de cancelación.**

![Plan Management](/img/store-usuario/plan-settings/ecosystem-details/manage_subcription_cancelled.png)

**Si el usuario confirma la cancelación de su suscripción, será enviado a la vista de los ecosistemas y verá una notificación donde se le indica que si su suscripción se canceló correctamente. Aquí el usuario podrá ver la tarjeta de este ecosistema, pero ya no podrá interactuar con el mismo.**
