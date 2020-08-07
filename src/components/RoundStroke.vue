<template>
    <v-card outlined elevation="5">
        <v-container>
            <v-layout wrap align-center class="pb-1">
                <v-flex shrink class="pt-0 pb-0">
                    <span class="font-weight-bold">({{roundStroke.number}}) &ndash; Hole {{roundHoleNumber}} &ndash; Par {{roundHolePar}}</span>   
                </v-flex>
                <v-flex grow class="pt-0 pb-0">
                    <v-item-group :value="roundStroke.terrainStartTypeId" mandatory>
                        <v-layout wrap align-center>
                            <v-flex shrink class="pa-1" v-show="roundStroke.terrainStartTypeId === TerrainType.TYPES.TEEBOX.ID">
                                <v-item v-slot:default="{ active }" :value="TerrainType.TYPES.TEEBOX.ID">
                                    <v-card outlined :color="active ? 'grey' : ''">
                                        <v-card-title class="pa-1">
                                            <span class="caption text-center font-weight-bold">Teebox</span>
                                        </v-card-title>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink class="pa-1" v-show="roundStroke.terrainStartTypeId === TerrainType.TYPES.FAIRWAY_CORRECT.ID">
                                <v-item v-slot:default="{ active }" :value="TerrainType.TYPES.FAIRWAY_CORRECT.ID">
                                    <v-card outlined :color="active ? 'green' : ''">
                                        <v-card-title class="pa-1">
                                                <span class="caption text-center font-weight-bold">Fairway <v-icon small :color="active ? '' : 'green'">mdi-check-bold</v-icon></span>
                                        </v-card-title>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink class="pa-1" v-show="roundStroke.terrainStartTypeId === TerrainType.TYPES.FAIRWAY_INCORRECT.ID">
                                <v-item v-slot:default="{ active }" :value="TerrainType.TYPES.FAIRWAY_INCORRECT.ID">
                                    <v-card outlined :color="active ? 'green' : ''">
                                        <v-card-title class="pa-1">
                                                <span class="caption text-center font-weight-bold">Fairway <v-icon small color="red">mdi-close-thick</v-icon></span>
                                        </v-card-title>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink class="pa-1" v-show="roundStroke.terrainStartTypeId === TerrainType.TYPES.ROUGH_FIRST_CUT.ID">
                                <v-item v-slot:default="{ active }" :value="TerrainType.TYPES.ROUGH_FIRST_CUT.ID">
                                    <v-card outlined :color="active ? 'light-green darken-3' : ''">
                                        <v-card-title class="pa-1">
                                                <span class="caption text-center font-weight-bold" :class="$vuetify.theme.dark ? '' : ( active ? 'white--text' : '' )">Rough (1st)</span>
                                        </v-card-title>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink class="pa-1" v-show="roundStroke.terrainStartTypeId === TerrainType.TYPES.ROUGH_SECOND_CUT.ID">
                                <v-item v-slot:default="{ active }" :value="TerrainType.TYPES.ROUGH_SECOND_CUT.ID">
                                    <v-card outlined :color="active ? 'green darken-4' : ''">
                                        <v-card-title class="pa-1">
                                                <span class="caption text-center font-weight-bold" :class="$vuetify.theme.dark ? '' : ( active ? 'white--text' : '' )">Rough (2nd)</span>
                                        </v-card-title>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink class="pa-1" v-show="roundStroke.terrainStartTypeId === TerrainType.TYPES.WORSE_THAN_ROUGH.ID">
                                <v-item v-slot:default="{ active }" :value="TerrainType.TYPES.WORSE_THAN_ROUGH.ID">
                                    <v-card outlined :color="active ? 'lime darken-4' : ''">
                                        <v-card-title class="pa-1">
                                                <span class="caption text-center font-weight-bold" :class="$vuetify.theme.dark ? '' : ( active ? 'white--text' : '' )">Worse than Rough</span>
                                        </v-card-title>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink class="pa-1" v-show="roundStroke.terrainStartTypeId === TerrainType.TYPES.FRINGE.ID">
                                <v-item v-slot:default="{ active }" :value="TerrainType.TYPES.FRINGE.ID">
                                    <v-card outlined :color="active ? 'green' : ''">
                                        <v-card-title class="pa-1">
                                                <span class="caption text-center font-weight-bold">Fringe</span>
                                        </v-card-title>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink class="pa-1" v-show="roundStroke.terrainStartTypeId === TerrainType.TYPES.GREEN.ID">
                                <v-item v-slot:default="{ active }" :value="TerrainType.TYPES.GREEN.ID">
                                    <v-card outlined :color="active ? 'light-green lighten-1' : ''">
                                        <v-card-title class="pa-1">
                                                <span class="caption text-center font-weight-bold">Green</span>
                                        </v-card-title>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink class="pa-1" v-show="roundStroke.terrainStartTypeId === TerrainType.TYPES.HOLE.ID">
                                <v-item v-slot:default="{ active }" :value="TerrainType.TYPES.HOLE.ID">
                                    <v-card outlined :color="active ? 'green accent-4' : ''">
                                        <v-card-title class="pa-1">
                                                <span class="caption text-center font-weight-bold"><v-icon small :color="active ? '' : 'green accent-4'">mdi-flag-variant</v-icon></span>
                                        </v-card-title>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink class="pa-1" v-show="roundStroke.terrainStartTypeId === TerrainType.TYPES.FAIRWAY_BUNKER.ID">
                                <v-item v-slot:default="{ active }" :value="TerrainType.TYPES.FAIRWAY_BUNKER.ID">
                                    <v-card outlined :color="active ? 'amber lighten-4' : ''">
                                        <v-card-title class="pa-1">
                                                <span class="caption text-center font-weight-bold" :class="active ? 'black--text' : ''">Bunker (F)</span>
                                        </v-card-title>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink class="pa-1" v-show="roundStroke.terrainStartTypeId === TerrainType.TYPES.GREENSIDE_BUNKER.ID">
                                <v-item v-slot:default="{ active }" :value="TerrainType.TYPES.GREENSIDE_BUNKER.ID">
                                    <v-card outlined :color="active ? 'amber lighten-4' : ''">
                                        <v-card-title class="pa-1">
                                                <span class="caption text-center font-weight-bold" :class="active ? 'black--text' : ''">Bunker (G)</span>
                                        </v-card-title>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink class="pa-1" v-show="roundStroke.terrainStartTypeId === TerrainType.TYPES.LATERAL_HAZARD.ID">
                                <v-item v-slot:default="{ active }" :value="TerrainType.TYPES.LATERAL_HAZARD.ID">
                                    <v-card outlined :color="active ? 'red' : ''">
                                        <v-card-title class="pa-1">
                                                <span class="caption text-center font-weight-bold">Hazard (L)</span>
                                        </v-card-title>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink class="pa-1" v-show="roundStroke.terrainStartTypeId === TerrainType.TYPES.STANDARD_HAZARD.ID">
                                <v-item v-slot:default="{ active }" :value="TerrainType.TYPES.STANDARD_HAZARD.ID">
                                    <v-card outlined :color="active ? 'yellow darken-2' : ''">
                                        <v-card-title class="pa-1">
                                                <span class="caption text-center font-weight-bold">Hazard (S)</span>
                                        </v-card-title>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink class="pa-1" v-show="roundStroke.terrainStartTypeId === TerrainType.TYPES.OUT_OF_BOUNDS.ID">
                                <v-item v-slot:default="{ active }" :value="TerrainType.TYPES.OUT_OF_BOUNDS.ID">
                                    <v-card outlined :color="active ? 'highContrast' : ''">
                                        <v-card-title class="pa-1">
                                                <span class="caption text-center font-weight-bold" :class="active ? ($vuetify.theme.dark ? 'black--text' : 'white--text') : ''">OB</span>
                                        </v-card-title>
                                    </v-card>
                                </v-item>
                            </v-flex>
                        </v-layout>
                    </v-item-group>
                </v-flex>
                <v-flex shrink class="pt-0 pb-0 pr-0">
                    <v-btn fab elevation="0" x-small class="pa-0" @click.stop="expanded = !expanded" :color="expanded ? 'teal accent-3' : ''">
                        <v-icon v-if="expanded">mdi-unfold-less-horizontal</v-icon>
                        <v-icon v-else>mdi-unfold-more-horizontal</v-icon>
                    </v-btn>
                </v-flex>
                <v-flex shrink class="pt-0 pb-0 pr-0">
                    <v-btn icon class="pa-0" @click.stop="$emit('setSelectedRoundStroke', roundStroke)">
                        <v-icon>mdi-trash-can-outline</v-icon>
                    </v-btn>
                </v-flex>
            </v-layout>
            <v-divider/>
            <v-layout wrap align-center>
                <v-flex xs12 class="pl-3 pr-3 pt-3 pb-3">
                    <v-item-group :value="roundStroke.clubId">
                        <v-layout wrap align-center>
                            <v-flex shrink v-show="$store.state.golfBag.includes(0) && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.clubId === 0 || roundStroke.clubId === null || expanded)" class="pa-1">
                                <v-item v-slot:default="{ active, toggle }" :value="0" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, clubId: roundStroke.clubId === 0 ? null : 0})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" height="34" width="34">
                                        <v-container fill-height class="pa-0">
                                        <v-layout wrap class="text-center" align-center>
                                            <v-flex xs12 class="pa-0">
                                                <span class="title text-center font-weight-bold">D</span>
                                            </v-flex>
                                        </v-layout>
                                        </v-container>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink v-show="$store.state.golfBag.includes(1) && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.clubId === 1 || roundStroke.clubId === null || expanded)" class="pa-1">
                                <v-item v-slot:default="{ active, toggle }" :value="1" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, clubId: roundStroke.clubId === 1 ? null : 1})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" height="34" width="34">
                                        <v-container fill-height class="pa-0">
                                        <v-layout wrap class="text-center" align-center>
                                            <v-flex xs12 class="pa-0">
                                                <span class="title text-center font-weight-bold">2w</span>
                                            </v-flex>
                                        </v-layout>
                                        </v-container>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink v-show="$store.state.golfBag.includes(2) && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.clubId === 2 || roundStroke.clubId === null || expanded)" class="pa-1">
                                <v-item v-slot:default="{ active, toggle }" :value="2" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, clubId: roundStroke.clubId === 2 ? null : 2})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" height="34" width="34">
                                        <v-container fill-height class="pa-0">
                                        <v-layout wrap class="text-center" align-center>
                                            <v-flex xs12 class="pa-0">
                                                <span class="title text-center font-weight-bold">3w</span>
                                            </v-flex>
                                        </v-layout>
                                        </v-container>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink v-show="$store.state.golfBag.includes(3) && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.clubId === 3 || roundStroke.clubId === null || expanded)" class="pa-1">
                                <v-item v-slot:default="{ active, toggle }" :value="3" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, clubId: roundStroke.clubId === 3 ? null : 3})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" height="34" width="34">
                                        <v-container fill-height class="pa-0">
                                        <v-layout wrap class="text-center" align-center>
                                            <v-flex xs12 class="pa-0">
                                                <span class="title text-center font-weight-bold">4w</span>
                                            </v-flex>
                                        </v-layout>
                                        </v-container>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink v-show="$store.state.golfBag.includes(4) && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.clubId === 4 || roundStroke.clubId === null || expanded)" class="pa-1">
                                <v-item v-slot:default="{ active, toggle }" :value="4" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, clubId: roundStroke.clubId === 4 ? null : 4})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" height="34" width="34">
                                        <v-container fill-height class="pa-0">
                                        <v-layout wrap class="text-center" align-center>
                                            <v-flex xs12 class="pa-0">
                                                <span class="title text-center font-weight-bold">5w</span>
                                            </v-flex>
                                        </v-layout>
                                        </v-container>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink v-show="$store.state.golfBag.includes(5) && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.clubId === 5 || roundStroke.clubId === null || expanded)" class="pa-1">
                                <v-item v-slot:default="{ active, toggle }" :value="5" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, clubId: roundStroke.clubId === 5 ? null : 5})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" height="34" width="34">
                                        <v-container fill-height class="pa-0">
                                        <v-layout wrap class="text-center" align-center>
                                            <v-flex xs12 class="pa-0">
                                                <span class="title text-center font-weight-bold">7w</span>
                                            </v-flex>
                                        </v-layout>
                                        </v-container>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink v-show="$store.state.golfBag.includes(6) && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.clubId === 6 || roundStroke.clubId === null || expanded)" class="pa-1">
                                <v-item v-slot:default="{ active, toggle }" :value="6" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, clubId: roundStroke.clubId === 6 ? null : 6})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" height="34" width="34">
                                        <v-container fill-height class="pa-0">
                                        <v-layout wrap class="text-center" align-center>
                                            <v-flex xs12 class="pa-0">
                                                <span class="title text-center font-weight-bold">9w</span>
                                            </v-flex>
                                        </v-layout>
                                        </v-container>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink v-show="$store.state.golfBag.includes(7) && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.clubId === 7 || roundStroke.clubId === null || expanded)" class="pa-1">
                                <v-item v-slot:default="{ active, toggle }" :value="7" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, clubId: roundStroke.clubId === 7 ? null : 7})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" height="34" width="34">
                                        <v-container fill-height class="pa-0">
                                        <v-layout wrap class="text-center" align-center>
                                            <v-flex xs12 class="pa-0">
                                                <span class="title text-center font-weight-bold">1h</span>
                                            </v-flex>
                                        </v-layout>
                                        </v-container>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink v-show="$store.state.golfBag.includes(8) && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.clubId === 8 || roundStroke.clubId === null || expanded)" class="pa-1">
                                <v-item v-slot:default="{ active, toggle }" :value="8" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, clubId: roundStroke.clubId === 8 ? null : 8})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" height="34" width="34">
                                        <v-container fill-height class="pa-0">
                                        <v-layout wrap class="text-center" align-center>
                                            <v-flex xs12 class="pa-0">
                                                <span class="title text-center font-weight-bold">2h</span>
                                            </v-flex>
                                        </v-layout>
                                        </v-container>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink v-show="$store.state.golfBag.includes(9) && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.clubId === 9 || roundStroke.clubId === null || expanded)" class="pa-1">
                                <v-item v-slot:default="{ active, toggle }" :value="9" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, clubId: roundStroke.clubId === 9 ? null : 9})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" height="34" width="34">
                                        <v-container fill-height class="pa-0">
                                        <v-layout wrap class="text-center" align-center>
                                            <v-flex xs12 class="pa-0">
                                                <span class="title text-center font-weight-bold">3h</span>
                                            </v-flex>
                                        </v-layout>
                                        </v-container>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink v-show="$store.state.golfBag.includes(10) && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.clubId === 10 || roundStroke.clubId === null || expanded)" class="pa-1">
                                <v-item v-slot:default="{ active, toggle }" :value="10" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, clubId: roundStroke.clubId === 10 ? null : 10})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" height="34" width="34">
                                        <v-container fill-height class="pa-0">
                                        <v-layout wrap class="text-center" align-center>
                                            <v-flex xs12 class="pa-0">
                                                <span class="title text-center font-weight-bold">4h</span>
                                            </v-flex>
                                        </v-layout>
                                        </v-container>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink v-show="$store.state.golfBag.includes(11) && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.clubId === 11 || roundStroke.clubId === null || expanded)" class="pa-1">
                                <v-item v-slot:default="{ active, toggle }" :value="11" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, clubId: roundStroke.clubId === 11 ? null : 11})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" height="34" width="34">
                                        <v-container fill-height class="pa-0">
                                        <v-layout wrap class="text-center" align-center>
                                            <v-flex xs12 class="pa-0">
                                                <span class="title text-center font-weight-bold">5h</span>
                                            </v-flex>
                                        </v-layout>
                                        </v-container>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink v-show="$store.state.golfBag.includes(12) && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.clubId === 12 || roundStroke.clubId === null || expanded)" class="pa-1">
                                <v-item v-slot:default="{ active, toggle }" :value="12" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, clubId: roundStroke.clubId === 12 ? null : 12})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" height="34" width="34">
                                        <v-container fill-height class="pa-0">
                                        <v-layout wrap class="text-center" align-center>
                                            <v-flex xs12 class="pa-0">
                                                <span class="title text-center font-weight-bold">6h</span>
                                            </v-flex>
                                        </v-layout>
                                        </v-container>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink v-show="$store.state.golfBag.includes(13) && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.clubId === 13 || roundStroke.clubId === null || expanded)" class="pa-1">
                                <v-item v-slot:default="{ active, toggle }" :value="13" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, clubId: roundStroke.clubId === 13 ? null : 13})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" height="34" width="34">
                                        <v-container fill-height class="pa-0">
                                        <v-layout wrap class="text-center" align-center>
                                            <v-flex xs12 class="pa-0">
                                                <span class="title text-center font-weight-bold">7h</span>
                                            </v-flex>
                                        </v-layout>
                                        </v-container>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink v-show="$store.state.golfBag.includes(14) && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.clubId === 14 || roundStroke.clubId === null || expanded)" class="pa-1">
                                <v-item v-slot:default="{ active, toggle }" :value="14" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, clubId: roundStroke.clubId === 14 ? null : 14})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" height="34" width="34">
                                        <v-container fill-height class="pa-0">
                                        <v-layout wrap class="text-center" align-center>
                                            <v-flex xs12 class="pa-0">
                                                <span class="title text-center font-weight-bold">8h</span>
                                            </v-flex>
                                        </v-layout>
                                        </v-container>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink v-show="$store.state.golfBag.includes(15) && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.clubId === 15 || roundStroke.clubId === null || expanded)" class="pa-1">
                                <v-item v-slot:default="{ active, toggle }" :value="15" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, clubId: roundStroke.clubId === 15 ? null : 15})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" height="34" width="34">
                                        <v-container fill-height class="pa-0">
                                        <v-layout wrap class="text-center" align-center>
                                            <v-flex xs12 class="pa-0">
                                                <span class="title text-center font-weight-bold">9h</span>
                                            </v-flex>
                                        </v-layout>
                                        </v-container>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink v-show="$store.state.golfBag.includes(16) && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.clubId === 16 || roundStroke.clubId === null || expanded)" class="pa-1">
                                <v-item v-slot:default="{ active, toggle }" :value="16" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, clubId: roundStroke.clubId === 16 ? null : 16})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" height="34" width="34">
                                        <v-container fill-height class="pa-0">
                                        <v-layout wrap class="text-center" align-center>
                                            <v-flex xs12 class="pa-0">
                                                <span class="title text-center font-weight-bold">1i</span>
                                            </v-flex>
                                        </v-layout>
                                        </v-container>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink v-show="$store.state.golfBag.includes(17) && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.clubId === 17 || roundStroke.clubId === null || expanded)" class="pa-1">
                                <v-item v-slot:default="{ active, toggle }" :value="17" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, clubId: roundStroke.clubId === 17 ? null : 17})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" height="34" width="34">
                                        <v-container fill-height class="pa-0">
                                        <v-layout wrap class="text-center" align-center>
                                            <v-flex xs12 class="pa-0">
                                                <span class="title text-center font-weight-bold">2i</span>
                                            </v-flex>
                                        </v-layout>
                                        </v-container>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink v-show="$store.state.golfBag.includes(18) && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.clubId === 18 || roundStroke.clubId === null || expanded)" class="pa-1">
                                <v-item v-slot:default="{ active, toggle }" :value="18" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, clubId: roundStroke.clubId === 18 ? null : 18})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" height="34" width="34">
                                        <v-container fill-height class="pa-0">
                                        <v-layout wrap class="text-center" align-center>
                                            <v-flex xs12 class="pa-0">
                                                <span class="title text-center font-weight-bold">3i</span>
                                            </v-flex>
                                        </v-layout>
                                        </v-container>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink v-show="$store.state.golfBag.includes(19) && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.clubId === 19 || roundStroke.clubId === null || expanded)" class="pa-1">
                                <v-item v-slot:default="{ active, toggle }" :value="19" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, clubId: roundStroke.clubId === 19 ? null : 19})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" height="34" width="34">
                                        <v-container fill-height class="pa-0">
                                        <v-layout wrap class="text-center" align-center>
                                            <v-flex xs12 class="pa-0">
                                                <span class="title text-center font-weight-bold">4i</span>
                                            </v-flex>
                                        </v-layout>
                                        </v-container>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink v-show="$store.state.golfBag.includes(20) && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.clubId === 20 || roundStroke.clubId === null || expanded)" class="pa-1">
                                <v-item v-slot:default="{ active, toggle }" :value="20" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, clubId: roundStroke.clubId === 20 ? null : 20})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" height="34" width="34">
                                        <v-container fill-height class="pa-0">
                                        <v-layout wrap class="text-center" align-center>
                                            <v-flex xs12 class="pa-0">
                                                <span class="title text-center font-weight-bold">5i</span>
                                            </v-flex>
                                        </v-layout>
                                        </v-container>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink v-show="$store.state.golfBag.includes(21) && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.clubId === 21 || roundStroke.clubId === null || expanded)" class="pa-1">
                                <v-item v-slot:default="{ active, toggle }" :value="21" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, clubId: roundStroke.clubId === 21 ? null : 21})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" height="34" width="34">
                                        <v-container fill-height class="pa-0">
                                        <v-layout wrap class="text-center" align-center>
                                            <v-flex xs12 class="pa-0">
                                                <span class="title text-center font-weight-bold">6i</span>
                                            </v-flex>
                                        </v-layout>
                                        </v-container>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink v-show="$store.state.golfBag.includes(22) && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.clubId === 22 || roundStroke.clubId === null || expanded)" class="pa-1">
                                <v-item v-slot:default="{ active, toggle }" :value="22" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, clubId: roundStroke.clubId === 22 ? null : 22})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" height="34" width="34">
                                        <v-container fill-height class="pa-0">
                                        <v-layout wrap class="text-center" align-center>
                                            <v-flex xs12 class="pa-0">
                                                <span class="title text-center font-weight-bold">7i</span>
                                            </v-flex>
                                        </v-layout>
                                        </v-container>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink v-show="$store.state.golfBag.includes(23) && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.clubId === 23 || roundStroke.clubId === null || expanded)" class="pa-1">
                                <v-item v-slot:default="{ active, toggle }" :value="23" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, clubId: roundStroke.clubId === 23 ? null : 23})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" height="34" width="34">
                                        <v-container fill-height class="pa-0">
                                        <v-layout wrap class="text-center" align-center>
                                            <v-flex xs12 class="pa-0">
                                                <span class="title text-center font-weight-bold">8i</span>
                                            </v-flex>
                                        </v-layout>
                                        </v-container>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink v-show="$store.state.golfBag.includes(24) && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.clubId === 24 || roundStroke.clubId === null || expanded)" class="pa-1">
                                <v-item v-slot:default="{ active, toggle }" :value="24" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, clubId: roundStroke.clubId === 24 ? null : 24})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" height="34" width="34">
                                        <v-container fill-height class="pa-0">
                                        <v-layout wrap class="text-center" align-center>
                                            <v-flex xs12 class="pa-0">
                                                <span class="title text-center font-weight-bold">9i</span>
                                            </v-flex>
                                        </v-layout>
                                        </v-container>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink v-show="$store.state.golfBag.includes(25) && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.clubId === 25 || roundStroke.clubId === null || expanded)" class="pa-1">
                                <v-item v-slot:default="{ active, toggle }" :value="25" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, clubId: roundStroke.clubId === 25 ? null : 25})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" height="34" width="34">
                                        <v-container fill-height class="pa-0">
                                        <v-layout wrap class="text-center" align-center>
                                            <v-flex xs12 class="pa-0">
                                                <span class="title text-center font-weight-bold">Pw</span>
                                            </v-flex>
                                        </v-layout>
                                        </v-container>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink v-show="$store.state.golfBag.includes(26) && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.clubId === 26 || roundStroke.clubId === null || expanded)" class="pa-1">
                                <v-item v-slot:default="{ active, toggle }" :value="26" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, clubId: roundStroke.clubId === 26 ? null : 26})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" height="34" width="34">
                                        <v-container fill-height class="pa-0">
                                        <v-layout wrap class="text-center" align-center>
                                            <v-flex xs12 class="pa-0">
                                                <span class="title text-center font-weight-bold">Gw</span>
                                            </v-flex>
                                        </v-layout>
                                        </v-container>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink v-show="$store.state.golfBag.includes(27) && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.clubId === 27 || roundStroke.clubId === null || expanded)" class="pa-1">
                                <v-item v-slot:default="{ active, toggle }" :value="27" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, clubId: roundStroke.clubId === 27 ? null : 27})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" height="34" width="34">
                                        <v-container fill-height class="pa-0">
                                        <v-layout wrap class="text-center" align-center>
                                            <v-flex xs12 class="pa-0">
                                                <span class="title text-center font-weight-bold">Sw</span>
                                            </v-flex>
                                        </v-layout>
                                        </v-container>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink v-show="$store.state.golfBag.includes(28) && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.clubId === 28 || roundStroke.clubId === null || expanded)" class="pa-1">
                                <v-item v-slot:default="{ active, toggle }" :value="28" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, clubId: roundStroke.clubId === 28 ? null : 28})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" height="34" width="34">
                                        <v-container fill-height class="pa-0">
                                        <v-layout wrap class="text-center" align-center>
                                            <v-flex xs12 class="pa-0">
                                                <span class="title text-center font-weight-bold">Lw</span>
                                            </v-flex>
                                        </v-layout>
                                        </v-container>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink v-show="$store.state.golfBag.includes(29) && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.clubId === 29 || roundStroke.clubId === null || expanded)" class="pa-1">
                                <v-item v-slot:default="{ active, toggle }" :value="29" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, clubId: roundStroke.clubId === 29 ? null : 29})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" height="34" width="34">
                                        <v-container fill-height class="pa-0">
                                        <v-layout wrap class="text-center" align-center>
                                            <v-flex xs12 class="pa-0">
                                                <span class="title text-center font-weight-bold">46</span>
                                            </v-flex>
                                        </v-layout>
                                        </v-container>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink v-show="$store.state.golfBag.includes(30) && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.clubId === 30 || roundStroke.clubId === null || expanded)" class="pa-1">
                                <v-item v-slot:default="{ active, toggle }" :value="30" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, clubId: roundStroke.clubId === 30 ? null : 30})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" height="34" width="34">
                                        <v-container fill-height class="pa-0">
                                        <v-layout wrap class="text-center" align-center>
                                            <v-flex xs12 class="pa-0">
                                                <span class="title text-center font-weight-bold">48</span>
                                            </v-flex>
                                        </v-layout>
                                        </v-container>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink v-show="$store.state.golfBag.includes(31) && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.clubId === 31 || roundStroke.clubId === null || expanded)" class="pa-1">
                                <v-item v-slot:default="{ active, toggle }" :value="31" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, clubId: roundStroke.clubId === 31 ? null : 31})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" height="34" width="34">
                                        <v-container fill-height class="pa-0">
                                        <v-layout wrap class="text-center" align-center>
                                            <v-flex xs12 class="pa-0">
                                                <span class="title text-center font-weight-bold">50</span>
                                            </v-flex>
                                        </v-layout>
                                        </v-container>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink v-show="$store.state.golfBag.includes(32) && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.clubId === 32 || roundStroke.clubId === null || expanded)" class="pa-1">
                                <v-item v-slot:default="{ active, toggle }" :value="32" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, clubId: roundStroke.clubId === 32 ? null : 32})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" height="34" width="34">
                                        <v-container fill-height class="pa-0">
                                        <v-layout wrap class="text-center" align-center>
                                            <v-flex xs12 class="pa-0">
                                                <span class="title text-center font-weight-bold">52</span>
                                            </v-flex>
                                        </v-layout>
                                        </v-container>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink v-show="$store.state.golfBag.includes(33) && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.clubId === 33 || roundStroke.clubId === null || expanded)" class="pa-1">
                                <v-item v-slot:default="{ active, toggle }" :value="33" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, clubId: roundStroke.clubId === 33 ? null : 33})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" height="34" width="34">
                                        <v-container fill-height class="pa-0">
                                        <v-layout wrap class="text-center" align-center>
                                            <v-flex xs12 class="pa-0">
                                                <span class="title text-center font-weight-bold">54</span>
                                            </v-flex>
                                        </v-layout>
                                        </v-container>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink v-show="$store.state.golfBag.includes(34) && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.clubId === 34 || roundStroke.clubId === null || expanded)" class="pa-1">
                                <v-item v-slot:default="{ active, toggle }" :value="34" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, clubId: roundStroke.clubId === 34 ? null : 34})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" height="34" width="34">
                                        <v-container fill-height class="pa-0">
                                        <v-layout wrap class="text-center" align-center>
                                            <v-flex xs12 class="pa-0">
                                                <span class="title text-center font-weight-bold">56</span>
                                            </v-flex>
                                        </v-layout>
                                        </v-container>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink v-show="$store.state.golfBag.includes(35) && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.clubId === 35 || roundStroke.clubId === null || expanded)" class="pa-1">
                                <v-item v-slot:default="{ active, toggle }" :value="35" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, clubId: roundStroke.clubId === 35 ? null : 35})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" height="34" width="34">
                                        <v-container fill-height class="pa-0">
                                        <v-layout wrap class="text-center" align-center>
                                            <v-flex xs12 class="pa-0">
                                                <span class="title text-center font-weight-bold">58</span>
                                            </v-flex>
                                        </v-layout>
                                        </v-container>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink v-show="$store.state.golfBag.includes(36) && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.clubId === 36 || roundStroke.clubId === null || expanded)" class="pa-1">
                                <v-item v-slot:default="{ active, toggle }" :value="36" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, clubId: roundStroke.clubId === 36 ? null : 36})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" height="34" width="34">
                                        <v-container fill-height class="pa-0">
                                        <v-layout wrap class="text-center" align-center>
                                            <v-flex xs12 class="pa-0">
                                                <span class="title text-center font-weight-bold">60</span>
                                            </v-flex>
                                        </v-layout>
                                        </v-container>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink v-show="$store.state.golfBag.includes(37) && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.clubId === 37 || roundStroke.clubId === null || expanded)" class="pa-1">
                                <v-item v-slot:default="{ active, toggle }" :value="37" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, clubId: roundStroke.clubId === 37 ? null : 37})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" height="34" width="34">
                                        <v-container fill-height class="pa-0">
                                        <v-layout wrap class="text-center" align-center>
                                            <v-flex xs12 class="pa-0">
                                                <span class="title text-center font-weight-bold">62</span>
                                            </v-flex>
                                        </v-layout>
                                        </v-container>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink v-show="$store.state.golfBag.includes(38) && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.clubId === 38 || roundStroke.clubId === null || expanded)" class="pa-1">
                                <v-item v-slot:default="{ active, toggle }" :value="38" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, clubId: roundStroke.clubId === 38 ? null : 38})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" height="34" width="34">
                                        <v-container fill-height class="pa-0">
                                        <v-layout wrap class="text-center" align-center>
                                            <v-flex xs12 class="pa-0">
                                                <span class="title text-center font-weight-bold">64</span>
                                            </v-flex>
                                        </v-layout>
                                        </v-container>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink v-show="$store.state.golfBag.includes(39) && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.clubId === 39 || roundStroke.clubId === null || expanded)" class="pa-1">
                                <v-item v-slot:default="{ active, toggle }" :value="39" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, clubId: roundStroke.clubId === 39 ? null : 39})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" height="34" width="34">
                                        <v-container fill-height class="pa-0">
                                        <v-layout wrap class="text-center" align-center>
                                            <v-flex xs12 class="pa-0">
                                                <span class="title text-center font-weight-bold">Pu</span>
                                            </v-flex>
                                        </v-layout>
                                        </v-container>
                                    </v-card>
                                </v-item>
                            </v-flex>
                        </v-layout>
                    </v-item-group>
                </v-flex>
            </v-layout>
            <v-layout wrap align-center>
                <v-flex xs12 class="pl-3 pr-3 pt-2 pb-3">
                    <v-item-group :value="roundStroke.strokeTypeId">
                        <v-layout wrap align-center>
                            <v-flex shrink class="pa-1" v-show="(roundStroke.clubId >= 1 && roundStroke.clubId <= 38 && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.strokeTypeId === null)) || roundStroke.strokeTypeId === 0 || expanded">
                                <v-item v-slot:default="{ active, toggle }" :value="0" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, strokeTypeId: roundStroke.strokeTypeId === 0 ? null : 0})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" >
                                        <v-card-title class="pa-1">
                                            <span class="caption text-center font-weight-bold">Chip</span>
                                        </v-card-title>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink class="pa-1" v-show="(roundStroke.clubId >= 25 && roundStroke.clubId <= 38 && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.strokeTypeId === null)) || roundStroke.strokeTypeId === 1 || expanded">
                                <v-item v-slot:default="{ active, toggle }" :value="1" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, strokeTypeId: roundStroke.strokeTypeId === 1 ? null : 1})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" >
                                        <v-card-title class="pa-1">
                                                <span class="caption text-center font-weight-bold">Flop</span>
                                        </v-card-title>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink class="pa-1" v-show="(roundStroke.clubId !== null && roundStroke.clubId <= 38 && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.strokeTypeId === null)) || roundStroke.strokeTypeId === 2 || expanded">
                                <v-item v-slot:default="{ active, toggle }" :value="2" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, strokeTypeId: roundStroke.strokeTypeId === 2 ? null : 2})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" >
                                        <v-card-title class="pa-1">
                                                <span class="caption text-center font-weight-bold">Full</span>
                                        </v-card-title>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink class="pa-1" v-show="(roundStroke.clubId >= 25 && roundStroke.clubId <= 38 && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.strokeTypeId === null)) || roundStroke.strokeTypeId === 3 || expanded">
                                <v-item v-slot:default="{ active, toggle }" :value="3" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, strokeTypeId: roundStroke.strokeTypeId === 3 ? null : 3})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" >
                                        <v-card-title class="pa-1">
                                                <span class="caption text-center font-weight-bold">Pitch</span>
                                        </v-card-title>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink class="pa-1" v-show="(roundStroke.clubId !== null && roundStroke.clubId <= 38 && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.strokeTypeId === null)) || roundStroke.strokeTypeId === 4 || expanded">
                                <v-item v-slot:default="{ active, toggle }" :value="4" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, strokeTypeId: roundStroke.strokeTypeId === 4 ? null : 4})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" >
                                        <v-card-title class="pa-1">
                                                <span class="caption text-center font-weight-bold">Punch</span>
                                        </v-card-title>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink class="pa-1" v-show="(roundStroke.clubId === 39 && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.strokeTypeId === null)) || roundStroke.strokeTypeId === 5 || expanded">
                                <v-item v-slot:default="{ active, toggle }" :value="5" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, strokeTypeId: roundStroke.strokeTypeId === 5 ? null : 5})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" >
                                        <v-card-title class="pa-1">
                                                <span class="caption text-center font-weight-bold">Putt (L)</span>
                                        </v-card-title>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink class="pa-1" v-show="(roundStroke.clubId === 39 && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.strokeTypeId === null)) || roundStroke.strokeTypeId === 6 || expanded">
                                <v-item v-slot:default="{ active, toggle }" :value="6" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, strokeTypeId: roundStroke.strokeTypeId === 6 ? null : 6})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" >
                                        <v-card-title class="pa-1">
                                                <span class="caption text-center font-weight-bold">Putt (M)</span>
                                        </v-card-title>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink class="pa-1" v-show="(roundStroke.clubId === 39 && ((nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.strokeTypeId === null)) || roundStroke.strokeTypeId === 7 || expanded">
                                <v-item v-slot:default="{ active, toggle }" :value="7" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, strokeTypeId: roundStroke.strokeTypeId === 7 ? null : 7})">
                                    <v-card outlined :color="active ? 'primary' : ''" @click="toggle" >
                                        <v-card-title class="pa-1">
                                                <span class="caption text-center font-weight-bold">Putt (S)</span>
                                        </v-card-title>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.strokeTypeId === 8 || roundStroke.strokeTypeId === null || expanded">
                                <v-item v-slot:default="{ active, toggle }" :value="8" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, strokeTypeId: roundStroke.strokeTypeId === 8 ? null : 8})">
                                    <v-card outlined :color="active ? 'red' : ''" @click="toggle" >
                                        <v-card-title class="pa-1">
                                                <span class="caption text-center font-weight-bold">Penalty</span>
                                        </v-card-title>
                                    </v-card>
                                </v-item>
                            </v-flex>
                        </v-layout>
                    </v-item-group>
                </v-flex>
            </v-layout>
            <v-divider/>
            <v-layout wrap align-center justify-center>
                <v-flex shrink class="pl-3 pr-3 pt-1 pb-3">
                    <v-item-group  :value="roundStroke.windTypeId">
                            <v-layout wrap align-center>
                                <v-flex xs12 class="text-center pa-0">
                                    <span class="caption">Wind</span>
                                </v-flex>
                            </v-layout>
                            <v-layout wrap align-center justify-center v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.windTypeId === 0 || roundStroke.windTypeId === 1 || roundStroke.windTypeId === 2 || roundStroke.windTypeId === null || expanded">
                                <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.windTypeId === 0 || roundStroke.windTypeId === null || expanded">
                                    <v-item v-slot:default="{ active, toggle }" :value="0" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, windTypeId: roundStroke.windTypeId === 0 ? null : 0})">
                                        <v-card :color="active ? 'primary' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium style="transform:rotate(45deg)" class="pa-1">mdi-chevron-double-left</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.windTypeId === 1 || roundStroke.windTypeId === null || expanded">
                                    <v-item v-slot:default="{ active, toggle }" :value="1" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, windTypeId: roundStroke.windTypeId === 1 ? null : 1})">
                                        <v-card :color="active ? 'primary' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-chevron-double-up</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.windTypeId === 2 || roundStroke.windTypeId === null || expanded">
                                    <v-item v-slot:default="{ active, toggle }" :value="2" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, windTypeId: roundStroke.windTypeId === 2 ? null : 2})">
                                        <v-card :color="active ? 'primary' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium style="transform:rotate(-45deg)" class="pa-1">mdi-chevron-double-right</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                            </v-layout>
                            <v-layout wrap align-center justify-center v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.windTypeId === 3 || roundStroke.windTypeId === 4 || roundStroke.windTypeId === 5 || roundStroke.windTypeId === null || expanded">
                                <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.windTypeId === 3 || roundStroke.windTypeId === null || expanded">
                                    <v-item v-slot:default="{ active, toggle }" :value="3" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, windTypeId: roundStroke.windTypeId === 3 ? null : 3})">
                                        <v-card :color="active ? 'primary' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-chevron-double-left</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.windTypeId === 4 || roundStroke.windTypeId === null || expanded">
                                    <v-item v-slot:default="{ active, toggle }" :value="4" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, windTypeId: roundStroke.windTypeId === 4 ? null : 4})">
                                        <v-card :color="active ? 'primary' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium style="transform:rotate(-22.5deg)" class="pa-1">mdi-octagram-outline</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.windTypeId === 5 || roundStroke.windTypeId === null || expanded">
                                    <v-item v-slot:default="{ active, toggle }" :value="5" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, windTypeId: roundStroke.windTypeId === 5 ? null : 5})">
                                        <v-card :color="active ? 'primary' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-chevron-double-right</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                            </v-layout>
                            <v-layout wrap align-center justify-center v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.windTypeId === 6 || roundStroke.windTypeId === 7 || roundStroke.windTypeId === 8 || roundStroke.windTypeId === null || expanded">
                                <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.windTypeId === 6 || roundStroke.windTypeId === null || expanded">
                                    <v-item v-slot:default="{ active, toggle }" :value="6" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, windTypeId: roundStroke.windTypeId === 6 ? null : 6})">
                                        <v-card :color="active ? 'primary' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium style="transform:rotate(-45deg)" class="pa-1">mdi-chevron-double-left</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.windTypeId === 7 || roundStroke.windTypeId === null || expanded">
                                    <v-item v-slot:default="{ active, toggle }" :value="7" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, windTypeId: roundStroke.windTypeId === 7 ? null : 7})">
                                        <v-card :color="active ? 'primary' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-chevron-double-down</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.windTypeId === 8 || roundStroke.windTypeId === null || expanded">
                                    <v-item v-slot:default="{ active, toggle }" :value="8" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, windTypeId: roundStroke.windTypeId === 8 ? null : 8})">
                                        <v-card :color="active ? 'primary' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium style="transform:rotate(45deg)" class="pa-1">mdi-chevron-double-right</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                            </v-layout>
                    </v-item-group>
                </v-flex>
                <v-spacer/>
                <v-flex shrink class="pl-3 pr-3 pt-1 pb-3">
                    <v-item-group  :value="roundStroke.accuracyTypeId">
                            <v-layout wrap align-center justify-center>
                                <v-flex xs12 class="text-center pa-0">
                                    <span class="caption">Accuracy</span>
                                </v-flex>
                            </v-layout>
                            <v-layout wrap align-center justify-center v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.accuracyTypeId === 0 || roundStroke.accuracyTypeId === 1 || roundStroke.accuracyTypeId === 2 || roundStroke.accuracyTypeId === null || expanded">
                                <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.accuracyTypeId === 0 || roundStroke.accuracyTypeId === null || expanded">
                                    <v-item v-slot:default="{ active, toggle }" :value="0" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, accuracyTypeId: roundStroke.accuracyTypeId === 0 ? null : 0})">
                                        <v-card :color="active ? 'red' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-arrow-top-left</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.accuracyTypeId === 1 || roundStroke.accuracyTypeId === null || expanded">
                                    <v-item v-slot:default="{ active, toggle }" :value="1" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, accuracyTypeId: roundStroke.accuracyTypeId === 1 ? null : 1})">
                                        <v-card :color="active ? 'red' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-arrow-up</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.accuracyTypeId === 2 || roundStroke.accuracyTypeId === null || expanded">
                                    <v-item v-slot:default="{ active, toggle }" :value="2" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, accuracyTypeId: roundStroke.accuracyTypeId === 2 ? null : 2})">
                                        <v-card :color="active ? 'red' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-arrow-top-right</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                            </v-layout>
                            <v-layout wrap align-center justify-center v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.accuracyTypeId === 3 || roundStroke.accuracyTypeId === 4 || roundStroke.accuracyTypeId === 5 || roundStroke.accuracyTypeId === null || expanded">
                                <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.accuracyTypeId === 3 || roundStroke.accuracyTypeId === null || expanded">
                                    <v-item v-slot:default="{ active, toggle }" :value="3" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, accuracyTypeId: roundStroke.accuracyTypeId === 3 ? null : 3})">
                                        <v-card :color="active ? 'red' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-arrow-left</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.accuracyTypeId === 4 || roundStroke.accuracyTypeId === null || expanded">
                                    <v-item v-slot:default="{ active, toggle }" :value="4" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, accuracyTypeId: roundStroke.accuracyTypeId === 4 ? null : 4})">
                                        <v-card :color="active ? 'green' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-bullseye</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.accuracyTypeId === 5 || roundStroke.accuracyTypeId === null || expanded">
                                    <v-item v-slot:default="{ active, toggle }" :value="5" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, accuracyTypeId: roundStroke.accuracyTypeId === 5 ? null : 5})">
                                        <v-card :color="active ? 'red' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-arrow-right</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                            </v-layout>
                            <v-layout wrap align-center justify-center v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.accuracyTypeId === 6 || roundStroke.accuracyTypeId === 7 || roundStroke.accuracyTypeId === 8 || roundStroke.accuracyTypeId === null || expanded">
                                <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.accuracyTypeId === 6 || roundStroke.accuracyTypeId === null || expanded">
                                    <v-item v-slot:default="{ active, toggle }" :value="6" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, accuracyTypeId: roundStroke.accuracyTypeId === 6 ? null : 6})">
                                        <v-card :color="active ? 'red' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-arrow-bottom-left</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.accuracyTypeId === 7 || roundStroke.accuracyTypeId === null || expanded">
                                    <v-item v-slot:default="{ active, toggle }" :value="7" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, accuracyTypeId: roundStroke.accuracyTypeId === 7 ? null : 7})">
                                        <v-card :color="active ? 'red' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-arrow-down</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.accuracyTypeId === 8 || roundStroke.accuracyTypeId === null || expanded">
                                    <v-item v-slot:default="{ active, toggle }" :value="8" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, accuracyTypeId: roundStroke.accuracyTypeId === 8 ? null : 8})">
                                        <v-card :color="active ? 'red' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-arrow-bottom-right</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                            </v-layout>
                    </v-item-group>
                </v-flex>
            </v-layout>
            <v-divider/>
            <v-layout wrap align-center>
                <v-flex xs12 class="pl-3 pr-3 pt-2 pb-3">
                    <v-item-group :value="roundStroke.terrainResultTypeId">
                        <v-layout wrap align-center justify-center>
                            <v-flex xs12 class="text-center pt-0 pb-0">
                                <span class="caption">Result Terrain</span>
                            </v-flex>
                        </v-layout>
                        <v-layout wrap align-center justify-center>
                            <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.terrainResultTypeId === TerrainType.TYPES.TEEBOX.ID || roundStroke.terrainResultTypeId === null || expanded">
                                <v-item v-slot:default="{ active, toggle }" :value="TerrainType.TYPES.TEEBOX.ID" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, terrainResultTypeId: roundStroke.terrainResultTypeId === TerrainType.TYPES.TEEBOX.ID ? null : TerrainType.TYPES.TEEBOX.ID})">
                                    <v-card outlined :color="active ? 'grey' : ''" @click="toggle" >
                                        <v-card-title class="pa-1">
                                            <span class="caption text-center font-weight-bold">Teebox</span>
                                        </v-card-title>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.terrainResultTypeId === TerrainType.TYPES.FAIRWAY_CORRECT.ID || roundStroke.terrainResultTypeId === null || expanded">
                                <v-item v-slot:default="{ active, toggle }" :value="TerrainType.TYPES.FAIRWAY_CORRECT.ID" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, terrainResultTypeId: roundStroke.terrainResultTypeId === TerrainType.TYPES.FAIRWAY_CORRECT.ID ? null : TerrainType.TYPES.FAIRWAY_CORRECT.ID})">
                                    <v-card outlined :color="active ? 'green' : ''" @click="toggle" >
                                        <v-card-title class="pa-1">
                                                <span class="caption text-center font-weight-bold">Fairway <v-icon medium :color="active ? '' : 'green'">mdi-check-bold</v-icon></span>
                                        </v-card-title>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.terrainResultTypeId === TerrainType.TYPES.FAIRWAY_INCORRECT.ID || roundStroke.terrainResultTypeId === null || expanded">
                                <v-item v-slot:default="{ active, toggle }" :value="TerrainType.TYPES.FAIRWAY_INCORRECT.ID" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, terrainResultTypeId: roundStroke.terrainResultTypeId === TerrainType.TYPES.FAIRWAY_INCORRECT.ID ? null : TerrainType.TYPES.FAIRWAY_INCORRECT.ID})">
                                    <v-card outlined :color="active ? 'green' : ''" @click="toggle" >
                                        <v-card-title class="pa-1">
                                                <span class="caption text-center font-weight-bold">Fairway <v-icon medium color="red">mdi-close-thick</v-icon></span>
                                        </v-card-title>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.terrainResultTypeId === TerrainType.TYPES.ROUGH_FIRST_CUT.ID || roundStroke.terrainResultTypeId === null || expanded">
                                <v-item v-slot:default="{ active, toggle }" :value="TerrainType.TYPES.ROUGH_FIRST_CUT.ID" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, terrainResultTypeId: roundStroke.terrainResultTypeId === TerrainType.TYPES.ROUGH_FIRST_CUT.ID ? null : TerrainType.TYPES.ROUGH_FIRST_CUT.ID})">
                                    <v-card outlined :color="active ? 'light-green darken-3' : ''" @click="toggle" >
                                        <v-card-title class="pa-1">
                                                <span class="caption text-center font-weight-bold" :class="$vuetify.theme.dark ? '' : ( active ? 'white--text' : '' )">Rough (1st)</span>
                                        </v-card-title>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.terrainResultTypeId === TerrainType.TYPES.ROUGH_SECOND_CUT.ID || roundStroke.terrainResultTypeId === null || expanded">
                                <v-item v-slot:default="{ active, toggle }" :value="TerrainType.TYPES.ROUGH_SECOND_CUT.ID" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, terrainResultTypeId: roundStroke.terrainResultTypeId === TerrainType.TYPES.ROUGH_SECOND_CUT.ID ? null : TerrainType.TYPES.ROUGH_SECOND_CUT.ID})">
                                    <v-card outlined :color="active ? 'green darken-4' : ''" @click="toggle" >
                                        <v-card-title class="pa-1">
                                                <span class="caption text-center font-weight-bold" :class="$vuetify.theme.dark ? '' : ( active ? 'white--text' : '' )">Rough (2nd)</span>
                                        </v-card-title>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.terrainResultTypeId === TerrainType.TYPES.WORSE_THAN_ROUGH.ID || roundStroke.terrainResultTypeId === null || expanded">
                                <v-item v-slot:default="{ active, toggle }" :value="TerrainType.TYPES.WORSE_THAN_ROUGH.ID" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, terrainResultTypeId: roundStroke.terrainResultTypeId === TerrainType.TYPES.WORSE_THAN_ROUGH.ID ? null : TerrainType.TYPES.WORSE_THAN_ROUGH.ID})">
                                    <v-card outlined :color="active ? 'lime darken-4' : ''" @click="toggle" >
                                        <v-card-title class="pa-1">
                                                <span class="caption text-center font-weight-bold" :class="$vuetify.theme.dark ? '' : ( active ? 'white--text' : '' )">Worse than Rough</span>
                                        </v-card-title>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.terrainResultTypeId === TerrainType.TYPES.FRINGE.ID || roundStroke.terrainResultTypeId === null || expanded">
                                <v-item v-slot:default="{ active, toggle }" :value="TerrainType.TYPES.FRINGE.ID" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, terrainResultTypeId: roundStroke.terrainResultTypeId === TerrainType.TYPES.FRINGE.ID ? null : TerrainType.TYPES.FRINGE.ID})">
                                    <v-card outlined :color="active ? 'green' : ''" @click="toggle" >
                                        <v-card-title class="pa-1">
                                                <span class="caption text-center font-weight-bold">Fringe</span>
                                        </v-card-title>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.terrainResultTypeId === TerrainType.TYPES.GREEN.ID || roundStroke.terrainResultTypeId === null || expanded">
                                <v-item v-slot:default="{ active, toggle }" :value="TerrainType.TYPES.GREEN.ID" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, terrainResultTypeId: roundStroke.terrainResultTypeId === TerrainType.TYPES.GREEN.ID ? null : TerrainType.TYPES.GREEN.ID})">
                                    <v-card outlined :color="active ? 'light-green lighten-1' : ''" @click="toggle" >
                                        <v-card-title class="pa-1">
                                                <span class="caption text-center font-weight-bold">Green</span>
                                        </v-card-title>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.terrainResultTypeId === TerrainType.TYPES.HOLE.ID || roundStroke.terrainResultTypeId === null || expanded">
                                <v-item v-slot:default="{ active, toggle }" :value="TerrainType.TYPES.HOLE.ID" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, terrainResultTypeId: roundStroke.terrainResultTypeId === TerrainType.TYPES.HOLE.ID ? null : TerrainType.TYPES.HOLE.ID})">
                                    <v-card outlined :color="active ? 'green accent-4' : ''" @click="toggle" >
                                        <v-card-title class="pa-1">
                                                <span class="caption text-center font-weight-bold"><v-icon small :color="active ? '' : 'green accent-4'">mdi-flag-variant</v-icon></span>
                                        </v-card-title>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.terrainResultTypeId === TerrainType.TYPES.FAIRWAY_BUNKER.ID || roundStroke.terrainResultTypeId === null || expanded">
                                <v-item v-slot:default="{ active, toggle }" :value="TerrainType.TYPES.FAIRWAY_BUNKER.ID" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, terrainResultTypeId: roundStroke.terrainResultTypeId === TerrainType.TYPES.FAIRWAY_BUNKER.ID ? null : TerrainType.TYPES.FAIRWAY_BUNKER.ID})">
                                    <v-card outlined :color="active ? 'amber lighten-4' : ''" @click="toggle" >
                                        <v-card-title class="pa-1">
                                                <span class="caption text-center font-weight-bold" :class="active ? 'black--text' : ''">Bunker (F)</span>
                                        </v-card-title>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.terrainResultTypeId === TerrainType.TYPES.GREENSIDE_BUNKER.ID || roundStroke.terrainResultTypeId === null || expanded">
                                <v-item v-slot:default="{ active, toggle }" :value="TerrainType.TYPES.GREENSIDE_BUNKER.ID" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, terrainResultTypeId: roundStroke.terrainResultTypeId === TerrainType.TYPES.GREENSIDE_BUNKER.ID ? null : TerrainType.TYPES.GREENSIDE_BUNKER.ID})">
                                    <v-card outlined :color="active ? 'amber lighten-4' : ''" @click="toggle" >
                                        <v-card-title class="pa-1">
                                                <span class="caption text-center font-weight-bold" :class="active ? 'black--text' : ''">Bunker (G)</span>
                                        </v-card-title>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.terrainResultTypeId === TerrainType.TYPES.LATERAL_HAZARD.ID || roundStroke.terrainResultTypeId === null || expanded">
                                <v-item v-slot:default="{ active, toggle }" :value="TerrainType.TYPES.LATERAL_HAZARD.ID" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, terrainResultTypeId: roundStroke.terrainResultTypeId === TerrainType.TYPES.LATERAL_HAZARD.ID ? null : TerrainType.TYPES.LATERAL_HAZARD.ID})">
                                    <v-card outlined :color="active ? 'red' : ''" @click="toggle" >
                                        <v-card-title class="pa-1">
                                                <span class="caption text-center font-weight-bold">Hazard (L)</span>
                                        </v-card-title>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.terrainResultTypeId === TerrainType.TYPES.STANDARD_HAZARD.ID || roundStroke.terrainResultTypeId === null || expanded">
                                <v-item v-slot:default="{ active, toggle }" :value="TerrainType.TYPES.STANDARD_HAZARD.ID" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, terrainResultTypeId: roundStroke.terrainResultTypeId === TerrainType.TYPES.STANDARD_HAZARD.ID ? null : TerrainType.TYPES.STANDARD_HAZARD.ID})">
                                    <v-card outlined :color="active ? 'yellow darken-2' : ''" @click="toggle" >
                                        <v-card-title class="pa-1">
                                                <span class="caption text-center font-weight-bold">Hazard (S)</span>
                                        </v-card-title>
                                    </v-card>
                                </v-item>
                            </v-flex>
                            <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.terrainResultTypeId === TerrainType.TYPES.OUT_OF_BOUNDS.ID || roundStroke.terrainResultTypeId === null || expanded">
                                <v-item v-slot:default="{ active, toggle }" :value="TerrainType.TYPES.OUT_OF_BOUNDS.ID" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, terrainResultTypeId: roundStroke.terrainResultTypeId === TerrainType.TYPES.OUT_OF_BOUNDS.ID ? null : TerrainType.TYPES.OUT_OF_BOUNDS.ID})">
                                    <v-card outlined :color="active ? 'highContrast' : ''" @click="toggle" >
                                        <v-card-title class="pa-1">
                                                <span class="caption text-center font-weight-bold" :class="active ? ($vuetify.theme.dark ? 'black--text' : 'white--text') : ''">OB</span>
                                        </v-card-title>
                                    </v-card>
                                </v-item>
                            </v-flex>
                        </v-layout>
                    </v-item-group>
                </v-flex>
            </v-layout>
            <v-divider/>
            <v-layout wrap align-center justify-space-between>
                <v-flex shrink class="pl-3 pr-3 pt-1 pb-3">
                    <v-item-group  :value="roundStroke.lieQualityTypeId">
                            <v-layout wrap align-center justify-center>
                                <v-flex xs12 class="text-center pa-0 ">
                                    <span class="caption">Lie Quality</span>
                                </v-flex>
                            </v-layout>
                            <v-layout wrap align-center justify-center>
                                <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.lieQualityTypeId === 0 || roundStroke.lieQualityTypeId === null || expanded">
                                    <v-item v-slot:default="{ active, toggle }" :value="0" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, lieQualityTypeId: roundStroke.lieQualityTypeId === 0 ? null : 0})">
                                        <v-card :color="active ? 'red' : ''" @click.stop="toggle" outlined class="text-center"><v-icon small class="pa-1">mdi-thumb-down</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.lieQualityTypeId === 1 || roundStroke.lieQualityTypeId === null || expanded">
                                    <v-item v-slot:default="{ active, toggle }" :value="1" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, lieQualityTypeId: roundStroke.lieQualityTypeId === 1 ? null : 1})">
                                        <v-card :color="active ? 'yellow darken-1' : ''" @click.stop="toggle" outlined class="text-center"><v-icon small class="pa-1">mdi-thumbs-up-down</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.lieQualityTypeId === 2 || roundStroke.lieQualityTypeId === null || expanded">
                                    <v-item v-slot:default="{ active, toggle }" :value="2" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, lieQualityTypeId: roundStroke.lieQualityTypeId === 2 ? null : 2})">
                                        <v-card :color="active ? 'green' : ''" @click.stop="toggle" outlined class="text-center"><v-icon small class="pa-1">mdi-thumb-up</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                            </v-layout>
                    </v-item-group>
                </v-flex>
                <v-flex shrink class="pl-3 pr-3 pt-1 pb-3">
                    <v-item-group  :value="roundStroke.contactQualityTypeId">
                            <v-layout wrap align-center justify-center>
                                <v-flex xs12 class="text-center pa-0">
                                    <span class="caption">Strike Quality</span>
                                </v-flex>
                            </v-layout>
                            <v-layout wrap align-center justify-center>
                                <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.contactQualityTypeId === 0 || roundStroke.contactQualityTypeId === null || expanded">
                                    <v-item v-slot:default="{ active, toggle }" :value="0" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, contactQualityTypeId: roundStroke.contactQualityTypeId === 0 ? null : 0})">
                                        <v-card :color="active ? 'red' : ''" @click.stop="toggle" outlined class="text-center"><v-icon small class="pa-1">mdi-thumb-down</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.contactQualityTypeId === 1 || roundStroke.contactQualityTypeId === null || expanded">
                                    <v-item v-slot:default="{ active, toggle }" :value="1" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, contactQualityTypeId: roundStroke.contactQualityTypeId === 1 ? null : 1})">
                                        <v-card :color="active ? 'yellow darken-1' : ''" @click.stop="toggle" outlined class="text-center"><v-icon small class="pa-1">mdi-thumbs-up-down</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.contactQualityTypeId === 2 || roundStroke.contactQualityTypeId === null || expanded">
                                    <v-item v-slot:default="{ active, toggle }" :value="2" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, contactQualityTypeId: roundStroke.contactQualityTypeId === 2 ? null : 2})">
                                        <v-card :color="active ? 'green' : ''" @click.stop="toggle" outlined class="text-center"><v-icon small class="pa-1">mdi-thumb-up</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                            </v-layout>
                    </v-item-group>
                </v-flex>
                <v-flex shrink class="pl-3 pr-3 pt-1 pb-3" v-if="roundStroke.clubId === 39">
                    <v-item-group  :value="roundStroke.breakReadQualityTypeId">
                            <v-layout wrap align-center justify-center>
                                <v-flex xs12 class="text-center pa-0">
                                    <span class="caption">Break Read Quality</span>
                                </v-flex>
                            </v-layout>
                            <v-layout wrap align-center justify-center>
                                <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.breakReadQualityTypeId === 0 || roundStroke.breakReadQualityTypeId === null || expanded">
                                    <v-item v-slot:default="{ active, toggle }" :value="0" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, breakReadQualityTypeId: roundStroke.breakReadQualityTypeId === 0 ? null : 0})">
                                        <v-card :color="active ? 'red' : ''" @click.stop="toggle" outlined class="text-center"><v-icon small class="pa-1">mdi-thumb-down</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.breakReadQualityTypeId === 1 || roundStroke.breakReadQualityTypeId === null || expanded">
                                    <v-item v-slot:default="{ active, toggle }" :value="1" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, breakReadQualityTypeId: roundStroke.breakReadQualityTypeId === 1 ? null : 1})">
                                        <v-card :color="active ? 'yellow darken-1' : ''" @click.stop="toggle" outlined class="text-center"><v-icon small class="pa-1">mdi-thumbs-up-down</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.breakReadQualityTypeId === 2 || roundStroke.breakReadQualityTypeId === null || expanded">
                                    <v-item v-slot:default="{ active, toggle }" :value="2" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, breakReadQualityTypeId: roundStroke.breakReadQualityTypeId === 2 ? null : 2})">
                                        <v-card :color="active ? 'green' : ''" @click.stop="toggle" outlined class="text-center"><v-icon small class="pa-1">mdi-thumb-up</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                            </v-layout>
                    </v-item-group>
                </v-flex>
                <v-flex shrink class="pl-3 pr-3 pt-1 pb-3" v-else>
                    <v-item-group  :value="roundStroke.leaveQualityTypeId">
                            <v-layout wrap align-center justify-center>
                                <v-flex xs12 class="text-center pa-0">
                                    <span class="caption">Leave Quality</span>
                                </v-flex>
                            </v-layout>
                            <v-layout wrap align-center justify-center>
                                <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.leaveQualityTypeId === 0 || roundStroke.leaveQualityTypeId === null || expanded">
                                    <v-item v-slot:default="{ active, toggle }" :value="0" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, leaveQualityTypeId: roundStroke.leaveQualityTypeId === 0 ? null : 0})">
                                        <v-card :color="active ? 'red' : ''" @click.stop="toggle" outlined class="text-center"><v-icon small class="pa-1">mdi-thumb-down</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.leaveQualityTypeId === 1 || roundStroke.leaveQualityTypeId === null || expanded">
                                    <v-item v-slot:default="{ active, toggle }" :value="1" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, leaveQualityTypeId: roundStroke.leaveQualityTypeId === 1 ? null : 1})">
                                        <v-card :color="active ? 'yellow darken-1' : ''" @click.stop="toggle" outlined class="text-center"><v-icon small class="pa-1">mdi-thumbs-up-down</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.leaveQualityTypeId === 2 || roundStroke.leaveQualityTypeId === null || expanded">
                                    <v-item v-slot:default="{ active, toggle }" :value="2" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, leaveQualityTypeId: roundStroke.leaveQualityTypeId === 2 ? null : 2})">
                                        <v-card :color="active ? 'green' : ''" @click.stop="toggle" outlined class="text-center"><v-icon small class="pa-1">mdi-thumb-up</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                            </v-layout>
                    </v-item-group>
                </v-flex>
            </v-layout>
            <v-divider/>
            <v-layout wrap align-center justify-center v-if="roundStroke.clubId !== 39">
                <v-flex shrink class="pl-3 pr-3 pt-1 pb-3">
                    <v-item-group  :value="roundStroke.intendedShapeTypeId">
                            <v-layout wrap align-center justify-center>
                                <v-flex xs12 class="text-center pa-0">
                                    <span class="caption">Intended Shape</span>
                                </v-flex>
                            </v-layout>
                            <v-layout wrap align-center justify-center>
                                <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.intendedShapeTypeId === IntendedShapeType.TYPES.DRAW.ID || roundStroke.intendedShapeTypeId === null || expanded">
                                    <v-item v-slot:default="{ active, toggle }" :value="IntendedShapeType.TYPES.DRAW.ID" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, intendedShapeTypeId: roundStroke.intendedShapeTypeId === IntendedShapeType.TYPES.DRAW.ID ? null : IntendedShapeType.TYPES.DRAW.ID})">
                                        <v-card :color="active ? 'primary' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1" style="transform:rotate(90deg)">mdi-undo</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.intendedShapeTypeId === IntendedShapeType.TYPES.STRAIGHT.ID || roundStroke.intendedShapeTypeId === null || expanded">
                                    <v-item v-slot:default="{ active, toggle }" :value="IntendedShapeType.TYPES.STRAIGHT.ID" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, intendedShapeTypeId: roundStroke.intendedShapeTypeId === IntendedShapeType.TYPES.STRAIGHT.ID ? null : IntendedShapeType.TYPES.STRAIGHT.ID})">
                                        <v-card :color="active ? 'primary' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-arrow-up-bold</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.intendedShapeTypeId === IntendedShapeType.TYPES.FADE.ID || roundStroke.intendedShapeTypeId === null || expanded">
                                    <v-item v-slot:default="{ active, toggle }" :value="IntendedShapeType.TYPES.FADE.ID" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, intendedShapeTypeId: roundStroke.intendedShapeTypeId === IntendedShapeType.TYPES.FADE.ID ? null : IntendedShapeType.TYPES.FADE.ID})">
                                        <v-card :color="active ? 'primary' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1" style="transform:rotate(-90deg)">mdi-redo</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                            </v-layout>
                    </v-item-group>
                </v-flex>
                <v-spacer/>
                <v-flex shrink class="pl-3 pr-3 pt-1 pb-3">
                    <v-item-group  :value="roundStroke.exhibitedShapeTypeId">
                            <v-layout wrap align-center justify-center>
                                <v-flex xs12 class="text-center pa-0">
                                    <span class="caption">Exhibited Shape</span>
                                </v-flex>
                            </v-layout>
                            <v-layout wrap align-center justify-center>
                                <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.exhibitedShapeTypeId === 0 || roundStroke.exhibitedShapeTypeId === null || expanded">
                                    <v-item v-slot:default="{ active, toggle }" :value="0" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, exhibitedShapeTypeId: roundStroke.exhibitedShapeTypeId === 0 ? null : 0})">
                                        <v-card :color="active ? 'red' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1" style="transform:rotate(-45deg)">mdi-arrow-up-bold</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.exhibitedShapeTypeId === 1 || roundStroke.exhibitedShapeTypeId === null || expanded">
                                    <v-item v-slot:default="{ active, toggle }" :value="1" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, exhibitedShapeTypeId: roundStroke.exhibitedShapeTypeId === 1 ? null : 1})">
                                        <v-card :color="active ? (roundStroke.intendedShapeTypeId === 1 ? 'green' : 'red') : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1" style="transform:rotate(90deg)">mdi-undo</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.exhibitedShapeTypeId === 2 || roundStroke.exhibitedShapeTypeId === null || expanded">
                                    <v-item v-slot:default="{ active, toggle }" :value="2" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, exhibitedShapeTypeId: roundStroke.exhibitedShapeTypeId === 2 ? null : 2})">
                                        <v-card :color="active ? (roundStroke.intendedShapeTypeId === 2 ? 'green' : 'red') : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-arrow-up-bold</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.exhibitedShapeTypeId === 3 || roundStroke.exhibitedShapeTypeId === null || expanded">
                                    <v-item v-slot:default="{ active, toggle }" :value="3" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, exhibitedShapeTypeId: roundStroke.exhibitedShapeTypeId === 3 ? null : 3})">
                                        <v-card :color="active ? (roundStroke.intendedShapeTypeId === 3 ? 'green' : 'red') : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1" style="transform:rotate(-90deg)">mdi-redo</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.exhibitedShapeTypeId === 4 || roundStroke.exhibitedShapeTypeId === null || expanded">
                                    <v-item v-slot:default="{ active, toggle }" :value="4" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, exhibitedShapeTypeId: roundStroke.exhibitedShapeTypeId === 4 ? null : 4})">
                                        <v-card :color="active ? 'red' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1" style="transform:rotate(45deg)">mdi-arrow-up-bold</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                            </v-layout>
                    </v-item-group>
                </v-flex>
            </v-layout>
            <v-divider v-if="roundStroke.clubId !== 39"/>
            <v-layout wrap align-center justify-center>
                <v-flex shrink class="pl-3 pr-3 pt-1 pb-3">
                    <v-item-group  :value="roundStroke.satisfactionTypeId">
                            <v-layout wrap align-center>
                                <v-flex xs12 class="text-center pa-0">
                                    <span class="caption">Satisfaction</span>
                                </v-flex>
                            </v-layout>
                            <v-layout wrap align-center justify-center>
                                <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.satisfactionTypeId === 0 || roundStroke.satisfactionTypeId === null || expanded">
                                    <v-item v-slot:default="{ active, toggle }" :value="0" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, satisfactionTypeId: roundStroke.satisfactionTypeId === 0 ? null : 0})">
                                        <v-card :color="active ? 'red' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-emoticon-dead</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.satisfactionTypeId === 1 || roundStroke.satisfactionTypeId === null || expanded">
                                    <v-item v-slot:default="{ active, toggle }" :value="1" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, satisfactionTypeId: roundStroke.satisfactionTypeId === 1 ? null : 1})">
                                        <v-card :color="active ? 'orange' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-emoticon-sad</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.satisfactionTypeId === 2 || roundStroke.satisfactionTypeId === null || expanded">
                                    <v-item v-slot:default="{ active, toggle }" :value="2" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, satisfactionTypeId: roundStroke.satisfactionTypeId === 2 ? null : 2})">
                                        <v-card :color="active ? 'yellow darken-1' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-emoticon-neutral</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.satisfactionTypeId === 3 || roundStroke.satisfactionTypeId === null || expanded">
                                    <v-item v-slot:default="{ active, toggle }" :value="3" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, satisfactionTypeId: roundStroke.satisfactionTypeId === 3 ? null : 3})">
                                        <v-card :color="active ? 'lime' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-emoticon-happy</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1" v-show="(nextRoundStroke === null && roundStroke.terrainResultTypeId !== TerrainType.TYPES.HOLE.ID) || roundStroke.satisfactionTypeId === 4 || roundStroke.satisfactionTypeId === null || expanded">
                                    <v-item v-slot:default="{ active, toggle }" :value="4" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, satisfactionTypeId: roundStroke.satisfactionTypeId === 4 ? null : 4})">
                                        <v-card :color="active ? 'green' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-emoticon-excited</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                            </v-layout>
                    </v-item-group>
                </v-flex>
            </v-layout>
        </v-container>
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
                                    @click.stop="toggle"
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
                <!-- <v-expansion-panels accordion>
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
                </v-expansion-panels> -->
            <!-- </v-card> -->
        <!-- </v-container> -->
    </v-card>
</template>


<script>
import BreakReadQualityType from '../models/BreakReadQualityType';
import IntendedShapeType from '../models/IntendedShapeType';
import ExhibitedShapeType from '../models/ExhibitedShapeType';
import AccuracyType from '../models/AccuracyType';
import LieQualityType from '../models/LieQualityType';
import StrokeType from '../models/StrokeType';
import TerrainType from '../models/TerrainType';
import WindType from '../models/WindType';
import SatisfactionType from '../models/SatisfactionType';

export default {
    name: "RoundStroke",

    props: {
        compact: Boolean,
        roundHoleNumber: Number,
        roundHolePar: Number,
        roundStroke: Object,
        previousRoundStroke: Object,
        nextRoundStroke: Object,
        golfBag: Array,
    },

    data: () => ({
        BreakReadQualityType: BreakReadQualityType,
        IntendedShapeType: IntendedShapeType,
        ExhibitedShapeType: ExhibitedShapeType,
        AccuracyType: AccuracyType,
        LieQualityType: LieQualityType,
        StrokeType: StrokeType,
        TerrainType: TerrainType,
        WindType: WindType,
        SatisfactionType: SatisfactionType,
        expanded: false,
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