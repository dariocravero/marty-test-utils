export default function onDispatchedAction(dispatcher, assert) {
  // Register to receive dispatched events
  let token = dispatcher.register((payload) => {
    // Clean the dispatcher
    dispatcher.unregister(token);

    assert.call(this, payload);
  });
}
