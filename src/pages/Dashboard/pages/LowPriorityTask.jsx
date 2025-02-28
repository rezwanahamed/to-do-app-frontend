import CommonLayout from "../components/CommonLayout";

export default function LowPriorityTask() {
  return (
    <>
      <CommonLayout
        title={"Low priority task"}
        query={"priority"}
        queryTag={"Low"}
      />
    </>
  );
}
