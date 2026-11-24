# DESIGN.md — Borboletinha Encantada & Colégio Estrutura (v2)

> Extraído do código atual (`tailwind.config.js`, `src/index.css`, componentes) em 24/11/2026.
> Stack: React 19 + Vite 8 + Tailwind 3 + Framer Motion + Lucide.

## 1. Estado atual

### Paleta
| Papel | Token | Hex | Uso atual |
|---|---|---|---|
| Primária (vermelho borboleta) | `primary` | `#E63946` | Selos, frases de destaque, "Vagas Limitadas" |
| Primária escura | `primary-dark` | `#b7102a` | Texto de badges |
| Secundária (azul) | `secondary` | `#2B90D9` | Palavras-chave em títulos, ícones |
| Azul institucional | `--color-secondary-dark` | `#1E5A87` | Abas ativas, links, chips |
| Terciária (amarelo) | `tertiary` | `#F6C343` | CTA principal "Agendar Visita" |
| Esmeralda | `--color-emerald` | `#2E9A68` | Checks, tags |
| Grafite | `graphite` | `#203243` | Seção escura de diferenciais |
| Tinta | `--color-ink` | `#2C3E50` | Texto principal |
| Superfícies | — | `#FAFCFE`, `#edf4ff`, `#fff8ea` | Fundos de seção |

**Inconsistências:** muitos hex soltos nas classes (`text-[#5b403f]`, `text-[#6C7A89]`, `text-[#4A5568]`, `#00456e`) — 4 tons diferentes de "texto secundário". `secondary.dark` no Tailwind (`#00639c`) difere da variável CSS (`#1E5A87`).

### Tipografia
- **Títulos:** Quicksand 500–800 (`font-quicksand`, quase sempre `font-black`).
- **Corpo:** Nunito Sans (`font-nunito`).
- Escala de títulos: H1 `4xl → 6xl`; H2 `3xl → 5xl`; H3 `xl`.
- Corpo de cards em `text-xs`/`text-sm` (12–14px) — pequeno para leitura de pais no celular.

### Forma, espaço e profundidade
- Raios muito generosos (`rounded-[2.6rem]`, `rounded-3xl`), chips `rounded-full`.
- Seções `py-24`–`py-28`, container `max-w-7xl px-5`.
- Sombras `shadow-lg`/`shadow-2xl` com tint colorido; transições em onda SVG (`WaveTransition`).

### Movimento
- Framer Motion com `MotionConfig reducedMotion="user"` ✅; reveals `whileInView` (y: 24–30px), hover `y: -6`.

## 2. Sugestões de melhoria

1. **Tokenizar cores**: mover os hex soltos para `tailwind.config.js` (`ink`, `ink-muted`, `brand-blue`) e unificar o texto secundário em **um** tom (`#4A5568`, contraste AA ≥ 7:1 sobre branco).
2. **Corpo mínimo 14px** no mobile (`text-sm` em vez de `text-xs`) nas descrições dos cards de Segmentos e Diferenciais.
3. **Hierarquia**: reduzir uso de `font-black` em textos auxiliares (usar `font-semibold`), mantendo `font-black` só em H1/H2 e CTAs — melhora escaneabilidade.
4. **CTA**: amarelo `#F6C343` com texto `#2C3E50` tem bom contraste (≈ 9:1) ✅ — manter como cor exclusiva de ação primária (não reutilizar amarelo em selos decorativos).
5. **Imagens**: substituir fotos de banco (Unsplash) por fotos reais da escola quando disponíveis; converter `hero-escola.jpg` (825 KB) e `logo.png` (391 KB) para WebP/AVIF.
6. **Favicon**: hoje usa `logo.png` declarado como `image/svg+xml` — gerar favicon PNG 32/180px correto.
