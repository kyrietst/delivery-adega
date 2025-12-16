# 📦 Feature: Gestão de Estoque

## Visão Geral
Sistema de visualização e ajuste de estoque de produtos da Adega Anita.

## Tabelas no Supabase

### `produtos`
```sql
- id: uuid (PK)
- nome: text
- categoria: text (FK → categories.name)
- preco_custo: numeric
- preco_venda: numeric
- estoque_atual: integer
- estoque_minimo: integer
- ativo: boolean
- created_at: timestamp
```

### `inventory_movements`
```sql
- id: uuid (PK)
- produto_id: uuid (FK)
- tipo: text ('entrada', 'saida', 'ajuste')
- quantidade: integer
- usuario_id: uuid
- observacao: text
- created_at: timestamp
```

---

## Componentes

### `src/features/inventory/components/`

#### `ProductList.tsx`
Lista de produtos com virtualization (FlatList).

**Props:**
```tsx
interface ProductListProps {
  filter?: string;
  category?: string;
}
```

**Estado:**
- React Query: `useProducts()` hook

---

#### `ProductCard.tsx`
Card individual de produto.

**Props:**
```tsx
interface ProductCardProps {
  product: Product;
  onPress: (product: Product) => void;
}
```

**Visual:**
- Glass card com `bg-glass-surface`
- Nome em `text-text-primary`
- Categoria em `text-text-muted`
- Estoque com indicador de cor:
  - Verde: > estoque_minimo
  - Amarelo: <= estoque_minimo
  - Vermelho: = 0

---

#### `StockAdjustModal.tsx`
Modal para ajustar quantidade manualmente.

**Props:**
```tsx
interface StockAdjustModalProps {
  product: Product;
  visible: boolean;
  onClose: () => void;
}
```

**Fluxo:**
1. Input numérico
2. Validação (não-negativo)
3. Chamada a `adjustStock` mutation
4. Fechar modal com haptic feedback

---

## Hooks

### `useProducts()`
```tsx
import { useQuery } from '@tanstack/react-query';

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => supabase.from('produtos').select('*'),
  });
}
```

### `useAdjustStock()`
```tsx
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useAdjustStock() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ id, quantidade }) => {
      // RPC call to adjust_stock
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['products']);
    },
  });
}
```

---

## Validações

### Frontend
- ✅ Quantidade >= 0
- ✅ Produto ativo
- ✅ Categoria válida (existe em `categories`)

### Backend (Supabase RLS)
- ✅ Usuário autenticado
- ✅ Trigger para criar registro em `inventory_movements`
- ✅ Validação de foreign keys

---

## UI/UX

### Tela Principal
```
┌─────────────────────────────┐
│ 📦 Estoque                  │
│ [Buscar...]  [Filtro ▼]    │
├─────────────────────────────┤
│ ╔═══════════════════════╗  │
│ ║ 🍷 Vinho Tinto 750ml ║  │
│ ║ Bebidas Alcoólicas   ║  │
│ ║ 🟢 12 unidades       ║  │
│ ╚═══════════════════════╝  │
│                              │
│ ╔═══════════════════════╗  │
│ ║ 🧊 Gelo 4kg          ║  │
│ ║ Utilidades           ║  │
│ ║ 🟡 4 unidades        ║  │
│ ╚═══════════════════════╝  │
└─────────────────────────────┘
```

---

## Estados de Erro

### Produto não encontrado
```tsx
<View className="flex-1 items-center justify-center">
  <Text className="text-text-secondary">
    Nenhum produto encontrado
  </Text>
</View>
```

### Erro de rede
```tsx
<View className="bg-red-500/20 border border-red-500 rounded-xl p-4">
  <Text className="text-red-500">
    Erro ao carregar estoque
  </Text>
</View>
```

---

## Testes Manuais

- [ ] Lista carrega corretamente
- [ ] Filtro funciona
- [ ] Busca funciona
- [ ] Indicador de estoque baixo aparece
- [ ] Modal de ajuste abre/fecha
- [ ] Ajuste atualiza quantidade
- [ ] Haptic feedback funciona
