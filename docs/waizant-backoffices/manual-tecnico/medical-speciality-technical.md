---
sidebar_position: 7
---

# Medical Speciality

import AuthWrapper from '@site/src/components/AuthWrapper';

<AuthWrapper allowedRoles={["developer"]}>

**Este módulo permite gestionar y administrar las especialidades médicas dentro de un sistema o plataforma clínica o médica. Funciona como un catálogo o registro donde se almacenan las diferentes especialidades médicas disponibles en la plataforma, que pueden asociarse posteriormente a usuarios, profesionales de la salud, servicios, o planes.**

![MFA-Disable](/img/backoffice-user/medical_speciality_backoffice.png)

**Este módulo permite al usuario (probablemente un administrador del sistema) `crear, editar, activar/desactivar` y visualizar las especialidades médicas que estarán disponibles en el sistema para su uso en otras partes del software, como:**

***Asignar especialidades a médicos o usuarios.**

***Filtrar o categorizar servicios médicos.**

***Organizar contenido o funcionalidades específicas por especialidad.**

***`Nota:` Toda la información gestionada desde este módulo se almacena en la base de datos correspondiente a la plantilla `waizant_ticket`, asegurando que las especialidades médicas queden centralizadas y disponibles para su consulta o uso desde otros módulos del sistema, el campo de title cuando se crea este se renderiza en la store donde se muestra un selector donde están las opciones que se han creado, todo se comunica y guarda directamente a la plantilla de la base de datos `“waizant_ticket”`**

:::info
Más información aquí{' '}
<a href="/docs/waizant-backoffices/manual-usuario/medical-specialty"className="info">Medical Speciality</a>
:::

</AuthWrapper>
