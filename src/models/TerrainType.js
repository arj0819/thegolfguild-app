import TerrainTypes from '../utils/TerrainTypes';

export default class TerrainType {

    static TYPES = TerrainTypes;

    terrainTypeId;
    terrainType;

    get terrainTypeId() {
        return this.terrainTypeId;
    }
    get terrainType() {
        return this.terrainType;
    }

    constructor(terrainTypeId) {
        switch(terrainTypeId) {
            case TerrainTypes.TEEBOX.ID :
                this.terrainTypeId = TerrainTypes.TEEBOX.ID
                this.terrainType = TerrainTypes.TEEBOX.TEXT
                break;
            case TerrainTypes.FAIRWAY_CORRECT.ID :
                this.terrainTypeId = TerrainTypes.FAIRWAY_CORRECT.ID
                this.terrainType = TerrainTypes.FAIRWAY_CORRECT.TEXT
                break;
            case TerrainTypes.FAIRWAY_INCORRECT.ID :
                this.terrainTypeId = TerrainTypes.FAIRWAY_INCORRECT.ID
                this.terrainType = TerrainTypes.FAIRWAY_INCORRECT.TEXT
                break;
            case TerrainTypes.ROUGH_FIRST_CUT.ID :
                this.terrainTypeId = TerrainTypes.ROUGH_FIRST_CUT.ID
                this.terrainType = TerrainTypes.ROUGH_FIRST_CUT.TEXT
                break;
            case TerrainTypes.ROUGH_SECOND_CUT.ID :
                this.terrainTypeId = TerrainTypes.ROUGH_SECOND_CUT.ID
                this.terrainType = TerrainTypes.ROUGH_SECOND_CUT.TEXT
                break;
            case TerrainTypes.FRINGE.ID :
                this.terrainTypeId = TerrainTypes.FRINGE.ID
                this.terrainType = TerrainTypes.FRINGE.TEXT
                break;
            case TerrainTypes.GREEN.ID :
                this.terrainTypeId = TerrainTypes.GREEN.ID
                this.terrainType = TerrainTypes.GREEN.TEXT
                break;
            case TerrainTypes.FAIRWAY_BUNKER.ID :
                this.terrainTypeId = TerrainTypes.FAIRWAY_BUNKER.ID
                this.terrainType = TerrainTypes.FAIRWAY_BUNKER.TEXT
                break;
            case TerrainTypes.GREENSIDE_BUNKER.ID :
                this.terrainTypeId = TerrainTypes.GREENSIDE_BUNKER.ID
                this.terrainType = TerrainTypes.GREENSIDE_BUNKER.TEXT
                break;
            case TerrainTypes.STANDARD_HAZARD.ID :
                this.terrainTypeId = TerrainTypes.STANDARD_HAZARD.ID
                this.terrainType = TerrainTypes.STANDARD_HAZARD.TEXT
                break;
            case TerrainTypes.LATERAL_HAZARD.ID :
                this.terrainTypeId = TerrainTypes.LATERAL_HAZARD.ID
                this.terrainType = TerrainTypes.LATERAL_HAZARD.TEXT
                break;
            case TerrainTypes.OUT_OF_BOUNDS.ID :
                this.terrainTypeId = TerrainTypes.OUT_OF_BOUNDS.ID
                this.terrainType = TerrainTypes.OUT_OF_BOUNDS.TEXT
                break;
            case TerrainTypes.WORSE_THAN_ROUGH.ID :
                this.terrainTypeId = TerrainTypes.WORSE_THAN_ROUGH.ID
                this.terrainType = TerrainTypes.WORSE_THAN_ROUGH.TEXT
                break;
            case TerrainTypes.DESERT.ID :
                this.terrainTypeId = TerrainTypes.DESERT.ID
                this.terrainType = TerrainTypes.DESERT.TEXT
                break;
            case TerrainTypes.UNSPECIFIED.ID :
                this.terrainTypeId = TerrainTypes.UNSPECIFIED.ID
                this.terrainType = TerrainTypes.UNSPECIFIED.TEXT
                break;
            default :
                this.terrainTypeId = TerrainTypes.UNSPECIFIED.ID
                this.terrainType = TerrainTypes.UNSPECIFIED.TEXT
                break;
        }
    }
}