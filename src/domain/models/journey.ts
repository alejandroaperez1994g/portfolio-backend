export class Journey {
    constructor(
        readonly date_text: string,
        readonly experiences: Experience[],
        readonly last: boolean
    ) {
    }

}

export class Experience {
    constructor(
        readonly position: string,
        readonly company: string,) {
    }
}





