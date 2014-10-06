// Sobreescribe la función original de window.open
window._open = window.open; // saving original function
window.open = function(url,name,params) {
	var new_window = window._open(url,name,params);
	onWindowOpen(url, name, params, new_window);
    return new_window;
};
