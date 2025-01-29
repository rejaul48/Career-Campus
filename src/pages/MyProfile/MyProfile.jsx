
import React, { useContext, useState, useEffect } from "react";
import { CareerContext } from "../../contextApi/CareerContext";
import { Helmet } from "react-helmet";
import { FaUser } from "react-icons/fa";
import swal from 'sweetalert';

const MyProfile = () => {
  const { user, updateUserProfile, loader } = useContext(CareerContext);

  // Local state for input fields
  const [profile, setProfile] = useState({
    displayName: "",
    photoURL: "",
  });

  // Handle input change and update local state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleUpdateUserProfile = (e) => {
    e.preventDefault();

    // Use existing values if input fields are empty
    const updatedName = profile.displayName.trim() || user?.displayName;
    const updatedPhotoURL = profile.photoURL.trim() || user?.photoURL;

    updateUserProfile(updatedName, updatedPhotoURL)
      .then(() => {
        swal("Success", "Profile updated successfully!", "success");
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
        swal("OPPS!", "Failed to update profile. Try again later.", "error");
      });
  };

  // Sync user data with profile state when user data is available
  useEffect(() => {
    if (user) {
      setProfile({
        displayName: user.displayName || "",
        photoURL: user.photoURL || "",
      });
    }
  }, [user]);

  if (loader) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="spinner-border animate-spin border-t-2 border-blue-500 w-16 h-16 border-solid rounded-full"></div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>MyProfile | Career Campus</title>
      </Helmet>

      <section>
        <div className="md:flex item gap-6 mt-6 mb-24 px-4 xl:px-0">
          <div className="user_profile_side md:w-6/12 mx-auto border-4 p-4 border-orange-200 shadow-xl">
            <div className="lg:flex items-center gap-5">
              <div className="user_profile_img h-[180px] lg:w-[120px] lg:h-[120px] mb-4 lg:mb-4">
                {user?.photoURL ? (
                  <img
                    className=" w-full h-full rounded-md object-cover outline outline-2 outline-orange-400"
                    src={user.photoURL}
                    alt="user_img"
                  />
                ) : (
                  <div className="h-[180px] lg:w-[120px] lg:h-[120px]">
                    <FaUser className="w-full h-full rounded-md object-cover bg-gray-500 outline outline-4 outline-orange-400" />
                  </div>

                )}
              </div>
              <div>
                <h2 className="text-xl md:text-3xl font-bold">{user?.displayName || "Anonymous User"}</h2>
                <p className="text-sm font-light mt-2">User Status: Diamond</p>
              </div>
            </div>

            <div className="user_others_information pl-4 mt-5 space-y-2 overflow-x-scroll">
              <h2 className="text-xl font-bold flex items-center gap-2">
                Email: <span className="text-lg font-light">{user?.email || "N/A"}</span>
              </h2>
              <h2 className="text-xl font-bold flex items-center gap-2  w-full">
                PhotoURL: <span className="text-lg font-light">{user?.photoURL || "N/A"}</span>
              </h2>
            </div>
          </div>

          <div className="profile_update_side md:w-6/12 mx-auto">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mt-8">Update Your Profile</h2>
            </div>

            <form className="mt-8" onSubmit={handleUpdateUserProfile}>
              <div className="mt-2">
                <label className="w-full">
                  <span className="text-xl font-semibold pb-2">Your Name:</span>
                  <input
                    name="displayName"
                    type="text"
                    value={profile.displayName}
                    onChange={handleInputChange}
                    placeholder="Update your name"
                    className="input bg-[#f3f3f3] w-full"
                  />
                </label>
              </div>

              <div className="mt-2">
                <label className="w-full">
                  <span className="text-xl font-semibold pb-2">Photo URL:</span>
                  <input
                    name="photoURL"
                    type="text"
                    value={profile.photoURL}
                    onChange={handleInputChange}
                    placeholder="Enter your photo URL"
                    className="input bg-[#f3f3f3] w-full"
                  />
                </label>
              </div>

              <div className="pb-2 mt-5">
                <button
                  type="submit"
                  className="btn text-white bg-orange-400 hover:bg-black z-20 hover:bg-opacity-70 w-full"
                >
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyProfile;


