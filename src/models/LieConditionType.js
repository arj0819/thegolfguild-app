import LieConditionTypes from '../utils/LieConditionTypes';

export default class LieConditionType {

    static TYPES = LieConditionTypes;

    lieConditionTypeId;
    lieConditionType;

    get lieConditionTypeId() {
        return this.lieConditionTypeId;
    }
    get lieConditionType() {
        return this.lieConditionType;
    }

    constructor(lieConditionTypeId) {
        switch(lieConditionTypeId) {
            case LieConditionTypes.IDEAL.ID :
                this.lieConditionTypeId = LieConditionTypes.IDEAL.ID
                this.lieConditionType = LieConditionTypes.IDEAL.TEXT
                break;
            case LieConditionTypes.GOOD.ID :
                this.lieConditionTypeId = LieConditionTypes.GOOD.ID
                this.lieConditionType = LieConditionTypes.GOOD.TEXT
                break;
            case LieConditionTypes.BAD.ID :
                this.lieConditionTypeId = LieConditionTypes.BAD.ID
                this.lieConditionType = LieConditionTypes.BAD.TEXT
                break;
            case LieConditionTypes.TERRIBLE.ID :
                this.lieConditionTypeId = LieConditionTypes.TERRIBLE.ID
                this.lieConditionType = LieConditionTypes.TERRIBLE.TEXT
                break;
            default :
                this.lieConditionTypeId = LieConditionTypes.UNSPECIFIED.ID
                this.lieConditionType = LieConditionTypes.UNSPECIFIED.TEXT
                break;
        }
    }
}