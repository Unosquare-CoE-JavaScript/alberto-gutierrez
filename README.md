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

Builder en resumen le podrias llamar un simplificador para objetos mas complicados, puedes unificar varios para generar comportamientos mas limpios por ejemplo.

`(new Client()).worksIn("tal").livesIn("city")`

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

Clase que funciona como una interfaz que permite modificar el funcionamiento interno con una interfaz identica.
Permite usar un objeto como un placeholder de otro, asi en en lugar de usar el objeto principal, usamos el proxy. (OCP,SRP)

** Ejemplo practico **

Por ejemplo tienes una clase que se encarga de todas las llamadas a la api de tu plataforma, descubres que si bien todas son iguales, hay varias situaciones donde quieres personalizar un poco el contenido antes de enviar o quiza agregar funcionalidad extra, como un sistema de cache por poner un ejemplo.

## Chain of the responsability

Es una cadena de componentes que tienen la oportunidad de procesar los comandos asignados, teniendo opcionalmente procesamientos defaults y cada uno de ellos tiene la capacidad de terminar la cadena. _requiere repasar_

## Command pattern

Es un objecto que representa la instruccion de una accion particular, de tal manera que pueda hacer un rollback de sus pasos.

El comando patron es tomar las diferentes operaciones y encapsularlas en diferentes comandos que tienen do y undo cada operacion.

Es posible combinar multiples comandos y deshacerles en conjunto.

**Ejemplo practico**

Esto es funcional sobre todo en registro complejos. digamos el registro de un usuario en la db, al tener la logica de "undo" desde el principio podria ayudar a deshacer registros parciales por poner un ejemplo o en su defecto registros fallidos.

Otro ejemplo es en un editor de texto, quieres llevar un registro de los comandos que ejecuto el cliente (addChar,bold,delete) de tal manera que puedas implementar un historial de acciones y deshacerlas.

## _Notas_:

require planear con antelacion el flujo de tu clase para poder implementar esto.

## Iterator

Un iterator es una clase que facilita el avance transversal de un objeto y sus elementos, asi mismo trae consigo una referencia al elemento actual y cuando no hay mas elementos en la lista.

## Interpreter

Es un patron de diseno centrado en procesamiento de texto como comandos(?)

Es un componente que procesa texto estructurado. el cual permite separar por operadores lexicos e interpretar secuencias de esos operadores. _requiere repasar_

## Mediator

Es un componente que facilita la comunicacion entre componentes sin que los participantes tengan nexos entre ellos.
Encapsula y controla como un set de objetos interactuan entre ellos.

Por ejemplo un chat room seria el mediador entre usuarios.

## Memento

Memento son snapshots del estado actual en un particular momento. _requiere repasar_

## Observer

Basicamente es un manejo de eventos cuando algo en el sistema cambia. un setter o getter podrian aplicar en este patron.

vease los states de react, useEffect o por el contrario el uso de justamente Observers en angular.

## State

El comportamiento de un objeto es definido por el estado en el que se encuentra. (cof cof maquina de estados finitos cof cof);
_Este sera util_

## Strategic

Se trata de separar las partes entre alto nivel (logica de negocios) y bajo nivel (los algoritmos detras de esa logica).
En sintesis permite definir el comportamiento interno de un sistema durante la ejecucion.

Es un patron donde encapsulas una familia de algoritmos relacionados.
Usable al permitir cambiar estrategias o algoritmos de una manera sencilla.
(LSP,DIP);

## Template Method

Separar algoritmos complejos en sus partes, usando composicion y herencia.
Nos permite definir el esqueleto del algoritmo con implementaciones concretas que seran definidas en la subclases.
_Requiere ejercicio_

## Visitor

Permite agregar nuevas operaciones o metodos a un objeto sin cambiar el objeto en si mismo.
la nueva funcionalidad se queda en el nuevo objeto llamado el visitante.

#### Notas:

practicar con `[Symbol.iterator]` e investigar otras funciones similares.
