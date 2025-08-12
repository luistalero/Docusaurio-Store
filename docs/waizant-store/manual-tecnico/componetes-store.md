---
sidebar_position: 4
---

# Componente de la Store

## Plans Store

**Este componente, desarrollado en React, es responsable de la renderización dinámica de los planes de servicio disponibles en Waizant Store. La información se extrae directamente de la base de datos de la Store, asegurando la coherencia y actualización de los datos presentados. Su implementación es transversal a múltiples secciones de la aplicación, incluyendo:**

+ **La vista principal de la Store, donde se visualizan como 'cards' detallando la descripción de cada plan.**
+ **La sección completa de 'Plans & Pricing'.**
+ **Durante el flujo del proceso 'Get Started'.**

**La administración y actualización de la información de los planes se realiza centralizadamente a través del módulo 'Plan Settings' en Waizant Backoffices. Cualquier modificación efectuada en dicho módulo se propaga dinámicamente a todas las instancias de este componente en la interfaz de usuario, garantizando la consistencia de la oferta de planes.**

## Contact Us

**La sección 'Contact Us' integra un formulario diseñado para la comunicación directa con el soporte de Waizant. Este formulario se encuentra conectado al servicio de terceros HubSpot. La información ingresada en los campos de entrada se canaliza automáticamente a las direcciones de correo electrónico de soporte de Waizant a través de la API de HubSpot\, facilitando la gestión centralizada de las consultas**

## Newsletter Sing-Up

**Similar a la sección 'Contact Us', la funcionalidad de 'Newsletter Sign-Up' también aprovecha el servicio de HubSpot para la gestión de suscripciones, permitiendo la recolección y procesamiento de datos de los usuarios interesados en recibir comunicaciones.**

## Blog Subscription

**De manera análoga a las secciones 'Contact Us' y 'Newsletter Sign-Up', la 'Blog Subscripción' se integra con el servicio de HubSpot para la gestión de las suscripciones al blog, facilitando la captura de datos de los usuarios y su incorporación a las listas de distribución.**
