<template>
  <div class="messages-chat">
      <div class="messages-chat__container">
            <div class="messages-chat__container__infor">
                <h3 class="messages-chat__container__infor__title">
                   Top gift
                </h3>
                <ul class="messages-chat__container__infor__list">
                    <li class="messages-chat__container__infor__list__item">
                        <img class="messages-chat__container__infor__list__item__avatar" :src="imgUser" alt="">
                        <p class="messages-chat__container__infor__list__item__name">NVA</p>
                        <div class="messages-chat__container__infor__list__item__price">
                            <p>1200</p>
                            <img class="messages-chat__container__infor__list__item__price__unit" :src="imgDiamond" alt="">
                        </div>
                        
                    </li>
                    <li class="messages-chat__container__infor__list__item">
                        <img class="messages-chat__container__infor__list__item__avatar" :src="imgUser" alt="">
                        <p class="messages-chat__container__infor__list__item__name">NVA</p>
                       <div class="messages-chat__container__infor__list__item__price">
                            <p>500</p>
                            <img class="messages-chat__container__infor__list__item__price__unit" :src="imgDiamond" alt="">
                        </div>
                    </li>
                    <li class="messages-chat__container__infor__list__item">
                        <img class="messages-chat__container__infor__list__item__avatar" :src="imgUser" alt="">
                        <p class="messages-chat__container__infor__list__item__name">NVA</p>
                        <div class="messages-chat__container__infor__list__item__price">
                            <p>100</p>
                            <img class="messages-chat__container__infor__list__item__price__unit" :src="imgDiamond" alt="">
                        </div>
                    </li>

                </ul>
            </div>
            <ul ref="frameLength" class="messages-chat__container__frames-chat">
                <li ref="frames" v-for="(item, index) in commnetUsers" :key="index" class="messages-chat__container__frames-chat__inbox-item">

                    <div class="messages-chat__container__frames-chat__inbox-item__avatars">
                        <div class="messages-chat__container__frames-chat__inbox-item__avatars__avatar">
                             <img class="messages-chat__container__frames-chat__inbox-item__avatars__avatar__img" :src="item.avatar" alt="">
                             <p>You</p>
                        </div>
                        <div class="messages-chat__container__frames-chat__inbox-item__avatars__content">
                            {{item.isShowGift ? item.contentGift:item.content}}
                        </div>
                    </div>
                    <div class="messages-chat__container__frames-chat__inbox-item__gift">
                        <img class="messages-chat__container__frames-chat__inbox-item__gift__img" 
                        :class="item.price > 20 && item.price <= 1000 ? 'messages-chat__container__frames-chat__inbox-item__gift__img-1': item.price > 1000 && item.price <= 20000 ? 'messages-chat__container__frames-chat__inbox-item__gift__img-2':''"  v-if="item.isShowGift" :src="item.gift" alt="">
                        <div  v-if="item.isShowGift" class="messages-chat__container__frames-chat__inbox-item__gift__price">
                             <p>{{item.price}}</p>
                             <img class="messages-chat__container__frames-chat__inbox-item__gift__price__unit" :src="imgDiamond" alt="">
                        </div>  
                    </div>
                    
                </li>
            </ul>
            <div class="messages-chat__container__content-message">
                <div class="messages-chat__container__content-message__btn-point">
                    <button @click="showIcon"><img :src="imgGift" alt=""></button>
                </div>
                <div class="messages-chat__container__content-message__input">
                    <!-- <input v-on:keyup="enterText" type="text" :value="commnetUser.content"> -->
                    <textarea v-on:keyup="enterText" type="text" :value="commnetUser.content" rows="4" cols="50">
                    </textarea>
                    <!-- <span class="messages-chat__container__content-message__input__span" v-on:keyup="enterText" contenteditable="true"> {{commnetUser.content}}</span> -->
                    <div class="messages-chat__container__content-message__input__btn-send">
                        <button @click="sendCommnent">send</button>
                    </div>
                </div>
            </div>
            <div  v-if="isShowIcon" class="messages-chat__container__icon">
                <div  class="messages-chat__container__icon__wrap">
                    <div class="messages-chat__container__icon__wrap__btn-hide">
                        <img @click="hideGift" :src="imgClose" alt="">
                    </div>
                    <div class="messages-chat__container__icon__wrap__arrow-show">
                        
                    </div>
                    <div class="messages-chat__container__icon__wrap__list">
                        <ul  class="messages-chat__container__icon__wrap__list__type">
                            <li v-for="(item, index) in dataGift" v-if="item.price > 0 && item.price <= 20" :key="index" @click="()=>addIcon(item)" class="messages-chat__container__icon__wrap__list__type__item">
                                <img  class="messages-chat__container__icon__wrap__list__type__item__gift"  :src="item.img" alt="">
                                <div class="messages-chat__container__icon__wrap__list__type__item__infor"> 
                                    <p class="messages-chat__container__icon__wrap__list__type__item__infor__price">{{item.price}}</p>
                                    <img class="messages-chat__container__icon__wrap__list__type__item__infor__unit" :src="imgDiamond" alt="">
                                </div>
                            </li>
                        </ul>
                        <!-- quà lớn -->
                        <ul class="messages-chat__container__icon__wrap__list__type">
                            <li v-for="(item, index) in dataGift" v-if="item.price > 20 && item.price <= 1000 " :key="index" @click="()=>addIcon(item)" class="messages-chat__container__icon__wrap__list__type__item-1">
                                <img  class="messages-chat__container__icon__wrap__list__type__item-1__gift-1"  :src="item.img" alt="">
                                <div class="messages-chat__container__icon__wrap__list__type__item__infor"> 
                                    <p class="messages-chat__container__icon__wrap__list__type__item__infor__price">{{item.price}}</p>
                                    <img class="messages-chat__container__icon__wrap__list__type__item__infor__unit" :src="imgDiamond" alt="">
                                </div>
                            </li>
                        </ul>
                        <!-- quà cực lớn -->
                        <ul   class="messages-chat__container__icon__wrap__list__type">
                            <li v-for="(item, index) in dataGift" v-if="item.price > 1000 && item.price <= 20000" :key="index" @click="()=>addIcon(item)" class="messages-chat__container__icon__wrap__list__type__item-2">
                                <img  class="messages-chat__container__icon__wrap__list__type__item-2__gift-2"  :src="item.img" alt="">
                                <div class="messages-chat__container__icon__wrap__list__type__item__infor"> 
                                    <p class="messages-chat__container__icon__wrap__list__type__item__infor__price">{{item.price}}</p>
                                    <img class="messages-chat__container__icon__wrap__list__type__item__infor__unit" :src="imgDiamond" alt="">
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
          
            
      </div>
  </div>
