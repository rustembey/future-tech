class BaseComponent {
    constructor() {
        if (this.constructor === BaseComponent) {
            throw new Error('Abstract class "BaseComponent" cannot be instantiated directly.')
        }
    }
    getProxyState(initialState) {
        return new Proxy(initialState, {
            get: (target, prop) => {
                return target[prop]
            },
            set: (target, prop, newValue) => {
                const oldValue = target[prop]
                target[prop] = newValue
                 if(newValue !== oldValue) {
                this.updateState()
                 }
                 return true;
            }
        })
    }

    updateState() {
        throw new Error('updateState method not implemented')
    }
}

export default BaseComponent