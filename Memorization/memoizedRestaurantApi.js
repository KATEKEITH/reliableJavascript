let Conference = Conference || {};

Conference.memorizedRestaurantApi = function (thirdPartyApi) {
  "use strict";

  let api = thirdPartyApi,
    cache = {};

  return {
    getRestaurantNearConference: function (cusine) {
      if (cache.hasOwnProperty(cusine)) {
        return cache[cusine];
      }

      let returnedPromise = api.getRestaurantNearConference(cusine);
      cache[cuisine] = returnedPromise;
      return returnedPromise;
    },
  };
};
