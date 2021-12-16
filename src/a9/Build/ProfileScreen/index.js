import React, {useState} from "react";
import Profile from "./Profile";
// import EditProfile from "./EditProfile";
import NavigationSidebar from "../NavigationSidebar";
import TweetList from "../TweetList";
import PostSummaryList from "../PostSummaryList";
import A7ProfileEdit from "../ProfileEdit";


const A9ProfileScreen = () => {
    const [edit, setEdit] = useState(false);
    return (
        // <div className="row mt-2">
        //     {/*IF ONLY DISPLAY THE PROFILE, USE THIS VERSION:*/}
        //
        //     <div className="col-2">
        //         <NavigationSidebar active={"profile"}/>
        //     </div>
        //     <div className="col-10 col-lg-6">
        //         {/*when setEdit is false: profile page; when edit is true: edit page*/}
        //         {!edit && <Profile setEdit={setEdit}/>}
        //         {edit && <A7ProfileEdit setEdit={setEdit}/>}
        //         {/*<Profile/>*/}
        //         {/*{<Test/>}*/}
        //
        //     </div>

            <div className="row mt-2">
                <p>This is from a9</p>
                <div className="col-2 ">
                    <NavigationSidebar active={"profile"}/>
                </div>
                <div className="col-10 col-lg-6">
                    {/*<Profile/>*/}
                    {!edit && <Profile setEdit={setEdit}/>}
                    {edit && <A7ProfileEdit setEdit={setEdit}/>}
                    <TweetList/>
                </div>
                <div className="col-4 d-none d-lg-block">
                    <PostSummaryList/>
                </div>
            </div>


    );
}


export default A9ProfileScreen;


