import type { DefaultTheme } from 'vitepress'

export type CdxSocialLinkIcon = string

export interface CdxSocialLink {
	icon: CdxSocialLinkIcon
	link: string
	ariaLabel: string
}

export interface ThemeConfig extends DefaultTheme.Config {
	/**
	 * Social links rendered by the custom theme header/footer.
	 * (Not the built-in VitePress socialLinks.)
	 */
	cdxSocialLinks?: CdxSocialLink[]
}

// Module augmentation so `themeConfig` accepts custom properties.
declare module 'vitepress' {
	interface DefaultTheme {
		Config: ThemeConfig
	}
}
