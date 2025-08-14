---
sidebar_position: 7
---

# Plan Settings

**El módulo Plan Settings permite administrar y definir los diferentes planes de servicio que el sistema ofrece a sus usuarios. Desde esta sección, los administradores pueden visualizar, configurar y mantener actualizada la estructura de cada plan, especificando las funcionalidades y servicios incluidos en cada uno.**

![MFA-Disable](/img/backoffice-user/plan_settings_backoffice.png)

**a) Plan Lite: Un plan básico que ofrece las funcionalidades esenciales para operar con el sistema.**

***Schedule:**
Gestión de horarios o programaciones.

***LabelLlinx:**
Administración de etiquetas o vínculos personalizados.

***Waizant Chat:**
Acceso al sistema de mensajería y chat interno.

***Nota: Los planes cuentan con unas opciones de (Publish) (Action)**

***Publish: Esta opción tiene un toogle que actúa publicando o despuplicando el plan.**

![MFA-Disable](/img/backoffice-user/plan_lite_backoffice.png)

***Action: Esta opción contiene un botón (Edit) al darle clic se mostrara una vista de una serie de opciones mas detallada para crear suscripciones.**

***Al ingresar se observara en la parte superior izquierda el nombre del plan al cual se ingreso, junto con la version, en la parte derecha hay un botón de crear version.**

***Nota: cuando el plan esta en estado Activo solo se muestra el botón de crear version, pero si están en un plan inactivo se muestra otro botón de delete.**

**Version Inactiva:**

![MFA-Disable](/img/backoffice-user/version_inactivate_backoffice.png)

**Version Activa:**

![MFA-Disable](/img/backoffice-user/version_activate_backoffice.png)

***Create version: En esta opción se muestra una modal con unos campos para llenar y así crear una nueva version, por defecto se agregara la version siguiente de donde se esta situado para crearla, tiene campo de fecha acá se puede seleccionar la fecha para crearla hay un checkbox de (Copy from versions) que su función es desplegar una opción de crear una nueva version a partir de la que se esta situado, es decir esta en la version 22 se creara una nueva a partir de la version 22 con sus datos, luego se le da clic en create para crearla, y a su vez la modal tiene un botón de Cancel por si se desea cancelar y esto lleva nuevamente a la vista de plan settings.**

![MFA-Disable](/img/backoffice-user/new_version_backoffice.png) 

***Copy from versions**

![MFA-Disable](/img/backoffice-user/new_version_copy_backoffice.png)

***Hay una sesión que contiene (Plan Name) (Description) (Active) (Version) (Data Range) (Publish) y un botón de (Save rates) los datos que están en las opciones se muestran dinámicamente según lo que se haya agregado cuando se crea la version, también tiene la posibilidad de actualizar ejemplo: en version, al dar clic se muestra todas las versiones que se han creado la fecha si se desea actualizar se da clic en el icono de date, esta el toogle de publish que se puede publicar o despublicar y el botón de Save rates que inicialmente esta inactivo pero al llenar todos los datos requeridos se activa y su función es la de guardar la version.**

![MFA-Disable](/img/backoffice-user/plan_name_backoffice.png)

***En esta sesión se visualizara unas opciones que se deben ir llenando para crear una version (Parameters) (Features) (Services) (Pricing)**

***Parameters:**
En esta opción se refleja una tabs con dos opciones (Edit monthly prices) (Edit annual prices) y un botón de (Add parameters) también se muestra una opción de (User license for Waizant app)

![MFA-Disable](/img/backoffice-user/view_parameters_backoffice.png)

***User license for Waizant app**

![MFA-Disable](/img/backoffice-user/user_license_app.png)

***Edit monthly prices:**

***Se muestra una opción de (User license for Waizant app) que al dar clic se despliega y se mostrara unos ítems, por defecto inicia en 5 en el campo de (Number of initial users by plan) hay unos campos para llenar los cales son (Amount) (Cost per unit) (Total cost) (Actions) hay unos campos que por defecto se muestran ahí se van agregando la cantidad el costo por unidad y se muestra el costo final hay un botón de (Delete) que si se desea al dar clic elimina lo que se creo, también esta el botón de (Add new price) que añade otros campos para llenar las licencias. Nota: Este item es para precios por mes**

***Edit annual prices:**

**Su funcionamiento es igual al del item anterior su diferencia es que se calcula los precios anuales.**

**Features:**

![MFA-Disable](/img/backoffice-user/features_plant_backoffice.png)

***Featured list Se muestra una serie de opciones de (Schedule) (Encounters) (Encounters + Capture) (LabelLlinx) (MileLinx) (Quality) (Waizant Chat) (Billings (CSV y JSON)) (Billings Full (CSV, JSON, XML y PDF) (Waizant RCM) Se podrá elegir las licencias que se deseen ya que es de selección múltiple.**

***Nota: para el plan Lite solo se podrá tener las licencias que trae el plan por defecto que son**

***(Schedule)**

***(LabelLlinx)**

***(Waizant Chat)**

**Al seleccionar las licencias le damos clic en Next para seguir al siguiente ítem.**

***Services**
**Este item tiene dos opciones**

***Build Schedule: Contiene un campo para ingresar el precio requerido**

***Audit Case: Contiene un campo para ingresar el precio requerido**

![MFA-Disable](/img/backoffice-user/list_service_backoffice.png)

***Pricing:**
**Contiene 3 card (Monthly price) (Annual price) (Discount)**

***Monthly price: Se ingresa el valor de la licencia por mes**

***Annual price: Se agrega el valor de la licencia por año**

***Discount: Se realiza el descuento del 20% y muestra el total de descuento en el año.**
**Al tener estos datos llenos se activa el botón de Save rates y se guarda la información al dar clic y se crea la versión**

**b) Plan Plus: Este plan es similar al anterior (Plan Lite) la diferencia es que tiene algunas funcionalidades extras.**

![MFA-Disable](/img/backoffice-user/pircing_service_backoffice.png)
**Schedule**

**Encounters:**
Gestión y registro de encuentros o interacciones.
**LabelLlinx**

**MileLinx:**
Control y seguimiento de distancias o recorridos.

**Quality:**
Módulo de control de calidad sobre procesos.
**Waizant Chat**

**Billings (CSV y JSON):**
Exportación y gestión de facturación en formatos CSV y JSON.

**c) En Parameters cuenta con una segunda opción de (Number of entries) al igual que los pasos anteriores se llenan los campos.**

![MFA-Disable](/img/backoffice-user/number_of_entries.png)
**Plan Premium**
**El plan más completo, que incluye todas las funcionalidades disponibles en el sistema, ideal para operaciones avanzadas y mayor control administrativo, en este plan al igual que el anterior contiene una nueva opción de (Number of entries) y se llenan para crear una versión mas robusta con todas las opciones que contiene**
**Schedule**
**Encounters**

**Encounters + Capture:**
Gestión de encuentros con captura de datos adicional.
**LabelLlinx**
**MileLinx**
**Quality**
**Waizant Chat**
**Billings (CSV y JSON)**

**Billings Full (CSV, JSON, XML y PDF):**
Exportación y administración de facturación en formatos CSV, JSON, XML y PDF, para una gestión documental más completa.