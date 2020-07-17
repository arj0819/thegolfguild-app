import CurveTypes from '../utils/CurveTypes';

export default class CurveType {

    static TYPES = CurveTypes;

    curveTypeId;
    curveType;

    get curveTypeId() {
        return this.curveTypeId;
    }
    get curveType() {
        return this.curveType;
    }

    constructor(curveTypeId) {
        switch(curveTypeId) {
            case CurveTypes.HOOK.ID :
                this.curveTypeId = CurveTypes.HOOK.ID
                this.curveType = CurveTypes.HOOK.TEXT
                break;
            case CurveTypes.DRAW.ID :
                this.curveTypeId = CurveTypes.DRAW.ID
                this.curveType = CurveTypes.DRAW.TEXT
                break;
            case CurveTypes.STRAIGHT.ID :
                this.curveTypeId = CurveTypes.STRAIGHT.ID
                this.curveType = CurveTypes.STRAIGHT.TEXT
                break;
            case CurveTypes.FADE.ID :
                this.curveTypeId = CurveTypes.FADE.ID
                this.curveType = CurveTypes.FADE.TEXT
                break;
            case CurveTypes.SLICE.ID :
                this.curveTypeId = CurveTypes.SLICE.ID
                this.curveType = CurveTypes.SLICE.TEXT
                break;
            default :
                this.curveTypeId = CurveTypes.UNSPECIFIED.ID
                this.curveType = CurveTypes.UNSPECIFIED.TEXT
                break;
        }
    }
}