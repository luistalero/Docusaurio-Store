---
sidebar_position: 1
---

# Login BackOffice

import AuthWrapper from '@site/src/components/AuthWrapper';

<AuthWrapper allowedRoles={["developer"]}>

## Para loguearse al backOﬃce previamente ya debe estar registrado por un usuario administrador o un super admin (spa)

***`Nota:` Para poder loguearse se deben cumplir con una serie de condiciones, al cumplir con las condiciones si es posible ingresar al proyecto.**

- `a)` Si el usuario registrado no tiene permisos asignados para el backoﬃce no podrá ingresar.

- `b)`El usuario creado debe existir en el AWS cognito, en la base de datos del core y en la base de datos de waizant_tickets y que en cognito pertenezca al grupo de user-system o customer-service

![MFA-Disable](/img/backoffice-user/login_backoffice.png )
:::info
Más información aquí{' '}
[Login](/docs/waizant-backoffices/manual-usuario/login/login-backoffice)
:::

</AuthWrapper>
