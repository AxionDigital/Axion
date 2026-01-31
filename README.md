# Stack3 - Design que atrai. Código que sustenta.

Projeto Next.js completo com landing page moderna para a agência Stack3.

## 🚀 Recursos

- ✅ Next.js 15 com App Router
- ✅ TypeScript
- ✅ Tailwind CSS 3
- ✅ Suporte a múltiplos idiomas (PT, EN, ES)
- ✅ Modo claro/escuro com next-themes
- ✅ Componentes UI customizados (Radix UI)
- ✅ Hero section com gradiente roxo-azul
- ✅ Seções de serviços, sobre e contato
- ✅ Footer completo
- ✅ Responsividade total

## 📦 Instalação

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

## 🏃 Desenvolvimento

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## 🏗️ Build para Produção

```bash
npm run build
npm run start
```

## 📁 Estrutura do Projeto

```
app/
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   └── textarea.tsx
│   ├── Navbar.tsx
│   └── theme-provider.tsx
├── contexts/
│   └── LanguageContext.tsx
├── globals.css
├── layout.tsx
└── page.tsx
lib/
└── utils.ts
public/
└── logo.png
```

## 🎨 Personalização

### Alterar Idioma Padrão

Edite `app/contexts/LanguageContext.tsx`:
```tsx
const [language, setLanguage] = useState<Language>('pt'); // Altere para 'en' ou 'es'
```

### Alterar Tema Padrão

Edite `app/layout.tsx`:
```tsx
<ThemeProvider attribute="class" defaultTheme="light" enableSystem>
```

### Adicionar Novas Traduções

Edite `app/contexts/LanguageContext.tsx` e adicione as chaves de tradução no objeto `translations`.

## 🔧 Dependências Principais

- **next**: Framework React
- **next-themes**: Gerenciamento de temas
- **lucide-react**: Ícones
- **@radix-ui/react-dropdown-menu**: Componentes Radix UI
- **tailwindcss**: Utility-first CSS
- **typescript**: Type safety

## 📝 Licença

MIT
