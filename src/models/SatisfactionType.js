import SatisfactionTypes from '../utils/SatisfactionTypes';

export default class SatisfactionType {

    static TYPES = SatisfactionTypes;

    satisfactionTypeId;
    satisfactionType;

    get satisfactionTypeId() {
        return this.satisfactionTypeId;
    }
    get satisfactionType() {
        return this.satisfactionType;
    }

    constructor(satisfactionTypeId) {
        switch(satisfactionTypeId) {
            case SatisfactionTypes.FANTASTIC.ID :
                this.satisfactionTypeId = SatisfactionTypes.FANTASTIC.ID
                this.satisfactionType = SatisfactionTypes.FANTASTIC.TEXT
                break;
            case SatisfactionTypes.GOOD.ID :
                this.satisfactionTypeId = SatisfactionTypes.GOOD.ID
                this.satisfactionType = SatisfactionTypes.GOOD.TEXT
                break;
            case SatisfactionTypes.AVERAGE.ID :
                this.satisfactionTypeId = SatisfactionTypes.AVERAGE.ID
                this.satisfactionType = SatisfactionTypes.AVERAGE.TEXT
                break;
            case SatisfactionTypes.BAD.ID :
                this.satisfactionTypeId = SatisfactionTypes.BAD.ID
                this.satisfactionType = SatisfactionTypes.BAD.TEXT
                break;
            case SatisfactionTypes.TERRIBLE.ID :
                this.satisfactionTypeId = SatisfactionTypes.TERRIBLE.ID
                this.satisfactionType = SatisfactionTypes.TERRIBLE.TEXT
                break;
            default :
                this.satisfactionTypeId = SatisfactionTypes.UNSPECIFIED.ID
                this.satisfactionType = SatisfactionTypes.UNSPECIFIED.TEXT
                break;
        }
    }
}