/**
 * @public
 * @description  모듈의 내부 function이 외부로 노출되지 않도록 처리함
 * @example
 * let 변수 = new Private(모듈);
 * */
class Private {
    constructor(obj) {
        const handler = {
            get (obj, prop) {
                if (typeof prop == 'symbol' && prop.toString() === "Symbol(Symbol.toStringTag)") {
                    return undefined;
                }

                if (!this.filter$(prop)) {
                    let value = Reflect.get(obj, prop);
                    if (typeof value === 'function') {
                        value = value.bind(obj);
                    }
                    return value;
                }
            },
            set (obj, prop, value) {
                if (this.filter$(prop)) {
                    throw new TypeError(`Can't set property "${prop}"`);
                }
                return Reflect.set(obj, prop, value);
            },
            has (obj, prop) {
                return this.filter$(prop) ? false : Reflect.has(obj, prop);
            },
            ownKeys (obj) {
                return Reflect.ownKeys(obj).filter(prop => !this.filter$(prop));
            },
            getOwnPropertyDescriptor (obj, prop) {
                return this.filter$(prop) ? undefined : Reflect.getOwnPropertyDescriptor(obj, prop);
            },

            /**
             * @private
             * @description 메소드명, prefix '$'를 기준으로 만들어진 func은 외부에서 접근 못하게 정책을 정함
             * */
            filter$(prop) {
                return prop.endsWith('$');
            }
        };
        return new Proxy(obj, handler);
    }

}


export default Private;