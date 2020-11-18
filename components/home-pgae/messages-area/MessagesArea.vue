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
                    <img class="messages-chat__container__frames-chat__inbox-item__avatar" :src="item.avatar" alt="">
                    <div class="messages-chat__container__frames-chat__inbox-item__content">
                      {{item.isShowGift ? item.contentGift:item.content}}
                    </div>
                    <img class="messages-chat__container__frames-chat__inbox-item__gift"  v-if="item.isShowGift" :src="item.gift" alt="">
                </li>
            </ul>
            <div class="messages-chat__container__content-message">
                <div class="messages-chat__container__content-message__btn-point">
                    <button @click="showIcon"><img :src="imgGift" alt=""></button>
                </div>
                <div class="messages-chat__container__content-message__input">
                    <!-- <input v-on:keyup="enterText" type="text" :value="commnetUser.content"> -->
                    <span contenteditable="true"> nguyen quang phuoc</span>
                    <div class="messages-chat__container__content-message__input__btn-send">
                        <button @click="sendCommnent">send</button>
                    </div>
                </div>
            </div>
            <ul v-if="isShowIcon"  class="messages-chat__container__icon">
                <li v-for="(item, index) in dataGift"  :key="index" @click="()=>addIcon(item.img)" class="messages-chat__container__icon__item">
                    <img class="messages-chat__container__icon__item__gift" :src="item.img" alt="">
                    <div class="messages-chat__container__icon__item__infor"> 
                        <p class="messages-chat__container__icon__item__infor__price">{{item.price}}</p>
                        <img class="messages-chat__container__icon__item__infor__unit" :src="imgDiamond" alt="">
                    </div>
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
import imgDiamond from "../../../assets/images/diamond.svg";
//xe
import imgBus from "../../../assets/images/bus.svg";
import imgCar from "../../../assets/images/car.svg";
//nươc
import imgCola from "../../../assets/images/cola.svg";
import imgDrinkWater from "../../../assets/images/drink-water.svg";
//hoa
import imgFlowerPot from "../../../assets/images/flower-pot.svg";
import imgRose from "../../../assets/images/rose.svg";
//trưng
import imgEgg from "../../../assets/images/egg.svg";
import imgEggs from "../../../assets/images/eggs.svg";
//rong
import imgDragon from "../../../assets/images/dragon.svg";
import imgDragon2 from "../../../assets/images/dragon2.svg";
let commnetUsers = [
    {
        name:"A1",
        content:"hello",
        contentGift:"xin chao! `Name` vừa tặng bạn món quà ",
        avatar:imgUser,
        isShowGift:false
        
    },
    {
        name:"A2",
        content:"Xin chào",
        contentGift:"xin chao! `Name` vừa tặng bạn món quà ",
        avatar:imgUser,
        isShowGift:false
    }
    ]
let dataGift = [{
        img:imgFlowerPot,
        price:1,
    },{
        img:imgRose,
        price:5,
    },{
        img:imgCola,
        price:10,
    },{
        img:imgDrinkWater,
        price:15,
    },{
        img:imgCar,
        price:100,
    },{
        img:imgBus,
        price:400,
    },{
        img:imgEgg,
        price:1000,
    },{
        img:imgEggs,
        price:5000,
    },{
        img:imgDragon,
        price:10000,
    },{
        img:imgDragon2,
        price:20000,
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
            imgDiamond,
            imgGift,
            imgBus,
            imgCar,
            imgCola,
            imgDrinkWater,
            imgFlowerPot,
            imgRose,
            imgEgg,
            imgEggs,
            imgDragon,
            imgDragon2,
            dataGift,
            commnetUser:{
                name:"A2",
                content:"",
                contentGift:"xin chao! `Name` vừa tặng bạn món quà ",
                avatar:imgUser,
                gift:imgSmiling,
                isShowGift:false
            },
            isShowIcon:false
        }
    },
    methods:{
        enterText(e){
            this.commnetUser={...this.commnetUser,content:e.target.value,isShowGift:false}
        },
        addIcon(item){
            this.commnetUser={...this.commnetUser, gift:item, isShowGift:true}
             this.commnetUsers=[...this.commnetUsers,this.commnetUser]
             this.isShowIcon=false
        },
        sendCommnent(){
            this.commnetUser={...this.commnetUser,isShowGift:false}
            this.commnetUsers=[...this.commnetUsers,this.commnetUser]
            this.commnetUser={...this.commnetUser,content:"",isShowGift:false}
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