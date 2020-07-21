<template>
    <v-card outlined>
        <v-container>
            <v-layout wrap align-center>
                <v-flex grow class="pt-0 pb-0">
                    <span class="title">Stroke {{roundStroke.number}} - Hole {{roundHoleNumber}}</span>
                </v-flex>
                <v-flex shrink class="pt-0 pb-0 pr-0">
                    <v-btn icon class="pa-0" @click.stop="$emit('setSelectedRoundStroke', roundStroke)">
                        <v-icon>mdi-trash-can-outline</v-icon>
                    </v-btn>
                </v-flex>
            </v-layout>
            <v-layout wrap align-center>
                <v-flex xs12 class="pl-3 pr-3 pt-2 pb-3">
            <v-item-group :value="roundStroke.clubId" @change.self="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, clubId: $event})">
                <v-layout wrap align-center>
                    <v-flex shrink v-if="$store.state.golfBag.includes(0)" class="pa-1">
                        <v-item v-slot:default="{ active, toggle }">
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
                    <v-flex shrink v-if="$store.state.golfBag.includes(1)" class="pa-1">
                        <v-item v-slot:default="{ active, toggle }">
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
                    <v-flex shrink v-if="$store.state.golfBag.includes(2)" class="pa-1">
                        <v-item v-slot:default="{ active, toggle }">
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
                    <v-flex shrink v-if="$store.state.golfBag.includes(3)" class="pa-1">
                        <v-item v-slot:default="{ active, toggle }">
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
                    <v-flex shrink v-if="$store.state.golfBag.includes(4)" class="pa-1">
                        <v-item v-slot:default="{ active, toggle }">
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
                    <v-flex shrink v-if="$store.state.golfBag.includes(5)" class="pa-1">
                        <v-item v-slot:default="{ active, toggle }">
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
                    <v-flex shrink v-if="$store.state.golfBag.includes(6)" class="pa-1">
                        <v-item v-slot:default="{ active, toggle }">
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
                    <v-flex shrink v-if="$store.state.golfBag.includes(7)" class="pa-1">
                        <v-item v-slot:default="{ active, toggle }">
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
                    <v-flex shrink v-if="$store.state.golfBag.includes(8)" class="pa-1">
                        <v-item v-slot:default="{ active, toggle }">
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
                    <v-flex shrink v-if="$store.state.golfBag.includes(9)" class="pa-1">
                        <v-item v-slot:default="{ active, toggle }">
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
                    <v-flex shrink v-if="$store.state.golfBag.includes(10)" class="pa-1">
                        <v-item v-slot:default="{ active, toggle }">
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
                    <v-flex shrink v-if="$store.state.golfBag.includes(11)" class="pa-1">
                        <v-item v-slot:default="{ active, toggle }">
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
                    <v-flex shrink v-if="$store.state.golfBag.includes(12)" class="pa-1">
                        <v-item v-slot:default="{ active, toggle }">
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
                    <v-flex shrink v-if="$store.state.golfBag.includes(13)" class="pa-1">
                        <v-item v-slot:default="{ active, toggle }">
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
                    <v-flex shrink v-if="$store.state.golfBag.includes(14)" class="pa-1">
                        <v-item v-slot:default="{ active, toggle }">
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
                    <v-flex shrink v-if="$store.state.golfBag.includes(15)" class="pa-1">
                        <v-item v-slot:default="{ active, toggle }">
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
                    <v-flex shrink v-if="$store.state.golfBag.includes(16)" class="pa-1">
                        <v-item v-slot:default="{ active, toggle }">
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
                    <v-flex shrink v-if="$store.state.golfBag.includes(17)" class="pa-1">
                        <v-item v-slot:default="{ active, toggle }">
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
                    <v-flex shrink v-if="$store.state.golfBag.includes(18)" class="pa-1">
                        <v-item v-slot:default="{ active, toggle }">
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
                    <v-flex shrink v-if="$store.state.golfBag.includes(19)" class="pa-1">
                        <v-item v-slot:default="{ active, toggle }">
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
                    <v-flex shrink v-if="$store.state.golfBag.includes(20)" class="pa-1">
                        <v-item v-slot:default="{ active, toggle }">
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
                    <v-flex shrink v-if="$store.state.golfBag.includes(21)" class="pa-1">
                        <v-item v-slot:default="{ active, toggle }">
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
                    <v-flex shrink v-if="$store.state.golfBag.includes(22)" class="pa-1">
                        <v-item v-slot:default="{ active, toggle }">
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
                    <v-flex shrink v-if="$store.state.golfBag.includes(23)" class="pa-1">
                        <v-item v-slot:default="{ active, toggle }">
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
                    <v-flex shrink v-if="$store.state.golfBag.includes(24)" class="pa-1">
                        <v-item v-slot:default="{ active, toggle }">
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
                    <v-flex shrink v-if="$store.state.golfBag.includes(25)" class="pa-1">
                        <v-item v-slot:default="{ active, toggle }">
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
                    <v-flex shrink v-if="$store.state.golfBag.includes(26)" class="pa-1">
                        <v-item v-slot:default="{ active, toggle }">
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
                    <v-flex shrink v-if="$store.state.golfBag.includes(27)" class="pa-1">
                        <v-item v-slot:default="{ active, toggle }">
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
                    <v-flex shrink v-if="$store.state.golfBag.includes(28)" class="pa-1">
                        <v-item v-slot:default="{ active, toggle }">
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
                    <v-flex shrink v-if="$store.state.golfBag.includes(29)" class="pa-1">
                        <v-item v-slot:default="{ active, toggle }">
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
                    <v-flex shrink v-if="$store.state.golfBag.includes(30)" class="pa-1">
                        <v-item v-slot:default="{ active, toggle }">
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
                    <v-flex shrink v-if="$store.state.golfBag.includes(31)" class="pa-1">
                        <v-item v-slot:default="{ active, toggle }">
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
                    <v-flex shrink v-if="$store.state.golfBag.includes(32)" class="pa-1">
                        <v-item v-slot:default="{ active, toggle }">
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
                    <v-flex shrink v-if="$store.state.golfBag.includes(33)" class="pa-1">
                        <v-item v-slot:default="{ active, toggle }">
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
                    <v-flex shrink v-if="$store.state.golfBag.includes(34)" class="pa-1">
                        <v-item v-slot:default="{ active, toggle }">
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
                    <v-flex shrink v-if="$store.state.golfBag.includes(35)" class="pa-1">
                        <v-item v-slot:default="{ active, toggle }">
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
                    <v-flex shrink v-if="$store.state.golfBag.includes(36)" class="pa-1">
                        <v-item v-slot:default="{ active, toggle }">
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
                    <v-flex shrink v-if="$store.state.golfBag.includes(37)" class="pa-1">
                        <v-item v-slot:default="{ active, toggle }">
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
                    <v-flex shrink v-if="$store.state.golfBag.includes(38)" class="pa-1">
                        <v-item v-slot:default="{ active, toggle }">
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
                    <v-flex shrink v-if="$store.state.golfBag.includes(39)" class="pa-1">
                        <v-item v-slot:default="{ active, toggle }">
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
            <v-layout wrap align-center>
                <v-flex xs6>
                    <v-select 
                        v-model="roundStroke.terrainStartTypeId"
                        outlined dense color="highContrast" item-color="highContrast"
                        label="Start Terrain"
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
                        v-model="roundStroke.terrainResultTypeId"
                        outlined dense color="highContrast" item-color="highContrast"
                        label="Result Terrain"
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
            <v-layout wrap align-center justify-center>
                <v-flex shrink class="pl-3 pr-3 pt-1 pb-3">
                    <v-item-group  :value="roundStroke.windTypeId">
                            <v-layout wrap align-center>
                                <v-flex xs12 class="text-center pa-0">
                                    <span class="caption">Wind</span>
                                </v-flex>
                            </v-layout>
                            <v-layout wrap align-center>
                                <v-flex shrink class="pa-1">
                                    <v-item v-slot:default="{ active, toggle }" :value="0" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, windTypeId: 0})">
                                        <v-card :color="active ? 'primary' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium style="transform:rotate(45deg)" class="pa-1">mdi-chevron-double-left</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1">
                                    <v-item v-slot:default="{ active, toggle }" :value="1" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, windTypeId: 1})">
                                        <v-card :color="active ? 'primary' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-chevron-double-up</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1">
                                    <v-item v-slot:default="{ active, toggle }" :value="2" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, windTypeId: 2})">
                                        <v-card :color="active ? 'primary' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium style="transform:rotate(-45deg)" class="pa-1">mdi-chevron-double-right</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                            </v-layout>
                            <v-layout wrap align-center>
                                <v-flex shrink class="pa-1">
                                    <v-item v-slot:default="{ active, toggle }" :value="3" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, windTypeId: 3})">
                                        <v-card :color="active ? 'primary' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-chevron-double-left</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1">
                                    <v-item v-slot:default="{ active, toggle }" :value="4" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, windTypeId: 4})">
                                        <v-card :color="active ? 'primary' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium style="transform:rotate(-22.5deg)" class="pa-1">mdi-octagram-outline</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1">
                                    <v-item v-slot:default="{ active, toggle }" :value="5" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, windTypeId: 5})">
                                        <v-card :color="active ? 'primary' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-chevron-double-right</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                            </v-layout>
                            <v-layout wrap align-center>
                                <v-flex shrink class="pa-1">
                                    <v-item v-slot:default="{ active, toggle }" :value="6" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, windTypeId: 6})">
                                        <v-card :color="active ? 'primary' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium style="transform:rotate(-45deg)" class="pa-1">mdi-chevron-double-left</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1">
                                    <v-item v-slot:default="{ active, toggle }" :value="7" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, windTypeId: 7})">
                                        <v-card :color="active ? 'primary' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-chevron-double-down</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1">
                                    <v-item v-slot:default="{ active, toggle }" :value="8" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, windTypeId: 8})">
                                        <v-card :color="active ? 'primary' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium style="transform:rotate(45deg)" class="pa-1">mdi-chevron-double-right</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                            </v-layout>
                    </v-item-group>
                </v-flex>
                <v-spacer/>
                <v-flex shrink class="pl-3 pr-3 pt-1 pb-3">
                    <v-item-group  :value="roundStroke.accuracyTypeId">
                            <v-layout wrap align-center>
                                <v-flex xs12 class="text-center pa-0">
                                    <span class="caption">Accuracy</span>
                                </v-flex>
                            </v-layout>
                            <v-layout wrap align-center>
                                <v-flex shrink class="pa-1">
                                    <v-item v-slot:default="{ active, toggle }" :value="0" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, accuracyTypeId: 0})">
                                        <v-card :color="active ? 'red' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-arrow-top-left</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1">
                                    <v-item v-slot:default="{ active, toggle }" :value="1" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, accuracyTypeId: 1})">
                                        <v-card :color="active ? 'red' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-arrow-up</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1">
                                    <v-item v-slot:default="{ active, toggle }" :value="2" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, accuracyTypeId: 2})">
                                        <v-card :color="active ? 'red' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-arrow-top-right</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                            </v-layout>
                            <v-layout wrap align-center>
                                <v-flex shrink class="pa-1">
                                    <v-item v-slot:default="{ active, toggle }" :value="3" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, accuracyTypeId: 3})">
                                        <v-card :color="active ? 'red' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-arrow-left</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1">
                                    <v-item v-slot:default="{ active, toggle }" :value="4" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, accuracyTypeId: 4})">
                                        <v-card :color="active ? 'green' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-bullseye</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1">
                                    <v-item v-slot:default="{ active, toggle }" :value="5" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, accuracyTypeId: 5})">
                                        <v-card :color="active ? 'red' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-arrow-right</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                            </v-layout>
                            <v-layout wrap align-center>
                                <v-flex shrink class="pa-1">
                                    <v-item v-slot:default="{ active, toggle }" :value="6" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, accuracyTypeId: 6})">
                                        <v-card :color="active ? 'red' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-arrow-bottom-left</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1">
                                    <v-item v-slot:default="{ active, toggle }" :value="7" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, accuracyTypeId: 7})">
                                        <v-card :color="active ? 'red' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-arrow-down</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1">
                                    <v-item v-slot:default="{ active, toggle }" :value="8" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, accuracyTypeId: 8})">
                                        <v-card :color="active ? 'red' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-arrow-bottom-right</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                            </v-layout>
                    </v-item-group>
                </v-flex>
            </v-layout>
            <v-layout wrap align-center justify-center>
                <v-flex shrink class="pl-3 pr-3 pt-1 pb-3">
                    <v-item-group  :value="roundStroke.lieQualityTypeId">
                            <v-layout wrap align-center>
                                <v-flex xs12 class="text-center pa-0">
                                    <span class="caption">Lie Quality</span>
                                </v-flex>
                            </v-layout>
                            <v-layout wrap align-center>
                                <v-flex shrink class="pa-1">
                                    <v-item v-slot:default="{ active, toggle }" :value="0" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, lieQualityTypeId: 0})">
                                        <v-card :color="active ? 'red' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-thumb-down</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1">
                                    <v-item v-slot:default="{ active, toggle }" :value="1" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, lieQualityTypeId: 1})">
                                        <v-card :color="active ? 'yellow darken-1' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-thumbs-up-down</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1">
                                    <v-item v-slot:default="{ active, toggle }" :value="2" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, lieQualityTypeId: 2})">
                                        <v-card :color="active ? 'green' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-thumb-up</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                            </v-layout>
                    </v-item-group>
                </v-flex>
                <v-spacer/>
                <v-flex shrink class="pl-3 pr-3 pt-1 pb-3">
                    <v-item-group  :value="roundStroke.contactQualityTypeId">
                            <v-layout wrap align-center>
                                <v-flex xs12 class="text-center pa-0">
                                    <span class="caption">Contact Quality</span>
                                </v-flex>
                            </v-layout>
                            <v-layout wrap align-center>
                                <v-flex shrink class="pa-1">
                                    <v-item v-slot:default="{ active, toggle }" :value="0" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, contactQualityTypeId: 0})">
                                        <v-card :color="active ? 'red' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-thumb-down</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1">
                                    <v-item v-slot:default="{ active, toggle }" :value="1" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, contactQualityTypeId: 1})">
                                        <v-card :color="active ? 'yellow darken-1' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-thumbs-up-down</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1">
                                    <v-item v-slot:default="{ active, toggle }" :value="2" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, contactQualityTypeId: 2})">
                                        <v-card :color="active ? 'green' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-thumb-up</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                            </v-layout>
                    </v-item-group>
                </v-flex>
            </v-layout>
            <v-layout wrap align-center justify-center v-if="!(roundStroke.strokeTypeId === 5 || roundStroke.strokeTypeId === 6 ||roundStroke.strokeTypeId === 7)">
                <v-flex shrink class="pl-3 pr-3 pt-1 pb-3">
                    <v-item-group  :value="roundStroke.intendedShapeTypeId">
                            <v-layout wrap align-center>
                                <v-flex xs12 class="text-center pa-0">
                                    <span class="caption">Intended Shape</span>
                                </v-flex>
                            </v-layout>
                            <v-layout wrap align-center>
                                <v-flex shrink class="pa-1">
                                    <v-item v-slot:default="{ active, toggle }" :value="0" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, intendedShapeTypeId: 0})">
                                        <v-card :color="active ? 'primary' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1" style="transform:rotate(30deg)">mdi-undo</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1">
                                    <v-item v-slot:default="{ active, toggle }" :value="1" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, intendedShapeTypeId: 1})">
                                        <v-card :color="active ? 'primary' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1" style="transform:rotate(90deg)">mdi-undo</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1">
                                    <v-item v-slot:default="{ active, toggle }" :value="2" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, intendedShapeTypeId: 2})">
                                        <v-card :color="active ? 'primary' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-arrow-up-bold</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1">
                                    <v-item v-slot:default="{ active, toggle }" :value="3" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, intendedShapeTypeId: 3})">
                                        <v-card :color="active ? 'primary' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1" style="transform:rotate(-90deg)">mdi-redo</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1">
                                    <v-item v-slot:default="{ active, toggle }" :value="4" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, intendedShapeTypeId: 4})">
                                        <v-card :color="active ? 'primary' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1" style="transform:rotate(-30deg)">mdi-redo</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                            </v-layout>
                    </v-item-group>
                </v-flex>
                <v-spacer/>
                <v-flex shrink class="pl-3 pr-3 pt-1 pb-3">
                    <v-item-group  :value="roundStroke.shapeAchievedTypeId">
                            <v-layout wrap align-center>
                                <v-flex xs12 class="text-center pa-0">
                                    <span class="caption">Shape Hit?</span>
                                </v-flex>
                            </v-layout>
                            <v-layout wrap align-center justify-center>
                                <v-flex shrink class="pa-1">
                                    <v-item v-slot:default="{ active, toggle }" :value="0" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, shapeAchievedTypeId: 0})">
                                        <v-card :color="active ? 'red' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-thumb-down</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1">
                                    <v-item v-slot:default="{ active, toggle }" :value="1" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, shapeAchievedTypeId: 1})">
                                        <v-card :color="active ? 'green' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-thumb-up</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                            </v-layout>
                    </v-item-group>
                </v-flex>
            </v-layout>
            <v-layout wrap align-center justify-center v-if="roundStroke.strokeTypeId === 5 || roundStroke.strokeTypeId === 6 || roundStroke.strokeTypeId === 7">
                <v-flex shrink class="pl-3 pr-3 pt-1 pb-3">
                    <v-item-group  :value="roundStroke.breakReadQualityTypeId">
                            <v-layout wrap align-center>
                                <v-flex xs12 class="text-center pa-0">
                                    <span class="caption">Break Read Quality</span>
                                </v-flex>
                            </v-layout>
                            <v-layout wrap align-center>
                                <v-flex shrink class="pa-1">
                                    <v-item v-slot:default="{ active, toggle }" :value="0" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, breakReadQualityTypeId: 0})">
                                        <v-card :color="active ? 'red' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-thumb-down</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1">
                                    <v-item v-slot:default="{ active, toggle }" :value="1" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, breakReadQualityTypeId: 1})">
                                        <v-card :color="active ? 'yellow darken-1' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-thumbs-up-down</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1">
                                    <v-item v-slot:default="{ active, toggle }" :value="2" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, breakReadQualityTypeId: 2})">
                                        <v-card :color="active ? 'green' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-thumb-up</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                            </v-layout>
                    </v-item-group>
                </v-flex>
            </v-layout>
            <v-layout wrap align-center justify-center>
                <v-flex shrink class="pl-3 pr-3 pt-1 pb-3">
                    <v-item-group  :value="roundStroke.satisfactionTypeId">
                            <v-layout wrap align-center>
                                <v-flex xs12 class="text-center pa-0">
                                    <span class="caption">Satisfaction</span>
                                </v-flex>
                            </v-layout>
                            <v-layout wrap align-center>
                                <v-flex shrink class="pa-1">
                                    <v-item v-slot:default="{ active, toggle }" :value="0" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, satisfactionTypeId: 0})">
                                        <v-card :color="active ? 'red' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-emoticon-dead</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1">
                                    <v-item v-slot:default="{ active, toggle }" :value="1" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, satisfactionTypeId: 1})">
                                        <v-card :color="active ? 'orange' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-emoticon-sad</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1">
                                    <v-item v-slot:default="{ active, toggle }" :value="2" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, satisfactionTypeId: 2})">
                                        <v-card :color="active ? 'yellow darken-1' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-emoticon-neutral</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1">
                                    <v-item v-slot:default="{ active, toggle }" :value="3" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, satisfactionTypeId: 3})">
                                        <v-card :color="active ? 'lime' : ''" @click.stop="toggle" outlined class="text-center"><v-icon medium class="pa-1">mdi-emoticon-happy</v-icon></v-card>
                                    </v-item>
                                </v-flex>
                                <v-flex shrink class="pa-1">
                                    <v-item v-slot:default="{ active, toggle }" :value="4" @change="$emit('update', {roundStrokeId: roundStroke.roundStrokeId, satisfactionTypeId: 4})">
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
        roundStroke: Object,
        previousRoundStroke: Object,
        golfBag: Array,
    },

    data: () => ({
        BreakReadQualityType: BreakReadQualityType,
        IntendedShapeType: IntendedShapeType,
        AccuracyType: AccuracyType,
        LieQualityType: LieQualityType,
        StrokeType: StrokeType,
        TerrainType: TerrainType,
        WindType: WindType,
        SatisfactionType: SatisfactionType,
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