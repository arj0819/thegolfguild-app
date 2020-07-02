<template>
    <v-card outlined>
        <v-container>
            <v-layout wrap align-center>
                <v-flex grow class="pt-0 pb-0">
                    <span class="title">Stroke {{roundStroke.number}}</span>
                </v-flex>
                <v-flex shrink class="pt-0 pb-0 pr-0">
                    <v-btn icon class="pa-0" @click.stop="$emit('setSelectedRoundStroke', roundStroke)">
                        <v-icon>mdi-trash-can-outline</v-icon>
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-container>
        <v-divider/>
            <!-- <v-layout wrap align-center>
                <v-flex xs12 class="pt-0 pb-0">
                    <span class="subtitle-2">Terrain</span>
                </v-flex>
                <v-flex xs6>
                    <v-select 
                        outlined dense color="highContrast" item-color="highContrast"
                        label="Start"
                        :items="TerrainType.TYPES.COLLECTION"
                        item-text="TEXT"
                        item-value="ID"
                        hide-details :loading="true" loader-height="4"
                    >
                        <template v-slot:item="{item}">
                            <span class="caption">{{item.TEXT}}</span>
                        </template>
                        <template v-slot:selection="{item}">
                            <span class="caption">{{item.TEXT}}</span>
                        </template>
                    </v-select>
                </v-flex>
                <v-flex xs6>
                    <v-select 
                        outlined dense color="highContrast" item-color="highContrast"
                        label="Result"
                        :items="TerrainType.TYPES.COLLECTION"
                        item-text="TEXT"
                        item-value="ID"
                        hide-details :loading="true" loader-height="4"
                    >
                        <template v-slot:item="{item}">
                            <span class="caption">{{item.TEXT}}</span>
                        </template>
                        <template v-slot:selection="{item}">
                            <span class="caption">{{item.TEXT}}</span>
                        </template>
                    </v-select>
                </v-flex>
                <v-flex xs12>
                    <v-item-group>
                        <v-layout wrap align-center justify-center>
                            
                        <v-item
                            v-for="terrain in TerrainType.TYPES.COLLECTION"
                            :key="terrain.ID"
                            v-slot:default="{ active, toggle }"
                        >
                            <v-flex shrink class="pa-1">
                                <v-chip label small
                                    active-class="purple--text"
                                    :input-value="active"
                                    @click="toggle"
                                >
                                    <span class="caption">{{terrain.TEXT}}</span>
                                </v-chip>
                            </v-flex>
                        </v-item>
                        </v-layout>
                    </v-item-group>
                </v-flex>
            </v-layout> -->
            <!-- <v-card flat outlined> -->
                <v-expansion-panels accordion>
                    <v-expansion-panel>
                        <v-expansion-panel-header class="mb-n2">
                            <template v-slot:default="{ open }">
                                <v-layout wrap align-center>
                                    <v-flex shrink>
                                        <span class="caption font-weight-medium">Type</span>
                                    </v-flex>
                                    <v-flex shrink>
                                        <v-fade-transition>
                                            <span class="caption" v-if="!open">{{roundStroke.strokeType?roundStroke.strokeType.TEXT:''}}</span>
                                        </v-fade-transition>
                                    </v-flex>
                                </v-layout>
                            </template>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-layout wrap align-center>
                                <v-flex xs12>
                                    <v-select 
                                        v-model="roundStroke.strokeType"
                                        outlined dense color="highContrast" item-color="highContrast"
                                        label="Stroke Type"
                                        :items="StrokeType.TYPES.COLLECTION"
                                        item-text="TEXT"
                                        item-value="ID"
                                        return-object
                                        hide-details :loading="true" loader-height="4"
                                    >
                                        <template v-slot:item="{item}">
                                            <span class="caption">{{item.TEXT}}</span>
                                        </template>
                                        <template v-slot:selection="{item}">
                                            <span class="caption">{{item.TEXT}}</span>
                                        </template>
                                    </v-select>
                                </v-flex>
                            </v-layout>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-header class="mb-n2">
                            <template v-slot:default="{open}">
                                <v-layout wrap align-center>
                                    <v-flex shrink>
                                        <span class="caption font-weight-medium">Terrain</span>
                                    </v-flex>
                                    <v-flex shrink>
                                        <v-fade-transition>
                                            <span class="caption" v-if="!open">{{roundStroke.terrainTypeStart?roundStroke.terrainTypeStart.TEXT:''}}</span>
                                        </v-fade-transition>
                                    </v-flex>
                                    <v-flex shrink>
                                        <v-fade-transition>
                                            <span class="caption" v-if="!open">{{roundStroke.terrainTypeResult?roundStroke.terrainTypeResult.TEXT:''}}</span>
                                        </v-fade-transition>
                                    </v-flex>
                                </v-layout>
                            </template>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-layout wrap align-center>
                                <v-flex xs6>
                                    <v-select 
                                        v-model="roundStroke.terrainTypeStart"
                                        outlined dense color="highContrast" item-color="highContrast"
                                        label="Start"
                                        :items="TerrainType.TYPES.COLLECTION"
                                        item-text="TEXT"
                                        item-value="ID"
                                        return-object
                                        hide-details :loading="true" loader-height="4"
                                    >
                                        <template v-slot:item="{item}">
                                            <span class="caption">{{item.TEXT}}</span>
                                        </template>
                                        <template v-slot:selection="{item}">
                                            <span class="caption">{{item.TEXT}}</span>
                                        </template>
                                    </v-select>
                                </v-flex>
                                <v-flex xs6>
                                    <v-select 
                                        v-model="roundStroke.terrainTypeResult"
                                        outlined dense color="highContrast" item-color="highContrast"
                                        label="Result"
                                        :items="TerrainType.TYPES.COLLECTION"
                                        item-text="TEXT"
                                        item-value="ID"
                                        return-object
                                        hide-details :loading="true" loader-height="4"
                                    >
                                        <template v-slot:item="{item}">
                                            <span class="caption">{{item.TEXT}}</span>
                                        </template>
                                        <template v-slot:selection="{item}">
                                            <span class="caption">{{item.TEXT}}</span>
                                        </template>
                                    </v-select>
                                </v-flex>
                            </v-layout>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-header class="mb-n2">
                            <template v-slot:default="{open}">
                                <v-layout wrap align-center>
                                    <v-flex shrink>
                                        <span class="caption font-weight-medium">Curve</span>
                                    </v-flex>
                                    <v-flex shrink>
                                        <v-fade-transition>
                                            <span class="caption" v-if="!open">{{roundStroke.curveIntendedType?roundStroke.curveIntendedType.TEXT:''}}</span>
                                        </v-fade-transition>
                                    </v-flex>
                                    <v-flex shrink>
                                        <v-fade-transition>
                                            <span class="caption" v-if="!open">{{roundStroke.curveResultType?roundStroke.curveResultType.TEXT:''}}</span>
                                        </v-fade-transition>
                                    </v-flex>
                                </v-layout>
                            </template>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-layout wrap align-center>
                                <v-flex xs6>
                                    <v-select 
                                        v-model="roundStroke.curveIntendedType"
                                        outlined dense color="highContrast" item-color="highContrast"
                                        label="Intended"
                                        :items="TerrainType.TYPES.COLLECTION"
                                        item-text="TEXT"
                                        item-value="ID"
                                        return-object
                                        hide-details :loading="true" loader-height="4"
                                    >
                                        <template v-slot:item="{item}">
                                            <span class="caption">{{item.TEXT}}</span>
                                        </template>
                                        <template v-slot:selection="{item}">
                                            <span class="caption">{{item.TEXT}}</span>
                                        </template>
                                    </v-select>
                                </v-flex>
                                <v-flex xs6>
                                    <v-select 
                                        v-model="roundStroke.curveResultType"
                                        outlined dense color="highContrast" item-color="highContrast"
                                        label="Result"
                                        :items="TerrainType.TYPES.COLLECTION"
                                        item-text="TEXT"
                                        item-value="ID"
                                        return-object
                                        hide-details :loading="true" loader-height="4"
                                    >
                                        <template v-slot:item="{item}">
                                            <span class="caption">{{item.TEXT}}</span>
                                        </template>
                                        <template v-slot:selection="{item}">
                                            <span class="caption">{{item.TEXT}}</span>
                                        </template>
                                    </v-select>
                                </v-flex>
                            </v-layout>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-header class="mb-n2">
                            <template v-slot:default="{open}">
                                <v-layout wrap align-center>
                                    <v-flex shrink>
                                        <span class="caption font-weight-medium">Height</span>
                                    </v-flex>
                                    <v-flex shrink>
                                        <v-fade-transition>
                                            <span class="caption" v-if="!open">{{roundStroke.heightIntendedType?roundStroke.heightIntendedType.TEXT:''}}</span>
                                        </v-fade-transition>
                                    </v-flex>
                                    <v-flex shrink>
                                        <v-fade-transition>
                                            <span class="caption" v-if="!open">{{roundStroke.heightResultType?roundStroke.heightResultType.TEXT:''}}</span>
                                        </v-fade-transition>
                                    </v-flex>
                                </v-layout>
                            </template>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-layout wrap align-center>
                                <v-flex xs6>
                                    <v-select 
                                        v-model="roundStroke.heightIntendedType"
                                        outlined dense color="highContrast" item-color="highContrast"
                                        label="Intended"
                                        :items="TerrainType.TYPES.COLLECTION"
                                        item-text="TEXT"
                                        item-value="ID"
                                        return-object
                                        hide-details :loading="true" loader-height="4"
                                    >
                                        <template v-slot:item="{item}">
                                            <span class="caption">{{item.TEXT}}</span>
                                        </template>
                                        <template v-slot:selection="{item}">
                                            <span class="caption">{{item.TEXT}}</span>
                                        </template>
                                    </v-select>
                                </v-flex>
                                <v-flex xs6>
                                    <v-select 
                                        v-model="roundStroke.heightResultType"
                                        outlined dense color="highContrast" item-color="highContrast"
                                        label="Result"
                                        :items="TerrainType.TYPES.COLLECTION"
                                        item-text="TEXT"
                                        item-value="ID"
                                        return-object
                                        hide-details :loading="true" loader-height="4"
                                    >
                                        <template v-slot:item="{item}">
                                            <span class="caption">{{item.TEXT}}</span>
                                        </template>
                                        <template v-slot:selection="{item}">
                                            <span class="caption">{{item.TEXT}}</span>
                                        </template>
                                    </v-select>
                                </v-flex>
                            </v-layout>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-header class="mb-n2">
                            <span class="caption font-weight-medium">Lie</span>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-layout wrap align-center>
                                <v-flex xs6>
                                    <v-select 
                                        outlined dense color="highContrast" item-color="highContrast"
                                        label="Angle"
                                        :items="TerrainType.TYPES.COLLECTION"
                                        item-text="TEXT"
                                        item-value="ID"
                                        return-object
                                        hide-details :loading="true" loader-height="4"
                                    >
                                        <template v-slot:item="{item}">
                                            <span class="caption">{{item.TEXT}}</span>
                                        </template>
                                        <template v-slot:selection="{item}">
                                            <span class="caption">{{item.TEXT}}</span>
                                        </template>
                                    </v-select>
                                </v-flex>
                                <v-flex xs6>
                                    <v-select 
                                        outlined dense color="highContrast" item-color="highContrast"
                                        label="Pitch"
                                        :items="TerrainType.TYPES.COLLECTION"
                                        item-text="TEXT"
                                        item-value="ID"
                                        return-object
                                        hide-details :loading="true" loader-height="4"
                                    >
                                        <template v-slot:item="{item}">
                                            <span class="caption">{{item.TEXT}}</span>
                                        </template>
                                        <template v-slot:selection="{item}">
                                            <span class="caption">{{item.TEXT}}</span>
                                        </template>
                                    </v-select>
                                </v-flex>
                                <v-flex xs6>
                                    <v-select 
                                        outlined dense color="highContrast" item-color="highContrast"
                                        label="Condition"
                                        :items="TerrainType.TYPES.COLLECTION"
                                        item-text="TEXT"
                                        item-value="ID"
                                        return-object
                                        hide-details :loading="true" loader-height="4"
                                    >
                                        <template v-slot:item="{item}">
                                            <span class="caption">{{item.TEXT}}</span>
                                        </template>
                                        <template v-slot:selection="{item}">
                                            <span class="caption">{{item.TEXT}}</span>
                                        </template>
                                    </v-select>
                                </v-flex>
                            </v-layout>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-header class="mb-n2">
                            <span class="caption font-weight-medium">Break</span>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-layout wrap align-center>
                                <v-flex xs6>
                                    <v-select 
                                        outlined dense color="highContrast" item-color="highContrast"
                                        label="Read"
                                        :items="TerrainType.TYPES.COLLECTION"
                                        item-text="TEXT"
                                        item-value="ID"
                                        return-object
                                        hide-details :loading="true" loader-height="4"
                                    >
                                        <template v-slot:item="{item}">
                                            <span class="caption">{{item.TEXT}}</span>
                                        </template>
                                        <template v-slot:selection="{item}">
                                            <span class="caption">{{item.TEXT}}</span>
                                        </template>
                                    </v-select>
                                </v-flex>
                                <v-flex xs6>
                                    <v-select 
                                        outlined dense color="highContrast" item-color="highContrast"
                                        label="Result"
                                        :items="TerrainType.TYPES.COLLECTION"
                                        item-text="TEXT"
                                        item-value="ID"
                                        return-object
                                        hide-details :loading="true" loader-height="4"
                                    >
                                        <template v-slot:item="{item}">
                                            <span class="caption">{{item.TEXT}}</span>
                                        </template>
                                        <template v-slot:selection="{item}">
                                            <span class="caption">{{item.TEXT}}</span>
                                        </template>
                                    </v-select>
                                </v-flex>
                            </v-layout>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-header class="mb-n2">
                            <span class="caption font-weight-medium">Wind</span>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-layout wrap align-center>
                                <v-flex xs6>
                                    <v-select 
                                        outlined dense color="highContrast" item-color="highContrast"
                                        label="Direction"
                                        :items="TerrainType.TYPES.COLLECTION"
                                        item-text="TEXT"
                                        item-value="ID"
                                        return-object
                                        hide-details :loading="true" loader-height="4"
                                    >
                                        <template v-slot:item="{item}">
                                            <span class="caption">{{item.TEXT}}</span>
                                        </template>
                                        <template v-slot:selection="{item}">
                                            <span class="caption">{{item.TEXT}}</span>
                                        </template>
                                    </v-select>
                                </v-flex>
                                <v-flex xs6>
                                    <v-select 
                                        outlined dense color="highContrast" item-color="highContrast"
                                        label="Strength"
                                        :items="TerrainType.TYPES.COLLECTION"
                                        item-text="TEXT"
                                        item-value="ID"
                                        return-object
                                        hide-details :loading="true" loader-height="4"
                                    >
                                        <template v-slot:item="{item}">
                                            <span class="caption">{{item.TEXT}}</span>
                                        </template>
                                        <template v-slot:selection="{item}">
                                            <span class="caption">{{item.TEXT}}</span>
                                        </template>
                                    </v-select>
                                </v-flex>
                            </v-layout>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            <!-- </v-card> -->
        <!-- </v-container> -->
    </v-card>
</template>


<script>
import TerrainType from '../models/TerrainType';
import StrokeType from '../models/StrokeType';

export default {
    name: "RoundStroke",

    props: {
        compact: Boolean,
        roundHole: Object,
        roundStroke: Object,
        previousRoundStroke: Object,
    },

    data: () => ({
        TerrainType: TerrainType,
        StrokeType: StrokeType,
    }),

    watch: {
        
    },

    computed: {
        
    },

    created() {
        
    },

    methods: {
        
    }
};
</script>

<style>

    .v-expansion-panel::before {
        box-shadow: none !important;
    }

    .v-expansion-panel-content__wrap {
        padding: .7rem !important;
    }

    .v-expansion-panel-header {
        padding: .7rem !important;
    }

    .v-expansion-panel-header--active {
        min-height: 0rem !important;
    }

    .v-expansion-panel-header__icon {
        margin-top: -.7rem !important;
    }
</style>