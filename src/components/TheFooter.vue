<script lang="ts" setup>
import VuckoLogo from './logo/VuckoLogo.vue';
</script>

<template>
	<footer class="footer">
		<div class="contact flex flex-column">
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
	border-top: 0.25px solid clr(neutral, '300');
	padding-top: 4.5rem;
	padding-inline: size(7);

	@include mq('md') {
		padding-inline: size(11);
	}
	.contact {
		border-bottom: 0.25px solid clr(neutral, '300');
		padding-bottom: 4.5rem;
		width: 100%;

		p, a {
			font-size: size(9);
			letter-spacing: -0.075rem;
		}

		a { 
			color: clr(neutral, '900');
			width: max-content;
		}

		@include mq('md') {
			flex-direction: row;
			justify-content: space-between;

			p, a {
				font-size: size(11);
			}
		}
	}

	.footer__links {
		margin-top: size(12);
		width: 100%;
		flex: 0 0 50%;
		gap: size(13);

		// @include mq('md') {
		// 	gap: size(13);
		// }

		& > div {
			flex-direction: column;

			h4 {
				font-weight: 400;
				color: clr(neutral, '900');
				font-size: size(5);
				margin-block: size(8);
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
		// flex-direction: column;
		gap: size(7);
		padding-top: calc(size(14) * 2.4);
		padding-bottom: size(11);

		@include mq('md') {
			padding-top: calc(size(13) * 2.4);
			flex-direction: row;
			justify-content: space-between;
			align-items: flex-end;
		}

		span {
			font-size: size(6);

			@include mq('md') {
				order: 2;
			}
		}

		p {
			font-size: size(5);
			@include mq('md') {
				order: 3;
			}
		}

		.logo {
			height: auto;
			width: 23.5rem;

			@include mq('md') {
				order: 1;
				width: 59.63rem;
			}

			svg {
				width: 100%;
				height: auto;
				overflow: hidden;
			}


    	}
	}
}
</style>