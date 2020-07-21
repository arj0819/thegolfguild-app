import ContactQualityTypes from '../utils/ContactQualityTypes';

export default class ContactQualityType {

    static TYPES = ContactQualityTypes;

    contactQualityTypeId;
    contactQualityType;

    get contactQualityTypeId() {
        return this.contactQualityTypeId;
    }
    get contactQualityType() {
        return this.contactQualityType;
    }

    constructor(contactQualityTypeId) {
        switch(contactQualityTypeId) {
            case ContactQualityTypes.GOOD.ID :
                this.contactQualityTypeId = ContactQualityTypes.GOOD.ID
                this.contactQualityType = ContactQualityTypes.GOOD.TEXT
                break;
            case ContactQualityTypes.AVERAGE.ID :
                this.contactQualityTypeId = ContactQualityTypes.AVERAGE.ID
                this.contactQualityType = ContactQualityTypes.AVERAGE.TEXT
                break;
            case ContactQualityTypes.BAD.ID :
                this.contactQualityTypeId = ContactQualityTypes.BAD.ID
                this.contactQualityType = ContactQualityTypes.BAD.TEXT
                break;
            default :
                this.contactQualityTypeId = ContactQualityTypes.UNSPECIFIED.ID
                this.contactQualityType = ContactQualityTypes.UNSPECIFIED.TEXT
                break;
        }
    }
}