import { useTranslation } from "react-i18next";
import getFormData from "../utils/get-form-data";
import getFormattedNumber from "../utils/get-formatted-number";
import ContactPhoneNumberInput from "./ContactPhoneNumberInput";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function ContactModal() {
  const notify = () => {
    toast.success("Tasdiqlandi", {
      position: "top-right",
      autoClose: 1700,
    });
  };
  const { t } = useTranslation();
  function sendMessage(message) {
    let token = "6895001662:AAGSBWfiC0kxaKu4yynkrIiqgY3jbjmaI3A";
    let chatId = "-1002090622302";
    let name = message.firstName;
    let phone = message.phoneNumber;
    let text = `<blockquote><b>${name}</b></blockquote>%2B${phone}`;

    let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${text}&parse_mode=HTML`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("Xabar yuborildi:", data);
      })
      .catch((error) => {
        console.error("Xabar yuborishda xatolik:", error);
      });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const data = getFormData(e.target);
    data.phoneNumber = getFormattedNumber(data.phoneNumber);
    // send(data);
    sendMessage(data);
    console.log(data);
    e.target.reset();
    document.querySelector("#phoneNumber").value = "";
  }

  function handleModal(e) {
    e.target.classList.toggle("show");
  }

  return (
    <>
      <div
        className="group pointer-events-none fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-black_50 font-poppins opacity-0 backdrop-blur-[2px] transition-all duration-300"
        id="contactModal"
        onClick={handleModal}
      >
        <div className="w-full max-w-[300px] translate-y-10 overflow-hidden rounded-2xl bg-white p-6 opacity-0 transition-all duration-500 group-[.show]:translate-y-0 group-[.show]:opacity-100 lg:max-w-[500px] lg:p-10">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-2 text-xs lg:text-xl">
              <div className="mb-1">
                <label className="font-medium" htmlFor="phoneNumber">
                  {t("modalName")}
                </label>
              </div>
              <input
                className="w-full rounded-md bg-contact-input-cl px-3 py-2 tracking-[2%] placeholder:text-black_50 focus:outline-none  lg:px-4 lg:py-5"
                placeholder={t("modalName")}
                id="firsrName"
                name="firstName"
                type="text"
                required
                minLength="3"
              />
            </div>
            <ContactPhoneNumberInput />
            <button
              onClick={() => {
                contactModal.classList.toggle("show");
                notify();
              }}
              className="btn-orange mb-3"
              type="submit"
            >
              Yuborish
            </button>
          </form>
          <button
            onClick={() => {
              contactModal.classList.toggle("show");
            }}
            className="mb-3 block w-full rounded-md bg-[#CB0000] p-[10px] text-center text-[10px] text-white no-underline lg:text-lg"
            type="submit"
          >
            Yopish
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
