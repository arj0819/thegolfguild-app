import ExhibitedShapeTypes from '../utils/ExhibitedShapeTypes';

export default class ExhibitedShapeType {

    static TYPES = ExhibitedShapeTypes;

    exhibitedShapeTypeId;
    exhibitedShapeType;

    get exhibitedShapeTypeId() {
        return this.exhibitedShapeTypeId;
    }
    get exhibitedShapeType() {
        return this.exhibitedShapeType;
    }

    constructor(exhibitedShapeTypeId) {
        switch(exhibitedShapeTypeId) {
            case ExhibitedShapeType.HOOK.ID :
                this.exhibitedShapeTypeId = ExhibitedShapeType.HOOK.ID
                this.exhibitedShapeType = ExhibitedShapeType.HOOK.TEXT
                break;
            case ExhibitedShapeType.DRAW.ID :
                this.exhibitedShapeTypeId = ExhibitedShapeType.DRAW.ID
                this.exhibitedShapeType = ExhibitedShapeType.DRAW.TEXT
                break;
            case ExhibitedShapeType.STRAIGHT.ID :
                this.exhibitedShapeTypeId = ExhibitedShapeType.STRAIGHT.ID
                this.exhibitedShapeType = ExhibitedShapeType.STRAIGHT.TEXT
                break;
            case ExhibitedShapeType.FADE.ID :
                this.exhibitedShapeTypeId = ExhibitedShapeType.FADE.ID
                this.exhibitedShapeType = ExhibitedShapeType.FADE.TEXT
                break;
            case ExhibitedShapeType.SLICE.ID :
                this.exhibitedShapeTypeId = ExhibitedShapeType.SLICE.ID
                this.exhibitedShapeType = ExhibitedShapeType.SLICE.TEXT
                break;
            default :
                this.exhibitedShapeTypeId = ExhibitedShapeType.UNSPECIFIED.ID
                this.exhibitedShapeType = ExhibitedShapeType.UNSPECIFIED.TEXT
                break;
        }
    }
}