import { useState } from "react";

const Calculate = () => {
  const [currentExpenses, setCurrentExpenses] = useState("");
  const [retirementAge, setRetirementAge] = useState("");
  const [estimatedSavings, setEstimatedSavings] = useState(null);

  const handleCalculate = () => {
    // TODO
    // - perform proper calculations here based on currentExpenses and retirementAge
    
    // sample calculation for demonstration
    const estimatedSavingsNeeded =
      parseInt(currentExpenses) * parseInt(retirementAge);
    setEstimatedSavings(estimatedSavingsNeeded);
  };

  const handleSaveResults = () => {
    // TODO
    // - add result saving functionality here
    console.log("Results saved!");
  };

  return (
    <div className="flex flex-col items-center justify-center mt-64">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex items-center justify-between gap-x-2 mb-2">
            <label htmlFor="current-expenses">
              <span className="text-lg font-semibold">Current Expenses:</span>
            </label>
            <input
              id="current-expenses"
              type="number"
              value={currentExpenses}
              onChange={(e) => setCurrentExpenses(e.target.value)}
              className="w-64 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-[--ac-4]"
            />
          </div>
          <div className="flex items-center justify-between gap-x-2">
            <label htmlFor="retirement-age">
              <span className="text-lg font-semibold">Retirement Age:</span>
            </label>
            <input
              id="retirement-age"
              type="number"
              value={retirementAge}
              onChange={(e) => setRetirementAge(e.target.value)}
              className="w-64 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-[--ac-4]"
            />
          </div>
        </div>

        <div className="flex items-center justify-evenly gap-x-4">
          <button
            onClick={handleCalculate}
            className="bg-[--ac-5] text-white py-2 px-4 rounded-md shadow-md hover:bg-[--ac-4]"
          >
            Calculate
          </button>
          <button
            onClick={handleSaveResults}
            className="bg-[--ac-3] text-white py-2 px-4 rounded-md shadow-md hover:bg-[--ac-4]"
          >
            Save Results
          </button>
        </div>

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
                <li>
                  Inflation Adjusted Expenses at Retirement: ₹{retirementAge}
                </li>
                {/* more breakdown items */}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculate;
