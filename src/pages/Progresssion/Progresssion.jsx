import { Line } from "react-chartjs-2";

import { Paper } from "../../components/Paper";

import { configData } from "./chartConfig";

const rewards = [
  {
    text: "Best Runner 2024",
    tooltip: "Highest score on running",
    textColor: "text-yellow-400",
    backgroundColor: "bg-yellow-400",
  },
  {
    text: "You dare challenge me?",
    tooltip: "Win over 100 challenges",
    textColor: "text-pink-700",
    backgroundColor: "bg-pink-700",
  },
  {
    text: "Not even close!",
    tooltip: "Win a challenge by less than a second",
    textColor: "text-green-600",
    backgroundColor: "bg-green-500",
  },
];

export const Progresssion = () => {
  return (
    <div className="grid place-items-center py-5">
      <h1 className="text-2xl font-bold text-center text-white mb-6">
        Your progression
      </h1>
      <Paper className="bg-white lg:w-7/12 m-3">
        <h2 className="text-lg font-semibold">Progression</h2>

        <div className="mt-6 border-t border-gray-100 px-4 py-1 grid grid-cols-1 gap-4 px-0">
          <div className="px-4 py-2 grid grid-cols-1 gap-4 px-0">
            <h4 className="font-medium leading-6 text-gray-900">Rewards</h4>
            <div className="flex gap-2 flex-wrap">
              {rewards.map((reward) => {
                return (
                  <div
                    key={reward.text}
                    className={`rounded-md px-2 py-1 text-xs font-medium ring-1 min-w-fit ${reward.textColor} ${reward.backgroundColor} bg-opacity-5`}
                    title={reward.title}
                  >
                    {reward.text}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="px-4 py-2 grid grid-cols-1 gap-4 px-0">
            <h4 className="font-medium leading-6 text-gray-900">
              Progress Tracker
            </h4>
            <div className="shadow-lg rounded-lg overflow-hidden p-4 h-60">
              <Line
                data={configData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                }}
              />
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
};
