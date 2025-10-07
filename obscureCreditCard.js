//  Obscure credit card numbers except the last 4 digits
//  Input: 123456789012
//  Output: XXXXXXXX9012

const obscureCreditCard = (card) => {
    const len = card.length;

    if (len < 12 || len > 16) return "Invalid Credit Card";

    return "X".repeat(len - 4) + card.slice(-4);
  };
  
  module.exports = obscureCreditCard;