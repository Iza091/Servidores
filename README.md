# Guía de Configuración de Apache en Ubuntu

Esta guía proporciona instrucciones básicas para configurar y administrar el servidor web Apache en un sistema operativo Ubuntu. Apache es un servidor web de código abierto ampliamente utilizado que permite alojar y servir sitios web y aplicaciones web de manera confiable y segura.

## Requisitos previos

- Se requiere un servidor Ubuntu con acceso de administrador (root) o un usuario con privilegios sudo.
- Se recomienda tener conocimientos básicos de la línea de comandos de Linux.

## Configuración básica de Apache

Después de instalar Apache, puedes realizar algunas configuraciones básicas:

- **Directorio raíz de documentos**: El directorio raíz de documentos de Apache es donde se almacenan los archivos del sitio web. Por defecto, está ubicado en `/var/www/html`.

## Páginas de ejemplo

En este repositorio, encontrarás varias páginas de ejemplo organizadas en carpetas:

1. **Minchis**: Una página que muestra imágenes de gatitos (minchis).
2. **Pokédex**: Una página que muestra información sobre Pokémon.
3. **Piedra Papel Tijera Lagarto Spock**: Una página que implementa el juego Piedra Papel Tijera Lagarto Spock.

## Acceso a las páginas

Una vez configurado, puedes acceder a cada página desde un navegador web ingresando la dirección IP del servidor seguida del nombre de la carpeta donde se encuentra la página correspondiente, por ejemplo:
- `http://<dirección_ip>/clima/index.html`
- `http://<dirección_ip>/minchis/index.html`
- `http://<dirección_ip>/pokedex/index.html`
- `http://<dirección_ip>/piedrapapeltijeralagartospock/index.html`

## Mantenimiento y diagnóstico

Para administrar y diagnosticar Apache, puedes utilizar herramientas como el registro de errores, comandos de línea de comandos y herramientas de monitoreo de terceros.

---

Este README proporciona una introducción básica a la instalación y configuración de Apache en un servidor Ubuntu, así como información sobre las páginas de ejemplo incluidas en este repositorio. Se recomienda consultar la documentación oficial de Apache y Ubuntu para obtener información más detallada sobre configuraciones avanzadas y opciones de administración.
