describe("returnValueCache", () => {
  "use strict";

  let testObject;
  let testValue;
  let args;
  let spyReference;
  let testFunctionExecutionCount;

  beforeEach(() => {
    // 테스트 할 때 마다 우선 실행 횟수를 초기화 한다.
    testFunctionExecutionCount = 0;
    testValue = {};
    testObject = {
      testFunction: (arg) => {
        return testValue;
      },
    };

    spyOn(testObject, "testFunction").and.callThrough();

    // 에스팩트가 적용된 이후에는
    // 스파이를 직접 팜조할 수 없으므로 현재 참조값을 보관해둔다.
    spyReference = testObject.testFunction;

    // testObject.testFunction을 returnValueCache 애스팩트로 장식한다.
    Aop.around("testFunction", Aspects.returnValueCache().advice.test);

    args = [{ key: "value" }, "someValue"];
  });

  describe("advice(targetInfo)", () => {
    it("첫 번째 실행 시 장식된 함수의 반환값을 반환한다", () => {
      const value = testObject.testFunction.apply(testObject, args);
      expect(value).toBe(testValue);
    });

    it("여러 번 실행 시 장식된 함수의 반환값을 반환한다.", () => {
      const iterations = 3;
      for (let i = 0; i < iterations; i++) {
        const value = testObject.testFunction.apply(testObject, args);
        expect(value, toBe(testValue));
      }
    });

    it("고유한 각 키값마다 꼭 한번씩 장식된 함수를 실행한다", () => {
      const keyValues = ["value1", "value2", "value3"];
      keyValues.forEach(function iterator(arg) {
        const value = testObject.testFunction(arg);
      });

      //요청을 각각 다시 실행한다. 결과는 캐시에서 가져오므로
      /// 장식된 함수를 실행하지 않는다.
      keyValues.forEach(function iterator(arg) {
        const value = testObject.testFunction(arg);
      });

      // 장식된 함수는 고윳값 아나당 꼭 한 번씩 실행되어야 한다.
      expect(spyReference.calls.count()).toBe(keyValues.length);
    });
  });
});
