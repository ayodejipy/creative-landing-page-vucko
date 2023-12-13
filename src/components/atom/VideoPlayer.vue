<script lang="ts" setup></script>

<template>
	<div class="reel__video">
		<div class="reel__video-cover">
			<!-- <video
				src="https://player.vimeo.com/progressive_redirect/playback/875704152/rendition/1080p/file.mp4?loc=external&amp;signature=a51db91031c588449ef893d10479cf7ccf0294dc26b184c643a63da3ce9c257d"
				muted="muted"
				loop="loop"
				autoplay=""
				playsinline=""
				style="opacity: 1"
			></video> -->
		</div>
	</div>
</template>

<style lang="scss" scoped>
section {
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
</style>
