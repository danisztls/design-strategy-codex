import DefaultTheme from 'vitepress/theme-without-fonts';
import CustomLayout from './components/custom-layout/CustomLayout.vue';

import '@wikimedia/codex-design-tokens/theme-wikimedia-ui.css';
import '@wikimedia/codex/dist/codex.style.css';
import './custom.less';

export default {
	extends: DefaultTheme,
	Layout: CustomLayout,

	enhanceApp({ app }) {
		const components = import.meta.glob('./components/**/*.vue', {
			eager: true
		});

		for (const path in components) {
			const component = components[path].default;

			if (!component) continue;

			// Use filename as component name
			const name = path
				.split('/')
				.pop()
				?.replace('.vue', '');

			if (name) {
				app.component(`Local${name}`, component);
			}
		}
	}
};
