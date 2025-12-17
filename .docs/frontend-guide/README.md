# 📚 Frontend Development Guide - Kyrie Stack

Esta pasta contém a documentação técnica para o desenvolvimento frontend do app **Adega Anita**, seguindo a Stack Kyrie.

## 📖 Índice de Documentos

| Documento | Descrição |
|-----------|-----------|
| [glassmorphism.md](./glassmorphism.md) | Como implementar efeitos glassmorphism corretamente |
| [components.md](./components.md) | Guia de componentes reutilizáveis |
| [pitfalls.md](./pitfalls.md) | Armadilhas comuns e como evitá-las |
| [animations.md](./animations.md) | Padrões de animação com Reanimated |

---

## 🎯 Stack Kyrie - Resumo Rápido

```
React Native (Expo Managed) + TypeScript
├── Estilo: NativeWind v4 (TailwindCSS)
├── Gráficos: @shopify/react-native-skia
├── Animações: react-native-reanimated v3
├── Navegação: expo-router
└── Estado: zustand + @tanstack/react-query
```

---

## 🎨 Design Tokens Semânticos

Todas as cores são definidas em `tailwind.config.js` com nomes semânticos:

### Brand (Identidade da Marca)
```tsx
className="bg-brand"           // Verde neon principal
className="text-brand"         // Verde para destaque
className="text-brand-muted"   // Verde mais escuro
className="bg-brand-highlight" // Glow sutil
```

### UI (Interface)
```tsx
className="bg-ui-bg"           // Fundo principal (#142210)
className="bg-ui-surface"      // Vidro base (white/5)
className="border-ui-border"   // Borda de vidro (white/8)
className="bg-ui-highlight"    // Reflexo (white/15)
```

### Text (Hierarquia)
```tsx
className="text-text-primary"   // Branco (#FFFFFF)
className="text-text-secondary" // Cinza claro (#A1A1AA)
className="text-text-muted"     // Cinza escuro (#52525B)
```

> ⚠️ **REGRA**: Nunca use cores hardcoded como `#46ec13` ou `white`. Use os tokens!

---

## 📐 ScreenWrapper (Layout Base)

Todas as telas devem usar o `ScreenWrapper` para layout consistente:

```tsx
import { ScreenWrapper } from '@/components/layout/ScreenWrapper';

export default function MinhaScreen() {
    return (
        <ScreenWrapper withGlow={true}>
            <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
                {/* Conteúdo */}
            </ScrollView>
        </ScreenWrapper>
    );
}
```

**O ScreenWrapper cuida de:**
- ✅ StatusBar configurada
- ✅ Background gradiente
- ✅ Glow ambiente (opcional)
- ✅ SafeAreaView

---

## ⚠️ Regra de Ouro

> **NUNCA use `StyleSheet.create` para estilos estáticos.**  
> Use classes NativeWind. Reserve `style={}` apenas para valores dinâmicos.

---

## 🔗 Links Úteis

- [NativeWind Docs](https://www.nativewind.dev/)
- [React Native Skia](https://shopify.github.io/react-native-skia/)
- [Reanimated Docs](https://docs.swmansion.com/react-native-reanimated/)
