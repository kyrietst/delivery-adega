# 📚 Frontend Development Guide - Kyrie Stack

Esta pasta contém a documentação técnica para o desenvolvimento frontend do app **Adega Anita**, seguindo a Stack Kyrie.

## 📖 Índice de Documentos

| Documento | Descrição |
|-----------|-----------|
| [glassmorphism.md](./glassmorphism.md) | Como implementar efeitos glassmorphism corretamente |
| [components.md](./components.md) | Guia de componentes reutilizáveis |
| [pitfalls.md](./pitfalls.md) | Armadilhas comuns e como evitá-las |
| [animations.md](./animations.md) | Padrões de animação com Reanimated |

## 🎯 Stack Kyrie - Resumo Rápido

```
React Native (Expo Managed) + TypeScript
├── Estilo: NativeWind v4 (TailwindCSS)
├── Gráficos: @shopify/react-native-skia
├── Animações: react-native-reanimated v3
├── Navegação: expo-router
└── Estado: zustand + @tanstack/react-query
```

## ⚠️ Regra de Ouro

> **NUNCA use `StyleSheet.create` para estilos estáticos.**  
> Use classes NativeWind. Reserve `style={}` apenas para valores dinâmicos.

## 🔗 Links Úteis

- [NativeWind Docs](https://www.nativewind.dev/)
- [React Native Skia](https://shopify.github.io/react-native-skia/)
- [Reanimated Docs](https://docs.swmansion.com/react-native-reanimated/)
