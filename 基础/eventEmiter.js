var Event = {
    on : function ( eventName, fn ){
        var _this = this;
        !this.listeners && (function (){
            Object.defineProperty(_this, 'listeners', {
                value: {},
                enumerable: false
            });
        })();
        this.listeners[eventName] = this.listeners[eventName] || [];
        this.listeners[eventName].push( fn );
    },

    emit : function ( eventName ){
        if( !(this.listeners && this.listeners[eventName]) ) return;
        for( var i = 0; i < this.listeners[eventName].length; i++ ){
            this.listeners[eventName][i]( arguments[1] );
        }
    }
}