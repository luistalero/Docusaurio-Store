---
sidebar_position: 6
---
# Plan Settings

**Este módulo permite gestionar y configurar los diferentes planes de suscripción que se ofrecen a los usuarios dentro de la plataforma. Desde esta sección, los administradores pueden:**

![MFA-Disable](/img/backoffice-user/plan_settings_backoffice.png)

- Definir y editar los nombres de los planes.
- Establecer precios mensuales y anuales para cada plan.
- Asignar las funcionalidades y características incluidas en cada plan.
- Controlar la versión activa del plan.
- Realizar ediciones rápidas a través del botón de acción.

**Este módulo facilita la administración centralizada de la oferta de servicios, permitiendo adaptar los planes a las necesidades del negocio o a nuevas funcionalidades disponibles para los usuarios.**

**Tiene conexión con la base de datos de la store `(store_db_dev)` a su vez tiene integraciones con la pasarela de pagos de `stripe`, si se crea una nueva versión al darle clic al botón de `Save rates`, automáticamente se actualiza en la pasarela de pagos de `(Stripe)` según sea el ambiente `(QA, Staging, Producción)` tiene que estar configurada las llaves publicas, `llave secreta` y el `webhook` del ambiente creado y asociado, el catalogo de productos de stripe y con la base de datos de la store en el `stripeId` se conecta a `waizant cronjobs` quien es el encargado del envio de mensaje cuando se detecta que el plan esta a punto de vencerse**

![MFA-Disable](/img/backoffice-user/plan_lite_backoffice.png)

***Dependiendo del plan en el que se encuentre se realiza los ajustes, si el plan ya esta publicado no se podrá editar las licencias**

![MFA-Disable](/img/backoffice-user/license-waizant-app-plan.png)

**Si la versión no esta ni activa ni publicada de deber seguir la serie de indicaciones para continuar con el proceso, en este paso si se desea eliminar la versión se podrá hacer puesto que existe un botón de `Delete versión` que solo se muestra cuando no esta la versión activa ni publicada.**

![MFA-Disable](/img/backoffice-user/license-waizant-app-plan.png)

![MFA-Disable](/img/backoffice-user/plan-notpublish.png)
