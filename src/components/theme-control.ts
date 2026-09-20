import {
  applyTheme,
  getStoredThemePreference,
  saveThemePreference,
  type ThemePreference,
} from '../state/theme-state';

const themeOptions: Array<{ value: ThemePreference; label: string }> = [
  { value: 'system', label: 'Sistema' },
  { value: 'light', label: 'Claro' },
  { value: 'dark', label: 'Oscuro' },
];

export function renderThemeControl(): string {
  const options = themeOptions
    .map(({ value, label }) => `<option value="${value}">${label}</option>`)
    .join('');

  return `
    <div class="theme-control">
      <label for="theme-select">Tema</label>
      <select id="theme-select" name="theme" data-theme-select>
        ${options}
      </select>
    </div>
  `;
}

export function setupThemeControl(root: HTMLElement): () => void {
  const select = root.querySelector<HTMLSelectElement>('[data-theme-select]');
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  let preference = getStoredThemePreference();

  if (!select) {
    return () => undefined;
  }

  select.value = preference;
  applyTheme(preference);

  const handleSelection = (): void => {
    preference = select.value as ThemePreference;
    saveThemePreference(preference);
    applyTheme(preference);
  };

  const handleSystemChange = (): void => {
    if (preference === 'system') {
      applyTheme(preference);
    }
  };

  select.addEventListener('change', handleSelection);
  mediaQuery.addEventListener('change', handleSystemChange);

  return () => {
    select.removeEventListener('change', handleSelection);
    mediaQuery.removeEventListener('change', handleSystemChange);
  };
}