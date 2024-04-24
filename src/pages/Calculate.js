import React, { useState } from "react";

const Calculate = () => {
  const [calculatorType, setCalculatorType] = useState(null);
  const [estimatedSavings, setEstimatedSavings] = useState(null);
  const [currentExpenses, setCurrentExpenses] = useState("");
  const [retirementAge, setRetirementAge] = useState("");

  // Retirement Savings Calculator
  const RetirementSavingsCalculator = () => {
    const [currentSavings, setCurrentSavings] = useState("");
    const [monthlyContribution, setMonthlyContribution] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [yearsToRetirement, setYearsToRetirement] = useState("");
    const [estimatedSavingsNeeded, setEstimatedSavingsNeeded] = useState(null);

    const handleCalculateRetirement = () => {
      const monthlyInterestRate = interestRate / 100 / 12;
      const monthsToRetirement = yearsToRetirement * 12;
      let futureValue = currentSavings;
      for (let i = 0; i < monthsToRetirement; i++) {
        futureValue = (futureValue * (1 + monthlyInterestRate)) + (monthlyContribution * (1 + monthlyInterestRate));
      }
      setEstimatedSavingsNeeded(futureValue);
    };

    return (
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center justify-between gap-x-2 mb-2">
          <label htmlFor="current-savings">
            <span className="text-lg font-semibold">Current Savings:</span>
          </label>
          <input
            id="current-savings"
            type="number"
            value={currentSavings}
            onChange={(e) => setCurrentSavings(e.target.value)}
            className="w-64 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
          />
        </div>
        {/* Other input fields go here */}
        <button
          onClick={handleCalculateRetirement}
          className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600"
        >
          Calculate
        </button>
        {estimatedSavingsNeeded !== null && (
          <div className="bg-gray-100 p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">Results Display</h2>
            <p className="text-2xl font-bold">
              Estimated Retirement Savings Needed:
            </p>
            <p className="text-3xl font-bold mb-4">₹{estimatedSavingsNeeded.toFixed(2)}</p>
          </div>
        )}
      </div>
    );
  };

  // Investment Growth Calculator
  const InvestmentGrowthCalculator = () => {
    const [initialInvestment, setInitialInvestment] = useState("");
    const [monthlyContribution, setMonthlyContribution] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [investmentPeriod, setInvestmentPeriod] = useState("");
    const [totalValue, setTotalValue] = useState(null);

    const handleCalculate = () => {
      const monthlyInterestRate = interestRate / 100 / 12;
      const months = investmentPeriod * 12;
      let futureValue = initialInvestment;
      for (let i = 0; i < months; i++) {
        futureValue = (futureValue * (1 + monthlyInterestRate)) + monthlyContribution;
      }
      setTotalValue(futureValue);
    };

    return (
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center justify-between gap-x-2 mb-2">
          <label htmlFor="initial-investment">
            <span className="text-lg font-semibold">Initial Investment:</span>
          </label>
          <input
            id="initial-investment"
            type="number"
            value={initialInvestment}
            onChange={(e) => setInitialInvestment(e.target.value)}
            className="w-64 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
          />
        </div>
        <div className="flex items-center justify-between gap-x-2 mb-2">
          <label htmlFor="monthly-contribution">
            <span className="text-lg font-semibold">Monthly Contribution:</span>
          </label>
          <input
            id="monthly-contribution"
            type="number"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(e.target.value)}
            className="w-64 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
          />
        </div>
        <div className="flex items-center justify-between gap-x-2 mb-2">
          <label htmlFor="interest-rate">
            <span className="text-lg font-semibold">Interest Rate (%):</span>
          </label>
          <input
            id="interest-rate"
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-64 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
          />
        </div>
        <div className="flex items-center justify-between gap-x-2 mb-2">
          <label htmlFor="investment-period">
            <span className="text-lg font-semibold">Investment Period (years):</span>
          </label>
          <input
            id="investment-period"
            type="number"
            value={investmentPeriod}
            onChange={(e) => setInvestmentPeriod(e.target.value)}
            className="w-64 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
          />
        </div>
        <button
          onClick={handleCalculate}
          className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600"
        >
          Calculate
        </button>
        {totalValue !== null && (
          <div className="bg-gray-100 p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">Results Display</h2>
            <p className="text-2xl font-bold">Total Value after Investment:</p>
            <p className="text-3xl font-bold mb-4">₹{totalValue.toFixed(2)}</p>
          </div>
        )}
      </div>
    );
  };


  // Loan Repayment Calculator
  const LoanRepaymentCalculator = () => {
    const [loanAmount, setLoanAmount] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [loanTerm, setLoanTerm] = useState("");
    const [monthlyPayment, setMonthlyPayment] = useState(null);

    const handleCalculate = () => {
      const monthlyInterestRate = interestRate / 100 / 12;
      const numberOfPayments = loanTerm * 12;
      const discountFactor = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;
      const monthlyPaymentValue = loanAmount * monthlyInterestRate / discountFactor;
      setMonthlyPayment(monthlyPaymentValue);
    };

    return (
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center justify-between gap-x-2 mb-2">
          <label htmlFor="loan-amount">
            <span className="text-lg font-semibold">Loan Amount:</span>
          </label>
          <input
            id="loan-amount"
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="w-64 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
          />
        </div>
        <div className="flex items-center justify-between gap-x-2 mb-2">
          <label htmlFor="interest-rate">
            <span className="text-lg font-semibold">Interest Rate (%):</span>
          </label>
          <input
            id="interest-rate"
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-64 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
          />
        </div>
        <div className="flex items-center justify-between gap-x-2 mb-2">
          <label htmlFor="loan-term">
            <span className="text-lg font-semibold">Loan Term (years):</span>
          </label>
          <input
            id="loan-term"
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            className="w-64 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
          />
        </div>
        <button
          onClick={handleCalculate}
          className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600"
        >
          Calculate
        </button>
        {monthlyPayment !== null && (
          <div className="bg-gray-100 p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">Results Display</h2>
            <p className="text-2xl font-bold">Monthly Payment:</p>
            <p className="text-3xl font-bold mb-4">₹{monthlyPayment.toFixed(2)}</p>
          </div>
        )}
      </div>
    );
  };


  // Mortgage Affordability Calculator
  const MortgageAffordabilityCalculator = () => {
    const [monthlyIncome, setMonthlyIncome] = useState("");
    const [monthlyDebt, setMonthlyDebt] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [loanTerm, setLoanTerm] = useState("");
    const [affordableAmount, setAffordableAmount] = useState(null);

    const handleCalculate = () => {
      const monthlyInterestRate = interestRate / 100 / 12;
      const numberOfPayments = loanTerm * 12;
      const affordableMonthlyPayment = monthlyIncome * 0.28 - monthlyDebt;
      const discountFactor = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;
      const affordableLoanAmount = affordableMonthlyPayment * discountFactor / monthlyInterestRate;
      setAffordableAmount(affordableLoanAmount);
    };

    return (
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center justify-between gap-x-2 mb-2">
          <label htmlFor="monthly-income">
            <span className="text-lg font-semibold">Monthly Income:</span>
          </label>
          <input
            id="monthly-income"
            type="number"
            value={monthlyIncome}
            onChange={(e) => setMonthlyIncome(e.target.value)}
            className="w-64 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
          />
        </div>
        <div className="flex items-center justify-between gap-x-2 mb-2">
          <label htmlFor="monthly-debt">
            <span className="text-lg font-semibold">Monthly Debt:</span>
          </label>
          <input
            id="monthly-debt"
            type="number"
            value={monthlyDebt}
            onChange={(e) => setMonthlyDebt(e.target.value)}
            className="w-64 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
          />
        </div>
        <div className="flex items-center justify-between gap-x-2 mb-2">
          <label htmlFor="interest-rate">
            <span className="text-lg font-semibold">Interest Rate (%):</span>
          </label>
          <input
            id="interest-rate"
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-64 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
          />
        </div>
        <div className="flex items-center justify-between gap-x-2 mb-2">
          <label htmlFor="loan-term">
            <span className="text-lg font-semibold">Loan Term (years):</span>
          </label>
          <input
            id="loan-term"
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            className="w-64 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
          />
        </div>
        <button
          onClick={handleCalculate}
          className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600"
        >
          Calculate
        </button>
        {affordableAmount !== null && (
          <div className="bg-gray-100 p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">Results Display</h2>
            <p className="text-2xl font-bold">Affordable Mortgage Amount:</p>
            <p className="text-3xl font-bold mb-4">₹{affordableAmount.toFixed(2)}</p>
          </div>
        )}
      </div>
    );
  };


  // Debt Payoff Calculator
  const DebtPayoffCalculator = () => {
    const [currentDebt, setCurrentDebt] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [monthlyPayment, setMonthlyPayment] = useState("");
    const [payoffPeriod, setPayoffPeriod] = useState(null);

    const handleCalculate = () => {
      const monthlyInterestRate = interestRate / 100 / 12;
      const numberOfPayments = Math.log(monthlyPayment / (monthlyPayment - currentDebt * monthlyInterestRate)) / Math.log(1 + monthlyInterestRate);
      setPayoffPeriod(Math.ceil(numberOfPayments));
    };

    return (
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center justify-between gap-x-2 mb-2">
          <label htmlFor="current-debt">
            <span className="text-lg font-semibold">Current Debt:</span>
          </label>
          <input
            id="current-debt"
            type="number"
            value={currentDebt}
            onChange={(e) => setCurrentDebt(e.target.value)}
            className="w-64 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
          />
        </div>
        <div className="flex items-center justify-between gap-x-2 mb-2">
          <label htmlFor="interest-rate">
            <span className="text-lg font-semibold">Interest Rate (%):</span>
          </label>
          <input
            id="interest-rate"
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-64 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
          />
        </div>
        <div className="flex items-center justify-between gap-x-2 mb-2">
          <label htmlFor="monthly-payment">
            <span className="text-lg font-semibold">Monthly Payment:</span>
          </label>
          <input
            id="monthly-payment"
            type="number"
            value={monthlyPayment}
            onChange={(e) => setMonthlyPayment(e.target.value)}
            className="w-64 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
          />
        </div>
        <button
          onClick={handleCalculate}
          className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600"
        >
          Calculate
        </button>
        {payoffPeriod !== null && (
          <div className="bg-gray-100 p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">Results Display</h2>
            <p className="text-2xl font-bold">Payoff Period:</p>
            <p className="text-3xl font-bold mb-4">{payoffPeriod} months</p>
          </div>
        )}
      </div>
    );
  };


  // Savings Goal Calculator
  const SavingsGoalCalculator = () => {
    const [currentSavings, setCurrentSavings] = useState("");
    const [monthlyContribution, setMonthlyContribution] = useState("");
    const [goalAmount, setGoalAmount] = useState("");
    const [timeToGoal, setTimeToGoal] = useState(null);

    const handleCalculate = () => {
      const remainingAmount = goalAmount - currentSavings;
      const monthsToGoal = Math.ceil(remainingAmount / monthlyContribution);
      setTimeToGoal(monthsToGoal);
    };

    return (
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center justify-between gap-x-2 mb-2">
          <label htmlFor="current-savings">
            <span className="text-lg font-semibold">Current Savings:</span>
          </label>
          <input
            id="current-savings"
            type="number"
            value={currentSavings}
            onChange={(e) => setCurrentSavings(e.target.value)}
            className="w-64 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
          />
        </div>
        <div className="flex items-center justify-between gap-x-2 mb-2">
          <label htmlFor="monthly-contribution">
            <span className="text-lg font-semibold">Monthly Contribution:</span>
          </label>
          <input
            id="monthly-contribution"
            type="number"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(e.target.value)}
            className="w-64 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
          />
        </div>
        <div className="flex items-center justify-between gap-x-2 mb-2">
          <label htmlFor="goal-amount">
            <span className="text-lg font-semibold">Goal Amount:</span>
          </label>
          <input
            id="goal-amount"
            type="number"
            value={goalAmount}
            onChange={(e) => setGoalAmount(e.target.value)}
            className="w-64 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
          />
        </div>
        <button
          onClick={handleCalculate}
          className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600"
        >
          Calculate
        </button>
        {timeToGoal !== null && (
          <div className="bg-gray-100 p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">Results Display</h2>
            <p className="text-2xl font-bold">Time to Reach Goal:</p>
            <p className="text-3xl font-bold mb-4">{timeToGoal} months</p>
          </div>
        )}
      </div>
    );
  };


  // Emergency Fund Calculator
  const EmergencyFundCalculator = () => {
    const [monthlyExpenses, setMonthlyExpenses] = useState("");
    const [emergencyFundMonths, setEmergencyFundMonths] = useState("");
    const [emergencyFund, setEmergencyFund] = useState(null);

    const handleCalculate = () => {
      const totalEmergencyFund = monthlyExpenses * emergencyFundMonths;
      setEmergencyFund(totalEmergencyFund);
    };

    return (
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center justify-between gap-x-2 mb-2">
          <label htmlFor="monthly-expenses">
            <span className="text-lg font-semibold">Monthly Expenses:</span>
          </label>
          <input
            id="monthly-expenses"
            type="number"
            value={monthlyExpenses}
            onChange={(e) => setMonthlyExpenses(e.target.value)}
            className="w-64 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
          />
        </div>
        <div className="flex items-center justify-between gap-x-2 mb-2">
          <label htmlFor="emergency-fund-months">
            <span className="text-lg font-semibold">Emergency Fund Months:</span>
          </label>
          <input
            id="emergency-fund-months"
            type="number"
            value={emergencyFundMonths}
            onChange={(e) => setEmergencyFundMonths(e.target.value)}
            className="w-64 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
          />
        </div>
        <button
          onClick={handleCalculate}
          className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600"
        >
          Calculate
        </button>
        {emergencyFund !== null && (
          <div className="bg-gray-100 p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">Results Display</h2>
            <p className="text-2xl font-bold">Emergency Fund Needed:</p>
            <p className="text-3xl font-bold mb-4">₹{emergencyFund}</p>
          </div>
        )}
      </div>
    );
  };


  // College Savings Calculator
  const CollegeSavingsCalculator = () => {
    const [yearsToSave, setYearsToSave] = useState("");
    const [annualCost, setAnnualCost] = useState("");
    const [currentSavings, setCurrentSavings] = useState("");
    const [expectedReturn, setExpectedReturn] = useState("");
    const [totalSavings, setTotalSavings] = useState(null);

    const handleCalculate = () => {
      const totalYears = parseFloat(yearsToSave);
      const totalMonths = totalYears * 12;
      const monthlyCost = parseFloat(annualCost) / 12;
      const monthlyReturnRate = parseFloat(expectedReturn) / 100 / 12;
      const futureValue = currentSavings * Math.pow((1 + monthlyReturnRate), totalMonths) +
        monthlyCost * ((Math.pow((1 + monthlyReturnRate), totalMonths) - 1) / monthlyReturnRate);
      setTotalSavings(futureValue.toFixed(2));
    };

    return (
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center justify-between gap-x-2 mb-2">
          <label htmlFor="years-to-save">
            <span className="text-lg font-semibold">Years to Save:</span>
          </label>
          <input
            id="years-to-save"
            type="number"
            value={yearsToSave}
            onChange={(e) => setYearsToSave(e.target.value)}
            className="w-64 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
          />
        </div>
        <div className="flex items-center justify-between gap-x-2 mb-2">
          <label htmlFor="annual-cost">
            <span className="text-lg font-semibold">Annual College Cost:</span>
          </label>
          <input
            id="annual-cost"
            type="number"
            value={annualCost}
            onChange={(e) => setAnnualCost(e.target.value)}
            className="w-64 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
          />
        </div>
        <div className="flex items-center justify-between gap-x-2 mb-2">
          <label htmlFor="current-savings">
            <span className="text-lg font-semibold">Current Savings:</span>
          </label>
          <input
            id="current-savings"
            type="number"
            value={currentSavings}
            onChange={(e) => setCurrentSavings(e.target.value)}
            className="w-64 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
          />
        </div>
        <div className="flex items-center justify-between gap-x-2 mb-2">
          <label htmlFor="expected-return">
            <span className="text-lg font-semibold">Expected Return (%):</span>
          </label>
          <input
            id="expected-return"
            type="number"
            value={expectedReturn}
            onChange={(e) => setExpectedReturn(e.target.value)}
            className="w-64 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
          />
        </div>
        <button
          onClick={handleCalculate}
          className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600"
        >
          Calculate
        </button>
        {totalSavings !== null && (
          <div className="bg-gray-100 p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">Results Display</h2>
            <p className="text-2xl font-bold">Total Savings:</p>
            <p className="text-3xl font-bold mb-4">₹{totalSavings}</p>
          </div>
        )}
      </div>
    );
  };


  // Tax Estimator
  const TaxEstimator = () => {
    const [income, setIncome] = useState("");
    const [deductions, setDeductions] = useState("");
    const [taxableIncome, setTaxableIncome] = useState(null);

    const handleCalculate = () => {
      const taxable = parseFloat(income) - parseFloat(deductions);
      setTaxableIncome(taxable);
    };

    return (
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center justify-between gap-x-2 mb-2">
          <label htmlFor="income">
            <span className="text-lg font-semibold">Income:</span>
          </label>
          <input
            id="income"
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className="w-64 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
          />
        </div>
        <div className="flex items-center justify-between gap-x-2 mb-2">
          <label htmlFor="deductions">
            <span className="text-lg font-semibold">Deductions:</span>
          </label>
          <input
            id="deductions"
            type="number"
            value={deductions}
            onChange={(e) => setDeductions(e.target.value)}
            className="w-64 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
          />
        </div>
        <button
          onClick={handleCalculate}
          className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600"
        >
          Calculate
        </button>
        {taxableIncome !== null && (
          <div className="bg-gray-100 p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">Results Display</h2>
            <p className="text-2xl font-bold">Taxable Income:</p>
            <p className="text-3xl font-bold mb-4">₹{taxableIncome}</p>
          </div>
        )}
      </div>
    );
  };


  // Budget Planner
  const BudgetPlanner = () => {
    const [totalIncome, setTotalIncome] = useState("");
    const [totalExpenses, setTotalExpenses] = useState("");
    const [remainingBudget, setRemainingBudget] = useState(null);

    const handleCalculate = () => {
      const remaining = parseFloat(totalIncome) - parseFloat(totalExpenses);
      setRemainingBudget(remaining);
    };

    return (
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center justify-between gap-x-2 mb-2">
          <label htmlFor="total-income">
            <span className="text-lg font-semibold">Total Income:</span>
          </label>
          <input
            id="total-income"
            type="number"
            value={totalIncome}
            onChange={(e) => setTotalIncome(e.target.value)}
            className="w-64 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
          />
        </div>
        <div className="flex items-center justify-between gap-x-2 mb-2">
          <label htmlFor="total-expenses">
            <span className="text-lg font-semibold">Total Expenses:</span>
          </label>
          <input
            id="total-expenses"
            type="number"
            value={totalExpenses}
            onChange={(e) => setTotalExpenses(e.target.value)}
            className="w-64 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
          />
        </div>
        <button
          onClick={handleCalculate}
          className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600"
        >
          Calculate
        </button>
        {remainingBudget !== null && (
          <div className="bg-gray-100 p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">Results Display</h2>
            <p className="text-2xl font-bold">Remaining Budget:</p>
            <p className="text-3xl font-bold mb-4">₹{remainingBudget}</p>
          </div>
        )}
      </div>
    );
  };

  const handleCalculate = () => {
    // Perform calculations based on the selected calculator type
    // For demonstration purpose, let's just log a message
    console.log("Calculations performed.");
  };

  const handleSaveResults = () => {
    // Save results functionality
    console.log("Results saved!");
  };

  const renderCalculator = () => {
    switch (calculatorType) {
      case "retirement":
        return <RetirementSavingsCalculator />;
      case "investment":
        return <InvestmentGrowthCalculator />;
      case "loan":
        return <LoanRepaymentCalculator />;
      case "mortgage":
        return <MortgageAffordabilityCalculator />;
      case "debt":
        return <DebtPayoffCalculator />;
      case "savings":
        return <SavingsGoalCalculator />;
      case "emergency":
        return <EmergencyFundCalculator />;
      case "college":
        return <CollegeSavingsCalculator />;
      case "tax":
        return <TaxEstimator />;
      case "budget":
        return <BudgetPlanner />;
      default:
        return null;
    }
  };


  return (
    <div className="flex flex-col items-center justify-around mt-64">
      <div className="flex items-center w-full px-64">
        {/* Calculator type buttons */}
        <div className="flex flex-col justify-center mb-4 gap-y-2 w-1/5">
          <button
            onClick={() => setCalculatorType("retirement")}
            className="bg-[--ac-5] text-white py-2 px-4 rounded-md shadow-md hover:bg-[--ac-4]"
          >
            Retirement Savings
          </button>
          <button
            onClick={() => setCalculatorType("investment")}
            className="bg-[--ac-5] text-white py-2 px-4 rounded-md shadow-md hover:bg-[--ac-4]"
          >
            Investment Growth
          </button>
          <button
            onClick={() => setCalculatorType("loan")}
            className="bg-[--ac-5] text-white py-2 px-4 rounded-md shadow-md hover:bg-[--ac-4]"
          >
            Loan Repayment
          </button>
          <button
            onClick={() => setCalculatorType("mortgage")}
            className="bg-[--ac-5] text-white py-2 px-4 rounded-md shadow-md hover:bg-[--ac-4]"
          >
            Mortgage Affordability
          </button>
          <button
            onClick={() => setCalculatorType("debt")}
            className="bg-[--ac-5] text-white py-2 px-4 rounded-md shadow-md hover:bg-[--ac-4]"
          >
            Debt Payoff
          </button>
          <button
            onClick={() => setCalculatorType("savings")}
            className="bg-[--ac-5] text-white py-2 px-4 rounded-md shadow-md hover:bg-[--ac-4]"
          >
            Savings Goal
          </button>
          <button
            onClick={() => setCalculatorType("emergency")}
            className="bg-[--ac-5] text-white py-2 px-4 rounded-md shadow-md hover:bg-[--ac-4]"
          >
            Emergency Fund
          </button>
          <button
            onClick={() => setCalculatorType("college")}
            className="bg-[--ac-5] text-white py-2 px-4 rounded-md shadow-md hover:bg-[--ac-4]"
          >
            College Savings
          </button>
          <button
            onClick={() => setCalculatorType("tax")}
            className="bg-[--ac-5] text-white py-2 px-4 rounded-md shadow-md hover:bg-[--ac-4]"
          >
            Tax Estimator
          </button>
          <button
            onClick={() => setCalculatorType("budget")}
            className="bg-[--ac-5] text-white py-2 px-4 rounded-md shadow-md hover:bg-[--ac-4]"
          >
            Budget Planner
          </button>
        </div>

        <div className="main-body-container w-4/5">
          {renderCalculator()}

          {/* Calculate and Save buttons */}
          <div className="flex items-center justify-evenly gap-x-4 pt-2">
            <button
              onClick={handleSaveResults}
              className="bg-[--ac-3] text-white py-2 px-4 rounded-md shadow-md hover:bg-[--ac-4]"
            >
              Save Results
            </button>
          </div>

          {/* Results Display */}
          {estimatedSavings !== null && (
            <div className="bg-gray-100 p-6 rounded-md shadow-md">
              <h2 className="text-xl font-semibold mb-4">Results Display</h2>
              <p className="text-2xl font-bold">
                Estimated Retirement Savings Needed:
              </p>
              <p className="text-3xl font-bold mb-4">₹{estimatedSavings}</p>
              <div>
                <p>Breakdown:</p>
                <ul>
                  <li>Current Expenses: ₹{currentExpenses}</li>
                  <li>Inflation Adjusted Expenses at Retirement: ₹{retirementAge}</li>
                  {/* more breakdown items */}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calculate;
