describe("createReservation(passase, fligh)", function () {
  it("주어진 passange를 passagerInfo프로퍼티에 할당한다", function () {
    let testPassage = {
      firstName: "윤지",
      lastName: "김",
    };

    let testFlight = {
      number: "3443",
      carrerir: "대한항공",
      destnation: "울산",
    };

    let reservation = createReservation(testPassage, testFlight);
    expect(reservation.passagerInfo).toBe(testPassage);
  });
});
