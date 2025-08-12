---
sidebar_position: 2
---

# Tarjetas de Ecosistemas

## Estados de los planes

**En esta sección vamos a observar y explicar cada uno de los estados que pueden presentar las tarjetas de los ecosistemas en diferentes circunstancias.**

![Estado Ecosystem](/img/store-usuario/Card-ecosystem-(6).png)

**El ecosistema aún no ha completado su proceso de configuración. El plan se encuentra inactivo y no se han activado licencias ni encuentros. El usuario debe acceder al panel de configuración y completar el proceso para comenzar a usar los servicios.**

![Estado Ecosystem](/img/store-usuario/Card-ecosystem-(8).png)

**El ecosistema está activo. Hay al menos una licencia de usuario habilitada y encuentros disponibles. No se requiere ninguna acción inmediata.**

![Estado Ecosystem](/img/store-usuario/Card-ecosystem-(7).png)

**El ecosistema está inactivo y requiere intervención. Puede deberse a una configuración incompleta o a problemas de facturación. Se recomienda contactar con el soporte para resolverlo.**

![Estado Ecosystem](/img/store-usuario/Card-ecosystem-(2).png)

**El sistema detecta pagos pendientes. Aunque no se ha suspendido el ecosistema completamente, se requiere que el usuario regularice la situación para evitar interrupciones.**

![Estado Ecosystem](/img/store-usuario/Card-ecosystem-(1).png)

**El sistema detecta un error en el método de pago. No se ha podido procesar el cobro del servicio, por lo tanto, el ecosistema no puede operar normalmente hasta resolver esta situación y se le indica al usuario actualizar el método de pago o reintentar el cobro.**

![Estado Ecosystem](/img/store-usuario/Card-ecosystem-(9).png)

**El sistema detecta cuando un usuario cancele la suscripción a su plan y automaticamente la tarjeta del ecosistema tomara este estilo para que el usuario tenga acceso unicamente a su billing panel.**

## Barra de Progreso de los Ecosistemas

![Progreso Ecosystem](/img/store-usuario/Card-ecosystem-(8).png)

**El ecosistema está activo. Hay al menos una licencia de usuario habilitada y encuentros disponibles. No se requiere ninguna acción inmediata.**

![Progreso Ecosystem](/img/store-usuario/Card-ecosystem-(4).png)

**El ecosistema está activo y se han consumido algunos encuentros, pero todavía hay un margen considerable disponible. No se requiere ninguna acción inmediata.**

![Progreso Ecosystem](/img/store-usuario/Card-ecosystem-(3).png)

**Se ha utilizado un alto porcentaje de los encuentros disponibles del plan. Aunque el ecosistema sigue activo, es recomendable considerar la compra de encuentros adicionales o actualizar el plan.**

![Progreso Ecosystem](/img/store-usuario/Card-ecosystem-(5).png)

**El ecosistema ha alcanzado o superado el límite de encuentros permitidos. Es necesario adquirir más encuentros o cambiar el plan para evitar interrupciones.**

## Upgrade Plan

## more encounters

![Upgrade Ecosystem](/img/store-usuario/upgrade-ecosystem-1.png)

**Al hacer clic en "Update plan", se desplega un menú mostrando las opciones, se selecciona "Add more encounters" para ampliar la cantidad de encounters disponibles para un ecosistema.**

![Upgrade Ecosystem](/img/store-usuario/more-encounters-1.png)

**Aquí el usuario podrá añadir más encuentros a un plan. Se indica el plan actual con los encounters que le pertenecen y la opción de agregar más encounters. Se resaltan los beneficios de pago inmediato, acceso de por vida y sin fecha de expiración, también podemos apreciar un input donde tenemos la opción de añadir un cupón para tener un descuento en nuestra compra, actualmente existen dos tipos de cupones en este caso se usa el cupón por descuento del 20% antes de confirmar la actualización.**

