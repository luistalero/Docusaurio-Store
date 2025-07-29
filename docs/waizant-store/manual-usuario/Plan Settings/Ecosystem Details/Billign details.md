---
sidebar_position: 2
---

# Detalles de Facturas

![Billing Details](/img/store-usuario/Billing-details-1.png)

**Esta es la vista principal del "Billing panel" donde podemos ver información detalla del ecosistema com su nombre, total de licencias de usuarios, encounters, servicios adquiridos, montos a favor, el tipo del plan, fecha del proximo pago, el total de pago de la utlima factura y un boton nombrado "Plan management", debajo de la infomación del plan se encuentra la sección de "Invoices" donde tendremos las facturas de todas las compras que se han realizado en este ecosistema, para cada factura tenemos las opciones "View" que nos permite ver la factura detallada que se realizo y "Download" que nos permite descargar dicha factura.**

## Plan Management

![Billing Details](/img/store-usuario/paymenth-method-1.png)

**Cuando seleccionamos el botón "Plan management" se nos muestra esta vista donde podemos observar información de nuestra tarjeta con la que realizamos los pagos del plan y las compras que se realicen, también se nos muestra un botón que nos permite realizar un cambio a nuestro metódo de pago.**

## Change Payment Method

![Billing Details](/img/store-usuario/paymenth-method-2.png)

**Cuando el usuario selecciona el cambio de metodo de pago y este mismo tiene el MFA desactivado se le indicara con esta modal, indicando que tiene que activarlo para poder realizar esta acción.**

![Billing Details](/img/store-usuario/paymenth-method-4.png)

**Cuando el usuario ya active el MFA tendra que ir a su aplicación de autentificación en donde configuro la generación del código y tendra que proporcionarlo para verificar al usuario y tener acceso a cambiar su metodo de pago.**

![Billing Details](/img/store-usuario/paymenth-method-3.png)

**Aquí el usuario tiene que digitar la información de su nueva tarjeta con la que realizara los pagos y tambien tendra acceso a cambiar la información de su residencia por medio del codigo postal.**

![Billing Details](/img/store-usuario/paymenth-method-5.png)

**Cuando el usuario realice el guardado de la infomación y la tarjeta sea validada por el servicio Stripe se redigira a la vista de "Plan management" y le saldra la notificación de que sus datos fueron actualizados correctamente.**

![Billing Details](/img/store-usuario/paymenth-method-6.png)

**Si el servicio de Stripe al verificar la tarjeta decide que esta no es valida ya sea por fondos insuficuentes, tarjeta reportada como extraviada, como robada, como vencida, etc. Se redigira a la vista de "Plan management" y le saldra la notificación indicandole al usuario que ha ocurrido un error.**

## Cancelación de suscripción

![Plan Management](/img/store-usuario/plan-management-1.png)

**Dentro de la modal de "Plan management" tenemos tambien el botón de "Manage Subscription" el cual nos lleva a el proceso de cancelación de nuestro plan actual.**

![Plan Management](/img/store-usuario/plan-management-2.png)

**Aquí se le muestra al usuario un mensaje de advertencia donde se le esta indicando que esta a punto de cancelar su suscrcripción y que esto conlleva a perder todos los beneficios asociados a la suscripción y se le da la opciones de cerrar la vista para cancelar el proceso o iniciar el proceso.**

![Plan Management](/img/store-usuario/plan-management-3.png)

**Al iniciar el proceso lo primero que el usuario va a observar es la modal de mejora, aqui se le indica al usuario que se tome un tiempo en llenar un formulario donde se le realizan preguntas para mejorar nuestro servicio y una sección para añadir un comentario en el que exprese y asi poder conocer la opinión del usuario y la razón del porque cancela su suscripción.**

![Plan Management](/img/store-usuario/plan-management-4.png)

**Aquí se le muestra al usuario una mensaje donde se le notifica que los servicios de su ecosistema seguiran funcionando hasta la fecha indicada y que puede hacer uso de los productos Waizant web y Waizant App hasta esa fecha.**

![Plan Management](/img/store-usuario/plan-management-5.png)

**Si ya en la utlima vista el usuario presiona la "X" que cierra la modal antes de aceptar la cancelación de su sucripcion se le mostrara esta advertencia donde se le pregunta que si esta seguro de salir del proceso de cancelación y mantener su suscripción.**

![Plan Management](/img/store-usuario/plan-management-6.png)

**Si ya en la utlima vista el usuario presiona "Complete process" se le mostrara esta advertencia donde se le pregunta al usuario si eat seguro de completar el proceso de cancelación.**

![Plan Management](/img/store-usuario/plan-management-7.png)

**Si el usuario confirma la cancelación de su suscripción sera enviado a la vista de los ecosistemas y vera una notificación donde se le indica que si suscripción se canceló correctamente, aqui el usuario prodra ver la tarjeta de este ecosistema pero ya no podra interactura con el mismo.**
