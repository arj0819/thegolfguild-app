import LateralResultTypes from '../utils/LateralResultTypes';

export default class LateralResultType {

    static TYPES = LateralResultTypes;

    lateralResultTypeId;
    lateralResultType;

    get lateralResultTypeId() {
        return this.lateralResultTypeId;
    }
    get lateralResultType() {
        return this.lateralResultType;
    }

    constructor(lateralResultTypeId) {
        switch(lateralResultTypeId) {
            case LateralResultTypes.WAY_LEFT.ID :
                this.lateralResultTypeId = LateralResultTypes.WAY_LEFT.ID
                this.lateralResultType = LateralResultTypes.WAY_LEFT.TEXT
                break;
            case LateralResultTypes.LEFT.ID :
                this.lateralResultTypeId = LateralResultTypes.LEFT.ID
                this.lateralResultType = LateralResultTypes.LEFT.TEXT
                break;
            case LateralResultTypes.ACCEPTIBLE.ID :
                this.lateralResultTypeId = LateralResultTypes.ACCEPTIBLE.ID
                this.lateralResultType = LateralResultTypes.ACCEPTIBLE.TEXT
                break;
            case LateralResultTypes.RIGHT.ID :
                this.lateralResultTypeId = LateralResultTypes.RIGHT.ID
                this.lateralResultType = LateralResultTypes.RIGHT.TEXT
                break;
            case LateralResultTypes.WAY_RIGHT.ID :
                this.lateralResultTypeId = LateralResultTypes.WAY_RIGHT.ID
                this.lateralResultType = LateralResultTypes.WAY_RIGHT.TEXT
                break;
            default :
                this.lateralResultTypeId = LateralResultTypes.UNSPECIFIED.ID
                this.lateralResultType = LateralResultTypes.UNSPECIFIED.TEXT
                break;
        }
    }
}