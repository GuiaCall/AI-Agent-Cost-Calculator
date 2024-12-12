import { Card } from "@/components/ui/card";

export function FormulaExplanation() {
  return (
    <Card className="p-6 space-y-6 mt-8">
      <h2 className="text-2xl font-heading font-bold text-gray-900">Formula Explanations</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Base Cost Calculation</h3>
          <p className="text-gray-600">
            Base Cost = Σ(Selected Technology Costs per Minute) × Total Minutes
          </p>
          <p className="text-sm text-gray-500 mt-1">
            We sum the cost per minute of each selected technology and multiply by the total minutes.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800">Margin Application</h3>
          <p className="text-gray-600">
            Final Cost = Base Cost × (1 + Margin%)
          </p>
          <p className="text-sm text-gray-500 mt-1">
            The margin percentage is applied to the base cost to determine the final price.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800">Cost Per Minute</h3>
          <p className="text-gray-600">
            Cost Per Minute = Final Cost ÷ Total Minutes
          </p>
          <p className="text-sm text-gray-500 mt-1">
            This gives you the per-minute rate including your margin.
          </p>
        </div>

        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Default Technology Costs</h3>
          <p className="text-sm text-gray-500 mb-2">These are suggested default values. You can customize the costs in the calculator above.</p>
          <ul className="space-y-2 text-gray-600">
            <li>• Vapi: $0.05 per minute</li>
            <li>• Synthflow: $0.03 per minute</li>
            <li>• Twilio: $0.02 per minute</li>
            <li>• Cal.com: $0.01 per minute</li>
            <li>• Make.com: $0.02 per minute</li>
          </ul>
        </div>
      </div>
    </Card>
  );
}