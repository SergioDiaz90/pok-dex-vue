# Pokdesk-vue

## Link de Despliegue
Ver [link de despliegue](https://pok-dex-vue.vercel.app/).

```
Este es un proyecto en el que se busca mostrar la información de los pokemon, de acuerdo 
a criterios de búsqueda y selección del usuario.

-- Creación del clipboard 

Este fue uno de los puntos mas sencillos, debido a que en el pasado ya había creado un
elemento clipboard, por lo que lo dejé para lo ulitmo, consisite en crear un input que 
nunca es agregado al DOM, darle un valor, y después de ello copiar al cortapapeles ese valor,

En lo particular, me hubiera gustado mejorarlo y hacerlo aun más dinámico, por el momento es funcional
pero puede ser aun mejor.


-- Creación de la animación con el SVG

La animación de svg con css es algo que suele gustarme demasiado, aunque en este caso para dedicarme
mas a la intereacción sacrifique lo genial que puede ser la animación y cree un desplazamiento de izquierda
a derecha infinito para los eventos de carga, que en este caso estan ligados solamente a la construcción de 
la lista de pokemon, me encantaría hacerle más a este efecto.

-- Consulta a la API 

En esta parte traté de seguir las recomendaciones del PDF y utilize 2 endpoints, solamente que el segundo lo utilice
Tomando el nombre del elemento de lista construido con el primer endpoint, que sería la totalidad de pokemons existentes
y ya de allí obtener la información necesario para construir el modal, aunque no me gustaron las imagenes ofrecidas allí
para plasmar en el modal.

-- Uso de Vue JS

El uso de Vue js me encanto, aunque fue complicado en algunos pedazos debido a que la gran mayoria de mis desarrollos han
sido con ANGULAR y son filosofias totalmente diferentes, pero pude lograr el grueso del proyecto, a pesar de tener algunos
conflictos con el vue-router y consumir mucho tiempo en arreglarlos.


-- Arquitectura del proyecto

El proyecto fue creado pensando en que todo el comportamiento principal se manejara en el main, y allí creando los componentes
Que se fueran a usar en la interacción, eso exceptuando el de bienvenida, dentro de el main, hay cosas que después de avanzado
proyecto y por como se fue tornando el desarrollo debieron ser un componente aparte, pero decidí no crearlo, justamente por el
tiempo, ese es el caso de las listas de pokemons, tanto la de favoritos, como la de todos los pokemons.

Adicional a ello se busco manejar los servicios y el routing por aparte, para permitir una mejor comprensión en la estructura del
proyecto.


```

##
## Dependencias del proyecto
```
npm install
```

### Compilación y recarga en caliente para el desarrollo
```
npm run serve
```

### Compila y minifica para la producción
```
npm run build
```

### Fichas y correcciones
```
npm run lint
```

### Personalizar la configuración
See [Configuration Reference](https://cli.vuejs.org/config/).
