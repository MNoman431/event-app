import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile, updateProfile } from "../../Redux/thunks/ProfileThunk";

const Profile = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.profile);

  const [formData, setFormData] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdate = () => {
    dispatch(updateProfile(formData));
    setIsEditing(false);
  };

  if (loading) return <p className="text-center mt-20 text-yellow-600 font-medium text-lg">Loading...</p>;
  if (error) return <p className="text-center mt-20 text-red-600 font-medium">{error.message || error}</p>;
  if (!data) return <p className="text-center mt-20 text-gray-600">No profile data found.</p>;

  return (
    <div className="max-w-xl mx-auto mt-12 bg-white shadow-xl p-8 rounded-2xl border border-gray-200">
      <h2 className="text-3xl font-bold mb-6 text-center text-yellow-600 tracking-wide">
        {isEditing ? "Edit Your Profile" : "My Profile"}
      </h2>

      <div className="space-y-5">
        {["firstname", "lastname", "email", "gender", "type", "city", "number"].map((field) => (
          <div key={field}>
            <label className="block text-gray-700 font-semibold capitalize mb-1">
              {field.replace(/([A-Z])/g, " $1")}
            </label>

            {isEditing ? (
              <input
                type="text"
                name={field}
                value={formData[field] || ""}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />
            ) : (
              <p className="text-gray-800 border border-gray-200 rounded-md px-4 py-2 bg-gray-50">
                {data[field]}
              </p>
            )}
          </div>
        ))}

        {/* Buttons */}
        <div className="flex justify-between gap-4 pt-4">
          {isEditing ? (
            <>
              <button
                onClick={handleUpdate}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-md transition"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="w-full bg-gray-200 hover:bg-gray-300 text-black font-semibold py-2 rounded-md transition"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg shadow-md transition"
            >
              Update Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
