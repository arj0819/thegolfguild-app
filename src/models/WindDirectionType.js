import WindDirectionTypes from '../utils/WindDirectionTypes';

export default class WindDirectionType {

    static TYPES = WindDirectionTypes;

    windDirectionTypeId;
    windDirectionType;

    get windDirectionTypeId() {
        return this.windDirectionTypeId;
    }
    get windDirectionType() {
        return this.windDirectionType;
    }

    constructor(windDirectionTypeId) {
        switch(windDirectionTypeId) {
            case WindDirectionTypes.AGAINST.ID :
                this.windDirectionTypeId = WindDirectionTypes.AGAINST.ID
                this.windDirectionType = WindDirectionTypes.AGAINST.TEXT
                break;
            case WindDirectionTypes.HURTING_FROM_RIGHT.ID :
                this.windDirectionTypeId = WindDirectionTypes.HURTING_FROM_RIGHT.ID
                this.windDirectionType = WindDirectionTypes.HURTING_FROM_RIGHT.TEXT
                break;
            case WindDirectionTypes.FROM_RIGHT.ID :
                this.windDirectionTypeId = WindDirectionTypes.FROM_RIGHT.ID
                this.windDirectionType = WindDirectionTypes.FROM_RIGHT.TEXT
                break;
            case WindDirectionTypes.HELPING_FROM_RIGHT.ID :
                this.windDirectionTypeId = WindDirectionTypes.HELPING_FROM_RIGHT.ID
                this.windDirectionType = WindDirectionTypes.HELPING_FROM_RIGHT.TEXT
                break;
            case WindDirectionTypes.WITH.ID :
                this.windDirectionTypeId = WindDirectionTypes.WITH.ID
                this.windDirectionType = WindDirectionTypes.WITH.TEXT
                break;
            case WindDirectionTypes.HELPING_FROM_LEFT.ID :
                this.windDirectionTypeId = WindDirectionTypes.HELPING_FROM_LEFT.ID
                this.windDirectionType = WindDirectionTypes.HELPING_FROM_LEFT.TEXT
                break;
            case WindDirectionTypes.FROM_LEFT.ID :
                this.windDirectionTypeId = WindDirectionTypes.FROM_LEFT.ID
                this.windDirectionType = WindDirectionTypes.FROM_LEFT.TEXT
                break;
            case WindDirectionTypes.HURTING_FROM_LEFT.ID :
                this.windDirectionTypeId = WindDirectionTypes.HURTING_FROM_LEFT.ID
                this.windDirectionType = WindDirectionTypes.HURTING_FROM_LEFT.TEXT
                break;
            default :
                this.windDirectionTypeId = WindDirectionTypes.UNSPECIFIED.ID
                this.windDirectionType = WindDirectionTypes.UNSPECIFIED.TEXT
                break;
        }
    }
}