<template>
  <div class="messages-chat">
      <div class="messages-chat__container">
            <div class="messages-chat__container__infor">
                <p>
                    最初は「フードでそんなに変わるかなぁ」なんて半信半疑でしたが、
                     本当に元気の良さが違う！ぐったり寝ている姿を見なくなりました
                    。ここまで違うならもっと早くから食べさせてあげればよかった〜
                </p>
            </div>
            <ul class="messages-chat__container__frames-chat">
                <li v-for="(item, index) in commnetUsers" :key="index" class="messages-chat__container__frames-chat__inbox-item">
                    <img :src="item.avatar" alt="">
                    <div class="messages-chat__container__frames-chat__inbox-item__content" >
                      {{item.content}}
                    </div>
                    <img v-if="item.isShowGift" :src="item.gift" alt="">
                </li>
             
            </ul>
            <div class="messages-chat__container__content-message">
                <div class="messages-chat__container__content-message__btn-point">
                    <button @click="showIcon"><img :src="imgGift" alt=""></button>
                </div>
                <div class="messages-chat__container__content-message__input">
                    <input v-on:keyup="enterText" type="text" :value="commnetUser.content">
                    <div class="messages-chat__container__content-message__input__btn-send">
                        <button @click="sendCommnent">send</button>
                    </div>
                </div>
            </div>
            <ul v-if="isShowIcon"  class="messages-chat__container__icon">
                <li @click="addIcon" class="messages-chat__container__icon__item">
                    <img :src="imgSmile" alt="">
                </li>
                <li @click="addIcon" class="messages-chat__container__icon__item">
                    <img :src="imgSmile" alt="">
                </li>
                <li @click="addIcon" class="messages-chat__container__icon__item">
                    <img :src="imgSmiling" alt="">
                </li>
                <li @click="addIcon" class="messages-chat__container__icon__item">
                    <img :src="imgSmiling" alt="">
                </li>
                <li @click="addIcon" class="messages-chat__container__icon__item">
                    <img :src="imgSmile" alt="">
                </li>
                <li @click="addIcon" class="messages-chat__container__icon__item">
                    <img :src="imgSmiling" alt="">
                </li>
                <li @click="addIcon" class="messages-chat__container__icon__item">
                    <img :src="imgSmile" alt="">
                </li>
            </ul>
      </div>
  </div>
</template>

<script>
import imgUser from "../../../assets/images/user.svg";
import imgSmile from "../../../assets/images/smile.svg";
import imgSmiling from "../../../assets/images/smiling.svg";
import imgGift from "../../../assets/images/gift-box.svg";
let commnetUsers = [
    {
        name:"A1",
        content:"hello",
        avatar:imgUser,
        isShowGift:false
        
    },
    {
        name:"A2",
        content:"Xin chào",
        avatar:imgUser,
        isShowGift:false
    }
    ]
export default {
    name:"messages chat",
    data:()=>{
        return{
            imgUser,
            imgSmile,
            imgSmiling,
            commnetUsers,
            commnetUser:{
                name:"A2",
                content:"xin chao A2",
                avatar:imgUser,
                gift:imgSmiling,
                isShowGift:true
            },
            isShowIcon:false
        }
    },
    methods:{
        enterText(e){
            this.commnetUser={...this.commnetUser,content:e.target.value,isShowGift:false}
        },
        addIcon(){
            this.commnetUser={...this.commnetUser, gift:imgSmiling, isShowGift:true}
             this.commnetUsers=[...this.commnetUsers,this.commnetUser]
             this.isShowIcon=false
        },
        sendCommnent(){
            this.commnetUsers=[...this.commnetUsers,this.commnetUser]
            this.commnetUser={...this.commnetUser,content:""}
            this.isShowIcon=false
        },
        
        showIcon(){
            this.isShowIcon=!this.isShowIcon
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/home/messages-area.scss";
</style>