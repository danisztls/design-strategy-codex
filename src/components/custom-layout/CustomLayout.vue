<template>
	<layout dir="ltr" :class="layoutClasses">
		<template #nav-bar-title-after>
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
				<h1 v-if="frontmatter.title">
					{{ frontmatter.title }}
				</h1>

				<div v-if="frontmatter.description" class="doc-description">
					{{ frontmatter.description }}
				</div>

				<figure v-if="frontmatter.hero?.image" class="doc-hero">
					<img
						:src="withBase(frontmatter.hero.image.src)"
						:alt="frontmatter.hero.image.alt || ''"
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
import { useRoute, useData, withBase } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import CdxDocsAppearanceMenu from '../appearance-menu/AppearanceMenu.vue';
import CdxDocsReturnToTop from '../return-to-top/ReturnToTop.vue';

const { Layout } = DefaultTheme;
const route = useRoute();
const { frontmatter, isDark } = useData();

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
</style>
