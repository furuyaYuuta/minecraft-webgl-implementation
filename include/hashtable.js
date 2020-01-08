function HashTable() {
    this.length = 0;
    this.items = [];
    this.keys = [];
    for (var i = 0, argsL = arguments.length; i < argsL; i += 2) {
        if (typeof (arguments[i + 1]) != 'undefined') {
            this.items[arguments[i]] = arguments[i + 1];
            this.keys.push(arguments[i]);
            this.length++;
        }
    }

    this.removeItem = function(in_key) {
        var tmp_previous;
        if (typeof (this.items[in_key]) != 'undefined') {
            this.length--;
            delete this.items[in_key];
            var keyIndex = this.hasKey(in_key);
            if (keyIndex !== undefined)
                this.keys.splice(keyIndex, 1);
        }
        return tmp_previous;
    };

    this.getItem = function(in_key) {
        return this.items[in_key];
    };

    this.setItem = function(in_key, in_value) {
        var tmp_previous;
        if (typeof (in_value) != 'undefined') {
            if (typeof (this.items[in_key]) == 'undefined')
                this.length++;
            else
                tmp_previous = this.items[in_key];

            this.items[in_key] = in_value;
            if (this.hasKey(in_key) === undefined) {
                this.keys.push(in_key);
            }
        }

        return tmp_previous;
    };

    this.hasItem = function(in_key) {
        return typeof (this.items[in_key]) != 'undefined';
    };

    this.hasKey = function(keyValue) {
        for (var ki = 0, keysL = this.keys.length; ki < keysL; ki++) {
            if (this.keys[ki] === keyValue) {
                return ki;
            }
        }
        return undefined;
    };

    this.clear = function() {
        this.keys.splice(0, this.keys.length);
        this.items.splice(0, this.items.length);

        this.length = 0;
    }
}