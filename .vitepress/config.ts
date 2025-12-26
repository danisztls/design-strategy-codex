import { defineConfigWithTheme, DefaultTheme } from 'vitepress'

const base = process.env.CODEX_DOC_ROOT ?? '/';

export default defineConfigWithTheme<CustomConfig>( {
	srcDir: "docs",
	lang: 'en-US',
	// Tell VitePress not to set dir="ltr" on the `<html>` element, as this breaks our
	// bidi hacks. We can't remove the dir attribute entirely, but setting it to
	// "auto" is good enough.
	dir: 'auto',
	title: 'Design Strategy',
	description: "Static site at https://design.wikimedia.org/strategy/",
	base,
	// Don't show the color mode switcher; we add our own in CustomLayout.vue.
	appearance: false,

	head: [
		[ 'link', { rel: 'icon', href: `${ base }favicon.ico`, type: 'image/x-icon', sizes: '32x32' } ],
		[ 'link', { rel: 'icon', href: `${ base }favicon.svg`, type: 'image/svg+xml' } ],
		[ 'link', { rel: 'icon', href: `${ base }favicon-32x32.png`, type: 'image/png' } ],
	],

	markdown: {
		theme: 'dracula'
	},

	themeConfig: {
		logo: {
			light: '/logo.svg',
			dark: '/logo-inverted.svg',
			alt: 'Wikimedia'
		},

		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Examples', link: '/markdown-examples' }
		],

		sidebar: [
			{
				text: 'Examples',
				items: [
					{ text: 'Markdown Examples', link: '/markdown-examples' },
					{ text: 'Runtime API Examples', link: '/api-examples' }
				]
			}
		],

		// socialLinks: [
		// 	`as DefaultTheme.SocialLink` is needed because the type information from VitePress
		// 	doesn't include the ariaLabel property
		// 	Note: If we add more social links, we should undo the customization done for
		// 	T345982, which hides a flyout menu for social links on medium-size screens.
		// 	{ icon: 'github', link: 'https://github.com/wikimedia/design-codex', ariaLabel: 'Codex on GitHub' } as DefaultTheme.SocialLink
		// ],

		search: {
			provider: 'local',
			options: {
				miniSearch: {
					searchOptions: {
						fuzzy: 0.2,
						prefix: true,
						boost: {
							title: 50,
							text: 2,
							titles: 1
						}
					}
				}
			}
		},
	}
} );
