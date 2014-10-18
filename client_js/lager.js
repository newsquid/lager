var Lager = (function() {
    var Lager= {
        //these setters are really unnecessary, but data abstraction is nice.
        setServer: function(addr) {
            //function sets the remote logging server address
            Lager.server = addr;
        },
        setOrigin: function(identifier) {
            //function sets an ID for the platform. Eg. name of service using Lager
            Lager.origin = identifier;
        },
        meta: JSON.stringify({
            UA: navigator.userAgent,
            lang: navigator.languages,
            cookiesEnabled: navigator.cookieEnabled,
            platform: navigator.platform
        }),
        log: function(message) {
            //function logs message and meta-data to the Lager server
            var pars = encodeURI("?msg=" + message + "&origin=" + Lager.origin + "&meta-data=" + Lager.meta);
            xhr = new XMLHttpRequest();
            xhr.open('HEAD', Lager.server + pars);
            xhr.send();
        }
    }
    return Lager
}());
