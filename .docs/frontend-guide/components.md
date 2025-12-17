# 🧩 Componentes Reutilizáveis

Catálogo de componentes UI disponíveis no projeto.

## 📍 Localização

```
src/components/
├── ui/              # Componentes atômicos
│   ├── SkiaGlassCard.tsx
│   ├── SkiaBlurGlow.tsx
│   ├── CategoryPill.tsx
│   ├── HeroBanner.tsx
│   ├── ProductCard.tsx
│   └── FreeShippingProgress.tsx
└── layout/          # Componentes de layout
    └── FloatingNavbar.tsx
```

---

## 🔮 SkiaGlassCard

Card com efeito de vidro usando Skia backdrop blur.

```tsx
import { SkiaGlassCard } from '@/components/ui/SkiaGlassCard';

<SkiaGlassCard
  className="p-6 rounded-3xl"
  intensity={30}        // Intensidade do blur (0-100)
  tint="rgba(20,34,16,0.6)"  // Cor de fundo
>
  <Text>Conteúdo</Text>
</SkiaGlassCard>
```

---

## 🌟 SkiaBlurGlow

Círculo com blur difuso para efeitos de glow no background.

```tsx
import { SkiaBlurGlow } from '@/components/ui/SkiaBlurGlow';

<SkiaBlurGlow
  color="rgba(70, 236, 19, 0.3)"
  blur={100}
  size={250}
  offsetY={-80}
/>
```

| Prop | Tipo | Default | Descrição |
|------|------|---------|-----------|
| `color` | string | `rgba(70,236,19,0.25)` | Cor do glow |
| `blur` | number | `80` | Intensidade do blur |
| `size` | number | `200` | Diâmetro do círculo |
| `offsetY` | number | `-50` | Offset vertical |

---

## 🏷️ CategoryPill

Botão circular para categorias.

```tsx
import { CategoryPill } from '@/components/ui/CategoryPill';

<CategoryPill
  name="Cervejas"
  icon="sports-bar"
  isActive={true}
  onPress={() => setCategory('beers')}
/>
```

---

## 🖼️ HeroBanner

Banner promocional contextual com imagem de fundo.

```tsx
import { HeroBanner } from '@/components/ui/HeroBanner';

<HeroBanner
  title="Comece a noite\ncom energia."
  subtitle="Seleção especial de energéticos"
  badge="Modo Esquenta"
  badgeIcon="local-fire-department"
  imageUrl="https://..."
  isLive={true}
  onPress={() => navigate('/promo')}
/>
```

---

## 🃏 ProductCard

Card de produto para carousels horizontais.

```tsx
import { ProductCard } from '@/components/ui/ProductCard';

<ProductCard
  id="123"
  name="Absolut Vodka"
  category="1L • Destilados"
  price="R$ 89"
  imageUrl="https://..."
  isTrending={true}
  onPress={() => navigate('/product/123')}
  onAddToCart={() => addToCart('123')}
/>
```

---

## 🚚 FreeShippingProgress

Barra de progresso para frete grátis.

```tsx
import { FreeShippingProgress } from '@/components/ui/FreeShippingProgress';

<FreeShippingProgress
  currentValue={85}
  targetValue={100}
/>
```

---

## 🧭 FloatingNavbar

Navegação flutuante estilo pill.

```tsx
import { FloatingNavbar } from '@/components/layout/FloatingNavbar';

// Posicionar como última child da View pai
<View className="flex-1">
  {/* Conteúdo */}
  <FloatingNavbar />
</View>
```

> ⚠️ Sempre use `paddingBottom: 120` no ScrollView para evitar sobreposição.

---

## ✅ Regras de Criação de Componentes

1. **Use `className` para estilos** - NativeWind, não StyleSheet
2. **Trigger haptics** em todos os TouchableOpacity
3. **Export named** - `export function Component()`, não default
4. **Props tipadas** - Defina interface para todas as props
5. **Imports absolutos** - `@/components/...`, não `../../`
