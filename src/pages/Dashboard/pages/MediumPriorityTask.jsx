import CommonLayout from "../components/CommonLayout";

export default function MediumPriorityTask() {
  return (
    <CommonLayout
      title={"Medium priority task"}
      query={"priority"}
      queryTag={"Medium"}
    />
  );
}
