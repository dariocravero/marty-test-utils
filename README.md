# marty-test-utils

A bunch of helpers to aid [marty](https//martyjs.org) testing.


## mockStore

Use it to fake a Store.

```js
mockStore('MyStore', {
  method1: spy()
});

```

## onDispatchedAction

Use it to test actions triggered through a dispatcher inside `ActionCreators` and `Queries`.

```
const dispatcher = Marty.dispatcher.getDefault();

it('tests a dispatched action', (done) => {
  onDispatchedAction(dispatcher, wcheck(done, (payload) => {
    assert(true); // <-- here go your tests
  }));

  ActionCreators.doSomething();
});
```

## onStoreChange

Use it to test `Store` changes after the actions were handled.

```
const dispatcher = Marty.dispatcher.getDefault();

it('tests a store change', (done) => {
  onStoreChange(Store, wcheck(done, (state) => {
    assert(true); // <-- here go your tests
  }));

  // Fake the dispatcher emitting an action
  dispatcher.dispatchAction({type: Mock.Constants.USER_SET_EMAIL, arguments: [EMAIL]});
});
```

MIT license.
