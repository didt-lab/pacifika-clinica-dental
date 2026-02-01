# Sistema de Diseño - Pacifika Clínica Dental

Este sistema de diseño proporciona una base consistente y reutilizable para el desarrollo del sitio web de Pacifika Clínica Dental.

## 📁 Estructura

```
src/design-system/
├── config/
│   ├── theme.ts              # Configuración de colores, tipografías, espaciado
│   └── tailwind.config.js    # Configuración personalizada de Tailwind
├── components/
│   ├── Button.tsx            # Componente de botón reutilizable
│   ├── Card.tsx              # Componente de tarjeta base
│   ├── Input.tsx             # Componente de input de formulario
│   ├── ServiceCard.tsx       # Tarjeta específica para servicios
│   ├── DoctorCard.tsx        # Tarjeta específica para doctores
│   └── StatsCard.tsx         # Tarjeta para estadísticas
├── styles/
│   └── custom.css            # Estilos personalizados y utilidades
└── index.ts                  # Exportaciones principales
```

## 🎨 Colores

### Colores Primarios
- **Azul Principal**: `#2563eb` - Color principal de la marca
- **Azul Claro**: `#3b82f6` - Variante más clara
- **Azul Oscuro**: `#1d4ed8` - Variante más oscura

### Colores Secundarios
- **Verde**: `#14b8a6` - Para elementos de éxito
- **Mint**: `#6ee7b7` - Color de acento

### Colores de Estado
- **Éxito**: `#10b981`
- **Advertencia**: `#f59e0b`
- **Error**: `#ef4444`
- **Info**: `#3b82f6`

## 🔤 Tipografía

### Familias de Fuentes
- **Sans**: Inter, system-ui, sans-serif
- **Serif**: Georgia, serif
- **Mono**: Fira Code, monospace

### Tamaños
- **xs**: 12px
- **sm**: 14px
- **base**: 16px
- **lg**: 18px
- **xl**: 20px
- **2xl**: 24px
- **3xl**: 30px
- **4xl**: 36px
- **5xl**: 48px
- **6xl**: 60px

## 🧩 Componentes

### Button
```tsx
import { Button } from '@/design-system';

<Button variant="primary" size="md" onClick={handleClick}>
  Click me
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost'
- `size`: 'sm' | 'md' | 'lg'
- `disabled`: boolean
- `loading`: boolean

### Card
```tsx
import { Card } from '@/design-system';

<Card variant="elevated" padding="md">
  Content here
</Card>
```

**Props:**
- `variant`: 'default' | 'elevated' | 'outlined' | 'filled'
- `padding`: 'sm' | 'md' | 'lg'

### Input
```tsx
import { Input } from '@/design-system';

<Input 
  label="Nombre"
  placeholder="Ingresa tu nombre"
  required
  error={errors.name}
/>
```

### ServiceCard
```tsx
import { ServiceCard } from '@/design-system';

<ServiceCard
  title="Odontología General"
  description="Cuidado oral completo"
  icon="🦷"
  onClick={handleClick}
/>
```

### DoctorCard
```tsx
import { DoctorCard } from '@/design-system';

<DoctorCard
  name="Dr. Juan Lizarraga"
  specialty="Endodoncia"
  experience="10+ años"
  photo="/images/doctor.jpg"
/>
```

## 🎯 Utilidades CSS

### Clases de Botones
```css
.btn-primary    /* Botón principal */
.btn-secondary  /* Botón secundario */
.btn-outline    /* Botón con borde */
.btn-ghost      /* Botón fantasma */
```

### Clases de Cards
```css
.card           /* Card básica */
.card-elevated  /* Card con sombra */
.card-outlined  /* Card con borde */
```

### Clases de Formularios
```css
.form-input     /* Input de formulario */
.form-label     /* Label de formulario */
.form-error     /* Mensaje de error */
.form-helper    /* Texto de ayuda */
```

### Efectos Hover
```css
.hover-lift     /* Elevación al hover */
.hover-glow     /* Brillo al hover */
.hover-scale    /* Escala al hover */
```

### Animaciones
```css
.animate-float          /* Animación flotante */
.animate-pulse-dental   /* Pulso dental */
.animate-slide-in-up    /* Deslizar hacia arriba */
.animate-slide-in-left  /* Deslizar desde la izquierda */
.animate-slide-in-right /* Deslizar desde la derecha */
```

## 📱 Responsive Design

### Breakpoints
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

### Clases Responsivas
```css
.mobile-padding     /* Padding para móvil */
.mobile-text-center /* Texto centrado en móvil */
.mobile-stack       /* Stack vertical en móvil */
```

## 🚀 Uso

### 1. Importar el sistema de diseño
```tsx
import { Button, Card, theme } from '@/design-system';
```

### 2. Usar componentes
```tsx
<Button variant="primary" size="lg">
  Agendar Cita
</Button>
```

### 3. Usar utilidades CSS
```tsx
<div className="card hover-lift">
  <h2 className="title-xl">Título</h2>
  <p className="text-body">Contenido</p>
</div>
```

### 4. Acceder a la configuración
```tsx
const primaryColor = theme.colors.primary[500];
const spacing = theme.spacing[4];
```

## 🔧 Personalización

### Modificar Colores
Edita `src/design-system/config/theme.ts`:
```typescript
colors: {
  primary: {
    500: '#tu-color-aqui', // Cambia el color principal
  }
}
```

### Agregar Nuevos Componentes
1. Crea el componente en `src/design-system/components/`
2. Exporta en `src/design-system/index.ts`
3. Documenta en este README

### Agregar Nuevas Utilidades
Edita `src/design-system/styles/custom.css`:
```css
.tu-clase-personalizada {
  /* Tus estilos aquí */
}
```

## 📋 Checklist de Uso

- [ ] Importar componentes desde `@/design-system`
- [ ] Usar colores del tema definido
- [ ] Aplicar espaciado consistente
- [ ] Usar tipografías del sistema
- [ ] Aplicar efectos hover apropiados
- [ ] Verificar responsive design
- [ ] Mantener consistencia visual

## 🎨 Guía de Estilo

### Principios de Diseño
1. **Consistencia**: Usar siempre los mismos componentes y estilos
2. **Accesibilidad**: Incluir alt text, focus states, contraste adecuado
3. **Responsive**: Diseño que funcione en todos los dispositivos
4. **Performance**: Componentes optimizados y ligeros
5. **Mantenibilidad**: Código limpio y bien documentado

### Mejores Prácticas
- Usar componentes del sistema en lugar de crear nuevos
- Mantener la jerarquía visual clara
- Aplicar espaciado consistente
- Usar colores semánticamente correctos
- Probar en diferentes dispositivos

