export default class Name {
    value: string;

    constructor (value: string) {
        if(!this.isValidName(value)) throw new Error(("Invalid name"));
        this.value = value;
    }

    private isValidName(name: string) {
        const regexForName = /^([A-Za-z]+ )+([A-Za-z])+$/
        return regexForName.test(name);
    }
}