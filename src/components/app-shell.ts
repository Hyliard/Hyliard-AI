import { renderConversationView } from './conversation-view';
import { setupComposer } from './composer';
import { renderHeader } from './header';
import { setupThemeControl } from './theme-control';

export function mountAppShell(root: HTMLElement): void {
  root.innerHTML = `
    <div class="app-shell">
      ${renderHeader()}
      ${renderConversationView()}
    </div>
  `;

  setupThemeControl(root);
  setupComposer(root);
}