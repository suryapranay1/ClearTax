import React from "react";
import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-text">
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="FAQ">
        {questionsAndAnswers.map((qa, index) => (
          <div key={index}>
            <div className="question">
              <h3>{qa.question}</h3>
            </div>
            <div className="answer">
              <h6>{qa.answer}</h6>
            </div>
          </div>
        ))}
        <div className="queries">
          <h2>Have queries? Visit our support center</h2>
        </div>
      </div>
    </div>
  );
};

const questionsAndAnswers = [
  {
    question: "Who should file an ITR?",
    answer: "An individual whose annual income is more than the basic exemption limit of Rs 2.5 lakh should file an ITR. The basic exemption limit for senior citizens (60 years onwards and less than 80 years) is Rs 3 lakh, and for super senior citizens is Rs 5 lakh."
  },
  {
    question: "How can I claim deductions for tax saving?",
    answer: "You should file an income tax return to claim tax deductions for tax savings such as ELSS, PPF, NSC investments and for payments such as housing loan repayments, insurance premium and donations."
  },
  {
    question: "I receive my salary income after deduction of TDS. Am I required to file an income tax return?",
    answer: "You are required to file an income tax return once your annual income exceeds Rs 2.5 lakh. A deduction of TDS does not replace the requirement to file ITR. While e-filing your ITR, you should furnish the details of your annual income, claim deductions and credit for TDS deducted by your employer."
  },
  {
    question: "How do I check TDS details from my form 26AS?",
    answer: "You can check your Form 26AS from your e-filing login. ClearTax’s e-filing software auto-populates the TDS details from your Form 26AS in your income tax return."
  },
  {
    question: "How can I claim an income tax refund?",
    answer: "You can claim an income tax refund by e-filing your income tax return. An e-filing enables you to claim credit for excess TDS paid and a tax refund."
  },
  {
    question: "Is my data filed with ClearTax secure?",
    answer: "ClearTax uses a 128 bit SSL encryption for transmission of data and enables complete data privacy. Also, ClearTax does not share its data with unaffiliated third parties."
  },
  {
    question: "What are the GST services offered by ClearTax?",
    answer: "ClearTax provides ClearTax GST filing software for accurate GST filing, reconciliation and claiming ITC. ClearTax GST facilitates the generation of e-invoices and e-way bill."
  },
  {
    question: "How to e-verify my ITR?",
    answer: "You can e-verify your ITR within 120 days from the date of filing. You can e-verify using your net banking account or Aadhaar based OTP. A failure to e-verify your ITR can invalidate your ITR filing."
  },
  {
    question: "How to choose a suitable mutual fund for SIP?",
    answer: "You should not select a mutual fund for SIP only by considering the past performance of the fund and fund manager. To choose a suitable mutual fund, you also need to check if the fund’s investment objective is in line with your goals. You can also use our SIP calculator to estimate the return on your mutual fund investments."
  },
  {
    question: "How does ClearOne invoicing software help small businesses?",
    answer: "You can create professional invoices and other business documents easily on mobile app or computer with ClearOne invoicing software. SMEs can also send invoices and payment reminders to customers through WhatsApp and Email with a click of a button."
  }
];

export default Footer;
