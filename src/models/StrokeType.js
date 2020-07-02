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
            case StrokeTypes.APPROACH.ID :
                this.strokeTypeId = StrokeTypes.APPROACH.ID
                this.strokeType = StrokeTypes.APPROACH.TEXT
                break;
            case StrokeTypes.CHIP.ID :
                this.strokeTypeId = StrokeTypes.CHIP.ID
                this.strokeType = StrokeTypes.CHIP.TEXT
                break;
            case StrokeTypes.FLOP.ID :
                this.strokeTypeId = StrokeTypes.FLOP.ID
                this.strokeType = StrokeTypes.FLOP.TEXT
                break;
            case StrokeTypes.LAY_UP.ID :
                this.strokeTypeId = StrokeTypes.LAY_UP.ID
                this.strokeType = StrokeTypes.LAY_UP.TEXT
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
            case StrokeTypes.TEESHOT.ID :
                this.strokeTypeId = StrokeTypes.TEESHOT.ID
                this.strokeType = StrokeTypes.TEESHOT.TEXT
                break;
            default :
                this.strokeTypeId = StrokeTypes.UNSPECIFIED.ID
                this.strokeType = StrokeTypes.UNSPECIFIED.TEXT
                break;
        }
    }
}