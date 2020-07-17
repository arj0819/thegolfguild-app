import WindStrengthTypes from '../utils/WindStrengthTypes';

export default class WindStrengthType {

    static TYPES = WindStrengthTypes;

    windStrengthTypeId;
    windStrengthType;

    get windStrengthTypeId() {
        return this.windStrengthTypeId;
    }
    get windStrengthType() {
        return this.windStrengthType;
    }

    constructor(windStrengthTypeId) {
        switch(windStrengthTypeId) {
            case WindStrengthTypes.STILL.ID :
                this.windStrengthTypeId = WindStrengthTypes.STILL.ID
                this.windStrengthType = WindStrengthTypes.STILL.TEXT
                break;
            case WindStrengthTypes.WEAK.ID :
                this.windStrengthTypeId = WindStrengthTypes.WEAK.ID
                this.windStrengthType = WindStrengthTypes.WEAK.TEXT
                break;
            case WindStrengthTypes.MEDIUM.ID :
                this.windStrengthTypeId = WindStrengthTypes.MEDIUM.ID
                this.windStrengthType = WindStrengthTypes.MEDIUM.TEXT
                break;
            case WindStrengthTypes.STRONG.ID :
                this.windStrengthTypeId = WindStrengthTypes.STRONG.ID
                this.windStrengthType = WindStrengthTypes.STRONG.TEXT
                break;
            case WindStrengthTypes.VERY_STRONG.ID :
                this.windStrengthTypeId = WindStrengthTypes.VERY_STRONG.ID
                this.windStrengthType = WindStrengthTypes.VERY_STRONG.TEXT
                break;
            default :
                this.windStrengthTypeId = WindStrengthTypes.UNSPECIFIED.ID
                this.windStrengthType = WindStrengthTypes.UNSPECIFIED.TEXT
                break;
        }
    }
}