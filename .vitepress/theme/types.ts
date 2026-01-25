import type { DefaultTheme } from 'vitepress'
import type { MenuItemData } from '@wikimedia/codex'
import type { Icon } from '@wikimedia/codex-icons'

export type CdxSocialLinkIcon = string

export interface CdxSocialLink {
	icon: CdxSocialLinkIcon
	link: string
	ariaLabel: string
}

export type ThemeConfig = DefaultTheme.Config & {
	cdxSocialLinks?: CdxSocialLink[]
}

// Module augmentation so 'themeConfig' accepts custom properties.
declare module 'vitepress' {
	namespace DefaultTheme {
		interface Config {
			cdxSocialLinks?: CdxSocialLink[]
		}
	}
}

/**
 * There are various types of controls, each defined here. All types include a name property.
 */
interface BaseConfig {
	name: string
}

export interface RadioPropConfig extends BaseConfig {
	type: 'radio'
	options: Array<string | number>
	default?: string | number
	initial?: string | number
}

export interface BooleanPropConfig extends BaseConfig {
	type: 'boolean'
	default?: boolean
	initial?: boolean
}

export interface TextPropConfig extends BaseConfig {
	type: 'text'
	default?: string | number
	initial?: string | number
}

export interface IconPropConfig extends BaseConfig {
	type: 'icon'
	default?: string
	initial?: string
}

export interface SlotConfig extends BaseConfig {
	type: 'slot'
	default: string
	initial?: string
}

// For icons in slots, the name must be *-icon corresponding to a slot with the same name (without
// the -icon suffix) that it should be added to. Make this a part of the type interface so that
// TypeScript validates usage.
export interface SlotIconConfig extends BaseConfig {
	name: `${string}-icon`
	type: 'slot-icon'
	default?: string
	initial?: string
}

export interface SelectPropConfig extends BaseConfig {
	type: 'select'
	menuItems: MenuItemData[]
	default?: string | number
	initial?: string | number
}

export type ControlConfig =
	| RadioPropConfig
	| BooleanPropConfig
	| TextPropConfig
	| IconPropConfig
	| SelectPropConfig
	| SlotConfig
	| SlotIconConfig

/**
 * ControlsConfig is an array of control config items.
 */
export type ControlsConfig = ControlConfig[]

// Utility type that maps one of the ControlConfig types to a type that removes the 'default' key
// and 'initial' key and adds a 'value' key with the same type as the removed 'default' key.
type DefaultToValue<T extends { default?: unknown }> = Omit<T, 'default' | 'initial'> & {
	// If the default type is boolean (or the literal false), allow boolean for value.
	value: NonNullable<T['default']> extends boolean ? boolean : NonNullable<T['default']>
}

export type PropConfigWithValue =
	| DefaultToValue<RadioPropConfig>
	| DefaultToValue<BooleanPropConfig>
	| DefaultToValue<TextPropConfig>
	| DefaultToValue<IconPropConfig>
	| DefaultToValue<SelectPropConfig>

export type SlotConfigWithValue =
	| DefaultToValue<SlotConfig>
	| DefaultToValue<SlotIconConfig>

export type ControlConfigWithValue = PropConfigWithValue | SlotConfigWithValue

// When being used to actually render a demo, Icon properties have actual Icon objects as their
// values. For no icon being configured, the value is undefined.
export type PropValuesWithIcons = Record<string, string | number | boolean | Icon | undefined>

// This SlotValues type is only used for rendering, Icon slots are passed by name to
// CdxDemoSlotIcon, everything is text.
export type SlotValues = Record<string, string>
