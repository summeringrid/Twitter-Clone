import userInfo from "./data/profile"
// // todo Question: Why I can't put my user info into a Json file?
//
// const profile = (state = userInfo, action) => {
//   switch (action.type){
//     case 'fetch-all-profile':
//       return(
//           action.userInfo
//       )
//
//     case  'save':
//       const newState = {
//         name: "Ingrid Liu",
//         handle: "ingridliu",
//         tweetsNum: '5,196',
//         profilePicture: "../../../images/avatar_ingrid.png",
//         bannerPicture: "../../../images/profile_banner2.png",
//         bio: "(๑•̀ㅂ•́)و✧ Delving coding for one day that I can have an Australian Shepherd mini dog \uD83D\uDC36",
//         website: "https://github.com/summeringrid",
//         location: "Bay Area",
//         dateOfBirth: "1995-06-01",
//         dateJoined: "2021",
//         followingCount: 312,
//         followersCount: 180,
//         editSwitch : false
//       }
//       return newState;
//
//     case  'save1':
//       return action.userInfo;
//
//     default:
//       return state;
//   }
// }
// export default profile;



const profile = (state = userInfo, action) => {
  switch (action.type){
    case 'get-profile':
      return (action.profile)

    case "modify-profile":
      const newProfile = action.profile;
      console.log(`modified profile is sent to reducer: ${newProfile}`);
      const modifiedProfile = {
        ...state,
        name: newProfile.name,
        bio: newProfile.bio,
        location: newProfile.location,
        website: newProfile.website,
        // profilePicture: newProfile.profilePicture,
        // bannerPicture: newProfile.bannerPicture
      };
      // console.log(`modified profile: ${modifiedProfile}`);
      return modifiedProfile;
    default:
      return state;
  }
}


export default profile;