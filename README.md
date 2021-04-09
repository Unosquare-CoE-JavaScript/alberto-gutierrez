# Repository for unosquare modules.

# Notas de TDD

#### Notas

1. En este punto el nombre del folder que busca mocha es test si quiere modificar el path solo tienes que agregarle despues del comando ejemplo : `./node_modules/.bin/mocha tests/unit`
1. En futuras instalaciones recuerda que el path a colocar en tu package.json es: `"test": "./node_modules/.bin/mocha "`
1. alternativamente simplemente baja **mocha test explorer**
1. Al pasar el parametro donde a la funcion del test, ese test se vuelve asincrono.
1. para probar request en el mundo real probablemente quieras utilizar stub sobre spy....

#### Ideas para despues:

1. Crear un generador de test placeholder (stubs).
