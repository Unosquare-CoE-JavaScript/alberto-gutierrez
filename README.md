# Repository for unosquare modules.

## Notas para Solid

1. Single Responsibility se resume en clase debe tener una sola responsabilidad, dicho de otra manera tratar de mantener el codigo tan simple y generico como sea posible.
   asi mismo solo deberia tener una razon para cambiar.

1. Open close se reumen en que una vez completas tu clase, es preferible extender la clase creando nuevas en lugar de editarlas.

1. Liskov ok este es confuso, sobre todo por que el ejemplo fue un poco faulty XD. pero si encuentras una buena explicacion online, deberias descubrir que se resume en crear clases u objetos que puedan ser remplazados por otros con una interfaz similar.

   por ejemplo si notas que muchos de tus servicios para digamos manipular la db son iguales, podrias crear un servicio estandar que reciba como parametro un modelo. asi en el caso de servicios genericos, solo tendrias que llamar a uno y a su respectivo modelo.

1. Interface segregation principle. se resume en el uso de (hipoteticas: en el caso de vanilla js) interfaces para generar cierta implementacion deseada siempre tomando en cuenta que una interfaz solo contenga lo que es estrictamente necesario para funcionar.

1. Dependency Inversion Principle: se resume en que componentes de alto orden no deberian estar casados con objetos per se si no con abstracciones de los mismos.

## Builder

Builder en resumen le podrias llamar un simplificador para objetos mas complicados, puedes unificar varios para generar comportamientos mas limpios por ejemplo `(new Client()).worksIn("tal").livesIn("city")`

## Factory

En resumen se encarga de la creacion de objetos en masa.

1. Factory Method es un metodo que crea objetos....
1. un Factory es cualquier entidad que se encarga de la cracion de objetos.
1. Jerarquias de fabricas permite preparar el entorno y crear objetos relacionados.

## Prototype

Se usa cuando copiar un objeto es menos laborioso que inicializar uno nuevo.

## Singleton

Resumen es un componente que solo es instancia una vez.
Basicamente es el contrario del prototype, pues los valores de comparten entre todas las "instancias" de tu singleton.

**Ejemplo practico**:

Supon que tienes un proceso muy pesado, que solo quieres llamar una sola vez a lo largo de la vida del proceso. pues ahi es cuando usas el singleton....

## Adapter

En resumen permite adaptar componentes que son inicialmente incompatibles.

**Ejemplo practico**:

Tienes un objeto cliente que retorna todos los datos del mismo, tienes una pasarela que requiere estos mismos datos del cliente, sin embargo las estructuras son distintas.
Ahi es cuando entra tu adapter para convertir tu implementacion del cliente en la que necesitas para conectarle con una API de pagos.

## Bridge

Resumen: previene la _Cartesian-product-duplication_ (basicamente un monton de clases con funcionalidades similares) en cambio sugieren la implementacion de "puentes" que permitan que las clases originales crezcan de manera independiente.

**Ejemplo practico**:

Por ejemplo tienes clases que permiten manejar tus modelos como colecciones o unidades. digamos `class ClientCollection` o `class ClientResource`, lo cual genera el problema que por cada nuevo modelo que quieras utilizar con esa implementacion tendras que generar 2 nuevas clases.

Ahora bien usando el patron **bridge** podrias generar la clase Resource y colecction, y alimentar a tu clase principal (digamos tu modelo?) de tal manera que en caso de que tu aplicacion siga creciendo no ocupes crear copias casi identicas con las diferentes implementaciones.

## Composite

La idea es tratar los objetos ya sean individuales o composiciones de objetos con una interfaz uniforme.

## Decorator

En resumen facilita el agregado de funcionalidad sin modificar la clase, sin necesariamente depender de la herencia.

## Facade

En resumen te permite construir una interfaz simplificada para tus usuarios que no requieren acceso a tanta complejidad.

## Flyweight

Permite evitar el consumo excesivo de memoria a costa de performance. _requiere repasar_

## Proxy

clase que funciona como una interfaz que permite modificar el funcionamiento interno con una interfaz identica. _requiere repasar_

## Chain of the responsability

Es una cadena de componentes que tienen la oportunidad de procesar los comandos asignados, teniendo opcionalmente procesamientos defaults y cada uno de ellos tiene la capacidad de terminar la cadena.

#### Notas:

practicar con `[Symbol.iterator]` e investigar otras funciones similares.
