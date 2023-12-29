const RECIPIENT_DETAILS = document.getElementById("recipientDetails");
const TRANSACTION_TYPE = document.getElementById("transactionType");
const TRANSACTION_NUMBER = document.getElementById("transactionNumber");
const TRANSACTION_DATE = document.getElementById("transactionDate");
const PAYMENT_STATUS = document.getElementById("paymentStatus");
const AMOUNT = document.getElementById("paymentAmount");

const TOP_PAYMENT_AMOUNT = document.getElementById("paymentAmount");
const TOP_USERS_NAME = document.getElementById("users-name");

const urlParams = new URLSearchParams(window.location.search);
const queryTransactionId = urlParams.get("transactionId");

console.log(queryTransactionId);
// if (!queryTransactionId) return;
fetch(`https://bad-beige.cmd.outerbase.io/transaction/${queryTransactionId}`)
  .then((data) => data.json())
  .then((resp) => {
    console.log(resp);
    const {
      id,
      payment_amount,
      recipient_details,
      transaction_date,
      transaction_number,
      transaction_type,
      payment_status,
    } = resp;
    RECIPIENT_DETAILS.innerText = recipient_details;
    TRANSACTION_DATE.innerText = transaction_date;
    TRANSACTION_NUMBER.innerText = transaction_number;
    TRANSACTION_TYPE.innerText = transaction_type;
    AMOUNT.innerText = "$" + payment_amount;
    PAYMENT_STATUS.innerText = payment_status;
    TOP_PAYMENT_AMOUNT.innerText = "$" + payment_amount;
    TOP_USERS_NAME.innerText = recipient_details;
  });
