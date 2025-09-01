---
sidebar_position: 4
---
# Store Users

import AuthWrapper from '@site/src/components/AuthWrapper';

<AuthWrapper allowedRoles={["developer"]}>

**Este módulo está diseñado para gestionar y administrar de manera centralizada todos los usuarios asociados a los ecosistemas de la plataforma, permitiendo visualizar tanto a los clientes activos como a los leads o prospectos en proceso de registro, tiene un campo para descargar un listado mediante un archivo xls que esta por una librería de apexcharts.** [ApexCharts](https://apexcharts.com/)

***Los Customers tienen conexión a la base de datos de la store y son usuarios que han comprado un ecosistema, existe un toogle de Active, que tiene conexión a la base de datos de la store, a su vez se conecta a las constantes, también tiene una conexión a la base de datos de `waizant_tickets` , su función es activar o desactivar un usuario.**

***Los Leads tienen conexión a la base de datos de la store, y son usuarios que están registrados pero no han comprado.**

![MFA-Disable](/img/backoffice-user/customer_list_store_user_backoffice.png)

:::info
Más información aquí{' '}
<a href="docs/waizant-backoffices/manual-usuario/store-users"className="info">Store Users</a>
:::

</AuthWrapper>
