<template>
	<layout dir="ltr" :class="layoutClasses">
		<template #nav-bar-title-after>
		</template>

		<template #nav-bar-content-before>
			<div v-if="theme?.cdxSocialLinks" class="cdx-social-links">
				<a
					v-for="item in theme.cdxSocialLinks"
					:key="item.link"
					:href="item.link"
					:aria-label="item.ariaLabel ? item.ariaLabel : undefined"
					:title="item.ariaLabel ? item.ariaLabel : undefined"
					class="cdx-social-link"
					target="_blank"
					rel="noopener noreferrer"
				>
					<cdx-icon :icon="ICONS[item.icon]" />
				</a>
			</div>
		</template>

		<template #nav-bar-content-after>
			<cdx-docs-appearance-menu
				v-model:color-mode="colorMode"
				v-model:font-mode="fontMode"
				dir="ltr"
			/>
		</template>

		<template #doc-before>
			<header class="doc-header vp-doc" role="banner">
				<h1 v-if="frontmatter.title" v-html="frontmatter.title"></h1>

				<div v-if="frontmatter.description" v-html="frontmatter.description" class="doc-description"></div>

				<figure v-if="frontmatter.hero?.image" class="doc-hero">
					<img
						:src="frontmatter.hero.image.src"
						:alt="frontmatter.hero.image.alt || ''"
						fetchpriority=high
					/>

					<figcaption
						class="doc-hero-caption"
						v-if="frontmatter.hero.caption"
						v-html="frontmatter.hero.caption"
					>
					</figcaption>
				</figure>
			</header>
		</template>

		<template v-if="!isTopOfPage" #doc-bottom>
			<cdx-docs-return-to-top />
		</template>

		<template #layout-bottom>
			<footer id="footer" class="cdx-footer">
				<div class="container">
					<div class="content">
						<div class="cdx-footer-copyright">
							<p>Text is available under the <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener">Creative Commons Attribution-ShareAlike 4.0 International</a>, additional terms may apply.</p>
							<p>Code is available under the  <a href="https://en.wikipedia.org/wiki/MIT_License" target="_blank">MIT License</a>.</p>
						</div>

						<ul class="inline-list cdx-footer-extra">
							<li><a href="/accessibility-statement.html" target="_blank">Accessibility statement</a></li>
							<li><a href="https://wikimediafoundation.org/privacy-policy/">Privacy policy</a></li>
						</ul>

						<!-- Tracking Pixel -->
						<noscript v-if="!isDev">
							<img src="https://piwik.wikimedia.org/piwik.php?idsite=16&rec=1" />
						</noscript>
					</div>
				</div>
			</footer>
		</template>
	</layout>
	<!--
		Teleport target provided to any teleport-using components.
		This is needed so that direction-specific styles don't break for teleported elements.
	-->
	<div
		ref="teleportTarget"
		dir="ltr"
		class="vp-raw"
	/>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted, watch, provide } from 'vue';
import { useRoute, useData } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import CdxDocsAppearanceMenu from '../appearance-menu/AppearanceMenu.vue';
import CdxDocsReturnToTop from '../return-to-top/ReturnToTop.vue';
import { CdxIcon } from '@wikimedia/codex';
import { ICONS } from '../../utils/icons'

const { Layout } = DefaultTheme;
const route = useRoute();
const { theme, frontmatter, isDark } = useData();
const isDev = import.meta.env.DEV

const teleportTarget = ref<HTMLDivElement>();
provide( 'CdxTeleportTarget', teleportTarget );
provide( 'CdxTeleportMenus', true );

// Initially hide the "return to top" button when at the top of the page.
const isTopOfPage = ref( true );
function handleScroll() {
	isTopOfPage.value = window.scrollY === 0;
}

// Color and font modes.
const colorMode = ref( 'system' );
const colorModeIsDark = computed( () => colorMode.value === 'dark' ||
	( colorMode.value === 'system' && window.matchMedia && window.matchMedia( '(prefers-color-scheme: dark)' ).matches ) );
const fontMode = ref( 'medium' );

const layoutClasses = computed( () => ( {
	[ `cdx-docs-font-mode--${ fontMode.value }` ]: fontMode.value !== ''
} ) );

/**
 * Update classes on the root element for dark mode.
 *
 * The `cdx-docs-color-mode--dark` class is used in this file to add dark mode tokens. The `dark`
 * class is used by VitePress to apply their dark mode tokens.
 */
