<template>
    <div class="user_address_items">
        <div class="user_address">
            <div class="address_info">
                <div class="name f14">
                    <span class="mr5">
                        aaa
                    </span>
                    |
                    <span class="ml5">
                        18709889066
                    </span>
                </div>
                <div class="f14 mt5">
                    上海上海市黄浦区aaa
                </div>
            </div>
        </div>
        <div class="new_addr_btn">
            <div class="f14 fl">
                <label>
                    <input checked="checked" class="addr_default mr5" name="default" onclick="SetDefault(this)" type="radio">
                        设为默认
                    </input>
                </label>
                <input name="ship_id" type="hidden" value="18682">
                    <input name="ship_name" type="hidden" value="aaa">
                        <input name="ship_area" type="hidden" value="mainland:上海/上海市/黄浦区:23">
                            <input name="ship_addr" type="hidden" value="aaa">
                                <input name="ship_zip" type="hidden" value="null">
                                    <input name="ship_tel" type="hidden" value="null">
                                        <input name="ship_mobile" type="hidden" value="18709889066">
                                            <input name="is_default" type="hidden" value="true"/>
                                        </input>
                                    </input>
                                </input>
                            </input>
                        </input>
                    </input>
                </input>
            </div>
            <div class="del_adress f14" onclick="confirmDelete(18682)">
                <span>
                </span>
                删除
            </div>
            <div class="bj_adress f14" onclick="edit(this)">
                <span>
                </span>
                编辑
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'v-address-item',
        data(){
            return {
            }
        },
        components:{
        }
    }
</script>