class Enum {
    constructor(obj) {
        const handler = {
            set (obj, prop, value) {
                throw new TypeError('Enum is read only');
            },
            get (obj, prop) {
                if (prop === 'toJSON' && !obj.hasOwnProperty(prop)) {
                    obj[prop] = this.toJSON;
                }

                if (!(prop in obj)) {
                    throw new ReferenceError(`Unknown enum key "${prop}"`);
                }
                return Reflect.get(obj, prop);
            },
            deleteProperty (obj, prop) {
                throw new TypeError('Enum is read only');
            },
            toJSON() {
                return Object.keys(this).reduce((acc, key) => {
                    acc[key] = this[key];
                    return acc;
                }, {});
            }
        };
        return new Proxy(obj, handler);
    }
}


export default Enum;