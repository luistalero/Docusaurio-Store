---
sidebar_position: 2
---

# Dashboard

**El módulo Dashboard es el panel de control principal del Backoffice. Permite a los administradores del modelo de negocio consultar de forma rápida métricas clave, facilitando la toma de decisiones y el seguimiento de la operación, cuenta con librerias para los archivos de excel, librerias para mostrar las graficas y una base de datos.**

![MFA-Disable](/img/backoffice-user/dashboard_backoffice_file.png)

**ApexCharts.js:** Librería para generar gráficas e indicadores visuales que resumen datos del negocio, puede ingresar al siguiente link para obtener mas información
[ApexCharts](https://apexcharts.com/)

**ExcelJS:** Librería para exportar datos en reportes Excel desde la aplicación se puede ingresar al siguiente link para obtener mas información
[ExcelJS](https://www.npmjs.com/package/exceljs#create-a-workbook)

**DBCore:** Servicio de base de datos central que gestiona y almacena toda
la información operativa y de usuarios del modelo de negocio.

## Cards del Dashboard

![MFA-Disable](/img/backoffice-user/dashboard_backoffice.png)

**Se visualiza unas card que muestra la cantidad total de usuarios registrados en el sistema, también muestra los usuarios activos e inactivos.**

## Total User

**Se visualiza unas card que muestra la cantidad total de usuarios registrados en el sistema, también muestra los usuarios activos e inactivos.**

**En la base de datos del core en la tabla de usuarios se encuentran los usuarios registrados, y en la tabla de usuariosPracticas, se encuentra la columna para activar e inactivar los usuarios en la columna inactivo con una validación en el código si esta en 0 el usuario esta activo, y si en la base de datos esta en 1 el usuario esta inactivo.**

***Sales to date:**
Muestra el total acumulado de ventas realizadas hasta la fecha dentro de la plataforma. Esta card permite a los administradores conocer, en tiempo real, el volumen de ingresos o transacciones generadas desde el inicio de operaciones hasta el día actual.

***Sold Plans:**
Muestra la cantidad total de planes adquiridos por los usuarios dentro de la plataforma. Esta card facilita el seguimiento del rendimiento comercial y permite evaluar la aceptación y demanda de los planes ofrecidos dentro del modelo de negocio.

***Avg. sales rate:**
Es el promedio de ingresos generados por cada plan vendido en la plataforma. Se calcula dividiendo el total de ventas acumuladas (Sales to Date) entre la cantidad total de planes vendidos (Sold Plans), Este indicador permite conocer el promedio que representa cada venta dentro del modelo de negocio.

## Distribution by city

**Esta sección tiene conexión con la base de datos de la store, y la librería y librería de apexcharts par crear las gráficas**  [ApexCharts](https://apexcharts.com/)
**la cual se encarga de mostrar mediante gráficas tipo barras, las ciudades en las cuales han comprado y la cantidad adquirida, también mediante una gráfica tipo torta se muestra el porcentaje mas adquirido en los planes, es decir muestra cual es el plan mas vendido.**

![MFA-Disable](/img/backoffice-user/distribution_city_backoffice.png)

***Nota: esta sección tiene un campo para descargar documentos, el cual tiene conexión a la base de datos de la store y se descargan los documentos tipo xls mediante una librería de exceljs, se podrá obtener mas información en el link donde se encuentra la documentación oficial** [ExcelJS](https://www.npmjs.com/package/exceljs#create-a-workbook)

**Se observa que en la sección de Type of clients mediante la gráfica muestra los Customer y los Leads que se han inscrito y comprado, tiene conexión a la base de datos de la store.**

***Customer:** Usuario que se inscribe y adquiere planes.

***Leads:** Usuario que se inscribe pero no adquiere ningún plan.

## Suscriptions

**Esta sección tiene conexión a la base de datos de la store y esta creada por la librería de apexcharts para creación de las gráficas**  [ApexCharts](https://apexcharts.com/) **también tiene un campo para descargar el informe mediante el documento xls el cual se crea mediante la librería de exceljs**
[ExcelJS](https://www.npmjs.com/package/exceljs#create-a-workbook)

![MFA-Disable](/img/backoffice-user/suscription_backoffice.png)

**actualizada del comportamiento de las suscripciones dentro del ecosistema de la plataforma durante el año 2025.**

**A través de este módulo se busca:**

- Monitorear el crecimiento de nuevos clientes mes a mes.
- Detectar posibles clientes inactivos, aunque en este periodo no sehan registrado.
- Visualizar la evolución total de ecosistemas activos, permitiendo analizar la estabilidad o expansión del ecosistema a lo largo del tiempo.

**Además, permite a los usuarios:**

- Identificar tendencias de adquisición y posibles momentos de estancamiento.
- Realizar análisis comparativos entre meses.
- Descargar la información en formato .xls para realizar reportes o análisis internos más detallados.
