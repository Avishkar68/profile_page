import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

function Profile() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [allOpen, setAllOpen] = useState(true);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.thenotary.app/directory/customerDetails?username=nandha"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormError("All fields are required.");
    } else {
      setFormError("");
      // Submit form data, e.g., send it to an API or backend
      console.log("Form Data: ", formData);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 font-[Poppins]">
      <div className="bg-black text-white w-[90vw] p-6 rounded-md shadow-lg">
        {error && <p className="text-red-500">Error: {error}</p>}

        {data ? (
          <div>
            {/* First Section */}
            <div className="flex my-2 mx-2 items-center">
              <div>
                <img
                  className="w-[100vw] aspect-square rounded-full"
                  src={data.profileInfo.imageURL}
                  alt="Profile"
                />
              </div>
              <div className="my-2 mx-10">
                <div className="border-b-2">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-4 items-center justify-center">
                      <div className="text-4xl font-bold font-[Parkinsans]">
                        {data.profileInfo.name}
                      </div>
                      <div className="bg-orange-600 h-fit flex items-center justify-center w-fit px-[4px] gap-1 rounded-md">
                        <FaStar className="text-orange-400" />
                        <span className="font-semibold">Pro</span>
                      </div>
                    </div>
                    <div className="text-end pb-2">
                      <p>Zip codes: 91230, 2345, 5435</p>
                      <p>123 Main Street</p>
                      <p>Springfield, IL 62701</p>
                      <p>India</p>
                    </div>
                  </div>
                  <div className="text-xl font-semibold pb-1">
                    {data.profileInfo.bio}
                  </div>
                </div>
                <div className="pt-1">
                  Meet Nandha Kumar, a highly experienced notary with over a
                  decade of expertise in the field. Based in the vibrant Bay
                  Area, San Francisco, Nandha has built a reputation for
                  reliability, professionalism, and exceptional service. With a
                  proven track record, he has assisted countless individuals and
                  businesses with notarial services, offering convenience and
                  precision. Nandha's professional capabilities go beyond basic
                  notarial work. He is well-versed in modern notary
                  requirements, with proficiency in eSignatures, scanbacks,
                  internet-based services, and mobile hotspots. Additionally, he
                  is available six days a week and is flexible with both morning
                  and evening appointments, making him a reliable partner for
                  time-sensitive and critical document handling.
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="mt-10 bg-gray-900 p-6 flex items-start justify-start gap-40  ">
              <h3 className="text-2xl font-semibold mb-4">Contact Nandha</h3>
              {formError && <p className="text-red-500 mb-4">{formError}</p>}
              <form onSubmit={handleSubmit} className="flex gap-10  ">
                <div className="flex flex-col  gap-5">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-sm mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="p-2 border-none outline-none text-black rounded-md"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-sm mb-2">
                      E-mail (From)
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="p-2 border-none outline-none text-black rounded-md"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                <div>
                  <div className="flex flex-col">
                    <label htmlFor="message" className="text-sm mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="p-2 w-96 border-none outline-none text-black rounded-md"
                      placeholder="Write your message here"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className=" mt-16  px-8 py-3 h-fit bg-black text-white rounded-lg"
                >
                  Send
                </button>
              </form>
            </div>

            {/* open details button */}
            <div>
              {allOpen ? (
                <button
                  onClick={(allOpen) => setAllOpen(false)}
                  className="flex items-center justify-center mt-4  ml-auto"
                >
                  Collapse All
                  <FaAngleUp className="text-xl" />
                </button>
              ) : (
                <button
                  onClick={(allOpen) => setAllOpen(true)}
                  className="flex items-center justify-center mt-4 ml-auto "
                >
                  Open All Details
                  <FaAngleDown className="text-xl" />
                </button>
              )}
            </div>

            {/* details section */}
            <div></div>
            <div></div>

          </div>
        ) : error ? (
          <p>Failed to fetch data</p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Profile;
