import CreateVote from "@/components/vote/create/CreateVote";
const CreateVotePage = () => {
  return (
    <>
      <canvas
        id={"canvas"}
        style={{
          inset: "0px",
          pointerEvents: "none",
          position: "fixed",
          zIndex: 1000000000,
        }}
        width="958"
        height="100"
      ></canvas>
      <CreateVote />
    </>
  );
};
export default CreateVotePage;
