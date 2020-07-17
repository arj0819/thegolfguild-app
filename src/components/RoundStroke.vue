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
                        hide-details :loading="false" loader-height="4"
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
                        hide-details :loading="false" loader-height="4"
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
                                            <span class="caption" v-if="!open && roundStroke.strokeTypeId !== null">{{StrokeType.TYPES.COLLECTION[roundStroke.strokeTypeId].TEXT}}</span>
                                            <v-icon v-else-if="!open" small color="grey">mdi-minus</v-icon>
                                        </v-fade-transition>
                                    </v-flex>
                                </v-layout>
                            </template>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-layout wrap align-center>
                                <v-flex xs12>
                                    <v-select 
                                        v-model="roundStroke.strokeTypeId"
                                        outlined dense color="highContrast" item-color="highContrast"
                                        label="Stroke Type"
                                        :items="StrokeType.TYPES.COLLECTION"
                                        item-text="TEXT"
                                        item-value="ID"
                                        return-object
                                        hide-details :loading="false" loader-height="4"
                                        @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, strokeTypeId: roundStroke.strokeTypeId.ID})"
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
                                            <span class="caption" v-if="!open && roundStroke.terrainStartTypeId !== null">{{TerrainType.TYPES.COLLECTION[roundStroke.terrainStartTypeId].TEXT}}</span>
                                            <v-icon v-else-if="!open" small color="grey">mdi-minus</v-icon>
                                        </v-fade-transition>
                                    </v-flex>
                                    <v-flex shrink>
                                        <v-fade-transition>
                                            <span class="caption" v-if="!open && roundStroke.terrainIntendedTypeId !== null">{{TerrainType.TYPES.COLLECTION[roundStroke.terrainIntendedTypeId].TEXT}}</span>
                                            <v-icon v-else-if="!open" small color="grey">mdi-minus</v-icon>
                                        </v-fade-transition>
                                    </v-flex>
                                    <v-flex shrink>
                                        <v-fade-transition>
                                            <span class="caption" v-if="!open && roundStroke.terrainResultTypeId !== null">{{TerrainType.TYPES.COLLECTION[roundStroke.terrainResultTypeId].TEXT}}</span>
                                            <v-icon v-else-if="!open" small color="grey">mdi-minus</v-icon>
                                        </v-fade-transition>
                                    </v-flex>
                                </v-layout>
                            </template>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-layout wrap align-center>
                                <v-flex xs6>
                                    <v-select 
                                        v-model="roundStroke.terrainStartTypeId"
                                        outlined dense color="highContrast" item-color="highContrast"
                                        label="Start"
                                        :items="TerrainType.TYPES.COLLECTION"
                                        item-text="TEXT"
                                        item-value="ID"
                                        return-object
                                        hide-details :loading="false" loader-height="4"
                                        @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, terrainStartTypeId: roundStroke.terrainStartTypeId.ID})"
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
                                        v-model="roundStroke.terrainIntendedTypeId"
                                        outlined dense color="highContrast" item-color="highContrast"
                                        label="Intended"
                                        :items="TerrainType.TYPES.COLLECTION"
                                        item-text="TEXT"
                                        item-value="ID"
                                        return-object
                                        hide-details :loading="false" loader-height="4"
                                        @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, terrainIntendedTypeId: roundStroke.terrainIntendedTypeId.ID})"
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
                                    <v-select 
                                        v-model="roundStroke.terrainResultTypeId"
                                        outlined dense color="highContrast" item-color="highContrast"
                                        label="Result"
                                        :items="TerrainType.TYPES.COLLECTION"
                                        item-text="TEXT"
                                        item-value="ID"
                                        return-object
                                        hide-details :loading="false" loader-height="4"
                                        @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, terrainResultTypeId: roundStroke.terrainResultTypeId.ID})"
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
                    <v-expansion-panel v-if="roundStroke.strokeTypeId === 5 || roundStroke.strokeTypeId === 6 ||roundStroke.strokeTypeId === 7">
                        <v-expansion-panel-header class="mb-n2">
                            <template v-slot:default="{open}">
                                <v-layout wrap align-center>
                                    <v-flex shrink>
                                        <span class="caption font-weight-medium">Break</span>
                                    </v-flex>
                                    <v-flex shrink>
                                        <v-fade-transition>
                                            <span class="caption" v-if="!open && roundStroke.breakLateralReadTypeId !== null">{{BreakLateralType.TYPES.COLLECTION[roundStroke.breakLateralReadTypeId].TEXT}}</span>
                                            <v-icon v-else-if="!open" small color="grey">mdi-minus</v-icon>
                                        </v-fade-transition>
                                    </v-flex>
                                    <v-flex shrink>
                                        <v-fade-transition>
                                            <span class="caption" v-if="!open && roundStroke.breakLateralResultTypeId !== null">{{BreakLateralType.TYPES.COLLECTION[roundStroke.breakLateralResultTypeId].TEXT}}</span>
                                            <v-icon v-else-if="!open" small color="grey">mdi-minus</v-icon>
                                        </v-fade-transition>
                                    </v-flex>
                                    <v-flex shrink>
                                        <v-fade-transition>
                                            <span class="caption" v-if="!open && roundStroke.breakVerticalReadTypeId !== null">{{BreakVerticalType.TYPES.COLLECTION[roundStroke.breakVerticalReadTypeId].TEXT}}</span>
                                            <v-icon v-else-if="!open" small color="grey">mdi-minus</v-icon>
                                        </v-fade-transition>
                                    </v-flex>
                                    <v-flex shrink>
                                        <v-fade-transition>
                                            <span class="caption" v-if="!open && roundStroke.breakVerticalResultTypeId !== null">{{BreakVerticalType.TYPES.COLLECTION[roundStroke.breakVerticalResultTypeId].TEXT}}</span>
                                            <v-icon v-else-if="!open" small color="grey">mdi-minus</v-icon>
                                        </v-fade-transition>
                                    </v-flex>
                                </v-layout>
                            </template>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-layout wrap align-center>
                                <v-flex xs6>
                                    <v-select 
                                        v-model="roundStroke.breakLateralReadTypeId"
                                        outlined dense color="highContrast" item-color="highContrast"
                                        label="Lateral Read"
                                        :items="BreakLateralType.TYPES.COLLECTION"
                                        item-text="TEXT"
                                        item-value="ID"
                                        return-object
                                        hide-details :loading="false" loader-height="4"
                                        @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, breakLateralReadTypeId: roundStroke.breakLateralReadTypeId.ID})"
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
                                        v-model="roundStroke.breakLateralResultTypeId"
                                        outlined dense color="highContrast" item-color="highContrast"
                                        label="Lateral Result"
                                        :items="BreakLateralType.TYPES.COLLECTION"
                                        item-text="TEXT"
                                        item-value="ID"
                                        return-object
                                        hide-details :loading="false" loader-height="4"
                                        @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, breakLateralResultTypeId: roundStroke.breakLateralResultTypeId.ID})"
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
                                        v-model="roundStroke.breakVerticalReadTypeId"
                                        outlined dense color="highContrast" item-color="highContrast"
                                        label="Vertical Read"
                                        :items="BreakVerticalType.TYPES.COLLECTION"
                                        item-text="TEXT"
                                        item-value="ID"
                                        return-object
                                        hide-details :loading="false" loader-height="4"
                                        @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, breakVerticalReadTypeId: roundStroke.breakVerticalReadTypeId.ID})"
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
                                        v-model="roundStroke.breakVerticalResultTypeId"
                                        outlined dense color="highContrast" item-color="highContrast"
                                        label="Vertical Result"
                                        :items="BreakVerticalType.TYPES.COLLECTION"
                                        item-text="TEXT"
                                        item-value="ID"
                                        return-object
                                        hide-details :loading="false" loader-height="4"
                                        @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, breakVerticalResultTypeId: roundStroke.breakVerticalResultTypeId.ID})"
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
                    <v-expansion-panel v-else>
                        <v-expansion-panel-header class="mb-n2">
                            <template v-slot:default="{open}">
                                <v-layout wrap align-center>
                                    <v-flex shrink>
                                        <span class="caption font-weight-medium">Curve</span>
                                    </v-flex>
                                    <v-flex shrink>
                                        <v-fade-transition>
                                            <span class="caption" v-if="!open && roundStroke.curveIntendedTypeId !== null">{{CurveType.TYPES.COLLECTION[roundStroke.curveIntendedTypeId].TEXT}}</span>
                                            <v-icon v-else-if="!open" small color="grey">mdi-minus</v-icon>
                                        </v-fade-transition>
                                    </v-flex>
                                    <v-flex shrink>
                                        <v-fade-transition>
                                            <span class="caption" v-if="!open && roundStroke.curveResultTypeId !== null">{{CurveType.TYPES.COLLECTION[roundStroke.curveResultTypeId].TEXT}}</span>
                                            <v-icon v-else-if="!open" small color="grey">mdi-minus</v-icon>
                                        </v-fade-transition>
                                    </v-flex>
                                </v-layout>
                            </template>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-layout wrap align-center>
                                <v-flex xs6>
                                    <v-select 
                                        v-model="roundStroke.curveIntendedTypeId"
                                        outlined dense color="highContrast" item-color="highContrast"
                                        label="Intended"
                                        :items="CurveType.TYPES.COLLECTION"
                                        item-text="TEXT"
                                        item-value="ID"
                                        return-object
                                        hide-details :loading="false" loader-height="4"
                                        @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, curveIntendedTypeId: roundStroke.curveIntendedTypeId.ID})"
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
                                        v-model="roundStroke.curveResultTypeId"
                                        outlined dense color="highContrast" item-color="highContrast"
                                        label="Result"
                                        :items="CurveType.TYPES.COLLECTION"
                                        item-text="TEXT"
                                        item-value="ID"
                                        return-object
                                        hide-details :loading="false" loader-height="4"
                                        @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, curveResultTypeId: roundStroke.curveResultTypeId.ID})"
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
                                        <span class="caption font-weight-medium">Distance</span>
                                    </v-flex>
                                    <v-flex shrink>
                                        <v-fade-transition>
                                            <span class="caption" v-if="!open && roundStroke.distanceResultTypeId !== null">{{DistanceResultType.TYPES.COLLECTION[roundStroke.distanceResultTypeId].TEXT}}</span>
                                            <v-icon v-else-if="!open" small color="grey">mdi-minus</v-icon>
                                        </v-fade-transition>
                                    </v-flex>
                                </v-layout>
                            </template>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-layout wrap align-center>
                                <v-flex xs12>
                                    <v-select 
                                        v-model="roundStroke.distanceResultTypeId"
                                        outlined dense color="highContrast" item-color="highContrast"
                                        label="Result"
                                        :items="DistanceResultType.TYPES.COLLECTION"
                                        item-text="TEXT"
                                        item-value="ID"
                                        return-object
                                        hide-details :loading="false" loader-height="4"
                                        @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, distanceResultTypeId: roundStroke.distanceResultTypeId.ID})"
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
                                        <span class="caption font-weight-medium">Lateral</span>
                                    </v-flex>
                                    <v-flex shrink>
                                        <v-fade-transition>
                                            <span class="caption" v-if="!open && roundStroke.lateralResultTypeId !== null">{{LateralResultType.TYPES.COLLECTION[roundStroke.lateralResultTypeId].TEXT}}</span>
                                            <v-icon v-else-if="!open" small color="grey">mdi-minus</v-icon>
                                        </v-fade-transition>
                                    </v-flex>
                                </v-layout>
                            </template>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-layout wrap align-center>
                                <v-flex xs12>
                                    <v-select 
                                        v-model="roundStroke.lateralResultTypeId"
                                        outlined dense color="highContrast" item-color="highContrast"
                                        label="Result"
                                        :items="LateralResultType.TYPES.COLLECTION"
                                        item-text="TEXT"
                                        item-value="ID"
                                        return-object
                                        hide-details :loading="false" loader-height="4"
                                        @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, lateralResultTypeId: roundStroke.lateralResultTypeId.ID})"
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
                                        <span class="caption font-weight-medium">Lie</span>
                                    </v-flex>
                                    <v-flex shrink>
                                        <v-fade-transition>
                                            <span class="caption" v-if="!open && roundStroke.lieAngleTypeId !== null">{{LieAngleType.TYPES.COLLECTION[roundStroke.lieAngleTypeId].TEXT}}</span>
                                            <v-icon v-else-if="!open" small color="grey">mdi-minus</v-icon>
                                        </v-fade-transition>
                                    </v-flex>
                                    <v-flex shrink>
                                        <v-fade-transition>
                                            <span class="caption" v-if="!open && roundStroke.liePitchTypeId !== null">{{LiePitchType.TYPES.COLLECTION[roundStroke.liePitchTypeId].TEXT}}</span>
                                            <v-icon v-else-if="!open" small color="grey">mdi-minus</v-icon>
                                        </v-fade-transition>
                                    </v-flex>
                                    <v-flex shrink>
                                        <v-fade-transition>
                                            <span class="caption" v-if="!open && roundStroke.lieConditionTypeId !== null ">{{LieConditionType.TYPES.COLLECTION[roundStroke.lieConditionTypeId].TEXT}}</span>
                                            <v-icon v-else-if="!open" small color="grey">mdi-minus</v-icon>
                                        </v-fade-transition>
                                    </v-flex>
                                </v-layout>
                            </template>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-layout wrap align-center>
                                <v-flex xs6>
                                    <v-select 
                                        v-model="roundStroke.lieAngleTypeId"
                                        outlined dense color="highContrast" item-color="highContrast"
                                        label="Angle"
                                        :items="LieAngleType.TYPES.COLLECTION"
                                        item-text="TEXT"
                                        item-value="ID"
                                        return-object
                                        hide-details :loading="false" loader-height="4"
                                        @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, lieAngleTypeId: roundStroke.lieAngleTypeId.ID})"
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
                                        v-model="roundStroke.liePitchTypeId"
                                        outlined dense color="highContrast" item-color="highContrast"
                                        label="Pitch"
                                        :items="LiePitchType.TYPES.COLLECTION"
                                        item-text="TEXT"
                                        item-value="ID"
                                        return-object
                                        hide-details :loading="false" loader-height="4"
                                        @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, liePitchTypeId: roundStroke.liePitchTypeId.ID})"
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
                                    <v-select 
                                        v-model="roundStroke.lieConditionTypeId"
                                        outlined dense color="highContrast" item-color="highContrast"
                                        label="Condition"
                                        :items="LieConditionType.TYPES.COLLECTION"
                                        item-text="TEXT"
                                        item-value="ID"
                                        return-object
                                        hide-details :loading="false" loader-height="4"
                                        @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, lieConditionTypeId: roundStroke.lieConditionTypeId.ID})"
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
                                        <span class="caption font-weight-medium">Wind</span>
                                    </v-flex>
                                    <v-flex shrink>
                                        <v-fade-transition>
                                            <span class="caption" v-if="!open && roundStroke.windDirectionTypeId !== null">{{WindDirectionType.TYPES.COLLECTION[roundStroke.windDirectionTypeId].TEXT}}</span>
                                            <v-icon v-else-if="!open" small color="grey">mdi-minus</v-icon>
                                        </v-fade-transition>
                                    </v-flex>
                                    <v-flex shrink>
                                        <v-fade-transition>
                                            <span class="caption" v-if="!open && roundStroke.windStrengthTypeId !== null">{{WindStrengthType.TYPES.COLLECTION[roundStroke.windStrengthTypeId].TEXT}}</span>
                                            <v-icon v-else-if="!open" small color="grey">mdi-minus</v-icon>
                                        </v-fade-transition>
                                    </v-flex>
                                </v-layout>
                            </template>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-layout wrap align-center>
                                <v-flex xs6>
                                    <v-select 
                                        v-model="roundStroke.windDirectionTypeId"
                                        outlined dense color="highContrast" item-color="highContrast"
                                        label="Direction"
                                        :items="WindDirectionType.TYPES.COLLECTION"
                                        item-text="TEXT"
                                        item-value="ID"
                                        return-object
                                        hide-details :loading="false" loader-height="4"
                                        @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, windDirectionTypeId: roundStroke.windDirectionTypeId.ID})"
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
                                        v-model="roundStroke.windStrengthTypeId"
                                        outlined dense color="highContrast" item-color="highContrast"
                                        label="Strength"
                                        :items="WindStrengthType.TYPES.COLLECTION"
                                        item-text="TEXT"
                                        item-value="ID"
                                        return-object
                                        hide-details :loading="false" loader-height="4"
                                        @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, windStrengthTypeId: roundStroke.windStrengthTypeId.ID})"
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
                                        <span class="caption font-weight-medium">Satisfaction</span>
                                    </v-flex>
                                    <v-flex shrink>
                                        <v-fade-transition>
                                            <span class="caption" v-if="!open && roundStroke.strokeSatisfactionTypeId !== null">{{StrokeSatisfactionType.TYPES.COLLECTION[roundStroke.strokeSatisfactionTypeId].TEXT}}</span>
                                            <v-icon v-else-if="!open" small color="grey">mdi-minus</v-icon>
                                        </v-fade-transition>
                                    </v-flex>
                                </v-layout>
                            </template>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-layout wrap align-center>
                                <v-flex xs12>
                                    <v-select 
                                        v-model="roundStroke.strokeSatisfactionTypeId"
                                        outlined dense color="highContrast" item-color="highContrast"
                                        label="Satisfaction"
                                        :items="StrokeSatisfactionType.TYPES.COLLECTION"
                                        item-text="TEXT"
                                        item-value="ID"
                                        return-object
                                        hide-details :loading="false" loader-height="4"
                                        @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, strokeSatisfactionTypeId: roundStroke.strokeSatisfactionTypeId.ID})"
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
import BreakLateralType from '../models/BreakLateralType';
import BreakVerticalType from '../models/BreakVerticalType';
import CurveType from '../models/CurveType';
import DistanceResultType from '../models/DistanceResultType';
import LateralResultType from '../models/LateralResultType';
import LieAngleType from '../models/LieAngleType';
import LieConditionType from '../models/LieConditionType';
import LiePitchType from '../models/LiePitchType';
import StrokeType from '../models/StrokeType';
import TerrainType from '../models/TerrainType';
import WindDirectionType from '../models/WindDirectionType';
import WindStrengthType from '../models/WindStrengthType';
import StrokeSatisfactionType from '../models/StrokeSatisfactionType';

export default {
    name: "RoundStroke",

    props: {
        compact: Boolean,
        roundHole: Object,
        roundStroke: Object,
        previousRoundStroke: Object,
    },

    data: () => ({
        BreakLateralType: BreakLateralType,
        BreakVerticalType: BreakVerticalType,
        CurveType: CurveType,
        DistanceResultType: DistanceResultType,
        LateralResultType: LateralResultType,
        LieAngleType: LieAngleType,
        LieConditionType: LieConditionType,
        LiePitchType: LiePitchType,
        StrokeType: StrokeType,
        TerrainType: TerrainType,
        WindDirectionType: WindDirectionType,
        WindStrengthType: WindStrengthType,
        StrokeSatisfactionType: StrokeSatisfactionType,
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