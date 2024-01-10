<script lang="ts" setup>
import { ref, nextTick } from 'vue'

const videoElemWrapper = ref<null>(null)
// define a new intersection observer
const options = {}

// const observer = new IntersectionObserver((entries) => {
//     console.log({ entries })
// }, options)

// await nextTick()
// observer.observe(videoElemWrapper.value)
</script>

<template>
    <section class="reel">
        <div class="reel__wrapper flex absolute">
            <div class="reel__title">
                <p>Rainbow Showreel</p>
                <p>(Client - 2018/2023)</p>
            </div>
            <div class="reel__video">
                <div class="reel__video-cover" ref="videoElemWrapper">
                    <video
                        src="https://player.vimeo.com/progressive_redirect/playback/875704152/rendition/1080p/file.mp4?loc=external&amp;signature=a51db91031c588449ef893d10479cf7ccf0294dc26b184c643a63da3ce9c257d"
                        muted="muted"
                        loop="loop"
                        autoplay="autoplay"
                        playsinline=""
                        style="opacity: 1"
                    ></video>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {

    .reel__wrapper {
        flex-direction: column;
        gap: 1rem;

        .reel__title {
            font-size: 1.25rem;
        }
    
        .reel__video {
            position: relative;
            margin-bottom: 20rem;

            &-cover {
                width: 100%;
                height: 100%;
                border-radius: 1.05rem;
                position: absolute;
                inset: 0;
                border: 1px solid clr(primary, '600');
    
                video {
                    width: 100%;
                    height: auto;
                    position: absolute;
                    inset: 0;
                    object-fit: cover;
                }
            }
        }
    }

    @include mq("md") {
        .reel__wrapper {
            --_video-height: 34.33rem;

            top: 23svh;
            left: 0;
            transform: translateX(100%);
            width: 12rem;

            .reel__title {
                order: 2;
            }
    
            .reel__video {
                order: 1;
                position: relative;
                margin-bottom: 0;
                min-height: 18.5rem;
                max-height: var(--_video-height);
                background: clr(neutral, '900');
                clip-path: inset(0px round 1.2rem);
            }
        }
    }
}
</style>
