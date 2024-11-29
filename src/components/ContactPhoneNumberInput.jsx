import { useState } from "react";
import { useTranslation } from "react-i18next";
export default function ContactPhoneNumberInput() {
  const { t } = useTranslation();
  const [phoneNumber, setPhoneNumber] = useState("");
  function maskPhone(phoneNumber) {
    return phoneNumber
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{3})(\d)/, "$1-$2")
      .replace(/(-\d{2})(\d)/, "$1-$2")
      .replace(/(-\d{2})(\d+?)$/, "$1");
  }
  return (
    <div className="mb-5 text-xs lg:text-xl">
      <div className="mb-1">
        <label className="font-medium" htmlFor="phoneNumber">
          {t("modalPhone")}
        </label>
      </div>
      <div className="flex">
        <label
          className="rounded-l-md border border-black_10 bg-light-gray text-black"
          htmlFor="phoneNumber"
        >
          <span className="block p-2 font-medium lg:p-5">+998</span>
        </label>
        <input
          className="w-full rounded-r-md bg-contact-input-cl px-3 py-2 tracking-[2%] placeholder:text-black_50 focus:outline-none lg:px-4 lg:py-5"
          placeholder="(90) 123-45-67"
          id="phoneNumber"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(maskPhone(e.target.value))}
          type="text"
          required
        />
      </div>
    </div>
  );
}
