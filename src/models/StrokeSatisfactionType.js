import StrokeSatisfactionTypes from '../utils/StrokeSatisfactionTypes';

export default class StrokeSatisfactionType {

    static TYPES = StrokeSatisfactionTypes;

    strokeSatisfactionTypeId;
    strokeSatisfactionType;

    get strokeSatisfactionTypeId() {
        return this.strokeSatisfactionTypeId;
    }
    get strokeSatisfactionType() {
        return this.strokeSatisfactionType;
    }

    constructor(strokeSatisfactionTypeId) {
        switch(strokeSatisfactionTypeId) {
            case StrokeSatisfactionTypes.FANTASTIC.ID :
                this.strokeSatisfactionTypeId = StrokeSatisfactionTypes.FANTASTIC.ID
                this.strokeSatisfactionType = StrokeSatisfactionTypes.FANTASTIC.TEXT
                break;
            case StrokeSatisfactionTypes.GOOD.ID :
                this.strokeSatisfactionTypeId = StrokeSatisfactionTypes.GOOD.ID
                this.strokeSatisfactionType = StrokeSatisfactionTypes.GOOD.TEXT
                break;
            case StrokeSatisfactionTypes.AVERAGE.ID :
                this.strokeSatisfactionTypeId = StrokeSatisfactionTypes.AVERAGE.ID
                this.strokeSatisfactionType = StrokeSatisfactionTypes.AVERAGE.TEXT
                break;
            case StrokeSatisfactionTypes.BAD.ID :
                this.strokeSatisfactionTypeId = StrokeSatisfactionTypes.BAD.ID
                this.strokeSatisfactionType = StrokeSatisfactionTypes.BAD.TEXT
                break;
            case StrokeSatisfactionTypes.TERRIBLE.ID :
                this.strokeSatisfactionTypeId = StrokeSatisfactionTypes.TERRIBLE.ID
                this.strokeSatisfactionType = StrokeSatisfactionTypes.TERRIBLE.TEXT
                break;
            default :
                this.strokeSatisfactionTypeId = StrokeSatisfactionTypes.UNSPECIFIED.ID
                this.strokeSatisfactionType = StrokeSatisfactionTypes.UNSPECIFIED.TEXT
                break;
        }
    }
}