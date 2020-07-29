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
                        <!-- <v-layout wrap align-center>
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
                        </v-layout> -->
                    </v-flex>
                </v-layout>
            </v-container>
            <v-container grid-list-lg fluid v-else-if="selectedRound && currentView == 2" key="4" class="pt-1">
                <v-layout wrap justify-center>
                    <v-flex xs12 sm6 md4>
                        <v-layout wrap align-center>
                            <v-flex shrink class="pr-0 pb-0">
                                <v-btn icon small outlined @click="currentView = 1">
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
                            <v-flex xs12 class="pt-0 pb-0" v-if="satisfactionStats.cumulativeSatisfactionSeries.length > 0">
                                Cumulative Satisfaction
                            </v-flex>
                            <v-flex xs12 v-if="satisfactionStats.cumulativeSatisfactionSeries.length > 0">
                                <v-card outlined>
                                    <v-sparkline
                                        :value="satisfactionStats.cumulativeSatisfactionSeries"
                                        :gradient="['red', 'orange', 'yellow', 'lime', 'green']"
                                        height="100" line-width="2" gradient-direction="bottom"
                                        padding="10"
                                        stroke-linecap="round"
                                        smooth auto-draw
                                    ></v-sparkline>
                                    <!-- <apexchart 
                                        type="line" 
                                        height="200px" 
                                        :options="{
                                            theme: {
                                                mode: $vuetify.theme.dark? 'dark' : 'light'
                                            }
                                        }" 
                                        :series="[{name:'Satisfaction',data: satisfactionStats.cumulativeSatisfactionSeries}]"
                                    ></apexchart> -->
                                </v-card>
                            </v-flex>
                            <v-flex xs12 class="pt-0 pb-0">
                                Score
                            </v-flex>
                            <v-flex xs12 v-if="scoreToParStats.cumulativeScoreToParSeries.length > 0">
                                <v-card outlined>
                                    <v-sparkline
                                        :value="scoreToParStats.cumulativeScoreToParSeries"
                                        :gradient="['red', 'grey', 'blue',]"
                                        height="50" line-width="2" gradient-direction="bottom"
                                        padding="10"
                                        stroke-linecap="round"
                                        smooth auto-draw
                                    ></v-sparkline>
                                    <!-- <apexchart 
                                        type="line" 
                                        height="200px" 
                                        :options="{
                                            chart: {
                                                toolbar: {
                                                    show: false
                                                }
                                            },
                                            theme: {
                                                mode: $vuetify.theme.dark? 'dark' : 'light'
                                            },
                                            grid: {
                                                show: false
                                            },
                                            yaxis: [
                                                {
                                                    seriesName: 'Score To Par',
                                                    axisTicks: {
                                                        show: false,
                                                    },
                                                    title: {
                                                        text: 'Score To Par',
                                                    },
                                                    tooltip: {
                                                        enabled: false
                                                    }
                                                },
                                                {
                                                    seriesName: 'Satisfaction',
                                                    opposite: true,
                                                    axisTicks: {
                                                        show: false,
                                                    },
                                                    title: {
                                                        text: 'Satisfaction',
                                                    }
                                                }
                                            ]
                                        }" 
                                        :series="[{name:'Score To Par',data: scoreToParStats.cumulativeScoreToParSeries},
                                        {name:'Satisfaction',data: satisfactionStats.cumulativeSatisfactionByHoleSeries}]"
                                    ></apexchart> -->
                                </v-card>
                            </v-flex>
                            <v-flex xs12>
                                <v-card outlined>
                                    <v-data-table  mobile-breakpoint="0"
                                        :headers="roundScoreToParStatHeaders"
                                        :items="[scoreToParStats] || []"
                                        hide-default-footer disable-pagination
                                        disable-sort dense
                                    >
                                        <template v-slot:item.totalParThreeScoreToPar="{ item }">
                                            <span class="subtitle-1 font-weight-medium" :class="[item.totalParThreeScoreToPar > 0 ? 'blue--text' : item.totalParThreeScoreToPar == 0 ? 'grey--text' : 'red--text']" tile flat>
                                                {{item.totalParThreeScoreToPar == 0 ? 'E' : item.totalParThreeScoreToPar > 0 ? `+${item.totalParThreeScoreToPar}`:`${item.totalParThreeScoreToPar}`}}
                                            </span>
                                        </template>
                                        <template v-slot:item.totalParFourScoreToPar="{ item }">
                                            <span class="subtitle-1 font-weight-medium" :class="[item.totalParFourScoreToPar > 0 ? 'blue--text' : item.totalParFourScoreToPar == 0 ? 'grey--text' : 'red--text']" tile flat>
                                                {{item.totalParFourScoreToPar == 0 ? 'E' : item.totalParFourScoreToPar > 0 ? `+${item.totalParFourScoreToPar}`:`${item.totalParFourScoreToPar}`}}
                                            </span>
                                        </template>
                                        <template v-slot:item.totalParFiveScoreToPar="{ item }">
                                            <span class="subtitle-1 font-weight-medium" :class="[item.totalParFiveScoreToPar > 0 ? 'blue--text' : item.totalParFiveScoreToPar == 0 ? 'grey--text' : 'red--text']" tile flat>
                                                {{item.totalParFiveScoreToPar == 0 ? 'E' : item.totalParFiveScoreToPar > 0 ? `+${item.totalParFiveScoreToPar}`:`${item.totalParFiveScoreToPar}`}}
                                            </span>
                                        </template>
                                        <template v-slot:item.totalScoreToPar="{ item }">
                                            <span class="subtitle-1 font-weight-black" :class="[item.totalScoreToPar > 0 ? 'blue--text' : item.totalScoreToPar == 0 ? 'grey--text' : 'red--text']" tile flat>
                                                {{item.totalScoreToPar == 0 ? 'E' : item.totalScoreToPar > 0 ? `+${item.totalScoreToPar}`:`${item.totalScoreToPar}`}}
                                            </span>
                                        </template>
                                    </v-data-table>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 class="pt-0 pb-0">
                                Fairways
                            </v-flex>
                            <v-flex xs12>
                                <v-card outlined>
                                    <v-data-table  mobile-breakpoint="0"
                                        :headers="roundFairwayStatHeaders"
                                        :items="[fairwayStats] || []"
                                        hide-default-footer disable-pagination
                                        disable-sort dense
                                    >
                                        <template v-slot:item.totalParFourFairwaysHit="{ item }">
                                            <span class="subtitle-1 font-weight-medium" tile flat>
                                                {{item.totalParFourFairwaysHit}} / {{item.totalParFourFairways}}
                                            </span>
                                        </template>
                                        <template v-slot:item.totalParFiveFairwaysHit="{ item }">
                                            <span class="subtitle-1 font-weight-medium" tile flat>
                                                {{item.totalParFiveFairwaysHit}} / {{item.totalParFiveFairways}}
                                            </span>
                                        </template>
                                        <template v-slot:item.totalFairwaysHit="{ item }">
                                            <span class="subtitle-1 font-weight-black" tile flat>
                                                {{item.totalFairwaysHit}} / {{item.totalFairways}}
                                            </span>
                                        </template>
                                    </v-data-table>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 class="pt-0 pb-0">
                                Greens
                            </v-flex>
                            <v-flex xs12>
                                <v-card outlined>
                                    <v-data-table  mobile-breakpoint="0"
                                        :headers="roundGreenStatHeaders"
                                        :items="[greenStats] || []"
                                        hide-default-footer disable-pagination
                                        disable-sort dense
                                    >
                                        <template v-slot:item.totalParThreeGreensHit="{ item }">
                                            <span class="subtitle-1 font-weight-medium" tile flat>
                                                {{item.totalParThreeGreensHit}} / {{item.totalParThreeGreens}}
                                            </span>
                                        </template>
                                        <template v-slot:item.totalParFourGreensHit="{ item }">
                                            <span class="subtitle-1 font-weight-medium" tile flat>
                                                {{item.totalParFourGreensHit}} / {{item.totalParFourGreens}}
                                            </span>
                                        </template>
                                        <template v-slot:item.totalParFiveGreensHit="{ item }">
                                            <span class="subtitle-1 font-weight-medium" tile flat>
                                                {{item.totalParFiveGreensHit}} / {{item.totalParFiveGreens}}
                                            </span>
                                        </template>
                                        <template v-slot:item.totalGreensHit="{ item }">
                                            <span class="subtitle-1 font-weight-black" tile flat>
                                                {{item.totalGreensHit}} / {{item.totalGreens}}
                                            </span>
                                        </template>
                                    </v-data-table>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 class="pt-0 pb-0">
                                Scramble
                            </v-flex>
                            <v-flex xs12>
                                <v-card outlined>
                                    <v-data-table  mobile-breakpoint="0"
                                        :headers="roundScrambleStatHeaders"
                                        :items="[scrambleStats] || []"
                                        hide-default-footer disable-pagination
                                        disable-sort dense
                                    >
                                        <template v-slot:item.totalParThreeScrambleSuccesses="{ item }">
                                            <span class="subtitle-1 font-weight-medium" tile flat>
                                                {{item.totalParThreeScrambleSuccesses}} / {{item.totalParThreeScrambleChances}}
                                            </span>
                                        </template>
                                        <template v-slot:item.totalParFourScrambleSuccesses="{ item }">
                                            <span class="subtitle-1 font-weight-medium" tile flat>
                                                {{item.totalParFourScrambleSuccesses}} / {{item.totalParFourScrambleChances}}
                                            </span>
                                        </template>
                                        <template v-slot:item.totalParFiveScrambleSuccesses="{ item }">
                                            <span class="subtitle-1 font-weight-medium" tile flat>
                                                {{item.totalParFiveScrambleSuccesses}} / {{item.totalParFiveScrambleChances}}
                                            </span>
                                        </template>
                                        <template v-slot:item.totalScrambleSuccesses="{ item }">
                                            <span class="subtitle-1 font-weight-black" tile flat>
                                                {{item.totalScrambleSuccesses}} / {{item.totalScrambleChances}}
                                            </span>
                                        </template>
                                    </v-data-table>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 class="pt-0 pb-0">
                                Putts
                            </v-flex>
                            <v-flex xs12>
                                <v-card outlined>
                                    <v-data-table  mobile-breakpoint="0"
                                        :headers="roundPuttTotalsStatHeaders"
                                        :items="[puttStats] || []"
                                        hide-default-footer disable-pagination
                                        disable-sort dense
                                    >
                                        <template v-slot:item.totalZeroPutts="{ item }">
                                            <span class="subtitle-1 font-weight-medium" tile flat>
                                                {{item.totalZeroPutts}}
                                            </span>
                                        </template>
                                        <template v-slot:item.totalOnePutts="{ item }">
                                            <span class="subtitle-1 font-weight-medium" tile flat>
                                                {{item.totalOnePutts}}
                                            </span>
                                        </template>
                                        <template v-slot:item.totalTwoPutts="{ item }">
                                            <span class="subtitle-1 font-weight-medium" tile flat>
                                                {{item.totalTwoPutts}}
                                            </span>
                                        </template>
                                        <template v-slot:item.totalThreeOrMorePutts="{ item }">
                                            <span class="subtitle-1 font-weight-medium" tile flat>
                                                {{item.totalThreeOrMorePutts}}
                                            </span>
                                        </template>
                                        <template v-slot:item.totalPutts="{ item }">
                                            <span class="subtitle-1 font-weight-black" tile flat>
                                                {{item.totalPutts}}
                                            </span>
                                        </template>
                                    </v-data-table>
                                </v-card>
                            </v-flex>
                            <v-flex xs12>
                                <v-card outlined>
                                    <v-data-table  mobile-breakpoint="0"
                                        :headers="roundPuttTypesStatHeaders"
                                        :items="[puttStats] || []"
                                        hide-default-footer disable-pagination
                                        disable-sort dense
                                    >
                                        <template v-slot:item.totalShortPuttsAttempted="{ item }">
                                            <span class="subtitle-1 font-weight-medium" tile flat>
                                                {{item.totalShortPuttsMade}} / {{item.totalShortPuttsAttempted}}
                                            </span>
                                        </template>
                                        <template v-slot:item.totalMediumPuttsAttempted="{ item }">
                                            <span class="subtitle-1 font-weight-medium" tile flat>
                                                {{item.totalMediumPuttsMade}} / {{item.totalMediumPuttsAttempted}}
                                            </span>
                                        </template>
                                        <template v-slot:item.totalLongPuttsAttempted="{ item }">
                                            <span class="subtitle-1 font-weight-medium" tile flat>
                                                {{item.totalLongPuttsMade}} / {{item.totalLongPuttsAttempted}}
                                            </span>
                                        </template>
                                    </v-data-table>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 class="pt-0 pb-0">
                                Penalties
                            </v-flex>
                            <v-flex xs12>
                                <v-card outlined>
                                    <v-data-table  mobile-breakpoint="0"
                                        :headers="roundPenaltyStatHeaders"
                                        :items="[penaltyStats] || []"
                                        hide-default-footer disable-pagination
                                        disable-sort dense
                                    >
                                        <template v-slot:item.totalParThreePenalties="{ item }">
                                            <span class="subtitle-1 font-weight-medium" tile flat>
                                                {{item.totalParThreePenalties}}
                                            </span>
                                        </template>
                                        <template v-slot:item.totalParFourPenalties="{ item }">
                                            <span class="subtitle-1 font-weight-medium" tile flat>
                                                {{item.totalParFourPenalties}}
                                            </span>
                                        </template>
                                        <template v-slot:item.totalParFivePenalties="{ item }">
                                            <span class="subtitle-1 font-weight-medium" tile flat>
                                                {{item.totalParFivePenalties}}
                                            </span>
                                        </template>
                                        <template v-slot:item.totalPenalties="{ item }">
                                            <span class="subtitle-1 font-weight-black" tile flat>
                                                {{item.totalPenalties}}
                                            </span>
                                        </template>
                                    </v-data-table>
                                </v-card>
                            </v-flex>
                            <!-- <v-flex xs6>
                                Recovery
                            </v-flex>
                            <v-flex xs6 class="text-right">
                                {{recoveryStats.recoverySuccesses}} / {{recoveryStats.recoveryChances}}, {{recoveryStats.recoveryPercent | percent}}
                            </v-flex>
                            <v-flex xs6>
                                Consistency
                            </v-flex>
                            <v-flex xs6 class="text-right">
                                {{consistencyStats.consistencySuccesses}} / {{consistencyStats.consistencyChances}}, {{consistencyStats.consistencyPercent | percent}}
                            </v-flex>
                            <v-flex xs6>
                                Teeshot Success
                            </v-flex>
                            <v-flex xs6 class="text-right">
                                {{teeshotSuccessStats.teeshotSuccesses}} / {{teeshotSuccessStats.teeshotChances}}, {{teeshotSuccessStats.teeshotSuccessesPercent | percent}}
                            </v-flex>
                            <v-flex xs6>
                                Teeshot Mistakes
                            </v-flex>
                            <v-flex xs6 class="text-right">
                                {{teeshotMistakesStats.teeshotMistakes}} / {{teeshotMistakesStats.teeshotChances}}, {{teeshotMistakesStats.teeshotMistakesPercent | percent}}
                            </v-flex> -->
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
                                <v-tab>
                                    Stats View 
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
import TerrainType from '../models/TerrainType';
import StrokeType from '../models/StrokeType';
import LieQualityType from '../models/LieQualityType';
import SatisfactionType from '../models/SatisfactionType';

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

        roundStatcardHeaders: [
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
                width:'0',
                class:'subtitle-1 font-weight-bold'
            },
            {
                text: "FIR",
                value: "handicap",
                align: "center",
                divider: true,
                width:'0',
                class:'subtitle-1 font-weight-bold'
            },
            {
                text: "GIR",
                value: "yardage",
                align: "center",
                divider: true,
                width:'0',
                class:'subtitle-1 font-weight-bold'
            },
            {
                text: "Putts",
                value: "par",
                align: "center",
                divider: true,
                width:'0',
                class:'subtitle-1 font-weight-bold'
            },
            {
                text: "Pen",
                value: "strokes",
                align: "center",
                width:'0',
                class:'subtitle-1 font-weight-bold'
            },
        ],

        roundPuttTotalsStatHeaders: [
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
                text: "0 Putts",
                value: "totalZeroPutts",
                align: "center",
                divider: true,
                width:'0',
                class:'caption font-weight-medium'
            },
            {
                text: "1 Putts",
                value: "totalOnePutts",
                align: "center",
                divider: true,
                width:'0',
                class:'caption font-weight-medium'
            },
            {
                text: "2 Putts",
                value: "totalTwoPutts",
                align: "center",
                divider: true,
                width:'0',
                class:'caption font-weight-medium'
            },
            {
                text: "3+ Putts",
                value: "totalThreeOrMorePutts",
                align: "center",
                divider: true,
                width:'0',
                class:'caption font-weight-medium'
            },
            {
                text: "Total",
                value: "totalPutts",
                align: "center",
                width:'0',
                class:'caption font-weight-medium'
            },
        ],

        roundPuttTypesStatHeaders: [
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
                text: "Short",
                value: "totalShortPuttsAttempted",
                align: "center",
                divider: true,
                width:'0',
                class:'caption font-weight-medium'
            },
            {
                text: "Medium",
                value: "totalMediumPuttsAttempted",
                align: "center",
                divider: true,
                width:'0',
                class:'caption font-weight-medium'
            },
            {
                text: "Long",
                value: "totalLongPuttsAttempted",
                align: "center",
                width:'0',
                class:'caption font-weight-medium'
            },
        ],

        roundGreenStatHeaders: [
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
                text: "Par 3s",
                value: "totalParThreeGreensHit",
                align: "center",
                divider: true,
                width:'0',
                class:'caption font-weight-medium'
            },
            {
                text: "Par 4s",
                value: "totalParFourGreensHit",
                align: "center",
                divider: true,
                width:'0',
                class:'caption font-weight-medium'
            },
            {
                text: "Par 5s",
                value: "totalParFiveGreensHit",
                align: "center",
                divider: true,
                width:'0',
                class:'caption font-weight-medium'
            },
            {
                text: "Total",
                value: "totalGreensHit",
                align: "center",
                width:'0',
                class:'caption font-weight-medium'
            },
        ],

        roundFairwayStatHeaders: [
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
                text: "Par 4s",
                value: "totalParFourFairwaysHit",
                align: "center",
                divider: true,
                width:'0',
                class:'caption font-weight-medium'
            },
            {
                text: "Par 5s",
                value: "totalParFiveFairwaysHit",
                align: "center",
                divider: true,
                width:'0',
                class:'caption font-weight-medium'
            },
            {
                text: "Total",
                value: "totalFairwaysHit",
                align: "center",
                width:'0',
                class:'caption font-weight-medium'
            },
        ],

        roundScrambleStatHeaders: [
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
                text: "Par 3s",
                value: "totalParThreeScrambleSuccesses",
                align: "center",
                divider: true,
                width:'0',
                class:'caption font-weight-medium'
            },
            {
                text: "Par 4s",
                value: "totalParFourScrambleSuccesses",
                align: "center",
                divider: true,
                width:'0',
                class:'caption font-weight-medium'
            },
            {
                text: "Par 5s",
                value: "totalParFiveScrambleSuccesses",
                align: "center",
                divider: true,
                width:'0',
                class:'caption font-weight-medium'
            },
            {
                text: "Total",
                value: "totalScrambleSuccesses",
                align: "center",
                width:'0',
                class:'caption font-weight-medium'
            },
        ],

        roundScoreToParStatHeaders: [
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
                text: "Par 3s",
                value: "totalParThreeScoreToPar",
                align: "center",
                divider: true,
                width:'0',
                class:'caption font-weight-medium'
            },
            {
                text: "Par 4s",
                value: "totalParFourScoreToPar",
                align: "center",
                divider: true,
                width:'0',
                class:'caption font-weight-medium'
            },
            {
                text: "Par 5s",
                value: "totalParFiveScoreToPar",
                align: "center",
                divider: true,
                width:'0',
                class:'caption font-weight-medium'
            },
            {
                text: "Total",
                value: "totalScoreToPar",
                align: "center",
                width:'0',
                class:'caption font-weight-medium'
            },
        ],

        roundPenaltyStatHeaders: [
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
                text: "Par 3s",
                value: "totalParThreePenalties",
                align: "center",
                divider: true,
                width:'0',
                class:'caption font-weight-medium'
            },
            {
                text: "Par 4s",
                value: "totalParFourPenalties",
                align: "center",
                divider: true,
                width:'0',
                class:'caption font-weight-medium'
            },
            {
                text: "Par 5s",
                value: "totalParFivePenalties",
                align: "center",
                divider: true,
                width:'0',
                class:'caption font-weight-medium'
            },
            {
                text: "Total",
                value: "totalPenalties",
                align: "center",
                width:'0',
                class:'caption font-weight-medium'
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
        fairwayStats() {
            var totalParFourFairways = 0;
            var totalParFourFairwaysHit = 0;
            var totalParFiveFairways = 0;
            var totalParFiveFairwaysHit = 0;
            if (this.selectedRound) {
                for (var i = 0; i < this.selectedRound.RoundHoles.length; i++) {
                    if (this.selectedRound.RoundHoles[i].RoundStrokes.length >= 1 && this.selectedRound.RoundHoles[i].par === 4) {
                        totalParFourFairways++;
                        if (this.selectedRound.RoundHoles[i].RoundStrokes[0].terrainResultTypeId === TerrainType.TYPES.FAIRWAY_CORRECT.ID) {
                            totalParFourFairwaysHit++;
                        }
                    } else if (this.selectedRound.RoundHoles[i].RoundStrokes.length >= 1 && this.selectedRound.RoundHoles[i].par === 5) {
                        totalParFiveFairways++;
                        if (this.selectedRound.RoundHoles[i].RoundStrokes[0].terrainResultTypeId === TerrainType.TYPES.FAIRWAY_CORRECT.ID) {
                            totalParFiveFairwaysHit++;
                        }
                    }
                }
            }
            return {
                totalParFourFairways: totalParFourFairways,
                totalParFourFairwaysHit: totalParFourFairwaysHit,
                totalParFiveFairways: totalParFiveFairways,
                totalParFiveFairwaysHit: totalParFiveFairwaysHit,
                totalFairways: totalParFourFairways + totalParFiveFairways,
                totalFairwaysHit: totalParFourFairwaysHit + totalParFiveFairwaysHit
            };
        },
        greenStats() {
            var totalParThreeGreens = 0;
            var totalParThreeGreensHit = 0;
            var totalParFourGreens = 0;
            var totalParFourGreensHit = 0;
            var totalParFiveGreens = 0;
            var totalParFiveGreensHit = 0;
            if (this.selectedRound) {
                for (var i = 0; i < this.selectedRound.RoundHoles.length; i++) {
                    if (this.selectedRound.RoundHoles[i].par === 3) {
                        if (this.selectedRound.RoundHoles[i].RoundStrokes.length >= 1) {
                            totalParThreeGreens++;
                            if (this.selectedRound.RoundHoles[i].RoundStrokes[0].terrainResultTypeId === TerrainType.TYPES.GREEN.ID) {
                                totalParThreeGreensHit++;
                            }
                        }
                    } else if (this.selectedRound.RoundHoles[i].par === 4) {
                        if (this.selectedRound.RoundHoles[i].RoundStrokes.length >= 2) {
                            totalParFourGreens++;
                            if (this.selectedRound.RoundHoles[i].RoundStrokes[1].terrainResultTypeId === TerrainType.TYPES.GREEN.ID) {
                                totalParFourGreensHit++;
                            }
                        }
                    } else if (this.selectedRound.RoundHoles[i].par === 5) {
                        if (this.selectedRound.RoundHoles[i].RoundStrokes.length >= 3) {
                            totalParFiveGreens++;
                            if (this.selectedRound.RoundHoles[i].RoundStrokes[2].terrainResultTypeId === TerrainType.TYPES.GREEN.ID) {
                                totalParFiveGreensHit++;
                            }
                        }
                    }
                }
            }
            return {
                totalParThreeGreens: totalParThreeGreens,
                totalParThreeGreensHit: totalParThreeGreensHit,
                totalParFourGreens: totalParFourGreens,
                totalParFourGreensHit: totalParFourGreensHit,
                totalParFiveGreens: totalParFiveGreens,
                totalParFiveGreensHit: totalParFiveGreensHit,
                totalGreens: totalParThreeGreens + totalParFourGreens + totalParFiveGreens,
                totalGreensHit: totalParThreeGreensHit + totalParFourGreensHit + totalParFiveGreensHit
            };
        },
        puttStats() {
            var totalZeroPutts = 0;
            var totalOnePutts = 0;
            var totalTwoPutts = 0;
            var totalThreeOrMorePutts = 0;
            var totalPutts = 0;

            var totalShortPuttsAttempted = 0;
            var totalShortPuttsMade = 0;
            var totalMediumPuttsAttempted = 0;
            var totalMediumPuttsMade = 0;
            var totalLongPuttsAttempted = 0;
            var totalLongPuttsMade = 0;

            if (this.selectedRound) {
                for (var i = 0; i < this.selectedRound.RoundHoles.length; i++) {
                    var currentRoundHole = this.selectedRound.RoundHoles[i];
                    if (currentRoundHole.RoundStrokes[currentRoundHole.RoundStrokes.length - 1]) {
                        if (currentRoundHole.RoundStrokes[currentRoundHole.RoundStrokes.length - 1].terrainResultTypeId === TerrainType.TYPES.HOLE.ID) {
                            var currentHoleTotalPutts = 0;
                            for (var j = 0; j < currentRoundHole.RoundStrokes.length; j++) {
                                var currentRoundStroke = currentRoundHole.RoundStrokes[j];
                                var currentRoundStrokeTypeId = currentRoundHole.RoundStrokes[j].strokeTypeId;
                                if (currentRoundStroke.terrainStartTypeId === TerrainType.TYPES.GREEN.ID && 
                                        (currentRoundStrokeTypeId === StrokeType.TYPES.PUTT_LONG.ID || 
                                        currentRoundStrokeTypeId === StrokeType.TYPES.PUTT_MEDIUM.ID || 
                                        currentRoundStrokeTypeId === StrokeType.TYPES.PUTT_SHORT.ID)
                                ) {
                                    currentHoleTotalPutts++;
                                    if (currentRoundStrokeTypeId === StrokeType.TYPES.PUTT_LONG.ID) {
                                        totalLongPuttsAttempted++;
                                    } else if (currentRoundStrokeTypeId === StrokeType.TYPES.PUTT_MEDIUM.ID) {
                                        totalMediumPuttsAttempted++;
                                    } else if (currentRoundStrokeTypeId === StrokeType.TYPES.PUTT_SHORT.ID) {
                                        totalShortPuttsAttempted++;
                                    }
                                }
                                if (currentRoundStroke.terrainResultTypeId === TerrainType.TYPES.HOLE.ID) {
                                    if (currentRoundStrokeTypeId === StrokeType.TYPES.PUTT_LONG.ID) {
                                        totalLongPuttsMade++;
                                    } else if (currentRoundStrokeTypeId === StrokeType.TYPES.PUTT_MEDIUM.ID) {
                                        totalMediumPuttsMade++;
                                    } else if (currentRoundStrokeTypeId === StrokeType.TYPES.PUTT_SHORT.ID) {
                                        totalShortPuttsMade++;
                                    }
                                }
                            }
                            if (currentHoleTotalPutts === 0) {
                                totalZeroPutts++;
                            } else if (currentHoleTotalPutts === 1) {
                                totalOnePutts++;
                            } else if (currentHoleTotalPutts === 2) {
                                totalTwoPutts++;
                            } else if (currentHoleTotalPutts >= 3) {
                                totalThreeOrMorePutts++;
                            }
                            totalPutts += currentHoleTotalPutts;
                        }
                    }
                }
            }
            return {
                totalZeroPutts: totalZeroPutts,
                totalOnePutts: totalOnePutts,
                totalTwoPutts: totalTwoPutts,
                totalThreeOrMorePutts: totalThreeOrMorePutts,
                totalPutts: totalPutts,

                totalShortPuttsAttempted: totalShortPuttsAttempted,
                totalShortPuttsMade: totalShortPuttsMade,
                totalMediumPuttsAttempted: totalMediumPuttsAttempted,
                totalMediumPuttsMade: totalMediumPuttsMade,
                totalLongPuttsAttempted: totalLongPuttsAttempted,
                totalLongPuttsMade: totalLongPuttsMade
            };
        },
        scrambleStats() {
            var totalParThreeScrambleChances = 0;
            var totalParThreeScrambleSuccesses = 0;
            var totalParFourScrambleChances = 0;
            var totalParFourScrambleSuccesses = 0;
            var totalParFiveScrambleChances = 0;
            var totalParFiveScrambleSuccesses = 0;
            if (this.selectedRound) {
                for (var i = 0; i < this.selectedRound.RoundHoles.length; i++) {
                    var currentRoundHole = this.selectedRound.RoundHoles[i];
                    if (currentRoundHole.par === 3) {
                        if (currentRoundHole.RoundStrokes.length >= 1) {
                            if (currentRoundHole.RoundStrokes[0].terrainResultTypeId !== TerrainType.TYPES.GREEN.ID) {
                                totalParThreeScrambleChances++;
                                if (currentRoundHole.RoundStrokes.length <= currentRoundHole.par && currentRoundHole.RoundStrokes[currentRoundHole.RoundStrokes.length - 1].terrainResultTypeId === TerrainType.TYPES.HOLE.ID) {
                                    totalParThreeScrambleSuccesses++;
                                }
                            }
                        }
                    } else if (currentRoundHole.par === 4) {
                        if (currentRoundHole.RoundStrokes.length >= 2) {
                            if (currentRoundHole.RoundStrokes[1].terrainResultTypeId !== TerrainType.TYPES.GREEN.ID) {
                                totalParFourScrambleChances++;
                                if (currentRoundHole.RoundStrokes.length <= currentRoundHole.par && currentRoundHole.RoundStrokes[currentRoundHole.RoundStrokes.length - 1].terrainResultTypeId === TerrainType.TYPES.HOLE.ID) {
                                    totalParFourScrambleSuccesses++;
                                }
                            }
                        }
                    } else if (currentRoundHole.par === 5) {
                        if (currentRoundHole.RoundStrokes.length >= 3) {
                            if (currentRoundHole.RoundStrokes[2].terrainResultTypeId !== TerrainType.TYPES.GREEN.ID) {
                                totalParFiveScrambleChances++;
                                if (currentRoundHole.RoundStrokes.length <= currentRoundHole.par && currentRoundHole.RoundStrokes[currentRoundHole.RoundStrokes.length - 1].terrainResultTypeId === TerrainType.TYPES.HOLE.ID) {
                                    totalParFiveScrambleSuccesses++;
                                }
                            }
                        }
                    }
                }
            }
            var totalScrambleChances = totalParThreeScrambleChances + totalParFourScrambleChances + totalParFiveScrambleChances;
            var totalScrambleSuccesses = totalParThreeScrambleSuccesses + totalParFourScrambleSuccesses + totalParFiveScrambleSuccesses;
            return {
                totalParThreeScrambleChances: totalParThreeScrambleChances,
                totalParThreeScrambleSuccesses: totalParThreeScrambleSuccesses,
                parThreeScramblePercent: totalParThreeScrambleSuccesses / totalParThreeScrambleChances,
                totalParFourScrambleChances: totalParFourScrambleChances,
                totalParFourScrambleSuccesses: totalParFourScrambleSuccesses,
                parFourScramblePercent: totalParFourScrambleSuccesses / totalParFourScrambleChances,
                totalParFiveScrambleChances: totalParFiveScrambleChances,
                totalParFiveScrambleSuccesses: totalParFiveScrambleSuccesses,
                parFiveScramblePercent: totalParFiveScrambleSuccesses / totalParFiveScrambleChances,
                totalScrambleChances: totalScrambleChances,
                totalScrambleSuccesses: totalScrambleSuccesses,
                scramblePercent: totalScrambleSuccesses / totalScrambleChances
            };
        },
        scoreToParStats() {
            var totalParThreeScoreToPar = 0;
            var totalParFourScoreToPar = 0;
            var totalParFiveScoreToPar = 0;
            var cumulativeScoreToParSeries = [];
            if (this.selectedRound) {
                for (var i = 0; i < this.selectedRound.RoundHoles.length; i++) {
                    var currentRoundHole = this.selectedRound.RoundHoles[i];
                    if (currentRoundHole.par === 3) {
                        if (currentRoundHole.RoundStrokes[currentRoundHole.RoundStrokes.length - 1].terrainResultTypeId === TerrainType.TYPES.HOLE.ID) {
                            totalParThreeScoreToPar += (currentRoundHole.RoundStrokes.length - currentRoundHole.par);
                        }
                    } else if (currentRoundHole.par === 4) {
                        if (currentRoundHole.RoundStrokes[currentRoundHole.RoundStrokes.length - 1].terrainResultTypeId === TerrainType.TYPES.HOLE.ID) {
                            totalParFourScoreToPar += (currentRoundHole.RoundStrokes.length - currentRoundHole.par);
                        }
                    } else if (currentRoundHole.par === 5) {
                        if (currentRoundHole.RoundStrokes[currentRoundHole.RoundStrokes.length - 1].terrainResultTypeId === TerrainType.TYPES.HOLE.ID) {
                            totalParFiveScoreToPar += (currentRoundHole.RoundStrokes.length - currentRoundHole.par);
                        }
                    }
                    cumulativeScoreToParSeries.push((totalParThreeScoreToPar + totalParFourScoreToPar + totalParFiveScoreToPar));
                }
            }
            var totalScoreToPar = totalParThreeScoreToPar + totalParFourScoreToPar + totalParFiveScoreToPar;
            return {
                totalParThreeScoreToPar: totalParThreeScoreToPar,
                totalParFourScoreToPar: totalParFourScoreToPar,
                totalParFiveScoreToPar: totalParFiveScoreToPar,
                totalScoreToPar: totalScoreToPar,
                cumulativeScoreToParSeries: cumulativeScoreToParSeries
            };
        },
        penaltyStats() {
            var totalParThreePenalties = 0;
            var totalParFourPenalties = 0;
            var totalParFivePenalties = 0;
            if (this.selectedRound) {
                for (var i = 0; i < this.selectedRound.RoundHoles.length; i++) {
                    var currentRoundHole = this.selectedRound.RoundHoles[i];
                    for (var j = 0; j < currentRoundHole.RoundStrokes.length; j++) {
                        if (currentRoundHole.par === 3) {
                            if (currentRoundHole.RoundStrokes[j].strokeTypeId === StrokeType.TYPES.PENALTY_DROP.ID) {
                                totalParThreePenalties ++;
                            }
                        } else if (currentRoundHole.par === 4) {
                            if (currentRoundHole.RoundStrokes[j].strokeTypeId === StrokeType.TYPES.PENALTY_DROP.ID) {
                                totalParFourPenalties ++;
                            }
                        } else if (currentRoundHole.par === 5) {
                            if (currentRoundHole.RoundStrokes[j].strokeTypeId === StrokeType.TYPES.PENALTY_DROP.ID) {
                                totalParFivePenalties ++;
                            }
                        }
                    }
                }
            }
            var totalPenalties = totalParThreePenalties + totalParFourPenalties + totalParFivePenalties;
            return {
                totalParThreePenalties: totalParThreePenalties,
                totalParFourPenalties: totalParFourPenalties,
                totalParFivePenalties: totalParFivePenalties,
                totalPenalties: totalPenalties
            };
        },
        satisfactionStats() {
            var totalSatisfactionRatings = 0;
            var totalSatisfaction = 0;
            var cumulativeSatisfaction = 0;
            var cumulativeSatisfactionSeries = [];
            var cumulativeSatisfactionByHoleSeries = [];
            if (this.selectedRound) {
                for (var i = 0; i < this.selectedRound.RoundHoles.length; i++) {
                    var currentRoundHole = this.selectedRound.RoundHoles[i];
                    for (var j = 0; j < currentRoundHole.RoundStrokes.length; j++) {
                        totalSatisfaction += currentRoundHole.RoundStrokes[j].satisfactionTypeId;
                        totalSatisfactionRatings++;
                        if (currentRoundHole.RoundStrokes[j].satisfactionTypeId === SatisfactionType.TYPES.FANTASTIC.ID) {
                            cumulativeSatisfaction += 2;
                        } else if (currentRoundHole.RoundStrokes[j].satisfactionTypeId === SatisfactionType.TYPES.GOOD.ID) {
                            cumulativeSatisfaction ++;
                        } else if (currentRoundHole.RoundStrokes[j].satisfactionTypeId === SatisfactionType.TYPES.BAD.ID) {
                            cumulativeSatisfaction --;
                        } else if (currentRoundHole.RoundStrokes[j].satisfactionTypeId === SatisfactionType.TYPES.TERRIBLE.ID) {
                            cumulativeSatisfaction -= 2;
                        }
                        cumulativeSatisfactionSeries.push(cumulativeSatisfaction);
                    }
                    cumulativeSatisfactionByHoleSeries.push(cumulativeSatisfaction);
                }
            }
            var averageSatisfaction = Math.round(totalSatisfaction / totalSatisfactionRatings) || 2;
            return {
                cumulativeSatisfaction: cumulativeSatisfaction,
                averageSatisfaction: averageSatisfaction,
                cumulativeSatisfactionSeries: cumulativeSatisfactionSeries,
                cumulativeSatisfactionByHoleSeries: cumulativeSatisfactionByHoleSeries
            };
        },
        consistencyStats() {
            var consistencyChances = 0;
            var consistencySuccesses = 0;
            if (this.selectedRound) {
                for (var i = 0; i < this.selectedRound.RoundHoles.length; i++) {
                    var currentRoundHole = this.selectedRound.RoundHoles[i];
                    if (currentRoundHole.par === 3) {
                        if (currentRoundHole.RoundStrokes.length >= 1) {
                            consistencyChances++;
                            if (currentRoundHole.RoundStrokes[0].terrainResultTypeId === TerrainType.TYPES.GREEN.ID) {
                                consistencySuccesses++;
                            }
                        }
                    } else if (currentRoundHole.par === 4) {
                        if (currentRoundHole.RoundStrokes.length >= 1) {
                            consistencyChances++;
                            if (currentRoundHole.RoundStrokes[0].terrainResultTypeId === TerrainType.TYPES.FAIRWAY_CORRECT.ID) {
                                consistencySuccesses++;
                            }
                        }
                        if (currentRoundHole.RoundStrokes.length >= 2) {
                            consistencyChances++;
                            if (currentRoundHole.RoundStrokes[1].terrainResultTypeId === TerrainType.TYPES.GREEN.ID) {
                                consistencySuccesses++;
                            }
                        }
                    } else if (currentRoundHole.par === 5) {
                        if (currentRoundHole.RoundStrokes.length >= 1) {
                            consistencyChances++;
                            if (currentRoundHole.RoundStrokes[0].terrainResultTypeId === TerrainType.TYPES.FAIRWAY_CORRECT.ID) {
                                consistencySuccesses++;
                            }
                        }
                        if (currentRoundHole.RoundStrokes.length >= 3) {
                            consistencyChances++;
                            if (currentRoundHole.RoundStrokes[2].terrainResultTypeId === TerrainType.TYPES.GREEN.ID) {
                                consistencySuccesses++;
                            }
                        }
                    }
                }
            }
            return {
                consistencyChances: consistencyChances,
                consistencySuccesses: consistencySuccesses,
                consistencyPercent: consistencySuccesses / consistencyChances
            };
        },
        recoveryStats() {
            var recoveryChances = 0;
            var recoverySuccesses = 0;
            if (this.selectedRound) {
                for (var i = 0; i < this.selectedRound.RoundHoles.length; i++) {
                    var currentRoundHole = this.selectedRound.RoundHoles[i];
                    if (currentRoundHole.par === 3) {
                        if (currentRoundHole.RoundStrokes.length >= 1) {
                            if (currentRoundHole.RoundStrokes[0].terrainResultTypeId !== TerrainType.TYPES.GREEN.ID) {
                                recoveryChances++;
                                if (currentRoundHole.RoundStrokes.length <= currentRoundHole.par && currentRoundHole.RoundStrokes[currentRoundHole.RoundStrokes.length - 1].terrainResultTypeId === TerrainType.TYPES.HOLE.ID) {
                                    recoverySuccesses++;
                                }
                            }
                        }
                    } else if (currentRoundHole.par === 4) {
                        if (currentRoundHole.RoundStrokes.length >= 1) {
                            if (currentRoundHole.RoundStrokes[0].terrainResultTypeId !== TerrainType.TYPES.FAIRWAY_CORRECT.ID) {
                                recoveryChances++;
                                if (currentRoundHole.RoundStrokes.length <= currentRoundHole.par && currentRoundHole.RoundStrokes[currentRoundHole.RoundStrokes.length - 1].terrainResultTypeId === TerrainType.TYPES.HOLE.ID) {
                                    recoverySuccesses++;
                                }
                            }
                        }
                        if (currentRoundHole.RoundStrokes.length >= 2) {
                            if (currentRoundHole.RoundStrokes[1].terrainResultTypeId !== TerrainType.TYPES.GREEN.ID) {
                                recoveryChances++;
                                if (currentRoundHole.RoundStrokes.length <= currentRoundHole.par && currentRoundHole.RoundStrokes[currentRoundHole.RoundStrokes.length - 1].terrainResultTypeId === TerrainType.TYPES.HOLE.ID) {
                                    recoverySuccesses++;
                                }
                            }
                        }
                    } else if (currentRoundHole.par === 5) {
                        if (currentRoundHole.RoundStrokes.length >= 1) {
                            if (currentRoundHole.RoundStrokes[0].terrainResultTypeId !== TerrainType.TYPES.FAIRWAY_CORRECT.ID) {
                                recoveryChances++;
                                if (currentRoundHole.RoundStrokes.length <= currentRoundHole.par && currentRoundHole.RoundStrokes[currentRoundHole.RoundStrokes.length - 1].terrainResultTypeId === TerrainType.TYPES.HOLE.ID) {
                                    recoverySuccesses++;
                                }
                            }
                        }
                        if (currentRoundHole.RoundStrokes.length >= 3) {
                            if (currentRoundHole.RoundStrokes[2].terrainResultTypeId !== TerrainType.TYPES.GREEN.ID) {
                                recoveryChances++;
                                if (currentRoundHole.RoundStrokes.length <= currentRoundHole.par && currentRoundHole.RoundStrokes[currentRoundHole.RoundStrokes.length - 1].terrainResultTypeId === TerrainType.TYPES.HOLE.ID) {
                                    recoverySuccesses++;
                                }
                            }
                        }
                    }
                }
            }
            return {
                recoveryChances: recoveryChances,
                recoverySuccesses: recoverySuccesses,
                recoveryPercent: recoverySuccesses / recoveryChances
            };
        },
        teeshotMistakesStats() {
            var teeshotMistakes = 0;
            var teeshotChances = 0;
            if (this.selectedRound) {
                for (var i = 0; i < this.selectedRound.RoundHoles.length; i++) {
                    var currentRoundHole = this.selectedRound.RoundHoles[i];
                    if (currentRoundHole.par === 3) {
                        if (currentRoundHole.RoundStrokes.length >= 1) {
                            teeshotChances++;
                            if (!(currentRoundHole.RoundStrokes[0].terrainResultTypeId === TerrainType.TYPES.GREEN.ID || currentRoundHole.RoundStrokes[0].terrainResultTypeId === TerrainType.TYPES.FRINGE.ID)) {
                                teeshotMistakes++;
                            }
                        }
                    } else if (currentRoundHole.par === 4 || currentRoundHole.par === 5) {
                        if (currentRoundHole.RoundStrokes.length >= 1) {
                            teeshotChances++;
                            if (currentRoundHole.RoundStrokes[0].terrainResultTypeId !== TerrainType.TYPES.FAIRWAY_CORRECT.ID) {
                                if (currentRoundHole.RoundStrokes.length >= 2) {
                                    if (currentRoundHole.RoundStrokes[0].terrainResultTypeId === TerrainType.TYPES.ROUGH_SECOND_CUT.ID) {
                                        if (currentRoundHole.RoundStrokes[1].lieQualityTypeId < LieQualityType.TYPES.GOOD.ID) {
                                            teeshotMistakes++;
                                        }
                                    } else {
                                        teeshotMistakes++;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return {
                teeshotChances: teeshotChances,
                teeshotMistakes: teeshotMistakes,
                teeshotMistakesPercent: teeshotMistakes / teeshotChances
            };
        },
        teeshotSuccessStats() {
            var teeshotSuccesses = 0;
            var teeshotChances = 0;
            if (this.selectedRound) {
                for (var i = 0; i < this.selectedRound.RoundHoles.length; i++) {
                    var currentRoundHole = this.selectedRound.RoundHoles[i];
                    if (currentRoundHole.par === 3) {
                        if (currentRoundHole.RoundStrokes.length >= 1) {
                            teeshotChances++;
                            if (currentRoundHole.RoundStrokes[0].terrainResultTypeId === TerrainType.TYPES.GREEN.ID || currentRoundHole.RoundStrokes[0].terrainResultTypeId === TerrainType.TYPES.FRINGE.ID) {
                                teeshotSuccesses++;
                            }
                        }
                    } else if (currentRoundHole.par === 4 || currentRoundHole.par === 5) {
                        if (currentRoundHole.RoundStrokes.length >= 1) {
                            teeshotChances++;
                            if (currentRoundHole.RoundStrokes[0].terrainResultTypeId === TerrainType.TYPES.FAIRWAY_CORRECT.ID) {
                                teeshotSuccesses++;
                            } else if (currentRoundHole.RoundStrokes[0].terrainResultTypeId === TerrainType.TYPES.ROUGH_SECOND_CUT.ID) {
                                if (currentRoundHole.RoundStrokes.length >= 2) {
                                    if (currentRoundHole.RoundStrokes[1].lieQualityTypeId === LieQualityType.TYPES.GOOD.ID) {
                                        teeshotSuccesses++;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return {
                teeshotChances: teeshotChances,
                teeshotSuccesses: teeshotSuccesses,
                teeshotSuccessesPercent: teeshotSuccesses / teeshotChances
            };
        }
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
