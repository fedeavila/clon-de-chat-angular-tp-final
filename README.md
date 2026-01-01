# Chat App - Trabajo Final Integrador Angular

Aplicación de chat desarrollada con Angular 17.

## Características

- Lista de chats con contactos
- Ventana de conversación independiente por chat
- Crear nuevos chats con formulario reactivo
- Mensajes con respuesta automática
- Routing (/chats, /chats/:id, /nuevo)
- Diseño responsive

## Tecnologías

- Angular 17
- Standalone Components
- Reactive Forms
- TypeScript
- CSS nativo

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:
```bash
npm install
```

## Ejecutar
```bash
ng serve
```

Navegar a `http://localhost:4200`

## Estructura del proyecto
```
src/app/
├── components/
│   ├── chat-list/      # Lista de chats
│   ├── chat-window/    # Ventana de conversación
│   └── new-chat/       # Formulario nuevo chat
├── models/
│   ├── chat.interface.ts
│   └── message.interface.ts
├── services/
│   └── chat.service.ts
└── app.routes.ts
```

## Uso

1. En la pantalla principal verás la lista de chats
2. Hacé clic en un chat para abrir la conversación
3. Escribí un mensaje y presioná "Enviar"
4. La app responderá automáticamente
5. Crea nuevos chats con el botón "+ Nuevo"
