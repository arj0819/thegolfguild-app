import LeaveQualityTypes from '../utils/LeaveQualityTypes';

export default class LeaveQualityType {

    static TYPES = LeaveQualityTypes;

    leaveQualityTypeId;
    leaveQualityType;

    get leaveQualityTypeId() {
        return this.leaveQualityTypeId;
    }
    get leaveQualityType() {
        return this.leaveQualityType;
    }

    constructor(leaveQualityTypeId) {
        switch(leaveQualityTypeId) {
            case LeaveQualityTypes.GOOD.ID :
                this.leaveQualityTypeId = LeaveQualityTypes.GOOD.ID
                this.leaveQualityType = LeaveQualityTypes.GOOD.TEXT
                break;
            case LeaveQualityTypes.AVERAGE.ID :
                this.leaveQualityTypeId = LeaveQualityTypes.AVERAGE.ID
                this.leaveQualityType = LeaveQualityTypes.AVERAGE.TEXT
                break;
            case LeaveQualityTypes.BAD.ID :
                this.leaveQualityTypeId = LeaveQualityTypes.BAD.ID
                this.leaveQualityType = LeaveQualityTypes.BAD.TEXT
                break;
            default :
                this.leaveQualityTypeId = LeaveQualityTypes.UNSPECIFIED.ID
                this.leaveQualityType = LeaveQualityTypes.UNSPECIFIED.TEXT
                break;
        }
    }
}