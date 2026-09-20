import './styles/tokens.css';
import './styles/global.css';
import './styles/layout.css';
import { mountAppShell } from './components/app-shell';

const app = document.querySelector<HTMLElement>('#app');

if (!app) {
  throw new Error('The application mount point is missing.');
}

mountAppShell(app);