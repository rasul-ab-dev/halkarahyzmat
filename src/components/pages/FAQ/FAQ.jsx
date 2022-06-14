import React, { useState } from "react";
import ContactUs from "../../contact_us/contact_us";
// import Details from "../../details";
import "./FAQ.css";

const Faq = () => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="quiz">
      <div className="container">
        <p className="quiz_title">
          Terms and conditions of purchase and export of goods from Turkmenistan
        </p>
        <details className="quiz_details">
          <summary>Option 1</summary>
          <div className="option_wrapper">
            <p className="step_title">
              Step 1. Registration (legalization) of your company at the State
              Commodity and Raw Materials Exchange of Turkmenistan (SCRMET) and
              the acquisition of a brokerage seats.
            </p>
            <p className="step_subtitle">
              This procedure takes from 2 (two) up to 4 (four) weeks, depending
              on compliance with all necessary procedures by your company. We
              register your (foreign) company at the SCRMET (the procedures and
              the list of required documents for registration can be found on
              the official website of SCRMET). After providing all the necessary
              documents, including an official (notarized) power of attorney in
              the name of our employee, we will register / legalize your company
              in Turkmenistan to conclude a contract with local manufacturers /
              companies and acquire a brokerage seats to participate auctions
              held by SCRMET. Please, kindly note that SCRMET issues an invoice
              to acquire a brokerage seats in SCRMET in the name of your
              company. Also, SCRMET issues an invoice to replenish the deposit
              account of your company in the SCRMET. Buyer should pay these
              invoices within 14 (fourteen) days and sends us the copies of
              payment slips, confirming the payment to provide them to SCRMET.
              After, your company will be ready to buy goods from State
              producers / companies of Turkmenistan.
            </p>
            <p className="step_title">
              Step 2. Participation of your company in the auctions held by
              SCRMET.
            </p>
            <p className="step_subtitle">
              Weekdays, goods for purchase and export from Turkmenistan are put
              up for auction (you can also see a complete list of goods on the
              official website of the SCRMET). You provide us the necessary data
              for participation in auctions, by filling out the request letter
              for purchase and export of goods from Turkmenistan and send it to
              our electronic mail address (e-mail): info@hyzm.at Please, kindly
              note that some State manufacturers / companies of Turkmenisan set
              their own minimum requirements for the mentioned points in
              request, which you can check with us in advance.
            </p>
            <p className="step_title">
              Step 3. Buy the necessary goods at the auction held by SCRMET.
            </p>
            <p className="step_subtitle">
              After agreeing terms with you, we participate in auctions and
              purchase the necessary goods on behalf of your company and
              directly to your company.
            </p>
            <p className="step_title">
              Step 4. Payment of Exchange fees and conclusion of a contract with
              Manufacturers.
            </p>
            <p className="step_subtitle">
              After a successful purchase of goods at the auction, SCRMET will
              issue an invoice for exchange fees in the amount of 0.2 / 0.4% of
              the total cost of your contract. After paying an invoice, the
              State manufacturer / company prepares the draft of official
              contract and other conditions are being negotiated. Then, the
              official purchase contract of your company with the State
              manufacturers / companies of Turkmenistan is being concluded. The
              final signed version of the contract (in 4 original copies) is
              being sent for verification and registration to SCRMET. After
              registering your contract at SCRMET, the State manufacturer /
              company issue an invoice for advance payment in the name of your
              company, according to the payment terms agreed in the contract,
              which is paid by your company to the foreign currency account of
              the State manufacturer / company. Thus, your goods are ready for
              shipment. Please, kindly note that the invoice issued for
              prepayment depends on the conditions of purchase at the auction
              and / or stipulated in the contract, which can be not less than
              50% up to 100%.
            </p>
            <p className="step_title">
              Step 5. Logistics / transportation of goods.
            </p>
            <p className="step_subtitle">
              If the terms of delivery of the goods you required differ from the
              provided by the State manufacturer / company, we will be happy to
              transport the goods to your desired destination. You can ask us in
              advance for estimated prices for transporting goods by road / rail
              / sea.
            </p>
          </div>
        </details>
        <details className="quiz_details">
          <summary>Option 2</summary>
          <div className="option_wrapper">
            <p className="step_subtitle">
              Often, it happens that required goods need to be shipped
              immediately and you do not have time for registration
              (legalization) of your company and acquisition of brokerage seats
              on SCRMET. In this case, you will have to purchase the goods not
              directly from the State manufacturers / companies of Turkmenistan,
              but from foreign companies which have previously bought, but still
              not exported the goods you require. For few years, we have been
              engaged in providing consulting, transport and logistics services
              to many large foreign companies. We have a big customer base and
              excellent partnership relations with them. We will help you to buy
              the goods you require from our foreign partners.
            </p>
            <p className="step_title">
              Step 1. Provide us with information about required goods.
            </p>
            <p className="step_subtitle">
              To implement this option of purchasing goods from Turkmenistan,
              you need to fill out the request letter for purchase and export of
              goods from Turkmenistan and send it to our company’s electronic
              mail address (e-mail): info@hyzm.at
            </p>
            <p className="step_title">
              Step 2. We are waiting for a response from foreign companies / our
              partners.
            </p>
            <p className="step_subtitle">
              After providing information, we redirect your request to our
              foreign partners.
            </p>
            <p className="step_title">Step 3. Negotiations with the Seller.</p>
            <p className="step_subtitle">
              We will give you the conditions under which foreign companies /
              our partners are ready to sell you previously purchased goods. At
              this stage, we will try to protect your interests as much as
              possible and minimize the price of the obtained goods.
            </p>
            <p className="step_title">
              Step 4. Conclusion of a contract with the Seller.
            </p>
            <p className="step_subtitle">
              After successful negotiations with the Seller, he will send you a
              draft (project) of the contract with all its conditions. As a
              result, you will conclude a direct purchase contract with a
              foreign company.
            </p>
            <p className="step_title">
              Step 5. Logistics / transportation of goods.
            </p>
            <p className="step_subtitle">
              If the terms of delivery of the goods you required differ from the
              provided by the Seller, we will be happy to transport the goods to
              your desired destination. You can ask us in advance for estimated
              prices for transporting goods by road / rail / sea.
            </p>
            <p className="step_title">
              We will be happy to cooperate with you by any means, because we
              are here exactly for this reason! For successful purchase and
              export of goods from Turkmenistan, you just need to contact us.
            </p>
          </div>
        </details>
      </div>
      <ContactUs />
    </section>
  );
};

export default Faq;
