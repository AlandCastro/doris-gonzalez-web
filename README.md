# Sitio profesional de Doris González Lemunao

Repositorio profesional especializado en copropiedad inmobiliaria, hábitat residencial,
vivienda, ciudad y gestión pública. Primera versión, con las siete secciones pedidas.

**En línea (versión en revisión):** https://alandcastro.github.io/doris-gonzalez-web/

Está publicado con `noindex` y un `robots.txt` que bloquea a los buscadores: se comparte por
enlace directo para que Doris lo revise, no para que aparezca en Google bajo su nombre.
**Al publicar la versión final hay que borrar `robots.txt` y quitar el `<meta name="robots">`
de las siete páginas.**

## Cómo verlo

Es un sitio estático: HTML, CSS y un archivo JavaScript. No tiene dependencias, ni build,
ni llamadas a servicios externos. Se puede abrir directamente o servir con cualquier
servidor estático.

```bash
python -m http.server 8131 --directory C:\Users\aland\doris-gonzalez-web
```

Luego, `http://localhost:8131`.

## Estructura

| Archivo | Sección |
| --- | --- |
| `index.html` | Inicio |
| `perfil.html` | Perfil y trayectoria |
| `columnas.html` | Columnas y artículos (repositorio filtrable) |
| `investigacion.html` | Investigación y libros |
| `entrevistas.html` | Entrevistas y multimedia |
| `proyectos.html` | Proyectos y reconocimientos |
| `contacto.html` | Contacto |
| `assets/datos.js` | **Fuente única de contenidos.** Todas las fichas viven acá. |
| `assets/estilos.css` | Identidad visual, modo claro y oscuro |
| `assets/sitio.js` | Filtros, render de fichas, tema, formulario |
| `ENTREGA/` | Pendientes de validación y notas de verificación |

## Cómo se agrega una columna nueva

Todo el contenido está en `assets/datos.js`. Para publicar una columna nueva basta
agregar un objeto **al principio** del arreglo `window.INVENTARIO` (está ordenado de la
más reciente a la más antigua, y la portada toma la primera de la sección `columnas`
como «última columna»):

```js
{
  id: "C15",
  seccion: "columnas",
  tipo: "Columna",
  titulo: "…",
  medio: "Cooperativa",
  fecha: "2026-09-20",     // AAAA-MM-DD, AAAA-MM o AAAA
  anio: 2026,
  tema: "…",
  etiquetas: ["…", "…"],
  destacado: false,        // true la muestra en «Publicaciones destacadas»
  prioridad: "Alta",       // Alta | Media | Archivo
  enlace: "https://…",
  resumen: "Resumen propio, en primera persona, de 80 a 120 palabras.",
}
```

No hay que tocar el HTML. Los filtros de año y de tema se generan solos a partir de los
datos.

## Reglas editoriales que el sitio hace cumplir

1. **Primera persona.** Toda la redacción personal y todos los resúmenes están escritos
   por ella, no sobre ella.
2. **No se reproducen las columnas.** Cada ficha tiene un resumen original y un botón
   «Leer en Cooperativa» hacia la fuente. El tráfico queda en el medio.
3. **Sitio personal.** El pie de cada página declara que no es una página oficial del
   MINVU. La página de contacto además deriva las consultas ciudadanas a los canales
   oficiales del Ministerio.
4. **Solo datos verificados.** Ver `ENTREGA/01_Notas_de_verificacion.md`.
5. **Nada marcado «Por confirmar».** La única pieza en ese estado del inventario (el
   capítulo «Políticas de vivienda en la ciudad de Santiago…») no está publicada; la
   página de investigación explica por qué.
6. **Sin identidad institucional prestada.** No se usan logotipos ni la paleta del MINVU.

## Antes de publicar

Falta cerrar los puntos de `ENTREGA/00_Pendientes_para_validar_con_Doris.md`. Los tres
que se ven en pantalla son la fotografía principal, el enlace de LinkedIn y el correo
profesional: mientras no estén, el sitio los muestra como pendientes en vez de
inventarlos.

Para activar el formulario de contacto, poner el endpoint del servicio de envío en el
atributo `data-endpoint` del `<form>` en `contacto.html`. Mientras esté vacío, el
formulario aparece deshabilitado con un aviso, en lugar de aceptar mensajes que nadie
recibiría.
