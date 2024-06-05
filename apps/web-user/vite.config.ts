import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
export default defineConfig({
    build: {
        sourcemap: false,
        outDir: 'build',
    },
    plugins: [reactRefresh()],
});
