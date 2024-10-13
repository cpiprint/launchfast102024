import { defineConfig } from 'tsup'

export default defineConfig({
	format: ['esm'],
	entry: ['./src/index.ts'],
	outDir: './',
	dts: true,
	shims: true,
	skipNodeModulesBundle: true,
	clean: false,
})
