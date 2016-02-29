1. run `jspm init` (baseURL=empty, transpiler=TypeScript, defaults for other stuff)
2. run `jspm install react react-dom`
3. add to jspm.config.js:

	```diff
	@@ -6,6 +6,18 @@ SystemJS.config({
	   ],
	   transpiler: "plugin-typescript",
	 
	+  meta: {
	+    "*.tsx": {
	+      loader: "plugin-typescript"
	+    },
	+    "*.ts": {
	+      loader: "plugin-typescript"
	+    }
	+  },
	+  typescriptOptions: {
	+    typeCheck: true,
	+    tsconfig: true
	+  },
	   map: {
		 "plugin-typescript": "github:frankwallis/plugin-typescript@4.0.1",
		 "process": "github:jspm/nodelibs-process@0.2.0-alpha",
	```
4. create tsconfig.json:

	```json
	{
		"compilerOptions": {
			"module": "system",
			"target": "es5",
			"noImplicitAny": true,
			"sourceMap": true,
			"jsx": "react"
		},
		"files": [
			"src/app.tsx",
			"typings/browser.d.ts"
		]
	}
	```
5. create src/app.tsx
	```typescript
	import * as React from 'react';
	import * as ReactDOM from 'react-dom';

	type GUIProps = { greetTarget: string };
	type GUIState = { time: Date };

	class GUI extends React.Component<GUIProps, GUIState> {
		constructor(props: GUIProps) {
			super(props);
			// must set initial state in constructor
			this.state = {time: new Date()};
			setInterval(() => this.setState({time: new Date()}), 1000);
		}
		render() {
			return <div>
				Hello {this.props.greetTarget}!
				It is {this.state.time.toString()}.
			</div>;
		}
	}

	ReactDOM.render(<GUI greetTarget="World" />, document.querySelector("#root"));
	```
6. create index.html
	```html
	<!doctype html>

	<meta charset="utf-8">
	<title>Minimal Example</title>

	<div id=root>Loading...</div>

	<script src="jspm_packages/system.js"></script>
	<script src="jspm.browser.js"></script>
	<script src="jspm.config.js"></script>
	<script>System.import("src/app.tsx")</script>
	```

Now run a webserver with `python3 -m http.server` and open <http://localhost:8000>. You should see "Hello World" displayed.
