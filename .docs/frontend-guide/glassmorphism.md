# 🪟 Glassmorphism no React Native

Este documento explica como implementar efeitos de glassmorphism corretamente no React Native, evitando armadilhas comuns.

## ❌ O Problema: CSS não é React Native

No HTML/CSS, glassmorphism é simples:

```css
.glass-panel {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

**Porém, React Native NÃO suporta:**
- `backdrop-filter`
- `blur()` em Views
- `box-shadow` complexo

---

## ✅ Solução 1: Glass Panel Simples (sem blur)

Para painéis onde o blur não é crítico, use apenas semi-transparência:

```tsx
<View className="bg-background-dark/60 border border-white/10 rounded-3xl">
  {children}
</View>
```

**Quando usar:** Cards de conteúdo, painéis de specs, bottom sheets.

---

## ✅ Solução 2: SkiaGlassCard (com blur real)

Para blur real, usamos `@shopify/react-native-skia`:

```tsx
import { SkiaGlassCard } from '@/components/ui/SkiaGlassCard';

<SkiaGlassCard 
  className="p-6 rounded-3xl"
  intensity={30}
  tint="rgba(20, 34, 16, 0.6)"
>
  <Text>Conteúdo com blur de fundo</Text>
</SkiaGlassCard>
```

> ⚠️ **Limitação Expo Go:** O `SkiaGlassCard` pode ter problemas de renderização no Expo Go. Em builds nativos (EAS Build), funciona perfeitamente.

---

## ✅ Solução 3: SkiaBlurGlow (glow difuso)

Para efeitos de glow suave no background (como o halo verde no topo):

```tsx
import { SkiaBlurGlow } from '@/components/ui/SkiaBlurGlow';

<SkiaBlurGlow
  color="rgba(70, 236, 19, 0.3)"  // Cor do glow
  blur={100}                       // Intensidade do blur
  size={250}                       // Tamanho do círculo
  offsetY={-80}                    // Posição Y
/>
```

**Como funciona internamente:**

```tsx
<Canvas>
  <Circle cx={...} cy={...} r={size/2} color={color} />
  <Blur blur={blurAmount} />  // ← Filtro Skia real!
</Canvas>
```

---

## ❌ O que NÃO funciona

### 1. Múltiplos círculos sobrepostos

```tsx
// ❌ ERRADO - mostra bordas duras
<View className="w-[300px] h-[300px] rounded-full bg-primary/10" />
<View className="w-[250px] h-[250px] rounded-full bg-primary/15" />
```

Resultado: anéis concêntricos com bordas visíveis, não um glow suave.

### 2. shadowRadius como substituto de blur

```tsx
// ❌ ERRADO - shadow != blur
<View style={{ 
  shadowRadius: 100,
  shadowColor: '#46ec13',
}} />
```

`shadowRadius` cria sombra, não blur do elemento em si.

### 3. backdropFilter em style

```tsx
// ❌ ERRADO - não existe no RN
<View style={{ backdropFilter: 'blur(10px)' }} />
```

Gera erro de TypeScript: `backdropFilter does not exist in ViewStyle`.

---

## 📐 Padrão de Design: Glass Panel

Combinar LinearGradient + SkiaBlurGlow + View semi-transparente:

```tsx
// Background
<LinearGradient
  colors={['#2c4823', '#1a2d15', '#142210']}
  locations={[0, 0.4, 0.8]}
  className="absolute inset-0"
/>

// Glow suave
<SkiaBlurGlow color="rgba(70, 236, 19, 0.25)" blur={100} size={250} />

// Conteúdo glass
<View className="bg-background-dark/60 border border-white/10 rounded-3xl p-6">
  <Text>Conteúdo</Text>
</View>
```

---

## 🎨 Cores Glass Padrão

| Token | Valor | Uso |
|-------|-------|-----|
| `bg-background-dark/60` | `rgba(20, 34, 16, 0.6)` | Fundo de painéis glass |
| `border-white/10` | `rgba(255, 255, 255, 0.1)` | Borda sutil |
| `bg-white/5` | `rgba(255, 255, 255, 0.05)` | Fundo de botões glass |
| `bg-primary/25` | `rgba(70, 236, 19, 0.25)` | Glow verde |
