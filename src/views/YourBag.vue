<template>
    <v-container class="pa-0" fluid>
        <v-item-group multiple max="14" :value="$store.state.golfBag" @change.self="updateGolfBag">
            <v-container grid-list-lg fluid>
                <v-layout wrap justify-center>
                    <v-flex xs12 sm6 md4>
                        <v-layout wrap>
                            <v-flex xs12>
                                <span class="heading">Woods</span>
                            </v-flex>
                        </v-layout>
                        <v-layout wrap>
                            <v-flex shrink>
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-card outlined :color="active ? 'golfGuildPrimary' : ''" @click="toggle" height="40" width="40">
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
                            <v-flex shrink>
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-card outlined :color="active ? 'golfGuildPrimary' : ''" @click="toggle" height="40" width="40">
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
                            <v-flex shrink>
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-card outlined :color="active ? 'golfGuildPrimary' : ''" @click="toggle" height="40" width="40">
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
                            <v-flex shrink>
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-card outlined :color="active ? 'golfGuildPrimary' : ''" @click="toggle" height="40" width="40">
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
                            <v-flex shrink>
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-card outlined :color="active ? 'golfGuildPrimary' : ''" @click="toggle" height="40" width="40">
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
                            <v-flex shrink>
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-card outlined :color="active ? 'golfGuildPrimary' : ''" @click="toggle" height="40" width="40">
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
                            <v-flex shrink>
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-card outlined :color="active ? 'golfGuildPrimary' : ''" @click="toggle" height="40" width="40">
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
                        </v-layout>
                    </v-flex>
                </v-layout>
                <v-layout wrap justify-center>
                    <v-flex xs12 sm6 md4>
                        <v-divider/>
                    </v-flex>
                </v-layout>
                <v-layout wrap justify-center>
                    <v-flex xs12 sm6 md4>
                        <v-layout wrap>
                            <v-flex xs12>
                                <span class="heading">Hybrids</span>
                            </v-flex>
                        </v-layout>
                        <v-layout wrap>
                            <v-flex shrink>
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-card outlined :color="active ? 'golfGuildPrimary' : ''" @click="toggle" height="40" width="40">
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
                            <v-flex shrink>
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-card outlined :color="active ? 'golfGuildPrimary' : ''" @click="toggle" height="40" width="40">
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
                            <v-flex shrink>
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-card outlined :color="active ? 'golfGuildPrimary' : ''" @click="toggle" height="40" width="40">
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
                            <v-flex shrink>
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-card outlined :color="active ? 'golfGuildPrimary' : ''" @click="toggle" height="40" width="40">
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
                            <v-flex shrink>
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-card outlined :color="active ? 'golfGuildPrimary' : ''" @click="toggle" height="40" width="40">
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
                            <v-flex shrink>
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-card outlined :color="active ? 'golfGuildPrimary' : ''" @click="toggle" height="40" width="40">
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
                            <v-flex shrink>
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-card outlined :color="active ? 'golfGuildPrimary' : ''" @click="toggle" height="40" width="40">
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
                            <v-flex shrink>
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-card outlined :color="active ? 'golfGuildPrimary' : ''" @click="toggle" height="40" width="40">
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
                            <v-flex shrink>
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-card outlined :color="active ? 'golfGuildPrimary' : ''" @click="toggle" height="40" width="40">
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
                        </v-layout>
                    </v-flex>
                </v-layout>
                <v-layout wrap justify-center>
                    <v-flex xs12 sm6 md4>
                        <v-divider/>
                    </v-flex>
                </v-layout>
                <v-layout wrap justify-center>
                    <v-flex xs12 sm6 md4>
                        <v-layout wrap>
                            <v-flex xs12>
                                <span class="heading">Irons</span>
                            </v-flex>
                        </v-layout>
                        <v-layout wrap>
                            <v-flex shrink>
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-card outlined :color="active ? 'golfGuildPrimary' : ''" @click="toggle" height="40" width="40">
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
                            <v-flex shrink>
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-card outlined :color="active ? 'golfGuildPrimary' : ''" @click="toggle" height="40" width="40">
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
                            <v-flex shrink>
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-card outlined :color="active ? 'golfGuildPrimary' : ''" @click="toggle" height="40" width="40">
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
                            <v-flex shrink>
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-card outlined :color="active ? 'golfGuildPrimary' : ''" @click="toggle" height="40" width="40">
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
                            <v-flex shrink>
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-card outlined :color="active ? 'golfGuildPrimary' : ''" @click="toggle" height="40" width="40">
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
                            <v-flex shrink>
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-card outlined :color="active ? 'golfGuildPrimary' : ''" @click="toggle" height="40" width="40">
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
                            <v-flex shrink>
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-card outlined :color="active ? 'golfGuildPrimary' : ''" @click="toggle" height="40" width="40">
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
                            <v-flex shrink>
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-card outlined :color="active ? 'golfGuildPrimary' : ''" @click="toggle" height="40" width="40">
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
                            <v-flex shrink>
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-card outlined :color="active ? 'golfGuildPrimary' : ''" @click="toggle" height="40" width="40">
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
                        </v-layout>
                    </v-flex>
                </v-layout>
                <v-layout wrap justify-center>
                    <v-flex xs12 sm6 md4>
                        <v-divider/>
                    </v-flex>
                </v-layout>
                <v-layout wrap justify-center>
                    <v-flex xs12 sm6 md4>
                        <v-layout wrap>
                            <v-flex xs12>
                                <span class="heading">Wedges</span>
                            </v-flex>
                        </v-layout>
                        <v-layout wrap>
                            <v-flex shrink>
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-card outlined :color="active ? 'golfGuildPrimary' : ''" @click="toggle" height="40" width="40">
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
                            <v-flex shrink>
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-card outlined :color="active ? 'golfGuildPrimary' : ''" @click="toggle" height="40" width="40">
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
                            <v-flex shrink>
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-card outlined :color="active ? 'golfGuildPrimary' : ''" @click="toggle" height="40" width="40">
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
                            <v-flex shrink>
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-card outlined :color="active ? 'golfGuildPrimary' : ''" @click="toggle" height="40" width="40">
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
                            <v-flex shrink>
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-card outlined :color="active ? 'golfGuildPrimary' : ''" @click="toggle" height="40" width="40">
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
                            <v-flex shrink>
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-card outlined :color="active ? 'golfGuildPrimary' : ''" @click="toggle" height="40" width="40">
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
                            <v-flex shrink>
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-card outlined :color="active ? 'golfGuildPrimary' : ''" @click="toggle" height="40" width="40">
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
                            <v-flex shrink>
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-card outlined :color="active ? 'golfGuildPrimary' : ''" @click="toggle" height="40" width="40">
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
                            <v-flex shrink>
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-card outlined :color="active ? 'golfGuildPrimary' : ''" @click="toggle" height="40" width="40">
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
                            <v-flex shrink>
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-card outlined :color="active ? 'golfGuildPrimary' : ''" @click="toggle" height="40" width="40">
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
                            <v-flex shrink>
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-card outlined :color="active ? 'golfGuildPrimary' : ''" @click="toggle" height="40" width="40">
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
                            <v-flex shrink>
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-card outlined :color="active ? 'golfGuildPrimary' : ''" @click="toggle" height="40" width="40">
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
                            <v-flex shrink>
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-card outlined :color="active ? 'golfGuildPrimary' : ''" @click="toggle" height="40" width="40">
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
                            <v-flex shrink>
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-card outlined :color="active ? 'golfGuildPrimary' : ''" @click="toggle" height="40" width="40">
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
                        </v-layout>
                    </v-flex>
                </v-layout>
                <v-layout wrap justify-center>
                    <v-flex xs12 sm6 md4>
                        <v-divider/>
                    </v-flex>
                </v-layout>
                <v-layout wrap justify-center>
                    <v-flex xs12 sm6 md4>
                        <v-layout wrap>
                            <v-flex xs12>
                                <span class="heading">Putter</span>
                            </v-flex>
                        </v-layout>
                        <v-layout wrap>
                            <v-flex shrink>
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-card outlined :color="active ? 'golfGuildPrimary' : ''" @click="toggle" height="40" width="40">
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
                    </v-flex>
                </v-layout>
            </v-container>
        </v-item-group>
        <v-snackbar v-model="snackbar.show" :timeout="8000" bottom :color="snackbar.color">
            {{snackbar.message}}
            <v-btn text @click="snackbar.show = false">
                Close
            </v-btn>
        </v-snackbar>
    </v-container>
</template>

<script>
import { UsersRepository } from '../repositories';

export default {
    name: "YourBag",

    components: {

    },

    data: () => ({
        usersRepository: new UsersRepository(),

        snackbar: {
            show: false,
            message: '',
            color: ''
        },
    }),

    computed: {

    },

    methods: {

        getGolfBag() {
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

        updateGolfBag(payload) {
            if (payload.length > 0) {
                this.usersRepository.updateGolfBag(this.$store.getters.user.userId, {golfBag: payload})
                    .then(() => {
                        this.getGolfBag();
                    })
                    .catch((apiError) => {
                        console.error(apiError)
                        this.snackbar.message = 'Failed to update your golf bag. Please try again later.';
                        this.snackbar.color = "red";
                        this.snackbar.show = true;
                    })
            } else {
                this.getGolfBag();
                this.snackbar.message = 'You can\'t golf without clubs!!';
                this.snackbar.color = "red";
                this.snackbar.show = true;
            }
        },
    },

    created() {
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

</style>
