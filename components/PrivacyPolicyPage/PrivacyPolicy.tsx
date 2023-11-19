"use client";

import { useAppContext } from "@/context/AppContext";
import { dictionary } from "@/content";

const PrivacyPolicy = () => {
  const { state } = useAppContext();
  return (
    <section className="py-[10rem] lg:py-[12rem] px-[1.2rem] md:px-[5rem] lg:px-[7rem] ">
      <h1 className="text-[2rem] lg:text-[2.2rem] font-bold text-[#5783C3]">
        {dictionary[state]?.privacyPolicy}
      </h1>
      <p className="mt-[0.5rem] font-bold lg:text-[1.1rem]">
        {`${dictionary[state]?.lastUpdate} 17-Nov-2023`}
      </p>
      <p className="mt-[0.5rem] font-bold lg:text-[1.1rem]">
        {`${dictionary[state]?.effectiveDate} 17-Nov-2023`}
      </p>

      <p className="mt-[2rem] lg:text-[1.1rem]">
        {dictionary[state]?.privacyp1}
      </p>

      <p className="mt-[2rem] lg:text-[1.1rem]">
        {dictionary[state]?.privacyp2}
      </p>

      <ol className="privacy-policy-ol">
        <li>
          <h2 className="text-[2rem] lg:text-[2.2rem] font-bold text-[#5783C3] mt-[3rem]">
            {dictionary[state]?.infoWeCollect}
          </h2>

          <p className="mt-[0.5rem] lg:text-[1.1rem]">
            {dictionary[state]?.infoWeCollectP}
          </p>
          <ol className="font-bold uppercase space-y-[0.5rem] underline mt-[1rem] lg:text-[1.1rem]">
            <li> {dictionary[state]?.name}</li>

            <li> {dictionary[state]?.email}</li>

            <li> {dictionary[state]?.mobile}</li>
          </ol>
        </li>

        <li>
          <h2 className="text-[2rem] lg:text-[2.2rem] font-bold text-[#5783C3] mt-[3rem]">
            {dictionary[state]?.howInfo}
          </h2>
          <p className="mt-[0.5rem] lg:text-[1.1rem]">
            {dictionary[state]?.howInfo2}
          </p>
          <ol className="font-bold mt-[1rem] lg:text-[1.1rem]">
            <li> {dictionary[state]?.howInfo3}</li>

            <li> {dictionary[state]?.howInfo4}</li>
          </ol>
          <p className="privacy-policy-p mt-[1rem] lg:text-[1.1rem]">
            {dictionary[state]?.howInfo5}
          </p>
        </li>

        <li>
          <h2 className="text-[2rem] lg:text-[2.2rem] font-bold text-[#5783C3] mt-[3rem]">
            {dictionary[state]?.retention}
          </h2>
          <p className="mt-[0.5rem] lg:text-[1.1rem]">
            {" "}
            {dictionary[state]?.retentionP}
          </p>
        </li>

        <li>
          <h2 className="text-[2rem] lg:text-[2.2rem] font-bold text-[#5783C3] mt-[3rem]">
            {dictionary[state]?.yourRights}
          </h2>
          <p className="mt-[0.5rem] lg:text-[1.1rem]">
            {dictionary[state]?.yourRightsP}
          </p>

          <p className="mt-[0.5rem] lg:text-[1.1rem]">
            {dictionary[state]?.yourRightsP2}
          </p>
        </li>
        <li>
          <h2 className="text-[2rem] lg:text-[2.2rem] font-bold text-[#5783C3] mt-[3rem]">
            {dictionary[state]?.cookies}
          </h2>
          <p className="mt-[0.5rem] lg:text-[1.1rem]">
            {dictionary[state]?.cookiesP}{" "}
            <a href="/" className="text-[#5783C3] font-bold underline">
              {dictionary[state]?.cookiesPolicy}
            </a>
          </p>
        </li>

        <li>
          <h2 className="text-[2rem] lg:text-[2.2rem] font-bold text-[#5783C3] mt-[3rem]">
            {dictionary[state]?.security}
          </h2>
          <p className="mt-[0.5rem] lg:text-[1.1rem]">
            {dictionary[state]?.securityP}
          </p>
        </li>

        <li>
          <h2 className="text-[2rem] lg:text-[2.2rem] font-bold text-[#5783C3] mt-[3rem]">
            {dictionary[state]?.dpo}
          </h2>
          <p className="mt-[0.5rem] lg:text-[1.1rem]">
            {dictionary[state]?.dpoP}
          </p>
        </li>
      </ol>
      <p className="mt-[3rem] font-bold lg:text-[1.1rem]">
        {dictionary[state]?.policyGenerate}{" "}
        <a
          className="text-[#5783C3] underline"
          target="_blank"
          href="https://www.cookieyes.com/?utm_source=PP&utm_medium=footer&utm_campaign=UW"
        >
          CookieYes
        </a>
        .
      </p>
    </section>
  );
};

export default PrivacyPolicy;
