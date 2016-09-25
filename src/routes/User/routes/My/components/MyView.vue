<template>
  <v-user-panel :info="userInfo" v-on:willlogout="onUserLogout"></v-user-panel>
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
        ...mapActions(['getUserInfo', 'logout', 'showToast']),
        onUserLogout(){
            this.logout();
            this.showToast({tips: '退出登录成功'});
        }
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