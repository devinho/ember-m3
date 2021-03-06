import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeResponse(store, primaryModelClass, payload /*, id, requestType */) {
    return payload;
  },

  pushPayload(store, payload) {
    return this.store.push(payload);
  },
});
