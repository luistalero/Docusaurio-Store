---
sidebar_position: 3
---

# Registro Incompleto (No verificado)

![Incomplete Record](/img/store-usuario/login/register_incompleted.png )

**Esta vista es considerada un caso especial cuando se realiza el registro de un usuario\, pero durante el registro el proceso se detiene bruscamente y el usuario es registrado, pero no es verificado por cognito. Este usuario quedaría temporalmente en el aire.**

![Incomplete Record](/img/store-usuario/login/cognito_verify.png )

**Cuando este usuario no verificado inicia sesión, automáticamente el servicio de cognito enviará un código OTP al correo electrónico para poder verificar al usuario y así darle acceso a su cuenta.**
