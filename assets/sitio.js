/* ------------------------------------------------------------------
   Comportamiento del sitio: tema, render de fichas y filtros.
   Sin dependencias externas.
   ------------------------------------------------------------------ */

(function () {
  "use strict";

  /* ---------------- Tema claro / oscuro ---------------- */

  var CLAVE_TEMA = "dgl-tema";

  function aplicarTema(tema) {
    if (tema === "claro") document.documentElement.setAttribute("data-theme", "light");
    else if (tema === "oscuro") document.documentElement.setAttribute("data-theme", "dark");
    else document.documentElement.removeAttribute("data-theme");
  }

  try {
    aplicarTema(localStorage.getItem(CLAVE_TEMA));
  } catch (e) { /* almacenamiento no disponible */ }

  function iniciarBotonTema() {
    var boton = document.querySelector("[data-tema]");
    if (!boton) return;

    function leer() {
      try { return localStorage.getItem(CLAVE_TEMA) || "auto"; } catch (e) { return "auto"; }
    }
    function pintar() {
      var actual = leer();
      var rotulos = { auto: "Tema: automático", claro: "Tema: claro", oscuro: "Tema: oscuro" };
      boton.textContent = rotulos[actual] || rotulos.auto;
    }

    boton.addEventListener("click", function () {
      var orden = ["auto", "claro", "oscuro"];
      var siguiente = orden[(orden.indexOf(leer()) + 1) % orden.length];
      try { localStorage.setItem(CLAVE_TEMA, siguiente); } catch (e) { /* ignora */ }
      aplicarTema(siguiente);
      pintar();
    });

    pintar();
  }

  /* ---------------- Utilidades ---------------- */

  var ORDEN_GRUPOS = [
    "Tesis",
    "Artículos técnicos",
    "Libros y capítulos",
    "Entrevistas",
    "Multimedia",
    "Reconocimientos",
    "Presentaciones sectoriales",
    "Archivo",
  ];

  var MESES = ["enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

  // Formatea "2026-08-11" | "2023-12" | "2021" | "" sin usar Date,
  // para evitar corrimientos por zona horaria.
  function fechaLegible(valor) {
    if (!valor) return "Sin fecha registrada";
    var p = valor.split("-");
    var anio = p[0];
    if (p.length === 1) return anio;
    var mes = MESES[parseInt(p[1], 10) - 1] || "";
    if (p.length === 2) return mes ? mes + " de " + anio : anio;
    return parseInt(p[2], 10) + " de " + mes + " de " + anio;
  }

  function esc(texto) {
    return String(texto)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function normalizar(texto) {
    return String(texto)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "");
  }

  /* ---------------- Render de fichas ---------------- */

  function ficha(item, opciones) {
    opciones = opciones || {};
    var art = document.createElement("article");
    art.className = "ficha" + (item.prioridad === "Archivo" ? " ficha-archivo" : "");
    art.setAttribute("data-id", item.id);

    var etiquetas = (item.etiquetas || [])
      .map(function (t) { return "<li>" + esc(t) + "</li>"; })
      .join("");

    var partes = [];

    partes.push(
      '<p class="ficha-meta">' +
        '<span class="tipo">' + esc(item.tipo) + "</span>" +
        '<span class="sep" aria-hidden="true">/</span>' +
        "<span>" + esc(item.medio) + "</span>" +
        '<span class="sep" aria-hidden="true">/</span>' +
        "<span>" + esc(fechaLegible(item.fecha)) + "</span>" +
        (item.destacado && !opciones.sinInsignia
          ? '<span class="insignia-destacado">Destacado</span>'
          : "") +
      "</p>"
    );

    partes.push(
      "<h3><a href=" + JSON.stringify(item.enlace) +
      ' rel="noopener external">' + esc(item.titulo) + "</a></h3>"
    );

    partes.push('<p class="ficha-resumen">' + esc(item.resumen) + "</p>");

    if (etiquetas) partes.push('<ul class="etiquetas">' + etiquetas + "</ul>");

    if (item.referencia) {
      partes.push('<p class="referencia">' + esc(item.referencia) + "</p>");
    }

    partes.push(
      '<p class="ficha-pie">' +
        "<a class=\"enlace-fuente\" href=" + JSON.stringify(item.enlace) +
        ' rel="noopener external">' +
        esc(item.enlaceTexto || ("Leer en " + item.medio)) +
        "</a>" +
        (item.nota ? '<span style="color:var(--fg-3);font-size:.8rem">' + esc(item.nota) + "</span>" : "") +
      "</p>"
    );

    art.innerHTML = partes.join("");
    return art;
  }

  function pintarRejilla(nodo, items, opciones) {
    nodo.textContent = "";
    items.forEach(function (item) { nodo.appendChild(ficha(item, opciones)); });
  }

  /* ---------------- Portada: destacados ---------------- */

  function iniciarPortada() {
    var inv = window.INVENTARIO || [];

    var principal = document.querySelector("[data-ultima-columna]");
    if (principal) {
      var columnas = inv.filter(function (i) { return i.seccion === "columnas"; });
      if (columnas.length) {
        var ultima = columnas[0];
        principal.innerHTML =
          '<p class="ficha-meta"><span class="tipo">Última columna</span>' +
          '<span class="sep" aria-hidden="true">/</span><span>' + esc(ultima.medio) + "</span>" +
          '<span class="sep" aria-hidden="true">/</span><span>' + esc(fechaLegible(ultima.fecha)) + "</span></p>" +
          "<h3>" + esc(ultima.titulo) + "</h3>" +
          '<p class="ficha-resumen">' + esc(ultima.resumen) + "</p>" +
          '<p class="ficha-pie"><a class="enlace-fuente" href=' + JSON.stringify(ultima.enlace) +
          ' rel="noopener external">Leer en ' + esc(ultima.medio) + "</a>" +
          '<a href="columnas.html">Ver todas las columnas</a></p>';
      }
    }

    var rejillaDest = document.querySelector("[data-destacados]");
    if (rejillaDest) {
      var ids = (rejillaDest.getAttribute("data-destacados") || "").split(/\s*,\s*/).filter(Boolean);
      var seleccion = ids.length
        ? ids.map(function (id) {
            return inv.filter(function (i) { return i.id === id; })[0];
          }).filter(Boolean)
        : inv.filter(function (i) { return i.destacado; });
      pintarRejilla(rejillaDest, seleccion, { sinInsignia: true });
    }

    var datos = document.querySelector("[data-caso-maestranza]");
    if (datos && window.CASO_MAESTRANZA) {
      datos.innerHTML = window.CASO_MAESTRANZA.datos.map(function (d) {
        return "<li><span class=\"cifra\">" + esc(d.cifra) + "</span>" +
          '<span class="glosa">' + esc(d.glosa) + "</span></li>";
      }).join("");
    }
  }

  /* ---------------- Repositorios con filtros ---------------- */

  function iniciarRepositorio() {
    var raiz = document.querySelector("[data-repositorio]");
    if (!raiz) return;

    var seccion = raiz.getAttribute("data-repositorio");
    var items = (window.INVENTARIO || []).filter(function (i) { return i.seccion === seccion; });

    var contenedor = raiz.querySelector("[data-lista]");
    var conteo = raiz.querySelector("[data-conteo]");
    var buscador = raiz.querySelector("[data-buscador]");
    var grupoAnios = raiz.querySelector("[data-filtro-anios]");
    var grupoTemas = raiz.querySelector("[data-filtro-temas]");

    var estado = { anio: "", etiqueta: "", texto: "" };

    function botonFiltro(rotulo, valor, campo) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "filtro";
      b.textContent = rotulo;
      b.setAttribute("aria-pressed", estado[campo] === valor ? "true" : "false");
      b.addEventListener("click", function () {
        estado[campo] = estado[campo] === valor ? "" : valor;
        sincronizar();
        aplicar();
      });
      b.setAttribute("data-campo", campo);
      b.setAttribute("data-valor", valor);
      return b;
    }

    if (grupoAnios) {
      var anios = [];
      items.forEach(function (i) {
        if (i.anio && anios.indexOf(i.anio) === -1) anios.push(i.anio);
      });
      anios.sort(function (a, b) { return b - a; });
      anios.forEach(function (a) {
        grupoAnios.appendChild(botonFiltro(String(a), String(a), "anio"));
      });
    }

    if (grupoTemas) {
      // Solo se ofrecen como chips los temas que agrupan más de una pieza:
      // con una etiqueta por pieza el filtro deja de filtrar y se vuelve ruido.
      // Lo puntual se encuentra por el buscador.
      var cuenta = {};
      items.forEach(function (i) {
        (i.etiquetas || []).forEach(function (t) { cuenta[t] = (cuenta[t] || 0) + 1; });
      });
      var etiquetas = Object.keys(cuenta).filter(function (t) { return cuenta[t] > 1; });
      if (etiquetas.length < 3) etiquetas = Object.keys(cuenta);
      etiquetas.sort(function (a, b) {
        return cuenta[b] - cuenta[a] || a.localeCompare(b, "es");
      });
      etiquetas.forEach(function (t) {
        grupoTemas.appendChild(botonFiltro(t, t, "etiqueta"));
      });
    }

    function sincronizar() {
      raiz.querySelectorAll(".filtro").forEach(function (b) {
        var campo = b.getAttribute("data-campo");
        b.setAttribute("aria-pressed", estado[campo] === b.getAttribute("data-valor") ? "true" : "false");
      });
    }

    function aplicar() {
      var texto = normalizar(estado.texto).trim();
      var visibles = items.filter(function (i) {
        if (estado.anio && String(i.anio) !== estado.anio) return false;
        if (estado.etiqueta && (i.etiquetas || []).indexOf(estado.etiqueta) === -1) return false;
        if (texto) {
          var heno = normalizar([i.titulo, i.resumen, i.medio, i.tema, (i.etiquetas || []).join(" ")].join(" "));
          if (heno.indexOf(texto) === -1) return false;
        }
        return true;
      });

      if (conteo) {
        conteo.textContent = visibles.length === items.length
          ? items.length + (items.length === 1 ? " pieza publicada" : " piezas publicadas")
          : visibles.length + " de " + items.length + " piezas";
      }

      if (!visibles.length) {
        contenedor.innerHTML =
          '<p class="sin-resultados">No hay piezas que cumplan con estos filtros. ' +
          "Prueba quitando alguno o cambiando la búsqueda.</p>";
        contenedor.className = "";
        return;
      }

      contenedor.className = "rejilla";

      // Los repositorios con subgrupos (Investigación, Entrevistas) los
      // muestran agrupados solo cuando no hay filtros activos.
      var conGrupos = items.some(function (i) { return !!i.grupo; });
      var sinFiltros = !estado.anio && !estado.etiqueta && !texto;

      if (conGrupos && sinFiltros) {
        contenedor.className = "";
        contenedor.textContent = "";
        var vistos = [];
        visibles.forEach(function (i) {
          if (vistos.indexOf(i.grupo) === -1) vistos.push(i.grupo);
        });
        // El archivo va siempre al final: es material que se conserva,
        // no material que se destaca.
        vistos.sort(function (a, b) {
          var ia = ORDEN_GRUPOS.indexOf(a), ib = ORDEN_GRUPOS.indexOf(b);
          if (ia === -1) ia = ORDEN_GRUPOS.length;
          if (ib === -1) ib = ORDEN_GRUPOS.length;
          return ia - ib;
        });
        vistos.forEach(function (g) {
          var h = document.createElement("h3");
          h.textContent = g;
          h.style.marginTop = "2.2rem";
          contenedor.appendChild(h);
          var rej = document.createElement("div");
          rej.className = "rejilla";
          pintarRejilla(rej, visibles.filter(function (i) { return i.grupo === g; }));
          contenedor.appendChild(rej);
        });
        return;
      }

      pintarRejilla(contenedor, visibles);
    }

    if (buscador) {
      buscador.addEventListener("input", function () {
        estado.texto = buscador.value;
        aplicar();
      });
    }

    var limpiar = raiz.querySelector("[data-limpiar]");
    if (limpiar) {
      limpiar.addEventListener("click", function () {
        estado.anio = "";
        estado.etiqueta = "";
        estado.texto = "";
        if (buscador) buscador.value = "";
        sincronizar();
        aplicar();
      });
    }

    aplicar();
  }

  /* ---------------- Formulario de contacto ---------------- */

  function iniciarFormulario() {
    var form = document.querySelector("[data-formulario]");
    if (!form) return;

    var destino = (form.getAttribute("data-endpoint") || "").trim();
    var aviso = form.querySelector("[data-estado]");
    var boton = form.querySelector("button[type=submit]");

    if (!destino) {
      form.setAttribute("aria-disabled", "true");
      if (boton) boton.disabled = true;
      form.querySelectorAll("input, textarea, select").forEach(function (c) { c.disabled = true; });
      if (aviso) {
        aviso.className = "aviso";
        aviso.innerHTML =
          "<strong>Formulario aún no activado.</strong> Falta definir el correo profesional " +
          "y el servicio de envío. Mientras tanto, el contacto se hace por LinkedIn.";
      }
      return;
    }

    form.setAttribute("action", destino);
    form.setAttribute("method", "post");

    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      if (boton) boton.disabled = true;
      if (aviso) { aviso.className = "aviso"; aviso.textContent = "Enviando…"; }

      fetch(destino, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      })
        .then(function (r) {
          if (!r.ok) throw new Error("Respuesta " + r.status);
          form.reset();
          if (aviso) aviso.textContent = "Mensaje enviado. Gracias por escribir.";
        })
        .catch(function () {
          if (aviso) {
            aviso.textContent =
              "No se pudo enviar el mensaje. Puedes escribir por LinkedIn mientras lo revisamos.";
          }
        })
        .then(function () { if (boton) boton.disabled = false; });
    });
  }

  /* ---------------- Arranque ---------------- */

  function iniciar() {
    iniciarBotonTema();
    iniciarPortada();
    iniciarRepositorio();
    iniciarFormulario();

    var anio = document.querySelector("[data-anio-actual]");
    if (anio) anio.textContent = "2026";
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
})();
