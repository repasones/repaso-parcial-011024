/* La información de los Examiners en general (id, firstName, lastName, nationalProviderIdentifier)  */

export class Examiner {
    constructor({ id, firstName, lastName, nationalProviderIdentifier }) {
        this.id = id || 0;
        this.firstName = firstName || '';
        this.lastName = lastName || '';
        this.nationalProviderIdentifier = nationalProviderIdentifier || '';
    }
}