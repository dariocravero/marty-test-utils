export default function onStoreChange(Store, assert) {
  // Wait for the Store to change its state as a consequence of your action being dealt with
  let listener = Store.addChangeListener(function(state) {
    // Dispose the listener
    listener.dispose();

    assert.call(this, state);
  });
}
