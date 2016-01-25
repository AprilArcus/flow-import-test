Flow throws an unusual error when the user

* imports a class from a module declared in a lib,
* subclasses it with a constructor,
* instantiates the subclass,
* and returns the instance from a Promise's .then() callback.

```
$ flow check
test.js:17
 17: Promise.resolve().then(_ => new ImportedAndSubclassedWithConstructor())
                                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ImportedAndSubclassedWithConstructor. This type is incompatible with
422:       onFulfill?: (value: R) => Promise<U> | U,
                                     ^^^^^^^^^^ Promise. See: /private/tmp/flow/flowlib_33b4cd20/core.js:422
```
