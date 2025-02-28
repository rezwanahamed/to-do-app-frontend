import CommonLayout from "../components/CommonLayout";

export default function PendingTasks() {
  return (
    <>
      <CommonLayout
        title={"Pending Task"}
        query={"status"}
        queryTag={"Pending"}
      />
    </>
  );
}
