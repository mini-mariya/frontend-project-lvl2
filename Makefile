install:
	npm ci

link:
	npm link

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	npm test

test-watch:
	npm test -s -- --watch

test-coverage:
	npm test -- --coverage --coverageProvider=v8