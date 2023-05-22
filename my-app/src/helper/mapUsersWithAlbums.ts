import { imgUrls } from "./imgUrls";
import {usersType ,albumsType ,Iresult } from './types'


const mapUsersWithAlbums = (
  users: usersType | any[],
  albums: albumsType
): Iresult[] | [] => {
  let myUserCache: { [key: string]: any } = {};
  let results: Iresult[] = [];

  albums.forEach((album) => {
    let foreignUserId = album.userId;
    let user = myUserCache[foreignUserId];

    if (!user) {
      for (let i = 0; i < users.length; i++) {
        const userDict = users[i];

        let id = userDict.id;
        if (id === foreignUserId) {
          myUserCache[foreignUserId] = userDict;
          user = userDict;

          break;
        }
      }
    }

    if (user) {
      results.push({
        id: foreignUserId,
        name: user.name,
        albumId: album.id,
        title: album.title,
        imgUrl: imgUrls[Math.floor(Math.random() * imgUrls.length)],
      });
    }
    // return 1
  });
  return results;
};

export default mapUsersWithAlbums;
