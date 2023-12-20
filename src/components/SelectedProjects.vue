<script lang="ts" setup></script>

<template>
    <section id="work" class="relative flex">
        <div class="heading flex items-flex-end content-space-between">
            <h2>Work</h2>
            <p class="catchphrase">From fast-growing brands to Fortune 50’s.</p>
            <p>(Projects)</p>
        </div>
        <div class="projects">
            <div class="project__card">
                <div class="relative project__card-image">
                    <img
                        src="https://images.unsplash.com/photo-1698050556933-240364f29622?auto=format&fit=crop&q=80&w=3387&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="project image"
                    />
                </div>
                <h5>Everywhere you go</h5>
                <p>(Meta)</p>
            </div>
            <div class="project__card">
                <div class="relative project__card-image">
                    <img
                        src="https://images.unsplash.com/photo-1698050556933-240364f29622?auto=format&fit=crop&q=80&w=3387&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="project image"
                    />
                </div>
                <h5>Rule your world</h5>
                <p>(Meta)</p>
            </div>
        </div>
        <div class="navigation">
            <a href="#" class="relative underlined">See all projects</a>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section#work {
    flex-direction: column;
    gap: 1rem;
    margin-bottom: size(15);

    .heading {
        h2 {
            text-transform: uppercase;
            font-weight: $font-weight-bold;
            font-size: size(13);
        }

        @include mq("md") {

            h2 {
                font-weight: 700;
                font-size: calc(size(13) * 2.5);
                line-height: calc(size(15) + 0.8rem);
            }

            p.catchphrase {
                flex: 0 0 12%;
            }
        }
    }

    .projects {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 8rem 1.2rem;
        margin-top: size(11);

        .project__card {
            grid-column: 1 / span 2;

            @include mq("md") {
                grid-column: span 1 / span 1;
            }

            .project__card-image {
                width: 100%;
                height: 100%;
                min-height: 45.5rem;
                border-radius: 0.75rem;
                overflow: hidden;
                margin-bottom: size(5);

                img {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }

        h5 {
            font-size: size(5);
            font-weight: normal;
        }

        p {
            font-size: size(5);
        }
    }

    .navigation {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin-top: size(15);

        a {
            display: inline-block;
            color: clr(neutral, '800');
            font-size: size(9);
            width: max-content;

            &.underlined {
                --line-size: 0.08rem;
            }
        }

        @include mq("md") {
            grid-template-columns: repeat(2, 1fr);
            margin-top: calc(size(15) * 1.2);

            a {
                grid-column: 2 / span 2;
                font-size: size(12);

                &.underlined {
                --line-size: 0.20rem;
            }
            }
            
        }
    }
}
</style>
