# React Animated Tabs

A modern, responsive tab navigation component for React with smooth animations and hover effects. Features a clean, minimalist design with dynamic image previews and mobile-first responsiveness.

## Features

- Clean, minimalist design
- Smooth slide-down animations
- Image preview on hover (desktop)
- Mobile-first responsive design
- Active state indicators
- Performant CSS transitions

## Installation

```bash
npm install
npm start
```

## Usage

```jsx
import Tabs from './Tabs';

const tabs = [
  {
    title: 'Tab 1',
    content: 'Content for tab 1',
    image: '/path/to/image1.jpg'
  },
  // ... more tabs
];

function App() {
  return <Tabs tabs={tabs} />;
}
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| tabs | array | Array of tab objects with title, content, and optional image |

## Features in Detail

### Desktop View
- Hover effects with sliding background
- Image preview slides down from top
- Active tab indicator line
- Smooth transitions

### Mobile View
- Full-width tabs
- Always-visible images
- Stacked layout
- Touch-friendly targets

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
