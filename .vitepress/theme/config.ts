import type { DefaultTheme, UserConfig } from 'vitepress'

export const baseConfig = {
	cleanUrls: true,
	lang: 'en-US',
	dir: 'ltr',
	// Hide the color mode switcher; we add our own.
	appearance: false,
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
	themeConfig: {
		search: {
			provider: 'local',
			options: {
				async _render(src, env, md) {
					const html = await md.renderAsync(src, env)

					if (env.frontmatter?.search === false) {
						return ''
					}

					if (env.frontmatter?.title) {
						return await md.renderAsync(`# ${env.frontmatter.title}`) + html
					}
					return html
				}
			}
		}
	} satisfies DefaultTheme.Config,

	// Optimize LCP
	transformHead({ pageData }) {
		const hero = pageData.frontmatter?.hero
		if (!hero?.image?.src) return []

		return [
			[
				'link',
				{
					rel: 'preload',
					as: 'image',
					href: hero.image.src
				}
			]
		]
	}
} satisfies UserConfig
