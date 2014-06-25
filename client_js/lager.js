var Lager = (function() {
    var Lager= {
        setServer: function(addr) {
            server = addr;
        },
        log: function(message) {
            $.ajax ({
                url: server,
                type: 'get',
                cache: false,
                data: { msg: message, origin: 'not impl yet' }
            });
        }
    }
    return Lager
}());
