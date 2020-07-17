import BreakLateralTypes from '../utils/BreakLateralTypes';

export default class BreakLateralType {

    static TYPES = BreakLateralTypes;

    breakLateralTypeId;
    breakLateralType;

    get breakLateralTypeId() {
        return this.breakLateralTypeId;
    }
    get breakLateralType() {
        return this.breakLateralType;
    }

    constructor(breakLateralTypeId) {
        switch(breakLateralTypeId) {
            case BreakLateralTypes.SEVERE_LEFT.ID :
                this.breakLateralTypeId = BreakLateralTypes.SEVERE_LEFT.ID
                this.breakLateralType = BreakLateralTypes.SEVERE_LEFT.TEXT
                break;
            case BreakLateralTypes.LEFT.ID :
                this.breakLateralTypeId = BreakLateralTypes.LEFT.ID
                this.breakLateralType = BreakLateralTypes.LEFT.TEXT
                break;
            case BreakLateralTypes.STRAIGHT.ID :
                this.breakLateralTypeId = BreakLateralTypes.STRAIGHT.ID
                this.breakLateralType = BreakLateralTypes.STRAIGHT.TEXT
                break;
            case BreakLateralTypes.RIGHT.ID :
                this.breakLateralTypeId = BreakLateralTypes.RIGHT.ID
                this.breakLateralType = BreakLateralTypes.RIGHT.TEXT
                break;
            case BreakLateralTypes.SEVERE_RIGHT.ID :
                this.breakLateralTypeId = BreakLateralTypes.SEVERE_RIGHT.ID
                this.breakLateralType = BreakLateralTypes.SEVERE_RIGHT.TEXT
                break;
            default :
                this.breakLateralTypeId = BreakLateralTypes.UNSPECIFIED.ID
                this.breakLateralType = BreakLateralTypes.UNSPECIFIED.TEXT
                break;
        }
    }
}