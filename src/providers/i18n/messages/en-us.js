import { LOCALES } from "../constants";

export default {
  [LOCALES.ENGLISH]: {
    menu: {
      home: "Home",
      settings: "Settings",
      about: "About app",
    },
    about: {
      description: "This is a financial management app. It will help you:",
      feature1: "Track expenses and income.",
      feature2: "Add or delete transactions conveniently.",
      feature3: "Customize financial parameters of your choice.",
    },
    settings: {
      language: "Language",
      ukrainian: "Ukrainian",
      english: "English",
      currency: "Currency",
      hryvnia: "Hryvnia",
      usd: "US Dollar",
      euro: "Euro",
      currencyExchange: "Currency Exchange",
    },
    form: {
      amount: "Amount",
      save: "SAVE",
    },
    income: {
      title: "INCOME",
      salary: "SALARY",
      gifts: "GIFTS",
      other: "OTHER INCOME",
    },
    expense: {
      title: "EXPENSES",
      products: "PRODUCTS",
      health: "HEALTH",
      home: "HOME",
      education: "EDUCATION",
      transport: "TRANSPORT",
      leisure: "LEISURE",
      pets: "PETS",
      gifts: "GIFTS",
      other: "OTHER EXPENSES",
    },
  },
};
