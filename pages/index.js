import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import { RippleButton } from "../component";

export default function Home() {
  const router = useRouter();
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <h2>Ripple Buttons with Toast</h2>
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          flexDirection: "row",
          height: "40%",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        <RippleButton
          style={{ backgroundColor: "grey" }}
          onclickButton={() => toast.info("Information Toast!")}
          title={"info"}
        />
        <RippleButton
          style={{ backgroundColor: "rgb(21, 160, 3" }}
          onclickButton={() => toast.success("Success Toast!")}
          title={"success"}
        />
        <RippleButton
          style={{ backgroundColor: "red" }}
          onclickButton={() => toast.error("Warning Toast!")}
          title={"error"}
        />
        <RippleButton
          style={{ backgroundColor: "rgb(131, 129, 2)" }}
          onclickButton={() => toast.warning("Warning Toast!")}
          title={"warning"}
        />
      </section>
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          height: "40%",
          width: "100%",
        }}
      >
        <RippleButton
          style={{ alignSelf: "center" }}
          onclickButton={() => router.push("/multiCarousel")}
          title={"Next Page"}
        />
      </section>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
      />
    </div>
  );
}
