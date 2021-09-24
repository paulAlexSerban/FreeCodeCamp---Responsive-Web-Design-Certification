// SCSS Imports specific styles
import '../../ui_ux/main.scss';

import '../../ui_ux/pages/portfolio.scss';

import '../../ui_ux/layout/navigation/navigation.scss';
import '../../ui_ux/layout/header/header.scss';
import '../../ui_ux/layout/main/main.scss';
import '../../ui_ux/layout/gallery/gallery.scss';
import '../../ui_ux/layout/footer/footer.scss';

import '../../ui_ux/components/icon/icon.scss';
import '../../ui_ux/components/icon-list/icon-list.scss';
import '../../ui_ux/components/banner/banner.scss';
import '../../ui_ux/components/about/about.scss';
import '../../ui_ux/components/card/card.scss';
import '../../ui_ux/components/services/service.scss';

import '../../ui_ux/components/form/form.scss';

// JS Components Imports
import { Navigation } from '../../ui_ux/layout/navigation/navigation';
import { Card } from '../../ui_ux/components/card/card';

new Navigation();

// JS Functions Imports
import { isPreload } from '../../ui_ux/abstracts/utils/isPreload';
isPreload();

document.querySelectorAll('[data-js-cmp="card"]').forEach(el => {
  new Card(el)
});