</template>

<script>
import imgUser from "../../../assets/images/user.svg";
import imgSmile from "../../../assets/images/smile.svg";
import imgSmiling from "../../../assets/images/smiling.svg";
import imgGift from "../../../assets/images/gift-box.svg";
import imgDiamond from "../../../assets/images/diamond.svg";
import imgClose from "../../../assets/images/close.svg";
//xe

import imgBus from "../../../assets/images/bus.svg";
import imgCar from "../../../assets/images/car.svg";
import imgBicycle from "../../../assets/images/bicycle.svg";
import imgMotorbike from "../../../assets/images/motorbike.svg";
import imgPlane from "../../../assets/images/plane.svg";
//nươc
import imgCola from "../../../assets/images/cola.svg";
import imgDrinkWater from "../../../assets/images/drink-water.svg";
//hoa
import imgFlowerPot from "../../../assets/images/flower-pot.svg";
import imgRose from "../../../assets/images/rose.svg";
//banh
import imgBirthdayCake from "../../../assets/images/birthday-cake.svg";

//trưng
import imgEgg from "../../../assets/images/egg.svg";
import imgEggs from "../../../assets/images/eggs.svg";
import imgEasterEgg from "../../../assets/images/easter-egg.svg";
//rong
import imgDragon from "../../../assets/images/dragon.svg";
import imgDragon2 from "../../../assets/images/dragon2.svg";
let commnetUsers = [
    {
        name:"A1",
        content:"hello",
        contentGift:"xin chao! `You` vừa tặng bạn món quà ",
        avatar:imgUser,
        isShowGift:false,
        price:"100"
        
    },
    {
        name:"A2",
        content:"Xin chào",
        contentGift:"xin chao! `You` vừa tặng bạn món quà ",
        avatar:imgUser,
        isShowGift:false,
        price:"100"
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
        img:imgBirthdayCake,
        price:20,
    },{
        img:imgBicycle,
        price:100,
    },{
        img:imgMotorbike,
        price:200,
    },{
        img:imgCar,
        price:400,
    },{
        img:imgBus,
        price:600,
    },{
        img:imgPlane,
        price:800,
    },{
        img:imgEgg,
        price:1100,
    },{
        img:imgEasterEgg,
        price:1200,
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
    name:"messageschat",
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
            imgClose,
            imgCola,
            imgDrinkWater,
            imgFlowerPot,
            imgEasterEgg,
            imgRose,
            imgEgg,
            imgEggs,
            imgDragon,
            imgDragon2,
            imgBirthdayCake,
            dataGift,
            imgBicycle,
            imgMotorbike,
            imgPlane,
            commnetUser:{
                name:"A2",
                content:"",
                contentGift:"xin chao! You vừa tặng bạn món quà ",
                avatar:imgUser,
                gift:imgSmiling,
                isShowGift:false,
                price:"100"
            },
            isShowIcon:false
        }
    },
    methods:{
        enterText(e){
            this.commnetUser={...this.commnetUser,content:e.target.value,isShowGift:false} 
        },
        addIcon(item){
            this.commnetUser={...this.commnetUser, gift:item.img,price:item.price, isShowGift:true}
             this.commnetUsers=[...this.commnetUsers,this.commnetUser]
           
             this.$refs.frameLength.scrollTop=    Number(this.$refs.frames[this.$refs.frames.length - 1].offsetTop) + Number(this.$refs.frames[this.$refs.frames.length - 1].offsetHeight)
         
             this.isShowIcon=false
        },
        sendCommnent(){
            this.commnetUser={...this.commnetUser,isShowGift:false}
            this.commnetUsers=[...this.commnetUsers,this.commnetUser]
            this.commnetUser={...this.commnetUser,content:"",isShowGift:false}
            this.$refs.frameLength.scrollTop=    Number(this.$refs.frames[this.$refs.frames.length - 1].offsetTop) + Number(this.$refs.frames[this.$refs.frames.length - 1].offsetHeight)
            this.isShowIcon=false
        },
        
        showIcon(){
            this.isShowIcon=!this.isShowIcon
        },
        hideGift(){
            this.isShowIcon=false
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/home/messages-area.scss";
</style>