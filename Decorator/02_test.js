describe("전송한 참가자에 대해서만 호출할 때", () => {
  it("버림 프라미스를 반환한다", (done) => {
    //
    decoratedWebApi.post(attendeeA);
    //
    decoratedWebApi.post(attendeeA).then(
      function onSuccess() {
        expect("전송성공").toBe(false);
        done();
      },
      function onFailure(error) {
        expect(error instanceof Error).toBe(true);
        expect(error.message).toBe(decoratedWebApi.getMessages().postPending);
        done();
      }
    );
  });
});
