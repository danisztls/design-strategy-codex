import { defineConfigWithTheme, DefaultTheme } from 'vitepress'
export default defineConfigWithTheme<CustomConfig>({
	base: '/',
	cleanUrls: true,
	srcDir: 'docs',
	lang: 'en-US',
	dir: 'ltr',
	title: 'Design at Wikimedia Foundation',
	description: "As part of the Research group, The Design Strategy team supports Product Design at the Foundation by providing the qualitative and quantitative studies that allow Product teams to make informed and inspired decisions. From explanations of what people do and want, to evaluations of what they experience, to experiments with new and emerging technologies, the research team answers the most urgent and impactful questions that stand in the way of delivering the “sum of all knowledge, to all the world’s people, for free, forever.”",
	// Don't show the color mode switcher; we add our own in CustomLayout.vue.
	appearance: false,

	head: [
		[ 'link', { rel: 'icon', href: `/favicon.ico`, type: 'image/x-icon', sizes: '32x32' } ],
		[ 'link', { rel: 'icon', href: `/favicon.svg`, type: 'image/svg+xml' } ],
		[ 'link', { rel: 'icon', href: `/favicon-32x32.png`, type: 'image/png' } ],
	],

	markdown: {
		theme: 'dracula',
		image: {
		  lazyLoading: true
		}
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

	sitemap: {
		// include base in the URL
		hostname: 'https://design-strategy-codex.pages.dev/'
	},

	themeConfig: {
		siteTitle: 'Design',
		logo: {
			light: '/logo.svg',
			dark: '/logo-inverted.svg',
			alt: 'Design Strategy at Wikimedia'
		},

		/* For prev/next navigation to work properly pages must be under page-name/index.md */
		sidebar: {
			'/': [
				{	text: 'Strategy',
					link: '/strategy/',
					collapsed: false,
					items: [
						{
							text: 'About',
							collapsed: false,
							items: [
								{ text: 'Collaborate', link: '/strategy/about/collaborate/' },
								{ text: 'Collaborators', link: '/strategy/about/collaborators/' },
								{ text: 'Participate', link: '/strategy/about/participate/' },
								{ text: 'Team', link: '/strategy/about/team/' }
							]
						},
						{
							text: 'Initiatives',
							collapsed: false,
							items: [
								{ text: 'Timeline', link: '/strategy/initiatives/timeline/' },
								{ text: 'Powered by People', link: '/strategy/initiatives/powered-by-people/' },
								{ text: 'Online Social Behavior', link: '/strategy/initiatives/online-social-behavior/' },
								{ text: 'Machine Augmentation', link: '/strategy/initiatives/machine-augmentation/' },
								{ text: 'Sentiment & Perception', link: '/strategy/initiatives/sentiment-and-perception/' },
								{ text: 'Research & Development', link: '/strategy/initiatives/research-and-development/' },
								{ text: 'Numeric Exploration', link: '/strategy/initiatives/numeric-exploration/' }
							]
						},
					]
				},
				{ text: 'Design Blog', link: 'https://design.wikimedia.org/blog/' }
			]
		},

		cdxSocialLinks: [
			{
				icon: 'wikimedia',
				link: 'https://wikimediafoundation.org/',
				ariaLabel: 'Wikimedia Foundation'
			},
			{ 
				icon: 'message',
				link: 'https://lists.wikimedia.org/mailman/listinfo/design',
				ariaLabel: 'Mailing list'
			}
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
				async _render(src, env, md) {
					const html = await md.renderAsync(src, env)

					if (env.frontmatter?.search === false) {
						return ''
					}

					if (env.frontmatter?.title)
						return await md.renderAsync(`# ${env.frontmatter.title}`) + html
					return html
				}
			}
		}
	}
});
