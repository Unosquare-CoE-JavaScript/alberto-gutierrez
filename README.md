# Repository for unosquare modules.

## Notas para Solid

1. Single Responsability se resume en clase debe tener una sola responsabilidad, dicho de otra manera tratar de mantener el codigo tan simple y generico como sea posible.
   asi mismo solo deberia tener una razon para cambiar.

1. Open close se reumen en que una vez completas tu clase, es preferible extender la clase creando nuevas en lugar de editarlas.

1. Liskov ok este es confuso, sobre todo por que el ejemplo fue un poco faulty XD. pero si encuentras una buena explicacion online, deberias descubrir que se resume en crear clases u objetos que puedan ser remplazados por otros con una interfaz similar.

   por ejemplo si notas que muchos de tus servicios para digamos manipular la db son iguales, podrias crear un servicio estandar que reciba como parametro un modelo. asi en el caso de servicios genericos, solo tendrias que llamar a uno y a su respectivo modelo.

1. Interface segregation principle. se resume en el uso de (hipoteticas: en el caso de vanilla js) interfaces para generar cierta implementacion deseada siempre tomando en cuenta que una interfaz solo contenga lo que es estrictamente necesario para funcionar.

1. Dependency Inversion Principle: se resume en que componentes de alto orden no deberian estar casados con objetos per se si no con abstracciones de los mismos.

## Builder

Builder en resumen le podrias llamar un simplificador para objetos mas complicados, puedes unificar varios para generar comportaminetos mas limpios por ejemplo `(new Client()).worksIn("tal").livesIn("city")`

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
