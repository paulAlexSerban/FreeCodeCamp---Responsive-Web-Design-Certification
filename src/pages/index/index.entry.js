// SCSS Imports specific styles
import '../../ui_ux/main.scss';

import '../../ui_ux/pages/portfolio.scss';

import '../../ui_ux/layout/main/main.scss';
import '../../ui_ux/layout/header/header.scss';
import '../../ui_ux/layout/navigation/navigation.scss';
import '../../ui_ux/layout/footer/footer.scss';

import '../../ui_ux/components/icon/icon.scss';
import '../../ui_ux/components/banner/banner.scss';
import '../../ui_ux/components/about/about.scss';
import '../../ui_ux/components/services/service.scss';
import '../../ui_ux/components/gallery/gallery.scss';
import '../../ui_ux/components/form/form.scss';

// JS Components Imports
import { Header } from '../../ui_ux/layout/header/header'; 
import { Navigation } from '../../ui_ux/layout/navigation/navigation';
import { Gallery } from '../../ui_ux/components/gallery/gallery';

new Header();
new Navigation();

document.querySelectorAll('[data-js-cmp="gallery"]').forEach(el => {
  new Gallery(el)
});

// JS Functions Imports
import { isPreload } from '../../ui_ux/abstracts/utils/isPreload';
isPreload();