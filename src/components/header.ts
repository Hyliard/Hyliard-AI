import { renderThemeControl } from './theme-control';

export function renderHeader(): string {
  return `
    <header class="app-header">
      <div class="header-inner">
        <a class="brand" href="/" aria-label="Hyliard AI, inicio">Hyliard AI</a>
        ${renderThemeControl()}
      </div>
    </header>
  `;
}