<template>
  <v-user-panel :info="userInfo"></v-user-panel>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import vUserPanel from '../../../../../components/UserPanel'
export default {
    data () {
        return {
            
        }
    },
    computed: {
        ...mapGetters(['userInfo'])
    },
    methods: {
        ...mapActions(['getUserInfo'])
    },
    route: {
        data (){
            this.getUserInfo();
        }
    },
    components: {
        vUserPanel
    },
    ready(){}
}  
</script>