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
            <div class="col">
                <span>(arrow right visible on large screen)</span>
            </div>

            <div class="content-col">
                <div class="heading__block">
                    <span>(Approach)</span>
                    <h2>Motion that defines how brands express themselves across modern media.</h2>
                </div>

                <div class="content__block">
                    <div>
                        <span>(Approach)</span>
                    </div>
                    <div class="content">
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
                    </div>
                </div>
            </div>
        </section>

        <SelectedProjects />
        <OurServices />
    </main>
</template>

<style lang="scss" scoped>
main {
    padding-top: size(11);

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

        @include mq('md') {
            .intro__text {
                font-size: size(10);
                max-width: 50rem;
            }
        }
    }

    section#approach {
        margin-bottom: size(15);
        display: grid;
        gap: size(5);
        grid-template-columns: repeat(12, minmax(0, 1fr));

        .col {
            @include mq("md") {
                grid-column: 1 / span 3;
            }
        }

        .content-col {
            grid-column: 1 / span 1;

            @include mq("md") {
                grid-column: 4 / span 12;
            }

            .heading__block {
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
    
                @include mq('md') {
    
                    h2 {
                        font-weight: 500;
                        font-size: calc(size(11) * 1.2);
                    }
                }
            }
    
            .content__block {
                display: grid;
                gap: size(6);
                grid-template-columns: repeat(12, minmax(0, 1fr));
                margin-top: size(14);


                div:has(.content) {
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
    
                @include mq('md') {

                    .content {
                        grid-column: 4 / span 8;

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
            }
        }
    }
}
</style>
