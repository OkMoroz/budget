import React, { useEffect, useState } from "react";

const CurrencyExchange = () => {
  const [baseCurrency, setBaseCurrency] = useState("ГРН");
  const [exchangeRates, setExchangeRates] = useState({});

  const fetchExchangeRates = async () => {
    try {
      const response = await fetch(
        `https://api.exchangeratesapi.io/v1/latest?access_key=ea58ae4a2b7e8d4e2df3006b969ba721`
      );
      const data = await response.json();
      console.log(data); 

      setExchangeRates(data.rates);
    } catch (error) {
      console.error("Помилка при завантаженні курсів валют", error);
    }
  };

  useEffect(() => {
    fetchExchangeRates();
  }, [baseCurrency]);

  return (
    <div>
      <h2>Курси валют</h2>
      <label>
        Оберіть базову валюту:
        <select
          onChange={(e) => setBaseCurrency(e.target.value)}
          value={baseCurrency}
        >
          <option value="USD">Гривня</option>
          <option value="USD">Долар США</option>
          <option value="EUR">Євро</option>
        </select>
      </label>
      <ul>
        {Object.entries(exchangeRates).map(([currency, rate]) => (
          <li key={currency}>
            {currency}: {rate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrencyExchange;
