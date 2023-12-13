<script lang="ts" setup>
import VuckoLogo from './logo/VuckoLogo.vue';
</script>

<template>
	<footer class="footer">
		<div class="contact">
			<p>Work with us</p>
			<a href="#" class="relative underlined">work@rainbow.rain</a>
		</div>

		<div class="footer__links flex">
			<div class="flex">
				<h4>Sitemap</h4>
				<ul class="flex flex-column">
					<li><a href="#">Home</a></li>
					<li><a href="#">Projects</a></li>
					<li><a href="#">Approach</a></li>
					<li><a href="#">About</a></li>
					<li><a href="#">Contact</a></li>
				</ul>
			</div>
			<div class="flex">
				<h4>Socials</h4>
				<ul class="flex flex-column">
					<li><a href="#">Instagram</a></li>
					<li><a href="#">LinkedIn</a></li>
					<li><a href="#">Github</a></li>
				</ul>
			</div>
		</div>

		<div class="copyright flex flex-column items-center">
			<span>Back to top</span>
			<div class="logo">
				<VuckoLogo />
			</div>
			<p>Copyright &copy; Rainbow 2023</p>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
footer {
	.contact {
		border-bottom: 0.25px solid clr(neutral, '300');
		padding-bottom: 4.5rem;

		p, a {
			font-size: size(9);
		}

		a { color: clr(neutral, '900')}
	}

	.footer__links {
		margin-top: size(12);
		width: 100%;
		flex: 0 0 100%;

		& > div {
			flex-direction: column;
			width: 50%;

			h4 {
				font-weight: 400;
				color: clr(neutral, '900');
				font-size: size(5);
				margin-block: size(5);
			}

			ul {
				gap: size(2);
				li {
					a {
						font-size: size(5);
						color: clr(neutral, '400');
					}
				}
			}
		}
	}

	.copyright {
		gap: size(7);
		padding-top: calc(size(14) * 2.4);
		padding-bottom: size(11);

		span {
			font-size: size(6);
		}

		p {
			font-size: size(5);
		}

		.logo {
			height: auto;
			width: 23.5rem;

			svg {
				width: 100%;
				height: auto;
				overflow: hidden;
			}
    	}
	}
}
</style>