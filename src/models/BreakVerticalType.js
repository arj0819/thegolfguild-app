import BreakVerticalTypes from '../utils/BreakVerticalTypes';

export default class BreakVerticalType {

    static TYPES = BreakVerticalTypes;

    breakVerticalTypeId;
    breakVerticalType;

    get breakVerticalTypeId() {
        return this.breakVerticalTypeId;
    }
    get breakVerticalType() {
        return this.breakVerticalType;
    }

    constructor(breakVerticalTypeId) {
        switch(breakVerticalTypeId) {
            case BreakVerticalTypes.SEVERE_UPHILL.ID :
                this.breakVerticalTypeId = BreakVerticalTypes.SEVERE_UPHILL.ID
                this.breakVerticalType = BreakVerticalTypes.SEVERE_UPHILL.TEXT
                break;
            case BreakVerticalTypes.UPHILL.ID :
                this.breakVerticalTypeId = BreakVerticalTypes.UPHILL.ID
                this.breakVerticalType = BreakVerticalTypes.UPHILL.TEXT
                break;
            case BreakVerticalTypes.NONE.ID :
                this.breakVerticalTypeId = BreakVerticalTypes.NONE.ID
                this.breakVerticalType = BreakVerticalTypes.NONE.TEXT
                break;
            case BreakVerticalTypes.DOWNHILL.ID :
                this.breakVerticalTypeId = BreakVerticalTypes.DOWNHILL.ID
                this.breakVerticalType = BreakVerticalTypes.DOWNHILL.TEXT
                break;
            case BreakVerticalTypes.SEVERE_DOWNHILL.ID :
                this.breakVerticalTypeId = BreakVerticalTypes.SEVERE_DOWNHILL.ID
                this.breakVerticalType = BreakVerticalTypes.SEVERE_DOWNHILL.TEXT
                break;
            default :
                this.breakVerticalTypeId = BreakVerticalTypes.UNSPECIFIED.ID
                this.breakVerticalType = BreakVerticalTypes.UNSPECIFIED.TEXT
                break;
        }
    }
}