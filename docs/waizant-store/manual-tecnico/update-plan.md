---
sidebar_position: 6
---

# Update Plan

**Tras la configuración de un ecosistema, la pertenencia del usuario en AWS Cognito se extiende a dos grupos principales:**

+ **waizant-admin-store.**
+ **Grupo dinámicamente generado por Cognito, cuyo nombre se deriva del ecosistema creado o configurado por el usuario (ej., Legacy533-Qa).**

**Esta acción de creación de ecosistema implica la persistencia de datos en múltiples bases de datos:**

+ **La base de datos de la Store.**
+ **La base de datos del Core.** 
+ **Una base de datos específica derivada de waizant_tickets que adopta un formato waizant_tickets_###### con un identificador único.**

**Esto asegura la trazabilidad y la segregación de datos a nivel de ecosistema.**

## Comprar Encounters

**Esta interfaz proporciona al cliente la funcionalidad para incrementar la cantidad de 'encounters' asociados a su plan actual. La operación está directamente integrada con Stripe: al generarse una factura por 'encounters' adicionales, Stripe procede al cobro inmediato. Tras la confirmación de un pago exitoso por parte de Stripe, la información de la transacción se registra en la base de datos de la Store. Concomitantemente, se emite un mensaje a una cola SQS (Simple Queue Service) denominada subscription. Este mensaje es consumido por el Microservice Queuing, que, a su vez, procesa la información y se conecta a la base de datos del ecosistema para actualizar los registros y reflejar el incremento en los 'encounters' disponibles.**

## Comprar Licensias y Servicios

**Esta sección habilita al usuario la adquisición de licencias de usuario o servicios adicionales, en caso de no poseerlos previamente. La integración con Stripe gestiona el prorrateo de estas licencias. A diferencia de otras transacciones, Stripe no genera una factura individual por esta compra; en su lugar, el costo de las licencias o servicios adicionales se integra en la factura de suscripción principal del usuario, la cual se procesa recurrentemente el primer día de cada mes.**

## Cambiar de Plan

**Esta interfaz presenta la funcionalidad de 'Cambio de Plan'. Muestra al usuario su plan actual, una recomendación de plan basada en su uso y las opciones de planes disponibles para transición. Esta sección mantiene una conexión directa con el proyecto Waizant Backoffices, específicamente con el módulo 'Plan Settings'. Desde allí, se gestionan y actualizan todas las características y configuraciones de los planes, asegurando que la información presentada al usuario sea siempre la más reciente y precisa.**

### Plan Review

**En esta fase, se ha seleccionado un plan diferente al previamente activo. Stripe gestiona el proceso de prorrateo para reflejar con precisión los cargos al usuario. En el caso específico de una transición de un plan Premium a un plan Plus, Stripe calcula el valor residual no utilizado del plan Premium y lo aplica como crédito. Este crédito se utiliza primero para cubrir el costo del nuevo plan Plus. Cualquier excedente restante se convierte en un 'saldo a favor' para el usuario, el cual será visible y aplicable dentro de su ecosistema una vez completado el cambio de plan.**

### Cancelación de Servicios

**Previo a la activación de una nueva suscripción de plan, Stripe requiere que el usuario liquide cualquier cargo pendiente por servicios utilizados hasta la fecha de la transacción. Si esta transacción de pago por servicios es rechazada, la solicitud de cambio de plan será automáticamente denegada, asegurando la integridad financiera antes de la modificación de la suscripción.**

## Billing Panel

**Esta interfaz representa la vista principal del ecosistema del usuario tras un cambio exitoso de plan. Aquí se consolidan y muestran los registros de facturación. En la esquina superior derecha, se visualiza el saldo a favor del usuario. Este saldo puede ser aplicado a futuros cargos de suscripción de planes, dado que son pagos recurrentes. Sin embargo, es importante destacar que este saldo no es utilizable para pagos inmediatos, como la adquisición de 'encounters' adicionales.**
