# Task Manager - React + TypeScript + Vite

Aplicación web para gestión de tareas y exploración de elementos remotos, desarrollada con React, TypeScript y Vite.

## Características principales

- **Gestión de tareas:**

  - Añadir, listar y eliminar tareas locales.
  - Modal accesible y con fondo desenfocado para agregar tareas.
  - Contador de tareas en tiempo real.

- **Exploración de elementos remotos:**

  - Consulta y muestra de elementos desde una API externa.
  - Manejo de estados de carga y error.
  - Visualización de avatares y datos de cada elemento.

- **UI moderna:**

  - Estilos con Tailwind CSS.
  - Componentes reutilizables y desacoplados.
  - Experiencia de usuario responsiva y accesible.

- **Calidad y pruebas:**
  - Arquitectura basada en componentes y hooks personalizados.
  - Estado global de tareas con Context y useReducer.
  - Pruebas unitarias con Jest y React Testing Library para todos los componentes principales.

## Estructura del código

- `src/components/` — Componentes reutilizables: Modal, AddTaskModal, TasksScreen, ElementsListScreen, HomeScreen.
- `src/reducers/` — Reducers para la gestión de estado global.
- `src/__tests__/components/` — Pruebas unitarias de componentes.
- `src/App.tsx` — Composición principal y providers de contexto.

## Scripts útiles

- `npm run dev` — Inicia la app en modo desarrollo.
- `npm run build` — Compila la app para producción.
- `npm run test` — Ejecuta las pruebas unitarias.

## Stack tecnológico

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Jest + React Testing Library

---