function updateDocumentClass() {
	// Update VitePress's ref that tracks whether we're in dark mode. This can be used throughout
	// the site, e.g. on the Colors design tokens page.
	isDark.value = colorModeIsDark.value;
	if ( colorModeIsDark.value ) {
		document.documentElement.classList.add( 'cdx-docs-color-mode--dark', 'dark' );
	} else {
		document.documentElement.classList.remove( 'cdx-docs-color-mode--dark', 'dark' );
	}
}

onMounted( () => {
	colorMode.value = localStorage.getItem( 'cdxColorMode' ) ?? 'system';
	fontMode.value = localStorage.getItem( 'cdxFontMode' ) ?? 'medium';

	window.addEventListener( 'scroll', handleScroll );
	updateDocumentClass();
} );

onUnmounted( () => {
	window.removeEventListener( 'scroll', handleScroll );
} );

watch( colorMode, updateDocumentClass );
</script>

<style lang="less">
@import ( reference ) '@wikimedia/codex-design-tokens/theme-wikimedia-ui.less';
@import ( reference ) '@wikimedia/codex-design-tokens/dist/theme-wikimedia-ui-mixin-dark.less';
@import ( reference ) '@wikimedia/codex-design-tokens/dist/theme-wikimedia-ui-mixin-small.less';
@import ( reference ) '@wikimedia/codex-design-tokens/dist/theme-wikimedia-ui-mixin-large.less';
@import ( reference ) '@wikimedia/codex-design-tokens/dist/theme-wikimedia-ui-mixin-x-large.less';

html.cdx-docs-color-mode {
	&--dark {
		.cdx-mode-dark();
	}
}

// Use the font mode mixins to apply the appropriate font mode when one is selected.
.cdx-docs-font-mode {
	&--small {
		.cdx-mode-small();
	}

	&--large {
		.cdx-mode-large();
	}

	&--x-large {
		.cdx-mode-x-large();
	}
}

.doc-header {
	margin-bottom: var(--spacing-200);

	h1 {
		margin-bottom: var(--spacing-75);
	}

	.doc-description {
		color: var(--color-subtle);
		font-size: var(--font-size-large);
		margin-bottom: var(--spacing-150);

		p:last-child {
			margin-bottom: 0;
		}
	}
}

.doc-hero {
	margin: var(--spacing-100) 0;
	text-align: center;

	img {
		max-width: 100%;
		max-height: 25vh;
		width: 100%;
		object-fit: cover;
		border-radius: var(--spacing-50);
	}

	&-caption {
		margin-top: var(--spacing-50);
		font-size: var(--font-size-small);
		color: var(--color-subtle);
	}
}

.VPNav .VPNavBar .content-body {
	--nav-column-gap: var(--spacing-50);
	column-gap: var(--nav-column-gap);

	@media (max-width: 640px - 1px) {
		--nav-column-gap: var(--spacing-35);
	}
}

.cdx-social-links {
	display: inline-flex;
	column-gap: var(--nav-column-gap);

	.cdx-social-link {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 32px;
		height: 32px;

		.cdx-icon {
			color: var(--color-base);
		}

		&:hover {
			background-color: var( --background-color-interactive-subtle--hover );
			border-color: var( --border-color-transparent );
		}

		&:active {
			background-color: var( --background-color-interactive-subtle--active );
			border-color: var( --border-color-transparent );
		}
	}
}

.cdx-footer {
	width: 100%;
    color: var(--vp-c-text-2);

	a {
		color: var(--vp-c-brand-1);

		&:hover {
			color: var(--vp-c-brand-2);
			text-decoration: var(--text-decoration-underline);
		}
	}

	.container {
		margin: 0 0 0 auto;
		padding: var(--spacing-200) 0;
		text-align: center;
		border-top: solid 1px var(--border-color-base);

		.content {
			margin: 0 var(--spacing-200);
		}

		.cdx-footer-extra  {
			font-style: italic;
		}

		p:not(:first-child),
		ul:not(:first-child) {
			margin-top: var(--spacing-35);
		}

		// add padding to match layout
		@media (min-width: 960px) {
			padding-left: calc((100% - var(--vp-layout-max-width)) / 2 + var(--vp-sidebar-width));
			padding-right: calc((100% - var(--vp-layout-max-width)) / 2);
		}
	}
}
</style>
