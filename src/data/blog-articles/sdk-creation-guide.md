# Creating a JavaScript SDK with React (TSX) and Vite

This guide provides a comprehensive walkthrough for building a JavaScript SDK using **React (TSX)** and **Vite**. The SDK enables seamless integration of a React component into external web applications via a single script, ensuring modularity, type safety, and developer-friendly usage.

## 📘 Table of Contents

1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Project Structure](#project-structure)
4. [Step-by-Step SDK Creation](#sdk-creation)
5. [Using the SDK in an External React App](#usage)
6. [Best Practices](#best-practices)
7. [Conclusion](#conclusion)

---

## 🔰 Introduction

This guide outlines the process of creating a reusable JavaScript SDK using **React (TSX)** and **Vite**. The SDK allows developers to embed your React component or application into their websites or apps with minimal setup, leveraging the power of TypeScript for type safety and Vite for fast, modern builds.

---

## ✅ Prerequisites

To follow this guide, ensure you have:

- **Node.js** (v16 or later)
- **npm** or **yarn**
- Basic knowledge of **React**, **TypeScript**, and **Vite**
- Familiarity with DOM manipulation and JavaScript module systems

---

## 📁 Project Structure

### Initial Structure (Development)
```
my-sdk/
├── src/
│   ├── components/
│   │   ├── SampleComponent.tsx  # Reusable component
│   │   └── SDKEntry.tsx        # Main SDK entry point
│   ├── main.tsx                # Development preview
│   └── index.ts                # SDK export for distribution
├── index.html
├── .gitignore
├── vite.config.ts
├── tsconfig.json
└── package.json
```

### Final Structure (Post-Build)
```
my-sdk/
├── dist/
│   ├── my-sdk.es.js            # ES module build
│   ├── my-sdk.umd.js           # UMD build for broader compatibility
│   └── other build artifacts    # Additional generated files
├── types/                      # TypeScript type definitions
├── src/
│   ├── components/
│   │   ├── SampleComponent.tsx
│   │   └── SDKEntry.tsx
│   ├── main.tsx
│   └── index.ts
├── index.html
├── .gitignore
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 🛠️ Step-by-Step SDK Creation

### 🧱 Step 1: Initialize the Project

Create a new Vite project with the React-TypeScript template:

```bash
npm create vite@latest my-sdk -- --template react-ts
cd my-sdk
npm install
```

This sets up a Vite project with TypeScript and React, providing a solid foundation for the SDK.

---

### 🧩 Step 2: Create SDK Components

#### **`src/components/SDKEntry.tsx`**
The main entry point for the SDK, rendering the core component and accepting props for customization.

```tsx
import React from 'react';
import { SampleComponent } from './SampleComponent';

interface SDKEntryProps {
  userName: string;
}

export const SDKEntry: React.FC<SDKEntryProps> = ({ userName }) => {
  return (
    <div style={{ border: '1px solid #0078d4', padding: 16, borderRadius: 4 }}>
      <h3>SDK Entry Component</h3>
      <SampleComponent userName={userName} />
    </div>
  );
};
```

#### **`src/components/SampleComponent.tsx`**
A sample component demonstrating SDK functionality and prop usage.

```tsx
import React from 'react';

interface SampleComponentProps {
  userName: string;
}

export const SampleComponent: React.FC<SampleComponentProps> = ({ userName }) => {
  return (
    <div>
      <h4>Sample Component</h4>
      <p>Welcome, <strong>{userName}</strong>!</p>
      <div style={{ background: '#f5f5f5', padding: 12, borderRadius: 4, marginTop: 8 }}>
        <h5>User-Specific Section</h5>
        <p>This section is personalized for {userName}.</p>
      </div>
    </div>
  );
};
```

---

### 🌐 Step 3: Expose the SDK

#### **`src/index.ts`**
Export the `SDKEntry` component to make it accessible to client projects.

```ts
export { SDKEntry } from './components/SDKEntry';
```

---

### 🖼️ Step 4: (Optional) Preview the SDK

#### **`src/main.tsx`**
Create a mock interface for testing the SDK during development (`npm run dev`).

```tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { SDKEntry } from './index';

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <div style={{ margin: 40 }}>
      <h1>Mock Web Page</h1>
      <p>This is a mock client application using the SDK:</p>
      <SDKEntry userName="Alice" />
    </div>
  </React.StrictMode>
);
```

---

### 📦 Step 5: Configure Vite for SDK Builds

#### **`vite.config.ts`**
Configure Vite to build the SDK as a library in UMD format for compatibility with various environments.

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'MySDK',
      fileName: 'my-sdk',
      formats: ['umd', 'es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
```

---

### 📋 Step 6: Configure `package.json`

Update `package.json` to define the SDK's entry points and dependencies.

```json
{
  "name": "my-sdk",
  "version": "1.0.0",
  "description": "A reusable JavaScript SDK built with React and Vite",
  "main": "dist/my-sdk.umd.js",
  "module": "dist/my-sdk.es.js",
  "types": "types/index.d.ts",
  "files": ["dist", "types"],
  "scripts": {
    "dev": "vite",
    "build": "tsc -p tsconfig.build.json && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.1.11",
    "tailwindcss": "^4.1.11"
  },
  "peerDependencies": {
    "react": "^18.0.0 || ^19.0.0",
    "react-dom": "^18.0.0 || ^19.0.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.30.1",
    "@types/node": "^24.1.0",
    "@types/react": "^19.1.9",
    "@types/react-dom": "^19.1.7",
    "@vitejs/plugin-react": "^4.7.0",
    "eslint": "^9.30.1",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "globals": "^16.3.0",
    "typescript": "~5.8.3",
    "typescript-eslint": "^8.35.1",
    "vite": "^7.0.6"
  }
}
```

Run the build command to generate the SDK:

```bash
npm run build
```

This creates the `dist/` and `types/` directories, containing the compiled SDK and TypeScript type definitions.

---

## 🔌 Using the SDK in an External React App

### Install the SDK
After publishing the SDK to npm or using a local path:

```bash
npm install my-sdk
# For local testing:
# npm install ../path-to-your-sdk
```

### Integrate into a React App
#### **`App.tsx` (External React Project)**

```tsx
import React from 'react';
import { SDKEntry } from 'my-sdk';

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>External React Application</h1>
      <p>This host application embeds the SDK below:</p>
      <SDKEntry userName="Bob" />
    </div>
  );
}

export default App;
```

---

## ✅ Best Practices

- **Minimal API**: Design a simple, intuitive API to enhance usability.
- **Type Safety**: Use TypeScript to provide clear type definitions for props and methods.
- **Documentation**: Include detailed usage examples and JSDoc comments for public APIs.
- **Modularity**: Structure components to be reusable and independent.
- **Testing**: Add unit tests for components to ensure reliability.

---

## 🏁 Conclusion

This guide demonstrates how to build a robust JavaScript SDK using **React (TSX)** and **Vite**. By following these steps, you can create a reusable, type-safe SDK that integrates seamlessly into external React applications. The use of Vite ensures fast builds, while TypeScript enhances developer experience with strong typing. Publish your SDK to npm or distribute it locally to empower other developers to leverage your work.