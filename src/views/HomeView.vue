<script setup lang="ts">
import VuckoLogo from '@/components/logo/VuckoLogo.vue'
import ShowReel from '@/components/ShowReel.vue'
import SelectedProjects from '@/components/SelectedProjects.vue'
import OurServices from '@/components/OurServices.vue'

let name: any = "tunde"
name = 5
console.log(name)
</script>

<template>
    <main>
        <section class="intro">
            <div class="display__logo">
                <VuckoLogo />
            </div>

            <div class="intro__text">
                A motion partner building brand-led identities, systems, and applications.
            </div>

            <div class="learn__more">
                <a href="#" class="relative underlined">Learn more about our approach</a>
            </div>
        </section>
        <ShowReel />

        <section id="approach">
            <span>(Approach)</span>
            <h2>Motion that defines how brands express themselves across modern media.</h2>
            <p data-type="subheading">Transforming brands into dynamic brand experiences.</p>
            <p>
                The media landscape is changing in front of our eyes, and brands need to adapt how
                they communicate in order to thrive. Motion is the connecting tissue between a brand
                and its audience. It is a vital component of a brand’s platform, evolving its
                ecosystem and communications in profound new ways.
            </p>
            <p>
                We work with brand leaders to build motion identities, systems, and applications
                that deepen their audience relationships, strengthen their brand affinity, and drive
                their long-term growth.
            </p>

            <a href="#" class="relative underlined">Learn more about our approach</a>
        </section>

        <SelectedProjects />
        <OurServices />
    </main>
</template>

<style lang="scss" scoped>
main {
    padding-top: size(3);

    section.intro {
        margin-bottom: size(15);

        .display__logo {
        }

        .intro__text {
            font-size: size(9);
        }

        .learn__more {
            font-size: size(5);
            padding-top: size(10);

            a {
                color: clr(neutral, '900');
            }
        }
    }

    section#approach {
        margin-bottom: size(15);

        span {
            font-size: size(5);
            display: block;
            padding-bottom: size(8);
        }

        h2 {
            font-size: size(9);
            font-weight: 400;
            line-height: 1.1em;
            padding-bottom: size(10);
        }

        p {
            font-size: size(5);
            color: clr(neutral, '500');
            line-height: 1.6em;
            margin-bottom: size(6);
        }

        p[data-type='subheading'] {
            color: clr(neutral, '900');
        }

        a {
            display: inline-block;
            font-size: size(5);
            margin-top: size(10);
            color: clr(neutral, '900');
        }
    }
}
</style>
