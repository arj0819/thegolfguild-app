<template>
    <v-container class="pa-0" fluid>
        <v-fade-transition group leave-absolute>
            <v-container grid-list-lg fluid v-if="!selectedRound" key="1">
                <v-layout wrap justify-center>
                    <v-flex xs12 sm6 md4>
                        <div class="caption">Active Rounds</div>
                    </v-flex>
                </v-layout>
                <v-layout wrap justify-center>
                    <v-flex xs12 sm6 md4>
                        <v-layout wrap>
                            <v-flex xs12 v-for="round in activeRounds" :key="round.roundId">
                                <v-card outlined @click.stop="setSelectedRound(round)">
                                    <v-container>
                                        <v-layout wrap>
                                            <v-flex xs12>
                                                <v-layout wrap align-center>
                                                    <v-flex shrink>
                                                        <span :class="$vuetify.breakpoint.smAndUp?'subtitle-2':'caption'">{{round.golfCourseName}}</span>
                                                    </v-flex>
                                                    <v-flex shrink class="pr-0 pl-1">
                                                        <tee-box-icon class="mr-n2" :primaryColor="round.primaryColor" :secondaryColor="round.secondaryColor"></tee-box-icon>
                                                    </v-flex>
                                                    <v-flex shrink>
                                                        <span :class="$vuetify.breakpoint.smAndUp?'subtitle-2':'caption'">{{`${round.teeName} - ${round.scratchRating}/${round.slope}`}}</span>
                                                    </v-flex>
                                                    <v-spacer/>
                                                    <v-flex shrink class="text-right">
                                                        <span class="font-weight-bold pr-1" :class="[$vuetify.breakpoint.smAndUp?'subtitle-2':'caption', round.scoreRelativeToPar > 0 ? 'blue--text' : round.scoreRelativeToPar == 0 ? 'grey--text' : 'red--text']">{{round.scoreRelativeToPar == 0 ? 'E' : round.scoreRelativeToPar > 0 ? `+${round.scoreRelativeToPar}`:`${round.scoreRelativeToPar}`}}</span>
                                                        <span class="font-weight-light" :class="$vuetify.breakpoint.smAndUp?'subtitle-2':'caption'">~ {{round.thruHole}}</span>
                                                    </v-flex>
                                                </v-layout>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
                <v-layout wrap justify-center>
                    <v-flex xs12 sm6 md4>
                        <v-divider/>
                    </v-flex>
                </v-layout>
                <v-layout wrap justify-center>
                    <v-flex v-if="!newRoundMode" xs12 sm6 md4>
                        <v-btn outlined block large color="white--text" @click.stop="newRoundMode = !newRoundMode">
                            Start a New Round?
                        </v-btn>
                    </v-flex>
                    <v-flex v-if="newRoundMode" xs12 sm6 md4>
                        <v-btn outlined block large color="white--text" @click.stop="newRoundMode = !newRoundMode">
                            Don't need a new round?
                        </v-btn>
                    </v-flex>
                </v-layout>
                <v-layout wrap justify-center v-if="newRoundMode">
                    <v-flex xs12 sm6 md4>
                        <v-select
                            :disabled="golfCourses.length == 0"
                            :items="golfCourses"
                            item-text="name"
                            item-value="golfCourseId"
                            return-object
                            label="Select a Golf Course" outlined color="secondary" item-color="secondary"
                            hide-details :value="selectedGolfCourse" @input="setSelectedGolfCourse"
                        >
                        </v-select>
                    </v-flex>
                </v-layout>
                <v-layout wrap justify-center v-if="newRoundMode">
                    <v-flex xs12 sm6 md4>
                        <v-select
                            :disabled="tees.length == 0"
                            :items="tees"
                            item-text="name"
                            item-value="teeId"
                            label="Select a Tee" outlined color="secondary" item-color="secondary"
                            hide-details return-object v-model="selectedTee" 
                        >
                            <template v-slot:selection="data">
                                <tee-box-icon :primaryColor="data.item.primaryColor" :secondaryColor="data.item.secondaryColor"></tee-box-icon>
                                {{data.item.name + ' - ' + data.item.scratchRating + '/' + data.item.slope}}
                            </template>
                            <template v-slot:item="data">
                                <tee-box-icon :primaryColor="data.item.primaryColor" :secondaryColor="data.item.secondaryColor"></tee-box-icon>
                                {{data.item.name + ' - ' + data.item.scratchRating + '/' + data.item.slope}}
                            </template>
                        </v-select>
                    </v-flex>
                </v-layout>
                <v-layout wrap justify-center v-if="newRoundMode">
                    <v-flex xs12 sm6 md4>
                        <v-btn block x-large :disabled="!selectedGolfCourse || !selectedTee" color="light-green" class="white--text" @click="createRound">
                            Start
                        </v-btn>
                    </v-flex>
                </v-layout>
            </v-container>
            <v-container grid-list-lg fluid v-else-if="selectedRound && currentView == 0" key="2" class="pt-1">
                <v-layout wrap justify-center>
                    <v-flex xs12 sm6 md4>
                        <v-layout wrap align-center>
                            <v-flex shrink class="pr-0 pb-0">
                                <v-btn icon small outlined @click="setSelectedRound(null)">
                                    <v-icon>mdi-chevron-left</v-icon>
                                </v-btn>
                            </v-flex>
                            <v-flex grow class="pl-0 pb-0">
                                <v-container>
                                    <v-layout wrap>
                                        <v-flex xs12>
                                            <v-layout wrap align-center>
                                                <v-flex shrink>
                                                    <span class="subtitle-2 font-weight-bold">{{selectedRound.golfCourseName}}</span>
                                                </v-flex>
                                                <v-flex shrink class="pr-0 pl-1">
                                                    <tee-box-icon class="mr-n2" :primaryColor="selectedRound.primaryColor" :secondaryColor="selectedRound.secondaryColor"></tee-box-icon>
                                                </v-flex>
                                                <v-spacer/>
                                                <v-flex shrink class="pr-0 text-right">
                                                    <span class="headline font-weight-bold pr-1" :class="selectedRound.scoreRelativeToPar > 0 ? 'blue--text' : selectedRound.scoreRelativeToPar == 0 ? 'grey--text' : 'red--text'">{{selectedRound.scoreRelativeToPar == 0 ? 'E' : selectedRound.scoreRelativeToPar > 0 ? `+${selectedRound.scoreRelativeToPar}`:`${selectedRound.scoreRelativeToPar}`}}</span>
                                                    <span class="headline font-weight-light">~ {{selectedRound.thruHole}}</span>
                                                </v-flex>
                                            </v-layout>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-flex>
                        </v-layout>
                        <v-layout wrap align-center>
                            <v-flex xs12>
                                <v-card outlined v-if="getSelectedRoundOutRoundHoles().length > 0" :class="getSelectedRoundInRoundHoles().length > 0?'eighteenHoleCard-frontNine':''">
                                    <v-data-table  mobile-breakpoint="0"
                                        :headers="roundScorecardHeaders"
                                        :items="getSelectedRoundOutRoundHoles()"
                                        hide-default-footer disable-pagination
                                        disable-sort @click:row="setSelectedRoundHole"
                                        class="clickable-rows"
                                    >
                                        <template v-slot:body.append="{ items }">
                                            <tr>
                                                <td colspan="2" class="headline font-weight-medium text-center v-data-table__divider">
                                                    OUT
                                                </td>
                                                <td class="headline font-weight-medium text-center v-data-table__divider">
                                                    {{selectedRound.outYards}}
                                                </td>
                                                <td class="headline font-weight-medium text-center v-data-table__divider">
                                                    {{selectedRound.outPar}}
                                                </td>
                                                <td class="headline font-weight-black text-center">
                                                    {{getOutScore(items)}}
                                                </td>
                                            </tr>
                                        </template>
                                        <template v-slot:item.number="{ item }">
                                            <span class="headline font-weight-medium" tile flat>
                                                {{item.number}}
                                            </span>
                                        </template>
                                        <template v-slot:item.handicap="{ item }">
                                            <span class="headline font-weight-medium" tile flat>
                                                {{item.handicap}}
                                            </span>
                                        </template>
                                        <template v-slot:item.yardage="{ item }">
                                            <span class="headline font-weight-medium" tile flat>
                                                {{item.yardage}}
                                            </span>
                                        </template>
                                        <template v-slot:item.par="{ item }">
                                            <span class="headline font-weight-medium" tile flat>
                                                {{item.par}}
                                            </span>
                                        </template>
                                        <template v-slot:item.strokes="{ item }">
                                            <span class="headline font-weight-black" tile flat :class="`${getRoundStrokeBackgroundColor(item, item.number, item.par, item.strokes)}--text`">
                                                {{item.strokes !== 0? item.strokes:''}}
                                            </span>
                                        </template>
                                    </v-data-table>
                                </v-card>
                                <v-card outlined v-if="getSelectedRoundInRoundHoles().length > 0" :class="getSelectedRoundOutRoundHoles().length > 0?'eighteenHoleCard-backNine':''">
                                    <v-data-table  mobile-breakpoint="0"
                                        :headers="roundScorecardHeaders" calculate-widths
                                        :items="getSelectedRoundInRoundHoles()"
                                        hide-default-footer disable-pagination
                                        disable-sort @click:row="setSelectedRoundHole"
                                        class="clickable-rows"
                                    >
                                        <template v-slot:body.append="{items}">
                                            <tr>
                                                <td colspan="2" class="headline font-weight-medium text-center v-data-table__divider">
                                                    IN
                                                </td>
                                                <td class="headline font-weight-medium text-center v-data-table__divider">
                                                    {{selectedRound.inYards}}
                                                </td>
                                                <td class="headline font-weight-medium text-center v-data-table__divider">
                                                    {{selectedRound.inPar}}
                                                </td>
                                                <td class="headline font-weight-black text-center">
                                                    {{getInScore(items)}}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="2" class="headline font-weight-medium text-center v-data-table__divider">
                                                    TOTAL
                                                </td>
                                                <td class="headline font-weight-medium text-center v-data-table__divider">
                                                    {{selectedRound.totalYards}}
                                                </td>
                                                <td class="headline font-weight-medium text-center v-data-table__divider">
                                                    {{selectedRound.totalPar}}
                                                </td>
                                                <td class="headline font-weight-black text-center">
                                                    {{getTotalScore()}}
                                                </td>
                                            </tr>
                                        </template>
                                        <template v-slot:item.number="{ item }">
                                            <span class="headline font-weight-medium" tile flat>
                                                {{item.number}}
                                            </span>
                                        </template>
                                        <template v-slot:item.handicap="{ item }">
                                            <span class="headline font-weight-medium" tile flat>
                                                {{item.handicap}}
                                            </span>
                                        </template>
                                        <template v-slot:item.yardage="{ item }">
                                            <span class="headline font-weight-medium" tile flat>
                                                {{item.yardage}}
                                            </span>
                                        </template>
                                        <template v-slot:item.par="{ item }">
                                            <span class="headline font-weight-medium" tile flat>
                                                {{item.par}}
                                            </span>
                                        </template>
                                        <template v-slot:item.strokes="{ item }">
                                            <span class="headline font-weight-black" tile flat :class="`${getRoundStrokeBackgroundColor(item, item.number, item.par, item.strokes)}--text`">
                                                {{item.strokes !== 0? item.strokes:''}}
                                            </span>
                                        </template>
                                    </v-data-table>
                                </v-card>
                            </v-flex>
                        </v-layout>
                        <v-layout wrap align-center>
                            <v-flex xs12>
                                <v-btn block outlined color="red" @click.stop="endRoundDialog = true">
                                    End Round
                                </v-btn>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-container>
            <v-container grid-list-lg fluid v-else-if="selectedRound && selectedRound && currentView == 1" key="3" class="pt-1">
                <v-layout wrap justify-center>
                    <v-flex xs12 sm6 md4>
                        <v-layout wrap align-center>
                            <v-flex shrink class="pr-0 pb-0">
                                <v-btn icon small outlined @click.stop="currentView = 0">
                                    <v-icon>mdi-chevron-left</v-icon>
                                </v-btn>
                            </v-flex>
                            <v-flex grow class="pl-0 pb-0">
                                <v-container>
                                    <v-layout wrap>
                                        <v-flex xs12>
                                            <v-layout wrap align-center>
                                                <v-flex shrink>
                                                    <span class="subtitle-2 font-weight-bold">{{selectedRound.golfCourseName}}</span>
                                                </v-flex>
                                                <v-flex shrink class="pr-0 pl-1">
                                                    <tee-box-icon class="mr-n2" :primaryColor="selectedRound.primaryColor" :secondaryColor="selectedRound.secondaryColor"></tee-box-icon>
                                                </v-flex>
                                                <v-spacer/>
                                                <v-flex shrink class="pr-0 text-right">
                                                    <span class="headline font-weight-bold pr-1" :class="selectedRound.scoreRelativeToPar > 0 ? 'blue--text' : selectedRound.scoreRelativeToPar == 0 ? 'grey--text' : 'red--text'">{{selectedRound.scoreRelativeToPar == 0 ? 'E' : selectedRound.scoreRelativeToPar > 0 ? `+${selectedRound.scoreRelativeToPar}`:`${selectedRound.scoreRelativeToPar}`}}</span>
                                                    <span class="headline font-weight-light">~ {{selectedRound.thruHole}}</span>
                                                </v-flex>
                                            </v-layout>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-flex>
                        </v-layout>
                        <v-layout wrap align-center>
                            <v-flex xs12>
                                <v-card outlined>
                                    <v-data-table  mobile-breakpoint="0"
                                        :headers="roundScorecardHeaders"
                                        :items="[selectedRoundHole] || []"
                                        hide-default-footer disable-pagination
                                        disable-sort
                                    >
                                        <template v-slot:item.number="{ item }">
                                            <span class="headline font-weight-medium" tile flat>
                                                {{item.number}}
                                            </span>
                                        </template>
                                        <template v-slot:item.handicap="{ item }">
                                            <span class="headline font-weight-medium" tile flat>
                                                {{item.handicap}}
                                            </span>
                                        </template>
                                        <template v-slot:item.yardage="{ item }">
                                            <span class="headline font-weight-medium" tile flat>
                                                {{item.yardage}}
                                            </span>
                                        </template>
                                        <template v-slot:item.par="{ item }">
                                            <span class="headline font-weight-medium" tile flat>
                                                {{item.par}}
                                            </span>
                                        </template>
                                        <template v-slot:item.strokes="{ item }">
                                            <span class="headline font-weight-black" tile flat :class="`${getRoundStrokeBackgroundColor(item, item.number, item.par, item.strokes)}--text`">
                                                {{item.strokes !== 0? item.strokes:''}}
                                            </span>
                                        </template>
                                    </v-data-table>
                                </v-card>
                            </v-flex>
                        </v-layout>
                        <v-layout wrap justify-center>
                            <v-flex xs6>
                                <v-btn block large outlined @click="goToNextRoundHole" :disabled="selectedRound.RoundHoles.indexOf(selectedRoundHole) <= 0">
                                    <v-icon>mdi-chevron-left</v-icon>Previous Hole
                                </v-btn>
                            </v-flex>
                            <v-flex xs6>
                                <v-btn block large outlined @click="goToPreviousRoundHole" :disabled="selectedRound.RoundHoles.indexOf(selectedRoundHole) >= (selectedRound.RoundHoles.length - 1)">
                                    Next Hole<v-icon>mdi-chevron-right</v-icon>
                                </v-btn>
                            </v-flex>
                        </v-layout>
                        <v-layout wrap justify-center>
                            <v-flex xs12>
                                <v-btn large outlined block @click.stop="addStrokeToRoundHole(selectedRoundHole)" :disabled="selectedRoundHole.RoundStrokes.length > 0 ? selectedRoundHole.RoundStrokes[selectedRoundHole.RoundStrokes.length - 1].terrainResultTypeId === 8 : false">
                                    <v-icon>mdi-plus</v-icon>{{selectedRoundHole.RoundStrokes.length > 0 ? 'Add Another Stroke' : 'Add a Stroke'}}
                                </v-btn>
                            </v-flex>
                        </v-layout>
                        <v-layout v-if="!rearrangeStrokesMode" wrap align-center>
                            <v-flex xs12 v-for="(roundStroke, i) in selectedRoundHole.RoundStrokes" :key="roundStroke.roundStrokeId">
                                <round-stroke :roundStroke="roundStroke" :roundHoleNumber="selectedRoundHole.number" :roundHolePar="selectedRoundHole.par" :previousRoundStroke="selectedRoundHole.RoundStrokes[i - 1] || null" @setSelectedRoundStroke="setSelectedRoundStroke" @update="updateRoundStroke"></round-stroke>
                            </v-flex>
                        </v-layout>
                        <draggable v-else v-model="selectedRoundHole.RoundStrokes" handle=".handle" class="layout wrap align-center" group="roundStrokes" draggable=".draggable">
                            <v-flex xs12 v-for="roundStroke in selectedRoundHole.RoundStrokes" :key="roundStroke.roundStrokeId" class="draggable">
                                <v-card elevation="6" outlined>
                                    <v-container>
                                        <v-layout wrap align-center>
                                            <v-flex grow>
                                                Stroke {{roundStroke.number}}
                                            </v-flex>
                                            <v-flex shrink class="handle pt-0 pb-0 pr-0">
                                                <v-btn icon class="pa-0">
                                                    <v-icon>mdi-menu</v-icon>
                                                </v-btn>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                </v-card>
                            </v-flex>
                        </draggable>
                        <v-layout wrap align-center v-if="selectedRoundHole.RoundStrokes.length > 0">
                            <v-flex xs12>
                                <v-btn large outlined block @click.stop="addStrokeToRoundHole(selectedRoundHole)" :disabled="selectedRoundHole.RoundStrokes.length > 0 ? selectedRoundHole.RoundStrokes[selectedRoundHole.RoundStrokes.length - 1].terrainResultTypeId === 8 : false">
                                    <v-icon>mdi-plus</v-icon>Add Another Stroke
                                </v-btn>
                            </v-flex>
                        </v-layout>
                        <v-layout wrap justify-center v-if="selectedRoundHole.RoundStrokes.length > 0">
                            <v-flex xs6>
                                <v-btn block large outlined @click="goToNextRoundHole" :disabled="selectedRound.RoundHoles.indexOf(selectedRoundHole) <= 0">
                                    <v-icon>mdi-chevron-left</v-icon>Previous Hole
                                </v-btn>
                            </v-flex>
                            <v-flex xs6>
                                <v-btn block large outlined @click="goToPreviousRoundHole" :disabled="selectedRound.RoundHoles.indexOf(selectedRoundHole) >= (selectedRound.RoundHoles.length - 1)">
                                    Next Hole<v-icon>mdi-chevron-right</v-icon>
                                </v-btn>
                            </v-flex>
                        </v-layout>
                        <v-layout wrap align-center>
                            <v-flex xs12>
                                <v-divider/>
                            </v-flex>
                        </v-layout>
                        <v-layout wrap align-center>
                            <v-flex xs6 v-if="!rearrangeStrokesMode">
                                <v-btn large block outlined @click.stop="rearrangeStrokesMode = !rearrangeStrokesMode">
                                    Rearrange
                                </v-btn>
                            </v-flex>
                            <v-flex grow v-else>
                                <v-btn large block outlined @click.stop="rearrangeStrokesMode = !rearrangeStrokesMode">
                                    Done Rearranging
                                </v-btn>
                            </v-flex>
                            <v-flex xs6 v-if="!rearrangeStrokesMode">
                                <v-btn :disabled="rearrangeStrokesMode" large block outlined @click.stop="currentView = 0">
                                    Back to Round
                                </v-btn>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-fade-transition>
        <v-snackbar v-model="snackbar.show" :timeout="8000" bottom :color="snackbar.color">
            {{snackbar.message}}
            <v-btn text @click="snackbar.show = false">
                Close
            </v-btn>
        </v-snackbar>
        <v-dialog v-model="deleteRoundStrokeDialog" >
            <v-card>
                <v-container grid-list-lg fluid>
                    <v-layout wrap justify-center>
                        <v-flex xs12 sm6 md4>
                            <v-layout wrap align-center justify-center>
                                <v-flex xs12 class="pb-0">
                                    <span class="headline">Delete Stroke {{selectedRoundStroke?selectedRoundStroke.number:''}}?</span>
                                </v-flex>
                                <v-flex xs12>
                                    <span :class="$vuetify.breakpoint.smAndUp?'subtitle-1':'subtitle-2 font-weight-regular'">All remaining Strokes for this Hole will be renumbered automatically.</span>
                                </v-flex>
                            </v-layout>
                            <v-layout wrap align-center justify-center>
                                <v-flex xs6>
                                    <v-btn block color="red white--text" @click.stop="deleteRoundStroke(selectedRoundStroke)">
                                        Yes
                                    </v-btn>
                                </v-flex>
                                <v-flex xs6>
                                    <v-btn block outlined @click.stop="setSelectedRoundStroke(null)">
                                        No
                                    </v-btn>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
        </v-dialog>
        <v-dialog v-model="endRoundDialog">
            <v-card>
                <v-container grid-list-lg fluid>
                    <v-layout wrap justify-center>
                        <v-flex xs12 sm6 md4>
                            <v-layout wrap align-center justify-center>
                                <v-flex xs12 class="pb-0">
                                    <span class="headline">End this Round?</span>
                                </v-flex>
                                <v-flex xs12>
                                    <span :class="$vuetify.breakpoint.smAndUp?'subtitle-1':'subtitle-2 font-weight-regular'">Proceeding will prevent any modifications to this Round in the future.</span>
                                </v-flex>
                            </v-layout>
                            <v-layout wrap align-center justify-center>
                                <v-flex xs6>
                                    <v-btn block color="red white--text" @click.stop="endActiveRound(selectedRound)">
                                        Yes, I'm Done
                                    </v-btn>
                                </v-flex>
                                <v-flex xs6>
                                    <v-btn block outlined @click.stop="endRoundDialog = false">
                                        No, Not Yet
                                    </v-btn>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
        </v-dialog>
        <v-fade-transition>
            <v-footer v-if="selectedRound" padless app>
                <v-container grid-list-lg fluid class="pa-0">
                    <v-layout wrap justify-center class="mb-4">
                        <v-flex xs12 sm6 md4>
                            <v-tabs grow centered
                                slider-color="light-green" background-color="footer"
                                height="45" slider-size="5" color="light-green" v-model="currentView"
                            >
                                <v-tab>
                                    Scorecard
                                </v-tab>
                                <v-tab>
                                    Hole View 
                                </v-tab>
                            </v-tabs>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-footer>
        </v-fade-transition>
    </v-container>
