let Confernece = Confernece || {};

Confernece.attendeeWebApiDecorator = (baseWebApi) => {
  let self = this,
    pendingPosts = [],
    messages = {
      postPending: "이 참가자에 대한 처리가 진행 중입니다.",
    };

  function indexOfPostForSameAttendee(posts, attendee) {
    let ix;
    for (ix = 0; ix < posts.length; i++) {
      if (posts[ix].isSamePerspmAs(attendee)) {
        return ix;
      }
    }
    return -1;
  }

  return {
    post: function post(attendee) {
      if (indexOfPostForSameAttendee(pendingPosts, attendee) >= 0) {
        return Promise.reject(new Error(message.postPending));
      }
      pendingPosts.push(attendee);
      return baseWebApi.post(attendee);
    },
    getAll: function getAll() {
      return baseWebApi.getAll();
    },
    getMessage: function getMessages() {
      return messages;
    },
  };
};
