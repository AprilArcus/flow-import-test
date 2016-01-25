/* @flow */

// imported classes are ok...
import Imported from 'declaredModule';
Promise.resolve().then(_ => new Imported());

// if we subclass but don't override the constructor, no problem
class ImportedAndSubclassed extends Imported {};
Promise.resolve().then(_ => new ImportedAndSubclassed());

// strange error if we override the constructor!
class ImportedAndSubclassedWithConstructor extends Imported {
  constructor (): void {};
};
// $ flow check
// test.js:17
Promise.resolve().then(_ => new ImportedAndSubclassedWithConstructor());
//                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ SubclassedImportWithConstructor. This type is incompatible with
// 422:       onFulfill?: (value: R) => Promise<U> | U,
//                                      ^^^^^^^^^^ Promise. See: /private/tmp/flow/flowlib_2589350f/core.js:422

// but if we do the subclassing in an external file and then import it,
// the problem goes away.
import { SameThingInAnExternalFile } from './subclass.js';
Promise.resolve().then(_ => new SameThingInAnExternalFile());


// no problems if we declare the class and subclass in the same file
class InSitu {};
Promise.resolve().then(_ => new InSitu());

class InSituAndSubclassed extends InSitu {};
Promise.resolve().then(_ => new InSituAndSubclassed());

class InSituAndSubclassedWithConstructor extends InSitu {
  constructor(): void {};
};
Promise.resolve().then(_ => new InSituAndSubclassedWithConstructor());
