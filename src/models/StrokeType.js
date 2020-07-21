import StrokeTypes from '../utils/StrokeTypes';

export default class StrokeType {

    static TYPES = StrokeTypes;

    strokeTypeId;
    strokeType;

    get strokeTypeId() {
        return this.strokeTypeId;
    }
    get strokeType() {
        return this.strokeType;
    }

    constructor(strokeTypeId) {
        switch(strokeTypeId) {
            case StrokeTypes.CHIP.ID :
                this.strokeTypeId = StrokeTypes.CHIP.ID
                this.strokeType = StrokeTypes.CHIP.TEXT
                break;
            case StrokeTypes.FLOP.ID :
                this.strokeTypeId = StrokeTypes.FLOP.ID
                this.strokeType = StrokeTypes.FLOP.TEXT
                break;
            case StrokeTypes.FULL.ID :
                this.strokeTypeId = StrokeTypes.FULL.ID
                this.strokeType = StrokeTypes.FULL.TEXT
                break;
            case StrokeTypes.PITCH.ID :
                this.strokeTypeId = StrokeTypes.PITCH.ID
                this.strokeType = StrokeTypes.PITCH.TEXT
                break;
            case StrokeTypes.PUNCH.ID :
                this.strokeTypeId = StrokeTypes.PUNCH.ID
                this.strokeType = StrokeTypes.PUNCH.TEXT
                break;
            case StrokeTypes.PUTT_LONG.ID :
                this.strokeTypeId = StrokeTypes.PUTT_LONG.ID
                this.strokeType = StrokeTypes.PUTT_LONG.TEXT
                break;
            case StrokeTypes.PUTT_MEDIUM.ID :
                this.strokeTypeId = StrokeTypes.PUTT_MEDIUM.ID
                this.strokeType = StrokeTypes.PUTT_MEDIUM.TEXT
                break;
            case StrokeTypes.PUTT_SHORT.ID :
                this.strokeTypeId = StrokeTypes.PUTT_SHORT.ID
                this.strokeType = StrokeTypes.PUTT_SHORT.TEXT
                break;
            default :
                this.strokeTypeId = StrokeTypes.UNSPECIFIED.ID
                this.strokeType = StrokeTypes.UNSPECIFIED.TEXT
                break;
        }
    }
}