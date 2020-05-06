<template>
    <div style="display:flex;">
        <v-card flat outlined class="mr-3">
            <v-layout wrap class="ma-0" align-center>
                <v-flex xs6 class="ma-0 pa-0">
                    <v-card flat class="primaryColorCard" :color="primaryColor" height="20" width="10" style="display:flex;">
                    </v-card>
                </v-flex>
                <v-flex xs6 class="ma-0 pa-0">
                    <v-card flat class="secondaryColorCard" :color="secondaryColor?secondaryColor:primaryColor" height="20" width="10" style="display:flex;">
                    </v-card>
                </v-flex>
            </v-layout>
        </v-card>
    </div>
</template>

<script>

export default {
    name: "TeeBoxIcon",

    props: {
        primaryColor: String,
        secondaryColor: String,
    }
}

</script>

<style>
    .primaryColorCard {
        border-top-left-radius: .2rem  !important;
        border-bottom-left-radius: .2rem  !important;
        border-top-right-radius: 0 !important;
        border-bottom-right-radius: 0 !important;
    }

    .secondaryColorCard {
        border-top-left-radius: 0 !important;
        border-bottom-left-radius: 0 !important;
        border-top-right-radius: .2rem !important;
        border-bottom-right-radius: .2rem !important;
    }
</style>