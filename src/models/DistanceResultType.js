import DistanceResultTypes from '../utils/DistanceResultTypes';

export default class DistanceResultType {

    static TYPES = DistanceResultTypes;

    distanceResultTypeId;
    distanceResultType;

    get distanceResultTypeId() {
        return this.distanceResultTypeId;
    }
    get distanceResultType() {
        return this.distanceResultType;
    }

    constructor(distanceResultTypeId) {
        switch(distanceResultTypeId) {
            case DistanceResultTypes.WAY_LONG.ID :
                this.distanceResultTypeId = DistanceResultTypes.WAY_LONG.ID
                this.distanceResultType = DistanceResultTypes.WAY_LONG.TEXT
                break;
            case DistanceResultTypes.LONG.ID :
                this.distanceResultTypeId = DistanceResultTypes.LONG.ID
                this.distanceResultType = DistanceResultTypes.LONG.TEXT
                break;
            case DistanceResultTypes.ACCEPTIBLE.ID :
                this.distanceResultTypeId = DistanceResultTypes.ACCEPTIBLE.ID
                this.distanceResultType = DistanceResultTypes.ACCEPTIBLE.TEXT
                break;
            case DistanceResultTypes.SHORT.ID :
                this.distanceResultTypeId = DistanceResultTypes.SHORT.ID
                this.distanceResultType = DistanceResultTypes.SHORT.TEXT
                break;
            case DistanceResultTypes.WAY_SHORT.ID :
                this.distanceResultTypeId = DistanceResultTypes.WAY_SHORT.ID
                this.distanceResultType = DistanceResultTypes.WAY_SHORT.TEXT
                break;
            default :
                this.distanceResultTypeId = DistanceResultTypes.UNSPECIFIED.ID
                this.distanceResultType = DistanceResultTypes.UNSPECIFIED.TEXT
                break;
        }
    }
}