---
sidebar_position: 17
---

# Get Started

![Get Started](/img/store-usuario/get-started-1.png )

**La primera etapa de "Get Started" en Waizant, "Háblanos sobre tu organización", recopila información sobre el tamaño y las operaciones. Solicita el número de profesionales clínicos (médicos, enfermeros, administradores), el promedio de casos mensuales (con rangos a seleccionar) y la cantidad de instalaciones. Con un botón para "Salir del proceso" y otro para "Siguiente".**

![Get Started](/img/store-usuario/get-started-2.png )

**En la segunda etapa de "Get Started", "Háganos saber sus necesidades", se pide al usuario seleccionar los servicios y características de interés para ayudar a Waizant a proponer el plan ideal. La lista incluye: Recopilación de datos de facturación, informes de medidas de calidad (AQI), documentación de encuentros con capturas, Comunicación segura entre usuarios, Etiquetas de jeringas compatibles con JHACO (LabelLinx™) y Codificación para facturación (Waizant™ RCM). Tus respuestas nos ayudarán a sugerir la mejor solución. Se incluyen botones para "Anterior", "Siguiente" y "Salir del proceso".**

![Get Started](/img/store-usuario/get-started-3.png )

**La tercera etapa de "Get Started", "Permítanos conocerlo", solicita información personal y de la empresa antes de recomendar un plan. Incluye campos para nombre, apellido, correo electrónico de la empresa, número de teléfono, nombre de la empresa, especialidad médica (desplegable), rol en la empresa (Administrador de prácticas, Profesional líder, Ejecutivo, Líder de TI) y una descripción de la especialidad profesional o médica del usuario.**

![Get Started](/img/store-usuario/get-started-8.png )

**La cuarta etapa de "Get Started" se centra en "Crea tu cuenta gratuita de Waizant™". Para continuar, el usuario debe crear una contraseña que cumpla con los requisitos: al menos 10 caracteres, incluyendo una minúscula, una mayúscula, un número y un carácter especial. Se proporcionan campos para ingresar y repetir la contraseña, con opción de mostrar/ocultar caracteres. La sección "Verificación de cuenta" informa que se envió un código a una dirección de correo electrónico para autenticar la cuenta.**

![Get Started](/img/store-usuario/incomplete-2.png )

**Al ingresar el código OTP de AWS Cognito, el usuario completa el registro y queda verificado como un "usuario tipo Lead" (un usuario sin compras aún).**

![Get Started](/img/store-usuario/get-started-4.png )

**Después de que el usuario ingresa el código OTP para cognito nos mostrará esa notificación de verificación del usuario. Esta sección presenta los planes de suscripción de Waizant™, donde el sistema sugiere un plan específico "Sugerido" basándose en la información previa del usuario. Los planes son: Lite, Plus y Premium. Cada uno de estos planes cuenta con características específicas y funcionalidades exclusivas del tipo de plan.**

![Get Started](/img/store-usuario/get-started-5.png )

**El usuario también puede hacer uso del toogle que sale en cada uno de los planes que les mostrará el precio de los planes en versión anual, donde se realizaría un descuento al precio de cada plan.**

![Get Started](/img/store-usuario/get-started-6.png )

**Ya cuando el usuario selecciona un plan para comprar, procede a la configuración de su plan y en esta vista podemos ver que el plan trae unos Encounters de base y se le permite al usuario poder añadir más Encounters de ser necesarios se le permite al usuario añadir licencias de usuario y activar los servicios si el usuario los requiere.**

![Get Started](/img/store-usuario/get-started-7.png )

**Siempre dependiendo de las opciones que el usuario active o desactive, el servicio de Stripe realizará un prorrateo que será el desglose de lo que el usuario está comprando.**

![Get Started](/img/store-usuario/get-started-9.png )

**Cuando un usuario está realizando la compra de un plan y este mismo añade Encounters adicionales a los bases que otorga el plan, será visible una casilla para ingresar un cupón de descuento que será siempre en un porcentaje sobre el precio de los encounters añadidos, si el usuario ingresa el cupón que no sea válido se le mostrará la notificación informando que el cupón es inválido.**

![Get Started](/img/store-usuario/get-started-10.png )

**Aquí se puede apreciar que si el usuario solo hace la compra del plan sin nada adicional se marca que es solo el precio por la suscripción de su plan y no aparece la casilla de cupones, también teniendo en cuenta que si el usuario comprar el plan en la versión anual o mensual el precio será correspondiente en el prorrateo generado por el servicio de Stripe.**

![Get Started](/img/store-usuario/get-started-12.png )

**Si el usuario está realizando la compra y el cupón es inválido, el botón para proceder con el proceso de pago será deshabilitado hasta que se limpie la casilla.**

![Get Started](/img/store-usuario/get-started-13.png )

**Al momento de que el usuario ingrese un cupón válido, se le mostrará una notificación y el botón para proceder con el pago se activará.**

![Get Started](/img/store-usuario/get-started-14.png )

