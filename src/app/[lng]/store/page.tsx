/**
 * @author mingyu
 */
import StoreSection from "@/components/store/StoreSection";
import HydratedStore from "./hydratedStore";

const Store = () => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <HydratedStore>
        <div className="flex flex-col items-center justify-start">
          <StoreSection />
        </div>
      </HydratedStore>
    </>
  );
};
export default Store;
