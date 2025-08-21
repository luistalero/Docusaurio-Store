---
sidebar_position: 5
---

# Get started

import AuthWrapper from '@site/src/components/AuthWrapper';

<AuthWrapper allowedRoles={["developer"]}>

## Get Started Now

**La sección 'Get Started Now' guía al usuario a través de un flujo de onboarding estructurado en una serie de formularios. Los pasos 1 y 2 están diseñados para la recolección inicial de información relevante. Los datos ingresados en estos formularios se persisten en la base de datos de la Store y son utilizados algorítmicamente para la recomendación de un plan de servicio óptimo y personalizado para el cliente, basado en sus necesidades declaradas. Es importante señalar la lógica condicional de navegación:** los pasos 3 y 4 se presentan únicamente si el usuario es nuevo en el sistema (no existe registro previo). **Por otro lado, si un usuario ya existente inicia sesión y desea proceder con una compra, el sistema omitirá automáticamente los pasos 3 y 4, redirigiéndolo directamente al paso 5 tras completar el paso 2.**

## Información del usuario

**En este paso del flujo de 'Get Started', el sistema solicita al usuario la introducción de información personal y detalles de su organización. Cabe destacar que, previo a la finalización del proceso de registro, estos datos, junto con la contraseña definida en el paso 4, se mantienen en un estado transitorio (en memoria o sesión). Una característica clave implementada aquí es la funcionalidad de autocompletado de la ciudad basada en el código postal (Zip Code). El proyecto de la Store incorpora un archivo.json que mapea los códigos postales a sus respectivas ciudades. Al ingresar el Zip Code, el sistema consulta este archivo y asigna automáticamente la ciudad correspondiente, optimizando la experiencia del usuario y la precisión de los datos.**

## AWS Cognito

**Una vez que el usuario ha completado la entrada de toda la información requerida, AWS Cognito se encarga de la verificación de la identidad. Este servicio envía un Código de Un Solo Uso (OTP) a la dirección de correo electrónico proporcionada por el usuario. Tras la validación exitosa del OTP, los datos del usuario son persistidos de manera distribuida: se almacenan en la base de datos de la Store, en AWS Cognito (dentro del grupo 'waizant-store'), y en la base de datos de waizant_tickets, asegurando la consistencia de los datos a través de los diferentes subsistemas.**

## Plan Review

**Posterior a la selección de un plan, el sistema redirige al usuario a la vista de 'Revisión del Plan'. En esta interfaz, el usuario puede personalizar su suscripción añadiendo 'encounters' adicionales o licencias de usuario, así como solicitar servicios complementarios. Esta sección mantiene una conexión bidireccional con la base de datos de la Store, donde la configuración del plan se gestiona a través del módulo 'Plan Setting'. La integración con Stripe es fundamental para las operaciones de pago. Stripe hospeda los 'ambientes' de pago, los cuales definen la pasarela de pago, las reglas de prorrateo para las suscripciones y los catálogos de productos. Cada producto y plan en Stripe poseen un ID único que se persiste en la base de datos de la Store. Para asegurar la comunicación segura y autenticada, Stripe genera un par de claves (una clave pública y una secreta) que se configuran como variables de entorno en el proyecto. Además, se emplean Webhooks de Stripe para facilitar la comunicación asincrónica entre el proyecto y Stripe mediante la emisión de eventos. Estos Webhooks están configurados para activarse en respuesta a condiciones de pago específicas. Es importante destacar el modelo de facturación:** si el usuario selecciona un plan y opta por servicios adicionales, el proceso de pago generará dos facturas separadas en Stripe. Una factura cubrirá el plan y todos sus componentes asociados, mientras que la otra será exclusiva para los servicios complementarios. **La facturación del plan se ejecuta recurrentemente el día 1 de cada mes, y la facturación de los servicios se procesa el día 5 de cada mes.**

## Pasarela de Pago Stripe

**Esta interfaz de usuario representa la pasarela de pago para la finalización de la compra del plan seleccionado. La sección está directamente integrada con Stripe, que actúa como el proveedor principal de servicios de procesamiento de pagos. A través de esta conexión, se gestionan todas las transacciones financieras asociadas a la adquisición de los planes.**

## User Panel

**Al completar exitosamente la adquisición de un plan, el estado del usuario registrado evoluciona de 'Usuario Lead' (usuario registrado sin plan adquirido) a 'Usuario Customer' (usuario con uno o más planes adquiridos). Esta transición implica actualizaciones clave en los registros del usuario:** además de su presencia en la base de datos de la Store, el perfil del usuario en AWS Cognito se migra del grupo waizant-store al grupo waizant-admin-store, lo que refleja su nuevo rol y privilegios dentro del ecosistema Waizant.**

## Configuración de Ecosistema

**En esta interfaz, el usuario inicia el proceso de creación de un nuevo ecosistema. La finalización exitosa de esta acción desencadena una serie de actualizaciones y configuraciones subsiguientes en el perfil del usuario registrado, reflejando su integración y la asignación de recursos dentro del nuevo ecosistema.**

</AuthWrapper>
