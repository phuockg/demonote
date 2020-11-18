<template>
  <div class="home">
    <div class="home__container">
      <Profile />
      <StreamLive />
      <MessagesArea/>
      
    </div>
    
  </div>
</template>

<script>
import StreamLive from "../components/home-pgae/stream-live/StreamLive";
import MessagesArea from "../components/home-pgae/messages-area/MessagesArea";
import Profile from "../components/home-pgae/profile-member/Profile";
export default {
  head: {
    title: "Home Page",
  },
};
</script>
<style lang="scss" scoped>
@import "~/assets/scss/components/home/index.scss";
</style>
