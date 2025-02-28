import CommonLayout from "../components/CommonLayout";

export default function HighPriorityTask() {
  return (
    <>
      <CommonLayout
        title={"High priority task"}
        query={"priority"}
        queryTag={"High"}
      />
    </>
  );
}
