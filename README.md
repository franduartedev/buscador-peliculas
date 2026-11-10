# Buscador de películas

Aplicación web pequeña en JavaScript que consulta OMDb y muestra información de una película, incluido título, año, calificación, sinopsis y póster.

## Tecnologías

- HTML
- CSS
- JavaScript
- Fetch API
- OMDb API

## Ejecución local

El proyecto está hecho con archivos estáticos y no tiene proceso de compilación:

```bash
python -m http.server 8000
```

Abrí [http://localhost:8000](http://localhost:8000).

## Nota de seguridad y estado

La aplicación cliente necesita acceso a OMDb. No incluyas una clave privada en archivos JavaScript públicos: el código que se entrega al navegador puede ser leído por cualquier visitante. Antes de usar la demo con una clave propia, hace falta resolver el acceso sin publicar credenciales, por ejemplo mediante un backend.

La versión actual es una práctica de consumo de API. No se enlaza una demo pública desde este README.
