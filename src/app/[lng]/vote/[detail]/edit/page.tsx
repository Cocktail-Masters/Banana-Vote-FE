const page = ({ params }: any) => {
  console.log(params);
  if (!params.detail) {
    return <div>event id 가 없음</div>;
  }
  return <div>event id 가 있음 {params.detail}</div>;
};
export default page;
