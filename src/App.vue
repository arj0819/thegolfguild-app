<template>
    <v-app :dark="$vuetify.theme.dark?true:false">

        <v-navigation-drawer 
            v-if="isAuthenticated"
            v-model="leftNavOpen"
            :clipped="true"
            app 
            overflow
        >
            <v-list nav v-if="isAuthenticated">
                <v-list-item exact :to="{name: 'Home' }">
                    <v-list-item-action>
                        <v-icon large>mdi-home</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            <span>Home</span>
                        </v-list-item-title>
                        <v-list-item-action-text>
                            <span class="title-2">Your Performance Summary</span>
                        </v-list-item-action-text>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item exact :to="{name: 'Play Golf' }">
                    <v-list-item-action>
                        <v-icon large>mdi-golf-cart</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            <span>Play Golf</span>
                        </v-list-item-title>
                        <v-list-item-action-text>
                            <span class="title-2">Start or Continue a Round</span>
                        </v-list-item-action-text>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item exact :to="{name: 'Statistics' }">
                    <v-list-item-action>
                        <v-icon large>mdi-format-list-checks</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            <span>Statistics</span>
                        </v-list-item-title>
                        <v-list-item-action-text>
                            <span class="title-2">Customize your Stats</span>
                        </v-list-item-action-text>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item exact :to="{name: 'Your Bag' }">
                    <v-list-item-action>
                        <v-icon large>mdi-cog</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            <span>Your Bag</span>
                        </v-list-item-title>
                        <v-list-item-action-text>
                            <span class="title-2">Edit your Golf Bag</span>
                        </v-list-item-action-text>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item exact :to="{name: 'Analytics' }">
                    <v-list-item-action>
                        <v-icon large>mdi-chart-donut-variant</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            <span>Analytics</span>
                        </v-list-item-title>
                        <v-list-item-action-text>
                            <span class="title-2">Analyze your Performance</span>
                        </v-list-item-action-text>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item exact :to="{path: '/logout'}">
                    <v-list-item-action>
                        <v-icon large color="red">mdi-power</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            <span>Logout</span>
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar :clipped-left="true" app>

            <v-btn v-if="isAuthenticated" @click.stop="leftNavOpen = !leftNavOpen" icon>
                <v-icon>{{leftNavOpen?'mdi-backburger':'mdi-menu'}}</v-icon>
            </v-btn>

            <span v-if="$vuetify.breakpoint.smAndUp" class="headline font-weight-bold ml-1 mr-3">The Golf Guild</span>
            <img src="../assets/logos/TheGolfGuildLogo4Green.png" height="60" class="ml-1 mr-1" />
            <span class="caption font-weight-bold mr-3 ml-3">{{this.$route.name}}</span>
            <v-spacer></v-spacer>
            <v-avatar color="grey" v-if="isAuthenticated" class="mr-2" size="45" @click="goToProfile()" style="cursor:pointer">
                <span class="title font-weight-bold white--text">{{$store.getters.user.firstName.charAt(0).toUpperCase() + '' + $store.getters.user.lastName.charAt(0).toUpperCase()}}</span>
            </v-avatar>
            <v-btn icon @click.stop="$vuetify.theme.dark = !$vuetify.theme.dark">
                <v-icon large :color="$vuetify.theme.dark?'warning':'primary'">{{$vuetify.theme.dark?'mdi-weather-sunny':'mdi-weather-night'}}</v-icon>
            </v-btn>
        </v-app-bar>

        <v-content>
            <router-view></router-view>
        </v-content>

        <v-footer app padless>
            <v-container class="pa-0">
                <v-layout class="text-center" align-content-center>
                    <v-flex xs12>
                        <span class="caption font-weight-bold">&copy;{{ moment().format('YYYY') }} The Golf Guild - All Rights Reserved</span>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-footer>
    </v-app>
</template>

<script>

export default {
    name: "App",

    data: () => ({
        leftNavOpen: false,
    }),

    computed: {
        isAuthenticated() {
            return !!this.$store.state.isAuthenticated
        }
    },

    methods: {
        goToProfile() {
            if (this.$route.path !== '/your-profile') {
                this.$router.push({name: "Your Profile"})
            }
        }
    }
};
</script>

<style>

    .clickable-rows tbody tr {
        cursor: pointer
    }
    
</style>
