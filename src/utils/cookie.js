/*cookie操作方法*/

export default {

	set (cname, cvalue, exHours=0, domain='') {
		var d = new Date();
	    d.setTime(d.getTime() + (exHours*60*60*1000));
	    var expires = exHours > 0 ? "; expires="+d.toUTCString() : '';
	    domain = domain ? "; domain=" + domain : '';
	    document.cookie = cname + "=" + cvalue + expires + domain;
	},

	get (cname) {
		var name = cname + "=";
	    var ca = document.cookie.split(';');
	    for(var i=0; i<ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') c = c.substring(1);
	        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
	    }
	    return "";
	},

	clear (cname) {
		this.set(cname, "", -1);
	}

}