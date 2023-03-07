"use client";

import useSWR from "swr";
import Select from "react-select";

const fetchModels = () => fetch("/api/getModels").then((res) => res.json());

function ModelSelection() {
  const { data: models, isLoading } = useSWR("models", fetchModels);
  const { data: model, mutate: setModel } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });

  return (
    <div>
      <Select
        className="mt-2"
        defaultValue={model}
        placeholder={model}
        options={models?.modelOptions}
        isLoading={isLoading}
        isSearchable
        menuPosition="fixed"
        classNames={{
          control: (_) => "bg-[#434654] border-[#434654]",
        }}
        onChange={(e) => setModel(e.value)}
      />
    </div>
  );
}

export default ModelSelection;
