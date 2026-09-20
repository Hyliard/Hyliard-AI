import { renderComposer } from './composer';

export function renderConversationView(): string {
  return `
    <main class="app-main">
      <section class="conversation" aria-labelledby="conversation-title">
        <div class="empty-state">
          <p class="section-kicker">Asistente local</p>
          <h1 id="conversation-title">Hyliard AI</h1>
          <p>Una interfaz sencilla para trabajar con tu asistente local.</p>
        </div>
        ${renderComposer()}
      </section>
    </main>
  `;
}