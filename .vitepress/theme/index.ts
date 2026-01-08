import DefaultTheme from 'vitepress/theme';
import { Theme } from 'vitepress';
import CustomLayout from '../../src/components/custom-layout/CustomLayout.vue';

import '@wikimedia/codex-design-tokens/theme-wikimedia-ui.css';
import '@wikimedia/codex/dist/codex.style.css';
import './custom.less';
import './syntax-highlighting-fixes.less';

const customTheme: Theme = {
	...DefaultTheme,
	Layout: CustomLayout,
	enhanceApp( { app, router } ) {
		const components = import.meta.glob('../../src/components/**/*.vue', {
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

export default customTheme;
