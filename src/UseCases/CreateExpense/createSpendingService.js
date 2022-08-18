const { supabase } = require("../../database/Supabase");

class CreateSpendingService {
  async createSpending(price, date) {
    const data = await supabase.from("MyCat").insert({
      price,
      date,
    });
    return data;
  }
}

module.exports = { CreateSpendingService };
