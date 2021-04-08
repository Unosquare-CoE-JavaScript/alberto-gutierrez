# Notas para curso de JS

Para este modulo ocuparemos instalar mongoDB 4.4.4 | >

### Requerimientos

1. mongoDB
1. yarn (recomendado)

## Instalar mongo:

1. ingresa a <https://www.mongodb.com/try/download/community?tck=docs_server> y descarga la version actual de mongo Community server.
1. (Windows) En caso de que la instalacion no genere el path, busca mongo.exe, deberia estar en: `C:\Program Files\MongoDB\Server\4.4\bin\`.
   1. Abre variables de entorno. (en el buscador de inicio ingresa `env` o "editar variables de entorno").
   1. No olvides poner `\` al final de tu path.
   1. Una vez registras la variable, deberias tener acceso a mongo desde cualquier ruta por terminal.

### Instalacion

Solo ejecuta el comando `yarn install` o `npm install`

### Quick start

Para ejecutar este proyecto solo requieres correr en termina `yarn dev`, o en su defecto `npm run dev`

#### Notas:

Spread operator se refiere a los `...var`

Ejemplo de uso:

```
const style={{color:"red",...styles}}
```

Utilidad extra: Permite evitar editar la referencia asi que por medio de `...object` sera una copia de object en lugar de una referencia.

curioso @hap.joi funciona exactamente igual que la libreria yup. me pregunto si Yup sera compatible con node.

#### Recordatorios para despues:

1. Una referencia es solo una variable apuntando al contenido de otra.
1. Investigar uso de \_\_v.
1. Leer doc de mongoose (se ve poderoso).

#### Nitpicks:

1. OK... por que el instructor usa `console.log("varname",varname)`; en lugar de `console.log({varname})`; el resultado seria el mismo!!!!
1. Puedes autogenerar el package.json sin el prompt con `npm init -y`
1. No soy fan de utilizar delete para deshacerme de variables, quiza un map seria mas practico?

#### Ideas para despues:

1. Reutilizar mi generador de rutas en caso de que futuros proyectos lo permitan.
2. El proceso de crear modelos y schemas puede ser simplificado en una clase padre y asignar los valores en una clase hijo.
3. Cuando termine los cursos probablemente me tome unas horas para refactorizar el codigo en algo menos ofensivo y usarlos como starter.
4. Services podria autogenerarles por consola... usar inquirer o tags?
5. Igualmente se puede realizar un STDService para reducir codigo.
6. Es posible automatizar la generacion (inicial) de validaciones ya sea por consola o por medio del modelo. asi al menos para uso estandar o generico, siempre tendra al menos una validacion.
