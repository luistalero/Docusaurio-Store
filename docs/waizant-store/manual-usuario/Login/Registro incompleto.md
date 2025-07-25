---
sidebar_position: 3
---

# Registro Incompleto (No verificado)

![Incomplete Record](/img/store-usuario/incomplete-1.png )

**Esta vista es considerada un caso especial cuando se realiza el registro de un usuario\, pero durante el registro el proceso se detiene bruscamente y el usuario es registrado pero no es verificado por cognito este usuario quedaria temporalmente en el aire.**

![Incomplete Record](/img/store-usuario/incomplete-2.png )

**Cuando este usuario no verificado inicia sesión automaticamente el servico de cognito enviara un codigo OTP al correo electrónico para poder verificar al usuario y asi darle acceso a su cuenta.**
