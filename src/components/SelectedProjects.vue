<script lang="ts" setup></script>

<template>
    <section id="work" class="relative flex">
        <h2>Work</h2>
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

    h2 {
        text-transform: uppercase;
        font-weight: $font-weight-bold;
        font-size: size(13);
    }

    .projects {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 8rem 1.2rem;

        .project__card {
            grid-column: 1 / span 2;

            .project__card-image {
                width: 100%;
                height: 100%;
                border-radius: 1.05rem;
                min-height: 25.5rem;
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
        display: block;
        margin-top: size(15);
        a {
            display: inline-block;
            color: clr(neutral, '800');
            font-size: size(9);

            &.underlined {
                --line-size: 0.08rem;
            }
        }
    }
}
</style>
