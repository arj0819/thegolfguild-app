import LieAngleTypes from '../utils/LieAngleTypes';

export default class LieAngleType {

    static TYPES = LieAngleTypes;

    lieAngleTypeId;
    lieAngleType;

    get lieAngleTypeId() {
        return this.lieAngleTypeId;
    }
    get lieAngleType() {
        return this.lieAngleType;
    }

    constructor(lieAngleTypeId) {
        switch(lieAngleTypeId) {
            case LieAngleTypes.WAY_BELOW_FEET.ID :
                this.lieAngleTypeId = LieAngleTypes.WAY_BELOW_FEET.ID
                this.lieAngleType = LieAngleTypes.WAY_BELOW_FEET.TEXT
                break;
            case LieAngleTypes.BELOW_FEET.ID :
                this.lieAngleTypeId = LieAngleTypes.BELOW_FEET.ID
                this.lieAngleType = LieAngleTypes.BELOW_FEET.TEXT
                break;
            case LieAngleTypes.LEVEL.ID :
                this.lieAngleTypeId = LieAngleTypes.LEVEL.ID
                this.lieAngleType = LieAngleTypes.LEVEL.TEXT
                break;
            case LieAngleTypes.ABOVE_FEET.ID :
                this.lieAngleTypeId = LieAngleTypes.ABOVE_FEET.ID
                this.lieAngleType = LieAngleTypes.ABOVE_FEET.TEXT
                break;
            case LieAngleTypes.WAY_ABOVE_FEET.ID :
                this.lieAngleTypeId = LieAngleTypes.WAY_ABOVE_FEET.ID
                this.lieAngleType = LieAngleTypes.WAY_ABOVE_FEET.TEXT
                break;
            default :
                this.lieAngleTypeId = LieAngleTypes.UNSPECIFIED.ID
                this.lieAngleType = LieAngleTypes.UNSPECIFIED.TEXT
                break;
        }
    }
}