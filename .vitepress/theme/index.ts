import DefaultTheme from 'vitepress/theme';
import { Theme } from 'vitepress';
import { CdxCard, CdxButton, CdxIcon } from '@wikimedia/codex'
import CustomLayout from '../../src/components/custom-layout/CustomLayout.vue';
import TeamGrid from '../../src/components/TeamGrid.vue';

import './custom.css';
import './syntax-highlighting-fixes.css';

const customTheme: Theme = {
	...DefaultTheme,
	Layout: CustomLayout,
	enhanceApp( { app, router } ) {
		app.component( 'CdxCard', CdxCard );
		app.component( 'CdxButton', CdxButton );
		app.component( 'CdxIcon', CdxIcon );
		app.component( 'TeamGrid', TeamGrid );

		// If we went to a URL that matches a redirect entry, go to the redirected URL instead.
		router.onAfterRouteChanged = async ( to ) => {
			for ( const [ redirFrom, redirTo ] of Object.entries( redirects ) ) {
				if ( to.endsWith( redirFrom ) ) {
					// router.go() wants a full URL with domain name etc. Instead of trying to
					// construct that ourselves, obtain it by doing a replace on `to` (which is
					// also a full URL).
					await router.go( to.replace( redirFrom, redirTo ) );
					break;
				}
			}
		};
	}
};

export default customTheme;
