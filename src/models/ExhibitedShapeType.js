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
            case ExhibitedShapeTypes.PULL.ID :
                this.exhibitedShapeTypeId = ExhibitedShapeTypes.PULL.ID
                this.exhibitedShapeType = ExhibitedShapeTypes.PULL.TEXT
                break;
            case ExhibitedShapeTypes.DRAW.ID :
                this.exhibitedShapeTypeId = ExhibitedShapeTypes.DRAW.ID
                this.exhibitedShapeType = ExhibitedShapeTypes.DRAW.TEXT
                break;
            case ExhibitedShapeTypes.STRAIGHT.ID :
                this.exhibitedShapeTypeId = ExhibitedShapeTypes.STRAIGHT.ID
                this.exhibitedShapeType = ExhibitedShapeTypes.STRAIGHT.TEXT
                break;
            case ExhibitedShapeTypes.FADE.ID :
                this.exhibitedShapeTypeId = ExhibitedShapeTypes.FADE.ID
                this.exhibitedShapeType = ExhibitedShapeTypes.FADE.TEXT
                break;
            case ExhibitedShapeTypes.PUSH.ID :
                this.exhibitedShapeTypeId = ExhibitedShapeTypes.PUSH.ID
                this.exhibitedShapeType = ExhibitedShapeTypes.PUSH.TEXT
                break;
            default :
                this.exhibitedShapeTypeId = ExhibitedShapeTypes.UNSPECIFIED.ID
                this.exhibitedShapeType = ExhibitedShapeTypes.UNSPECIFIED.TEXT
                break;
        }
    }
}