// SCSS Imports specific styles
import '../../ui_ux/main.scss';

import '../../ui_ux/pages/portfolio.scss';

import '../../ui_ux/layout/main/main.scss';
import '../../ui_ux/layout/header/header.scss';
import '../../ui_ux/layout/navigation/navigation.scss';
import '../../ui_ux/layout/footer/footer.scss';

import '../../ui_ux/components/banner/banner.scss';
import '../../ui_ux/components/about/about.scss';
import '../../ui_ux/components/services/service.scss';

// JS Components Imports
import { Header } from '../../ui_ux/layout/header/header'; 
import { Navigation } from '../../ui_ux/layout/navigation/navigation';

new Header();
new Navigation();

// JS Functions Imports
import { isPreload } from '../../ui_ux/abstracts/utils/isPreload';
isPreload();