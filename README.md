This is a reproduction of a bug present in the `@embroider/macros` babel plugin. I noticed that the plugin seems to aggressively optimize away certain optional chaining expressions.

## Steps to reproduce

You can basically already see the output in `test-transpiled.js`. When you look at `test.js`, the optional chaining expression gets evaluated to `undefined`, which is not the expected behavior.

If you want to reproduce yourself or tweak the src file, you can run:

```sh
pnpm install
pnpm test
```
