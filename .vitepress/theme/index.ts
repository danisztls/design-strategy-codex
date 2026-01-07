import DefaultTheme from 'vitepress/theme';
import { Theme } from 'vitepress';
import CustomLayout from '../../src/components/custom-layout/CustomLayout.vue';
import TeamGrid from '../../src/components/TeamGrid.vue';

import './custom.css';
import './syntax-highlighting-fixes.css';

const customTheme: Theme = {
	...DefaultTheme,
	Layout: CustomLayout,
	enhanceApp( { app, router } ) {
		app.component( 'TeamGrid', TeamGrid );
	}
};

export default customTheme;
