import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { CiBoxList } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { CiCreditCard1 } from "react-icons/ci";
import { BsChat } from "react-icons/bs";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaCircle } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { CiLink } from "react-icons/ci";
import { IoCall } from "react-icons/io5";
import { FaScrewdriver } from "react-icons/fa";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ImCheckboxChecked } from "react-icons/im";
import { FaCaretSquareUp } from "react-icons/fa";

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
            {allOpen ? (
              <>
                <div className="flex items-start justify-center gap-10 mt-6">
                  {/* first section */}
                  <div className="w-full">
                    {/* first */}
                    <div className="bg-gray-900 p-4 mb-4 flex flex-col gap-4 ">
                      <div className="flex text-2xl justify-between items-center px-2 py-1">
                        <div className="">
                          <CiBoxList className="inline mr-6 " />
                          Name & Company
                        </div>
                        <div>
                          <FaCaretSquareUp />
                        </div>
                      </div>
                      <table className="min-w-full table-auto border-collapse ">
                        <tbody>
                          <tr className="bg-black">
                            <td className="px-4 py-2 ">Name:</td>
                            <td className="px-4 py-2 ">
                              {data.profileInfo.name}
                            </td>
                          </tr>
                          <tr className="bg-gray-900">
                            <td className="px-4 py-2 ">Company Name:</td>
                            <td className="px-4 py-2 "></td>
                          </tr>
                          <tr className="bg-black">
                            <td className="px-4 py-2 ">In Business Since:</td>
                            <td className="px-4 py-2 ">01/17/2006</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* second */}
                    <div className="bg-gray-900 p-4 mb-4 flex flex-col gap-4 ">
                      <div className="flex justify-between text-2xl items-center px-2 py-1">
                        <div>
                          {" "}
                          <FaLocationDot className="inline mr-6" />
                          Billing
                        </div>
                        <div>
                          <FaCaretSquareUp />
                        </div>
                      </div>
                      <div className="flex gap-2 ml-auto items-center">
                        <div>Preferred</div>
                        <ImCheckboxChecked />
                      </div>
                      <table className="min-w-full table-auto border-collapse ">
                        <tbody>
                          <tr className="bg-black">
                            <td className="px-4 py-2 ">Address 1:</td>
                            <td className="px-4 py-2 ">
                              {data.details.billingAddress.address1}
                            </td>
                          </tr>
                          <tr className="bg-gray-900">
                            <td className="px-4 py-2 ">Address 2:</td>
                            <td className="px-4 py-2 "></td>
                          </tr>
                          <tr className="bg-black">
                            <td className="px-4 py-2 ">City:</td>
                            <td className="px-4 py-2 ">
                              {data.details.billingAddress.city}
                            </td>
                          </tr>
                          <tr className="bg-gray-900">
                            <td className="px-4 py-2 ">State:</td>
                            <td className="px-4 py-2 ">
                              {data.details.billingAddress.state}
                            </td>
                          </tr>
                          <tr className="bg-black">
                            <td className="px-4 py-2 ">Zip:</td>
                            <td className="px-4 py-2 ">
                              {data.details.billingAddress.zip}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* third */}
                    <div className="bg-gray-900 p-4 mb-4 flex flex-col gap-4 ">
                      <div className="flex text-2xl justify-between items-center px-2 py-1">
                        <div>
                          <FaLocationDot className="inline mr-6" />
                          Shipping
                        </div>
                        <div>
                          <FaCaretSquareUp />
                        </div>
                      </div>
                      <div className="flex gap-2 ml-auto items-center">
                        <div>Preferred</div>
                        <ImCheckboxChecked />
                      </div>
                      <table className="min-w-full table-auto border-collapse ">
                        <tbody>
                          <tr className="bg-black">
                            <td className="px-4 py-2 ">Address 1:</td>
                            <td className="px-4 py-2 ">
                              {data.details.shippingAddress.address1}
                            </td>
                          </tr>
                          <tr className="bg-gray-900">
                            <td className="px-4 py-2 ">Address 2:</td>
                            <td className="px-4 py-2 "></td>
                          </tr>
                          <tr className="bg-black">
                            <td className="px-4 py-2 ">City:</td>
                            <td className="px-4 py-2 ">
                              {data.details.shippingAddress.city}
                            </td>
                          </tr>
                          <tr className="bg-gray-900">
                            <td className="px-4 py-2 ">State:</td>
                            <td className="px-4 py-2 ">
                              {data.details.shippingAddress.state}
                            </td>
                          </tr>
                          <tr className="bg-black">
                            <td className="px-4 py-2 ">Zip:</td>
                            <td className="px-4 py-2 ">
                              {data.details.shippingAddress.zip}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* fourth */}
                    <div className="bg-gray-900 p-4 mb-4 flex flex-col gap-4 ">
                      <div className="flex justify-between text-2xl  items-center px-2 py-1">
                        <div>
                          <CiCreditCard1 className="inline mr-6" />
                          Pricing Information
                        </div>
                        <div>
                          <FaCaretSquareUp />
                        </div>
                      </div>

                      <table className="min-w-full table-auto border-collapse">
                        <thead>
                          <tr>
                            <th className="px-4 py-2 border-b">Description</th>
                            <th className="px-4 py-2 border-b">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-black text-white">
                            <td className="px-4 py-2">Shipping Fee</td>
                            <td className="px-4 py-2">$10</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">Handling Fee</td>
                            <td className="px-4 py-2">$5</td>
                          </tr>
                          <tr className="bg-black text-white">
                            <td className="px-4 py-2">Tax</td>
                            <td className="px-4 py-2">$3</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">Product A</td>
                            <td className="px-4 py-2">$50</td>
                          </tr>
                          <tr className="bg-black text-white">
                            <td className="px-4 py-2">Product B</td>
                            <td className="px-4 py-2">$30</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">Discount</td>
                            <td className="px-4 py-2">-$10</td>
                          </tr>
                          <tr className="bg-black text-white">
                            <td className="px-4 py-2">Total</td>
                            <td className="px-4 py-2">$88</td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="flex flex-col items-center justify-center">
                        <p>Other Pricing Notes</p>
                        <p>
                          Rates are flexible and very depending on distance and
                          time of day. Rates may be renegotioted at time of
                          hiring.
                        </p>
                      </div>
                    </div>

                    {/* fifth */}
                    <div className="bg-gray-900 p-4 mb-4 flex flex-col gap-4 ">
                      <div className="flex text-2xl justify-between items-center px-2 py-1">
                        <div>
                          <BsChat className="inline mr-6" />
                          Spoken Languages
                        </div>
                        <div>
                          <FaCaretSquareUp />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        {data.details.spokenLanguages &&
                        data.details.spokenLanguages.length > 0 ? (
                          <ul className="list-disc text-left">
                            {data.details.spokenLanguages.map(
                              (language, index) => (
                                <p key={index} className="py-1">
                                  <div className="w-[580px] px-6 py-2 rounded-md bg-black">
                                    {language}
                                  </div>
                                </p>
                              )
                            )}
                          </ul>
                        ) : (
                          <p>No languages available</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* second section */}
                  <div className="w-full">
                    {/* first */}
                    <div className="bg-gray-900 p-4 mb-4 flex flex-col gap-4 ">
                      <div className="flex justify-between text-2xl items-center px-2 py-1">
                        <div>
                          <IoCall className="mr-6 inline" />
                          Phone Numbers
                        </div>
                        <div>
                          <FaCaretSquareUp />
                        </div>
                      </div>

                      <table className="min-w-full table-auto border-collapse">
                        <thead>
                          <tr>
                            <th className="px-4 py-2 border-b">Type</th>
                            <th className="px-4 py-2 border-b">Number</th>
                            <th className="px-4 py-2 border-b">Ext.</th>
                            <th className="px-4 py-2 border-b">Pref</th>
                            <th className="px-4 py-2 border-b">Text</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-black text-white">
                            <td className="px-12 py-2">Mobile</td>
                            <td className="px-12 py-2">123456789</td>
                            <td className="px-12 py-2"></td>
                            <td className="px-12 py-2">
                              <ImCheckboxChecked />
                            </td>
                            <td className="px-12 py-2">
                              <MdOutlineCheckBoxOutlineBlank />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="flex flex-col items-start justify-center">
                        <p>Other Contact Info </p>
                        <p>Text me @ 415-730-9899</p>
                      </div>
                    </div>

                    {/* second */}
                    <div className="bg-gray-900 p-4 mb-4 flex flex-col gap-4 ">
                      <div className="flex text-2xl justify-between items-center px-2 py-1">
                        <div>
                          <MdAlternateEmail className="mr-6 inline" />
                          Emails Address
                        </div>
                        <div>
                          <FaCaretSquareUp />
                        </div>
                      </div>

                      <table className="min-w-full table-auto border-collapse">
                        <thead>
                          <tr>
                            <th className="px-4 py-2 border-b">Type</th>
                            <th className="px-4 py-2 border-b">Address</th>
                            <th className="px-4 py-2 border-b">Preferred</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-black text-white">
                            <td className="px-14 py-2">Work</td>
                            <td className="px-14 py-2">akdpp@gmail.com</td>
                            <td className="px-14 py-2">
                              <ImCheckboxChecked />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="flex flex-col items-start justify-center">
                        <p>Other Contact Info </p>
                        <p>Text me @ 415-730-9899</p>
                      </div>
                    </div>

                    {/* third */}
                    <div className="bg-gray-900 p-4 mb-4 flex flex-col gap-4 ">
                      <div className="flex justify-between text-2xl items-center px-2 py-1">
                        <div>
                          <CiLink className="mr-6 inline" />
                          Document Links
                        </div>
                        <div>
                          <FaCaretSquareUp />
                        </div>
                      </div>

                      <table className="min-w-full table-auto border-collapse">
                        <thead>
                          <tr>
                            <th className="px-4 py-2 border-b">Type</th>
                            <th className="px-4 py-2 border-b">URL</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-black text-white">
                            {data.details.documentLinks &&
                            data.details.documentLinks.length > 0 ? (
                              <>
                                {data.details.documentLinks.map(
                                  (item, index) => (
                                    <>
                                      <td>{item.documentType}</td>
                                    </>
                                  )
                                )}
                              </>
                            ) : null}
                          </tr>
                          <tr className="bg-black text-white">
                            {data.details.documentLinks &&
                            data.details.documentLinks.length > 0 ? (
                              <>
                                {data.details.documentLinks.map(
                                  (item, index) => (
                                    <>
                                      <td>{item.url}</td>
                                    </>
                                  )
                                )}
                              </>
                            ) : null}
                          </tr>
                        </tbody>
                      </table>
                      <div className="flex flex-col items-start justify-center">
                        <p>Other Contact Info </p>
                        <p>Text me @ 415-730-9899</p>
                      </div>
                    </div>

                    {/* fifth */}
                    <div className="bg-gray-900 p-4 mb-2 flex flex-col gap-4 ">
                      <div className="flex text-2xl justify-between items-center px-2 py-1">
                        <div>
                          <FaScrewdriver className="inline mr-6" />
                          Capabilities
                        </div>
                        <div>
                          <FaCaretSquareUp />
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div className="flex gap-1 items-center">
                          <p>csa</p>
                          <ImCheckboxChecked />
                        </div>
                        <div className="flex gap-1 items-center">
                          <p>attorney</p>
                          <ImCheckboxChecked />
                        </div>
                        <div className="flex gap-1 items-center">
                          <p>fax</p>
                          <MdOutlineCheckBoxOutlineBlank />
                        </div>
                        <div className="flex gap-1 items-center">
                          <p>email</p>
                          <ImCheckboxChecked />
                        </div>
                        <div className="flex gap-1 items-center">
                          <p>internet</p>
                          <ImCheckboxChecked />
                        </div>
                        <div className="flex gap-1 items-center">
                          <p>mobileHotspot</p>
                          <ImCheckboxChecked />
                        </div>
                        <div className="flex gap-1 items-center">
                          <p>eSign</p>
                          <ImCheckboxChecked />
                        </div>
                        <div className="flex gap-1 items-center">
                          <p>scanbacks</p>
                          <ImCheckboxChecked />
                        </div>
                        <div className="flex gap-1 items-center">
                          <p>print</p>
                          <ImCheckboxChecked />
                        </div>
                      </div>

                      <div className="flex flex-col items-start justify-center">
                        <p>Other Capability Information </p>
                        <p>Two HP Dual laser printers and scanners</p>
                      </div>
                    </div>

                    {/* sixth */}
                    <div className="bg-gray-900 p-4 mb-4 flex flex-col gap-4 ">
                      <div className="flex text-2xl justify-between items-center px-2 py-1">
                        <div>
                          <HiOutlineDesktopComputer className="inline mr-6 " />
                          Websites
                        </div>
                        <div>
                          <FaCaretSquareUp />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        {data.details.websites &&
                        data.details.websites.length > 0 ? (
                          <ul className="list-disc  text-left ">
                            {data.details.websites.map((web, index) => (
                              <p key={index} className="py-1">
                                <div className="w-[580px] px-6 py-2 rounded-md bg-black">
                                  {web}
                                </div>
                              </p>
                            ))}
                          </ul>
                        ) : (
                          <p>No languages available</p>
                        )}
                      </div>
                    </div>

                    {/* seventh */}
                    <div className="bg-gray-900 p-4 mb-4 flex flex-col gap-4 ">
                      <div className="flex text-2xl justify-between items-center px-2 py-1">
                        <div>
                          <FaCircle className="inline mr-6" />
                          Custom Fields
                        </div>
                        <div>
                          <FaCaretSquareUp />
                        </div>
                      </div>
                      <table className="min-w-full table-auto border-collapse ">
                        <tbody>
                          <tr className="bg-black">
                            <td className="px-4 py-2 ">Field 1:</td>
                            <td className="px-4 py-2 ">
                              {data.details.customFields.field1}
                            </td>
                          </tr>
                          <tr className="bg-black ">
                            <td className="px-4 py-2 ">Field 2:</td>
                            <td className="px-4 py-2 ">
                              {data.details.customFields.field1}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
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
