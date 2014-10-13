fb_window_redirect
==================
Aplicación de demostración para redireccionar la ventana de login de Facebook (la cual en **iOS 8** no se cierra).

## Archivos
Los archivos incluidos son los siguientes:
* _static/window.open.js_ - script para sobreescribir el método window.open y que permite mediante una función *OnWindowOpen* escuchar cuando se crea una nueva ventana.
* _index.html_ - HTML del ejemplo, también incluye el script donde se incluye la función *OnWindowOpen* y funciones relacionadas al [FB sdk](https://developers.facebook.com/docs/javascript). 
* _static/utils.js_ - Utilidades javascript (Script de concatenación de Strings y script para consola). 
* _static/jquery.js_, _static/jquery-ui.css_ y _static/style.css_- Estilos y jQuery. 
