node_modules: package.json
	npm install
	touch "$@"

.PHONY: build
build: node_modules
	npm run build
