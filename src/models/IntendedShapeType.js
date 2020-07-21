import IntendedShapeTypes from '../utils/IntendedShapeTypes';

export default class IntendedShapeType {

    static TYPES = IntendedShapeTypes;

    intendedShapeTypeId;
    intendedShapeType;

    get intendedShapeTypeId() {
        return this.intendedShapeTypeId;
    }
    get intendedShapeType() {
        return this.intendedShapeType;
    }

    constructor(intendedShapeTypeId) {
        switch(intendedShapeTypeId) {
            case IntendedShapeTypes.HOOK.ID :
                this.intendedShapeTypeId = IntendedShapeTypes.HOOK.ID
                this.intendedShapeType = IntendedShapeTypes.HOOK.TEXT
                break;
            case IntendedShapeTypes.DRAW.ID :
                this.intendedShapeTypeId = IntendedShapeTypes.DRAW.ID
                this.intendedShapeType = IntendedShapeTypes.DRAW.TEXT
                break;
            case IntendedShapeTypes.STRAIGHT.ID :
                this.intendedShapeTypeId = IntendedShapeTypes.STRAIGHT.ID
                this.intendedShapeType = IntendedShapeTypes.STRAIGHT.TEXT
                break;
            case IntendedShapeTypes.FADE.ID :
                this.intendedShapeTypeId = IntendedShapeTypes.FADE.ID
                this.intendedShapeType = IntendedShapeTypes.FADE.TEXT
                break;
            case IntendedShapeTypes.SLICE.ID :
                this.intendedShapeTypeId = IntendedShapeTypes.SLICE.ID
                this.intendedShapeType = IntendedShapeTypes.SLICE.TEXT
                break;
            default :
                this.intendedShapeTypeId = IntendedShapeTypes.UNSPECIFIED.ID
                this.intendedShapeType = IntendedShapeTypes.UNSPECIFIED.TEXT
                break;
        }
    }
}