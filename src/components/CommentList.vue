<template>
<div class="allcomments">
    <!-- 这是一条完整的评论 -->
    <div class="commentli" v-for="comment in comments.data">
        <div class="wd90 m0">
            <p>
                <span class="comment_point_pic">
                <img src="../static/img/touxiang.png"></span>
                <span class="f13">{{comment.username}}</span>
                <span class="order_time fr c_aaa f10">
                    {{comment.create_time | formatTime}}
                </span>
            </p>
            <p class="mt5 mb5 c_999">{{comment.content}}</p>
            <p>
                <span class="average_stars">
                    <span class="avstar redstar" style="width: 100%;"></span>
                </span>
                <!-- <span class="go_comment fr replay">回复</span> -->
                <!-- <span class="go_comment fr replay canclereply">取消</span> -->
            </p>       
            <!-- 回复框 -->
            <!-- <div class="reply_box dn" style="display: block;">
                <div class="reply_text mb5">
                    <textarea placeholder="请填写回复内容，最多1000字"></textarea>
                </div>
                <p>
                    <span class="reply_code">
                        <img id="Verify" src="/SecurityCodeImageAction?timestamp=1470790653230">
                    </span>
                    <span class="enter_code"><input type="text" placeholder="填写验证码"></span>
                    <span class="go_comment fr">
                        <a href="javascript:;" class="c_fff f12">提交回复</a>
                    </span>
                </p>
            </div> -->
            <!-- 评论的回复 -->
            <!-- <div class="ml10">   
                <hr>      
                <p>
                    <span class="f13">管理员</span>
                    <span class="order_time fr c_aaa f10">2016-05-27 07:11:45</span>
                </p>      
                <p class="mt5 c_999">你一定是美食达人吧，小小的一份鸡翅，既然可以做出这么多花样。给你点赞哦！棒棒哒！</p> 
            </div> -->
        </div>
        <hr>
    </div>
</div>
</template>

<script>    
    export default {
        name: 'v-comment',
        props: ['comments'],
        data(){
            return {
            }
        },
        watch: {
        },
        components:{
        }
    }
</script>