**Aquí estaríamos en la pasarela de pago del servicio de Stripe, donde el usuario tendrá que los productos estarán desglosados mostrándole el precio de cada una de las adiciones.**

![Get Started](/img/store-usuario/get-started-15.png )

**Si el usuario tiene un cupón válido, este cupón contará como descuento sobre el precio de los Encounters que esté comprando y si el cupón está válido, el usuario nunca verá esta pasarela de pagos.**

![Get Started](/img/store-usuario/get-started-16.png )

**Después de terminar el pago del plan, nos mostrará esta modal si todo está completamente bien y nos preguntará qué deseamos hacer, "Build My Ecosystem" o "Not Now", que específicamente nos lleva a otra vista para la creación de nuestro ecosistema y la otra opción nos lleva al inicio de la Store.**

## Build My Ecosystem

![Get Started](/img/store-usuario/get-started-18.png )

**Si el usuario selecciona la opción para construir su ecosistema, se mostrará este formulario donde debe asignar un nombre al ecosistema, seleccionar la zona horaria, se le preguntará al usuario si es un proveedor o no. Si la respuesta es no, el usuario solo debe de continuar con la creación.**

![Get Started](/img/store-usuario/get-started-17.png )

**Pero si el usuario selecciona que es un proveedor, se añadirán más campos al formulario que serán, el título del proveedor, el código NPI y, por último, un código de referencia que es opcional. Después de completar los campos, el usuario puede continuar con el proceso.**

![Get Started](/img/store-usuario/get-started-19.png )

**Esta pantalla, "Billing Data Collection", corresponde a una etapa inicial de configuración del sistema. Waizant permite la documentación y transmisión de Información de Salud Protegida (PHI), datos de calidad e información de facturación, otorgando un control preciso sobre los servicios dentro de la aplicación. Que culmina con un mensaje de agradecimiento por su paciencia mientras el sistema se configura.**

![Get Started](/img/store-usuario/get-started-20.png )

**Esta pantalla muestra la segunda etapa del proceso de configuración inicial, titulada "Quality Data Collection" (Recolección de Datos de Calidad). Se informa al usuario que tendrá control total sobre la documentación y el reporte de las medidas de calidad de su práctica médica, lo que asegura el cumplimiento normativo adaptado a su especialidad. En la parte inferior, se presenta un mensaje de agradecimiento por la paciencia del usuario, indicando que la configuración del sistema tomará solo unos minutos.**

![Get Started](/img/store-usuario/get-started-21.png )

**"Secure Communication" es la tercera etapa de la configuración inicial. El servicio de comunicación de Waizant cumple con la normativa HIPAA, garantizando la capacidad de compartir Información de Salud Protegida (PHI) de forma segura con su equipo en tiempo real. La comunicación, ya sea a través de chats privados, grupos o transmisiones, estará protegida y será eficiente.**

![Get Started](/img/store-usuario/get-started-23.png )

**La pantalla "Cloud Document Storage" marca la cuarta y última etapa del proceso de configuración inicial. Los procesos patentados de Waizant aseguran la captura segura de imágenes y la transmisión encriptada de extremo a extremo. Esto garantiza la privacidad, la integridad y el cumplimiento normativo esencial para la atención médica y otras industrias de alta seguridad.**

![Get Started](/img/store-usuario/get-started-22.png )

**La pantalla "Congratulaciones", indica que su panel de ecosistema está listo. Para continuar, diríjase a la plataforma web y configura sus instalaciones y equipo. Puede seleccionar "Proceed to My Ecosystem" para acceder de inmediato o "Maybe later" si prefiere posponerlo. Esta pantalla confirma la finalización exitosa del proceso de configuración inicial del sistema.**

![Get Started](/img/store-usuario/get-started-24.png )

**Al seleccionar la opción de proceder al ecosistema, el usuario será enviado al login de la Store y, después de iniciar sesión en el user panel, así es cómo se lograría ver su tarjeta de ecosistema ya activa y completada.**

## Usuario Customer

**Cuando hablamos de un usuario customer, nos referimos a un usuario que ya está registrado en el sistema, se encuentra verificado por el servicio de cognito, ha realizado la compra de algún plan y tiene un ecosistema construido.**

## Usuario Lead

**Cuando hablamos de un usuario lead, nos referimos a un usuario registrado en el sistema. Se encuentra verificado por el servicio de cognito, pero, este no cuenta con ningún plan comprado y, por ende, no tiene ningún ecosistema configurado.**

## Usuario No verificado(Cognito)

**Cuando hablamos de un usuario no verificado, nos referimos a un usuario que mientras hacia el proceso de registro tuvo algún problema al momento de recibir el código OTP que envía cognito o fallo su internet, etc. Entonces el servicio de cognito no puede verificar al usuario en su momento(para que un usuario deje de estar en este estado solo necesita iniciar sesión).**

:::info
Más información aquí{' '}
<a href="/docs/waizant-store/manual-usuario/Login/Registro%20incompleto"className="info">Usuario no verificado</a>
:::
