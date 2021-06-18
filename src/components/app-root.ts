import { html, component } from 'haunted';

interface AppProps {
  title?: string;
}

function App({ title: _title }: AppProps) {
  const title = _title || 'Haunted + Snowpack';

  return html`
    <style>
      h1 {
        font-size: 4rem;
      }
      .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100vh;
        background-color: cornflowerblue;
        background: linear-gradient(
          315deg,
          cornflowerblue 0%,
          darkslategray 100%
        );
        font-size: 24px;
      }
      .link {
        color: white;
      }
    </style>
    <div class="wrapper">
      <h1>${title}</h1>
      <p>Edit <code>src/components/app-root.ts</code> and save to reload.</p>
      <a
        class="link"
        href="https://github.com/matthewp/haunted"
        target="_blank"
        rel="noopener noreferrer"
      >
        Haunted
      </a>
    </div>
  `;
}

customElements.define(
  'app-root',
  component<any>(App, { observedAttributes: ['title'] }),
);
