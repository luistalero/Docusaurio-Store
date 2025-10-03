---
sidebar_position: 1
---

# Login BackOffice

**Para ingresar al Backoffice se debe ingresar al siguiente link** [Login](https://backoffice.waizant.com/auth/login)

***`Nota:` Para poder loguearse se deben cumplir con una serie de condiciones, al cumplir con las condiciones si es posible ingresar al proyecto.**

**`a)` El usuario debe tener permiso por lo menos a un modulo del BackOffice para poder ingresar.**

**`b)` el usuario debe estar creado previamente por otro administrador y a su vez internamente este queda asociado al servicio de `AWS cognito`, queda en los grupos `user-system` o `customer-service`,on la bandera de user-system en 1 y posteriormente es replicado en la base de datos de waizant-tickets en la "Plantilla" ya con estas condiciones el usuario ya puede ingresar a lo que es el proyecto del BackOffice.**

![MFA-Disable](/img/backoffice-user/login_backoffice.png )

**Se debe loguear con las credenciales correctas, `email` y `password` al ingresar quedara situado el modulo de Dashboard.**

![MFA-Disable](/img/backoffice-user/dashboard_backoffice_file.png )