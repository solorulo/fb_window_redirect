// Función para saber si un String contiene a otro (arg) 
if (!String.prototype.contains) {
    String.prototype.contains = function (arg) {
        return !!~this.indexOf(arg);
    };
}
// Utilidad de consola 
if(typeof(console) === 'undefined') {
	console = {
		log : function() {}
	};
}
else {
	var debugging = "";
	if(debugging === true || debugging == 1 || debugging == '1' ) {
		console.log('console.log is on');
	}
	else {
		console = {
			log : function() {}
		};
	}
}
