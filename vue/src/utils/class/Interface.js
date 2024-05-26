/**
 * @class   Interface
 * @classdesc   다른 클래스를 작성할 때 기본이 되는 틀을 제공하며 다른 클래스 사이의 중간 매개 역할까지 담당하는 일종의 추상 클래스를 의미한다
 * @example
 * let Runnable =  new Interface(()=>{
 *
 *     return {
 *         run: ()=>{},
 *         worker: undefined
 *     }
 * });
 *
 * class RunnableImpl  {
 *     constructor() {
 *         this.worker = new Worker();
 *     }
 *
 *     run (restApi) {
 *     }
 * }
 *
 *  let workerImpl = Runnable(new RunnableImpl());
 *  this.worker = workerImpl.worker;
 *  this.run = workerImpl.run;
 */
function breach(message) {
    return new Error("Breach in interface contract: " + message);
}

const Interface = (fn, options) => {
    const iface = new fn();
    const optionsObj = options || {};

    if (optionsObj.production || Object.defineProperty === undefined) {
        return (impl) => impl;
    }

    return (impl) => {
        const propertiesObject = {};

        for (const elem in iface) {
            if (!(elem in impl)) {
                throw breach("Nonexisting member " + elem);
            }

            const contract = iface[elem];
            const tested = impl[elem];

            if (typeof contract === "function") {
                if (typeof tested !== "function") {
                    throw breach("Interface function " + elem +
                        " not a function in implementor");
                }

                if (contract.length > tested.length) {
                    throw breach("Interface required function " + elem +
                        " to run with " +
                        contract.length + " params however implementor's runs" +
                        " with " + tested.length + " params");
                }
            }

            if (optionsObj.typecheck && (typeof contract === "string") && (contract.length > 0)) {
                const ttype = typeof tested;
                if (ttype !== contract) {
                    throw breach("Type Mismatch, expected property" + elem +
                        "To be of type" + contract + " Instead got" +
                        ttype);
                }
            }

            propertiesObject[elem] = {
                enumerable: true,
                configurable: false,
                get: getFunc.bind(null, iface, impl, elem)
            };
        }

        const obj = Object.create(null, propertiesObject);
        return obj;
    };

    function getFunc(iface, impl, name) {
        if (name in iface) {
            return impl[name];
        }
        return undefined;
    }
};

export default Interface;