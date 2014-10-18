var Lager = (function() {
    var Lager= {
        setServer: function(addr) {
            server = addr;
        },
        setOrigin: function(identifier) {
            origin = identifier;
        },
        log: function(message) {
            var pars = encodeURI("?msg=" + message + "&origin=" + origin);
            xhr = new XMLHttpRequest();
            xhr.open('HEAD', server + pars);
            xhr.send();
        }
    }
    return Lager
}());
