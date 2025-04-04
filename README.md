# Pokédex
Tecnologías principales:

- React con Next js 15
- TypeScript
- Redux Toolkit
- CSS
- PokeAPI

## Documentación
- [Características del proyecto](#caracteristicas-del-proyecto)
- [Instalación](#instalación)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Uso del proyecto](#uso)

## Características del proyecto:

- Buscador de Pokemones por nombre
- Paginación
- Diseño responsivo
- Manejo de estado global
- Manejo de errores

## Instalación

Para instalar las dependencias del proyecto, ejecute el siguiente comando:

```bash
npm install
```

## Estructura del proyecto

La estructura de carpetas del proyecto `Pokedex` es la siguiente:

```
Pokedex/
├── public/
│   └── ...
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── ...
│   ├── components/
│   ├── store/
│   ├── types/
├── package.json
├── tailwind.config.ts
└── README.md
```

- **public/**: Imágenes del proyectp.
- **src/**: Contiene el codigo fuente del proyecto.
    - **app/**: Rutas de la aplicación (En este proyecto solo tiene una ruta principal).
        - **layout.tsx**: Layout global.
        - **page.tsx**: Página principal.
        - **globals.css**: Todos los estilos del proyecto.
    - **components/**: Componentes reusables de la aplicación (para Layout, Pages, y ui).
    - **store/**: Codigo de Redux y el manejo del estado global (Slices, Hooks, Selectores y Acciones).
    - **types**: Tipados reutilizables.
- **package.json**: Archivo de configuracion npm.

## Uso

Para iniciar la aplicación en modo de desarrollo, ejecute el siguiente comando:

```bash
npm run dev
```

Esto abrira la aplicacion en su navegador predeterminado en el siguiente link `http://localhost:3000`.

Una vez hecho lo anterior, podra ver la aplicacion con exito y funcional.

Explore la funcionalidad de la Pokédex:

- Busque Pokemones por nombre en la barra de búsqueda.
- Navegue entre páginas usando el sistema de paginación.
- Disfrute del diseño optimizado para dispositivos móviles y de escritorio.
- Si hay errores, o escribe por error el nombre de algun pokemon, la app ya maneja esos errores y le mostrara un mensaje de error para cualquier caso.

Si desea hacer algun cambio o añadir una nueva característica al proyecto, antes de guardar sus cambios, debe ejecutar el comando de `eslint` para garantizar la calidad y las buenas prácticas del codigo:

```bash
npm run lint
```
