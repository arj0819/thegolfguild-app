import LieQualityTypes from '../utils/LieQualityTypes';

export default class LieQualityType {

    static TYPES = LieQualityTypes;

    lieQualityTypeId;
    lieQualityType;

    get lieQualityTypeId() {
        return this.lieQualityTypeId;
    }
    get lieQualityType() {
        return this.lieQualityType;
    }

    constructor(lieQualityTypeId) {
        switch(lieQualityTypeId) {
            case LieQualityTypes.GOOD.ID :
                this.lieQualityTypeId = LieQualityTypes.GOOD.ID
                this.lieQualityType = LieQualityTypes.GOOD.TEXT
                break;
            case LieQualityTypes.AVERAGE.ID :
                this.lieQualityTypeId = LieQualityTypes.AVERAGE.ID
                this.lieQualityType = LieQualityTypes.AVERAGE.TEXT
                break;
            case LieQualityTypes.BAD.ID :
                this.lieQualityTypeId = LieQualityTypes.BAD.ID
                this.lieQualityType = LieQualityTypes.BAD.TEXT
                break;
            default :
                this.lieQualityTypeId = LieQualityTypes.UNSPECIFIED.ID
                this.lieQualityType = LieQualityTypes.UNSPECIFIED.TEXT
                break;
        }
    }
}