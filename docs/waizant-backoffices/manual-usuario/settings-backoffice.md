---
sidebar_position: 7
---

# Plan Settings

**El módulo Plan Settings, en su vista inicial, muestra un listado con los planes que ofrece Waizant a sus clientes. En este listado se presenta la última versión publicada de cada plan, donde se visualizan datos como el precio mensual, precio anual, nombre del plan y algunas de las funcionalidades "features" incluidas, cada plan cuenta con un toogle que permite identificar si la versión se encuentra publicada o no. Además, dispone de los botones Action y Edit, los cuales permiten ingresar al detalle de cualquier versión del plan.**

**Al seleccionar el botón Edit, el sistema redirige automáticamente a la última versión publicada del plan correspondiente.**

**Desde este módulo es posible administrar y definir los diferentes planes de servicio que el sistema ofrece a sus usuarios. Los administradores pueden visualizar, configurar y mantener actualizada la estructura de cada plan, especificando las funcionalidades y servicios que incluye cada uno.**

**Para acceder a este módulo, es necesario iniciar sesión con las credenciales correctas. El módulo se encuentra disponible en la barra lateral izquierda del sistema.**

**Actualmente, el sistema cuenta con los siguientes planes: Lite, Plus, Premium y Free Trial.**

![MFA-Disable](/img/backoffice-user/plan_settings_backoffice.png)

**Features disponibles en cada plan**

**Plan Lite**

- **Schedule**
- **LabelLinx**
- **MileLinx**
- **Waizant Chat**

**Plan Plus**

- **Encounters**
- **Encounters + Capture**
- **Quality**
- **Billings (CSV y JSON)**
- **Billings Full (CSV, JSON, XML y PDF)**

**Plan Premium**

**Ofrece todas las funcionalidades de los planes anteriores, además de:**

- **Waizant RCM**

**Free Trial**

**Versión de prueba que incluye todas las funcionalidades del plan Premium, permitiendo al usuario explorar la totalidad del sistema de manera temporal.**

---

![MFA-Disable](/img/backoffice-user/plan_lite_backoffice.png)

***Al ingresar se observara la vista de edición el nombre del plan, descripción, cuantos ususarios estan activos en ese plan, numero de la versión, rango de fechas de esa versión, y si esta publicada, en la parte inferior se encuentra la configuración para los parametros, las features que son las caracteristicas que tendran cada plan, los servicios, y los precios que son mensual, anual, y el descuento.**

**Parameters**

**User license for Waizant app**

**Son las lisencias de usuarios para la aplicación luego se hace una grilla con la lista de precios ej: la licencia de usuarios para un paquete de 5 tiene un costo  que se vera reflejado en la vista, la cantidad del paquete que se va a ofrecer y el costo por unidad y automaticamente el sistema realizara el calculo.**

![MFA-Disable](/img/backoffice-user/licence_users.png)

**Number of encounters**

**Son los numeros de Encounters de la aplicación esto parte con una base inicial que no tiene cobro tanto para licencia de usuarios como para numero de encounters,y el proceso es similar al de la opción de Number of encounters.**

![MFA-Disable](/img/backoffice-user/number_encounters.png)

**Cuando una versión esta publicada no se puede editar todos los parametros estan bloqueados, por motivos de seguridad pero estos se bloquean solo si se tiene un usuario o un cliente que ya haya comprado esta versión si nungun usuario a comprado la versión publicada por el sistema si se puede editar ya que no habra ningun riesgo, ej: en caso que el usuario ya compre una versión del plan ya no se puede editar porque ya iria contra las politicas que se compre a un precio y despues sea un precio diferente, en caso que haya una inconcluencia en el plan ya sea por el precio o por otra cosa que se pueda presentar en el momento, se puede crear una nueva version a partir de esa versión para poder realizar los ajustes deseados y luego publicarla.**


**Features**

**Se pueden visualizar los modulos de la aplicación web y la aplicación app para determinar el plan sobre que modulo va a funcionar y se selecciona las caracteristicas sobre cuales estara la versión del plan.**

![MFA-Disable](/img/backoffice-user/feature_plan.png)

- **Schedule**
- **LabelLinx**
- **MileLinx**
- **Waizant Chat**
- **Encounters**
- **Encounters + Capture**
- **Quality**
- **Billings (CSV y JSON)**
- **Billings Full (CSV, JSON, XML y PDF)**
- **Waizant RCM**

***`Nota:` Cada plan cuenta con un conjunto específico de funcionalidades "Features" que varían según el tipo de plan seleccionado, y según el plan seleccionado, se mostrarán únicamente las Features correspondientes a ese plan.**

**Services**

**Son aquellos que determinan el sevicio de agendamiento y el servicio de auditoria estos servicios son cobrados por unidad y cobros por consumo, si una persona adquiere el servicio de agendamiento segun lo consumido es lo que se generara en la factura de cobro.**

![MFA-Disable](/img/backoffice-user/services_plan.png)

**Pricing**

**Es el precio final que tendra el plan para mensual anual y para obtener un descuento del 20% el descuento aplica para el precio anual, para precio mensual no tiene descuento.**

![MFA-Disable](/img/backoffice-user/pircing_plan.png)

---

***`Nota:` cuando el plan esta en estado Activo solo se muestra el botón de crear version, pero si están en un plan inactivo se muestra otro botón de delete.**

**Version Inactiva:**

![MFA-Disable](/img/backoffice-user/version_inactivate_backoffice.png)

**Version Activa:**

