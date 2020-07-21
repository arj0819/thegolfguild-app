import YesNoTypes from '../utils/YesNoTypes';

export default class YesNoType {

    static TYPES = YesNoTypes;

    yesNoTypeId;
    yesNoType;

    get yesNoTypeId() {
        return this.yesNoTypeId;
    }
    get yesNoType() {
        return this.yesNoType;
    }

    constructor(yesNoTypeId) {
        switch(yesNoTypeId) {
            case YesNoTypes.NO.ID :
                this.yesNoTypeId = YesNoTypes.NO.ID
                this.yesNoType = YesNoTypes.NO.TEXT
                break;
            case YesNoTypes.YES.ID :
                this.yesNoTypeId = YesNoTypes.YES.ID
                this.yesNoType = YesNoTypes.YES.TEXT
                break;
            default :
                this.yesNoTypeId = YesNoTypes.UNSPECIFIED.ID
                this.yesNoType = YesNoTypes.UNSPECIFIED.TEXT
                break;
        }
    }
}