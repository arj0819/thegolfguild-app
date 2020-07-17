import LiePitchTypes from '../utils/LiePitchTypes';

export default class LiePitchType {

    static TYPES = LiePitchTypes;

    liePitchTypeId;
    liePitchType;

    get liePitchTypeId() {
        return this.liePitchTypeId;
    }
    get liePitchType() {
        return this.liePitchType;
    }

    constructor(liePitchTypeId) {
        switch(liePitchTypeId) {
            case LiePitchTypes.WAY_UPHILL.ID :
                this.liePitchTypeId = LiePitchTypes.WAY_UPHILL.ID
                this.liePitchType = LiePitchTypes.WAY_UPHILL.TEXT
                break;
            case LiePitchTypes.UPHILL.ID :
                this.liePitchTypeId = LiePitchTypes.UPHILL.ID
                this.liePitchType = LiePitchTypes.UPHILL.TEXT
                break;
            case LiePitchTypes.LEVEL.ID :
                this.liePitchTypeId = LiePitchTypes.LEVEL.ID
                this.liePitchType = LiePitchTypes.LEVEL.TEXT
                break;
            case LiePitchTypes.DOWNHILL.ID :
                this.liePitchTypeId = LiePitchTypes.DOWNHILL.ID
                this.liePitchType = LiePitchTypes.DOWNHILL.TEXT
                break;
            case LiePitchTypes.WAY_DOWNHILL.ID :
                this.liePitchTypeId = LiePitchTypes.WAY_DOWNHILL.ID
                this.liePitchType = LiePitchTypes.WAY_DOWNHILL.TEXT
                break;
            default :
                this.liePitchTypeId = LiePitchTypes.UNSPECIFIED.ID
                this.liePitchType = LiePitchTypes.UNSPECIFIED.TEXT
                break;
        }
    }
}