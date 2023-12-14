<script lang="ts" setup>
import { ref } from 'vue';

type Services = {
    title: string;
    display_cover: string;
    description: string;
}

const services = ref<Services[]>([
    {
        title: 'Identities',
        display_cover: "https://images.unsplash.com/photo-1698050556933-240364f29622?auto=format&fit=crop&q=80&w=3387&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: 'We create motion identities that express your brand in a memorable and compelling way.'
    },
    {
        title: 'Systems',
        display_cover: "https://images.unsplash.com/photo-1698050556933-240364f29622?auto=format&fit=crop&q=80&w=3387&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: 'We create motion identities that express your brand in a memorable and compelling way.'
    },
    {
        title: 'Applications',
        display_cover: "https://images.unsplash.com/photo-1698050556933-240364f29622?auto=format&fit=crop&q=80&w=3387&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: 'We create motion identities that express your brand in a memorable and compelling way.'
    },
])
</script>

<template>
    <section id="services">
		<span>(Services)</span>
		<div class="flex service__tiles">
            <div class="flex service__card" v-for="service in services" :key="service.title">
				<h3 class="service__card-title">{{ service.title }}</h3>
				<div class="service__card-img">
					<img :src="service.display_cover" :alt="`cover image for ${service.title}`">
				</div>
				<p class="service__card-desc">{{ service.description }}</p>
			</div>
            <a href="#" class="relative underlined">Learn more about our approach</a>
		</div>

        <div class="brand">
            <div class="brand__img">
                <img src="https://images.unsplash.com/photo-1698050556933-240364f29622?auto=format&fit=crop&q=80&w=3387&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="cover image">
            </div>

            <div class="brand__content">
                <h2>We go beyond animation.</h2>
                <p>Transforming brands into dynamic brand experiences. </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, nobis molestias ratione voluptatum similique ducimus inventore laboriosam blanditiis natus ut illum in. Incidunt sit quo numquam ad deserunt voluptatem ea.
                </p>
                
                <a href="#" class="relative underlined">Learn more about us</a>
            </div>
        </div>
	</section>
</template>

<style lang="scss" scoped>
section#services {
    flex-direction: column;
    gap: 1rem;
    margin-bottom: size(15);

    & > span {
        display: block;
        font-size: size(5);
        margin-block: size(11);
    }
    .service__tiles {
        --_space: 3.5rem;
        flex-direction: column;
        gap: var(--_space);
        margin-bottom: size(15);

        a {
            width: max-content;
            display: inline-block;
            font-size: size(5);
        }

        .service__card {
            flex-direction: column;
            gap: 1.5rem;
            padding-bottom: var(--_space);
            border-bottom: 0.25px solid clr(neutral, '300');

            &:last-child {
                border-bottom: none;
            }
            &-title {
                font-size: size(10);
                font-weight: 700;
                text-transform: uppercase;
            }
            &-img {
                aspect-ratio: 3/2;
                min-height: 15rem;
                overflow: hidden;
                border-radius: size(5);

                & > img {
                    object-fit: cover;
                }
            }
            &-desc {
                font-size: calc(size(5) + 0.1rem);
                line-height: 1.4;
                color: clr(neutral, '800')
            }
        }
    }

    .brand {
        &__img {
            display: none;
        }

        &__content {
            h2 {
                font-size: size(9);
            }
    
            p {
                font-size: size(6);
                line-height: 1.4;
                color: clr(neutral, '500');
                margin-block: size(10);
            }
    
            a {
                display: inline-block;
                font-size: size(5);
            }
        }
    }
}
</style>
