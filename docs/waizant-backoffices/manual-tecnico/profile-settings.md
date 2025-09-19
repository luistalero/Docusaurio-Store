---
sidebar_position: 9
---
# Profile Settings

**El módulo Profile Settings permite a cada usuario de la plataforma consultar y actualizar la información asociada a su perfil personal. Desde este módulo, el usuario puede modificar datos como su nombre, correo electrónico, número de teléfono, cargo, contraseña y cargar o actualizar su imagen de perfil.**

**Esta funcionalidad está diseñada para brindar autonomía a cada usuario sobre la gestión de su cuenta, garantizando que su información se mantenga actualizada y protegida. Además, el sistema ofrece la opción de configurar autenticación de múltiples factores (multi-factor) para reforzar la seguridad de acceso.**

![MFA-Disable](/img/backoffice-user/profile_settings.png)

***El módulo Profile Settings se conecta tanto con la base de datos de Store como con la de Core y con Cognito para mantener actualizada toda la información del usuario, cada una en su lugar correspondiente según su uso.**

***Es el servicio de gestión de usuarios y autenticación (AWS Cognito en este caso). Desde el módulo Profile Settings, cuando un usuario cambia su contraseña o su email, este cambio debe sincronizarse también en Cognito, ya que:**

- **Cognito controla el inicio de sesión, recuperación de contraseña y autenticación multifactor.**
- **Cambiar esos datos solo en la base de datos sin actualizarlos en Cognito generaría una inconsistencia en los accesos.**
- **Tiene conexión al core y a la base de datos de la store**

:::info
Más información aquí{' '}
<a href="/docs/waizant-backoffices/manual-usuario/login/multifactor-backoffice"className="info">Multi-factor</a>
:::
