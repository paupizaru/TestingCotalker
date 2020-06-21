# Testing Cotalker Exercise

**Por Paula Pizarro Rubilar**

Este proyecto es para automatizar dos pruebas de testing sobre el sitio de web.cotalker.com.

# Requerimientos

Este proyecto fue realizado con la versión 12.16.2 de Node.js. Debe tener Node instalado.

Se utilizó Cypress versión 4.8.0, se instala automáticamente con las dependencias del proyecto.

# Instalación y Ejecución

Siga las siguientes instrucciones para ejecutar las pruebas automatizadas de testing sobre Cotalker:

1.  Clone el repositorio.
2.  Abra el proyecto en el IDE de su preferencia (idealmente Visual Studio Code) y en la terminal ejecute el comando `npm ci`
para instalar las dependencias del proyecto (asegúrese de encontrarse en la carpeta del proyecto antes de ejecutar este comando).
3.  Una vez terminada la instalación, ejecute el comando `npm run open` para arrancar la interfaz de Cypress.
4.  En la aplicación de Cypress abierta, haga clic sobre una de las pruebas para ejecutarla (esto abrirá el TestRunner):
    * El archivo &quot; **form.spec.js**&quot; corresponde a la prueba sincrónica de la Ejecución del problema A (Enviar un Formulario).
    *  El archivo &quot; **giphy.spec.js**&quot; corresponde a la prueba asincrónica de la Ejecución del problema B (Obtener un gif del sistema usando un comando).
5. Cuando una de las pruebas finalice, se recomienda cerrar el TestRunner para ejecutar la siguiente.

# Notas importantes

Puede que durante la ejecución ocurran errores de timeout y algunos elementos no los encuentre debido a que se pasó del tiempo de espera de respuesta, de ser así, por favor reinicie las pruebas usando el botón de reinicio de la interfaz del TestRunner, o bien cerrando la interfaz y volviendo a abrir la prueba en cuestión.