![MFA-Disable](/img/backoffice-user/version_activate_backoffice.png)

***`Create version:` En esta opción se muestra una modal con unos campos para llenar y así crear una nueva version, por defecto se agregara la version siguiente de donde se esta situado para crearla, tiene campo de fecha acá se puede seleccionar la fecha para crearla hay un checkbox de Copy from versions que su función es desplegar una opción de crear una nueva version a partir de la que se esta situado, es decir esta en la version 22 se creara una nueva a partir de la version 22 con sus datos, luego se le da clic en create para crearla, y a su vez la modal tiene un botón de Cancel por si se desea cancelar y esto lleva nuevamente a la vista de plan settings.**

![MFA-Disable](/img/backoffice-user/new_version_backoffice.png)

---

***Copy from versions**

![MFA-Disable](/img/backoffice-user/new_version_copy_backoffice.png)

***Hay una sesión que contiene Plan Name, Description, Active, Version, Data Range, Publish  y un botón de Save rates los datos que están en las opciones se muestran dinámicamente según lo que se haya agregado cuando se crea la version, también tiene la posibilidad de actualizar ejemplo: en version, al dar clic se muestra todas las versiones que se han creado la fecha si se desea actualizar se da clic en el icono de date, esta el toogle de publish que se puede publicar o despublicar y el botón de Save rates que inicialmente esta inactivo pero al llenar todos los datos requeridos se activa y su función es la de guardar la version.**

![MFA-Disable](/img/backoffice-user/plan_name_backoffice.png)

---

**Parameters: En esta opción se refleja una tabs con dos opciones (Edit monthly prices) (Edit annual prices) y un botón de (Add parameters) también se muestra una opción de (User license for Waizant app)**

![MFA-Disable](/img/backoffice-user/view_parameters_backoffice.png)

***User license for Waizant app**

![MFA-Disable](/img/backoffice-user/user_license_app.png)

***Edit monthly prices:**

***Se muestra una opción de User license for Waizant app que al dar clic se despliega y se mostrara unos ítems, por defecto inicia en 5 en el campo de Number of initial users by plan hay unos campos para llenar los cales son Amount Cost per unit, Total cost Actions hay unos campos que por defecto se muestran ahí se van agregando la cantidad el costo por unidad y se muestra el costo final hay un botón de Delete  que si se desea al dar clic elimina lo que se creo, también esta el botón de Add new price que añade otros campos para llenar las licencias. Nota: Este item es para precios por mes**

***Edit annual prices:**

**Su funcionamiento es igual al del item anterior su diferencia es que se calcula los precios anuales.**

---

**Features:**

![MFA-Disable](/img/backoffice-user/features_plant_backoffice.png)

***Featured list Se muestra una serie de opciones de Schedule, Encounters, Encounters + Capture, LabelLlinx, MileLinx, Quality, Waizant Chat, Billings (CSV y JSON), (Billings Full (CSV, JSON, XML y PDF), Waizant RCM se podrá elegir las licencias que se deseen ya que es de selección múltiple.**

***`Nota:` para el plan Lite solo se podrá tener las licencias que trae el plan por defecto que son**

- **Schedule**
- **LabelLlinx**
- **Waizant Chat**

**Al seleccionar las licencias le damos clic en Next para seguir al siguiente ítem.**

---

**Services**

**Este item tiene dos opciones**

- **`Build Schedule:` Contiene un campo para ingresar el precio requerido**
- **`Audit Case:` Contiene un campo para ingresar el precio requerido**

![MFA-Disable](/img/backoffice-user/list_service_backoffice.png)

---

***Pricing**

**Contiene 3 card Monthly price, Annual price, Discount**

- **`Monthly price:` Se ingresa el valor de la licencia por mes**
- **`Annual price:` Se agrega el valor de la licencia por año**
- **`Discount:` Se realiza el descuento del 20% y muestra el total de descuento en el año.**

**Al tener estos datos llenos se activa el botón de Save rates y se guarda la información al dar clic y se crea la versión**

**`Plan Plus:` Este plan es similar al anterior Plan Lite la diferencia es que tiene algunas funcionalidades extras.**

![MFA-Disable](/img/backoffice-user/pircings_service_backoffice.png)

**Schedule**

**`Encounters:`**
Gestión y registro de encuentros o interacciones.
**`LabelLlinx`**

**`MileLinx:`**
Control y seguimiento de distancias o recorridos.

**`Quality:`**
Módulo de control de calidad sobre procesos.
**`Waizant Chat`**

**`Billings (CSV y JSON):`**
Exportación y gestión de facturación en formatos `CSV y JSON`.

**c) En Parameters cuenta con una segunda opción de `(Number of entries)` al igual que los pasos anteriores se llenan los campos.**

![MFA-Disable](/img/backoffice-user/number_of_entries.png)

**Plan Premium**

**El plan más completo, que incluye todas las funcionalidades disponibles en el sistema, ideal para operaciones avanzadas y mayor control administrativo, en este plan al igual que el anterior contiene una nueva opción de `(Number of entries)` y se llenan para crear una versión mas robusta con todas las opciones que contiene**
**`Schedule, Encounters`**

**`Encounters + Capture:`**
Gestión de encuentros con captura de datos adicional.
**`LabelLlinx, MileLinx, Quality, Waizant Chat,Billings (CSV y JSON)`**

**`Billings Full (CSV, JSON, XML y PDF):`**
Exportación y administración de facturación en formatos `CSV, JSON, XML y PDF`, para una gestión documental más completa.
