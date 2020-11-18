<template>
    <div class="stream-live">
        <div class="stream-live__container">
            <div class="stream-live__container__frame">
                <figure class="stream-live__container__frame__video">
                    <video width="95%" height="550px" controls poster="assets/images/TimeLine2.png">
                    <source
                        :src="Video"
                        type="video/mp4"
                    />
                    </video>
                
              </figure>
            </div>
        </div>
    </div>
</template>

<script>
import Video from "../../../assets/video/videoplayback.mp4";
export default {
data:()=>{
    return{
        Video
    }
}
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/home/stream-live.scss";
</style>