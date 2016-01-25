/* @flow */

import Imported from 'declaredModule'
class ImportedAndSubclassed extends Imported {}
class ImportedAndSubclassedWithConstructor extends Imported {
  constructor (): void {}
}
Promise.resolve().then(_ => new Imported())
Promise.resolve().then(_ => new ImportedAndSubclassed())
// $ flow check
// test.js:12
Promise.resolve().then(_ => new ImportedAndSubclassedWithConstructor())
//                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ SubclassedImportWithConstructor. This type is incompatible with
// 422:       onFulfill?: (value: R) => Promise<U> | U,
//                                      ^^^^^^^^^^ Promise. See: /private/tmp/flow/flowlib_2589350f/core.js:422

class InSitu {}
class InSituAndSubclassed extends InSitu {}
class InSituAndSubclassedWithConstructor extends InSitu {
  constructor(): void {}
}

Promise.resolve().then(_ => new InSitu())
Promise.resolve().then(_ => new InSituAndSubclassed())
Promise.resolve().then(_ => new InSituAndSubclassedWithConstructor())
