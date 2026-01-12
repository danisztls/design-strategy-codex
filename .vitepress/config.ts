import { defineConfigWithTheme, DefaultTheme } from 'vitepress'

export default defineConfigWithTheme<CustomConfig>( {
	base: '/',
	srcDir: 'docs',
	lang: 'en-US',
	// Tell VitePress not to set dir="ltr" on the `<html>` element, as this breaks our
	// bidi hacks. We can't remove the dir attribute entirely, but setting it to
	// "auto" is good enough.
	dir: 'auto',
	title: 'Wikimedia Design Strategy',
	description: "As part of the Research group, The Design Strategy team supports Product Design at the Foundation by providing the qualitative and quantitative studies that allow Product teams to make informed and inspired decisions. From explanations of what people do and want, to evaluations of what they experience, to experiments with new and emerging technologies, the research team answers the most urgent and impactful questions that stand in the way of delivering the “sum of all knowledge, to all the world’s people, for free, forever.”",
	// Don't show the color mode switcher; we add our own in CustomLayout.vue.
	appearance: false,
	// Prevent build from failing
	ignoreDeadLinks: true,

	head: [
		[ 'link', { rel: 'icon', href: `/favicon.ico`, type: 'image/x-icon', sizes: '32x32' } ],
		[ 'link', { rel: 'icon', href: `/favicon.svg`, type: 'image/svg+xml' } ],
		[ 'link', { rel: 'icon', href: `/favicon-32x32.png`, type: 'image/png' } ],
	],

	markdown: {
		theme: 'dracula'
	},

	vite: {
		css: {
			preprocessorOptions: {
				less: {
					javascriptEnabled: true
				}
			}
		}
	},

	themeConfig: {
		siteTitle: 'Design Strategy',
		logo: {
			light: '/logo.svg',
			dark: '/logo-inverted.svg',
			alt: 'Design Strategy at Wikimedia'
		},

		sidebar: {
			"/": [
				{
					text: 'About',
					collapsed: false,
					items: [
						{ text: 'Team', link: '/team/' },
						{ text: 'Collaborators', link: '/collaborators' }
					]
				},
				{
					text: 'Initiatives',
					link: '/initiatives/',
					collapsed: false,
					items: [
						{ text: 'Powered by People', link: '/initiatives/powered-by-people' },
						{ text: 'Online Social Behavior', link: '/initiatives/online-social-behavior' },
						{ text: 'Machine Augmentation', link: '/initiatives/machine-augmentation' },
						{ text: 'Sentiment & Perception', link: '/initiatives/sentiment-and-perception' },
						{ text: 'Research & Development', link: '/initiatives/research-and-development' },
						{ text: 'Numeric Exploration', link: '/initiatives/numeric-exploration' }
					]
				},
				{
					text: 'Timeline',
					link: '/timeline/',
				},
				{
					text: 'Participate',
					link: '/participate/',
				},
				{
					text: 'Collaborate',
					link: '/collaborate/',
				},
				{
					text: 'Design Blog',
					link: 'https://design.wikimedia.org/blog/',
				}
			],
		},

		socialLinks: [
		// 	`as DefaultTheme.SocialLink` is needed because the type information from VitePress
		// 	doesn't include the ariaLabel property
		// 	Note: If we add more social links, we should undo the customization done for
		// 	T345982, which hides a flyout menu for social links on medium-size screens.
			{
				icon: 'wikimediafoundation',
				link: 'https://wikimediafoundation.org/',
				ariaLabel: 'Wikimedia Foundation'
			} as DefaultTheme.SocialLink,

			{ 
				icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><title>Mailing List</title><path d="M0 8v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-10 4z"/><path d="M2 2a2 2 0 0 0-2 2v2l10 4 10-4V4a2 2 0 0 0-2-2z"/></svg>' },
				link: 'https://lists.wikimedia.org/mailman/listinfo/design',
				ariaLabel: 'Mailing List'
			} as DefaultTheme.SocialLink,
		],

		footer: {
			// TODO: Extend footer
			// Privacy policy
			// https://wikimediafoundation.org/privacy-policy/
			// Accessibility statement
			// https://design.wikimedia.org/accessibility-statement.html
			
			// message: '',
			copyright: 'Text is available under the <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener">Creative Commons Attribution-ShareAlike 4.0 International</a>, additional terms may apply. Code is available under the MIT license.', 
		},

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
