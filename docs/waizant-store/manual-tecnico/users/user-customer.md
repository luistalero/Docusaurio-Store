---
sidebar_position: 2
---

# User Customer

**Un 'Usuario Customer' es un usuario registrado cuya información se replica y gestiona en múltiples sistemas clave:**

+ **La base de datos de la Store.**
+ **La base de datos del Core.**
+ **El sistema waizant-tickets.**
+ **AWS Cognito.**

**Dentro de Cognito, un Usuario Customer se asigna al grupo waizant-admin-store y, adicionalmente, a un grupo específico del ecosistema al que pertenece, el cual es dinámicamente generado por Cognito. La principal diferencia con un Usuario Lead es que un Usuario Customer ha completado una o más transacciones de compra de planes.**
