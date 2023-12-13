<script lang="ts" setup></script>

<template>
    <div class="dropdown flex absolute">
        <nav class="dropdown__nav">
            <ul>
                <li>Home</li>
                <li>Projects</li>
                <li>Approach</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>

		<div class="dropdown__socials flex">
			<a href="">Instagram</a>
			<a href="">LinkedIn</a>
			<a href="">Github</a>
		</div>
    </div>
</template>

<style lang="scss" scoped>
.dropdown {
    @include inset();
    background-color: clr(neutral, '900');
    width: 100%;
    height: 100vh;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding-top: 13rem;
	padding-bottom: size(9);

	&__nav {
		ul {
			li {
				position: relative;
				font-size: size(11);
				line-height: 1.3;
				text-align: center;
				color: clr(neutral, '500');
				font-weight: $font-weight-bold;
				text-transform: uppercase;
			}
		}
	}

	&__socials {
		gap: size(8);
		font-size: size(5);
		a {
			color: clr(neutral, '100');
		}
	}
}
</style>
