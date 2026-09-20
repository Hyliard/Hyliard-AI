export function renderComposer(): string {
  return `
    <form class="composer" data-composer>
      <label for="message-input">Mensaje</label>
      <div class="composer-row">
        <textarea
          id="message-input"
          name="message"
          rows="1"
          placeholder="Escribe un mensaje"
          aria-describedby="composer-status"
          required
        ></textarea>
        <button type="submit" data-send-button disabled>Enviar</button>
      </div>
      <p class="composer-status" id="composer-status" role="status" aria-live="polite"></p>
    </form>
  `;
}

export function setupComposer(root: HTMLElement): () => void {
  const form = root.querySelector<HTMLFormElement>('[data-composer]');
  const input = root.querySelector<HTMLTextAreaElement>('#message-input');
  const button = root.querySelector<HTMLButtonElement>('[data-send-button]');
  const status = root.querySelector<HTMLElement>('#composer-status');

  if (!form || !input || !button || !status) {
    return () => undefined;
  }

  const updateButtonState = (): void => {
    button.disabled = input.value.trim().length === 0;
  };

  const handleInput = (): void => {
    status.textContent = '';
    updateButtonState();
  };

  const handleSubmit = (event: SubmitEvent): void => {
    event.preventDefault();

    if (!input.value.trim()) {
      input.reportValidity();
      return;
    }

    status.textContent = 'La conexión del asistente todavía no está configurada.';
  };

  input.addEventListener('input', handleInput);
  form.addEventListener('submit', handleSubmit);
  updateButtonState();

  return () => {
    input.removeEventListener('input', handleInput);
    form.removeEventListener('submit', handleSubmit);
  };
}