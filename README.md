# Repository for unosquare modules.

## TypeScript

## Instalacion e inicializacion

Para instalar typescript primero tienes que inicializar el package.json con `npm init -y`
despues toca instalar a typescript

`npm install typescript --save-dev` o en yarn `yarn add typescript --dev`

crear tu tsconfig.json, puedes usar el siguiente por default.

```
{
  "compilerOptions": {
    "target": "esNEXT",
    "module": "commonjs",
    "strict": true,
    "moduleResolution": "node",
    "outDir": "lib",
    "declaration": true,
    "sourceMap": true
  },
  "exclude": ["node_modules", ".npm"],
  "include": ["src"]
}


```

finalmente solo tienes que crear tu folder src y ejecutar tu archivo principal con `tsc src/<yourFileName>.js`

### Types & interfaces

los `types` permiten definir comportamientos flexibles, las interfaces un poco mas cerrados.

un ejemplo cotidiano aparte de lo obvio es definir la estructura de los callbacks por ejemplo.

`type abc = "a" | "b" | "c";`

```
export interface iSomethingCool {
  (val1: number, val2: number): void;
}

```

### Generics

Pemrmite definir propiedades genericas que seran asignadas y accesibles al momento de mandar llamar un elemento que use Generics, ejemplo:

```

export type Dict<T> = { [key: string]: T | undefined };
// Array.prototype.map, but for Dict
export function mapDict<T, S>(
  dict: Dict<T>,
  callback: (arg: T, index: string) => S,
): Dict<S> {
  const renewDict: Dict<S> = {};
  for (let index in dict) {
    const value = dict[index];
    if (typeof value === "undefined") continue;
    renewDict[index] = callback(value, index);
  }
  return renewDict;
}

```

### Top Types & Bottom Types

Top types son tipos que pueden mantener cualquier valor.
ejemplo: `unkown | any`

### Access Modifier

se definen en

1. public
1. protected (subclases pueden acceder a estos elementos)
1. private
1. readonly

### Generics

Son importantes cuando se quiere describir una relacion, por ejemplo un factory complejo se veria beneficiado de este uso.

#### Notas :

el siguiente codigo ahorra la necesidad de manualmente definir el contenido de los atributos de this.

```

 constructor(
    public data: {
      name: String;
      lastname: String;
      gender: Boolean;
      contact?: any;
    },
  ) {}

```

### Overload signature

se resume como polymorfismo, al definir un signature como el siguiente:

```

public count( metric: "complex", value: number, rate: number, tags: string[] ) : void;
public count( metric: "simple", value: number ) : API; // <--- Overloaded return type.


count (metric,value, arg3?, arg4?){
    //do something
}

```

lo cual permite ajustar la implementacion del metodo count a cualquiera de las implementaciones generadas como firma.

dicho de otra manera, si llamas count definiendo la metrica por alguna de las opcines por ejemplo simple, solo podras agregar value, pero si defines complex podras definir el resto de los parametros.
