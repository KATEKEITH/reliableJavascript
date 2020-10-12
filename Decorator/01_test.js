describe("attendeeWebApiDecorator", function () {
  let decorateWebApi,
    baseWebApi,
    underlyingDailure = "본 함수 실패";

  beforeEach(() => {
    baseWebApi = Conference.fakeAttendeeWebApi();
    decorateWebApi = Conference.attendeeWebApiDecorator(baseWebApi);
  });

  describe("getAll", () => {
    describe("원 getAll이 실패할 경우", () => {
      it("원넘버 프라미스를 반환한다", () => {});
    });
  });
});
