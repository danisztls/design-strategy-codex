import DefaultTheme from 'vitepress/theme';
import { Theme } from 'vitepress';
import CustomLayout from '../../src/components/custom-layout/CustomLayout.vue';
import TeamGrid from '../../src/components/TeamGrid.vue';

import '@wikimedia/codex-design-tokens/theme-wikimedia-ui.css';
import '@wikimedia/codex/dist/codex.style.css';
import './custom.less';
import './syntax-highlighting-fixes.less';

const customTheme: Theme = {
	...DefaultTheme,
	Layout: CustomLayout,
	enhanceApp( { app, router } ) {
		app.component( 'TeamGrid', TeamGrid );
	}
};

export default customTheme;
