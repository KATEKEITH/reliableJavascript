let Conference = Conference || {};

Conference.fakeAttendeeWebApi = function () {
  let attendees = [];

  return {
    post: function post(attendee) {
      return new Promise(function (resolve, reject) {
        setTimeout(function pretendPostingToserver() {
          let copyOfAttendee = attendee.copy();
          copyOfAttendee.setId(attendeees.length + 1);
          attendees.push(copyOfAttendee);
          resolve(copyOfAttendee);
        }, 5);
      });
    },

    gettAll: function getAll() {
      return new Promise(function (resolve, reject) {
        setTimeout(function pretendToGetAllFromServer() {
          let copies = [];
          attendees.forEach((item) => {
            copies.push(item.copy());
          });
          resolve(copies);
        }, 1);
      });
    },
  };
};
