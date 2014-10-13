fb_window_redirect
==================
Aplicación de demostración para redireccionar la ventana de login de Facebook (la cual en **iOS 8** no se cierra).

## Archivos
Los archivos incluidos son los siguientes:

Archivo(s) | Descripción
--- | ---
_static/window.open.js_ | script para sobreescribir el método window.open y que permite mediante una función *OnWindowOpen* escuchar cuando se crea una nueva ventana.
_index.html_ | HTML del ejemplo, también incluye el script donde se incluye la función *OnWindowOpen* y funciones relacionadas al [FB sdk](https://developers.facebook.com/docs/javascript). 
_static/utils.js_ | Utilidades javascript (Script de concatenación de Strings y script para consola). 
_static/jquery.js_, _static/jquery-ui.css_ y _static/style.css_ | Estilos y jQuery. 

## Código importante

### static/window.open.js
```javascript
// Sobreescribe la función original de window.open
window._open = window.open; // saving original function
window.open = function(url,name,params) {
	var new_window = window._open(url,name,params);
	if (typeof onWindowOpen === "function") {
		// Si la función OnWindowOpen existe se manda llamar
		onWindowOpen(url, name, params, new_window);
	}
    return new_window;
};
```

### index.html
```html
<script type="text/javascript">
var openedWindows = [];
var fbWindows = [];
// Callback de ventana abierta
function onWindowOpen(url, name, params, new_window) {
	$('#ventanitas').append(url);
	// Filtra la petición oauth a facebook
	if (url.contains('facebook.com') 
		&& url.contains('oauth')) {
		fbWindows.push(new_window);
	}
    openedWindows.push(new_window);
}
</script>
<script type="text/javascript">
// Ventana principal
var mainWin = window;

// Callback del botón de Facebook
$('body').on('click', '.fbConnectButton', function(e) {

	FB.login(function(response) {

		//Intento de inicio de sesión
		// eventsAnalytics.pushEvent('user', 'fblogin', 'try');
		if(response.authResponse) {
			//Inicio exitoso
			// eventsAnalytics.pushEvent('user', 'fblogin', 'done');
			var extraParams = '';
			$('#res').html("Usuario obtenido");

			// Redirección de la ventana de Facebook si es que no ha sido cerrada.
			// Ver función onWindowOpen
			var fbwin = fbWindows[0];

			// Redirección de la ventana de Facebook
			// Ésto solo sucederá si la ventana no pudo ser cerrada
			// Si la ventana se cerró, esto simplemente no se ejecutará.
			var redirect_url = ''
			fbwin.location = redirect_url;
		}
	},
	{scope: 'email,publish_stream,user_birthday'});
});
</script>
```
