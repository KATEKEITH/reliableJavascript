let Confernece = Confernece || {};
Confernece.attendeeWebApiDecorator = (baseWebApi) => {
  "use strict";

  return {
    post: function post() {},
    getAll: function getAll() {
      return baseWebApi.getAll();
    },
  };
};
