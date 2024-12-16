import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCalculatorStateContext } from "./CalculatorStateContext";
import { useEffect } from "react";

export function CurrencyDropdown() {
  const { currency, setCurrency } = useCalculatorStateContext();
  
  // Load saved currency preference
  useEffect(() => {
    const savedCurrency = localStorage.getItem('preferred_currency');
    if (savedCurrency) {
      setCurrency(savedCurrency as 'USD' | 'EUR' | 'GBP');
    }
  }, [setCurrency]);

  // Save currency preference
  const handleCurrencyChange = (value: string) => {
    setCurrency(value as 'USD' | 'EUR' | 'GBP');
    localStorage.setItem('preferred_currency', value);
  };
  
  return (
    <div className="w-[180px]">
      <Select value={currency} onValueChange={handleCurrencyChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select currency" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="USD">USD ($)</SelectItem>
          <SelectItem value="EUR">EUR (€)</SelectItem>
          <SelectItem value="GBP">GBP (£)</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}