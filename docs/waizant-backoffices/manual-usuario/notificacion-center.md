---
sidebar_position: 6
---

# Notificación Center

**El Notification Center es el módulo del BackOffice diseñado para la gestión centralizada de notificaciones dentro del sistema. Permite a los usuarios administrativos crear, editar, programar, enviar y eliminar mensajes dirigidos a usuarios del ecosistema, este módulo es crucial para mantener una comunicación fluida entre el sistema y los usuarios, ya sea para enviar mensajes informativos alertas, avisos de bienvenida, recordatorios, o mensajes grupales.**

---

![MFA-Disable](/img/backoffice-user/notifications_center_backoffice.png)

**¿Cómo acceder?**

**Desde el BackOffice, dirígete a la barra lateral izquierda y haz clic en la opción Notification Center. Al hacerlo, se desplegará la vista principal, donde podrás ver un listado de notificaciones existentes y un botón para crear nuevas notificaciones.**

**En esta vista se mostrará el listado de todas las notificaciones creadas mediante el botón “Create new notification”, ubicado en la parte superior. Al hacer clic en este botón, se abrirá una sección lateral derecha donde deberás completar el formulario para crear una nueva notificación.**

**Si haces clic en los botones “Edit” o “Reprogram”, se mostrará una sección con dos pestañas (tabs) Single User y Group of Users.**

- **Edit: al hacer clic en este botón, se abre el formulario de notificación (como el que se muestra en la imagen) con los campos previamente completados de la notificación seleccionada. Desde esta vista, el usuario puede modificar la información existente, como el título, tipo, contenido, fecha de publicación o destinatarios, y luego guardar los cambios o reenviar la notificación.**
- **Reprogram: al seleccionarlo, se abre el mismo formulario, pero enfocado principalmente en ajustar la fecha y hora de publicación de una notificación ya creada. Esta opción permite reagendar el envío sin necesidad de cambiar el contenido original.**
- **Single User: permite gestionar notificaciones dirigidas a un solo usuario.**
- **Group of Users: permite enviar notificaciones a un grupo de usuarios.**

![MFA-Disable](/img/backoffice-user/notification_center_create_edit_reprogram.png)

---

## Crear Nueva Notificación

**Para crear una nueva notificación, haz clic en el botón "Create new notification" ubicado en la parte superior. Aparecerá una sección lateral con un formulario dividido en dos pestañas, Single User y Group of Users.**

![MFA-Disable](/img/backoffice-user/create_notifications_backoffice.png)

***Single User:**

**En la tab de Single User se mostrara opciones para llenar campos los cuales son obligatorios.**

**`Notification title:`**
En esta opción se agregará el título de la notificación, su limite de es de 50 caracteres .

**`Notification type:`**
En esta opción se puede elegir que tipo de notificación se desea al darle clic se despliegan las opciones.

![MFA-Disable](/img/backoffice-user/options_type_notification.png)

**`Notification content:`**
En esta opción se agrega el contenido que se quiera mostrar en la notificación, su limite máximo es de 120 caracteres.

**`Schedule notification:`**
Este toogle sirve para seleccionar la fecha en la cual se quiere generar la notificación.

![MFA-Disable](/img/backoffice-user/option_date_notification.png)

**`Addresses:`**
Esta opción es un filtro se debe dal clic para que se muestre un filtro de búsqueda, donde se agregan los correos a quien se desee enviar, filtra con las primeras letras ahi se muestra unas opciones para elegir la que se requiera o si se desea enviar a varios correos también se puede realizar ya que tiene la opción de selección multiple.

![MFA-Disable](/img/backoffice-user/filter_adress_notification.png)

***`Nota:` Existen 3 botones (Cancel) (Save af draft) (send to)**

![MFA-Disable](/img/backoffice-user/cancel_notification_backoffice.png)


**`Cancel:`**
Si se da clic en este boton se cancela lo que se haya agregado para general la notificación, antes de cancelarla totalmente al darle clic se mostrara una alerta indicando si esta seguro de cancelarla.

**`Save af draft:`**
Este botón se guarda en borrador y se podrá visualizar en el listado que se encuentra iniciando el modulo.

**`Send to:`**
Al tener el formulario de la notificación lleno se le da clic a este botón para enviar el correo a quienes se seleccionaron anteriormente en (Addresses)

---

**Vista del listado de notificaciones:**

![MFA-Disable](/img/backoffice-user/list_notification_backoffice.png)
**a) En esta vista del listado contienen varios items, Notification title Type Creation Date Publication date Status Action**

***`Notification title:` En esta opción se mostrara el titulo de la notificación que se haya seleccionado.**

***`Type:` En esta opción se muestra el tipo de notificación que se agrego.**

***`Creation Date:` En esta opción se muestra la fecha que se cio la notificación.**

***`Publication date:` En esta opción se muestra la fecha en la que se asigno que llegara la notificación.**

***`Status:` Esta opción varia dependiendo del estado de la alerta cuando se envía estatus estará en draft, pero cuando ya le llega la notificación al usuario el status cambia a Published.**

***`Action:` En esta opción se visualizan don botones, Edit, Reprogam Delete**

![MFA-Disable](/img/backoffice-user/edit_notification_backoffice.png)

***`Nota:` Los botones de Edit, Reprogam se renderizan dependiendo el status en el que se encuentre la notificación, si la notificación en el status esta en draft el botón se mostrara Edit y al darle clic se puede editar cualquier actualización que se desee, cuando ya la notificación fue entregada el botón cambia su status si el status esta en published el botón cambia de ser Edit a ser Reprogam, el cual al darle clic se mostrara la opción de crear notificación pero con los datos de la notificación creada, al realizar esta acción no se modificara la notificación, esto hace que se cree otra notificación a partir de la que ya esta creada, el boton Delete al darle clic elimina la notificación.**

---

***Group of users**

**Su funcionamiento y llenado de campos es similar al del item anterior Single User el item que cambia es el de Groups of recipients en este campo se selecciona es por grupos se selecciona en la serie de opciones que se muestran.**

## Icono de notificaciones en la barra superior

![MFA-Disable](/img/backoffice-user/icon_notifications_backoffice.png)

**En la esquina superior derecha del BackOffice, junto al nombre del usuario y el botón de cerrar sesión, se encuentra un ícono de campana que actúa como acceso rápido al centro de notificaciones personal del usuario logueado.**

**El ícono muestra un número en color púrpura, e indica la cantidad de notificaciones no leídas.**

**Al hacer clic sobre la campana, se despliega una ventana lateral que muestra las notificaciones recibidas, separadas en dos pestañas:**

***`All:`**
 Muestra el historial completo de notificaciones.

![MFA-Disable](/img/backoffice-user/notification_center_all_backoffice.png)

***`Unread:`**
Muestra únicamente las notificaciones que no han sido leídas.

![MFA-Disable](/img/backoffice-user/notification_center_unread.png)