class EventEmitter {

    events = {};

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {

        if (!this.events[eventName]) this.events[eventName] = [];

        this.events[eventName].push(callback);

        return {
            unsubscribe: () => {
                this.events[eventName] = this.events[eventName]?.filter(cb => cb !== callback);
            }
        };
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        return this.events[eventName] ? this.events[eventName].map(cb => cb(...args)) : [];
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
