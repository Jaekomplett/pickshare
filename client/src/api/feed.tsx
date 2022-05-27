/*eslint-disable*/
import api from './index';

const feedApi = {
  getMainFeed: () => {
    return api.get('/feed');
  },
  getHeart: (board_id: number) => {
    return api.get(`/heart?board_id=${board_id}`);
  },
  getComment: () => {
    return api.get('/comment');
  },
  getUserFeed: (nickname: string) => {
    return api.get(`/feed/mainfeed?nickname=${nickname}`);
  },

  postHeart: (info: any, board_id: number, accessToken: string) => {
    return api.post(
      '/heart',
      {
        info,
        board_id: board_id,
      },
      {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      }
    );
  },
  deleteHeart: (info: any, board_id: number, accessToken: string) => {
    return api.delete('/heart', {
      data: { info, board_id: board_id },
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });
  },
  searchHeart: (info: any, board: number, accessToken: string) => {
    return api.get(`/heart?board_id=${board}`, {
      data: { info },
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });
  },
  // searchByDate: () => {
  // 	return api.get(``)
  // }
  userInfo: (nickname: string) => {
    return api.get(`/user/userInfo?userNickname=${nickname}`);
  },
  postFollow: (info: any, nickname: string, accessToken: string) => {
    return api.post(
      '/follow/following',
      {
        info,
        'followingNickname': nickname,
      },
      {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      }
    );
  },
  searchFollow: (nickname: string, accessToken: string) => {
    return api.get(
      `/follow/follow?userNickname=${nickname}`,
      {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      }
    )
  },
};

export default feedApi;