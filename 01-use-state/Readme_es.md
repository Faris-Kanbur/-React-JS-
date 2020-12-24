# 01 Use State


```bash
npm install
```

_./src/demo.js_

```diff
import React from "react";

export const MyComponent = props => {
+    const [myName, setMyName] = React.useState('John Doe');

-  return <h2>My Component</h2>;
+    return(
+        <>
+            <h4>{myName}</h4>
+            <input
+                value={myName}
+                onChange={(e) => setMyName(e.target.value)}
+            />
+        </>
+    );
};
```