![Upgrade Ecosystem](/img/store-usuario/pay-encounter-1.png)

**Esta es la pasarela de pago de Stripe aquí es donde el usuario tendrá que digitar sus datos para realizar el pago de los encounters que desea añadir a su plan se puede ver que Stripe hace la validación del cupón cuando ya está aplicado y le indica al usuario el total de lo que debe pagar contando con su cupón de descuento.**

![Upgrade Ecosystem](/img/store-usuario/more-encounters-2.png)

**Aquí en este caso se usa el cupón que tiene un precio fijo de descuento, en este caso 100 dólares. Antes de confirmar la actualización, nos muestra el mensaje de que el código del cupón es válido.**

![Upgrade Ecosystem](/img/store-usuario/pay-encounter-2.png)

**En la pasarela de pago de Stripe se nos muestra el descuento que se está realizando y se le indica al usuario el total a pagar con el descuento.**

![Upgrade Ecosystem](/img/store-usuario/more-encounters-3.png)

**En esta vista se puede apreciar el error que se le mostrará al usuario cuando un cupón no sea válido. Para limpiar el input y poder volver a escribir, se debe presionar la "X" roja y así se puede volver a realizar la compra con un cupón válido o realizar la compra sin cupón.**

![Upgrade Ecosystem](/img/store-usuario/more-encounters-4.png)

**Pantalla de confirmación "Congrats" indicando que se ha realizado el pago de los encounters y el plan se ha actualizado exitosamente. Un botón "Continue" permite regresar al panel de usuario.**

## more services/licenses

![Upgrade Ecosystem](/img/store-usuario/upgrade-ecosystem-2.png)

**Al hacer clic en "Update plan", se despliega un menú mostrando las opciones, se selecciona "Add more licenses/services" para ampliar la cantidad de licencias disponibles para un ecosistema o adquirir los servicios si el usuario no los tiene.**

![Upgrade Ecosystem](/img/store-usuario/more-S-L-1.png)

**En esta sección podemos ver las opciones para seleccionar más licencias de usuario y obtener servicios. Aquí observamos cómo se seleccionan los dos servicios y se muestra un prorrateo donde se desglosa todo lo que el usuario está adquiriendo.**

![Upgrade Ecosystem](/img/store-usuario/more-S-L-2.png)

**Logramos ver que en esta se han seleccionado 5 licencias de usuario junto con los servicios y hay un cambio en el precio total del prorrateo.**

![Upgrade Ecosystem](/img/store-usuario/more-S-L-3.png)

**Aquí el usuario decide que no quiere realizar la compra de los servicios y solo quiere comprar licencias. Al momento del prorrateo, el total de la se ajusta a las licencias adquiridas.**

![Upgrade Ecosystem](/img/store-usuario/more-S-L-4.png)

**Aquí se muestra que si el usuario no adquiere ningún producto, el botón de "Upgrade plan" no se activará.**

## Change Plan

![Upgrade Ecosystem](/img/store-usuario/upgrade-ecosystem-3.png)

**Al hacer clic en "Update plan", se despliega un menú mostrando las opciones, se selecciona "Change Plan" para cambiar el plan que tiene actualmente el usuario, ya sea actualizando a un mejor plan o bajando a una versión con menor capacidad.**

![Upgrade Ecosystem](/img/store-usuario/change-plan-1.png)

**Aquí se le muestra al usuario los planes disponibles que ofrece la store, se le señala al usuario cuál es su plan actual y se le indica un plan sugerido para el usuario.**

![Upgrade Ecosystem](/img/store-usuario/change-plan-3.png)

**Al momento de que el usuario selecciona el plan al que se va a actualizar se muestra el prorrateo que se hace especificando todo lo nuevo y las cosas que cambia según la diferencias de los planes y se le da las opciones al usuario para que puedan adquirir más licencias de usuario y adquirir los servicios que se ofrecen.**
