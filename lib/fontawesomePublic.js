/**
 * Register only icons used on public link pages (fab + far from the editor).
 * Kept out of _app.js so the home page and other routes do not load icon packs.
 */
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fab, far);
