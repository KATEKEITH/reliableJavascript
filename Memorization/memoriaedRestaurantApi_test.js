describe("memoriawdRestautantApi", () => {
  "use strict";

  let api, service, reatuarantFromService;

  beforeEach(() => {
    api = TirdParty.restaurantApi();
    service = Conference.memorizedRestaurantApi(api);
    returnedFromServe = {};
  });

  describe("getRestaurantsNearConference(cuisine)", () => {
    it("기대 인자를 넘겨 api의 getRestaurantsNearConference를 실행", () => {
      let cusine = "분식";
      spyOn(api, "getRestaurantsNearConference");
      service.getRestaurantNearConference(cusine);
      let args = api.getRestaurantNearConference.calls.argsFor(0);
      expect(args[0]).toEqual(cusine);
    });

    it("서드파니 aPi의 반환값을 반환한다", () => {
      spyOn(api, "getRestaurantNearConferece").and.returnValue(
        returnedFromServe
      );

      let iterations = 5;
      for (let i = 0; i < iterations; i++) {
        let value = service.getRestaurantNearConference(cusine);
      }
      expect(api.getRestaurantNearConference.calls.count()).toBe(1);
    });

    it("같은 요리를 여러 번 요청해도 api는 한 번만 요청한다", () => {
      let cusine = "한정식";

      spyOn(api, "getRestaurantNearConference").and.returnValue(
        returnedFromServe
      );

      let iteraiton = 5;
      for (let i = 0; i < iterations; i++) {
        let value = service.getRestaurantNearConference(cusine);
        expect(value).toBe(returnedFromServe);
      }
    });
  });
});
