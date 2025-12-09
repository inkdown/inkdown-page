# Documentação do Inkdown

Esta pasta contém toda a documentação do Inkdown renderizada com MDX.

## Estrutura

```
docs/
├── content/          # Arquivos MDX da documentação
│   ├── docs.ts      # Índice de documentos
│   ├── getting-started.mdx
│   ├── editor-features.mdx
│   └── ...
├── [slug]/
│   └── page.tsx     # Página dinâmica para cada documento
├── DocsSidebar.tsx  # Sidebar de navegação
├── TableOfContents.tsx  # TOC lateral direito
├── layout.tsx       # Layout da documentação
└── page.tsx        # Redireciona para getting-started
```

## Adicionar Nova Documentação

### 1. Criar arquivo MDX

Crie um novo arquivo em `content/`:

\`\`\`mdx
// content/seu-documento.mdx
export const metadata = {
  title: "Título do Documento",
  slug: "seu-documento",
  order: 5,
};

# Título do Documento

Conteúdo aqui...

## Seção

Mais conteúdo...
\`\`\`

### 2. Registrar no índice

Adicione ao `content/docs.ts`:

\`\`\`typescript
import SeuDocumento from "./seu-documento.mdx";

export const docs: DocItem[] = [
  // ... documentos existentes
  {
    title: "Título do Documento",
    slug: "seu-documento",
    order: 5,
    component: SeuDocumento,
  },
].sort((a, b) => a.order - b.order);
\`\`\`

## Recursos Disponíveis

### Markdown Básico

- **Negrito** com \`**texto**\`
- *Itálico* com \`*texto*\`
- \`código inline\` com backticks
- [Links](url)
- Listas, tabelas, etc.

### Code Blocks

\`\`\`typescript
import { Editor } from '@inkdown/core';

const editor = new Editor({
  theme: 'default-light'
});
\`\`\`

- ✅ Syntax highlighting com Prism.js
- ✅ Botão de copiar
- ✅ Suporte para TypeScript, JavaScript, Bash, JSON, CSS, JSX, TSX

### Componentes

Blockquotes:

> **Nota**: Informação importante aqui

Tabelas:

| Coluna 1 | Coluna 2 |
|----------|----------|
| Dado 1   | Dado 2   |

### Navegação Automática

- **Sidebar esquerda**: Menu principal com todos os documentos
- **TOC direita**: Headers do documento atual (h2 e h3)
- **Navegação anterior/próxima**: No final de cada página
- **Scroll tracking**: TOC e sidebar atualizam automaticamente

## Features

✅ MDX com Next.js 15
✅ Syntax highlighting com Prism.js
✅ Botão de copiar código
✅ Table of Contents com scroll tracking
✅ Sidebar responsiva
✅ Navegação entre documentos
✅ Links para contribuir
✅ Open source friendly
