# 🎨 Design System - Adega Anita

## Princípios de Design

### 1. Spatial Design (Apple-like)
- **Profundidade**: Camadas de sombras e gradientes
- **Glassmorphism**: Superfícies translúcidas com blur
- **Haptics**: Feedback tátil em todas as interações
- **Animações sutis**: `withSpring` para naturalidade

### 2. Dark Mode First
- Fundo NUNCA é preto puro (`#000`)
- Use `#0F0F11` ou gradientes profundos
- Alto contraste para legibilidade

---

## 🎨 Tokens de Design

### Cores (definidas em `tailwind.config.js`)

#### Background
```tsx
className="bg-background"           // #0F0F11 (principal)
className="bg-background-secondary" // #1A1A1D
```

#### Primary (Vinho Tinto)
```tsx
className="bg-primary"       // #E11D48 (ações principais)
className="bg-primary-muted" // #9F1239 (hover/disabled)
```

#### Glass (Glassmorphism)
```tsx
className="bg-glass-surface"     // rgba(255, 255, 255, 0.05)
className="border-glass-stroke"  // rgba(255, 255, 255, 0.1)
className="bg-glass-highlight"   // rgba(255, 255, 255, 0.15)
```

#### Text
```tsx
className="text-text-primary"    // #FFFFFF (títulos)
className="text-text-secondary"  // #A1A1AA (corpo)
className="text-text-muted"      // #52525B (labels)
```

---

## 📐 Spacing & Sizing

Use a escala do Tailwind:
- `p-4` / `m-4` → 16px (padrão)
- `p-6` / `m-6` → 24px (cards)
- `gap-2` → 8px (itens relacionados)
- `gap-4` → 16px (seções)

### Border Radius
- `rounded-lg` → 12px (cards pequenos)
- `rounded-xl` → 16px (cards médios)
- `rounded-2xl` → 24px (modais)
- `rounded-3xl` → 32px (botões grandes)

---

## ✨ Componentes Base

### Glass Card
```tsx
<View className="bg-glass-surface border border-glass-stroke rounded-2xl p-6">
  {/* Conteúdo */}
</View>
```

### Primary Button
```tsx
<Pressable 
  className="bg-primary rounded-3xl px-8 py-4 active:scale-95"
  onPress={() => Haptics.selectionAsync()}
>
  <Text className="text-text-primary font-bold text-center">
    Salvar
  </Text>
</Pressable>
```

### Input Field
```tsx
<View className="bg-background-secondary border border-glass-stroke rounded-xl px-4 py-3">
  <TextInput
    className="text-text-primary"
    placeholderTextColor="#52525B"
    placeholder="Digite aqui..."
  />
</View>
```

---

## 🔤 Tipografia

### Fontes
- **Sans**: `Inter_400Regular` (corpo)
- **Bold**: `Inter_700Bold` (títulos)

### Hierarquia
```tsx
// Título Principal
<Text className="text-3xl font-bold text-text-primary">

// Subtítulo
<Text className="text-xl font-bold text-text-primary">

// Corpo
<Text className="text-base text-text-secondary">

// Label/Caption
<Text className="text-sm text-text-muted">
```

---

## 🎭 Animações

### Interações (Reanimated)
```tsx
import { withSpring } from 'react-native-reanimated';

// Botão press
transform: [{ scale: withSpring(pressed ? 0.95 : 1) }]
```

### Mount/Unmount (Moti)
```tsx
import { MotiView } from 'moti';

<MotiView
  from={{ opacity: 0, translateY: 20 }}
  animate={{ opacity: 1, translateY: 0 }}
>
  {/* Conteúdo */}
</MotiView>
```

---

## 📱 Layout Patterns

### Safe Area Wrapper
```tsx
<SafeAreaView className="flex-1 bg-background">
  {/* Conteúdo */}
</SafeAreaView>
```

### Centered Content
```tsx
<View className="flex-1 items-center justify-center px-6">
  {/* Conteúdo centralizado */}
</View>
```

### List Item
```tsx
<View className="flex-row items-center gap-3 bg-glass-surface border border-glass-stroke rounded-xl p-4">
  {/* Icon */}
  <View className="flex-1">
    {/* Text */}
  </View>
  {/* Action */}
</View>
```

---

## ⚡ Haptic Feedback

```tsx
import * as Haptics from 'expo-haptics';

// Em TODOS os Pressable:
onPress={() => {
  Haptics.selectionAsync();
  // Sua lógica...
}}
```

---

## 🚫 O Que Evitar

❌ **Cores hardcoded**: `backgroundColor: '#E11D48'`  
✅ **Use classes**: `className="bg-primary"`

❌ **Opacity simples**: `opacity: 0.5`  
✅ **Glassmorphism**: `className="bg-glass-surface"`

❌ **Sombras básicas**  
✅ **Use Skia para depth** (quando aplicável)

---

## 📚 Referências

- [NativeWind Docs](https://www.nativewind.dev/)
- [Skia Canvas](https://shopify.github.io/react-native-skia/)
- [Reanimated API](https://docs.swmansion.com/react-native-reanimated/)
