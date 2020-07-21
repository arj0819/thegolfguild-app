import BreakReadQualityTypes from '../utils/BreakReadQualityTypes';

export default class BreakReadQualityType {

    static TYPES = BreakReadQualityTypes;

    breakReadQualityTypeId;
    breakReadQualityType;

    get breakReadQualityTypeId() {
        return this.breakReadQualityTypeId;
    }
    get breakReadQualityType() {
        return this.breakReadQualityType;
    }

    constructor(breakReadQualityTypeId) {
        switch(breakReadQualityTypeId) {
            case BreakReadQualityTypes.GOOD.ID :
                this.breakReadQualityTypeId = BreakReadQualityTypes.GOOD.ID
                this.breakReadQualityType = BreakReadQualityTypes.GOOD.TEXT
                break;
            case BreakReadQualityTypes.AVERAGE.ID :
                this.breakReadQualityTypeId = BreakReadQualityTypes.AVERAGE.ID
                this.breakReadQualityType = BreakReadQualityTypes.AVERAGE.TEXT
                break;
            case BreakReadQualityTypes.BAD.ID :
                this.breakReadQualityTypeId = BreakReadQualityTypes.BAD.ID
                this.breakReadQualityType = BreakReadQualityTypes.BAD.TEXT
                break;
            default :
                this.breakReadQualityTypeId = BreakReadQualityTypes.UNSPECIFIED.ID
                this.breakReadQualityType = BreakReadQualityTypes.UNSPECIFIED.TEXT
                break;
        }
    }
}