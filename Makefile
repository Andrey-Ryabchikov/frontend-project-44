install: 
	npm ci


brain-games: 
	node bin/brain-games.js

brain-even: 
	node bin/brain-even.js
	
brain-calc: 
	node bin/brain-calc.js

brain-qcd: 
	node bin/brain-qcd.js

lint:
	npx eslint .

publish:
	npm publish --dry-run