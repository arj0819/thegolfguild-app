import WindTypes from '../utils/WindTypes';

export default class WindType {

    static TYPES = WindTypes;

    windTypeId;
    windType;

    get windTypeId() {
        return this.windTypeId;
    }
    get windType() {
        return this.windType;
    }

    constructor(windTypeId) {
        switch(windTypeId) {
            case WindTypes.HELPING_LEFT.ID :
                this.windTypeId = WindTypes.HELPING_LEFT.ID
                this.windType = WindTypes.HELPING_LEFT.TEXT
                break;
            case WindTypes.HELPING.ID :
                this.windTypeId = WindTypes.HELPING.ID
                this.windType = WindTypes.HELPING.TEXT
                break;
            case WindTypes.HELPING_RIGHT.ID :
                this.windTypeId = WindTypes.HELPING_RIGHT.ID
                this.windType = WindTypes.HELPING_RIGHT.TEXT
                break;
            case WindTypes.LEFT.ID :
                this.windTypeId = WindTypes.LEFT.ID
                this.windType = WindTypes.LEFT.TEXT
                break;
            case WindTypes.STILL.ID :
                this.windTypeId = WindTypes.STILL.ID
                this.windType = WindTypes.STILL.TEXT
                break;
            case WindTypes.RIGHT.ID :
                this.windTypeId = WindTypes.RIGHT.ID
                this.windType = WindTypes.RIGHT.TEXT
                break;
            case WindTypes.HURTING_LEFT.ID :
                this.windTypeId = WindTypes.HURTING_LEFT.ID
                this.windType = WindTypes.HURTING_LEFT.TEXT
                break;
            case WindTypes.HURTING.ID :
                this.windTypeId = WindTypes.HURTING.ID
                this.windType = WindTypes.HURTING.TEXT
                break;
            case WindTypes.HURTING_RIGHT.ID :
                this.windTypeId = WindTypes.HURTING_RIGHT.ID
                this.windType = WindTypes.HURTING_RIGHT.TEXT
                break;
            default :
                this.windTypeId = WindTypes.UNSPECIFIED.ID
                this.windType = WindTypes.UNSPECIFIED.TEXT
                break;
        }
    }
}