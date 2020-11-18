<template>
  <div class="profile">
      <div class="profile__container">
          <div class="profile__container__infor">
              <img class="profile__container__infor__avatar"  :src="imgUserProfile" alt="">
              <div class="profile__container__infor__content">
                  <p class="profile__container__infor__content__name">
                      Nguyen Van A
                  </p>
                  <div class="profile__container__infor__content__feature">
                      <div class="profile__container__infor__content__feature__follow">
                          <img :src="imgUserFollower" alt=""> 
                          <p>1200</p>
                      </div>
                      <div class="profile__container__infor__content__feature__space"></div>
                      <div class="profile__container__infor__content__feature__like">
                          <img :src="imgUserLike" alt=""> 
                          <p>200</p>
                      </div>
                  </div>
              </div>
          </div>
          <div class="profile__container__introduce">
              <p>よこやま そうたです！ 北海道 22歳 170cm MODECON関東セミファイナル審査11月14日〜　
                12月19日出ます ①ミクチャでの配信のpt ②1日1回web投票▶︎20pt ③#MODECON#ミクチャRT数▶︎30pt
                 MODECON東日本セミファイナリスト 趣味 好きなもの 特技 将来の夢 色んな音楽聴くこと メイク
                  ストリート 絵描き 井手上漠君のようなマルチタレントになりたい 
                  頑張るんでアイテム投げて下さい😂 ファンマーク ☺︎🐑☔️🌈メリーの夢に
              </p>
          </div>
      </div>
  </div>
</template>

<script>
import imgUserProfile from "../../../assets/images/user.svg";
import imgUserFollower from "../../../assets/images/follower.svg";
import imgUserLike from "../../../assets/images/like.svg";
export default {
data:()=>{
    return{
        imgUserProfile,
        imgUserFollower,
        imgUserLike
    }
}
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/home/profile.scss";
</style>