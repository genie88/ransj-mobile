<template>
    <v-secondary-nav :title="'选择地址'"></v-secondary-nav>

    <div class="user_content">
        
        <div class="user_address_items" v-for="addr in addresses"  @click="selectAddr(addr)">
            <div class="user_address">
                <div class="address_info">
                    <div class="name f14"><span class="mr5">{{addr.accept_name}}</span>|<span class="ml5">{{addr.mobile}}</span></div>
                    <div class="f14 mt5">{{addr.province}}{{addr.city}}{{addr.county}}{{addr.addr}}</div>
                </div>
            </div>
        </div> 
    </div>

    
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import vSecondaryNav from '../../../../../components/SecondaryNav'
import vTabHeader from '../../../../../components/TabHeader'
export default {
    data () {
        return {
            
        }
    },
    computed: {
        ...mapGetters(['addresses'])
    },
    methods: {
        ...mapActions(['getReceiptAdress', 'updateCasherAddr']),
        selectAddr(addr){
            this.updateCasherAddr(addr);
            router.go('/casher');
        }
    },
    route: {
        data (){
            this.getReceiptAdress();
        }
    },
    components: {
        vSecondaryNav,
        vTabHeader
    },
    ready(){}
}
</script>