</template>

<script>
import draggable from 'vuedraggable'

import { GolfCoursesRepository } from '../repositories';
import { UsersRepository } from '../repositories';
import { RoundsRepository } from '../repositories';

import TeeBoxIcon from '../components/TeeBoxIcon';
import RoundStroke from '../components/RoundStroke';

export default {
    name: "PlayGolf",

    components: {
        draggable,
        TeeBoxIcon,
        RoundStroke,
    },

    data: () => ({

        currentView: 0,

        golfCoursesRepository: new GolfCoursesRepository(),
        usersRepository: new UsersRepository(),
        roundsRepository: new RoundsRepository(),

        golfCourses: [],
        selectedGolfCourse: null,
        tees: [],
        selectedTee: null,

        activeRounds: [],
        selectedRound: null,

        selectedRoundHole: null,

        rearrangeStrokesMode: false,

        deleteRoundStrokeDialog: false,
        selectedRoundStroke: null,

        endRoundDialog: false,

        roundScorecardHeaders: [
            // text: string
            // value: string
            // align?: 'start' | 'center' | 'end'
            // sortable?: boolean
            // filterable?: boolean
            // divider?: boolean
            // class?: string | string[]
            // width?: string | number
            // filter?: (value: any, search: string, item: any) => boolean
            // sort?: (a: any, b: any) => number
            {
                text: "Hole",
                value: "number",
                align: "center",
                divider: true,
                width:'75',
                class:'subtitle-1 font-weight-bold'
            },
            {
                text: "HCP",
                value: "handicap",
                align: "center",
                divider: true,
                width:'0',
                class:'subtitle-1 font-weight-bold'
            },
            {
                text: "Yards",
                value: "yardage",
                align: "center",
                divider: true,
                width:'0',
                class:'subtitle-1 font-weight-bold'
            },
            {
                text: "Par",
                value: "par",
                align: "center",
                divider: true,
                width:'0',
                class:'subtitle-1 font-weight-bold'
            },
            {
                text: "Strokes",
                value: "strokes",
                align: "center",
                width:'0',
                class:'subtitle-1 font-weight-bold'
            },
        ],

        newRoundMode: false,

        snackbar: {
            show: false,
            message: '',
            color: ''
        },



    }),

    computed: {

    },

    methods: {
        setSelectedGolfCourse(golfCourse) {
            this.selectedGolfCourse = golfCourse
            if (golfCourse) {
                this.tees = this.selectedGolfCourse.Tees
            } else {
                this.tees = []
            }
        },
        setSelectedRound(round) {
            this.selectedRound = round;
            if (round) {
                if (!this.selectedRoundHole) {
                    this.selectedRoundHole = this.selectedRound.RoundHoles[0]
                }
            } else {
                this.currentView = 0
                this.selectedRoundHole = null;
            }
        },
        setSelectedRoundHole(roundHole) {
            this.selectedRoundHole = roundHole
            this.currentView = 1
        },
        setSelectedRoundStroke(roundStroke) {
            this.selectedRoundStroke = roundStroke
            if (roundStroke) {
                this.deleteRoundStrokeDialog = true
            } else {
                this.deleteRoundStrokeDialog = false
            }
        },

        addStrokeToRoundHole(roundHole) {
            this.usersRepository.addRoundStroke(roundHole.roundHoleId, this.$store.getters.user.userId)
                .then(() => {
                    this.usersRepository.getActiveRounds(this.$store.getters.user.userId)
                        .then((apiResponse) => {
                            this.activeRounds = apiResponse.data

                            const updatedRound = this.activeRounds.find(round => round.roundId === this.selectedRound.roundId);
                            this.selectedRound = updatedRound;

                            const updatedRoundHole = this.selectedRound.RoundHoles.find(roundHole => roundHole.roundHoleId === this.selectedRoundHole.roundHoleId)
                            this.selectedRoundHole = updatedRoundHole;
                        })
                        .catch((apiError) => {
                            console.error(apiError)
                            this.snackbar.message = 'Failed to get the active rounds. Please try again later.';
                            this.snackbar.color = "red";
                            this.snackbar.show = true;
                        })
                })
                .catch((apiError) => {
                    console.error(apiError)
                    if (apiError.response.status === 405) {
                        this.snackbar.message = 'The terrain result on the last stroke of this hole must be changed if you want to add more strokes.';
                        this.snackbar.color = "red";
                        this.snackbar.show = true;
                    } else {
                        this.snackbar.message = 'Failed to add a stroke to the round hole. Please try again later.';
                        this.snackbar.color = "red";
                        this.snackbar.show = true;
                    }
                })
        },

        updateRoundStroke(payload) {
            console.log(payload)
            this.usersRepository.updateRoundStroke(payload.roundStrokeId, this.selectedRoundHole.roundHoleId, this.$store.getters.user.userId, payload)
                .then(() => {
                    this.usersRepository.getActiveRounds(this.$store.getters.user.userId)
                        .then((apiResponse) => {
                            this.activeRounds = apiResponse.data

                            const updatedRound = this.activeRounds.find(round => round.roundId === this.selectedRound.roundId);
                            this.selectedRound = updatedRound;

                            const updatedRoundHole = this.selectedRound.RoundHoles.find(roundHole => roundHole.roundHoleId === this.selectedRoundHole.roundHoleId)
                            this.selectedRoundHole = updatedRoundHole;
                        })
                        .catch((apiError) => {
                            console.error(apiError)
                            this.snackbar.message = 'Failed to get the active rounds. Please try again later.';
                            this.snackbar.color = "red";
                            this.snackbar.show = true;
                        })
                })
                .catch((apiError) => {
                    console.error(apiError)
                    this.snackbar.message = 'Failed to add a stroke to the round hole. Please try again later.';
                    this.snackbar.color = "red";
                    this.snackbar.show = true;
                })
        },

        createRound() {
            this.roundsRepository.create(this.selectedGolfCourse.golfCourseId, this.selectedTee.teeId, this.$store.getters.user.userId)
                .then((createdRound) => {
                    this.usersRepository.getActiveRounds(this.$store.getters.user.userId)
                        .then((apiResponse) => {
                            this.activeRounds = apiResponse.data

                            const newestRound = this.activeRounds.find(round => round.roundId === createdRound.data.roundId);
                            this.newRoundMode = false;
                            this.setSelectedGolfCourse(null)
                            this.selectedRound = newestRound;
                        })
                        .catch(() => {
                            this.snackbar.message = 'Failed to get the list of active rounds. Please try again later.';
                            this.snackbar.color = "red";
                            this.snackbar.show = true;
                        })
                })
                .catch(() => {
                    this.snackbar.message = 'Failed to create a new Round. Please try again later.';
                    this.snackbar.color = "red";
                    this.snackbar.show = true;
                })
        },

        deleteRoundStroke(roundStroke) {
            this.usersRepository.deleteRoundStroke(roundStroke.roundStrokeId, this.selectedRoundHole.roundHoleId, this.$store.getters.user.userId)
                .then(() => {
                    this.usersRepository.getActiveRounds(this.$store.getters.user.userId)
                        .then((apiResponse) => {
                            this.activeRounds = apiResponse.data

                            const updatedRound = this.activeRounds.find(round => round.roundId === this.selectedRound.roundId);
                            this.selectedRound = updatedRound;

                            const updatedRoundHole = this.selectedRound.RoundHoles.find(roundHole => roundHole.roundHoleId === this.selectedRoundHole.roundHoleId)
                            this.selectedRoundHole = updatedRoundHole;

                            this.deleteRoundStrokeDialog = false
                        })
                        .catch((apiError) => {
                            console.error(apiError)
                            this.snackbar.message = 'Failed to get the active rounds. Please try again later.';
                            this.snackbar.color = "red";
                            this.snackbar.show = true;
                        })
                })
                .catch((apiError) => {
                    console.error(apiError)
                    this.snackbar.message = 'Failed to delete the stroke from the round hole. Please try again later.';
                    this.snackbar.color = "red";
                    this.snackbar.show = true;
                })
        },

        endActiveRound(round) {
            this.usersRepository.endActiveRound(round.roundId, this.$store.getters.user.userId)
                .then(() => {
                    this.usersRepository.getActiveRounds(this.$store.getters.user.userId)
                        .then((apiResponse) => {
                            this.activeRounds = apiResponse.data
                            this.setSelectedRound(null);

                            this.endRoundDialog = false
                            this.snackbar.message = 'Round ended successfully!';
                            this.snackbar.color = "green";
                            this.snackbar.show = true;
                        })
                        .catch((apiError) => {
                            console.error(apiError)
                            this.snackbar.message = 'Failed to get the active rounds. Please try again later.';
                            this.snackbar.color = "red";
                            this.snackbar.show = true;
                        })
                })
                .catch((apiError) => {
                    console.error(apiError)
                    this.snackbar.message = 'Failed to end the selected active round. Please try again later.';
                    this.snackbar.color = "red";
                    this.snackbar.show = true;
                })
        },

        getRoundStrokeBackgroundColor(hole, currentHoleNumber, par, strokes) {
            if (strokes === 0) {
                return 'grey'
            }
            if (hole.RoundStrokes[hole.RoundStrokes.length - 1].terrainResultTypeId !== 8) {
                return 'grey'
            }

            var toPar = strokes - par;

            if (toPar <= -2) {
                return 'pink'
            } else if (toPar == -1) {
                return 'red'
            } else if (toPar == 0) {
                return ''
            } else if (toPar == 1) {
                return 'blue'
            } else if (toPar >= 2) {
                return 'indigo'
            }
        },

        getSelectedRoundOutRoundHoles() {
            if (this.selectedRound) {
                return this.selectedRound.RoundHoles.filter(roundHole => {
                    return roundHole.isOutHole == true
                })
            } else {
                return []
            }
        },

        getSelectedRoundInRoundHoles() {
            if (this.selectedRound) {
                return this.selectedRound.RoundHoles.filter(roundHole => {
                    return roundHole.isOutHole == false
                })
            } else {
                return []
            }
        },

        getOutScore(outRoundHoles) {
            var outScore = 0;
            for (var i = 0; i < outRoundHoles.length; i++) {
                outScore += outRoundHoles[i].strokes
            }
            return outScore
        },

        getInScore(inRoundHoles) {
            var inScore = 0;
            for (var i = 0; i < inRoundHoles.length; i++) {
                inScore += inRoundHoles[i].strokes
            }
            return inScore
        },

        getTotalScore() {
            var totalScore = 0;
            for (var i = 0; i < this.selectedRound.RoundHoles.length; i++) {
                totalScore += this.selectedRound.RoundHoles[i].strokes
            }
            return totalScore
        },

        goToPreviousRoundHole() {
            var currentRoundHoleIndex = this.selectedRound.RoundHoles.indexOf(this.selectedRoundHole);
            this.selectedRoundHole = this.selectedRound.RoundHoles[currentRoundHoleIndex + 1]
        },
        goToNextRoundHole() {
            var currentRoundHoleIndex = this.selectedRound.RoundHoles.indexOf(this.selectedRoundHole);
            this.selectedRoundHole = this.selectedRound.RoundHoles[currentRoundHoleIndex - 1]
        }
    },

    created() {
        this.usersRepository.getActiveRounds(this.$store.getters.user.userId)
            .then((apiResponse) => {
                this.activeRounds = apiResponse.data
            })
            .catch(() => {
                this.snackbar.message = 'Failed to get the list of active rounds. Please try again later.';
                this.snackbar.color = "red";
                this.snackbar.show = true;
            })
            
        this.golfCoursesRepository.getAll()
            .then((apiResponse) => {
                this.golfCourses = apiResponse.data
            })
            .catch(() => {
                this.snackbar.message = 'Failed to get the list of golf courses. Please try again later.';
                this.snackbar.color = "red";
                this.snackbar.show = true;
            })

        this.usersRepository.getGolfBag(this.$store.getters.user.userId)
            .then((apiResponse) => {
                this.$store.state.golfBag = apiResponse.data;
            })
            .catch((apiError) => {
                console.error(apiError);
                this.snackbar.message = 'Failed to get your golf bag. Please try again later.';
                this.snackbar.color = "red";
                this.snackbar.show = true;
            })
    },
    
};
</script>

<style>

.eighteenHoleCard-frontNine {
    border-top-left-radius: .2rem !important;
    border-top-right-radius: .2rem !important;
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
    border-bottom: none !important;
}

.eighteenHoleCard-backNine {
    border-top-left-radius: 0 !important;
    border-top-right-radius: 0 !important;
}

</style>
