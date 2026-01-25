import type { IconDefinition } from '@wikimedia/codex'
import * as cdxIcons from '@wikimedia/codex-icons'

// SimpleIcons.org
const githubIcon: IconDefinition = {
	path: "M9.997.297C4.474.297 0 4.773 0 10.294a9.995 9.995 0 0 0 6.835 9.484c.5.094.683-.215.683-.48 0-.238-.008-.867-.012-1.7-2.78.603-3.367-1.341-3.367-1.341-.455-1.154-1.112-1.462-1.112-1.462-.906-.62.07-.608.07-.608 1.003.07 1.53 1.03 1.53 1.03.892 1.529 2.34 1.087 2.912.831.09-.646.348-1.087.633-1.337-2.22-.25-4.553-1.11-4.553-4.94 0-1.09.387-1.982 1.029-2.682-.113-.252-.45-1.269.087-2.646 0 0 .837-.268 2.75 1.025.799-.223 1.649-.333 2.498-.338.85.005 1.7.115 2.5.338 1.899-1.293 2.736-1.025 2.736-1.025.537 1.377.2 2.394.1 2.646.637.7 1.025 1.591 1.025 2.682 0 3.84-2.337 4.686-4.561 4.932.35.3.675.913.675 1.85 0 1.337-.013 2.412-.013 2.737 0 .262.175.575.687.475a9.96 9.96 0 0 0 6.861-9.471c0-5.521-4.476-9.997-9.996-9.997",
}
// Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.
const externalLinkIcon: IconDefinition = {
	path: "M12.47.119c-.683 0-1.235.552-1.235 1.235s.552 1.235 1.235 1.235h3.193l-7.774 7.774a1.237 1.237 0 0 0 1.748 1.748l7.774-7.774V7.53c0 .683.552 1.235 1.235 1.235.684 0 1.235-.552 1.235-1.235V1.354c0-.683-.551-1.235-1.235-1.235zM3.206 3.824A3.087 3.087 0 0 0 .12 6.912v9.882a3.087 3.087 0 0 0 3.087 3.087h9.882a3.087 3.087 0 0 0 3.088-3.087v-3.088a1.234 1.234 0 1 0-2.47 0v3.088a.62.62 0 0 1-.618.617H3.206a.62.62 0 0 1-.617-.617V6.912a.62.62 0 0 1 .617-.618h3.088a1.234 1.234 0 1 0 0-2.47z",
}
// Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.
const rssIcon: IconDefinition = {
	path: "M0 1.429C0 .639.638 0 1.429 0 11.688 0 20 8.312 20 18.571c0 .79-.638 1.429-1.429 1.429-.79 0-1.428-.638-1.428-1.429 0-8.678-7.036-15.714-15.714-15.714C.639 2.857 0 2.22 0 1.43m0 15.714a2.86 2.86 0 0 1 2.857-2.857 2.86 2.86 0 0 1 2.857 2.857A2.86 2.86 0 0 1 2.857 20 2.86 2.86 0 0 1 0 17.143M1.429 5.714c7.102 0 12.857 5.755 12.857 12.857 0 .79-.639 1.429-1.429 1.429s-1.428-.638-1.428-1.429c0-5.522-4.478-10-10-10a1.427 1.427 0 1 1 0-2.857",
}

export const ICONS = {
	wikimedia: cdxIcons.cdxIconLogoWikimedia,
	metawiki: cdxIcons.cdxIconLogoMetaWiki,
	mediawiki: cdxIcons.cdxIconLogoMediaWiki,
	message: cdxIcons.cdxIconMessage,
	github: githubIcon,
	externalLink: externalLinkIcon,
	rss: rssIcon
} satisfies Record<IconKey, IconDefinition>
