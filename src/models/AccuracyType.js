import AccuracyTypes from '../utils/AccuracyTypes';

export default class AccuracyType {

    static TYPES = AccuracyTypes;

    accuracyTypeId;
    accuracyType;

    get accuracyTypeId() {
        return this.accuracyTypeId;
    }
    get accuracyType() {
        return this.accuracyType;
    }

    constructor(accuracyTypeId) {
        switch(accuracyTypeId) {
            case AccuracyTypes.LONG_LEFT.ID :
                this.accuracyTypeId = AccuracyTypes.LONG_LEFT.ID
                this.accuracyType = AccuracyTypes.LONG_LEFT.TEXT
                break;
            case AccuracyTypes.LONG.ID :
                this.accuracyTypeId = AccuracyTypes.LONG.ID
                this.accuracyType = AccuracyTypes.LONG.TEXT
                break;
            case AccuracyTypes.LONG_RIGHT.ID :
                this.accuracyTypeId = AccuracyTypes.LONG_RIGHT.ID
                this.accuracyType = AccuracyTypes.LONG_RIGHT.TEXT
                break;
            case AccuracyTypes.LEFT.ID :
                this.accuracyTypeId = AccuracyTypes.LEFT.ID
                this.accuracyType = AccuracyTypes.LEFT.TEXT
                break;
            case AccuracyTypes.ACCEPTIBLE.ID :
                this.accuracyTypeId = AccuracyTypes.ACCEPTIBLE.ID
                this.accuracyType = AccuracyTypes.ACCEPTIBLE.TEXT
                break;
            case AccuracyTypes.RIGHT.ID :
                this.accuracyTypeId = AccuracyTypes.RIGHT.ID
                this.accuracyType = AccuracyTypes.RIGHT.TEXT
                break;
            case AccuracyTypes.SHORT_LEFT.ID :
                this.accuracyTypeId = AccuracyTypes.SHORT_LEFT.ID
                this.accuracyType = AccuracyTypes.SHORT_LEFT.TEXT
                break;
            case AccuracyTypes.SHORT.ID :
                this.accuracyTypeId = AccuracyTypes.SHORT.ID
                this.accuracyType = AccuracyTypes.SHORT.TEXT
                break;
            case AccuracyTypes.SHORT_RIGHT.ID :
                this.accuracyTypeId = AccuracyTypes.SHORT_RIGHT.ID
                this.accuracyType = AccuracyTypes.SHORT_RIGHT.TEXT
                break;
            default :
                this.accuracyTypeId = AccuracyTypes.UNSPECIFIED.ID
                this.accuracyType = AccuracyTypes.UNSPECIFIED.TEXT
                break;
        }
    }
}